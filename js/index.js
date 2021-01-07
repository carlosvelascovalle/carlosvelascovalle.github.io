function toggleMenu() {
    const toggleMenu = document.getElementsByClassName('toggle')[0];
    const sidebar = document.getElementsByClassName('sidebar')[0];
    toggleMenu.classList.toggle('active');
    sidebar.classList.toggle('active');
}