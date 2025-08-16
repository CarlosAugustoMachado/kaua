// Efeito de confetes
const jsConfetti = new JSConfetti();

function soltarConfetes() {
    jsConfetti.addConfetti({
        confettiNumber: 300,
        confettiColors: ['#ff7f50', '#ffdd57', '#a1c4fd', '#9de0ad', '#ff987c'],
    });
    jsConfetti.addConfetti({
        emojis: ['🎈', '🎉', '🎁', '🎂'],
        confettiRadius: 30,
        confettiNumber: 20,
    });
}

// Soltar confetes automaticamente quando carregar a página
window.addEventListener('load', () => {
    setTimeout(soltarConfetes, 1000);
});

// Controle da música
const musica = document.getElementById('musica-aniversario');
const botao = document.getElementById('audio-control-btn');

let estaTocando = true;

botao.addEventListener('click', () => {
    if (estaTocando) {
        musica.pause();
        botao.textContent = 'Tocar Música';
    } else {
        musica.play();
        botao.textContent = 'Parar Música';
    }
    estaTocando = !estaTocando;
});

// Efeitos de aparição ao rolar
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aparecer');
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
});

// Observar as memórias
const memorias = document.querySelectorAll('.memoria-item');
memorias.forEach(memoria => {
    observer.observe(memoria);
});

// Observar as mensagens finais
const mensagens = document.querySelectorAll('.mensagem-card');
mensagens.forEach(mensagem => {
    observer.observe(mensagem);
});

// Adicionar um pouco mais de interatividade
document.addEventListener('click', (e) => {
    if (Math.random() > 0.7) { // 30% de chance
        soltarConfetes();
    }
});