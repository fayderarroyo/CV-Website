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
        createTimelineSection(
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
        createTimelineSection(
            container,
            currentLang === 'es' ? 'Diplomados y Talleres' : 'Diplomas & Workshops',
            'fas fa-award',
            diplomasAndWorkshops
        );
    }

    // ========== TIMELINE 3: Platzi Courses ==========
    if (education.platzi && education.platzi.length > 0) {
        createTimelineSection(
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

// Helper function to create a timeline section
function createTimelineSection(container, title, icon, items) {
    const section = document.createElement('div');
    section.className = 'timeline-section';

    const sectionTitle = document.createElement('h3');
    sectionTitle.className = 'timeline-section-title';
    sectionTitle.innerHTML = `<i class="${icon}"></i> ${title}`;
    section.appendChild(sectionTitle);

    const timeline = document.createElement('div');
    timeline.className = 'timeline-container';

    const line = document.createElement('div');
    line.className = 'timeline-line';
    timeline.appendChild(line);

    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'timeline-items';

    // Sort by year
    items.sort((a, b) => {
        const yearA = a.status === 'current' || a.year === 'En curso' || a.year === 'In Progress' ? 9999 : parseInt(a.year) || 0;
        const yearB = b.status === 'current' || b.year === 'En curso' || b.year === 'In Progress' ? 9999 : parseInt(b.year) || 0;
        return yearB - yearA;
    });

    items.forEach(item => {
        const timelineItem = createTimelineItem(item);
        itemsContainer.appendChild(timelineItem);
    });

    timeline.appendChild(itemsContainer);
    section.appendChild(timeline);
    container.appendChild(section);
}

// Helper function to create timeline items
function createTimelineItem(item) {
    const timelineItem = document.createElement('div');
    timelineItem.className = `timeline-item ${item.status === 'current' ? 'current' : ''}`;

    // Year label
    const yearLabel = document.createElement('div');
    yearLabel.className = 'timeline-year';
    yearLabel.textContent = item.year || item.date || '';

    // Dot
    const dot = document.createElement('div');
    dot.className = 'timeline-dot';

    // Card
    const card = document.createElement('div');
    card.className = 'timeline-card';

    let cardHTML = `
        <span class="timeline-type ${item.type}">${item.typeLabel}</span>
        <div class="timeline-title">${item.title}</div>
    `;

    if (item.subtitle) {
        cardHTML += `<div class="timeline-institution">${item.subtitle}</div>`;
    }

    if (item.details) {
        cardHTML += `<div class="timeline-details">${item.details}</div>`;
    }

    if (item.location) {
        cardHTML += `<div class="timeline-location"><i class="fas fa-map-marker-alt"></i> ${item.location}</div>`;
    }

    if (item.status === 'current') {
        cardHTML += `<span class="timeline-status">${currentLang === 'es' ? 'En curso' : 'In Progress'}</span>`;
    }

    card.innerHTML = cardHTML;

    timelineItem.appendChild(yearLabel);
    timelineItem.appendChild(dot);
    timelineItem.appendChild(card);

    return timelineItem;
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
