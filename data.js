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
            btn_cv: "Descargar CV",
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
                    role: "Asesor de Innovación Tecnológica y Gestión de Infraestructura",
                    company: "IPS SYSO Empresarial",
                    period: "Actualidad",
                    location: "Cartagena, Colombia",
                    desc: `• Asesoro la implementación de soluciones tecnológicas para optimizar la gestión administrativa y operativa.<br>
                    • Desarrollo dashboards en Power BI para monitorear indicadores de desempeño y productividad.<br>
                    • Propongo mejoras en infraestructura tecnológica, conectividad y procesos internos.<br>
                    • Apoyo la digitalización de procesos de RIPS, mantenimiento y control documental.`
                },
                {
                    role: "Data Planning Analyst",
                    company: "3 Castillos",
                    period: "Previo",
                    desc: `• Elaboración de presupuestos y análisis de desempeño financiero con datos históricos y actuales.<br>
                    • Creación de dashboards financieros en Power BI con métricas estadísticas y proyecciones.<br>
                    • Automatización de procesos de carga y transformación de datos con Excel Power Query.`
                },
                {
                    role: "Supervisor de Operaciones / Analista de Cartera",
                    company: "Muebles Jamar",
                    period: "Previo",
                    desc: `• Reduje el tiempo de generación de cuentas por cobrar de 4 horas a 25 minutos mediante automatización.<br>
                    • Desarrollé tableros de control de cartera y cobranzas en Power BI y Excel.<br>
                    • Diseñé segmentaciones de clientes basadas en análisis de saldo, zona y ocupación.`
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
                    title: "Laboratorio Clínico - Gestión de Servicios a Domicilio",
                    desc: "Sistema de gestión logística y clínica integrando PostgreSQL (Supabase) y React.",
                    fullDesc: "Sistema de gestión para <b>Red de Laboratorios Clínicos</b>. Optimización de servicios domiciliarios. <br>💾 <b>Backend:</b> Supabase (PostgreSQL) con arquitectura multi-zona. <br>⚛️ <b>Frontend:</b> React + Vite + TailwindCSS para dashboard operativo. <br>🚀 <b>Infraestructura:</b> Despliegue continuo en Vercel.",
                    tags: ["React", "Supabase", "PostgreSQL", "TailwindCSS", "Vercel"],
                    link: "laboratorio.html",
                    image: "assets/images/header_laboratorio.png"
                },
                {
                    title: "Estadísticas Vitales DANE – Análisis Académico",
                    desc: "Limpieza y análisis estadístico de microdatos de nacimientos mediante Python y exportación en formato Parquet.",
                    fullDesc: "Análisis de datos públicos del DANE para proyecto académico. <br>🐍 <b>Python:</b> Pandas, NumPy, Matplotlib para procesamiento y visualización. <br>📊 <b>Análisis:</b> Estadísticas descriptivas de nacimientos en Colombia. <br>💾 <b>Formato:</b> Exportación optimizada en Parquet.",
                    tags: ["Python", "Data Analysis", "Parquet"],
                    image: "https://picsum.photos/seed/dane/600/400"
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
            btn_cv: "Download CV",
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
                    role: "Technology Innovation and Infrastructure Management Advisor",
                    company: "IPS SYSO Empresarial",
                    period: "Current",
                    location: "Cartagena, Colombia",
                    desc: `• Advise on implementing technological solutions to optimize administrative and operational management.<br>
                    • Develop Power BI dashboards to monitor performance and productivity indicators.<br>
                    • Propose improvements in technological infrastructure, connectivity, and internal processes.<br>
                    • Support digitalization of RIPS processes, maintenance, and document control.`
                },
                {
                    role: "Data Planning Analyst",
                    company: "3 Castillos",
                    period: "Previous",
                    desc: `• Budget preparation and financial performance analysis with historical and current data.<br>
                    • Creation of financial dashboards in Power BI with statistical metrics and projections.<br>
                    • Automation of data loading and transformation processes with Excel Power Query.`
                },
                {
                    role: "Operations Supervisor / Portfolio Analyst",
                    company: "Muebles Jamar",
                    period: "Previous",
                    desc: `• Reduced accounts receivable generation time from 4 hours to 25 minutes through automation.<br>
                    • Developed portfolio and collections control dashboards in Power BI and Excel.<br>
                    • Designed customer segmentations based on balance, zone, and occupation analysis.`
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
                    title: "Clinical Laboratory - Home Service Management",
                    desc: "Logistics and clinical management system integrating PostgreSQL (Supabase) and React.",
                    fullDesc: "Management system for <b>Clinical Laboratory Network</b>. Home service optimization. <br>💾 <b>Backend:</b> Supabase (PostgreSQL) with multi-zone architecture. <br>⚛️ <b>Frontend:</b> React + Vite + TailwindCSS for operational dashboard. <br>🚀 <b>Infrastructure:</b> Continuous deployment on Vercel.",
                    tags: ["React", "Supabase", "PostgreSQL", "TailwindCSS", "Vercel"],
                    link: "laboratorio.html",
                    image: "assets/images/header_laboratorio.png"
                },
                {
                    title: "DANE Vital Statistics – Academic Analysis",
                    desc: "Cleaning and statistical analysis of birth microdata using Python and Parquet format export.",
                    fullDesc: "Analysis of DANE public data for academic project. <br>🐍 <b>Python:</b> Pandas, NumPy, Matplotlib for processing and visualization. <br>📊 <b>Analysis:</b> Descriptive statistics of births in Colombia. <br>💾 <b>Format:</b> Optimized export in Parquet.",
                    tags: ["Python", "Data Analysis", "Parquet"],
                    image: "https://picsum.photos/seed/dane/600/400"
                }
            ]
        },
        contact: {
            title: "Contact"
        }
    }
};
