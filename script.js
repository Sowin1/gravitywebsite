function show() {
    document.getElementById('sidebar').classList.toggle('active');
}


document.getElementById('popupButton').addEventListener('click', function () {
    document.getElementById('popupOverlay').style.display = 'flex';
});

document.getElementById('closeButton').addEventListener('click', function () {
    document.getElementById('popupOverlay').style.display = 'none';
});
