function toggleMenu() {
    document.querySelector('.mobile-menu').classList.toggle('active');
}

let smallProjects = [
    {
        name: "ISLAMY",
        description: "It is an Islamic website contains Prayer times section and can help you listen and read quraan and other.",
        image: "images/islamy.jpg",
        languages: "HTML, CSS, JavaScript",
        demoLink: "https://www-13.github.io/islamy/",
        githubLink: "https://github.com/www-13/islamy/"
    },
    {
        name: "NGG",
        description: "It is a game that make a random number and you have to guiss it and the game tells you you are near or far to the number !",
        image: "images/ngg.png",
        languages: "HTML, CSS, JavaScript",
        demoLink: "https://www-13.github.io/Num-G-Game/",
        githubLink: "https://github.com/www-13/Num-G-Game/"
    },
    {
        name: "PROGAWY",
        description: "PROGAWY is a website that can help you learn web dev and there are exams you can solve.",
        image: "images/progawy.png",
        languages: "HTML, CSS, JavaScript",
        demoLink: "https://www-13.github.io/progawy/",
        githubLink: "https://github.com/www-13/progawy/"
    },
    {
        name: "Photo editor",
        description: "Photo-editor is a website that can help you edit images.",
        image: "images/photo_editor.png",
        languages: "HTML, CSS, JavaScript",
        demoLink: "https://thehacker2013a.github.io/Photo-editor/",
        githubLink: "https://github.com/thehacker2013a/Photo-editor/"
    },
    {
        name: "Fruitables",
        description: "It is a fruits and vegetables shopping website design !",
        image: "images/Frutables.jpg",
        languages: "HTML, CSS",
        demoLink: "https://www-13.github.io/Fruitables/",
        githubLink: "https://github.com/www-13/Fruitables/"
    },
    {
        name: "Pray on the babi",
        description: "It is a website that send messages to you every 1 minute to pray on the nabi !",
        image: "images/download.png",
        languages: "HTML, CSS JavaScript",
        demoLink: "https://www-13.github.io/-/",
        githubLink: "https://github.com/www-13/-/"
    },
    {
        name: "Text to speech",
        description: "It is a website that converts text to speech",
        image: "images/text-to-speech.png",
        languages: "HTML, CSS, JavaScript",
        demoLink: "https://thehacker2013a.github.io/text-to-Speech/",
        githubLink: "https://github.com/thehacker2013a/text-to-Speech/"
    },
    {
        name: "Alarm",
        description: "It is a Alarm website.",
        image: "images/Alarm.png",
        languages: "HTML, CSS, JavaScript",
        demoLink: "https://thehacker2013a.github.io/Alarm./",
        githubLink: "https://github.com/thehacker2013a/Alarm./"
    },
    {
        name: "Todos App",
        description: "It is a todos app.",
        image: "images/todos.jpg",
        languages: "HTML, CSS, JavaScript",
        demoLink: "https://www-13.github.io/Todos_App/",
        githubLink: "https://wwww-13.github.io/Todos_App/"
    },
    {
        name: "AutoCraft",
        description: "No description.",
        image: "images/autocraft.jpg",
        languages: "HTML, CSS, JavaScript",
        demoLink: "https://www-13.github.io/autocraft",
        githubLink: "https://wwww-13.github.io/autocraft/"
    },
    {
        name: "TST",
        description: "It is a typing speed test app.",
        image: "images/tst.png",
        languages: "HTML, CSS, JavaScript",
        demoLink: "https://www-13.github.io/TST",
        githubLink: "https://wwww-13.github.io/TST/"
    },
];

let bigProjects = [
    {
        name: "A-System",
        description: "It is customers management system.",
        image: "images/a-systen.png",
        languages: "HTML, CSS, JavaScript, Node.js, ejs, mongo DB",
        demoLink: "https://a-system.onrender.com/",
        githubLink: "https://github.com/www-13/a-system"
    },
    {
        name: "EsnadLib",
        description: "It is Digital Library",
        image: "images/esnad.png",
        languages: "HTML, CSS, JavaScript, Node.js, ejs, mongo DB",
        demoLink: "https://esnad.onrender.com/",
        githubLink: "https://github.com/www-13/esnad"
    }
];

// -----------------------------------------------------
let projects = smallProjects;

let spBtn = document.getElementById("sp-btn");
let bpBtn = document.getElementById("bp-btn");
let pd = document.getElementById("pd")

function sbFunc(e) {
    e.preventDefault(); // stop the jump

    projects = smallProjects;
    currentProjectIndex = 0; 
    displayProject(currentProjectIndex);

    spBtn.style.background = 'linear-gradient(135deg, #00d4ff, #0099ff)';
    spBtn.style.color = '#fff';

    bpBtn.style.background = 'transparent';
    bpBtn.style.color = '#00d4ff';
    bpBtn.style.border = '1px solid #00d4ff';
}

function bpFunc(e) {
    e.preventDefault(); // stop the jump

    projects = bigProjects;
    currentProjectIndex = 0; 
    displayProject(currentProjectIndex);

    bpBtn.style.background = 'linear-gradient(135deg, #00d4ff, #0099ff)';
    bpBtn.style.color = '#fff';

    spBtn.style.background = 'transparent';
    spBtn.style.color = '#00d4ff';
    spBtn.style.border = '1px solid #00d4ff';
}


// -----------------------------------------------------

let currentProjectIndex = 0;

function displayProject(index) {
    const project = projects[index];
    document.getElementById("project-image").src = project.image;
    document.getElementById('project-image').style.width = '750px';
    document.getElementById('project-image').style.height = '350px';
    document.getElementById('project-image').style.objectFit = 'cover';
    document.getElementById("project-name").innerText = project.name;
    document.getElementById("project-description").innerText = project.description;
    document.getElementById("languages-used").innerText = project.languages;
    document.getElementById("demo-link").href = project.demoLink;
    document.getElementById("github-link").href = project.githubLink;

    document.getElementById("project-index").innerText = `${index + 1}/${projects.length}`;

    document.getElementById("prev-project").disabled = index === 0;
    document.getElementById("next-project").disabled = index === projects.length - 1;
}

document.getElementById("prev-project").addEventListener("click", () => {
    if (currentProjectIndex > 0) {
        currentProjectIndex--;
        displayProject(currentProjectIndex);
    }
});

document.getElementById("next-project").addEventListener("click", () => {
    if (currentProjectIndex < projects.length - 1) {
        currentProjectIndex++;
        displayProject(currentProjectIndex);
    }
});

displayProject(currentProjectIndex);

document.addEventListener("DOMContentLoaded", function() {
    const smoothScroll = (target, duration) => {
        const targetSection = document.querySelector(target);
        if (!targetSection) return;
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        const ease = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
    };

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target, 1000);
        });
    });

    const whoAmIButton = document.getElementById('button');
    whoAmIButton.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        smoothScroll(target, 1000);
    });

    const otherListItems = document.querySelectorAll('.other-list-items a');
    otherListItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target, 1000);
        });
    });
});

function toggleMobileNav() {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.style.display = (mobileNav.style.display === "none" || mobileNav.style.display === "") ? "flex" : "none";
}

window.toggleMobileNav = toggleMobileNav;

// let app = document.getElementById('app');
// app.style.display = 'none';