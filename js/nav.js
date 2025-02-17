function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

function toggleMenu() {
    const navbar = document.getElementById('navbar');
    const menuToggleIcon = document.getElementById('menuToggleIcon');

    navbar.classList.toggle('active');

    // 切換按鈕圖示
    if (navbar.classList.contains('active')) {
        menuToggleIcon.src = "./assets/Cancel.svg"; // 切換為關閉圖示
    } else {
        menuToggleIcon.src = "./assets/menu.svg"; // 切換為開啟圖示
    }
}
