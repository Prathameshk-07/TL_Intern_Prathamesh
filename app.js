const STORAGE_KEY = 'tinkerer-portfolio-v1';
const DEFAULT_PROFILE_SRC = 'assets/profile-photo.png';
const MAX_FILE_SIZE = 5 * 1024 * 1024; /* 5 MB per file — localStorage limit */

const ACCENT_COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#06b6d4'];

const FILE_ACCEPT =
    '.pdf,.doc,.docx,.txt,.md,.zip,.rar,.7z,.stl,.gcode,.ino,.py,.js,.html,.css,.json,.xml,.csv,.png,.jpg,.jpeg,.gif,.webp,.svg,.mp4,.mov,.ppt,.pptx,.xls,.xlsx';

function buildWeek1GithubEntries() {
    const base = 'assets/week1-github/';
    const steps = [
        ['01-github-dashboard-profile.png', 'GitHub dashboard — open profile menu from top right.'],
        ['02-github-repositories-menu.png', 'Select Repositories from the profile dropdown.'],
        ['03-new-repository-button.png', 'Click the green New button to create a repository.'],
        ['04-create-repository-form.png', 'Create a new repository (name: TL_Intern_Prathamesh).'],
        ['05-repository-configuration.png', 'Set visibility to Public; leave README off; click Create repository.'],
        ['06-open-visual-studio-code.png', 'Open Visual Studio Code from Windows search.'],
        ['07-vscode-file-menu.png', 'In VS Code, open the File menu.'],
        ['08-vscode-open-folder.png', 'Choose Open Folder to load the project.'],
        ['09-select-portfolio-folder.png', 'Select the portfolio p folder from Downloads.'],
        ['10-vscode-terminal-menu.png', 'Open the Terminal menu in VS Code.'],
        ['11-new-terminal.png', 'Click New Terminal (Ctrl+Shift+`).'],
        ['12-git-init-terminal.png', 'Run git init in the integrated terminal.'],
        ['13-git-status-clean.png', 'Run git status to check branch and working tree.'],
        ['14-git-branch-main.png', 'Rename branch to main: git branch -M main.'],
        ['15-vscode-source-control.png', 'Use Source Control panel to stage, commit, and push.'],
        ['16-github-profile-repositories.png', 'GitHub profile — Repositories tab.'],
        ['17-tl-intern-repository.png', 'TL_Intern_Prathamesh repository on GitHub.'],
        ['18-git-init-reinitialized.png', 'git init — repository initialized in project folder.'],
        ['19-git-status-and-branch.png', 'git status and git branch -M main in terminal.'],
        ['20-push-ready-terminal.png', 'Terminal ready after Git setup in VS Code.'],
        ['21-github-repos-overview.png', 'All repositories on GitHub account overview.'],
    ];

    const images = steps.map(([file, caption], i) => ({
        id: `w1-github-img-${String(i + 1).padStart(2, '0')}`,
        type: 'image',
        src: base + file,
        caption,
        createdAt: `2026-05-20T${String(9 + Math.floor(i / 4)).padStart(2, '0')}:${String((i * 3) % 60).padStart(2, '0')}:00.000Z`,
    }));

    return [
        {
            id: 'w1-github-intro',
            type: 'project',
            title: 'Introduction to GitHub',
            description:
                'Week 1 activity: setting up GitHub and pushing the Tinkerers\' Lab portfolio from VS Code. Steps covered — create the TL_Intern_Prathamesh repository on GitHub, open the project in VS Code, use git init, git status, git branch -M main, then stage, commit, and push via the Source Control panel or terminal (git add ., git commit -m "message", git push -u origin main).',
            createdAt: '2026-05-20T09:00:00.000Z',
        },
        {
            id: 'w1-github-learning',
            type: 'learning',
            topic: 'Introduction to GitHub',
            machine: 'Visual Studio Code, Git, GitHub',
            concept:
                'Version control with Git lets you track project changes. GitHub hosts the remote repository. VS Code integrates Git so you can push portfolio files without leaving the editor.',
            createdAt: '2026-05-20T09:05:00.000Z',
        },
        ...images,
    ];
}

