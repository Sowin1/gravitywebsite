function show() {
    document.getElementById('sidebar').classList.toggle('active');
    statusbar.toggle('active');
}

window.addEventListener('scroll', function () {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('active')) {
        sidebar.style.top = window.scrollY + 'px';
    }
});

document.getElementById('popupButton').addEventListener('click', function () {
    document.getElementById('popupOverlay').style.display = 'flex';
});

document.getElementById('closeButton').addEventListener('click', function () {
    document.getElementById('popupOverlay').style.display = 'none';
});
