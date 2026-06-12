const STORAGE_KEY = 'tinkerer-portfolio-v1';
const WEEK1_CONTENT_VERSION = '6';
const SESSIONS_CONTENT_VERSION = '7';
const SESSIONS_CONTENT_VERSION_KEY = 'sessions-content-v';
const WEEK1_CONTENT_VERSION_KEY = 'week1-content-v';
const WEEK2_CONTENT_VERSION = '6';
const WEEK2_CONTENT_VERSION_KEY = 'week2-content-v';
const WEEK3_CONTENT_VERSION = '6';
const WEEK3_CONTENT_VERSION_KEY = 'week3-content-v';
const WEEK4_CONTENT_VERSION = '3';
const WEEK4_CONTENT_VERSION_KEY = 'week4-content-v';
const DAYS_PER_WEEK = 6;
const DEFAULT_PROFILE_SRC = 'assets/profile-photo.png';
const MAX_FILE_SIZE = 5 * 1024 * 1024; /* 5 MB per file — localStorage limit */

const ACCENT_COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#06b6d4'];

const FILE_ACCEPT =
    '.pdf,.doc,.docx,.txt,.md,.zip,.rar,.7z,.stl,.gcode,.ino,.py,.js,.html,.css,.json,.xml,.csv,.png,.jpg,.jpeg,.gif,.webp,.svg,.mp4,.mov,.ppt,.pptx,.xls,.xlsx';

function buildWeek1GithubEntries() {
    const base = 'assets/week1-github/';
    const steps = [
        [
            '01-github-dashboard-profile.png',
            'Day 1 · Step 1 — Log in to GitHub. On the Dashboard, click your profile picture (top-right). Your account is Prathameshk-07 and TL_Intern_Prathamesh already appears under Top repositories.',
        ],
        [
            '02-github-repositories-menu.png',
            'Day 1 · Step 2 — From the profile menu, choose Repositories to open the full list of your projects.',
        ],
        [
            '03-new-repository-button.png',
            'Day 1 · Step 3 — On the Repositories page, click the green New button to create a repository for the internship portfolio.',
        ],
        [
            '04-create-repository-form.png',
            'Day 1 · Step 4 — Create repository form: enter the name TL_Intern_Prathamesh and add a short description for the Tinkerers\' Lab internship work.',
        ],
        [
            '05-repository-configuration.png',
            'Day 1 · Step 5 — Configuration: set visibility to Public, keep Add README off (we will push files from VS Code), then click Create repository.',
        ],
        [
            '06-open-visual-studio-code.png',
            'Day 1 · Step 6 — Open Visual Studio Code from Windows search so we can edit the portfolio and run Git commands.',
        ],
        [
            '07-vscode-file-menu.png',
            'Day 1 · Step 7 — In VS Code, open the File menu to load the project folder from the computer.',
        ],
        [
            '08-vscode-open-folder.png',
            'Day 1 · Step 8 — Select Open Folder… to connect VS Code to the portfolio directory.',
        ],
        [
            '09-select-portfolio-folder.png',
            'Day 1 · Step 9 — Browse to Downloads and select the portfolio p folder, then confirm with Select Folder.',
        ],
        [
            '10-vscode-terminal-menu.png',
            'Day 1 · Step 10 — Open the Terminal menu in VS Code (we will use the integrated terminal for Git).',
        ],
        [
            '11-new-terminal.png',
            'Day 1 · Step 11 — Click New Terminal (shortcut Ctrl+Shift+`) to open PowerShell inside the project.',
        ],
        [
            '12-git-init-terminal.png',
            'Day 1 · Step 12 — In the terminal, run git init. Git creates (or reinitializes) a .git folder inside portfolio p.',
        ],
        [
            '13-git-status-clean.png',
            'Day 1 · Step 13 — Run git status. Output shows On branch main and working tree clean when there are no pending changes.',
        ],
        [
            '14-git-branch-main.png',
            'Day 1 · Step 14 — Run git branch -M main to rename the current branch to main (GitHub\'s default branch name).',
        ],
        [
            '15-vscode-source-control.png',
            'Day 1 · Step 15 — Run git commit -m "Portfolio Upload". If nothing is staged yet, Git reports nothing to commit — run git add . first, then commit again.',
        ],
        [
            '16-github-profile-repositories.png',
            'Day 1 · Step 16 — Open your GitHub profile and switch to the Repositories tab to view all projects.',
        ],
        [
            '17-tl-intern-repository.png',
            'Day 1 · Step 17 — Link the local folder to GitHub: git add . then git remote add origin https://github.com/Prathameshk-07/TL_Intern_Prathamesh.git',
        ],
        [
            '18-git-init-reinitialized.png',
            'Day 1 · Step 18 — Run git init again if needed; message Reinitialized existing Git repository confirms Git is set up in this folder.',
        ],
        [
            '19-git-status-and-branch.png',
            'Day 1 · Step 19 — Repeat git status and git branch -M main to verify branch name and a clean working tree before pushing.',
        ],
        [
            '20-push-ready-terminal.png',
            'Day 1 · Step 20 — On GitHub, open Repositories and select TL_Intern_Prathamesh (public, JavaScript) — this is where the portfolio will be hosted.',
        ],
        [
            '21-github-repos-overview.png',
            'Day 1 · Step 21 — Final check: all repositories listed on the profile, including TL_Intern_Prathamesh, Weather-App, ToDo-App, and others.',
        ],
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
            title: 'Week 1 — Day 1: Introduction to GitHub',
            description:
                'Day 1 goal: host the internship portfolio on GitHub using VS Code. I created the public repository TL_Intern_Prathamesh, opened the portfolio p folder in VS Code, initialized Git (git init), checked status (git status), set the branch to main (git branch -M main), connected the remote (git remote add origin), and prepared to push with git add ., git commit, and git push -u origin main.',
            createdAt: '2026-05-20T09:00:00.000Z',
        },
        {
            id: 'w1-github-learning',
            type: 'learning',
            topic: 'Introduction to GitHub & Git',
            machine: 'GitHub (web), Visual Studio Code, Git in terminal',
            concept:
                'A repository stores project files online. Git tracks every change locally; GitHub is the remote backup. VS Code\'s terminal runs the same Git commands as the command line: init → add → commit → push.',
            createdAt: '2026-05-20T09:05:00.000Z',
        },
        ...images,
    ];
}

function buildWeek1Day2Entries() {
    const base = 'assets/week1-day2-inkscape/';
    const captions = [
        'Day 2 · Step 1 — Open Google and search “inkscape download” to find the official website.',
        'Day 2 · Step 2 — Google results: click Download Inkscape from inkscape.org (first result), not third-party sites.',
        'Day 2 · Step 3 — Download Started page on inkscape.org (version 1.4.4, Windows 64-bit msi). Wait for the file or click the manual link.',
        'Day 2 · Step 4 — On the download page, select the Windows platform (Microsoft Windows Desktop).',
        'Day 2 · Step 5 — Choose 64-bit (x86_64) — use this option on most laptops (“Choose if unsure”).',
        'Day 2 · Step 6 — Pick Installer in .exe format for a straightforward Windows setup.',
        'Day 2 · Step 7 — Save As dialog: save the Inkscape installer (inkscape-1.4.4…x64.signed) into Documents, then click Save.',
        'Day 2 · Step 8 — Windows Save As window showing the installer filename before downloading finishes.',
        'Day 2 · Step 9 — Inkscape Setup welcome screen (v1.4.4): read the note, then click Next.',
        'Day 2 · Step 10 — Install Options: leave “Do not add to PATH” and desktop icon as needed, then click Next.',
        'Day 2 · Step 11 — Choose Install Location: default C:\\Program Files\\Inkscape, then click Next.',
        'Day 2 · Step 12 — Choose Components: Full install (editor, Python, extensions) — about 641 MB — click Install.',
        'Day 2 · Step 13 — Inkscape launch screen (Time to Draw): click New Document to open a blank canvas.',
        'Day 2 · Step 14 — Empty Inkscape workspace: toolbox on the left, rulers, and a grey canvas ready for drawing.',
        'Day 2 · Step 15 — Circle tool (F5): draw a solid red circle — this becomes the outer ring of the badge.',
        'Day 2 · Step 16 — Place “TINKERERS\' LAB” text above a blue circle; use the Select tool to position both shapes.',
        'Day 2 · Step 17 — Text tool (A): add and style the label TINKERERS\' LAB in bold black lettering.',
        'Day 2 · Step 18 — Path menu → Object to Path: convert text into editable vector paths for curving.',
        'Day 2 · Step 19 — Path menu open while the blue circle is selected — prepare to combine or edit shapes.',
        'Day 2 · Step 20 — Text menu: adjust the TINKERERS\' LAB lettering (font, size, striped style).',
        'Day 2 · Step 21 — Curved text along the bottom of the blue circle — early logo layout.',
        'Day 2 · Step 22 — Logo preview: blue circle with TINKERERS\' LAB curved on the lower arc.',
        'Day 2 · Step 23 — Blue circle with TINKERERS\' LAB arched on top; use rotation handles to fine-tune angle.',
        'Day 2 · Step 24 — Red inner circle + blue outer ring with TINKERERS\' LAB on the top curve (two-ring design).',
        'Day 2 · Step 25 — Draw a large red circle (base layer) with the ellipse tool; resize using the handles.',
        'Day 2 · Step 26 — Object → Lower: send the red circle behind other shapes so layers stack correctly.',
        'Day 2 · Step 27 — Add INTERN text above the badge; select and position it with the transform handles.',
        'Day 2 · Step 28 — Near-final badge: blue center, red ring, INTERN on top, TINKERERS\' LAB curved below.',
        'Day 2 · Step 29 — Align & Distribute: center INTERN and the ring so the logo is balanced.',
        'Day 2 · Step 30 — Complete circular badge: TINKERERS\' LAB (top arc) and INTERN (bottom arc) on red/blue rings.',
        'Day 2 · Step 31 — Fill & Stroke panel: set fill colours (red circle, blue ring, black text).',
        'Day 2 · Step 32 — Red circle with both curved text labels; ready to export.',
        'Day 2 · Step 33 — Full red disc with TINKERERS\' LAB and INTERN in black along the inner edge.',
        'Day 2 · Step 34 — Colour palette: pick black swatch for the text fill.',
        'Day 2 · Step 35 — Add inner guide circle (black stroke) to space the text evenly inside the badge.',
        'Day 2 · Step 36 — Badge template with TINKERERS\' LAB (top), INTERN (bottom), and NAME placeholder in the center.',
        'Day 2 · Step 37 — Reference: official Sanjivani University Tinkerers\' Lab seal (crest, torch, SANJIVANI UNIVERSITY) used as design inspiration for the internship logo.',
    ];

    const images = captions.map((caption, i) => ({
        id: `w1-day2-img-${String(i + 1).padStart(2, '0')}`,
        type: 'image',
        src: `${base}${String(i + 1).padStart(2, '0')}.png`,
        caption,
        createdAt: `2026-05-22T${String(10 + Math.floor(i / 6)).padStart(2, '0')}:${String((i * 2) % 60).padStart(2, '0')}:00.000Z`,
    }));

    return [
        {
            id: 'w1-day2-intro',
            type: 'project',
            title: 'Week 1 — Day 2: Inkscape & Logo Design',
            description:
                'Day 2 focused on creating the Tinkerers\' Lab internship badge in Inkscape 1.4.4. I downloaded and installed the software, started a new document, drew circles for the red and blue rings, added curved text (TINKERERS\' LAB and INTERN), used Path → Object to Path and Object → Lower for layering, aligned the elements, and compared my design with the official university seal before exporting the logo for the portfolio.',
            createdAt: '2026-05-22T10:00:00.000Z',
        },
        {
            id: 'w1-day2-learning',
            type: 'learning',
            topic: 'Inkscape vector logo design',
            machine: 'Inkscape 1.4.4 (Windows), ellipse & text tools',
            concept:
                'Logos should be built as vectors (circles + paths + text) so they stay sharp at any size. Key steps: draw rings with the circle tool, curve text with Path/Object to Path, stack layers with Raise/Lower, align with Align & Distribute, then export PNG for the website.',
            createdAt: '2026-05-22T10:05:00.000Z',
        },
        ...images,
    ];
}

