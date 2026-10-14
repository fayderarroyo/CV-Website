const translations = {
    es: {
        nav: {
            about: "Sobre Mí",
            portfolio: "Casos de Éxito",
            experience: "Experiencia",
            skills: "Stack Técnico",
            education: "Formación",
            contact: "Contacto"
        },
        hero: {
            greeting: "Fayder Enrique<br><span class='highlight'>Arroyo Herazo</span>",
            role: "Solutions Architect & Analytics Engineer",
            bio: "Ingeniero Industrial y Especialista en Analítica de Datos con <b>Distinción Meritoria (4.8 unánime)</b>, bilingüe (<b>Inglés C1</b>). Más de 10 años diseñando arquitecturas de datos en la nube, pipelines ETL automatizados y plataformas analíticas (SaaS / BI) de alto impacto.",
            btn_cv: "Descargar CV",
            btn_projects: "Ver Casos de Éxito",
            btn_contact: "Contactar",
            stat_exp: "Años en Operaciones & Soluciones de Datos",
            stat_grade: "Calificación Meritoria (Tesis Deceuninck)",
            stat_audit: "COP Auditados en Finanzas & Nómina",
            stat_lang: "Inglés Avanzado Profesional"
        },
        about: {
            title: "Propuesta de Valor & Enfoque",
            intro: "Integro más de una década de liderazgo en operaciones industriales con ingeniería de software y analítica avanzada para construir soluciones que transforman datos dispersos en ventajas competitivas reales.",
            pillars: [
                {
                    icon: "fas fa-database",
                    title: "Arquitectura de Datos & Pipelines ETL",
                    desc: "Diseño e implementación de pipelines de datos automatizados y modelado relacional en la nube (PostgreSQL, Supabase, FastAPI). Migración de flujos manuales y macros obsoletas hacia infraestructuras seguras, auditables y gobernadas."
                },
                {
                    icon: "fas fa-chart-line",
                    title: "Business Intelligence & Analítica Predictiva",
                    desc: "Modelado tabular robusto en Power BI (DAX), pronósticos estacionales de demanda (Prophet), modelos de Machine Learning (XGBoost) y modelado causal de elasticidad para soporte a decisiones de rentabilidad y precios."
                },
                {
                    icon: "fas fa-laptop-code",
                    title: "Ingeniería de Software & Plataformas SaaS",
                    desc: "Desarrollo de aplicaciones web modernas de nivel corporativo (Next.js, React, TypeScript, Vercel). Arquitecturas multi-tenant, control granular de accesos, organigramas interactivos y cuadros de mando en tiempo real."
                },
                {
                    icon: "fas fa-industry",
                    title: "Ingeniería Industrial & Eficiencia Operativa",
                    desc: "Optimización integral de la cadena de suministro (Supply Chain), clasificación ABC de inventarios, auditoría financiera forense de nómina y reducción drástica de tiempos de procesamiento de reportes (de 4 horas a 25 minutos)."
                }
            ]
        },
        skills: {
            title: "Stack Tecnológico & Competencias",
            subtitle: "Herramientas, lenguajes y frameworks dominados agrupados por dominio de ingeniería",
            categories: [
                {
                    name: "Data Engineering & Cloud Databases",
                    icon: "fas fa-server",
                    skills: ["SQL", "PostgreSQL", "Supabase", "Pipelines ETL / ELT", "FastAPI (Python)", "REST APIs", "Power Query", "Data Lakehouse (Parquet)"]
                },
                {
                    name: "Business Intelligence & DataViz",
                    icon: "fas fa-chart-bar",
                    skills: ["Power BI (DAX)", "Modelado Tabular", "Streamlit", "Looker Studio", "KPIs de Negocio (SLA, NPS)", "Excel Avanzado"]
                },
                {
                    name: "Cloud Architecture & Full-Stack",
                    icon: "fas fa-code",
                    skills: ["Next.js (App Router)", "React & TypeScript", "Tailwind CSS", "Node.js", "Vercel Deployments", "Git & GitHub CI/CD", "Multi-Tenant SaaS"]
                },
                {
                    name: "Data Science & Prescriptive Analytics",
                    icon: "fas fa-brain",
                    skills: ["Python (Pandas, NumPy)", "Prophet (Forecasting)", "XGBoost & Scikit-Learn", "Modelado Causal & Elasticidad", "Clasificación ABC", "Regresión OLS"]
                }
            ]
        },
        experience: {
            title: "Experiencia Profesional & Consultoría",
            jobs: [
                {
                    role: "Tech Lead & Arquitecto de Soluciones de Datos",
                    company: "Bioger S.A.S. (Ecosistema OrganiSaaS / Nexo)",
                    period: "Ene 2026 - Presente",
                    location: "Cartagena / Híbrido",
                    desc: `• Arquitectura y despliegue en la nube de <b>OrganiSaaS</b> (Next.js, Supabase, Vercel): plataforma multi-tenant para control operativo y analítica de talento humano.<br>
                    • Auditoría y conciliación masiva de datos financieros y de nómina por <b>+$17.000M COP</b>, identificando inconsistencias en parafiscales y conceptos normativos.<br>
                    • Implementación de organigramas dinámicos en tiempo real, evaluaciones de desempeño y tableros analíticos de clima organizacional.`
                },
                {
                    role: "Consultor de Automatización de Procesos & ATS con IA",
                    company: "FEPCO S.A.S.",
                    period: "Jul 2026 - Presente",
                    location: "Cartagena / Remoto",
                    desc: `• Diseño y despliegue en producción de <b>Nexo FEPCO Contratación</b> en Vercel: plataforma ATS con motor de IA para pre-filtrado de candidatos y trazabilidad de exámenes médicos.<br>
                    • Desarrollo del sistema de control operativo <b>Nexo Mantenimiento</b>, integrando datos de incidentes GLPI y tarjetas de seguridad industrial.`
                },
                {
                    role: "BI & Data Analyst (Remoto Internacional)",
                    company: "Fox Ordering",
                    period: "Ene 2026 - Abr 2026",
                    location: "Remoto (EE.UU. / Latam)",
                    desc: `• Extracción, limpieza y modelado de grandes volúmenes de datos transaccionales mediante SQL para identificar cuellos de botella operacionales.<br>
                    • Construcción de dashboards ejecutivos monitoreando indicadores críticos de servicio (SLA de entrega, NPS, retención de restaurantes y tiempos de ciclo).<br>
                    • Estandarización y control de versiones de modelos de datos mediante Git en equipo internacional.`
                },
                {
                    role: "Data Analyst / Market Research",
                    company: "Corporación Unificada Nacional (CUN)",
                    period: "Feb 2026 - Ago 2026",
                    location: "Híbrido",
                    desc: `• Diseño y ejecución de investigaciones cuantitativas y cualitativas de mercado para prospección académica.<br>
                    • Modelado estadístico y desarrollo de dashboards interactivos para soporte directo a decisiones de expansión institucional.`
                },
                {
                    role: "Asesor en Innovación Tecnológica & BI",
                    company: "IPS SYSO Empresarial S.A.S.",
                    period: "Sep 2025 - Dic 2025",
                    location: "Cartagena, Colombia",
                    desc: `• Liderazgo de la transformación digital de la operación de salud ocupacional; automatización de reportes mediante Power BI y Looker Studio.<br>
                    • Integración de registros individuales de prestación de servicios (RIPS), infraestructura técnica y control presupuestal.`
                },
                {
                    role: "Analista de Planeación Financiera & Datos",
                    company: "Molinos 3 Castillos",
                    period: "Abr 2024 - Sep 2025",
                    location: "Cartagena",
                    desc: `• Automatización de extracción y consolidación de datos contables y financieros mediante Excel Power Query y Power BI.<br>
                    • Modelado de proyecciones estadísticas para presupuestos anuales y optimización de flujos de caja operativos.`
                },
                {
                    role: "Supervisor de Operaciones & Eficiencia Operativa (9 años)",
                    company: "CREDI JAMAR S.A.",
                    period: "Ene 2015 - Ene 2024",
                    location: "Cartagena",
                    desc: `• Liderazgo directo de equipos operativos (hasta 7 especialistas) en ejecución del Plan Estratégico de Cobranza y cumplimiento de metas.<br>
                    • Diseñó e implementó el primer dashboard analítico en Power BI de la operación, <b>reduciendo el tiempo del proceso de 4 horas a tan solo 25 minutos</b>.<br>
                    • Optimización del ruteo logístico de servicios de crédito basado en analítica de efectividad territorial y cobertura geográfica.`
                },
                {
                    role: "Analista Senior de Cartera & Riesgo Crediticio (6.5 años)",
                    company: "CREDI JAMAR S.A.",
                    period: "Jul 2008 - Dic 2014",
                    location: "Cartagena",
                    desc: `• Recuperación estratégica de cartera vencida masiva, auditoría a procesos de aprobación crediticia y modelado de patrones de mora.`
                }
            ]
        },
        portfolio: {
            title: "Casos de Éxito & Plataformas Desplegadas",
            filters: {
                all: "Todos",
                enterprise: "Enterprise & SaaS",
                analytics: "BI & Analítica Predictiva",
                tools: "Operaciones & Datos"
            },
            projects: [
                {
                    category: "enterprise",
                    badge: "Distinción Meritoria 4.8",
                    title: "Optimización de Cadena de Suministro — Deceuninck Colombia",
                    desc: "Sistema web analítico y arquitectura de pipelines ETL cloud para control de inventarios, demanda de planta y logística aduanera.",
                    fullDesc: "<b>Trabajo de Grado Meritorio (Calificación 4.8 unánime - Resolución No. 048)</b> en multinacional de manufactura de perfiles de PVC. Migración de macros VBA en Excel hacia arquitectura cloud. <br>⚙️ <b>Arquitectura:</b> FastAPI (Python) + PostgreSQL (Supabase) + React (Vite). <br>📊 <b>Analítica:</b> Diagnóstico descriptivo de demanda histórica, clasificación ABC ponderada y monitoreo aduanero en tiempo real. <br>🔒 <b>Gobernanza:</b> Anonimización de datos bajo Ley 1581.",
                    tags: ["FastAPI", "PostgreSQL", "Supabase", "React", "ETL", "Supply Chain"],
                    image: "assets/images/deceuninck_preview.png"
                },
                {
                    category: "enterprise",
                    badge: "Enterprise Multi-Tenant",
                    title: "OrganiSaaS & Nexo Bioger — Ecosistema de Gestión y Auditoría",
                    desc: "Plataforma SaaS multi-tenant para auditoría masiva de nómina (+$17.000M COP), organigramas dinámicos y evaluación de desempeño.",
                    fullDesc: "Plataforma empresarial desplegada en Vercel con arquitectura Supabase Multi-Tenant. Incluye panel SuperAdmin, gestión multi-empresa, <b>auditoría forense de nómina y parafiscales sobre +$17.000M COP</b> y organigrama interactivo reactivo en tiempo real.",
                    tags: ["Next.js", "React 19", "Supabase Realtime", "Vercel", "Tailwind CSS"],
                    image: "assets/images/bioger_live.png"
                },
                {
                    category: "enterprise",
                    badge: "ATS con Inteligencia Artificial",
                    title: "NEXO FEPCO — Plataforma ATS & Centro de Mantenimiento",
                    desc: "Sistema de atracción de talento con IA, seguimiento de exámenes médicos y centro de control operativo de mantenimiento industrial.",
                    fullDesc: "Suite operativa completa para FEPCO. Plataforma ATS desplegada en Vercel con motor de filtrado inteligente de perfiles y seguimiento de citas médicas ocupacionales. Incluye módulo de mantenimiento industrial integrando tickets GLPI y tarjetas de seguridad.",
                    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "IA Engine"],
                    image: "assets/images/fepco_live.png"
                },
                {
                    category: "analytics",
                    badge: "Analítica Prescriptiva B2B",
                    title: "Revenue Management Command Center",
                    desc: "Herramienta prescriptiva para optimización dinámica de precios, simulación de demanda y prevención de riesgo financiero.",
                    fullDesc: "Sistema B2B que modela la elasticidad precio-demanda mediante regresión Log-Log (-2.08) y proyecciones estacionales con Prophet y XGBoost. Ha permitido simular escenarios de fijación de precios previniendo riesgos comerciales por $797M COP.",
                    tags: ["Python", "Streamlit", "Prophet", "XGBoost", "Modelado Causal", "Plotly"],
                    image: "assets/images/revenue_command_center.png"
                },
                {
                    category: "enterprise",
                    badge: "Command Center SG-SST",
                    title: "Sdavila Grupo Asesores — Portal Web & Command Center",
                    desc: "Portal corporativo y sistema centralizado para gestión documental de clientes, trazabilidad y auditoría de SG-SST.",
                    fullDesc: "Desarrollo integral de arquitectura web y centro de control operativo para la consultora Sdavila. Permite a los clientes corporativos subir, consultar y auditar la trazabilidad de sus requisitos de Seguridad y Salud en el Trabajo con almacenamiento seguro en la nube.",
                    tags: ["React", "Vite", "Supabase", "Tailwind CSS", "SG-SST"],
                    image: "assets/images/sdavila_live.png"
                },
                {
                    category: "analytics",
                    badge: "Inteligencia Comercial",
                    title: "PharmaLife BI & Commercial Forecasting",
                    desc: "Tablero ejecutivo interactivo de analítica predictiva y diagnóstico de ventas para distribución farmacéutica.",
                    fullDesc: "Plataforma analítica con modelos econométricos OLS y algoritmos de proyección temporal Prophet para anticipar rotación de producto, desviaciones de margen y cumplimiento de cuotas comerciales.",
                    tags: ["Streamlit", "Python", "Prophet", "OLS Regression", "DataViz"],
                    image: "assets/images/pharmalife_live.png"
                },
                {
                    category: "analytics",
                    badge: "End-to-End BI",
                    title: "SpaceParts — Arquitectura BI Completa",
                    desc: "Pipeline ETL en Python con datasets Parquet, modelado tabular en estrella y tableros en Power BI con métricas de rentabilidad y OTD.",
                    fullDesc: "Solución completa de analítica de datos: extracción y transformación automatizada de millones de registros a formato columnar Parquet, modelado de hechos y dimensiones en Power BI (DAX) y tableros ejecutivos.",
                    tags: ["Power BI", "Python", "ETL", "Parquet", "DAX", "Git Flow"],
                    image: "assets/images/spaceparts-1.png"
                },
                {
                    category: "tools",
                    badge: "Gestión Operativa",
                    title: "Red de Laboratorios Clínicos — Gestión Domiciliaria",
                    desc: "Sistema web multi-zona para optimización de rutas y trazabilidad de toma de muestras a domicilio.",
                    fullDesc: "Dashboard operativo desarrollado en React + Vite con backend relacional en Supabase (PostgreSQL), optimizando la programación de visitas y el flujo de trabajo del personal asistencial en campo.",
                    tags: ["React", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"],
                    image: "assets/images/schema_lab_clin.jpg"
                }
            ]
        },
        education: {
            title: "Formación Académica & Reconocimientos",
            subtitle: "Trayectoria universitaria formal, distinciones institucionales de excelencia y especializaciones técnicas",
            degrees: [
                {
                    level: "Posgrado / Especialización",
                    degree: "Especialización en Analítica de Datos e Información",
                    institution: "Fundación Universitaria Tecnológico Comfenalco",
                    year: "Graduado 2026",
                    award: "🏆 Distinción Meritoria (4.8 / 5.0 Unánime) — Resolución No. 048 de Rectoría (Mención de Honor & Exaltación Pública)",
                    thesis: 'Trabajo de Grado: "Sistema de Analítica Descriptiva y Automatización de Procesos ETL para la Optimización de la Cadena de Suministro en Deceuninck Colombia SAS"',
                    highlights: [
                        "Arquitectura Cloud de Datos & Pipelines ETL automatizados con FastAPI y PostgreSQL",
                        "Diagnóstico de demanda histórica y clasificación de inventarios ABC ponderado",
                        "Gobernanza, seguridad y anonimización de datos corporativos bajo la Ley 1581"
                    ]
                },
                {
                    level: "Pregrado Profesional",
                    degree: "Ingeniería Industrial",
                    institution: "Fundación Universitaria Tecnológico Comfenalco",
                    year: "Graduado 2020",
                    highlights: [
                        "Optimización de operaciones industriales, logística y gestión de cadena de abastecimiento",
                        "Modelación de Investigación de Operaciones, simulación estocástica y teoría de colas",
                        "Control estadístico de procesos (SPC), análisis de capacidad y formulación financiera de proyectos"
                    ]
                },
                {
                    level: "Tecnología Profesional",
                    degree: "Tecnología en Control de Calidad",
                    institution: "Fundación Universitaria Tecnológico Comfenalco",
                    year: "Graduado 2018",
                    highlights: [
                        "Gestión de sistemas de aseguramiento de calidad y auditorías bajo normas ISO 9001",
                        "Metrología aplicada, control dimensional e inspección por muestreo estadístico",
                        "Metodologías de mejora continua: Lean Manufacturing, 5S, Kaizen y análisis causa-raíz"
                    ]
                },
                {
                    level: "Tecnología Profesional",
                    degree: "Tecnología en Análisis y Desarrollo de Sistemas de Información",
                    institution: "SENA (Servicio Nacional de Aprendizaje)",
                    year: "Graduado 2012",
                    highlights: [
                        "Diseño, modelado y administración de bases de datos relacionales con SQL",
                        "Análisis y diseño de software bajo paradigma orientado a objetos (UML)",
                        "Desarrollo de arquitecturas cliente-servidor y pruebas de integración de software"
                    ]
                }
            ],
            diplomas: [
                {
                    name: "Formulación y Gerencia de Proyectos",
                    institution: "Fundación Universitaria Tecnológico Comfenalco",
                    hours: "120 horas",
                    location: "Cartagena",
                    year: "2021"
                },
                {
                    name: "Microsoft Power BI Specialist",
                    institution: "Universidad de Cataluña",
                    duration: "12 semanas",
                    location: "Virtual",
                    year: "2021"
                },
                {
                    name: "Análisis de Datos & Business Intelligence",
                    institution: "Universidad Tecnológica de Bolívar (MINTIC)",
                    duration: "12 semanas",
                    location: "Cartagena",
                    year: "2024"
                }
            ],
            workshops: [
                {
                    name: "Estadística Aplicada al Proceso Empresarial",
                    institution: "Universidad de Cataluña",
                    hours: "40 horas",
                    location: "Cartagena",
                    year: "2021"
                },
                {
                    name: "Herramientas de Dirección y Liderazgo",
                    institution: "Universidad Pontificia Javeriana",
                    hours: "32 horas",
                    location: "Bogotá",
                    year: "2020"
                }
            ],
            platzi: [
                { name: "Ruta Profesional Data Engineer & AI", date: "2022 - 2023", hours: "100+ h" },
                { name: "Python: Funciones, Comprehensions & Manejo de Errores", date: "2023", hours: "32 h" },
                { name: "Análisis de Negocios para Ciencia de Datos", date: "2022", hours: "10 h" },
                { name: "Fundamentos de Ingeniería de Software", date: "2022", hours: "16 h" }
            ]
        },
        contact: {
            title: "Hablemos de Datos y Negocio",
            subtitle: "¿Tienes un desafío operativo, una cadena de suministro que necesita orden o requieres una solución de analítica a medida?",
            email_label: "Correo Electrónico",
            phone_label: "Llamada / WhatsApp",
            location_label: "Ubicación & Disponibilidad",
            location_val: "Cartagena / Bogotá / Remoto Global",
            linkedin_label: "Perfil LinkedIn"
        }
    },
    en: {
        nav: {
            about: "About Me",
            portfolio: "Case Studies",
            experience: "Experience",
            skills: "Tech Stack",
            education: "Education",
            contact: "Contact"
        },
        hero: {
            greeting: "Fayder Enrique<br><span class='highlight'>Arroyo Herazo</span>",
            role: "Solutions Architect & Analytics Engineer",
            bio: "Bilingual (<b>English C1</b>) Industrial Engineer and Data Analytics Specialist awarded <b>Meritorious Distinction (Unanimous 4.8/5.0)</b>. 10+ years designing enterprise cloud data architectures, automated ETL pipelines, and high-impact analytics platforms (SaaS / BI).",
            btn_cv: "Download Resume",
            btn_projects: "View Case Studies",
            btn_contact: "Get in Touch",
            stat_exp: "Years in Operations & Data Solutions",
            stat_grade: "Meritorious Thesis Award (Deceuninck)",
            stat_audit: "COP Audited in Finance & Payroll",
            stat_lang: "Full Professional Bilingual Proficiency"
        },
        about: {
            title: "Value Proposition & Strategy",
            intro: "I combine over a decade of operational leadership with modern data and software engineering to architect solutions that eliminate manual waste and empower executive decision-making.",
            pillars: [
                {
                    icon: "fas fa-database",
                    title: "Data Architecture & Cloud ETL Pipelines",
                    desc: "Automated data pipelines and relational cloud modeling (PostgreSQL, Supabase, FastAPI). Migrating fragile spreadsheet workflows into robust, compliant, and scalable cloud databases."
                },
                {
                    icon: "fas fa-chart-line",
                    title: "Business Intelligence & Predictive Analytics",
                    desc: "Enterprise tabular modeling in Power BI (DAX), seasonal demand forecasting (Prophet), Machine Learning (XGBoost), and causal price elasticity modeling for C-suite decision support."
                },
                {
                    icon: "fas fa-laptop-code",
                    title: "SaaS & Web Platform Engineering",
                    desc: "Engineering modern enterprise applications (Next.js, React, TypeScript, Vercel). Multi-tenant architectures featuring role-based access, real-time dynamic org charts, and executive KPI hubs."
                },
                {
                    icon: "fas fa-industry",
                    title: "Industrial Engineering & Operational Efficiency",
                    desc: "Deep operational insight: supply chain optimization, ABC inventory classification, forensic payroll data audit, and radical reporting cycle-time reduction (from 4 hours to just 25 minutes)."
                }
            ]
        },
        skills: {
            title: "Technical Stack & Core Competencies",
            subtitle: "Battle-tested tools and frameworks organized by engineering domain",
            categories: [
                {
                    name: "Data Engineering & Cloud Databases",
                    icon: "fas fa-server",
                    skills: ["SQL", "PostgreSQL", "Supabase", "ETL / ELT Pipelines", "FastAPI (Python)", "REST APIs", "Power Query", "Data Lakehouse (Parquet)"]
                },
                {
                    name: "Business Intelligence & DataViz",
                    icon: "fas fa-chart-bar",
                    skills: ["Power BI (DAX)", "Tabular Modeling", "Streamlit", "Looker Studio", "Operational KPIs (SLA/NPS)", "Advanced Excel"]
                },
                {
                    name: "Cloud Architecture & Full-Stack",
                    icon: "fas fa-code",
                    skills: ["Next.js (App Router)", "React & TypeScript", "Tailwind CSS", "Node.js", "Vercel Deployments", "Git & GitHub CI/CD", "Multi-Tenant SaaS"]
                },
                {
                    name: "Data Science & Prescriptive Analytics",
                    icon: "fas fa-brain",
                    skills: ["Python (Pandas, NumPy)", "Prophet (Forecasting)", "XGBoost & Scikit-Learn", "Causal Elasticity Modeling", "ABC Classification", "OLS Regression"]
                }
            ]
        },
        experience: {
            title: "Professional Experience & Consulting",
            jobs: [
                {
                    role: "Tech Lead & Data Solutions Architect",
                    company: "Bioger S.A.S. (OrganiSaaS & Nexo Ecosystem)",
                    period: "Jan 2026 - Present",
                    location: "Cartagena / Hybrid",
                    desc: `• Architected and deployed multi-tenant cloud platform (Next.js, Supabase, Vercel) for operational oversight and human capital analytics.<br>
                    • Audited and cross-reconciled large-scale financial and payroll datasets totaling <b>+$17B COP</b>, pinpointing statutory and tax variances.<br>
                    • Engineered real-time dynamic organizational charts, employee performance evaluation pipelines, and climate survey dashboards.`
                },
                {
                    role: "Process Automation & AI-ATS Consultant",
                    company: "FEPCO S.A.S.",
                    period: "Jul 2026 - Present",
                    location: "Cartagena / Remote",
                    desc: `• Built and deployed to production in Vercel <b>Nexo FEPCO Contratación</b>: enterprise ATS with AI engine for candidate pre-filtering and medical tracking.<br>
                    • Designed <b>Nexo Maintenance</b> module, integrating GLPI incident records and industrial safety cards for operational field oversight.`
                },
                {
                    role: "BI & Data Analyst (International Remote)",
                    company: "Fox Ordering",
                    period: "Jan 2026 - Apr 2026",
                    location: "Remote (US / Latam)",
                    desc: `• Modeled and extracted massive relational databases using SQL to pinpoint operational bottlenecks and supply chain inefficiencies.<br>
                    • Engineered executive KPI dashboards tracking critical operational metrics (delivery SLA, NPS, churn, and cycle times).<br>
                    • Maintained standardized data pipelines and repository documentation using Git.`
                },
                {
                    role: "Data Analyst / Market Research",
                    company: "Corporación Unificada Nacional (CUN)",
                    period: "Feb 2026 - Aug 2026",
                    location: "Hybrid",
                    desc: `• Designed and executed quantitative and qualitative market studies to guide strategic university positioning.<br>
                    • Developed interactive enrollment and prospecting intelligence dashboards for leadership decision support.`
                },
                {
                    role: "Tech Innovation & BI Advisor",
                    company: "IPS SYSO Empresarial S.A.S.",
                    period: "Sep 2025 - Dec 2025",
                    location: "Cartagena, Colombia",
                    desc: `• Spearheaded digital transformation in occupational health operations; automated executive reporting using Power BI and Looker Studio.<br>
                    • Integrated clinical datasets (RIPS), infrastructure maintenance logs, and budget tracking.`
                },
                {
                    role: "Financial Planning & Data Analyst",
                    company: "Molinos 3 Castillos",
                    period: "Apr 2024 - Sep 2025",
                    location: "Cartagena",
                    desc: `• Automated financial data extraction and transformation pipelines via Excel Power Query and Power BI.<br>
                    • Built statistical forecast models for annual budget planning and cash flow risk management.`
                },
                {
                    role: "Operations & Process Efficiency Supervisor (9 years)",
                    company: "CREDI JAMAR S.A.",
                    period: "Jan 2015 - Jan 2024",
                    location: "Cartagena",
                    desc: `• Directly managed high-performance operational teams (up to 7 specialists) executing credit recovery goals and productivity SLAs.<br>
                    • Designed and deployed the operation's first automated Power BI dashboard, <b>reducing reporting and processing cycle time from 4 hours to just 25 minutes</b>.<br>
                    • Optimized field service dispatching based on territory effectiveness and geospatial data.`
                },
                {
                    role: "Senior Credit Risk & Portfolio Analyst (6.5 years)",
                    company: "CREDI JAMAR S.A.",
                    period: "Jul 2008 - Dec 2014",
                    location: "Cartagena",
                    desc: `• Monitored delinquent debt portfolios, audited credit underwriting standards, and modeled default mitigation patterns.`
                }
            ]
        },
        portfolio: {
            title: "Featured Case Studies & Deployed Platforms",
            filters: {
                all: "All",
                enterprise: "Enterprise & SaaS",
                analytics: "BI & Predictive Analytics",
                tools: "Operations & Data"
            },
            projects: [
                {
                    category: "enterprise",
                    badge: "Meritorious Thesis Award (4.8/5.0)",
                    title: "Supply Chain Optimization — Deceuninck Colombia",
                    desc: "Web analytics platform and automated cloud ETL pipelines for plant demand, ABC inventory classification, and customs logistics.",
                    fullDesc: "<b>Meritorious Degree Project (Unanimous 4.8/5.0 - Resolution No. 048)</b> for multinational manufacturing leader. Migrated obsolete Excel/VBA spreadsheets to cloud architecture. <br>⚙️ <b>Architecture:</b> FastAPI (Python) + PostgreSQL (Supabase) + React (Vite). <br>📊 <b>Analytics:</b> Descriptive/diagnostic historical demand modeling, weighted ABC classification, and real-time customs tracking. <br>🔒 <b>Compliance:</b> Full data anonymization under statutory privacy laws.",
                    tags: ["FastAPI", "PostgreSQL", "Supabase", "React", "ETL", "Supply Chain"],
                    image: "assets/images/deceuninck_preview.png"
                },
                {
                    category: "enterprise",
                    badge: "Multi-Tenant Enterprise SaaS",
                    title: "OrganiSaaS & Nexo Bioger — Management & Audit Platform",
                    desc: "Multi-tenant SaaS for large-scale payroll data audit (+$17B COP), dynamic org charts, and performance evaluation.",
                    fullDesc: "Enterprise platform deployed on Vercel with Supabase Multi-Tenant architecture. Features SuperAdmin control, enterprise management, <b>forensic financial audit of payroll and statutory benefits exceeding +$17B COP</b>, and interactive real-time org chart.",
                    tags: ["Next.js", "React 19", "Supabase Realtime", "Vercel", "Tailwind CSS"],
                    image: "assets/images/bioger_live.png"
                },
                {
                    category: "enterprise",
                    badge: "AI-Powered ATS",
                    title: "NEXO FEPCO — ATS Platform & Maintenance Center",
                    desc: "AI-driven candidate screening, medical exam tracking, and industrial maintenance operational command center.",
                    fullDesc: "Comprehensive operational suite for FEPCO. Vercel-hosted ATS platform featuring intelligent applicant pre-screening and medical appointment monitoring. Includes industrial maintenance module connecting GLPI incident tracking and safety cards.",
                    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "AI Engine"],
                    image: "assets/images/fepco_live.png"
                },
                {
                    category: "analytics",
                    badge: "Prescriptive B2B Analytics",
                    title: "Revenue Management Command Center",
                    desc: "Prescriptive analytics tool for price and margin optimization, demand simulation, and financial risk mitigation.",
                    fullDesc: "B2B platform modeling price elasticity via Log-Log regression (-2.08) and seasonal forecasts with Prophet and XGBoost. Enables executive price-setting simulations that have prevented commercial exposure totaling $797M COP.",
                    tags: ["Python", "Streamlit", "Prophet", "XGBoost", "Causal Modeling", "Plotly"],
                    image: "assets/images/revenue_command_center.png"
                },
                {
                    category: "enterprise",
                    badge: "SG-SST Command Center",
                    title: "Sdavila Grupo Asesores — Web Portal & Command Center",
                    desc: "Corporate portal and centralized command center for client documentation, regulatory tracking, and SG-SST auditing.",
                    fullDesc: "Architected and deployed web infrastructure and operational control center for consulting firm Sdavila. Enables enterprise clients to upload, review, and audit occupational health and safety requirements with secure cloud storage.",
                    tags: ["React", "Vite", "Supabase", "Tailwind CSS", "SG-SST"],
                    image: "assets/images/sdavila_live.png"
                },
                {
                    category: "analytics",
                    badge: "Commercial Intelligence",
                    title: "PharmaLife BI & Commercial Forecasting",
                    desc: "Interactive executive dashboard featuring predictive modeling and sales diagnostics for pharmaceutical distribution.",
                    fullDesc: "Analytics system incorporating econometric OLS modeling and Prophet forecasting algorithms to anticipate product turnover, margin variances, and sales quota pacing.",
                    tags: ["Streamlit", "Python", "Prophet", "OLS Regression", "DataViz"],
                    image: "assets/images/pharmalife_live.png"
                },
                {
                    category: "analytics",
                    badge: "End-to-End BI",
                    title: "SpaceParts — Full-Stack BI Architecture",
                    desc: "Python ETL pipeline with Parquet datasets, star schema modeling, and Power BI dashboards with profitability and OTD metrics.",
                    fullDesc: "Full-cycle data analytics solution: automated extraction and transformation of millions of transaction records to columnar Parquet format, dimensional modeling in Power BI (DAX), and executive reporting.",
                    tags: ["Power BI", "Python", "ETL", "Parquet", "DAX", "Git Flow"],
                    image: "assets/images/spaceparts-1.png"
                },
                {
                    category: "tools",
                    badge: "Operations Management",
                    title: "Clinical Laboratory Network — Home Service Management",
                    desc: "Multi-zone web platform optimizing route dispatching and mobile clinical sample collection traceability.",
                    fullDesc: "Operational dashboard built with React + Vite and Supabase (PostgreSQL) relational backend, streamlining mobile technician scheduling and field workflow.",
                    tags: ["React", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"],
                    image: "assets/images/schema_lab_clin.jpg"
                }
            ]
        },
        education: {
            title: "Academic Background & Distinctions",
            subtitle: "Formal university degrees, institutional excellence awards, and continuous engineering tracks",
            degrees: [
                {
                    level: "Postgraduate Degree",
                    degree: "Specialization in Data & Information Analytics",
                    institution: "Fundación Universitaria Tecnológico Comfenalco",
                    year: "Graduated 2026",
                    award: "🏆 Meritorious Thesis Award (4.8 / 5.0 Unanimous) — Rector's Resolution No. 048 (Honorary Mention & Public Distinction)",
                    thesis: 'Master Thesis: "Descriptive Analytics System and ETL Process Automation for Supply Chain Optimization at Deceuninck Colombia SAS"',
                    highlights: [
                        "Cloud Data Architectures & Automated ETL Pipelines using FastAPI and PostgreSQL",
                        "Historical demand diagnostics and weighted ABC inventory classification",
                        "Corporate data governance, security, and statutory compliance under Law 1581"
                    ]
                },
                {
                    level: "Professional Bachelor",
                    degree: "B.S. in Industrial Engineering",
                    institution: "Fundación Universitaria Tecnológico Comfenalco",
                    year: "Graduated 2020",
                    highlights: [
                        "Operations research modeling, stochastic simulation, and queueing theory",
                        "Statistical Process Control (SPC), capacity analysis, and capital investment appraisal",
                        "Manufacturing plant layout, Lean methodologies, and supply chain management"
                    ]
                },
                {
                    level: "Associate Degree",
                    degree: "Associate Degree in Quality Control",
                    institution: "Fundación Universitaria Tecnológico Comfenalco",
                    year: "Graduated 2018",
                    highlights: [
                        "Quality management systems auditing and compliance under ISO 9001 standards",
                        "Applied metrology, dimensional control, and statistical acceptance sampling",
                        "Continuous improvement frameworks: Lean Manufacturing, 5S, Kaizen, and root-cause analysis"
                    ]
                },
                {
                    level: "Associate Degree",
                    degree: "Associate Degree in Information Systems Analysis and Development",
                    institution: "SENA (National Service of Learning)",
                    year: "Graduated 2012",
                    highlights: [
                        "Relational database modeling, schema design, and administration with SQL",
                        "Object-oriented software analysis and UML system modeling",
                        "Client-server system development and software integration testing"
                    ]
                }
            ],
            diplomas: [
                {
                    name: "Project Formulation and Management",
                    institution: "Fundación Universitaria Tecnológico Comfenalco",
                    hours: "120 hours",
                    location: "Cartagena",
                    year: "2021"
                },
                {
                    name: "Microsoft Power BI Specialist",
                    institution: "Universidad de Cataluña",
                    duration: "12 weeks",
                    location: "Virtual",
                    year: "2021"
                },
                {
                    name: "Data Analytics & Business Intelligence",
                    institution: "Universidad Tecnológica de Bolívar (MINTIC)",
                    duration: "12 weeks",
                    location: "Cartagena",
                    year: "2024"
                }
            ],
            workshops: [
                {
                    name: "Applied Statistics for Business Processes",
                    institution: "Universidad de Cataluña",
                    hours: "40 hours",
                    location: "Cartagena",
                    year: "2021"
                },
                {
                    name: "Management Tools & Leadership",
                    institution: "Universidad Pontificia Javeriana",
                    hours: "32 hours",
                    location: "Bogotá",
                    year: "2020"
                }
            ],
            platzi: [
                { name: "Professional Data Engineer & AI Path", date: "2022 - 2023", hours: "100+ h" },
                { name: "Python: Functions, Comprehensions & Error Handling", date: "2023", hours: "32 h" },
                { name: "Business Analytics for Data Science", date: "2022", hours: "10 h" },
                { name: "Software Engineering Fundamentals", date: "2022", hours: "16 h" }
            ]
        },
        contact: {
            title: "Let's Connect",
            subtitle: "Looking to optimize an operational pipeline, streamline your supply chain, or deploy custom data intelligence?",
            email_label: "Email",
            phone_label: "Phone / WhatsApp",
            location_label: "Location & Availability",
            location_val: "Cartagena / Bogotá / Open to Global Remote",
            linkedin_label: "LinkedIn Profile"
        }
    }
};
