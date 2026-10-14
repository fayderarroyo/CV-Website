// Current language state
let currentLang = 'es';
let currentPortfolioFilter = 'all';
let currentExperienceFilter = 'all';

// DOM Elements
const langBtns = document.querySelectorAll('.lang-btn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateContent();

    // Event Listeners for Language Switch
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang !== currentLang) {
                currentLang = lang;
                updateActiveLangBtn();
                updateContent();
            }
        });
    });

    initScrollAnimations();
});

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.about-card, section:not(#hero) h2, .exp-card, .project-card, .contact-item, .edu-section-title, .edu-card, .pillar-card, .skill-domain-card');
    
    if (!('IntersectionObserver' in window)) {
        animatedElements.forEach(el => el.classList.add('visible'));
        return;
    }

    const observerOptions = {
        root: null,
        rootMargin: '120px 0px 120px 0px',
        threshold: 0.01
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        el.classList.add('fade-up');
        observer.observe(el);
    });
}

function updateActiveLangBtn() {
    langBtns.forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function updateContent() {
    const t = translations[currentLang];

    // Update simple text elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = getNestedValue(t, key);
        if (value) el.innerHTML = value;
    });

    // Update Hero Stats Bar
    renderHeroStats(t.hero);

    // Update About Strategic Pillars
    renderAbout(t.about);

    // Update Portfolio with Filters
    renderPortfolioFilters(t.portfolio.filters);
    renderPortfolioList(t.portfolio.projects);

    // Update Experience with Filters
    const expSubtitleEl = document.getElementById('experience-subtitle');
    if (expSubtitleEl) expSubtitleEl.textContent = t.experience.subtitle || '';
    renderExperienceFilters(t.experience.filters);
    renderExperience(t.experience.jobs);

    // Update Skills Domains
    renderSkills(t.skills);

    // Update Education & Diplomas
    renderEducation(t.education);

    // Update Contact
    renderContact(t.contact);

    // Update CV Download Link
    const cvBtn = document.getElementById('download-cv');
    if (cvBtn) {
        const cvPath = currentLang === 'es' ? 'assets/documents/cv_es.pdf?v=' + Date.now() : 'assets/documents/cv_en.pdf?v=' + Date.now();
        cvBtn.setAttribute('href', cvPath);
    }

    // Initialize or refresh scroll animations
    initScrollAnimations();
}

// Helper to get nested object values using string dot notation "nav.about"
function getNestedValue(obj, path) {
    return path.split('.').reduce((prev, curr) => {
        return prev ? prev[curr] : null;
    }, obj);
}

function renderHeroStats(hero) {
    const container = document.getElementById('hero-stats');
    if (!container) return;

    container.innerHTML = `
        <div class="stat-item">
            <div class="stat-number">+10</div>
            <div class="stat-label">${hero.stat_exp}</div>
        </div>
        <div class="stat-item highlight-stat">
            <div class="stat-number">4.8 / 5.0</div>
            <div class="stat-label">${hero.stat_grade}</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">+$17.000M</div>
            <div class="stat-label">${hero.stat_audit}</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">C1</div>
            <div class="stat-label">${hero.stat_lang}</div>
        </div>
    `;
}

function renderAbout(about) {
    const introEl = document.getElementById('about-intro');
    const pillarsContainer = document.getElementById('about-pillars');
    if (!introEl || !pillarsContainer) return;

    introEl.innerHTML = about.intro;
    pillarsContainer.innerHTML = '';

    about.pillars.forEach(pillar => {
        const card = document.createElement('div');
        card.className = 'pillar-card';
        card.innerHTML = `
            <div class="pillar-icon"><i class="${pillar.icon}"></i></div>
            <h3 class="pillar-title">${pillar.title}</h3>
            <p class="pillar-desc">${pillar.desc}</p>
        `;
        pillarsContainer.appendChild(card);
    });
}