function buildWeek1Day3Entries() {
    const base = 'assets/week1-day3-fusion/';
    const captions = [
        'Day 3 · Step 1 — Open Google and search “autodesk fusion 360 student version” to find the free educational license.',
        'Day 3 · Step 2 — Open the Autodesk Fusion for education page (autodesk.com/education/.../fusion) and click Sign in (top-right).',
        'Day 3 · Step 3 — Autodesk Sign in screen: enter your email and click Next (or Continue with Google).',
        'Day 3 · Step 4 — Fusion for education page while signed in (profile PK) — ready to request student access.',
        'Day 3 · Step 5 — Click the yellow Request free access button to start the educational license application.',
        'Day 3 · Step 6 — Autodesk Education overview page: open Products to browse software available to students.',
        'Day 3 · Step 7 — All products grid: click Select on the Fusion card (cloud CAD/CAM/CAE for 3D modeling).',
        'Day 3 · Step 8 — Subscription plans: choose the Student role, then click Access products.',
        'Day 3 · Step 9 — Autodesk Fusion product page: use Download free trial or Download Fusion for free.',
        'Day 3 · Step 10 — In your Autodesk account (Add products), click Download on the Fusion card to get the installer.',
        'Day 3 · Step 11 — Save As: save Fusion Client Downloader.exe into Documents, then click Save.',
        'Day 3 · Step 12 — Autodesk Application Installer: Fusion splash with Running pre-checks at 100%.',
        'Day 3 · Step 13 — Fusion launch screen: Loading additional modules while the app starts.',
        'Day 3 · Step 14 — New design dialog: select Part Design, set units to millimeter (mm), gram (g), then Create New.',
        'Day 3 · Step 15 — Empty Fusion workspace (SOLID tab): click Create Sketch to begin a 2D profile.',
        'Day 3 · Step 16 — Pick a sketch plane: select the horizontal XY plane at the origin (tooltip: Select a plane or planar face).',
        'Day 3 · Step 17 — Sketch mode: use the Line tool to draw straight edges on the grid (units in mm).',
        'Day 3 · Step 18 — Draw a 100 mm horizontal line from the origin and add a dimension so the sketch is fully defined.',
        'Day 3 · Step 19 — Select the Fit Point Spline tool to draw smooth curved edges for the vase profile.',
        'Day 3 · Step 20 — Place spline control points and shape an S-curve on the sketch plane.',
        'Day 3 · Step 21 — Complete the closed profile: straight axis on the Y-axis, top/bottom horizontals, curved spline on the right (blue fill).',
        'Day 3 · Step 22 — Click Finish Sketch (green check) to exit sketch mode and prepare for 3D tools.',
        'Day 3 · Step 23 — Return to the design workspace with the closed profile visible on the grid.',
        'Day 3 · Step 24 — SOLID tab → Revolve: open the Revolve tool with the closed profile selected.',
        'Day 3 · Step 25 — Revolve dialog: Profile shows 1 selected; next pick the vertical axis line to rotate around.',
        'Day 3 · Step 26 — After Revolve (360°): symmetrical 3D vase body with metallic appearance on the grid.',
        'Day 3 · Step 27 — Explore the Sheet Metal workspace (Flange tool) — optional tab for sheet-metal parts.',
        'Day 3 · Step 28 — Shell tool: select the top circular face to remove (open the vessel).',
        'Day 3 · Step 29 — Set Inside Thickness to 2 mm and Direction Inside to hollow the solid body.',
        'Day 3 · Step 30 — Confirm the Shell settings and click OK to apply the 2 mm wall thickness.',
        'Day 3 · Step 31 — Finished model: hollow vase with revolved body, shell, and design timeline (Sketch → Revolve → Shell).',
    ];

    const images = captions.map((caption, i) => ({
        id: `w1-day3-img-${String(i + 1).padStart(2, '0')}`,
        type: 'image',
        src: `${base}${String(i + 1).padStart(2, '0')}.png`,
        caption,
        createdAt: `2026-05-25T${String(10 + Math.floor(i / 6)).padStart(2, '0')}:${String((i * 2) % 60).padStart(2, '0')}:00.000Z`,
    }));

    return [
        {
            id: 'w1-day3-intro',
            type: 'project',
            title: 'Week 1 — Day 3: Autodesk Fusion 360',
            description:
                'Day 3 introduced 3D CAD with Autodesk Fusion (education license). I searched for the student version, signed in on the Autodesk Education site, requested free access, downloaded Fusion Client Downloader, installed the software, started a Part Design in millimeters, created a 2D sketch (lines + Fit Point Spline), used Revolve to build a vase-shaped solid, then applied Shell (2 mm inside) to hollow the top opening.',
            createdAt: '2026-05-25T10:00:00.000Z',
        },
        {
            id: 'w1-day3-learning',
            type: 'learning',
            topic: 'Autodesk Fusion 360 — 3D modeling basics',
            machine: 'Autodesk Fusion (Education License), Windows',
            concept:
                '3D parts start as constrained 2D sketches on a plane. Revolve spins a closed profile around an axis to make symmetrical solids (vases, wheels). Shell removes a face and sets wall thickness — useful for containers and 3D-printed parts. Always set document units (mm) before dimensioning.',
            createdAt: '2026-05-25T10:05:00.000Z',
        },
        ...images,
    ];
}

function buildDesignThinkingSessionEntries() {
    const base = 'assets/sessions/design-thinking/';
    return [
        {
            id: 'session-design-thinking-intro',
            type: 'project',
            title: 'Session 1 — Design Thinking & Innovation',
            description:
                'An insightful session on Design Thinking and Innovation, conducted by Prof. Srilalitha Girija Kumari Sagi at Tinkerers\' Lab, Sanjivani University. The session emphasized building innovation through creativity and guided students to approach challenges creatively, develop impactful solutions for the future, and embrace the motto: Learn by doing. Lead by innovating.',
            createdAt: '2026-05-26T10:00:00.000Z',
        },
        {
            id: 'session-design-thinking-img-01',
            type: 'image',
            src: `${base}01-session-poster.png`,
            caption:
                'Design Thinking Session Poster: Summer Internship Program 2026 at Tinkerers\' Lab, Sanjivani University, conducted by Prof. Srilalitha Girija Kumari Sagi on 26th May 2026.',
            createdAt: '2026-05-26T10:15:00.000Z',
        },
        {
            id: 'session-design-thinking-learning-process',
            type: 'learning',
            topic: 'The 5-Step Design Thinking Process (Stanford d.school)',
            machine: 'Tinkerers\' Lab, Sanjivani University',
            concept:
                'The design thinking process, popularized by Stanford d.school, is a 5-step iterative framework split into two phases:\n1. Problem Finding Phase:\n   • Empathize: Understand user needs deeply through observation and interaction.\n   • Define: Frame the problem statement based on user insights.\n2. Solution Finding Phase:\n   • Ideate: Generate creative solutions through brainstorming and other techniques.\n   • Prototype: Build quick, tangible versions of potential solutions.\n   • Test: Validate prototypes with users and refine based on feedback.',
            createdAt: '2026-05-26T10:05:00.000Z',
        },
        {
            id: 'session-design-thinking-learning-culture',
            type: 'learning',
            topic: 'Design Thinking in Organizational Culture',
            machine: 'Tinkerers\' Lab, Sanjivani University',
            concept:
                'More and more companies are using design thinking to uncover user needs and design solutions that delight customers. Three key takeaways:\n1. Adapt the process to fit your unique organizational culture for maximum impact.\n2. Ensure design thinking drives a high return on investment (ROI) for time and resources.\n3. Learn from how leading companies have integrated design thinking into their workflows successfully.',
            createdAt: '2026-05-26T10:10:00.000Z',
        },
        {
            id: 'session-design-thinking-img-02',
            type: 'image',
            src: `${base}02-session-workshop.png`,
            caption:
                'Design Thinking Workshop in progress at Tinkerers\' Lab, where students actively participate in hands-on activities.',
            createdAt: '2026-05-26T10:20:00.000Z',
        },
    ];
}