const DEFAULT_DATA = {
    profileImage: null,
    aboutExtra: '',
    skills: [
        { id: 's1', name: 'Python', level: 65, proficiency: 'Intermediate' },
        { id: 's2', name: 'HTML & CSS', level: 70, proficiency: 'Intermediate' },
        { id: 's3', name: 'IoT Basics', level: 55, proficiency: 'Beginner' },
        { id: 's4', name: 'Basic Electronics', level: 50, proficiency: 'Beginner' },
        { id: 's5', name: 'Arduino', level: 45, proficiency: 'Beginner' },
        { id: 's6', name: '3D Printing', level: 40, proficiency: 'Beginner' },
    ],
    projects: [
        {
            id: 'p1',
            title: 'Hydroponics',
            description: 'Hydroponic system design and automation for soil-free plant growth.',
            tags: ['IoT', 'Automation'],
            color: ACCENT_COLORS[0],
            files: [],
        },
        {
            id: 'p2',
            title: 'RC Car',
            description: 'Building and programming a remote-controlled car with electronics assembly.',
            tags: ['Electronics', 'Arduino'],
            color: ACCENT_COLORS[1],
            files: [],
        },
        {
            id: 'p3',
            title: 'TODO App',
            description: 'A task-management web app built with HTML, CSS, and JavaScript.',
            tags: ['HTML', 'JavaScript'],
            color: ACCENT_COLORS[2],
            files: [],
        },
    ],
    weeks: [
        { id: 'w1', label: 'Week 1', expanded: true, entries: buildWeek1GithubEntries() },
        { id: 'w2', label: 'Week 2', expanded: false, entries: [] },
        { id: 'w3', label: 'Week 3', expanded: false, entries: [] },
        { id: 'w4', label: 'Week 4', expanded: false, entries: [] },
    ],
};

let state = loadState();
let modalContext = null;

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            return mergeDefaults(parsed);
        }
    } catch (_) {
        /* use defaults */
    }
    return structuredClone(DEFAULT_DATA);
}

function mergeDefaults(parsed) {
    const base = structuredClone(DEFAULT_DATA);
    return {
        profileImage: parsed.profileImage ?? base.profileImage,
        aboutExtra: parsed.aboutExtra ?? base.aboutExtra,
        skills: parsed.skills?.length ? parsed.skills : base.skills,
        projects: (parsed.projects?.length ? parsed.projects : base.projects).map((p) => ({
            ...p,
            files: p.files ?? [],
        })),
        weeks: (parsed.weeks?.length === 4 ? parsed.weeks : base.weeks).map((week, index) => {
            if (index !== 0) return week;
            const entries = week.entries ?? [];
            const hasIntro = entries.some((e) => e.id === 'w1-github-intro');
            if (hasIntro) return { ...week, expanded: week.expanded ?? true };
            return {
                ...week,
                expanded: true,
                entries: [...buildWeek1GithubEntries(), ...entries],
            };
        }),
    };
}

function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
        if (err.name === 'QuotaExceededError') {
            alert('Storage is full. Remove some files or images, then try again. (Max ~5 MB per file.)');
        } else {
            alert('Could not save. Please try again.');
        }
        throw err;
    }
}

function formatFileSize(bytes) {
    if (!bytes) return '';
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function fileIcon(name, mime) {
    const ext = (name || '').split('.').pop()?.toLowerCase() || '';
    if (mime?.startsWith('image/') || ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'].includes(ext)) return '🖼';
    if (mime === 'application/pdf' || ext === 'pdf') return '📄';
    if (['zip', 'rar', '7z'].includes(ext)) return '📦';
    if (['py', 'js', 'ino', 'html', 'css', 'json'].includes(ext)) return '💻';
    if (['stl', 'gcode'].includes(ext)) return '🔧';
    if (['mp4', 'mov', 'webm'].includes(ext)) return '🎬';
    return '📎';
}

function readFileAsDataUrl(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
    });
}

function validateFile(file) {
    if (!file) return false;
    if (file.size > MAX_FILE_SIZE) {
        alert(`"${file.name}" is too large. Maximum size is 5 MB per file.`);
        return false;
    }
    return true;
}

function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

/* ——— Render ——— */

function renderAll() {
    renderProfile();
    renderAbout();
    renderSkills();
    renderProjects();
    renderWeeks();
}

function renderProfile() {
    const img = document.getElementById('profile-img');
    const placeholder = document.getElementById('profile-placeholder');
    const src = state.profileImage || DEFAULT_PROFILE_SRC;
    img.src = src;
    img.classList.remove('hidden');
    placeholder.classList.add('hidden');
}

function renderAbout() {
    const extra = document.getElementById('about-extra');
    if (state.aboutExtra) {
        extra.innerHTML = `<p class="bio-text">${escapeHtml(state.aboutExtra)}</p>`;
        extra.classList.add('visible');
    } else {
        extra.innerHTML = '';
        extra.classList.remove('visible');
    }
}