function renderPortfolioFilters(filters) {
    const container = document.getElementById('portfolio-filters');
    if (!container) return;

    container.innerHTML = '';
    const keys = Object.keys(filters);

    keys.forEach(key => {
        const btn = document.createElement('button');
        btn.className = `filter-btn ${key === currentPortfolioFilter ? 'active' : ''}`;
        btn.textContent = filters[key];
        btn.setAttribute('data-filter', key);

        btn.addEventListener('click', () => {
            currentPortfolioFilter = key;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPortfolioList(translations[currentLang].portfolio.projects);
        });

        container.appendChild(btn);
    });
}

function renderPortfolioList(projects) {
    const container = document.getElementById('portfolio-list');
    if (!container) return;

    container.innerHTML = '';

    const filtered = currentPortfolioFilter === 'all'
        ? projects
        : projects.filter(p => p.category === currentPortfolioFilter);

    filtered.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';

        const imgUrl = project.image || 'assets/images/header_laboratorio.png';

        card.innerHTML = `
            <div class="project-img-wrapper">
                <img src="${imgUrl}" alt="${project.title}" class="project-img" loading="lazy">
                ${project.badge ? `<span class="project-badge">${project.badge}</span>` : ''}
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-summary">${project.desc}</p>
                ${project.fullDesc ? `<p class="project-fulldesc">${project.fullDesc}</p>` : ''}

                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                
                ${project.link ? `
                    <div class="project-cta">
                        <a href="${project.link}" target="_blank" class="project-link">
                            ${currentLang === 'es' ? 'Ver Proyecto / Demo' : 'View Project / Demo'} <i class="fas fa-arrow-up-right-from-square"></i>
                        </a>
                    </div>
                ` : ''}
            </div>
        `;
        container.appendChild(card);
    });
}

function renderExperienceFilters(filters) {
    const container = document.getElementById('experience-filters');
    if (!container || !filters) return;

    container.innerHTML = '';
    const keys = Object.keys(filters);

    keys.forEach(key => {
        const btn = document.createElement('button');
        btn.className = `filter-btn ${key === currentExperienceFilter ? 'active' : ''}`;
        btn.textContent = filters[key];
        btn.setAttribute('data-filter', key);

        btn.addEventListener('click', () => {
            currentExperienceFilter = key;
            document.querySelectorAll('#experience-filters .filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderExperience(translations[currentLang].experience.jobs);
            initScrollAnimations();
        });

        container.appendChild(btn);
    });
}

function renderExperience(jobs) {
    const container = document.getElementById('experience-list');
    if (!container) return;
    container.innerHTML = '';

    const filtered = currentExperienceFilter === 'all'
        ? jobs
        : jobs.filter(j => j.type === currentExperienceFilter);

    filtered.forEach(job => {
        const item = document.createElement('div');
        item.className = `exp-card exp-card-${job.type || 'corporate'}`;

        let iconClass = 'fas fa-briefcase';
        if (job.type === 'corporate') iconClass = 'fas fa-building';
        else if (job.type === 'contract') iconClass = 'fas fa-clock';

        const typeBadgeHtml = job.typeLabel ? `
            <span class="exp-type-badge exp-type-${job.type || 'corporate'}">
                <i class="${iconClass}"></i> ${job.typeLabel}
            </span>
        ` : '';

        item.innerHTML = `
            <div class="exp-header">
                <div>
                    <div class="exp-role-row">
                        <div class="exp-role">${job.role}</div>
                        ${typeBadgeHtml}
                    </div>
                    <div class="exp-company">
                        ${job.company} ${job.location ? `· <span class="exp-location">${job.location}</span>` : ''}
                    </div>
                </div>
                <div class="exp-date">${job.period}</div>
            </div>
            <p class="exp-desc">${job.desc}</p>
        `;
        container.appendChild(item);
    });
}

function renderSkills(skills) {
    const subtitleEl = document.getElementById('skills-subtitle');
    const container = document.getElementById('skills-categories');
    if (subtitleEl) subtitleEl.textContent = skills.subtitle;
    if (!container) return;

    container.innerHTML = '';

    skills.categories.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'skill-domain-card';
        card.innerHTML = `
            <div class="domain-header">
                <div class="domain-icon"><i class="${cat.icon}"></i></div>
                <h3 class="domain-title">${cat.name}</h3>
            </div>
            <div class="domain-tags">
                ${cat.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
            </div>
        `;
        container.appendChild(card);
    });
}