function buildEdgeImpulseSessionEntries() {
    const base = 'assets/sessions/edge-impulse/';
    return [
        {
            id: 'session-edge-impulse-intro',
            type: 'project',
            title: 'Session 2 — Edge Impulse: Build Smart. Deploy Anywhere.',
            description:
                'A hands-on session on Edge AI and Machine Learning using Edge Impulse, conducted by Jaydeep Ashtekar (Assistant Professor, Department of Data Science | Business Analytics, Sanjivani College of Engineering, Kopargaon) at Tinkerers\' Lab, Sanjivani University — 2:00 PM. The session covered building and deploying ML models at the edge on microcontrollers, exploring real-world demos, and the Tinkerers\' Lab motto: Be a Tinkerer. Build the Future.',
            createdAt: '2026-06-01T14:00:00.000Z',
        },
        {
            id: 'session-edge-impulse-img-01',
            type: 'image',
            src: `${base}01-edge-impulse-flyer.png`,
            caption:
                'Session 2 poster — Join the Session on EDGE IMPULSE: BUILD SMART. DEPLOY ANYWHERE. A hands-on session on building and deploying Machine Learning models at the Edge. Speaker: Jaydeep Ashtekar, Assistant Professor (Data Science | Business Analytics), Sanjivani University. Venue: Tinkerers\' Lab, 2:00 PM. Topics: Introduction to Edge AI, Build ML Models with Edge Impulse, Deploy on Embedded Devices, Real-world Applications & Demos.',
            createdAt: '2026-06-01T14:05:00.000Z',
        },
        {
            id: 'session-edge-impulse-learning-explore',
            type: 'learning',
            topic: 'What You\'ll Explore',
            machine: 'Tinkerers\' Lab, Sanjivani University — Edge Impulse Studio',
            concept:
                'Session agenda from the workshop flyer:\n1. Introduction to Edge AI — why run intelligence on-device instead of only in the cloud.\n2. Build ML Models with Edge Impulse — collect sensor data, label samples, and train in the browser.\n3. Deploy on Embedded Devices — export optimized firmware for boards like ESP32, Arduino, and STM32.\n4. Real-world Applications & Demos — see live examples with a microcontroller and the Edge Impulse web dashboard.',
            createdAt: '2026-06-01T14:08:00.000Z',
        },
        {
            id: 'session-edge-impulse-learning-intro',
            type: 'learning',
            topic: 'Introduction to Edge Impulse',
            machine: 'Edge Impulse Platform — ESP32, Arduino, STM32, Raspberry Pi',
            concept:
                'Edge Impulse is a machine learning development platform designed for embedded systems and edge devices. It enables developers, students, and engineers to create, train, and deploy Artificial Intelligence (AI) and Machine Learning (ML) models on microcontrollers and IoT devices such as ESP32, Arduino, STM32, and Raspberry Pi.\n\nEdge AI keeps inference local: sensor data is processed on the device, which improves privacy, cuts cloud costs, and enables decisions even when Wi-Fi is unavailable.',
            createdAt: '2026-06-01T14:10:00.000Z',
        },
        {
            id: 'session-edge-impulse-learning-features',
            type: 'learning',
            topic: 'Key Features',
            machine: 'Edge Impulse Cloud Platform',
            concept:
                'Key Features:\n• Data Collection — Collect sensor data from devices such as accelerometers, microphones, cameras, and environmental sensors.\n• Data Processing — Clean, label, and preprocess data using built-in tools.\n• Model Training — Train machine learning models directly in the cloud without requiring powerful local hardware.\n• Model Testing — Evaluate model performance using accuracy, confusion matrices, and other metrics.\n• Deployment — Export trained models for microcontrollers and embedded systems with optimized memory and power usage.\n• Real-Time Inference — Run AI models directly on devices without requiring a continuous internet connection.',
            createdAt: '2026-06-01T14:15:00.000Z',
        },
        {
            id: 'session-edge-impulse-learning-applications',
            type: 'learning',
            topic: 'Applications',
            machine: 'Edge AI Use Cases',
            concept:
                'Applications:\n• Smart Agriculture — soil moisture, crop health, and pest detection from on-field sensors.\n• Predictive Maintenance — vibration and temperature patterns to flag machine faults early.\n• Gesture Recognition — motion sensors for touchless controls and wearables.\n• Voice and Sound Detection — keyword spotting and anomaly audio on low-power MCUs.\n• Environmental Monitoring — air quality, humidity, and pollution tracking.\n• Industrial Automation — quality inspection and safety alerts at the production line.\n• Smart Home Systems — occupancy, security, and energy optimization without constant cloud calls.',
            createdAt: '2026-06-01T14:20:00.000Z',
        },
        {
            id: 'session-edge-impulse-learning-advantages',
            type: 'learning',
            topic: 'Advantages',
            machine: 'Edge Computing Benefits',
            concept:
                'Advantages:\n• User-friendly graphical interface — no-code/low-code workflow from data to deployment.\n• Supports various sensors and hardware platforms — one studio for many boards and modalities.\n• Reduces cloud dependency by running AI at the edge.\n• Low latency and fast response times — critical for robotics, safety, and real-time control.\n• Optimized for low-power devices — quantized models fit tight flash and RAM on microcontrollers.',
            createdAt: '2026-06-01T14:25:00.000Z',
        },
        {
            id: 'session-edge-impulse-img-02',
            type: 'image',
            src: `${base}02-edge-impulse-performance.png`,
            caption:
                'Edge Impulse model testing view — accuracy metrics and confusion matrix used during the session to validate a trained classifier before deploying to embedded hardware.',
            createdAt: '2026-06-01T14:30:00.000Z',
        },
    ];
}

function tagEntriesWithDay(entries, day) {
    return entries.map((entry) => ({ ...entry, day }));
}

function buildWeek1AllEntries() {
    return [
        ...tagEntriesWithDay(buildWeek1GithubEntries(), 1),
        ...tagEntriesWithDay(buildWeek1Day2Entries(), 2),
        ...tagEntriesWithDay(buildWeek1Day3Entries(), 3),
    ];
}

function buildWeek2Day1Entries() {
    const base = 'assets/week2-day1-lasercad/';
    const captions = [
        'Day 1 · Step 1 — Google search for “lasercad software”. Suggestions include download links, tutorials, and free versions for laser cutting control software.',
        'Day 1 · Step 2 — Search “lasercad software v8 28” and open sztrocen.com (Shenzhen Trocen Automation) — the manufacturer of LaserCAD for laser engraving and cutting systems.',
        'Day 1 · Step 3 — On the Trocen Software page, select LaserCAD V8.28.18.rar (highlighted) — the correct package for our lab laser controller.',
        'Day 1 · Step 4 — Save As: store LaserCAD V8.28.18 (compressed archive) in Documents from sztrocen.com support page before extracting.',
        'Day 1 · Step 5 — After extracting the .rar file, open the folder and double-click Setup (application ~207 MB) to start the LaserCAD installer.',
        'Day 1 · Step 6 — “Welcome to use” installer: Type = LaserCAD, Language = English (green arrow). Use Install USB Driver if the PC has not seen the machine before.',
        'Day 1 · Step 7 — Same installer window: click Install to begin copying LaserCAD files (USB driver can be installed from the top button first).',
        'Day 1 · Step 8 — Select install path dialog: CorelDraw Version = CorelDraw 12, Install Path = C:\\ — click OK to register the CorelDraw plugin path.',
        'Day 1 · Step 9 — Desktop shortcut created: LaserCAD V8.28 (Trocen logo). Double-click to open the laser control software.',
        'Day 1 · Step 10 — LaserCAD V8.28.7 opens: blank workspace 1200 × 900 mm, Communication Mode COM3, Layer Options and Machine Control panel on the right.',
        'Day 1 · Step 11 — LaserCAD left Draw toolbar (green arrow): click the Ellipse/Circle tool (oval icon) under Rectangle and above Text (A). Top bar shows bed size 1200 × 900 mm.',
        'Day 1 · Step 12 — LaserCAD canvas: drag the Ellipse tool to draw a horizontal oval with a red outline. Black corner handles show the shape is selected on the bed.',
        'Day 1 · Step 13 — LaserCAD left Draw toolbar (green arrow): click the Text tool — “A” icon directly below the Ellipse tool — to add lettering on the nameplate.',
        'Day 1 · Step 14 — LaserCAD Text → Edit Text window: choose TrueType Font, Adobe Heiti Std R, size 8.0, type “Prathamesh”, then click OK.',
        'Day 1 · Step 15 — LaserCAD bottom toolbar: layer colour palette (row of squares). Pink layer is selected (blue border) — each colour links to Cut/Engrave settings in Layer Options.',
        'Day 1 · Step 16 — In LaserCAD: nameplate on the bed — black oval outline with “Prathamesh” inside. Layer set to Cut, Speed 100, Power 50, machine COM3.',
        'Day 1 · Step 17 — Layer Parameters (black layer): Work Mode = Cut, Speed 100.00, Max Power 50% / Min Power 40% (green highlight) — balances cut depth on corners.',
        'Day 1 · Step 18 — Work Mode dropdown: choose Cut (other options: Engrave, Engrave + Cut, Hole, Pen). Air Assist unchecked for this test.',
        'Day 1 · Step 19 — Two layers: black oval = Cut (100 / 50); blue text “Prathamesh” = Engrave (180 / 30) — outline is cut through, name is surface-etched only.',
        'Day 1 · Step 20 — Control panel: Communication MachName COM3 — click Select Mode (green arrow) to confirm the PC talks to the laser controller.',
        'Day 1 · Step 21 — USB Mode device list: click Add to register the machine on the correct COM port (COM3, COM13, etc.) when multiple ports appear.',
        'Day 1 · Step 22 — Machine Control: highlight Download (sends job to controller) and USB Mode → Add for a new COM connection before running.',
        'Day 1 · Step 23 — Download Document dialog: file name “dress”, Work times 1, Re-Order Objects checked — click Download Document to load the job into machine memory.',
    ];

    const images = captions.map((caption, i) => ({
        id: `w2-day1-img-${String(i + 1).padStart(2, '0')}`,
        type: 'image',
        src: `${base}${String(i + 1).padStart(2, '0')}.png`,
        caption,
        createdAt: `2026-05-30T${String(16 + Math.floor(i / 8)).padStart(2, '0')}:${String(57 + (i * 2) % 60).padStart(2, '0')}:00.000Z`,
    }));

    return [
        {
            id: 'w2-day1-intro',
            type: 'project',
            title: 'Week 2 — Day 1: LaserCAD & Laser Cutting Setup',
            description:
                'Day 1 covered laser cutter software from install to first job. I searched for and downloaded LaserCAD V8.28.18 from Trocen (sztrocen.com), ran Setup and the USB driver installer, linked CorelDraw 12, and opened LaserCAD (1200 × 900 mm bed, COM3). I drew the nameplate in LaserCAD using the left Draw toolbar (Ellipse + Text “A”) and the bottom layer colour bar, set Cut/Engrave layers, tuned speed and power, connected via USB COM3, and used Download Document to send the file to the machine.',
            createdAt: '2026-05-30T16:55:00.000Z',
        },
        {
            id: 'w2-day1-learning',
            type: 'learning',
            topic: 'LaserCAD & laser job parameters',
            machine: 'CO₂ laser cutter (Trocen controller), LaserCAD V8.28',
            concept:
                'In LaserCAD, the left Draw toolbar has Ellipse and Text (A) for shapes and labels; the bottom colour bar assigns layer colours for Cut vs Engrave. Cut uses higher power to go through material; Engrave uses lower power for surface marking. Use the SIL lab chart (below) to pick speed and power for each material and thickness. Verify COM port, set Origin, use Run Box, then Download before Start.',
            createdAt: '2026-05-30T16:56:00.000Z',
        },
        ...images.slice(0, 19),
        {
            id: 'w2-day1-params-learning',
            type: 'learning',
            topic: 'SIL laser parameter chart — speed, power & mode by material',
            machine: 'CO₂ laser cutter (SIL), water chiller — start before machine; change water every 15 days',
            concept:
                'Reference chart used with LaserCAD Layer Parameters. Acrylic CUT: thicker acrylic needs lower speed and higher power (2 mm → speed 22–24, power 45–50; 18 mm → speed 1–2, power 90–95). Acrylic engrave: SCAN, speed 280–300, power 12–20. Also covers glass, leather, marble (SCAN), MDF (2–4 mm CUT), cardboard, paper, and thermocol. Wood tip: increase power and keep speed below 25.',
            createdAt: '2026-06-01T15:00:00.000Z',
        },
        {
            id: 'w2-day1-img-24',
            type: 'image',
            src: `${base}24-sil-acrylic-cutting-chart.png`,
            caption:
                'SIL acrylic cutting chart — lab cheat sheet for LaserCAD: speed, power, and mode (CUT / SCAN) vs material thickness. Chiller note at top; wood adjustment tip at bottom.',
            createdAt: '2026-06-01T15:01:00.000Z',
        },
        ...images.slice(19),
    ];
}

