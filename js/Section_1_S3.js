function toggleQA(element) {
    const content = element.nextElementSibling; // 找到對應的回答內容
    const icon = element.querySelector('.toggleIcon');

    // 切換回答區塊的顯示與隱藏
    if (content.style.display === "none" || !content.style.display) {
        content.style.display = "block"; // 顯示回答內容
        icon.src = './assets/50b1bb72ac04494fffd876af7eab304f.svg'; // 切換為關閉按鈕圖示
        icon.alt = "關閉";
    } else {
        content.style.display = "none"; // 隱藏回答內容
        icon.src = './assets/8eba33ff7cb7be938a026eacb0e5354a.svg'; // 切換為開啟按鈕圖示
        icon.alt = "開啟";
    }
}