function renderEducation(education) {
    const container = document.getElementById('education-list');
    if (!container) return;
    container.innerHTML = '';

    // Degrees
    if (education.degrees && education.degrees.length > 0) {
        createCardSection(
            container,
            currentLang === 'es' ? 'Títulos Universitarios & Especialización' : 'University Degrees & Postgrad',
            'fas fa-graduation-cap',
            education.degrees.map(degree => ({
                ...degree,
                type: 'degree',
                typeLabel: currentLang === 'es' ? 'Título' : 'Degree',
                title: degree.degree,
                subtitle: degree.institution,
                year: degree.year
            }))
        );
    }

    // Diplomas & Workshops
    const diplomasAndWorkshops = [];

    if (education.diplomas) {
        education.diplomas.forEach(diploma => {
            diplomasAndWorkshops.push({
                ...diploma,
                type: 'diploma',
                typeLabel: currentLang === 'es' ? 'Diplomado' : 'Diploma',
                title: diploma.name,
                subtitle: diploma.institution,
                details: diploma.hours || diploma.duration,
                location: diploma.location,
                year: diploma.year
            });
        });
    }

    if (education.workshops) {
        education.workshops.forEach(workshop => {
            diplomasAndWorkshops.push({
                ...workshop,
                type: 'workshop',
                typeLabel: currentLang === 'es' ? 'Taller / Curso' : 'Workshop',
                title: workshop.name,
                subtitle: workshop.institution,
                details: workshop.hours,
                location: workshop.location,
                year: workshop.year
            });
        });
    }

    if (diplomasAndWorkshops.length > 0) {
        createCardSection(
            container,
            currentLang === 'es' ? 'Diplomados y Especializaciones Cortas' : 'Diplomas & Continuing Education',
            'fas fa-award',
            diplomasAndWorkshops
        );
    }

    // Platzi Section
    if (education.platzi && education.platzi.length > 0) {
        createAccordionSection(
            container,
            currentLang === 'es' ? 'Ruta de Aprendizaje Profesional — Platzi' : 'Professional Learning Track — Platzi',
            'fas fa-laptop-code',
            education.platzi
        );
    }
}