function buildWeek2Day3Entries() {
    const base = 'assets/week2-day3-cricut/';
    const captions = [
        'Day 3 · Step 1 — Google search for “cricut maker software download”. Skip ads; open the official help.cricut.com result — Design Space Download and Installation Instructions (green arrow).',
        'Day 3 · Step 2 — Cricut help page: under Download links, select Cricut Design Space (Mac/Windows) — the desktop installer for cutting machines (highlighted).',
        'Day 3 · Step 3 — design.cricut.com “Find Your Cricut Product”: use the search bar (red arrow) and pick your machine from the Cutting Machines list (e.g. Cricut Maker 4).',
        'Day 3 · Step 4 — Download Design Space for Windows: tick “I agree to Cricut Terms of Use and Privacy Policy” (red arrow) — the Download button stays grey until the checkbox is checked.',
        'Day 3 · Step 5 — After clicking Download, the browser shows Recent download history: CricutDesignSpace-Install-v9.7.69.exe (295 MB — Done). Red arrow points to the download icon in the toolbar.',
        'Day 3 · Step 6 — File Explorer → Downloads: CricutDesignSpace-Install-v9.7.69.exe is ready. Double-click the installer to start setup.',
        'Day 3 · Step 7 — Cricut Design Space Setup window: “Installing, please wait…” with a green progress bar (~35–40% in this capture).',
        'Day 3 · Step 8 — Cricut Sign In screen: enter email and password on the Sign In tab (or switch to Create Cricut ID). Click the green SIGN IN button after entering credentials.',
        'Day 3 · Step 9 — Design Space home: personalized greeting “Hi Prathamesh, what do you want to make?” Click + New Project (orange arrow) to open a blank canvas.',
        'Day 3 · Step 10 — New Iron-On T-Shirt project: left sidebar → Images (green highlight). Browse the built-in image library or search for graphics to add to the canvas.',
        'Day 3 · Step 11 — Canvas design complete: add Text “Prathamesh” and a star from Images. Size the layout to 8.89 cm × 8.89 cm on the grid — ready for iron-on transfer.',
        'Day 3 · Step 12 — Click Preview (top bar) to open Preview Project — shows the design on a white baby onesie mockup. When satisfied, click Make (green button, orange arrow) to send the job to the Cricut machine.',
    ];

    const images = captions.map((caption, i) => ({
        id: `w2-day3-img-${String(i + 1).padStart(2, '0')}`,
        type: 'image',
        src: `${base}${String(i + 1).padStart(2, '0')}.png`,
        caption,
        createdAt: `2026-06-12T${String(2 + Math.floor(i / 4)).padStart(2, '0')}:${String(17 + (i * 3) % 50).padStart(2, '0')}:00.000Z`,
    }));

    return [
        {
            id: 'w2-day3-intro',
            type: 'project',
            title: 'Week 2 — Day 3: Cricut Design Space & Iron-On Design',
            description:
                'Day 3 covered Cricut vinyl/iron-on workflow from software install to first project. I searched for the official Design Space download, selected Cricut Maker 4, accepted terms and downloaded the Windows installer, ran setup, signed in, started a New Project (Iron-On T-Shirt), added text and a star graphic on an 8.89 cm canvas, previewed the design on a onesie mockup, and clicked Make to prepare the cut.',
            createdAt: '2026-06-12T02:17:00.000Z',
        },
        {
            id: 'w2-day3-learning',
            type: 'learning',
            topic: 'Cricut Design Space & iron-on workflow',
            machine: 'Cricut Maker 4, Cricut Design Space v9.7 (Windows)',
            concept:
                'Design Space is the companion app for all Cricut cutting machines. After install, sign in with a Cricut ID. New Project opens a canvas with rulers in cm. Use Text and Images from the left toolbar; set material type (Iron-On) so cut settings match heat-transfer vinyl. Preview shows how the design looks on a product mockup. Make walks through mat loading, material selection, and sending the job to the cutter — mirror iron-on designs before cutting.',
            createdAt: '2026-06-12T02:18:00.000Z',
        },
        ...images,
    ];
}

function buildWeek2AllEntries() {
    return [
        ...tagEntriesWithDay(buildWeek2Day1Entries(), 1),
        ...tagEntriesWithDay(buildWeek2Day3Entries(), 3),
        ...tagEntriesWithDay(buildWeek2Day5Entries(), 5),
    ];
}

function buildWeek2Day5Entries() {
    const base = 'assets/week2-day5-wokwi/';
    const captions = [
        'Day 5 · Step 1 — Google search for “wokwi”. Suggestions include wokwi.com, ESP32 simulator, Arduino simulator, and led blink projects.',
        'Day 5 · Step 2 — Yahoo search for “wowki” (typo). Click wokwi.com — “World’s most advanced ESP32 Simulator” to open the official site.',
        'Day 5 · Step 3 — Wokwi homepage (wokwi.com). Tagline: world’s most advanced ESP32 simulator. Click SIGN UP (top-right) to create an account.',
        'Day 5 · Step 4 — Welcome to Wokwi sign-in modal. Choose Continue with Google to log in quickly (also available: GitHub or Email).',
        'Day 5 · Step 5 — Simulate with Wokwi Online: pick according to yourself. Now i am Takeing  the ESP32 board (black DevKit) to start a microcontroller simulation project.',
        'Day 5 · Step 6 — Starter Templates grid: select the standard ESP32 template (not S2/S3/C3) for a blank DevKit V1 project.',
        'Day 5 · Step 7 — New ESP32 project opens. Left: sketch.ino with default Hello code (Serial.begin 115200, prints “Hello, ESP32!”). Right: simulation canvas still loading the board.',
        'Day 5 · Step 8 — Wokwi workspace overview: sketch.ino / diagram.json tabs on the left; simulation toolbar with Play (run), + (add parts), and ⋮ (more options) on the right.',
        'Day 5 · Step 9 — Click the blue + button on the simulation toolbar to open the component library and add parts to the circuit.',
        'Day 5 · Step 10 — Component picker (Basic category): search or scroll and select LED — a red LED will appear on the canvas next to the ESP32.',
        'Day 5 · Step 11 — Wire the circuit: GPIO D14 → LED anode (long leg) → 220 Ω resistor (red-red-brown-gold) → GND. Green wires show the connections in the diagram.',
        'Day 5 · Step 12 — Write the Blink sketch in sketch.ino: pinMode(14, OUTPUT); in loop() use digitalWrite(14, HIGH), delay(1000), digitalWrite(14, LOW), delay(1000) to toggle the LED every second.',
        'Day 5 · Step 13 — Circuit and code ready. Click the green Play button (top-left of simulation) to start the virtual hardware and run the program.',
        'Day 5 · Step 14 — Simulation running (~10.8 s): red LED is ON (glowing), timer counting, serial monitor shows ESP32 boot messages — blink program works in Wokwi.',
    ];

    const images = captions.map((caption, i) => ({
        id: `w2-day5-img-${String(i + 1).padStart(2, '0')}`,
        type: 'image',
        src: `${base}${String(i + 1).padStart(2, '0')}.png`,
        caption,
        createdAt: `2026-05-30T${String(16 + Math.floor(i / 5)).padStart(2, '0')}:${String(21 + (i * 2) % 40).padStart(2, '0')}:00.000Z`,
    }));

    return [
        {
            id: 'w2-day5-intro',
            type: 'project',
            title: 'Week 2 — Day 5: Wokwi & ESP32 LED Blink',
            description:
                'Day 5 introduced browser-based electronics simulation with Wokwi. I found and signed up on wokwi.com, chose the ESP32 platform, opened a new project, added an LED and 220 Ω resistor, wired GPIO 14 to the LED and ground, wrote a Blink program in sketch.ino (pinMode + digitalWrite + delay), and ran the simulation — the virtual LED toggled on and off with serial output from the ESP32.',
            createdAt: '2026-05-30T16:20:00.000Z',
        },
        {
            id: 'w2-day5-learning',
            type: 'learning',
            topic: 'Wokwi simulator & ESP32 GPIO',
            machine: 'Wokwi (browser), ESP32 DevKit V1, Arduino framework (sketch.ino)',
            concept:
                'Wokwi lets you build and test circuits without physical hardware. An LED needs a current-limiting resistor. GPIO pins are set OUTPUT with pinMode(); digitalWrite(HIGH/LOW) drives the pin. delay(ms) pauses the loop so humans can see the blink. Always connect LED cathode through resistor to GND.',
            createdAt: '2026-05-30T16:21:00.000Z',
        },
        ...images,
    ];
}

