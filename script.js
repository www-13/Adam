 // Projects Data
 const projects = {
    big: [
        {
            title: "Domz",
            description: "It is a working social media website.",
            image: "images/domz.png",
            demo: "https://domz.onrender.com/",
            github: "https://domz.onrender.com/"
        },
        {
            title: "EsnadLib",
            description: "It is Digital Library",
            image: "images/esnad.png",
            demo: "https://esnad.onrender.com/",
            github: "https://github.com/www-13/esnad"
        }
    ],
    small: [
        {
            title: "ISLAMY",
            description: "It is an Islamic website contains Prayer times section and can help you listen and read quraan and other.",
            image: "images/islamy.jpg",
            demo: "https://www-13.github.io/islamy/",
            github: "https://github.com/www-13/islamy/"
        },
        {
            title: "NGG",
            description: "It is a game that make a random number and you have to guiss it and the game tells you you are near or far to the number !",
            image: "images/ngg.png",
            demo: "https://www-13.github.io/Num-G-Game/",
            github: "https://github.com/www-13/Num-G-Game/"
        },
        {
            title: "PROGAWY",
            description: "PROGAWY is a website that can help you learn web dev and there are exams you can solve.",
            image: "images/progawy.png",
            demo: "https://www-13.github.io/progawy/",
            github: "https://github.com/www-13/progawy/"
        },
        {
            title: "Photo editor",
            description: "Photo-editor is a website that can help you edit images.",
            image: "images/photo_editor.png",
            demo: "https://thehacker2013a.github.io/Photo-editor/",
            github: "https://github.com/thehacker2013a/Photo-editor/"
        },
        {
            title: "Fruitables",
            description: "It is a fruits and vegetables shopping website design !",
            image: "images/Frutables.jpg",
            languages: "HTML, CSS",
            demo: "https://www-13.github.io/Fruitables/",
            github: "https://github.com/www-13/Fruitables/"
        },
        {
            title: "Pray on the Nabi",
            description: "It is a website that send messages to you every 1 minute to pray on the nabi !",
            image: "images/download.png",
            languages: "HTML, CSS JavaScript",
            demo: "https://www-13.github.io/-/",
            github: "https://github.com/www-13/-/"
        },
        {
            title: "Text to speech",
            description: "It is a website that converts text to speech",
            image: "images/text-to-speech.png",
            demo: "https://www-13.github.io/text-to-speech/",
            github: "https://github.com/www-13/text-to-speech/"
        },
        {
            title: "Alarm",
            description: "It is a Alarm website.",
            image: "images/Alarm.png",
            demo: "https://thehacker2013a.github.io/Alarm./",
            github: "https://github.com/thehacker2013a/Alarm./"
        },
        {
            title: "Todos App",
            description: "It is a todos app.",
            image: "images/todos.jpg",
            demo: "https://www-13.github.io/Todos_App/",
            github: "https://wwww-13.github.io/Todos_App/"
        },
        {
            title: "TST",
            description: "It is a typing speed test app.",
            image: "images/tst.png",
            demo: "https://www-13.github.io/TST",
            github: "https://wwww-13.github.io/TST/"
        },
        {
            title: "A-System",
            description: "It is customers management system.",
            image: "images/a-systen.png",
            demo: "https://a-system.onrender.com/",
            github: "https://github.com/www-13/a-system"
        },
    ]
};

let currentFilter = 'all';
let currentIndex = 0;
let currentProjects = [...projects.big, ...projects.small];