function createCardSection(container, title, icon, items) {
    const section = document.createElement('div');
    section.className = 'edu-section';

    const sectionTitle = document.createElement('h3');
    sectionTitle.className = 'edu-section-title';
    sectionTitle.innerHTML = `<i class="${icon}"></i> ${title}`;
    section.appendChild(sectionTitle);

    const grid = document.createElement('div');
    grid.className = 'edu-grid';

    items.sort((a, b) => {
        const yearA = parseInt(a.year) || 0;
        const yearB = parseInt(b.year) || 0;
        return yearB - yearA;
    });

    items.forEach(item => {
        const card = createModernCard(item);
        grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
}

function createModernCard(item) {
    const card = document.createElement('div');
    card.className = `edu-card ${item.type} ${item.award ? 'has-award' : ''}`;

    let iconClass = 'fas fa-certificate';
    if (item.type === 'degree') iconClass = 'fas fa-graduation-cap';
    else if (item.type === 'diploma') iconClass = 'fas fa-scroll';
    else if (item.type === 'workshop') iconClass = 'fas fa-tools';

    const awardHtml = item.award ? `
        <div class="edu-award-badge">
            <i class="fas fa-trophy"></i>
            <span>${item.award}</span>
        </div>
    ` : '';

    const thesisHtml = item.thesis ? `
        <div class="edu-thesis-box">
            <div class="thesis-label">
                <i class="fas fa-file-contract"></i>
                <strong>${currentLang === 'es' ? 'Proyecto de Grado / Tesis:' : 'Thesis / Capstone:'}</strong>
            </div>
            <div class="thesis-title">${item.thesis}</div>
        </div>
    ` : '';

    const highlightsHtml = item.highlights && item.highlights.length > 0 ? `
        <ul class="edu-highlights-list">
            ${item.highlights.map(h => `<li><i class="fas fa-check-circle"></i> <span>${h}</span></li>`).join('')}
        </ul>
    ` : '';

    card.innerHTML = `
        <div class="edu-card-header">
            <div class="edu-icon-box ${item.type}">
                <i class="${iconClass}"></i>
            </div>
            <div class="edu-year-badge">${item.year || item.date}</div>
        </div>
        
        <div class="edu-card-content">
            <h4 class="edu-title">${item.title}</h4>
            ${item.subtitle ? `<div class="edu-subtitle"><i class="fas fa-university"></i> ${item.subtitle}</div>` : ''}
            
            <div class="edu-meta">
                <span class="edu-type-badge edu-type-${item.type}">${item.typeLabel}</span>
                ${item.details ? `<span class="edu-detail"><i class="far fa-clock"></i> ${item.details}</span>` : ''}
                ${item.location ? `<span class="edu-location"><i class="fas fa-location-dot"></i> ${item.location}</span>` : ''}
            </div>

            ${awardHtml}
            ${thesisHtml}
            ${highlightsHtml}
        </div>
    `;

    return card;
}

function createAccordionSection(container, title, icon, courses) {
    const section = document.createElement('div');
    section.className = 'edu-section';

    const sectionTitle = document.createElement('h3');
    sectionTitle.className = 'edu-section-title';
    sectionTitle.innerHTML = `<i class="${icon}"></i> ${title}`;
    section.appendChild(sectionTitle);

    const accordionCard = document.createElement('div');
    accordionCard.className = 'edu-card accordion-card';

    accordionCard.innerHTML = `
        <div class="accordion-header">
            <div class="accordion-info">
                <div class="edu-icon-box platzi">
                    <i class="fas fa-layer-group"></i>
                </div>
                <div class="accordion-text">
                    <div class="accordion-header-top">
                        <h4 class="edu-title">Platzi Professional Career</h4>
                        <span class="accordion-badge">${courses.length} Cursos Clave</span>
                    </div>
                    <div class="edu-subtitle" style="color: var(--accent-primary); font-size: 0.9rem;">
                        ${currentLang === 'es' ? 'Data Engineering & AI Foundations' : 'Data Engineering & AI Foundations'}
                    </div>
                </div>
            </div>
            <div class="accordion-toggle">
                <i class="fas fa-chevron-down"></i>
            </div>
        </div>
        <div class="accordion-content">
            <div class="course-list">
                ${courses.map(c => `
                    <div class="course-item">
                        <i class="fas fa-check-circle course-check"></i>
                        <div class="course-info">
                            <span class="course-name">${c.name}</span>
                            <span class="course-meta">${c.date} · ${c.hours}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    const header = accordionCard.querySelector('.accordion-header');
    header.addEventListener('click', () => {
        accordionCard.classList.toggle('active');
    });

    section.appendChild(accordionCard);
    container.appendChild(section);
}

function renderContact(contact) {
    const subtitleEl = document.getElementById('contact-subtitle');
    const container = document.getElementById('contact-details');
    if (subtitleEl) subtitleEl.textContent = contact.subtitle;
    if (!container) return;

    container.innerHTML = `
        <a href="mailto:fayderarroyo@gmail.com" class="contact-item">
            <i class="fas fa-envelope contact-icon"></i>
            <h3>${contact.email_label}</h3>
            <p>fayderarroyo@gmail.com</p>
        </a>
        <a href="https://wa.me/573043826145" target="_blank" class="contact-item">
            <i class="fab fa-whatsapp contact-icon"></i>
            <h3>${contact.phone_label}</h3>
            <p>+57 304 382 6145 / +57 300 780 4196</p>
        </a>
        <a href="https://www.linkedin.com/in/fayderarroyo/" target="_blank" class="contact-item">
            <i class="fab fa-linkedin contact-icon"></i>
            <h3>${contact.linkedin_label}</h3>
            <p>linkedin.com/in/fayderarroyo</p>
        </a>
        <div class="contact-item">
            <i class="fas fa-map-marker-alt contact-icon"></i>
            <h3>${contact.location_label}</h3>
            <p>${contact.location_val}</p>
        </div>
    `;
}
