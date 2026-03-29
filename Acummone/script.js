/**
 * Accumone Tech Pvt Ltd - Core Logic
 */

// 1. Centralized Data for Departments
// Add the "pdf" property to each object in your existing script.js array
const departmentData = [
    {
        id: 1,
        name: "Software Engineering",
        focus: "Building the backbone of modern digital applications.",
        courses: ["Full-Stack Web Development", "Mobile App Architecture"],
        pdf: "pdfs/software_eng.pdf"
    },
    {
        id: 2,
        name: "AI & Data Science",
        focus: "Harnessing data for automated decision-making.",
        courses: ["Machine Learning Ops", "Applied Data Analytics"],
        pdf: "pdfs/ai_datascience.pdf"
    },
    {
        id: 3,
        name: "Cybersecurity & Ethical Hacking",
        focus: "Protecting digital assets from evolving threats.",
        courses: ["Network Security", "Certified Ethical Hacking"],
        pdf: "pdfs/cybersecurity.pdf"
    },
    {
        id: 4,
        name: "Cloud Computing & DevOps",
        focus: "Managing scalable infrastructure and deployment.",
        courses: ["Cloud Architecture", "Kubernetes & Docker"],
        pdf: "pdfs/cloud_devops.pdf"
    },
    {
        id: 5,
        name: "Emerging Technologies",
        focus: "Exploring the frontiers of the next technological wave.",
        courses: ["Blockchain Development", "IoT Systems"],
        pdf: "pdfs/emerging_tech.pdf"
    },
    {
        id: 6,
        name: "3D Industrial Modeling",
        focus: "Mastering the technical precision for hardware and structural fashion elements.",
        courses: ["Fusion 360 for Fashion Hardware", "Generative Design for Jewelry"],
        pdf: "pdfs/fusion360.pdf"
    },
    {
        id: 7,
        name: "Digital Assets & Web3",
        focus: "Navigating the intersection of blockchain and the virtual luxury market.",
        courses: ["NEFT Strategy & Ownership", "The Metaverse Marketplace (NEFT)"],
        pdf: "pdfs/web3_neft.pdf"
    },
    {
        id: 8,
        name: "Technical Pattern Engineering",
        focus: "Translating creative sketches into industrial-grade manufacturing blueprints.",
        courses: ["AutoCAD for Precision Drafting", "Industrial Grading & Marker Making"],
        pdf: "pdfs/autocad.pdf"
    }
];

// 2. Function to Render Departments (Used in departments.html)
function renderDepartments() {
    const container = document.getElementById('dept-list');
    if (!container) return;

    container.className = "dept-grid"; 
    container.innerHTML = ""; 

    departmentData.forEach((dept, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div style="color: var(--text-dim); font-family: monospace; margin-bottom: 10px;">0${index + 1}</div>
            <h2>${dept.name}</h2>
            <p style="color: var(--text-dim); margin-bottom: 20px;">${dept.focus}</p>
            <div style="margin-bottom: 25px;">
                ${dept.courses.map(course => `<span class="course-tag">${course}</span>`).join('')}
            </div>
            
            <div style="border-top: 1px solid rgba(255,255,255,0.1); pt-4; margin-top: 10px; padding-top: 15px;">
                <p style="font-size: 0.8rem; color: var(--text-dim); mb-2;">For more info, download the curriculum:</p>
                <a href="${dept.pdf}" download class="btn" style="padding: 8px 15px; font-size: 0.8rem; display: inline-flex; align-items: center; gap: 8px;">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                    </svg>
                    Download PDF
                </a>
            </div>
        `;
        container.appendChild(card);
    });
}

// 3. Simple Form Handling (Used in contact.html)
function handleContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic validation check
        const name = form.querySelector('input[type="text"]').value;
        if (name) {
            alert(`Thank you, ${name}! Your inquiry has been sent to Accumone Tech.`);
            form.reset();
        }
    });
}

// Add this to the bottom of your existing Script.js
function handleEnrollment() {
    const enrollForm = document.getElementById('enrollForm');
    if (!enrollForm) return;

    enrollForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('studentName').value;
        const selectedCourse = document.getElementById('courseSelect').options[document.getElementById('courseSelect').selectedIndex].text;

        // Visual confirmation
        alert(`Congratulations ${name}! \n\nYour application for "${selectedCourse}" has been received. Our admissions team at Accumone Tech will contact you shortly via email.`);
        
        enrollForm.reset();
        window.location.href = "Home.html"; // Redirect back home after success
    });
}

// Update your DOMContentLoaded listener to include this function
document.addEventListener('DOMContentLoaded', () => {
    if (typeof renderDepartments === 'function') renderDepartments();
    if (typeof handleContactForm === 'function') handleContactForm();
    handleEnrollment(); // New function
});

// 4. Initialize everything when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    renderDepartments();
    handleContactForm();
});
