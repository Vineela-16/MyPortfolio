const projects = {
    project1: {
        title: "2048 Game",
        description: "A JavaScript-based 2048 game with interactive UI. Features include tile merging, scoring, and responsive design.",
        link: "#"
    },
    project2: {
        title: "Portfolio Website",
        description: "My personal portfolio website built with HTML, CSS, and JavaScript to showcase my projects and skills.",
        link: "#"
    },
    project3: {
        title: "Complaint Management System",
        description: "A full-stack project using React, Node.js, and MongoDB to manage complaints, users, and agents efficiently.",
        link: "#"
    }
};

function showDetails(projectId) {
    const modal = document.getElementById('project-modal');
    const title = document.getElementById('modal-title');
    const desc = document.getElementById('modal-description');
    const link = document.getElementById('modal-link');

    title.innerText = projects[projectId].title;
    desc.innerText = projects[projectId].description;
    link.href = projects[projectId].link;

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById('project-modal').style.display = "none";
}

// Close modal on click outside
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if(event.target == modal) {
        modal.style.display = "none";
    }
}
