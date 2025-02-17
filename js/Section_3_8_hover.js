const testimonialData = {
    'HoverIcon1': {
        imgSrc: '../assets/theme3_Rectangle.png',
        content: `
            <div class="testimonialContent1">
                <p class="testimonialAuthor1">Monica, NUEIP HR</p>
                <p class="testimonialQuote1">勞基法的假實在太少了，以NUEIP來說，會鼓勵員工去休息、充電。除了圖表中的特殊假，不補班、自主連假、週五提早下班、全薪病假等也都是選項。
                </p>
            </div>
        `
    },
    'HoverIcon2': {
        imgSrc: '../assets/theme3_Rectangle1.png',
        content: `
            <div class="testimonialContent1">
                <p class="testimonialAuthor1">David, LnData 數據科學家</p>
                <p class="testimonialQuote1">在數據公司上班，應該放一個「數據淨空假」！</p>
            </div>
        `
    }
};

// 取得 testimonialCard1 和 testimonialContent1 元素
const testimonialCard = document.getElementById('testimonialCard1');
const testimonialContent = document.getElementById('testimonialContent1');

// 取得 HoverIcon1 和 HoverIcon2 元素
const hoverIcons = document.querySelectorAll('.colorAccents img');

// 為每個 hover icon 註冊事件監聽器
hoverIcons.forEach(icon => {
    icon.addEventListener('mouseenter', (event) => {
        const iconId = event.target.id;
        console.log(`Hovering over: ${iconId}`); // 日誌輸出
        if (testimonialData[iconId]) {
            console.log('Data found for:', iconId); // 日誌輸出
            testimonialCard.style.setProperty('--src', `url(${testimonialData[iconId].imgSrc})`);
            testimonialCard.innerHTML = testimonialData[iconId].content;
            testimonialCard.style.opacity = '100%' // 顯示 testimonialCard1
            testimonialContent.style.margin = '85px 12px 40px 29px'
        }
    });

    icon.addEventListener('mouseleave', () => {
        testimonialCard.style.opacity = '0'; // 滑鼠離開時隱藏 testimonialCard1
        testimonialContent.style.margin = '0'
    });
});