function renderSkills() {
    const list = document.getElementById('skills-list');
    list.innerHTML = state.skills
        .map(
            (s) => `
        <div class="skill-item" data-id="${s.id}">
            <div class="skill-top">
                <span class="skill-name">${escapeHtml(s.name)}</span>
                <span class="skill-level-label">${escapeHtml(s.proficiency)}</span>
            </div>
            <div class="progress-track">
                <div class="progress-fill" style="width:${s.level}%"></div>
            </div>
            <button type="button" class="btn-icon delete-skill" data-id="${s.id}" title="Remove skill" aria-label="Remove skill">&times;</button>
        </div>`
        )
        .join('');
}

function renderProjectFiles(project) {
    const files = project.files || [];
    if (!files.length) {
        return '<p class="project-files-empty">No files attached yet.</p>';
    }
    return `<ul class="file-list">${files
        .map(
            (f) => `
        <li class="file-list-item">
            <a href="${f.dataUrl}" download="${escapeHtml(f.fileName)}" class="file-link">
                <span class="file-icon">${fileIcon(f.fileName, f.mimeType)}</span>
                <span class="file-name">${escapeHtml(f.fileName)}</span>
                <span class="file-size">${formatFileSize(f.size)}</span>
            </a>
            <button type="button" class="btn-icon delete-project-file" data-project="${project.id}" data-file="${f.id}" title="Remove file">&times;</button>
        </li>`
        )
        .join('')}</ul>`;
}

function renderProjects() {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = state.projects
        .map(
            (p) => `
        <article class="project-card" style="--accent:${p.color}" data-id="${p.id}">
            <div class="project-accent"></div>
            <h3>${escapeHtml(p.title)}</h3>
            <p>${escapeHtml(p.description)}</p>
            <div class="project-tags">${p.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>
            <div class="project-files">
                <span class="project-files-label">Attachments</span>
                ${renderProjectFiles(p)}
                <label class="btn btn-ghost btn-sm btn-file">
                    📎 Add files
                    <input type="file" multiple accept="${FILE_ACCEPT}" data-project-upload="${p.id}" hidden>
                </label>
            </div>
            <button type="button" class="btn-icon delete-project" data-id="${p.id}" title="Remove project" aria-label="Remove project">&times;</button>
        </article>`
        )
        .join('');
}

function renderWeeks() {
    const container = document.getElementById('weeks-container');
    container.innerHTML = state.weeks
        .map((week, index) => {
            const entriesHtml =
                week.entries.length === 0
                    ? '<p class="week-empty">No entries yet. Use the buttons below to document this week.</p>'
                    : week.entries.map((e) => renderEntry(e)).join('');

            return `
        <div class="week-block ${week.expanded ? 'expanded' : ''}" data-week="${index}">
            <button type="button" class="week-toggle" aria-expanded="${week.expanded}">
                <span class="week-chevron">▶</span>
                <span class="week-title">${escapeHtml(week.label)}</span>
                <span class="week-count">${week.entries.length} ${week.entries.length === 1 ? 'entry' : 'entries'}</span>
            </button>
            <div class="week-panel">
                <div class="week-entries">${entriesHtml}</div>
                <div class="week-actions">
                    <button type="button" class="btn btn-week" data-action="note" data-week="${index}">📝 Add Note</button>
                    <button type="button" class="btn btn-week" data-action="learning" data-week="${index}">📖 Add Learning</button>
                    <button type="button" class="btn btn-week" data-action="project" data-week="${index}">🛠 Add Project</button>
                    <label class="btn btn-week btn-file">
                        🖼 Add Image
                        <input type="file" accept="image/*" data-action="image" data-week="${index}" hidden>
                    </label>
                    <label class="btn btn-week btn-file">
                        📎 Add File
                        <input type="file" accept="${FILE_ACCEPT}" data-action="file" data-week="${index}" hidden>
                    </label>
                </div>
            </div>
        </div>`;
        })
        .join('');
}

