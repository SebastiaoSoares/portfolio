import CONFIG from "../config.js";

function loadConfig() {
    const emailLink = document.getElementById('emailLink');
    const githubLink = document.getElementById('githubLink');
    const linkedInLink = document.getElementById('linkedInLink');

    if (emailLink) {
        emailLink.textContent = CONFIG.CONTACT_EMAIL;
        emailLink.href = `mailto:${CONFIG.CONTACT_EMAIL}`;
    }

    githubLink.href = `https://github.com/${CONFIG.GITHUB_USER}/`;
    linkedInLink.href = `https://www.linkedin.com/in/${CONFIG.LINKEDIN_USER}/`;
}

export default loadConfig;