// Three.js Advanced Animation
function initThree() {
    const canvas = document.getElementById('three-canvas');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.position.z = 30;

    // Create interconnected network of spheres
    const spheres = [];
    const connections = [];
    const numSpheres = 50;

    // Create spheres
    for (let i = 0; i < numSpheres; i++) {
        const geometry = new THREE.SphereGeometry(0.3, 16, 16);
        const material = new THREE.MeshBasicMaterial({
            color: new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 1, 0.6),
            transparent: true,
            opacity: 0.8
        });
        const sphere = new THREE.Mesh(geometry, material);
        
        sphere.position.x = (Math.random() - 0.5) * 60;
        sphere.position.y = (Math.random() - 0.5) * 60;
        sphere.position.z = (Math.random() - 0.5) * 60;
        
        sphere.velocity = new THREE.Vector3(
            (Math.random() - 0.5) * 0.02,
            (Math.random() - 0.5) * 0.02,
            (Math.random() - 0.5) * 0.02
        );
        
        spheres.push(sphere);
        scene.add(sphere);
    }

    // Create connections
    function updateConnections() {
        // Remove old connections
        connections.forEach(line => scene.remove(line));
        connections.length = 0;

        // Create new connections
        for (let i = 0; i < spheres.length; i++) {
            for (let j = i + 1; j < spheres.length; j++) {
                const distance = spheres[i].position.distanceTo(spheres[j].position);
                if (distance < 15) {
                    const geometry = new THREE.BufferGeometry().setFromPoints([
                        spheres[i].position,
                        spheres[j].position
                    ]);
                    const material = new THREE.LineBasicMaterial({
                        color: 0x6366f1,
                        transparent: true,
                        opacity: (1 - distance / 15) * 0.3
                    });
                    const line = new THREE.Line(geometry, material);
                    connections.push(line);
                    scene.add(line);
                }
            }
        }
    }

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Animation loop
    let frameCount = 0;
    function animate() {
        requestAnimationFrame(animate);
        frameCount++;

        // Move spheres
        spheres.forEach(sphere => {
            sphere.position.add(sphere.velocity);
            
            // Bounce off boundaries
            if (Math.abs(sphere.position.x) > 30) sphere.velocity.x *= -1;
            if (Math.abs(sphere.position.y) > 30) sphere.velocity.y *= -1;
            if (Math.abs(sphere.position.z) > 30) sphere.velocity.z *= -1;
            
            // Mouse interaction
            const dx = (mouseX * 20) - sphere.position.x;
            const dy = (mouseY * 20) - sphere.position.y;
            sphere.position.x += dx * 0.001;
            sphere.position.y += dy * 0.001;
        });

        // Update connections every 3 frames for performance
        if (frameCount % 3 === 0) {
            updateConnections();
        }

        // Rotate scene slightly
        scene.rotation.y += 0.0005;
        
        renderer.render(scene, camera);
    }

    animate();

    // Resize handler
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// Initialize Three.js
initThree();

// Display Project
function displayProject(index) {
    const project = currentProjects[index];
    const showcase = document.getElementById('project-showcase');
    
    showcase.innerHTML = `
        <div class="project-image" style="background-image: url('${project.image}')"></div>
        <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-buttons">
                <a href="${project.github}" target="_blank" class="btn-project btn-github"><i class='bx bxl-github'></i> GitHub Repository</a>
                <a href="${project.demo}" target="_blank" class="btn-project btn-demo"><i class='bx bx-link-external'></i> Live Demo</a>
            </div>
        </div>
    `;

    updateNavButtons();
}

// Update Navigation Buttons
function updateNavButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === currentProjects.length - 1;
}

// Navigation Functions
function nextProject() {
    if (currentIndex < currentProjects.length - 1) {
        currentIndex++;
        displayProject(currentIndex);
    }
}

function previousProject() {
    if (currentIndex > 0) {
        currentIndex--;
        displayProject(currentIndex);
    }
}

// Filter Projects
function filterProjects(filter) {
    currentFilter = filter;
    currentIndex = 0;
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    if (filter === 'all') {
        currentProjects = [...projects.big, ...projects.small];
    } else if (filter === 'big') {
        currentProjects = projects.big;
    } else {
        currentProjects = projects.small;
    }
    
    displayProject(currentIndex);
}

// Toggle Mobile Menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById('navLinks');
        const hamburger = document.getElementById('hamburger');
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Theme Toggle
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? null : 'light';
    html.setAttribute('data-theme', newTheme || '');
}

// Scroll to Top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/Hide Scroll Button
window.addEventListener('scroll', () => {
    const scrollBtn = document.querySelector('.scroll-top');
    if (window.pageYOffset > 500) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize
displayProject(0);