function renderEntry(entry) {
    const typeLabels = {
        note: '📝 Note',
        learning: '📖 Learning',
        project: '🛠 Project',
        image: '🖼 Image',
        file: '📎 File',
    };
    let body = '';

    switch (entry.type) {
        case 'note':
            body = `<p>${escapeHtml(entry.text)}</p>`;
            break;
        case 'learning':
            body = `
                ${entry.topic ? `<p><strong>Topic:</strong> ${escapeHtml(entry.topic)}</p>` : ''}
                ${entry.machine ? `<p><strong>Machine / Tool:</strong> ${escapeHtml(entry.machine)}</p>` : ''}
                ${entry.concept ? `<p><strong>Concept:</strong> ${escapeHtml(entry.concept)}</p>` : ''}`;
            break;
        case 'project':
            body =
                entry.id === 'w1-github-intro'
                    ? `<h3 class="week-section-heading">${escapeHtml(entry.title)}</h3><p>${escapeHtml(entry.description)}</p>`
                    : `<p><strong>${escapeHtml(entry.title)}</strong></p><p>${escapeHtml(entry.description)}</p>`;
            break;
        case 'image':
            body = `<img src="${entry.src}" alt="${escapeHtml(entry.caption || 'Lab photo')}" class="entry-image">`;
            if (entry.caption) body += `<p class="image-caption">${escapeHtml(entry.caption)}</p>`;
            break;
        case 'file':
            body = `
                <a href="${entry.dataUrl}" download="${escapeHtml(entry.fileName)}" class="file-link file-link--block">
                    <span class="file-icon">${fileIcon(entry.fileName, entry.mimeType)}</span>
                    <span class="file-name">${escapeHtml(entry.fileName)}</span>
                    <span class="file-size">${formatFileSize(entry.size)}</span>
                </a>`;
            if (entry.description) body += `<p class="file-desc">${escapeHtml(entry.description)}</p>`;
            break;
    }

    return `
    <div class="log-entry log-entry--${entry.type}" data-id="${entry.id}">
        <div class="log-entry-header">
            <span class="log-type">${typeLabels[entry.type]}</span>
            <span class="log-date">${formatDate(entry.createdAt)}</span>
            <button type="button" class="btn-icon delete-entry" data-id="${entry.id}" title="Delete">&times;</button>
        </div>
        <div class="log-entry-body">${body}</div>
    </div>`;
}

