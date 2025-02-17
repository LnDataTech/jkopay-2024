document.addEventListener('click', function (event) {
    // 檢查點擊的目標是否是 .feedbackBtn
    if (event.target.matches('.feedbackBtn')) {
        // 找到最近的 .ctaContainer 父元素
        const container = event.target.closest('.ctaContainer');
        // 切換 'open' 類
        const isOpen = container.classList.toggle('open');
        // 找到 .feedbackBox
        const feedbackBox = container.querySelector('.feedbackBox');
        
        // 根據狀態切換 .feedbackBox 的 'open' 類
        if (isOpen) {
            feedbackBox.classList.add('open');
        } else {
            feedbackBox.classList.remove('open');
        }
    }
});

document.addEventListener('change', function (event) {
    if (event.target.matches('.toggleFeedback')) {
        const container = event.target.closest('.ctaContainer');
        const feedbackBox = container.querySelector('.feedbackBox');
        const isChecked = event.target.checked;

        
    }
});


function closeFeedback() {
    const feedbackBtn = document.querySelector('.feedbackBtn');
    feedbackBtn.style.display = 'block'; // 顯示開啟按鈕
}

document.addEventListener('click', function (event1) {
    // 檢查點擊的目標是否在 .storyBackgroundHeader 內
    const storyHeader = event1.target.closest('.storyBackgroundHeader');
    if (storyHeader) {
        // 找到最近的 .qaItem 元素
        const qaItem = storyHeader.closest('.qaItem');
        // 切換 'open' 類
        const isOpen2 = qaItem.classList.toggle('open');
        // 找到 .storyContent
        const storyContent = qaItem.querySelector('.storyContent');

        // 根據狀態切換 .storyContent 的 'open' 類
        if (isOpen2) {
            storyContent.classList.add('open');
        } else {
            storyContent.classList.remove('open');
        }
    }
});