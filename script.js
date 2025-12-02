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

    // Update complex sections (Experience & Portfolio)
    renderExperience(t.experience.jobs);
    renderPortfolio(t.portfolio.projects);

    // Update CV Download Link
    const cvBtn = document.getElementById('download-cv');
    if (cvBtn) {
        const cvPath = currentLang === 'es' ? 'assets/documents/cv_es.pdf' : 'assets/documents/cv_en.pdf';
        cvBtn.setAttribute('href', cvPath);
        // Optional: Update download attribute if you want to force a specific filename
        // cvBtn.setAttribute('download', currentLang === 'es' ? 'Fayder_Arroyo_CV_ES.pdf' : 'Fayder_Arroyo_CV_EN.pdf');
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
