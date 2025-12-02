import streamlit as st
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from datetime import datetime
from sqlalchemy import create_engine
import psycopg2

# Page config
st.set_page_config(
    page_title="SpaceParts Analytics | Fayder Arroyo",
    page_icon="🚀",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS for dark theme matching the website
st.markdown("""
<style>
    .main {
        background-color: #0f172a;
    }
    .stMetric {
        background-color: #1e293b;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid rgba(255,255,255,0.1);
    }
    .stMetric label {
        color: #94a3b8 !important;
    }
    .stMetric .metric-value {
        color: #22c55e !important;
    }
    h1, h2, h3 {
        color: #f8fafc !important;
    }
</style>
""", unsafe_allow_html=True)

@st.cache_resource
def get_db_connection():
    """Create database connection from Streamlit secrets"""
    try:
        db_config = st.secrets["database"]
        engine = create_engine(
            f"postgresql://{db_config['user']}:{db_config['password']}@"
            f"{db_config['host']}:{db_config['port']}/{db_config['database']}"
        )
        return engine
    except Exception as e:
        st.error(f"Error connecting to database: {str(e)}")
        return None

@st.cache_data(ttl=3600)
def load_all_data():
    """Load data from PostgreSQL database"""
    engine = get_db_connection()
    
    if engine is None:
        return None, None, None, None
    
    with st.spinner("Cargando datos desde la base de datos..."):
        conn = None
        try:
            # Establish a connection explicitly to manage transactions
            conn = engine.connect()
            
            # Load dimension tables (small)
            customers = pd.read_sql("SELECT * FROM customers", conn)
            products = pd.read_sql("SELECT * FROM products", conn)
            
            # Load fact tables - all available data
            invoices = pd.read_sql("""
                SELECT 
                    billing_date, ship_date, otd_indicator,
                    net_invoice_value, net_invoice_cogs, net_invoice_quantity,
                    customer_key, product_key
                FROM invoices
            """, conn)
            
            orders = pd.read_sql("""
                SELECT 
                    order_date, billing_date, ship_date,
                    net_order_value, net_order_quantity,
                    customer_key, product_key
                FROM orders
            """, conn)
            
            # Convert data types
            invoices['net_invoice_value'] = pd.to_numeric(invoices['net_invoice_value'], errors='coerce')
            invoices['net_invoice_cogs'] = pd.to_numeric(invoices['net_invoice_cogs'], errors='coerce')
            invoices['net_invoice_quantity'] = pd.to_numeric(invoices['net_invoice_quantity'], errors='coerce')
            orders['net_order_value'] = pd.to_numeric(orders['net_order_value'], errors='coerce')
            orders['net_order_quantity'] = pd.to_numeric(orders['net_order_quantity'], errors='coerce')
            
            return customers, products, orders, invoices
            
        except Exception as e:
            st.error(f"Error loading data: {str(e)}")
            # Attempt rollback if connection is active
            if conn:
                try:
                    from sqlalchemy import text
                    conn.execute(text("ROLLBACK"))
                except Exception:
                    pass
            return None, None, None, None
        finally:
            if conn:
                conn.close()

def calculate_kpis(invoices_df):
    """Calculate main KPIs"""
    total_sales = invoices_df['net_invoice_value'].sum()
    total_cogs = invoices_df['net_invoice_cogs'].sum()
    gross_margin = total_sales - total_cogs
    margin_pct = (gross_margin / total_sales * 100) if total_sales > 0 else 0
    
    # OTD calculation (On-Time Delivery)
    if 'otd_indicator' in invoices_df.columns:
        otd_pct = (invoices_df['otd_indicator'].sum() / len(invoices_df) * 100) if len(invoices_df) > 0 else 0
    else:
        otd_pct = 0
    
    total_orders = len(invoices_df)
    
    return {
        'total_sales': total_sales,
        'margin_pct': margin_pct,
        'otd_pct': otd_pct,
        'total_orders': total_orders
    }

def main():
    # Header
    st.title("🚀 SpaceParts Business Intelligence")
    st.markdown("### Dashboard Interactivo | Fayder Arroyo")
    st.markdown("---")
    
    # Load data
    customers, products, orders, invoices = load_all_data()
    
    if invoices is None:
        st.error("No se pudieron cargar los datos. Verifica la conexión con la base de datos.")
        st.info("Asegúrate de configurar las credenciales en `.streamlit/secrets.toml`")
        return
    
    # Check if data is empty
    if len(invoices) == 0:
        st.warning("⚠️ No hay datos de facturas en la base de datos. Asegúrate de haber importado los archivos CSV.")
        return
    
    # Filters Section in Sidebar
    st.sidebar.markdown("## 🔍 Filtros")
    
    # Merge invoices with products and customers for filtering
    if products is not None and 'product_key' in invoices.columns and 'product_key' in products.columns:
        invoices = invoices.merge(
            products[['product_key', 'part_ship_class', 'sub_brand_name']], 
            on='product_key', 
            how='left'
        )
    
    if customers is not None and 'customer_key' in invoices.columns:
        invoices = invoices.merge(
            customers[['customer_key', 'station']], 
            on='customer_key', 
            how='left'
        )
    
    # Convert billing_date to datetime
    if 'billing_date' in invoices.columns:
        invoices['billing_date'] = pd.to_datetime(invoices['billing_date'])
    
    # Part Ship Class filter
    if 'part_ship_class' in invoices.columns:
        ship_classes = sorted(invoices['part_ship_class'].dropna().unique())
        selected_classes = st.sidebar.multiselect(
            "📦 Part Ship Class",
            options=ship_classes,
            default=ship_classes,
            key="ship_class_filter"
        )
        if selected_classes:
            invoices = invoices[invoices['part_ship_class'].isin(selected_classes)]
    
    # Date Range filter
    if 'billing_date' in invoices.columns:
        min_date = invoices['billing_date'].min().date()
        max_date = invoices['billing_date'].max().date()
        
        date_range = st.sidebar.date_input(
            "📅 Rango de Fechas",
            value=(min_date, max_date),
            min_value=min_date,
            max_value=max_date,
            key="date_range_filter"
        )
        
        if len(date_range) == 2:
            start_date, end_date = date_range
            invoices = invoices[
                (invoices['billing_date'].dt.date >= start_date) & 
                (invoices['billing_date'].dt.date <= end_date)
            ]
    
    # Top Stations filter
    if 'station' in invoices.columns:
        # Calculate top stations from current filtered data
        station_sales = invoices.groupby('station', as_index=False)['net_invoice_value'].sum()
        top_stations_list = station_sales.nlargest(10, 'net_invoice_value')['station'].tolist()
        all_stations = sorted(invoices['station'].dropna().unique())
        
        selected_stations = st.sidebar.multiselect(
            "🏢 Estaciones (Top 10 por defecto)",
            options=all_stations,
            default=top_stations_list,
            key="station_filter"
        )
        
        if selected_stations:
            invoices = invoices[invoices['station'].isin(selected_stations)]
    
    st.sidebar.markdown("---")
    
    # Calculate KPIs
    kpis = calculate_kpis(invoices)
    
    # KPI Cards
    col1, col2, col3, col4 = st.columns(4)
    
    with col1:
        st.metric("💰 Total Sales", f"${kpis['total_sales']/1e6:.1f}M")
    with col2:
        st.metric("📊 Margin %", f"{kpis['margin_pct']:.1f}%")
    with col3:
        st.metric("🎯 OTD %", f"{kpis['otd_pct']:.1f}%")
    with col4:
        st.metric("📦 Orders", f"{kpis['total_orders']:,}")
    
    st.markdown("---")
    
    # Charts Row 1
    col1, col2 = st.columns(2)
    
    with col1:
        st.subheader("💰 Sales Over Time")
        if 'billing_date' in invoices.columns:
            monthly_data = invoices.groupby(invoices['billing_date'].dt.to_period('M')).agg({
                'net_invoice_value': 'sum',
                'net_invoice_cogs': 'sum'
            }).reset_index()
            monthly_data['billing_date'] = monthly_data['billing_date'].astype(str)
            monthly_data['margin'] = monthly_data['net_invoice_value'] - monthly_data['net_invoice_cogs']
            
            fig = go.Figure()
            fig.add_trace(go.Bar(name='Sales', x=monthly_data['billing_date'], y=monthly_data['net_invoice_value'], marker_color='#22c55e'))
            fig.add_trace(go.Bar(name='COGS', x=monthly_data['billing_date'], y=monthly_data['net_invoice_cogs'], marker_color='#3b82f6'))
            
            fig.update_layout(barmode='group', title="Monthly Sales vs COGS", template="plotly_dark")
            st.plotly_chart(fig, use_container_width=True)
    
    with col2:
        st.subheader("🏆 Top Stations")
        if 'station' in invoices.columns:
            top_stations = invoices.groupby('station')['net_invoice_value'].sum().nlargest(10).reset_index()
            
            fig = px.bar(
                top_stations, x='net_invoice_value', y='station', orientation='h',
                title="Top 10 Stations by Sales", template="plotly_dark", color_discrete_sequence=['#22c55e']
            )
            fig.update_layout(yaxis={'categoryorder':'total ascending'})
            st.plotly_chart(fig, use_container_width=True)
    
    # Charts Row 2
    col1, col2 = st.columns(2)
    
    with col1:
        st.subheader("🚦 Margin Health")
        current_margin = kpis['margin_pct']
        
        fig = go.Figure(go.Indicator(
            mode = "gauge+number",
            value = current_margin,
            title = {'text': "Overall Margin %"},
            gauge = {
                'axis': {'range': [0, 60]},
                'bar': {'color': "white"},
                'steps': [
                    {'range': [0, 40], 'color': "#ef4444"},
                    {'range': [40, 42], 'color': "#eab308"},
                    {'range': [42, 100], 'color': "#22c55e"}
                ]
            }
        ))
        fig.update_layout(template="plotly_dark")
        st.plotly_chart(fig, use_container_width=True)
    
    with col2:
        st.subheader("📊 Product Performance")
        if 'sub_brand_name' in invoices.columns:
            # Aggregate by product: total sales vs margin %
            product_perf = invoices.groupby('sub_brand_name').agg({
                'net_invoice_value': 'sum',
                'net_invoice_cogs': 'sum'
            }).reset_index()
            
            product_perf['margin_pct'] = ((product_perf['net_invoice_value'] - product_perf['net_invoice_cogs']) / product_perf['net_invoice_value'] * 100).fillna(0)
            product_perf['sales_millions'] = product_perf['net_invoice_value'] / 1e6
            
            # Filter top products by sales
            product_perf = product_perf.nlargest(20, 'net_invoice_value')
            
            fig = px.scatter(
                product_perf,
                x='sales_millions',
                y='margin_pct',
                size='sales_millions',
                color='margin_pct',
                hover_data=['sub_brand_name'],
                title="Sales vs Margin % (Top 20 Products)",
                labels={'sales_millions': 'Sales (Millions $)', 'margin_pct': 'Margin %'},
                template="plotly_dark",
                color_continuous_scale='RdYlGn'
            )
            fig.update_traces(marker=dict(line=dict(width=1, color='white')))
            st.plotly_chart(fig, use_container_width=True)
    
    # Footer
    st.markdown("---")
    
    # Data status in footer
    col1, col2, col3 = st.columns(3)
    with col1:
        st.markdown("")
    with col2:
        st.markdown(f"""
        <div style='text-align: center; color: #64748b; font-size: 0.85rem; padding: 0.5rem;'>
            📊 <strong>Datos cargados:</strong> {len(customers):,} clientes | {len(products):,} productos | {len(orders):,} órdenes | {len(invoices):,} facturas
        </div>
        """, unsafe_allow_html=True)
    with col3:
        st.markdown("")
    
    st.markdown("""
    <div style='text-align: center; color: #94a3b8; padding: 1.5rem;'>
        <p>Desarrollado por <strong style='color: #22c55e;'>Fayder Arroyo</strong> | Data & BI Analyst</p>
        <p>🔗 <a href='https://fayderarroyo.github.io/CV-Website/' style='color: #22c55e;'>Ver Portafolio</a></p>
        <p style='font-size: 0.8rem; margin-top: 1rem;'>Powered by PostgreSQL Database (Neon.tech)</p>
    </div>
    """, unsafe_allow_html=True)

if __name__ == "__main__":
    main()
