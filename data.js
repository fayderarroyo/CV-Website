const translations = {
    es: {
        nav: {
            about: "Sobre Mí",
            skills: "Skills",
            experience: "Experiencia",
            portfolio: "Proyectos",
            contact: "Contacto"
        },
        hero: {
            greeting: "Fayder Enrique<br><span class='highlight'>Arroyo Herazo</span>",
            role: "Data & BI Analyst · Coordinador de Innovación",
            bio: "Transformo datos en decisiones estratégicas. Combino analítica, tecnología e innovación para optimizar procesos y crear soluciones inteligentes.",
            btn_cv: "Descargar CV",
            btn_contact: "Contáctame"
        },
        about: {
            title: "Sobre Mí",
            description: `Soy <span class='highlight'>Coordinador de Innovación Tecnológica</span> y Gestión de Infraestructura, con sólida formación en analítica de datos e ingeniería industrial. 
            <br><br>
            Mi perfil integra una visión multidisciplinaria: comprendo el negocio desde la perspectiva operativa, analítica y tecnológica. Esto me permite identificar oportunidades de mejora, desarrollar modelos de información robustos y liderar la implementación de herramientas que conectan las áreas administrativas, financieras y técnicas de una organización.`
        },
        skills: {
            title: "Skills & Tecnologías"
        },
        experience: {
            title: "Experiencia Laboral",
            jobs: [
                {
                    role: "Data Planning Analyst",
                    company: "3 Castillos",
                    period: "Actualidad",
                    desc: "Lidero la planeación financiera y el control presupuestal mediante modelos predictivos y dashboards en Power BI. Analizo variaciones y optimizo la toma de decisiones basada en datos históricos y proyecciones."
                },
                {
                    role: "Coordinador de Infraestructura",
                    company: "IPS Syso Empresarial",
                    period: "Previo",
                    desc: "Dirigí la transformación digital y la gestión de infraestructura técnica. Implementé tableros de control para fortalecer la gestión médica y administrativa."
                },
                {
                    role: "Líder de Cartera y Cobranzas",
                    company: "Muebles Jamar",
                    period: "Previo",
                    desc: "Diseñé dashboards de control interno y automaticé procesos de cobranza, reduciendo tiempos de generación de reportes de 4 horas a 25 minutos."
                }
            ]
        },
        portfolio: {
            title: "Proyectos Destacados",
            projects: [
                {
                    title: "SpaceParts - Business Intelligence",
                    desc: "Ciclo completo de analítica: ETL en Python, modelado estrella y visualización en Power BI. Gestión con Git Flow.",
                    fullDesc: "Proyecto técnico que integra el ciclo completo de analítica de datos. <br>⚙️ <b>ETL:</b> Python (Pandas/PyArrow) para datasets Parquet. <br>📊 <b>Modelado:</b> Power BI/DAX (FactSales, DimProduct, etc). <br>💾 <b>Control:</b> GitHub + VS Code.",
                    tags: ["Power BI", "Python", "ETL", "Git Flow"],
                    image: "assets/images/spaceparts-1.png",
                    images: ["assets/images/spaceparts-1.png", "assets/images/spaceparts-2.png", "assets/images/spaceparts-3.png", "assets/images/spaceparts-4.png"]
                },
                {
                    title: "Tres Leches - Delivery",
                    desc: "Base de datos relacional en MySQL y análisis de indicadores de ventas y retención de clientes.",
                    fullDesc: "Diseño de base de datos y consultas analíticas para optimizar un modelo de negocio de delivery.",
                    tags: ["SQL", "MySQL", "Data Modeling"],
                    image: "https://picsum.photos/seed/tresleches/600/400"
                },
                {
                    title: "Tableros IPS Syso",
                    desc: "Dashboards integrados para gestión de infraestructura y servicios médicos en tiempo real.",
                    fullDesc: "Solución integral para el sector salud, monitoreando infraestructura y servicios críticos.",
                    tags: ["Power BI", "Excel", "Healthcare"],
                    image: "https://picsum.photos/seed/ipssyso/600/400"
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
            portfolio: "Projects",
            contact: "Contact"
        },
        hero: {
            greeting: "Fayder Enrique<br><span class='highlight'>Arroyo Herazo</span>",
            role: "Data & BI Analyst · Innovation Coordinator",
            bio: "I transform data into strategic decisions. I combine analytics, technology, and innovation to optimize processes and create intelligent solutions.",
            btn_cv: "Download CV",
            btn_contact: "Contact Me"
        },
        about: {
            title: "About Me",
            description: `I am a <span class='highlight'>Technology Innovation Coordinator</span> and Infrastructure Manager, with a solid background in data analytics and industrial engineering.
            <br><br>
            My profile integrates a multidisciplinary vision: I understand the business from operational, analytical, and technical perspectives. This allows me to identify improvement opportunities, develop robust information models, and lead the implementation of tools that connect administrative, financial, and technical areas.`
        },
        skills: {
            title: "Skills & Technologies"
        },
        experience: {
            title: "Professional Experience",
            jobs: [
                {
                    role: "Data Planning Analyst",
                    company: "3 Castillos",
                    period: "Current",
                    desc: "Leading financial planning and budget control through predictive models and Power BI dashboards. Analyzing variations and optimizing decision-making."
                },
                {
                    role: "Infrastructure Coordinator",
                    company: "IPS Syso Empresarial",
                    period: "Previous",
                    desc: "Directed digital transformation and technical infrastructure management. Implemented control dashboards to strengthen medical and administrative management."
                },
                {
                    role: "Portfolio & Collections Leader",
                    company: "Muebles Jamar",
                    period: "Previous",
                    desc: "Designed internal control dashboards and automated collection processes, reducing report generation times from 4 hours to 25 minutes."
                }
            ]
        },
        portfolio: {
            title: "Featured Projects",
            projects: [
                {
                    title: "SpaceParts - Business Intelligence",
                    desc: "Full analytics cycle: Python ETL, Star Schema modeling, and Power BI visualization. Managed with Git Flow.",
                    fullDesc: "Technical project integrating the full data analytics cycle. <br>⚙️ <b>ETL:</b> Python (Pandas/PyArrow) for Parquet datasets. <br>📊 <b>Modeling:</b> Power BI/DAX (FactSales, DimProduct, etc). <br>💾 <b>Control:</b> GitHub + VS Code.",
                    tags: ["Power BI", "Python", "ETL", "Git Flow"],
                    image: "assets/images/spaceparts-1.png",
                    images: ["assets/images/spaceparts-1.png", "assets/images/spaceparts-2.png", "assets/images/spaceparts-3.png", "assets/images/spaceparts-4.png"]
                },
                {
                    title: "Tres Leches - Delivery",
                    desc: "Relational database in MySQL and analysis of sales indicators and customer retention.",
                    fullDesc: "Database design and analytical queries to optimize a delivery business model.",
                    tags: ["SQL", "MySQL", "Data Modeling"],
                    image: "https://picsum.photos/seed/tresleches/600/400"
                },
                {
                    title: "IPS Syso Dashboards",
                    desc: "Integrated dashboards for infrastructure and medical services management in real-time.",
                    fullDesc: "Comprehensive solution for the healthcare sector, monitoring infrastructure and critical services.",
                    tags: ["Power BI", "Excel", "Healthcare"],
                    image: "https://picsum.photos/seed/ipssyso/600/400"
                }
            ]
        },
        contact: {
            title: "Contact"
        }
    }
};