function buildWeek3Day1Entries() {
    const base = 'assets/week3-day1-esp32/';
    return [
        {
            id: 'w3-day1-intro',
            type: 'project',
            title: 'Week 3 — Day 1: ESP32 Complete Documentation',
            description:
                'Day 1 introduces the Espressif ESP32 — a low-cost SoC with integrated Wi-Fi and Bluetooth for IoT and embedded projects. I studied the chip overview (successor to ESP8266), GPIO and analog peripherals, the ESP32-WROOM-32 pinout diagram, programming frameworks (Arduino, ESP-IDF, MicroPython, PlatformIO), family variants, development boards, and communication interface reference tables.',
            createdAt: '2026-06-02T10:00:00.000Z',
        },
        {
            id: 'w3-day1-learning-overview',
            type: 'learning',
            topic: 'What is the ESP32?',
            machine: 'Espressif ESP32 SoC (Wi-Fi + Bluetooth microcontroller)',
            concept:
                'The ESP32 is a low-cost, low-power SoC from Espressif with Wi-Fi and Bluetooth on one chip — ideal for IoT, smart home, and sensor projects. It replaced the ESP8266 (2016) with a dual-core CPU, more GPIO, Bluetooth, and extra peripherals while staying affordable. Typical dev boards use the ESP32-WROOM-32 module (38 pins, 4 MB flash) on a breakout with USB‑serial and 3.3 V regulator.',
            createdAt: '2026-06-02T10:05:00.000Z',
        },
        {
            id: 'w3-day1-img-01',
            type: 'image',
            src: `${base}01-esp32-family-boards.png`,
            caption:
                'ESP32 family & common boards — Variants: original ESP32 (dual-core, Wi-Fi + BT 4.2), S2 (USB, more GPIO), S3 (240 MHz, BT 5, AI), C3/C6 (RISC-V), H2 (Zigbee/Thread, no Wi-Fi). Boards: DevKitC, NodeMCU-32S, WROOM/WROVER, TTGO, M5Stack, FireBeetle 2.',
            createdAt: '2026-06-02T10:10:00.000Z',
        },
        {
            id: 'w3-day1-learning-gpio',
            type: 'learning',
            topic: 'GPIO pins & analog features',
            machine: 'ESP32 (34 programmable GPIO, multiplexed functions)',
            concept:
                '34 programmable GPIO pins (most multiplexed). Analog: ADC1 — 8 channels (GPIO32–39), usable with Wi-Fi on; ADC2 — 10 channels, not available when Wi-Fi is active; DAC — 8-bit on GPIO25 & GPIO26; 12-bit ADC (0–4095), 1.1 V internal reference; built-in Hall sensor. See GPIO Overview table below for PWM, touch, voltage, and current limits.',
            createdAt: '2026-06-02T10:15:00.000Z',
        },
        {
            id: 'w3-day1-img-03',
            type: 'image',
            src: `${base}03-gpio-overview.png`,
            caption:
                'GPIO Overview — 34 GPIO (0–39, some input-only); input-only: GPIO 34–39; 16 PWM channels; 18× 12-bit ADC (0–3.3 V); 2× 8-bit DAC (GPIO25, 26); 10 touch pins; 3.3 V logic (not 5 V tolerant); ~40 mA max per pin (12 mA recommended).',
            createdAt: '2026-06-02T10:16:00.000Z',
        },
        {
            id: 'w3-day1-img-02',
            type: 'image',
            src: `${base}02-communication-interfaces.png`,
            caption:
                'Communication interfaces — 3× UART; 4× SPI (2 for general use); 2× I2C; 2× I2S; 1× CAN 2.0; SD/SDIO/MMC host; Ethernet MAC (external PHY); IR remote TX/RX.',
            createdAt: '2026-06-02T10:20:00.000Z',
        },
        {
            id: 'w3-day1-learning-pinout',
            type: 'learning',
            topic: 'ESP32-WROOM-32 pinout (38-pin module)',
            machine: 'ESP32-WROOM-32 module on DevKit / NodeMCU-32S (Last Minute Engineers pinout)',
            concept:
                'The WROOM-32 module exposes 38 pins around the metal shield. Power: 3V3 and GND (never apply 5 V to GPIO). EN resets the chip. Colour legend: purple = GPIO, orange = ADC, yellow = DAC, teal = touch, green/blue = UART/SPI/I2C. UART0 for USB programming is usually GPIO1 (TX) and GPIO3 (RX). I2C defaults often GPIO21 (SDA) and GPIO22 (SCL). HSPI vs VSPI: GPIO12–14, 18–23. GPIO34–39 are input-only (good for sensors). GPIO6–11 connect to internal flash — avoid using them. Strapping pins GPIO0 and GPIO2 affect boot mode (keep high for normal run). Always check the board silkscreen — pin order differs between DevKit and NodeMCU.',
            createdAt: '2026-06-02T10:22:00.000Z',
        },
        {
            id: 'w3-day1-img-04',
            type: 'image',
            src: `${base}04-esp32-wroom-32-pinout.png`,
            caption:
                'ESP32-WROOM-32 pinout diagram (38 pins) — colour-coded functions: power (3V3, GND), EN, GPIO, ADC, DAC, touch, UART, SPI, I2C. Left side: ADC1 input-only pins 34–39; GPIO25/26 DAC; bottom: HSPI and flash pins; right: UART0 (GPIO1/3), I2C (GPIO21/22), VSPI. Pin 32 = NC on this module.',
            createdAt: '2026-06-02T10:23:00.000Z',
        },
        {
            id: 'w3-day1-learning-frameworks',
            type: 'learning',
            topic: 'Programming & development frameworks',
            machine: 'Arduino IDE, ESP-IDF, MicroPython, PlatformIO (VS Code)',
            concept:
                '1) Arduino IDE — easiest start; add board manager URL https://dl.espressif.com/dl/package_esp32_index.json, pick “ESP32 Dev Module”, upload sketches like Arduino. 2) ESP-IDF — Espressif’s official C/C++ SDK with FreeRTOS, deep Wi-Fi/BLE control, and power saving — best for shipping products. 3) MicroPython — run Python on the chip; great for quick tests and education. 4) PlatformIO — VS Code plugin; manages libraries, multiple boards, and serial monitor in one place. Tip: match the board profile to your module (WROOM-32 vs S3/C3) so pin maps stay correct.',
            createdAt: '2026-06-02T10:25:00.000Z',
        },
    ];
}

