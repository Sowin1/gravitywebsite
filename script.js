function show() {
    document.getElementById('sidebar').classList.toggle('active');
}


document.getElementById('popupButton').addEventListener('click', function () {
    document.getElementById('popupOverlay').style.display = 'flex';
});

document.getElementById('closeButton').addEventListener('click', function () {
    document.getElementById('popupOverlay').style.display = 'none';
});

console.warn("Si vous inspectez ce site web, il est probable que vous soyez un développeur web. Je suis ouvert à tous les conseils, le lien GitHub du projet : https://github.com/Sowin1/gravitywebsite ");