function formatDate(iso) {
    if (!iso) return '';
    return new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

/* ——— Modal ——— */

const overlay = document.getElementById('modal-overlay');
const modalForm = document.getElementById('modal-form');
const modalTitle = document.getElementById('modal-title');

function openModal(title, fieldsHtml, onSubmit) {
    modalTitle.textContent = title;
    modalForm.innerHTML = fieldsHtml;
    modalContext = { onSubmit };
    overlay.classList.remove('hidden');
    overlay.setAttribute('aria-hidden', 'false');
    const first = modalForm.querySelector('input, textarea, select');
    if (first) first.focus();
}

function closeModal() {
    overlay.classList.add('hidden');
    overlay.setAttribute('aria-hidden', 'true');
    modalForm.innerHTML = '';
    modalContext = null;
}

function fieldGroup(label, name, type = 'text', opts = {}) {
    const { required = true, placeholder = '', rows, options } = opts;
    if (type === 'textarea') {
        return `
        <label class="form-group">
            <span>${label}</span>
            <textarea name="${name}" rows="${rows || 4}" placeholder="${placeholder}" ${required ? 'required' : ''}></textarea>
        </label>`;
    }
    if (type === 'select') {
        return `
        <label class="form-group">
            <span>${label}</span>
            <select name="${name}" required>
                ${options.map((o) => `<option value="${o}">${o}</option>`).join('')}
            </select>
        </label>`;
    }
    if (type === 'range') {
        return `
        <label class="form-group">
            <span>${label}: <output name="${name}Out" for="${name}">${opts.default ?? 50}%</output></span>
            <input type="range" name="${name}" min="0" max="100" value="${opts.default ?? 50}" oninput="this.form['${name}Out'].value=this.value+'%'">
        </label>`;
    }
    return `
    <label class="form-group">
        <span>${label}</span>
        <input type="${type}" name="${name}" placeholder="${placeholder}" ${required ? 'required' : ''}>
    </label>`;
}

/* ——— Actions ——— */

function addSkill() {
    openModal(
        'Add a Skill',
        fieldGroup('Skill name', 'name', 'text', { placeholder: 'e.g. Laser Cutting' }) +
            fieldGroup('Proficiency', 'proficiency', 'select', {
                options: ['Beginner', 'Intermediate', 'Advanced'],
            }) +
            fieldGroup('Level', 'level', 'range', { default: 30 }),
        (data) => {
            state.skills.push({
                id: uid(),
                name: data.name.trim(),
                proficiency: data.proficiency,
                level: Number(data.level),
            });
            saveState();
            renderSkills();
        }
    );
}

function addProject() {
    openModal(
        'Add a Project',
        fieldGroup('Title', 'title', 'text', { placeholder: 'Project name' }) +
            fieldGroup('Description', 'description', 'textarea', { placeholder: 'What did you build?' }) +
            fieldGroup('Tags (comma-separated)', 'tags', 'text', { placeholder: 'IoT, 3D Print', required: false }),
        (data) => {
            const tags = data.tags
                ? data.tags.split(',').map((t) => t.trim()).filter(Boolean)
                : [];
            state.projects.push({
                id: uid(),
                title: data.title.trim(),
                description: data.description.trim(),
                tags,
                color: ACCENT_COLORS[state.projects.length % ACCENT_COLORS.length],
                files: [],
            });
            saveState();
            renderProjects();
        }
    );
}

function addBio() {
    openModal(
        'Add bio or details',
        fieldGroup('Bio / extra details', 'bio', 'textarea', {
            placeholder: 'Tell visitors about yourself…',
            rows: 6,
        }),
        (data) => {
            state.aboutExtra = data.bio.trim();
            saveState();
            renderAbout();
        }
    );
}

function addWeekEntry(weekIndex, type) {
    const week = state.weeks[weekIndex];
    const titles = { note: 'Add Note', learning: 'Add Learning', project: 'Add Project' };

    if (type === 'note') {
        openModal(
            titles.note,
            fieldGroup('Note', 'text', 'textarea', { placeholder: 'Observations, daily notes…' }),
            (data) => {
                week.entries.unshift({ id: uid(), type: 'note', text: data.text.trim(), createdAt: new Date().toISOString() });
                saveState();
                renderWeeks();
            }
        );
        return;
    }

    if (type === 'learning') {
        openModal(
            titles.learning,
            fieldGroup('Topic', 'topic', 'text', { placeholder: 'What did you learn?' }) +
                fieldGroup('Machine / tool', 'machine', 'text', { placeholder: 'Optional', required: false }) +
                fieldGroup('Concept', 'concept', 'textarea', { placeholder: 'Key idea or takeaway', required: false }),
            (data) => {
                week.entries.unshift({
                    id: uid(),
                    type: 'learning',
                    topic: data.topic.trim(),
                    machine: data.machine?.trim() || '',
                    concept: data.concept?.trim() || '',
                    createdAt: new Date().toISOString(),
                });
                saveState();
                renderWeeks();
            }
        );
        return;
    }

    if (type === 'project') {
        openModal(
            titles.project,
            fieldGroup('Activity title', 'title', 'text', { placeholder: 'Mini-project or lab activity' }) +
                fieldGroup('Description', 'description', 'textarea', { placeholder: 'What you did this week' }),
            (data) => {
                week.entries.unshift({
                    id: uid(),
                    type: 'project',
                    title: data.title.trim(),
                    description: data.description.trim(),
                    createdAt: new Date().toISOString(),
                });
                saveState();
                renderWeeks();
            }
        );
    }
}

function addWeekImage(weekIndex, file) {
    if (!file || !file.type.startsWith('image/')) return;
    if (!validateFile(file)) return;
    const reader = new FileReader();
    reader.onload = () => {
        openModal(
            'Add Image',
            `<div class="image-preview-wrap"><img src="${reader.result}" alt="Preview" class="image-preview"></div>` +
                fieldGroup('Caption (optional)', 'caption', 'text', { required: false }),
            (data) => {
                state.weeks[weekIndex].entries.unshift({
                    id: uid(),
                    type: 'image',
                    src: reader.result,
                    caption: data.caption?.trim() || '',
                    createdAt: new Date().toISOString(),
                });
                saveState();
                renderWeeks();
            }
        );
    };
    reader.readAsDataURL(file);
}

async function addWeekFile(weekIndex, file) {
    if (!file || !validateFile(file)) return;
    try {
        const dataUrl = await readFileAsDataUrl(file);
        openModal(
            'Add File',
            `<p class="file-preview-name">${fileIcon(file.name, file.type)} ${escapeHtml(file.name)} <span class="file-size">(${formatFileSize(file.size)})</span></p>` +
                fieldGroup('Description (optional)', 'description', 'textarea', {
                    placeholder: 'What is this file? (e.g. CAD design, lab report, code)',
                    required: false,
                    rows: 3,
                }),
            (data) => {
                state.weeks[weekIndex].entries.unshift({
                    id: uid(),
                    type: 'file',
                    fileName: file.name,
                    mimeType: file.type || 'application/octet-stream',
                    size: file.size,
                    dataUrl,
                    description: data.description?.trim() || '',
                    createdAt: new Date().toISOString(),
                });
                saveState();
                renderWeeks();
            }
        );
        modalContext._pendingFile = { dataUrl, file };
    } catch {
        alert('Could not read that file. Please try again.');
    }
}

async function addProjectFiles(projectId, fileList) {
    const project = state.projects.find((p) => p.id === projectId);
    if (!project) return;
    if (!project.files) project.files = [];

    for (const file of fileList) {
        if (!validateFile(file)) continue;
        try {
            const dataUrl = await readFileAsDataUrl(file);
            project.files.push({
                id: uid(),
                fileName: file.name,
                mimeType: file.type || 'application/octet-stream',
                size: file.size,
                dataUrl,
                createdAt: new Date().toISOString(),
            });
        } catch {
            alert(`Could not add "${file.name}".`);
        }
    }
    saveState();
    renderProjects();
}

function deleteProjectFile(projectId, fileId) {
    const project = state.projects.find((p) => p.id === projectId);
    if (!project?.files) return;
    project.files = project.files.filter((f) => f.id !== fileId);
    saveState();
    renderProjects();
}

function toggleWeek(index) {
    state.weeks[index].expanded = !state.weeks[index].expanded;
    saveState();
    renderWeeks();
}

function deleteEntry(entryId) {
    for (const week of state.weeks) {
        const i = week.entries.findIndex((e) => e.id === entryId);
        if (i !== -1) {
            week.entries.splice(i, 1);
            saveState();
            renderWeeks();
            return;
        }
    }
}

function deleteSkill(id) {
    state.skills = state.skills.filter((s) => s.id !== id);
    saveState();
    renderSkills();
}

function deleteProject(id) {
    state.projects = state.projects.filter((p) => p.id !== id);
    saveState();
    renderProjects();
}

/* ——— Events ——— */

document.getElementById('profile-upload').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
        state.profileImage = reader.result;
        saveState();
        renderProfile();
    };
    reader.readAsDataURL(file);
});

