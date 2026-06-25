const translations = {
    es: {
        nav: {
            about: "Sobre Mí",
            skills: "Skills",
            experience: "Experiencia",
            education: "Formación",
            portfolio: "Proyectos",
            contact: "Contacto"
        },
        hero: {
            greeting: "Fayder Enrique<br><span class='highlight'>Arroyo Herazo</span>",
            role: "Especialista en Analítica y Soluciones Basadas en Datos",
            bio: "Impulso la transformación digital a través de Business Intelligence, automatización y análisis de datos, convirtiendo la información en decisiones estratégicas que optimizan la eficiencia operativa y promueven la innovación tecnológica.",
            btn_cv: "Descargar<br>CV",
            btn_contact: "Contáctame"
        },
        about: {
            title: "Sobre Mí",
            description: `Soy un profesional con experiencia en analítica de datos, inteligencia de negocios e innovación tecnológica, enfocado en mejorar la gestión operativa, financiera y estratégica de las organizaciones.
            <br><br>
            Combino herramientas como Power BI, SQL y Python con metodologías de análisis y optimización de procesos para generar información clara, confiable y útil para la toma de decisiones.
            <br><br>
            Mi objetivo es transformar datos en conocimiento accionable, impulsar la eficiencia y acompañar la evolución digital de las empresas mediante soluciones analíticas y tecnológicas de alto impacto.`
        },
        skills: {
            title: "Skills & Tecnologías"
        },
        certifications: {
            title: "Diplomados y Cursos"
        },
        experience: {
            title: "Experiencia Laboral",
            jobs: [
                {
                    role: "Data Analyst / Market Research",
                    company: "Corporación Unificada Nacional de Educación Superior (CUN)",
                    period: "Feb 2026 - Actualidad",
                    location: "Híbrido",
                    desc: `• Diseño de investigaciones de mercado cuantitativas y cualitativas.<br>
                    • Limpieza, integración y análisis estadístico de datos para generar insights.<br>
                    • Desarrollo de reportes analíticos y dashboards para la toma de decisiones.`
                },
                {
                    role: "Data Analyst / Business Intelligence Analyst",
                    company: "Fox Ordering",
                    period: "Ene 2026 - Actualidad",
                    location: "Remoto / Híbrido",
                    desc: `• Creación, mantenimiento y optimización de reportes, dashboards e indicadores clave (KPIs) operativos.<br>
                    • Análisis de grandes volúmenes de datos con SQL para identificar tendencias y cuellos de botella.<br>
                    • Gestión y control de información en Excel avanzado asegurando trazabilidad de los datos.<br>
                    • Documentación y control de versiones de reportes mediante Git de forma colaborativa.`
                },
                {
                    role: "Asesor de Innovación Tecnológica y Gestión de Infraestructura",
                    company: "IPS SYSO Empresarial S.A.S.",
                    period: "Sep 2025 - Actualidad",
                    location: "Cartagena, Colombia",
                    desc: `• Liderazgo de proyectos de innovación tecnológica para optimizar la eficiencia operativa.<br>
                    • Desarrollo de tableros de control y automatización de reportes mediante Power BI y Looker Studio.<br>
                    • Mantenimiento y aseguramiento de la disponibilidad técnica y de infraestructura de la empresa.<br>
                    • Integración y análisis de datos de sistemas e infraestructura operativa.`
                },
                {
                    role: "Analista de Planeación Financiera de Datos",
                    company: "3 Castillos",
                    period: "Abr 2024 - Sep 2025",
                    desc: `• Análisis detallados de datos financieros aplicando métodos y herramientas estadísticas avanzadas.<br>
                    • Automatización de recolección y transformación de datos con Excel Power Query.<br>
                    • Mantenimiento y creación de dashboards financieros interactivos en Power BI.<br>
                    • Proyección de desempeño mediante presupuestos y previsiones estadísticas.`
                },
                {
                    role: "Supervisor de Operaciones",
                    company: "Credi Jamar S.A.",
                    period: "Ene 2015 - Ene 2024",
                    desc: `• Garantizar y monitorear las ejecuciones del PEC (plan estratégico de cobranza).<br>
                    • Cumplimiento de metas de productividad y gestión de personal a cargo.<br>
                    • Diseño e implementación de dashboard de control interno en Power BI y Excel.<br>
                    • Optimización de procesos: reducción de tiempos de generación de cuentas de 4 horas a 25 min.`
                },
                {
                    role: "Analista de Cartera",
                    company: "Credi Jamar S.A.",
                    period: "Jul 2008 - Dic 2014",
                    desc: `• Recuperación de cartera vencida mediante contacto directo y negociación.<br>
                    • Gestión de PQR y seguimiento a quejas sobre consignaciones no aplicadas.<br>
                    • Autorización de descuentos y análisis de procesos de aprobación de crédito.`
                }
            ]
        },
        education: {
            title: "Formación Académica",
            degrees: [
                {
                    degree: "Especialización en Analítica de Datos e Información",
                    institution: "Fundación Universitaria Tecnológico Comfenalco",
                    year: "2025",
                    status: "current"
                },
                {
                    degree: "Ingeniería Industrial",
                    institution: "Fundación Universitaria Tecnológico Comfenalco",
                    year: "2020"
                },
                {
                    degree: "Tecnología en Control de Calidad",
                    institution: "Fundación Universitaria Tecnológico Comfenalco",
                    year: "2018"
                },
                {
                    degree: "Tecnología en Análisis y Desarrollo de Sistemas de Información",
                    institution: "SENA",
                    year: "2012"
                }
            ],
            diplomas: [
                {
                    name: "Formulación y Gerencia de Proyectos",
                    institution: "Fundación Universitaria Tecnológico Comfenalco",
                    hours: "120 horas",
                    location: "Cartagena",
                    year: "2021",
                    month: "mayo"
                },
                {
                    name: "Microsoft Power BI",
                    institution: "Universidad de Cataluña",
                    duration: "12 semanas",
                    location: "Modalidad virtual",
                    year: "2021"
                },
                {
                    name: "Análisis de Datos",
                    institution: "Universidad Tecnológica de Bolívar (MINTIC)",
                    duration: "12 semanas",
                    location: "Modalidad presencial",
                    year: "2024",
                    status: "current"
                }
            ],
            workshops: [
                {
                    name: "Estadística Aplicada al Proceso Empresarial",
                    institution: "Universidad de Cataluña",
                    hours: "40 horas",
                    location: "Cartagena",
                    year: "2021",
                    month: "junio"
                },
                {
                    name: "Herramientas de Dirección",
                    institution: "Universidad Pontificia Javeriana",
                    hours: "32 horas",
                    location: "Bogotá",
                    year: "2020",
                    month: "diciembre"
                }
            ],
            platzi: [
                {
                    name: "Data Science e Inteligencia Artificial",
                    date: "13 sept. 2022",
                    hours: "14 h"
                },
                {
                    name: "Fundamentos de Matemáticas",
                    date: "18 sept. 2022",
                    hours: "13 h"
                },
                {
                    name: "Fundamentos de Ingeniería de Software",
                    date: "21 sept. 2022",
                    hours: "16 h"
                },
                {
                    name: "Análisis de Negocios para Ciencia de Datos",
                    date: "14 sept. 2022",
                    hours: "10 h"
                },
                {
                    name: "Python: Comprehensions, Funciones y Manejo de Errores",
                    date: "19 ene. 2023",
                    hours: "32 h"
                },
                {
                    name: "Entorno de Trabajo para Ciencia de Datos con Jupyter Notebooks y Anaconda",
                    date: "8 oct. 2022",
                    hours: "18 h"
                }
            ]
        },
        portfolio: {
            title: "Proyectos Destacados",
            projects: [
                {
                    title: "Revenue Command Center - Analítica Prescriptiva",
                    desc: "Sistema de Revenue Management B2B para optimización de precios y márgenes.",
                    fullDesc: "Herramienta de <b>Analítica Prescriptiva</b> que transforma la estrategia de precios en commodities. Elimina la incertidumbre mediante modelado causal avanzado. <br>📊 <b>Stack Técnico:</b> Regresión Log-Log (Elasticidad), Prophet (Forecast) y XGBoost. <br>💡 <b>Impacto Negocio:</b> Identificación de elasticidad crítica (-2.08) y prevención de riesgos por $797M.",
                    tags: ["Python", "Streamlit", "Plotly", "Prophet", "XGBoost", "Causal Modeling"],
                    link: "https://tableroestrategicofinanciero.streamlit.app/",
                    image: "assets/images/revenue_command_center.png"
                },
                {
                    title: "PharmaLife BI Dashboard",
                    desc: "Dashboard ejecutivo interactivo para análisis predictivo y operativo.",
                    fullDesc: "Plataforma de inteligencia de negocios para Laboratorios PharmaLife, desarrollada con <b>Antigravity AI</b>. <br>📈 <b>Modelado:</b> Prophet, Elasticidad OLS. <br>📊 <b>Visualización:</b> Streamlit, Plotly interactivo con branding corporativo completo.",
                    tags: ["Streamlit", "Python", "Prophet", "Antigravity"],
                    link: "https://ventaspharmalife.streamlit.app/",
                    image: "https://picsum.photos/seed/pharma/600/400"
                },
                {
                    title: "Alegra BI Challenge - Análisis de Paridad",
                    desc: "Plataforma de Business Intelligence interactiva para el análisis de representación femenina.",
                    fullDesc: "Dashboard estilo SaaS desarrollado en Python. <br>📊 <b>Modelado:</b> Scikit-Learn (Regresión Lineal) para predicción de años hacia la paridad. <br>📈 <b>Visualización:</b> Streamlit, Pandas y Plotly interactivo. <br>🚀 <b>Impacto:</b> Benchmarking global y alertas de retroceso automáticas.",
                    tags: ["Python", "Streamlit", "Scikit-Learn", "BI"],
                    link: "https://alegra-bi-dashboard.streamlit.app/",
                    image: "https://picsum.photos/seed/alegra/600/400"
                },
                {
                    title: "Laboratorio Clínico - Gestión de Servicios a Domicilio",
                    desc: "Sistema de gestión logística y clínica integrando PostgreSQL (Supabase) y React.",
                    fullDesc: "Sistema de gestión para <b>Red de Laboratorios Clínicos</b>. Optimización de servicios domiciliarios. <br>💾 <b>Backend:</b> Supabase (PostgreSQL) con arquitectura multi-zona. <br>⚛️ <b>Frontend:</b> React + Vite + TailwindCSS para dashboard operativo. <br>🚀 <b>Infraestructura:</b> Despliegue continuo en Vercel.",
                    tags: ["React", "Supabase", "PostgreSQL", "TailwindCSS", "Vercel"],
                    link: "laboratorio.html",
                    image: "assets/images/header_laboratorio.png"
                },
                {
                    title: "Plataforma de Analítica y Gestión Humana",
                    desc: "Single Page Application (SPA) Enterprise para Gestión de Talento.",
                    fullDesc: "Solución integral desarrollada a la medida para Gestión Humana. Funciona como un Centro de Control Estratégico para monitorear KPIs sobre salud organizacional, impacto financiero y retención. <br>📊 <b>Módulos:</b> Dashboard Ejecutivo, Impacto Financiero, Salud Organizacional, Atracción de Talento. <br>💻 <b>Stack Técnico:</b> React 18, TypeScript, Vite, Tailwind CSS, Recharts.",
                    tags: ["React 18", "TypeScript", "Vite", "Tailwind CSS"],
                    link: "https://talentobioger.vercel.app",
                    image: "assets/images/gestion_humana.png"
                },
                {
                    title: "CUN - Ecosistema de Investigación de Mercados",
                    desc: "Plataforma integral con chatbot, gestión de WhatsApp y scraping de aplicaciones.",
                    fullDesc: "Herramienta avanzada de análisis desarrollada para automatizar la extracción de datos. <br>🤖 <b>Scraping & NLP:</b> Análisis detallado del contenido de aplicaciones mediante comentarios y descripciones. <br>💬 <b>Chatbot:</b> Motor de gestión de interacciones vía WhatsApp. <br>🚀 <b>Despliegue:</b> Arquitectura backend robusta (Node/Python).",
                    tags: ["Web Scraping", "NLP", "Chatbot", "Node.js"],
                    image: "https://picsum.photos/seed/cun_market/600/400"
                },
                {
                    title: "PLAUD & HP Analytics",
                    desc: "Dashboards analíticos para control operativo y automatización de reportes.",
                    fullDesc: "Sistemas desarrollados en conjunto con <b>Antigravity AI</b> para optimizar el análisis de grandes volúmenes de datos. <br>⚙️ <b>Gestión:</b> Integración de automatizaciones y diseño de interfaces en Python/PyQt6.",
                    tags: ["Python", "Automation", "Antigravity"],
                    image: "https://picsum.photos/seed/plaud/600/400"
                },
                {
                    title: "Dashboard de Innovación y Operaciones – IPS SYSO",
                    desc: "Digitalización de reportes administrativos, integración de RIPS y monitoreo de indicadores operativos.",
                    fullDesc: "Sistema integral de Business Intelligence para el sector salud. <br>📊 <b>Dashboards:</b> Monitoreo de indicadores de desempeño y productividad en tiempo real. <br>🏥 <b>RIPS:</b> Digitalización de procesos de registro individual de prestación de servicios. <br>⚙️ <b>Infraestructura:</b> Propuestas de mejora en conectividad y procesos internos.",
                    tags: ["Power BI", "Healthcare", "Process Optimization"],
                    image: "https://picsum.photos/seed/ipssyso/600/400"
                },
                {
                    title: "SpaceParts – Proyecto BI End-to-End",
                    desc: "ETL en Python, modelado de datos en estrella y dashboards Power BI con métricas de rentabilidad y OTD.",
                    fullDesc: "Proyecto técnico que integra el ciclo completo de analítica de datos. <br>⚙️ <b>ETL:</b> Python (Pandas/PyArrow) para datasets Parquet. <br>📊 <b>Modelado:</b> Power BI/DAX (FactSales, DimProduct, etc). <br>💾 <b>Control:</b> GitHub + VS Code.",
                    tags: ["Power BI", "Python", "ETL", "Git Flow"],
                    link: "https://spaceparts-dashboard-report.streamlit.app/",
                    image: "assets/images/spaceparts-1.png",
                    images: ["assets/images/spaceparts-1.png", "assets/images/spaceparts-2.png", "assets/images/spaceparts-3.png", "assets/images/spaceparts-4.png"]
                },
                {
                    title: "Estadísticas Vitales DANE – Análisis Académico",
                    desc: "Limpieza y análisis estadístico de microdatos de nacimientos mediante Python y exportación en formato Parquet.",
                    fullDesc: "Análisis de datos públicos del DANE para proyecto académico. <br>🐍 <b>Python:</b> Pandas, NumPy, Matplotlib para procesamiento y visualización. <br>📊 <b>Análisis:</b> Estadísticas descriptivas de nacimientos en Colombia. <br>💾 <b>Formato:</b> Exportación optimizada en Parquet.",
                    tags: ["Python", "Data Analysis", "Parquet"],
                    image: "https://picsum.photos/seed/dane/600/400"
                },
                {
                    title: "Babyshower - Ian Gabriel",
                    desc: "Aplicación web interactiva para lista de regalos de Babyshower.",
                    fullDesc: "Experiencia digital responsiva construida con <b>Antigravity AI</b>. <br>👶 <b>UX/UI:</b> Diseño con scroll horizontal, animaciones dinámicas y agrupamiento por categorías de regalos. <br>🎨 <b>Frontend:</b> HTML, CSS moderno, JavaScript.",
                    tags: ["Web", "UI/UX", "Antigravity"],
                    image: "https://picsum.photos/seed/baby/600/400"
                }
            ]
        },
        contact: {
            title: "Contacto"
        }
    },
    en: {
        nav: {
            about: "About Me",
            skills: "Skills",
            experience: "Experience",
            education: "Education",
            portfolio: "Projects",
            contact: "Contact"
        },
        hero: {
            greeting: "Fayder Enrique<br><span class='highlight'>Arroyo Herazo</span>",
            role: "Specialist in Analytics and Data-Driven Solutions",
            bio: "I drive digital transformation through Business Intelligence, automation, and data analysis, turning information into strategic decisions that optimize operational efficiency and promote technological innovation.",
            btn_cv: "Download<br>CV",
            btn_contact: "Contact Me"
        },
        about: {
            title: "About Me",
            description: `I am a professional with experience in data analytics, business intelligence, and technological innovation, focused on improving the operational, financial, and strategic management of organizations.
            <br><br>
            I combine tools like Power BI, SQL, and Python with analysis and process optimization methodologies to generate clear, reliable, and useful information for decision-making.
            <br><br>
            My goal is to transform data into actionable knowledge, drive efficiency, and accompany the digital evolution of companies through high-impact analytical and technological solutions.`
        },
        skills: {
            title: "Skills & Technologies"
        },
        certifications: {
            title: "Diplomas & Courses"
        },
        experience: {
            title: "Professional Experience",
            jobs: [
                {
                    role: "Data Analyst / Market Research",
                    company: "Corporación Unificada Nacional de Educación Superior (CUN)",
                    period: "Feb 2026 - Current",
                    location: "Hybrid",
                    desc: `• Designing quantitative and qualitative market research studies.<br>
                    • Data cleaning, integration, and statistical analysis to generate actionable insights.<br>
                    • Development of analytical reports and dashboards for decision-making support.`
                },
                {
                    role: "Data Analyst / Business Intelligence Analyst",
                    company: "Fox Ordering",
                    period: "Jan 2026 - Current",
                    location: "Remote / Hybrid",
                    desc: `• Creation, maintenance, and optimization of operational reports, dashboards, and KPIs.<br>
                    • Analysis of large volumes of data using SQL to identify trends and process bottlenecks.<br>
                    • Management and control of information in advanced Excel to ensure data traceability.<br>
                    • Documentation and version control of reporting assets using Git in a collaborative setting.`
                },
                {
                    role: "Technology Innovation and Infrastructure Management Advisor",
                    company: "IPS SYSO Empresarial S.A.S.",
                    period: "Sep 2025 - Current",
                    location: "Cartagena, Colombia",
                    desc: `• Leadership in technological innovation projects to optimize operational efficiency.<br>
                    • Development of control dashboards and report automation using Power BI and Looker Studio.<br>
                    • Maintenance and assurance of the company's technical and infrastructure availability.<br>
                    • Integration and analysis of operational systems and infrastructure data.`
                },
                {
                    role: "Data Financial Planning Analyst",
                    company: "3 Castillos",
                    period: "Apr 2024 - Sep 2025",
                    desc: `• Detailed analysis of financial data applying advanced statistical methods and tools.<br>
                    • Automation of data collection and transformation applying Excel Power Query workflows.<br>
                    • Creation and maintenance of interactive financial dashboards in Power BI.<br>
                    • Performance projection through statistical budgeting and accurate financial forecasting.`
                },
                {
                    role: "Operations Supervisor",
                    company: "Credi Jamar S.A.",
                    period: "Jan 2015 - Jan 2024",
                    desc: `• Monitored and executed the Strategic Collection Plan (PEC).<br>
                    • Met productivity goals and managed assigned personnel.<br>
                    • Designed and implemented internal control dashboards in Power BI and Excel.<br>
                    • Process optimization: reduced report generation time from 4 hours to 25 minutes.`
                },
                {
                    role: "Portfolio Analyst",
                    company: "Credi Jamar S.A.",
                    period: "Jul 2008 - Dec 2014",
                    desc: `• Recovered overdue portfolio through direct contact and negotiation.<br>
                    • Managed customer claims (PQR) and followed up on unapplied payments.<br>
                    • Authorized discounts and identified flaws in the credit approval process.`
                }
            ]
        },
        education: {
            title: "Education",
            degrees: [
                {
                    degree: "Specialization in Data Analytics and Information",
                    institution: "Fundación Universitaria Tecnológico Comfenalco",
                    year: "2025",
                    status: "current"
                },
                {
                    degree: "Industrial Engineering",
                    institution: "Fundación Universitaria Tecnológico Comfenalco",
                    year: "2020"
                },
                {
                    degree: "Technology in Quality Control",
                    institution: "Fundación Universitaria Tecnológico Comfenalco",
                    year: "2018"
                },
                {
                    degree: "Technology in Information Systems Analysis and Development",
                    institution: "SENA",
                    year: "2012"
                }
            ],
            diplomas: [
                {
                    name: "Project Formulation and Management",
                    institution: "Fundación Universitaria Tecnológico Comfenalco",
                    hours: "120 hours",
                    location: "Cartagena",
                    year: "2021",
                    month: "May"
                },
                {
                    name: "Microsoft Power BI",
                    institution: "Universidad de Cataluña",
                    duration: "12 weeks",
                    location: "Virtual mode",
                    year: "2021"
                },
                {
                    name: "Data Analysis",
                    institution: "Universidad Tecnológica de Bolívar (MINTIC)",
                    duration: "12 weeks",
                    location: "In-person mode",
                    year: "2024",
                    status: "current"
                }
            ],
            workshops: [
                {
                    name: "Applied Statistics for Business Processes",
                    institution: "Universidad de Cataluña",
                    hours: "40 hours",
                    location: "Cartagena",
                    year: "2021",
                    month: "June"
                },
                {
                    name: "Management Tools",
                    institution: "Universidad Pontificia Javeriana",
                    hours: "32 hours",
                    location: "Bogotá",
                    year: "2020",
                    month: "December"
                }
            ],
            platzi: [
                {
                    name: "Data Science and Artificial Intelligence",
                    date: "Sept. 13, 2022",
                    hours: "14 h"
                },
                {
                    name: "Mathematics Fundamentals",
                    date: "Sept. 18, 2022",
                    hours: "13 h"
                },
                {
                    name: "Software Engineering Fundamentals",
                    date: "Sept. 21, 2022",
                    hours: "16 h"
                },
                {
                    name: "Business Analysis for Data Science",
                    date: "Sept. 14, 2022",
                    hours: "10 h"
                },
                {
                    name: "Python: Comprehensions, Functions and Error Handling",
                    date: "Jan. 19, 2023",
                    hours: "32 h"
                },
                {
                    name: "Work Environment for Data Science with Jupyter Notebooks and Anaconda",
                    date: "Oct. 8, 2022",
                    hours: "18 h"
                }
            ]
        },
        portfolio: {
            title: "Featured Projects",
            projects: [
                {
                    title: "Revenue Command Center - Prescriptive Analytics",
                    desc: "B2B Revenue Management system for price and margin optimization.",
                    fullDesc: "<b>Prescriptive Analytics</b> tool transforming commodity pricing strategy. Eliminates uncertainty through advanced causal modeling. <br>📊 <b>Tech Stack:</b> Log-Log Regression (Elasticity), Prophet (Forecast), and XGBoost. <br>💡 <b>Business Impact:</b> Critical elasticity identification (-2.08) and $797M risk prevention.",
                    tags: ["Python", "Streamlit", "Plotly", "Prophet", "XGBoost", "Causal Modeling"],
                    link: "https://tableroestrategicofinanciero.streamlit.app/",
                    image: "assets/images/revenue_command_center.png"
                },
                {
                    title: "PharmaLife BI Dashboard",
                    desc: "Interactive executive dashboard for predictive and operational analysis.",
                    fullDesc: "Business intelligence platform for PharmaLife Laboratories, developed with <b>Antigravity AI</b>. <br>📈 <b>Modeling:</b> Prophet, OLS Elasticity. <br>📊 <b>Visualization:</b> Streamlit, interactive Plotly with full corporate branding.",
                    tags: ["Streamlit", "Python", "Prophet", "Antigravity"],
                    link: "https://ventaspharmalife.streamlit.app/",
                    image: "https://picsum.photos/seed/pharma/600/400"
                },
                {
                    title: "Alegra BI Challenge - Parity Analysis",
                    desc: "Interactive Business Intelligence platform for analyzing female political representation.",
                    fullDesc: "SaaS-style dashboard developed in Python. <br>📊 <b>Modeling:</b> Scikit-Learn (Linear Regression) for predicting parity timeline. <br>📈 <b>Visualization:</b> Streamlit, Pandas, and interactive Plotly. <br>🚀 <b>Impact:</b> Global benchmarking and automated setback alerts.",
                    tags: ["Python", "Streamlit", "Scikit-Learn", "BI"],
                    link: "https://alegra-bi-dashboard.streamlit.app/",
                    image: "https://picsum.photos/seed/alegra/600/400"
                },
                {
                    title: "Clinical Laboratory - Home Service Management",
                    desc: "Logistics and clinical management system integrating PostgreSQL (Supabase) and React.",
                    fullDesc: "Management system for <b>Clinical Laboratory Network</b>. Home service optimization. <br>💾 <b>Backend:</b> Supabase (PostgreSQL) with multi-zone architecture. <br>⚛️ <b>Frontend:</b> React + Vite + TailwindCSS for operational dashboard. <br>🚀 <b>Infrastructure:</b> Continuous deployment on Vercel.",
                    tags: ["React", "Supabase", "PostgreSQL", "TailwindCSS", "Vercel"],
                    link: "laboratorio.html",
                    image: "assets/images/header_laboratorio.png"
                },
                {
                    title: "Talent Hub Analytics - HR Platform",
                    desc: "Enterprise Single Page Application (SPA) for Talent Management.",
                    fullDesc: "Custom comprehensive solution for Human Resources. Acts as a Strategic Control Center to monitor KPIs on organizational health, financial impact, and retention. <br>📊 <b>Modules:</b> Executive Dashboard, Financial Impact, Organizational Health, Talent Attraction. <br>💻 <b>Tech Stack:</b> React 18, TypeScript, Vite, Tailwind CSS, Recharts.",
                    tags: ["React 18", "TypeScript", "Vite", "Tailwind CSS"],
                    link: "https://talentobioger.vercel.app",
                    image: "assets/images/gestion_humana.png"
                },
                {
                    title: "CUN - Market Research Ecosystem",
                    desc: "Comprehensive platform with chatbot, WhatsApp management, and app scraping.",
                    fullDesc: "Advanced analysis tool developed to automate data extraction. <br>🤖 <b>Scraping & NLP:</b> Detailed app content analysis based on comments and descriptions. <br>💬 <b>Chatbot:</b> WhatsApp interaction management engine. <br>🚀 <b>Deployment:</b> Robust backend architecture (Node/Python).",
                    tags: ["Web Scraping", "NLP", "Chatbot", "Node.js"],
                    image: "https://picsum.photos/seed/cun_market/600/400"
                },
                {
                    title: "PLAUD & HP Analytics",
                    desc: "Analytical dashboards for operational control and report automation.",
                    fullDesc: "Systems developed in conjunction with <b>Antigravity AI</b> to optimize the analysis of large volumes of data. <br>⚙️ <b>Management:</b> Integration of automations and interface design in Python/PyQt6.",
                    tags: ["Python", "Automation", "Antigravity"],
                    image: "https://picsum.photos/seed/plaud/600/400"
                },
                {
                    title: "Innovation and Operations Dashboard – IPS SYSO",
                    desc: "Digitalization of administrative reports, RIPS integration, and operational indicators monitoring.",
                    fullDesc: "Comprehensive Business Intelligence system for the healthcare sector. <br>📊 <b>Dashboards:</b> Real-time monitoring of performance and productivity indicators. <br>🏥 <b>RIPS:</b> Digitalization of individual service provision registration processes. <br>⚙️ <b>Infrastructure:</b> Proposals for improvement in connectivity and internal processes.",
                    tags: ["Power BI", "Healthcare", "Process Optimization"],
                    image: "https://picsum.photos/seed/ipssyso/600/400"
                },
                {
                    title: "SpaceParts – End-to-End BI Project",
                    desc: "Python ETL, star schema data modeling, and Power BI dashboards with profitability and OTD metrics.",
                    fullDesc: "Technical project integrating the full data analytics cycle. <br>⚙️ <b>ETL:</b> Python (Pandas/PyArrow) for Parquet datasets. <br>📊 <b>Modeling:</b> Power BI/DAX (FactSales, DimProduct, etc). <br>💾 <b>Control:</b> GitHub + VS Code.",
                    tags: ["Power BI", "Python", "ETL", "Git Flow"],
                    link: "https://spaceparts-dashboard-report.streamlit.app/",
                    image: "assets/images/spaceparts-1.png",
                    images: ["assets/images/spaceparts-1.png", "assets/images/spaceparts-2.png", "assets/images/spaceparts-3.png", "assets/images/spaceparts-4.png"]
                },
                {
                    title: "DANE Vital Statistics – Academic Analysis",
                    desc: "Cleaning and statistical analysis of birth microdata using Python and Parquet format export.",
                    fullDesc: "Analysis of DANE public data for academic project. <br>🐍 <b>Python:</b> Pandas, NumPy, Matplotlib for processing and visualization. <br>📊 <b>Analysis:</b> Descriptive statistics of births in Colombia. <br>💾 <b>Format:</b> Optimized export in Parquet.",
                    tags: ["Python", "Data Analysis", "Parquet"],
                    image: "https://picsum.photos/seed/dane/600/400"
                },
                {
                    title: "Babyshower - Ian Gabriel",
                    desc: "Interactive web application for Babyshower gift registry.",
                    fullDesc: "Responsive digital experience built with <b>Antigravity AI</b>. <br>👶 <b>UX/UI:</b> Horizontal scroll design, dynamic animations, and category-based gift grouping. <br>🎨 <b>Frontend:</b> HTML, Modern CSS, JavaScript.",
                    tags: ["Web", "UI/UX", "Antigravity"],
                    image: "https://picsum.photos/seed/baby/600/400"
                }
            ]
        },
        contact: {
            title: "Contact"
        }
    }
};
