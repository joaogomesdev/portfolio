document.addEventListener('DOMContentLoaded', () => {

    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // =============================================
    // BARRA DE PROGRESSO MANUAL
    // Para alterar a porcentagem, edite o atributo
    // data-progress no card do projeto no HTML.
    // Exemplo: data-progress="75" = 75%
    // =============================================

    const progressEl = document.getElementById('realProgress');
    const progressText = document.getElementById('progressText');
    const buildingCard = document.querySelector('.project-building');

    if (progressEl && buildingCard) {
        const progress = parseFloat(buildingCard.getAttribute('data-progress')) || 0;
        const clampedProgress = Math.min(Math.max(progress, 0), 100);

        // Aplica a largura com uma pequena animação de entrada
        setTimeout(() => {
            progressEl.style.width = clampedProgress + '%';
            if (progressText) {
                progressText.textContent = clampedProgress + '%';
            }
        }, 300);
    }

});