document.getElementById('btn-add-skill').addEventListener('click', addSkill);
document.getElementById('btn-add-project').addEventListener('click', addProject);
document.getElementById('btn-add-bio').addEventListener('click', addBio);

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-cancel').addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
});

modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!modalContext?.onSubmit) return;
    const data = Object.fromEntries(new FormData(modalForm));
    modalContext.onSubmit(data);
    closeModal();
});

document.getElementById('weeks-container').addEventListener('click', (e) => {
    const toggle = e.target.closest('.week-toggle');
    if (toggle) {
        toggleWeek(Number(toggle.closest('.week-block').dataset.week));
        return;
    }
    const weekBtn = e.target.closest('[data-action]');
    if (weekBtn && weekBtn.tagName === 'BUTTON') {
        addWeekEntry(Number(weekBtn.dataset.week), weekBtn.dataset.action);
        return;
    }
    const del = e.target.closest('.delete-entry');
    if (del) {
        if (confirm('Delete this entry?')) deleteEntry(del.dataset.id);
        return;
    }
});

document.getElementById('weeks-container').addEventListener('change', (e) => {
    const input = e.target.closest('input[data-action]');
    if (!input?.files?.[0]) return;
    const weekIndex = Number(input.dataset.week);
    if (input.dataset.action === 'image') {
        addWeekImage(weekIndex, input.files[0]);
    } else if (input.dataset.action === 'file') {
        addWeekFile(weekIndex, input.files[0]);
    }
    input.value = '';
});

document.getElementById('projects-grid').addEventListener('change', (e) => {
    const input = e.target.closest('input[data-project-upload]');
    if (input?.files?.length) {
        addProjectFiles(input.dataset.projectUpload, [...input.files]);
        input.value = '';
    }
});

document.getElementById('skills-list').addEventListener('click', (e) => {
    const btn = e.target.closest('.delete-skill');
    if (btn && confirm('Remove this skill?')) deleteSkill(btn.dataset.id);
});

document.getElementById('projects-grid').addEventListener('click', (e) => {
    const fileBtn = e.target.closest('.delete-project-file');
    if (fileBtn && confirm('Remove this file?')) {
        deleteProjectFile(fileBtn.dataset.project, fileBtn.dataset.file);
        return;
    }
    const btn = e.target.closest('.delete-project');
    if (btn && confirm('Remove this project?')) deleteProject(btn.dataset.id);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.classList.contains('hidden')) closeModal();
});

renderAll();
