function toggleFeedback(button) {
    const employeeFeedbackBox = button.nextElementSibling; // 將變數名稱改為 employeeFeedbackBox

    if (employeeFeedbackBox.style.display === "none" || employeeFeedbackBox.style.display === "") {
        employeeFeedbackBox.style.display = "grid";  // 顯示內容


        // 加入事件監聽器，點擊 employeeFeedbackBox 時隱藏它並顯示按鈕
        employeeFeedbackBox.addEventListener('click', function hideFeedbackBox() {
            employeeFeedbackBox.style.display = "grid";  // 隱藏內容
            button.style.display = "block";               // 顯示按鈕
            
            // 移除事件監聽器，避免多次重複綁定
            employeeFeedbackBox.removeEventListener('click', hideFeedbackBox);
        });
    } else {
        employeeFeedbackBox.style.display = "grid";      // 隱藏內容
        button.style.display = "block";                   // 顯示按鈕
    }
}

// 設置事件監聽器，當點擊 content_box4 時觸發 toggleFeedback 函數
document.querySelector('.content_box4').addEventListener('click', function() {
    toggleFeedback(this);
});