function buildWeek3Day2Entries() {
    const base = 'assets/week3-day2-arduino/';
    return [
        {
            id: 'w3-day2-intro',
            type: 'project',
            title: 'Week 3 — Day 2: Arduino Uno, Nano & Mega 2560',
            description:
                'Day 2 compares three classic Arduino boards — Uno Rev3, Nano, and Mega 2560 Rev3. I studied each processor, pin count, USB bridge, form factor, and when to pick which board for IoT and maker projects.',
            createdAt: '2026-06-03T10:00:00.000Z',
        },
        {
            id: 'w3-day2-table',
            type: 'table',
            title: 'Arduino Uno vs Nano vs Mega 2560 — at a glance',
            headers: ['Feature', 'Arduino Uno Rev3', 'Arduino Nano', 'Arduino Mega 2560 Rev3'],
            rows: [
                ['Primary MCU', 'ATmega328P', 'ATmega328(P)', 'ATmega2560'],
                ['Clock speed', '16 MHz (up to 20 MHz)', '16 MHz', '16 MHz'],
                ['Digital I/O', '14 (6 PWM)', '14 (6 PWM)', '54 (15 PWM)'],
                ['Analog inputs', '6 (A0–A5)', '8 (A0–A7)', '16 (A0–A15)'],
                ['Flash / SRAM / EEPROM', '32 KB / 2 KB / 1 KB', '32 KB / 2 KB / 1 KB', '256 KB / 8 KB / 4 KB'],
                ['USB bridge IC', 'ATmega16U2', 'FT232RL (or CH340 on clones)', 'ATmega16U2'],
                ['USB connector', 'USB Type-B', 'Mini-USB / Micro-USB', 'USB Type-B'],
                ['Input voltage', '7–12 V (barrel jack)', '7–12 V (VIN) or USB', '7–12 V (barrel jack)'],
                ['Form factor', 'Full-size + shield headers', 'Breadboard-friendly (~18 × 45 mm)', 'Large (~101 × 53 mm)'],
                ['Hardware UARTs', '1', '1', '4'],
                ['Best suited for', 'Learning, shields, general projects', 'Compact breadboard builds', 'Many sensors, motors & displays'],
            ],
            caption: 'All three run at 5 V logic and use the Arduino IDE — the Mega adds I/O and memory; the Nano shrinks the Uno footprint.',
            createdAt: '2026-06-03T10:05:00.000Z',
        },
        {
            id: 'w3-day2-learning-uno',
            type: 'learning',
            topic: 'Arduino Uno Rev3 — key points',
            machine: 'ATmega328P + ATmega16U2 USB bridge',
            concept:
                '• Main processor: ATmega328P at 16 MHz (rated up to 20 MHz).\n• Most GPIO pins go to external headers; a few are reserved for the USB bridge coprocessor.\n• 14 digital I/O pins (6 PWM), 6 analog inputs (A0–A5).\n• ATmega16U2 converts USB to UART for programming and serial monitor.\n• Power via USB-B or 7–12 V DC barrel jack; onboard 5 V and 3.3 V regulators.\n• Standard full-size layout fits Arduino shields — ideal for beginners and prototyping.',
            createdAt: '2026-06-03T10:10:00.000Z',
        },
        {
            id: 'w3-day2-img-uno',
            type: 'image',
            src: `${base}01-arduino-uno-labeled.png`,
            caption:
                'Arduino Uno Rev3 — labeled board: ATmega328P MCU, crystal oscillator, USB port, DC power jack, digital pins 0–13, analog A0–A5, 5V/3.3V/GND, TX/RX LEDs, reset button, and ICSP header.',
            createdAt: '2026-06-03T10:12:00.000Z',
        },
        {
            id: 'w3-day2-img-uno-power',
            type: 'image',
            src: `${base}05-arduino-uno-power.png`,
            caption:
                'Uno power architecture — VIN and USBVCC feed regulators to +5V and +3.3V rails; ATmega328P (~410 mA max) and ATmega16U2 (~261 mA max) share the regulated supply.',
            createdAt: '2026-06-03T10:14:00.000Z',
        },
        {
            id: 'w3-day2-learning-nano',
            type: 'learning',
            topic: 'Arduino Nano — key points',
            machine: 'ATmega328 @ 16 MHz, FT232RL USB-serial',
            concept:
                '• Same ATmega328 family as Uno — 8-bit, 16 MHz, low power.\n• Smallest footprint of the three; dual-row pins plug straight into a breadboard.\n• 14 digital I/O, 6 PWM, and 8 analog pins (A0–A7) — two more analog than Uno.\n• Serial: UART TTL (5 V), I2C (A4/A5), and SPI — same Arduino sketches as Uno.\n• FT232RL bridges USB to the MCU; LM1117 regulator provides 5 V from VIN or USB.\n• Perfect for space-limited maker projects where shield headers are not needed.',
            createdAt: '2026-06-03T10:18:00.000Z',
        },
        {
            id: 'w3-day2-img-nano',
            type: 'image',
            src: `${base}02-arduino-nano-board.png`,
            caption:
                'Arduino Nano — compact blue PCB with Mini-USB, ATmega328P chip, reset button, and pins D0–D13 plus A0–A7 on both sides for breadboard use.',
            createdAt: '2026-06-03T10:20:00.000Z',
        },
        {
            id: 'w3-day2-img-nano-pinout',
            type: 'image',
            src: `${base}03-arduino-nano-pinout.png`,
            caption:
                'Nano mechanical drawing & pinout — ~1.7" × 0.7" board, 0.1" pin pitch, 30 pins: D0–D13, A0–A7, 5V, 3.3V, VIN, GND, and RESET.',
            createdAt: '2026-06-03T10:22:00.000Z',
        },
        {
            id: 'w3-day2-img-nano-block',
            type: 'image',
            src: `${base}06-arduino-nano-block.png`,
            caption:
                'Nano block diagram — USB (J3) → FT232RL → UART → ATmega328P; VIN through LM1117 to +5V; 16 MHz crystal (Y1) clocks the MCU.',
            createdAt: '2026-06-03T10:24:00.000Z',
        },
        {
            id: 'w3-day2-learning-mega',
            type: 'learning',
            topic: 'Arduino Mega 2560 Rev3 — key points',
            machine: 'ATmega2560 + ATmega16U2 USB bridge',
            concept:
                '• Primary processor: ATmega2560 at 16 MHz — far more flash, SRAM, and EEPROM than Uno/Nano.\n• 54 digital I/O lines and 16 analog inputs — connect many sensors and actuators at once.\n• Processing stays responsive thanks to 8 KB SRAM (vs 2 KB on Uno/Nano).\n• ATmega16U2 USB-serial bridge — same flexible USB interface as the Uno.\n• Four hardware UART ports for multi-serial projects (GPS, Bluetooth, RS-485, etc.).\n• Choose Mega when pin count and memory matter more than board size.',
            createdAt: '2026-06-03T10:28:00.000Z',
        },
        {
            id: 'w3-day2-img-mega-pinout',
            type: 'image',
            src: `${base}04-arduino-mega-pinout.png`,
            caption:
                'Mega 2560 Rev3 pinout — ATmega2560 MCU, ATmega16U2 USB chip, 16 analog pins (A0–A15), digital D0–D53, four UARTs, I2C (SDA/SCL), PWM pins marked ~, and power header.',
            createdAt: '2026-06-03T10:30:00.000Z',
        },
        {
            id: 'w3-day2-img-mega-block',
            type: 'image',
            src: `${base}07-arduino-mega-block.png`,
            caption:
                'Mega 2560 block diagram — PWRIN/USBVCC → LD1117 (+5V) & LP2985 (+3.3V); USB (X2) → ATmega16U2 → UART → ATmega2560; both MCUs run at 16 MHz.',
            createdAt: '2026-06-03T10:32:00.000Z',
        },
    ];
}

function buildWeek3Day3Entries() {
    const base = 'assets/week3-day3-firebase/';
    const items = [
        [
            '01.png',
            'Firebase homepage (firebase.google.com) — click Go to console (top right) to open the Firebase Console and manage projects.',
        ],
        [
            '02.png',
            'Firebase Console home — click Create a new Firebase project to start a backend for the ESP32 / IoT app.',
        ],
        [
            '03.png',
            'Create a project — step 1: enter a project name. Firebase auto-generates a unique project ID below the field.',
        ],
        [
            '04.png',
            'Project named esp32 with auto-generated ID esp32-1e24d. A warning appears when the account is near the free-tier project limit.',
        ],
        [
            '05.png',
            'Enable Gemini in Firebase (recommended) — AI help for planning, Crashlytics debugging, Cloud Messaging insights, and SQL Connect. Click Continue.',
        ],
        [
            '06.png',
            'Enable Google Analytics for this project (recommended) — unlocks A/B testing, user segmentation, Crashlytics breadcrumbs, and free reporting. Click Continue.',
        ],
        [
            '07.png',
            'Configure Google Analytics — choose Default Account for Firebase, then click Create project to finish provisioning.',
        ],
        [
            '08.png',
            'New project esp32 on Spark plan — open Security in the sidebar, then select Authentication to set up user sign-in.',
        ],
        [
            '09.png',
            'Authentication landing page — click Get started to add sign-in methods (Email/Password, Google, Phone, and more).',
        ],
        [
            '10.png',
            'Sign-in method tab — providers grouped as Native (Email/Password, Phone, Anonymous) and Additional (Google, Facebook, GitHub, etc.). Select Google.',
        ],
        [
            '11.png',
            'Google sign-in setup — turn the Enable toggle on. Android apps also need SHA-1 fingerprints in Project Settings → Your apps.',
        ],
        [
            '12.png',
            'Google provider enabled — set the public-facing project name and support email, then click Save. Expand Web SDK configuration for client IDs if needed.',
        ],
        [
            '13.png',
            'Open Databases & Storage in the sidebar, then choose Realtime Database under NoSQL (JSON tree, live sync).',
        ],
        [
            '14.png',
            'Realtime Database intro — click Create Database to store and sync sensor or app data in real time.',
        ],
        [
            '15.png',
            'Set up database — step 1 Database options: pick Realtime Database location Singapore (asia-southeast1) for lower latency in Asia, then Next.',
        ],
        [
            '16.png',
            'Security rules — step 2: Start in test mode for quick development (open read/write until the expiry date). Click Enable; tighten rules before production.',
        ],
        [
            '17.png',
            'Copy the Realtime Database URL — use the link icon next to the database reference so ESP32 or web clients can connect to asia-southeast1.',
        ],
        [
            '18.png',
            'Realtime Database Data tab — live URL shown at the top; open Settings → General from the gear menu for project ID and app registration.',
        ],
        [
            '19.png',
            'Project Settings → Service accounts → Firebase Admin SDK — click Generate new private key to download JSON credentials for server-side Node.js/Python access.',
        ],
        [
            '20.png',
            'Admin SDK page — Node.js snippet loads serviceAccountKey.json and databaseURL. Database secrets (legacy) in the sidebar are deprecated.',
        ],
        [
            '21.png',
            'Database secrets (legacy) — warning: use Firebase Admin SDK instead of legacy token generator secrets for new projects.',
        ],
        [
            '22.png',
            'Settings menu — select Service accounts to reach Admin SDK and credential management.',
        ],
        [
            '23.png',
            'Project Settings → Your apps — no apps yet. Click the Web icon (</>) to register a web app and get firebaseConfig.',
        ],
        [
            '24.png',
            'Add Firebase to your web app — step 1 Register app: enter app nickname AccuWeather, then click Register app.',
        ],
        [
            '25.png',
            'Step 2 Add Firebase SDK — copy firebaseConfig (apiKey, authDomain, databaseURL, projectId, appId) and run initializeApp(firebaseConfig) plus getAnalytics(app) in your web project.',
        ],
    ];

    const images = items.map((pair, i) => ({
        id: `w3-day3-img-${String(i + 1).padStart(2, '0')}`,
        type: 'image',
        src: `${base}${pair[0]}`,
        caption: pair[1],
        createdAt: `2026-06-04T${String(9 + Math.floor(i / 5)).padStart(2, '0')}:${String((i * 5) % 60).padStart(2, '0')}:00.000Z`,
    }));

    return [
        {
            id: 'w3-day3-intro',
            type: 'project',
            title: 'Week 3 — Day 3: Firebase Console, Authentication & Realtime Database',
            description:
                'Day 3 walkthrough: created Firebase project esp32, enabled Gemini and Google Analytics, set up Authentication with Google sign-in, created a Realtime Database in Singapore (test mode), generated Admin SDK credentials, registered a web app (AccuWeather), and copied the Firebase web SDK config for client integration.',
            createdAt: '2026-06-04T09:00:00.000Z',
        },
        {
            id: 'w3-day3-learning-auth',
            type: 'learning',
            topic: 'Firebase Authentication — providers & configuration',
            machine: 'Firebase Console (web)',
            concept:
                'Firebase Auth adds sign-in without custom backend code. Enable providers under Authentication → Sign-in method. For Google: turn Enable on, set support email and public name, then Save. Android Google sign-in requires SHA-1 in Project Settings. OAuth options include Email/Password, Phone, GitHub, and Facebook.',
            createdAt: '2026-06-04T09:05:00.000Z',
        },
        {
            id: 'w3-day3-learning-db',
            type: 'learning',
            topic: 'Realtime Database, Admin SDK & web app setup',
            machine: 'Firebase Realtime Database + Admin SDK + Web SDK',
            concept:
                'Realtime Database syncs JSON in real time — pick a nearby region (e.g. asia-southeast1). Test mode allows open access temporarily; use locked rules for production. Server code uses Admin SDK with a service-account JSON key (never commit to Git). Web apps register under Project Settings, then use firebaseConfig with initializeApp().',
            createdAt: '2026-06-04T09:10:00.000Z',
        },
        ...images,
    ];
}

