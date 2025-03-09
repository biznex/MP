// Particle creation logic
const particlesContainer = document.querySelector('.particles');
const numberOfParticles = 20;

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    const duration = Math.random() * 3 + 2;
    particle.style.animationDuration = duration + 's';
    particlesContainer.appendChild(particle);
}

for (let i = 0; i < numberOfParticles; i++) {
    createParticle();
}
