AOS.init();

const backgrounds = [
    'https://files.catbox.moe/7qmcjs.png', // green bg
    'https://files.catbox.moe/r1xgqc.png', // blue bg
    'https://files.catbox.moe/9b9h82.png' // purple bg
];
let currentIndex = 0;

function switchBackground() {
    currentIndex = (currentIndex + 1) % backgrounds.length;
    document.body.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
}

function openModal(event, linkElement) {
    event.preventDefault();
    const link = linkElement.getAttribute('href');
    document.getElementById('modalInfo').innerText = link;
    document.getElementById('infoModal').style.display = 'block';
    document.getElementById('proceedButton').setAttribute('data-link', link);
    document.body.classList.add('modal-open');
}

function closeModal() {
    const modal = document.getElementById('infoModal');
    modal.querySelector('.modal-content').style.animation = 'slideOut 0.3s forwards';
    modal.style.animation = 'fadeOut 0.3s forwards';

    setTimeout(() => {
        modal.style.display = 'none';
        modal.querySelector('.modal-content').style.animation = '';
        modal.style.animation = '';
        document.body.classList.remove('modal-open');
    }, 300);
}

function proceed() {
    const link = document.getElementById('proceedButton').getAttribute('data-link');
    window.location.href = link;
}

window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target === modal) {
        closeModal();
    }
}