function buildWeek3Day4Entries() {
    const base = 'assets/week3-day4-motors/';
    return [
        {
            id: 'w3-day4-intro',
            type: 'project',
            title: 'Week 3 — Day 4: BO Motors, L298 Driver & MG995 Servo',
            description:
                'Day 4 covers DC motor fundamentals — how a motor-gearbox trades speed for torque, the internal parts of a BO (Battery Operated) motor, controlling BO motors with the L298 H-bridge driver using PWM, and using the MG995 metal-gear servo for precise angular motion in robotics.',
            createdAt: '2026-06-05T10:00:00.000Z',
        },
        {
            id: 'w3-day4-learning-gearbox',
            type: 'learning',
            topic: 'Motor–gearbox system — speed vs torque',
            machine: 'BO (Battery Operated) DC motor with plastic gearbox',
            concept:
                'A motor-gearbox reduces output speed while multiplying torque. Since mechanical power ≈ torque × speed, lowering speed raises available torque at the output shaft — essential for wheels, arms, and other high-torque loads. The gearbox uses compound spur gears: a small pinion on the motor shaft drives larger gears in stages until the final output shaft turns slowly but with much more force.',
            createdAt: '2026-06-05T10:05:00.000Z',
        },
        {
            id: 'w3-day4-img-gearbox',
            type: 'image',
            src: `${base}02-bo-motor-gearbox.png`,
            caption:
                'BO motor gearbox internals — yellow plastic housing with white compound spur gears, pinion, shafts, and bushings. Multiple gear stages step down motor RPM and step up torque for driving robot wheels.',
            createdAt: '2026-06-05T10:10:00.000Z',
        },
        {
            id: 'w3-day4-learning-bo-motor',
            type: 'learning',
            topic: 'Parts of a BO motor',
            machine: 'BO DC motor (brushed, permanent-magnet)',
            concept:
                '• Rotor coil — copper windings on the spinning shaft create the magnetic field.\n• Commutator — segmented copper ring that reverses current direction each half-turn.\n• Permanent magnets (stator) — fixed magnets inside the metal housing.\n• Brushes — spring contacts that press against the commutator to feed current.\n• Capacitor — soldered across terminals to reduce electrical noise and sparking.',
            createdAt: '2026-06-05T10:15:00.000Z',
        },
        {
            id: 'w3-day4-img-bo-parts',
            type: 'image',
            src: `${base}01-bo-motor-parts.png`,
            caption:
                'Exploded view of a BO motor — rotor coil, commutator, stator permanent magnets, brushes, and noise-suppression capacitor labeled. These parts work together to convert electrical energy into rotational motion.',
            createdAt: '2026-06-05T10:20:00.000Z',
        },
        {
            id: 'w3-day4-learning-l298',
            type: 'learning',
            topic: 'L298 motor driver — Experiment 4',
            machine: 'L298 dual H-bridge motor driver module',
            concept:
                'In Experiment 4, BO motors are driven by an L298 module. PWM (Pulse Width Modulation) varies the effective voltage applied to the motor, controlling speed. An H-bridge inside the L298 reverses current flow through the motor windings, switching rotation between clockwise and anticlockwise. One L298 can control two DC motors independently.',
            createdAt: '2026-06-05T10:25:00.000Z',
        },
        {
            id: 'w3-day4-learning-servo',
            type: 'learning',
            topic: 'MG995 Metal Gear Servo',
            machine: 'Pro MG995 DIGI HI-SPEED standard servo (metal gears)',
            concept:
                '• Rotation range: ~120° total (60° each direction from centre).\n• Cable: 30 cm with 3-pin “S” type female header — compatible with Futaba, JR, GWS, Hitec, Spektrum, and most RC receivers.\n• Beginner-friendly: use any standard servo library — no need to build a custom motor controller with feedback and gearbox.\n• Compact metal-gear design fits small spaces; includes a selection of servo horns and mounting hardware.\n• Body size: approx. 40 × 20 × 38 mm (see dimensional diagram).',
            createdAt: '2026-06-05T10:30:00.000Z',
        },
        {
            id: 'w3-day4-img-mg995',
            type: 'image',
            src: `${base}03-mg995-servo.png`,
            caption:
                'MG995 metal-gear servo — photo and dimensional drawings (side 38 mm, width 20 mm, length 54 mm with flanges). Three-wire cable (brown, red, orange) with standard 3-pin connector; brass output shaft with cross-type horn.',
            createdAt: '2026-06-05T10:35:00.000Z',
        },
        {
            id: 'w3-day4-img-servo-system',
            type: 'image',
            src: `${base}04-servo-system-config.png`,
            caption:
                'Servo system configuration — closed-loop control: (1) Controller sends target values to the servo drive; (2) Servo drive outputs motor power signals; (3) Encoder on the servomotor feeds position feedback. Industrial servos use the same principle as hobby servos, but with higher precision and load capacity.',
            createdAt: '2026-06-05T10:40:00.000Z',
        },
    ];
}

function buildWeek4Day2Entries() {
    const base = 'assets/week4-day2-edge-impulse/';
    const items = [
        [
            '01.png',
            'Google search for Edge Impulse — open edgeimpulse.com (leading edge AI platform for deploying ML on microcontrollers).',
        ],
        [
            '02.png',
            'Edge Impulse homepage in search results — platform for building intelligent products with computer vision, predictive maintenance, and edge ML.',
        ],
        [
            '03.png',
            'Project dashboard — Alphabets_classification (Prathamesh_07), target device Cortex-M4F 80 MHz, tag IMAGES. Start by collecting data or uploading a dataset.',
        ],
        [
            '04.png',
            'Devices tab — connect hardware to Edge Impulse via Remote Management API or Ingestion API. Click + Connect a new device.',
        ],
        [
            '05.png',
            'Data acquisition — 10 camera samples collected (labels A, B, C), 90% train / 10% test split. Phone device used to capture images with label C selected.',
        ],
        [
            '06.png',
            'Create Impulse — set input to Image data at 96×96 pixels, resize mode Fit shortest axis, 100% training subset. Add processing and learning blocks next.',
        ],
        [
            '07.png',
            'Add processing block — choose Image (preprocess and normalize image data, optionally reduce color depth).',
        ],
        [
            '08.png',
            'Add learning block — choose Classification to categorize images into patterns (3 classes: A, B, C).',
        ],
        [
            '09.png',
            'Complete impulse pipeline — Image data → Image DSP → Classifier → output A, B, C. Click Save Impulse.',
        ],
        [
            '10.png',
            'Image processing block — input 96×96, Fit shortest axis resize keeps images square for the neural network.',
        ],
        [
            '11.png',
            'Image parameters — Color depth set to RGB; raw features show hex pixel values. Click Save parameters.',
        ],
        [
            '12.png',
            'Generate features — training set has 9 items across 3 classes. Click Generate features to convert raw images into feature vectors.',
        ],
        [
            '13.png',
            'Feature explorer — scatter plot shows blue (A), orange (B), and green (C) clusters after feature extraction; checks class separation before training.',
        ],
        [
            '14.png',
            'Neural network settings — 10 training cycles, learning rate 0.0005, CPU trainer. Architecture: 27,648 input features, 2× 2D conv/pool layers.',
        ],
        [
            '15.png',
            'CNN architecture — 16-filter conv → 32-filter conv → Flatten → Dropout 0.25 → Output layer (3 classes). Click Save & train.',
        ],
        [
            '16.png',
            'Training results — quantized int8 model: 50% accuracy, loss 1.17. Confusion matrix shows Class A misclassified as C; Class C predicted correctly.',
        ],
        [
            '17.png',
            'Model testing view — validation metrics and data explorer confirm overlap between classes; more training data and tuning needed to improve accuracy.',
        ],
    ];

    const images = items.map((pair, i) => ({
        id: `w4-day2-img-${String(i + 1).padStart(2, '0')}`,
        type: 'image',
        src: `${base}${pair[0]}`,
        caption: pair[1],
        createdAt: `2026-06-10T${String(7 + Math.floor(i / 4)).padStart(2, '0')}:${String((i * 6) % 60).padStart(2, '0')}:00.000Z`,
    }));

    return [
        {
            id: 'w4-day2-intro',
            type: 'project',
            title: 'Week 4 — Day 2: Edge Impulse — Alphabets Classification',
            description:
                'Day 2 introduces Edge Impulse for TinyML: created the Alphabets_classification project, collected camera images for letters A, B, and C, designed an impulse (Image → Classification CNN), generated features, trained a neural network, and reviewed model accuracy on Cortex-M4F target hardware.',
            createdAt: '2026-06-10T07:00:00.000Z',
        },
        {
            id: 'w4-day2-learning-workflow',
            type: 'learning',
            topic: 'Edge Impulse ML workflow',
            machine: 'Edge Impulse Studio — Cortex-M4F 80 MHz target',
            concept:
                '• Impulse = input block + DSP processing + learning block + output.\n• Collect labeled data (camera images for A, B, C).\n• Set image size to 96×96 RGB for microcontroller-friendly memory use.\n• Generate features to visualize class clusters before training.\n• Train a CNN classifier, then deploy the quantized model to Arduino/ESP32.',
            createdAt: '2026-06-10T07:05:00.000Z',
        },
        ...images,
        {
            id: 'w4-day2-learning-results',
            type: 'learning',
            topic: 'First training results & next steps',
            machine: 'Edge Impulse Classifier (quantized int8)',
            concept:
                '• Initial model reached 50% accuracy — Class C detected well, Class A confused with C.\n• Small dataset (9–10 samples) limits generalization.\n• Improve by collecting more varied images per letter, balancing classes, and retraining.\n• Use the confusion matrix and feature explorer to spot overlapping clusters.',
            createdAt: '2026-06-10T08:00:00.000Z',
        },
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
        { id: 'w1', label: 'Week 1', expanded: true, entries: buildWeek1AllEntries() },
        { id: 'w2', label: 'Week 2', expanded: true, entries: buildWeek2AllEntries() },
        {
            id: 'w3',
            label: 'Week 3',
            expanded: true,
            entries: [
                ...tagEntriesWithDay(buildWeek3Day1Entries(), 1),
                ...tagEntriesWithDay(buildWeek3Day2Entries(), 2),
                ...tagEntriesWithDay(buildWeek3Day3Entries(), 3),
                ...tagEntriesWithDay(buildWeek3Day4Entries(), 4),
            ],
        },
        {
            id: 'w4',
            label: 'Week 4',
            expanded: true,
            entries: [...tagEntriesWithDay(buildWeek4Day2Entries(), 2)],
        },
    ],
    sessions: [
        ...buildDesignThinkingSessionEntries(),
        ...buildEdgeImpulseSessionEntries(),
    ],
};

