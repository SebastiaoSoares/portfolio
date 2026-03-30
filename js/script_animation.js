function startScriptAnimation() {
    const text = "Construindo soluções eficientes e interfaces modernas. Foco no ecossistema JavaScript e Python.";
    const typewriterElement = document.getElementById('typewriter');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typewriterElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, Math.random() * 50 + 30);
        }
    }

    setTimeout(typeWriter, 500);
}

export default startScriptAnimation;