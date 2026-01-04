// Current language state
let currentLang = 'es';

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
});

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

    // Update complex sections (Experience, Education & Portfolio)
    renderExperience(t.experience.jobs);
    renderEducation(t.education);
    renderCertifications(t.education);
    renderPortfolio(t.portfolio.projects);

    // Update CV Download Link
    const cvBtn = document.getElementById('download-cv');
    if (cvBtn) {
        const cvPath = currentLang === 'es' ? 'assets/documents/cv_es.pdf' : 'assets/documents/cv_en.pdf';
        cvBtn.setAttribute('href', cvPath);
    }
}

// Helper to get nested object values using string dot notation "nav.about"
function getNestedValue(obj, path) {
    return path.split('.').reduce((prev, curr) => {
        return prev ? prev[curr] : null;
    }, obj);
}

function renderExperience(jobs) {
    const container = document.getElementById('experience-list');
    container.innerHTML = '';

    jobs.forEach(job => {
        const item = document.createElement('div');
        item.className = 'exp-card';
        item.innerHTML = `
            <div class="exp-header">
                <div>
                    <div class="exp-role">${job.role}</div>
                    <div class="exp-company">${job.company}</div>
                </div>
                <div class="exp-date">${job.period}</div>
            </div>
            <p class="exp-desc">${job.desc}</p>
        `;
        container.appendChild(item);
    });
}

function renderEducation(education) {
    const container = document.getElementById('education-list');
    container.innerHTML = '';

    // ========== TIMELINE 1: Academic Degrees ==========
    if (education.degrees && education.degrees.length > 0) {
        createCardSection(
            container,
            currentLang === 'es' ? 'Formación Académica' : 'Academic Degrees',
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

    // ========== TIMELINE 2: Diplomas + Workshops (MERGED) ==========
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
                typeLabel: currentLang === 'es' ? 'Taller' : 'Workshop',
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
            currentLang === 'es' ? 'Diplomados y Talleres' : 'Diplomas & Workshops',
            'fas fa-award',
            diplomasAndWorkshops
        );
    }

    // ========== TIMELINE 3: Platzi Courses ==========
    if (education.platzi && education.platzi.length > 0) {
        createCardSection(
            container,
            currentLang === 'es' ? 'Ruta Data Engineer - Platzi' : 'Data Engineer Path - Platzi',
            'fas fa-laptop-code',
            education.platzi.map(course => ({
                ...course,
                type: 'platzi',
                typeLabel: 'Platzi',
                title: course.name,
                subtitle: course.date,
                details: course.hours,
                year: course.date ? course.date.split(' ').pop() : ''
            }))
        );
    }
}

// Helper function to create a Card section (replaces timeline)
function createCardSection(container, title, icon, items) {
    const section = document.createElement('div');
    section.className = 'edu-section';

    const sectionTitle = document.createElement('h3');
    sectionTitle.className = 'edu-section-title';
    sectionTitle.innerHTML = `<i class="${icon}"></i> ${title}`;
    section.appendChild(sectionTitle);

    const grid = document.createElement('div');
    grid.className = 'edu-grid';

    // Sort by year
    items.sort((a, b) => {
        const yearA = a.status === 'current' || a.year === 'En curso' || a.year === 'In Progress' ? 9999 : parseInt(a.year) || 0;
        const yearB = b.status === 'current' || b.year === 'En curso' || b.year === 'In Progress' ? 9999 : parseInt(b.year) || 0;
        return yearB - yearA;
    });

    items.forEach(item => {
        const card = createModernCard(item);
        grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
}

// Helper function to create modern cards
function createModernCard(item) {
    const card = document.createElement('div');
    card.className = `edu-card ${item.type}`;

    // Icon handling
    let iconClass = 'fas fa-certificate';
    if (item.type === 'degree') iconClass = 'fas fa-graduation-cap';
    else if (item.type === 'diploma') iconClass = 'fas fa-scroll';
    else if (item.type === 'workshop') iconClass = 'fas fa-tools';
    else if (item.type === 'platzi') iconClass = 'fas fa-laptop-code';

    // Badge Color Mapping
    let badgeClass = 'default-badge';
    if (item.type === 'degree') badgeClass = 'degree-badge';
    else if (item.type === 'platzi') badgeClass = 'platzi-badge';

    card.innerHTML = `
        <div class="edu-card-header">
            <div class="edu-icon-box ${item.type}">
                <i class="${iconClass}"></i>
            </div>
            <div class="edu-year-badge">${item.year || item.date}</div>
        </div>
        
        <div class="edu-card-content">
            <h4 class="edu-title">${item.title}</h4>
            ${item.subtitle ? `<div class="edu-subtitle">${item.subtitle}</div>` : ''}
            
            <div class="edu-meta">
                <span class="edu-type-badge ${badgeClass}">${item.typeLabel}</span>
                ${item.details ? `<span class="edu-detail"><i class="far fa-clock"></i> ${item.details}</span>` : ''}
            </div>

            ${item.location ? `<div class="edu-location"><i class="fas fa-map-marker-alt"></i> ${item.location}</div>` : ''}
            ${item.status === 'current' ? `<div class="edu-status-active"><span class="pulse-dot"></span> ${currentLang === 'es' ? 'En curso' : 'In Progress'}</div>` : ''}
        </div>
    `;

    return card;
}

function renderCertifications(education) {
    // This function is now deprecated as everything is in the timeline
    // Keep it empty to avoid errors
}

function renderPortfolio(projects) {
    const container = document.getElementById('portfolio-list');
    container.innerHTML = '';

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';

        // Use local image if available, else placeholder
        const imgUrl = project.image || `https://picsum.photos/seed/${project.title.replace(/\s/g, '')}/600/400`;

        card.innerHTML = `
            <div class="project-img-wrapper">
                <img src="${imgUrl}" alt="${project.title}" class="project-img">
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p style="margin: 0.5rem 0; color: var(--text-secondary); font-size: 0.9rem;">${project.desc}</p>
                
                ${project.fullDesc ? `<p style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-muted); border-top: 1px solid var(--glass-border); padding-top: 0.5rem;">${project.fullDesc}</p>` : ''}

                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                
                ${project.link ? `<div style="margin-top: 1rem;"><a href="${project.link}" target="_blank" style="color: var(--primary-color); text-decoration: none; font-size: 0.9rem; font-weight: 500;">Ver Proyecto <i class="fas fa-external-link-alt"></i></a></div>` : ''}
            </div>
        `;
        container.appendChild(card);
    });
}