let state = loadState();
let modalContext = null;

function applyWeek1ContentVersion(state) {
    if (localStorage.getItem(WEEK1_CONTENT_VERSION_KEY) === WEEK1_CONTENT_VERSION) {
        return state;
    }
    if (state.weeks?.[0]) {
        state.weeks[0] = {
            ...state.weeks[0],
            expanded: true,
            entries: buildWeek1AllEntries(),
        };
    }
    localStorage.setItem(WEEK1_CONTENT_VERSION_KEY, WEEK1_CONTENT_VERSION);
    return state;
}

function applyWeek2ContentVersion(state) {
    if (localStorage.getItem(WEEK2_CONTENT_VERSION_KEY) === WEEK2_CONTENT_VERSION) {
        return state;
    }
    if (state.weeks?.[1]) {
        state.weeks[1] = {
            ...state.weeks[1],
            expanded: true,
            entries: buildWeek2AllEntries(),
        };
    }
    localStorage.setItem(WEEK2_CONTENT_VERSION_KEY, WEEK2_CONTENT_VERSION);
    return state;
}

function applyWeek3ContentVersion(state) {
    if (localStorage.getItem(WEEK3_CONTENT_VERSION_KEY) === WEEK3_CONTENT_VERSION) {
        return state;
    }
    if (state.weeks?.[2]) {
        state.weeks[2] = {
            ...state.weeks[2],
            expanded: true,
            entries: [
                ...tagEntriesWithDay(buildWeek3Day1Entries(), 1),
                ...tagEntriesWithDay(buildWeek3Day2Entries(), 2),
                ...tagEntriesWithDay(buildWeek3Day3Entries(), 3),
                ...tagEntriesWithDay(buildWeek3Day4Entries(), 4),
            ],
        };
    }
    localStorage.setItem(WEEK3_CONTENT_VERSION_KEY, WEEK3_CONTENT_VERSION);
    return state;
}

function applyWeek4ContentVersion(state) {
    if (localStorage.getItem(WEEK4_CONTENT_VERSION_KEY) === WEEK4_CONTENT_VERSION) {
        return state;
    }
    if (state.weeks?.[3]) {
        state.weeks[3] = {
            ...state.weeks[3],
            expanded: true,
            entries: [...tagEntriesWithDay(buildWeek4Day2Entries(), 2)],
        };
    }
    localStorage.setItem(WEEK4_CONTENT_VERSION_KEY, WEEK4_CONTENT_VERSION);
    return state;
}

function applySessionsContentVersion(state) {
    if (localStorage.getItem(SESSIONS_CONTENT_VERSION_KEY) === SESSIONS_CONTENT_VERSION) {
        return state;
    }
    state.sessions = [
        ...buildDesignThinkingSessionEntries(),
        ...buildEdgeImpulseSessionEntries(),
    ];
    localStorage.setItem(SESSIONS_CONTENT_VERSION_KEY, SESSIONS_CONTENT_VERSION);
    return state;
}

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            let merged = mergeDefaults(parsed);
            merged = applyWeek1ContentVersion(merged);
            merged = applyWeek2ContentVersion(merged);
            merged = applyWeek3ContentVersion(merged);
            merged = applyWeek4ContentVersion(merged);
            merged = applySessionsContentVersion(merged);
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
            } catch (_) {
                /* ignore quota on version bump */
            }
            return merged;
        }
    } catch (_) {
        /* use defaults */
    }
    const fresh = structuredClone(DEFAULT_DATA);
    localStorage.setItem(WEEK1_CONTENT_VERSION_KEY, WEEK1_CONTENT_VERSION);
    localStorage.setItem(WEEK2_CONTENT_VERSION_KEY, WEEK2_CONTENT_VERSION);
    localStorage.setItem(WEEK3_CONTENT_VERSION_KEY, WEEK3_CONTENT_VERSION);
    localStorage.setItem(WEEK4_CONTENT_VERSION_KEY, WEEK4_CONTENT_VERSION);
    localStorage.setItem(SESSIONS_CONTENT_VERSION_KEY, SESSIONS_CONTENT_VERSION);
    return fresh;
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
        weeks: parsed.weeks?.length === 4 ? parsed.weeks : base.weeks,
        sessions: parsed.sessions?.length ? parsed.sessions : base.sessions,
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
    renderSessions();
}

function renderSessions() {
    const container = document.getElementById('sessions-container');
    if (!container) return;
    container.innerHTML = state.sessions
        .map((entry) => renderEntry(entry))
        .join('');
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

function getEntryDay(entry) {
    const day = Number(entry.day);
    if (day >= 1 && day <= DAYS_PER_WEEK) return day;
    const id = entry.id || '';
    const match = id.match(/-day(\d+)-/i) || id.match(/day(\d+)/i);
    if (match) {
        const n = parseInt(match[1], 10);
        if (n >= 1 && n <= DAYS_PER_WEEK) return n;
    }
    if (/github/i.test(id)) return 1;
    return 1;
}

function groupEntriesByDay(entries) {
    const groups = Object.fromEntries(Array.from({ length: DAYS_PER_WEEK }, (_, i) => [i + 1, []]));
    for (const entry of entries) {
        groups[getEntryDay(entry)].push(entry);
    }
    return groups;
}

function renderWeekDays(entries) {
    const byDay = groupEntriesByDay(entries);
    return Array.from({ length: DAYS_PER_WEEK }, (_, i) => {
        const dayNum = i + 1;
        const dayEntries = byDay[dayNum];
        const dayBody =
            dayEntries.length > 0
                ? dayEntries.map((e) => renderEntry(e)).join('')
                : '<p class="day-empty">No entries for this day yet.</p>';
        return `
        <section class="day-block" data-day="${dayNum}">
            <h4 class="day-heading">Day ${dayNum}</h4>
            <div class="day-entries">${dayBody}</div>
        </section>`;
    }).join('');
}

function renderWeeks() {
    const container = document.getElementById('weeks-container');
    container.innerHTML = state.weeks
        .map((week, index) => {
            const entriesHtml = renderWeekDays(week.entries);

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
        table: '📊 Comparison',
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
                ${entry.concept ? `<p class="concept-text"><strong>Concept:</strong> ${escapeHtml(entry.concept).replace(/\n/g, '<br>')}</p>` : ''}`;
            break;
        case 'table':
            if (entry.headers?.length && entry.rows?.length) {
                const head = entry.headers.map((h) => `<th>${escapeHtml(h)}</th>`).join('');
                const rows = entry.rows
                    .map(
                        (row) =>
                            `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`
                    )
                    .join('');
                body = `
                    ${entry.title ? `<p><strong>${escapeHtml(entry.title)}</strong></p>` : ''}
                    <div class="comparison-table-wrap">
                        <table class="comparison-table">
                            <thead><tr>${head}</tr></thead>
                            <tbody>${rows}</tbody>
                        </table>
                    </div>`;
                if (entry.caption) {
                    body += `<p class="table-caption">${escapeHtml(entry.caption)}</p>`;
                }
            }
            break;
        case 'project':
            body =
                entry.id === 'w1-github-intro' ||
                entry.id === 'w1-day2-intro' ||
                entry.id === 'w1-day3-intro' ||
                entry.id === 'w2-day1-intro' ||
                entry.id === 'w2-day5-intro' ||
                entry.id === 'w3-day1-intro' ||
                entry.id === 'w3-day2-intro' ||
                entry.id === 'w3-day3-intro' ||
                entry.id === 'w3-day4-intro' ||
                entry.id === 'w4-day2-intro' ||
                entry.id === 'session-design-thinking-intro' ||
                entry.id === 'session-edge-impulse-intro'
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
    const i = state.sessions.findIndex((e) => e.id === entryId);
    if (i !== -1) {
        state.sessions.splice(i, 1);
        saveState();
        renderSessions();
        return;
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
