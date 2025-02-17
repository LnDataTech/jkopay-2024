/*單人版*/
document.addEventListener('DOMContentLoaded', function () {
    const peopleHoverIcon = document.querySelector('.peopleHoverIcon');
    const quoteText = document.querySelector('.quoteText');
    const quoteAuthor = document.querySelector('.quoteAuthor');

    // 當滑鼠滑過色塊時
    peopleHoverIcon.addEventListener('mouseenter', function () {
        quoteText.innerHTML = '（躺平人生似乎也是個好選擇...）';
        quoteAuthor.innerHTML = '悄悄話:';
    });

    // 當滑鼠移開色塊時
    peopleHoverIcon.addEventListener('mouseleave', function () {
        quoteText.innerHTML = '當主管後才發現什麼都要管，反而更常加班!';
        quoteAuthor.innerHTML = 'Kevin, LnData 行銷經理';
    });
});

/*雙人版*/
document.addEventListener('DOMContentLoaded', function () {
    const hoverIcons = document.querySelectorAll('.peopleHoverIcon2');

    hoverIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function () {
            const quoteText = document.querySelector(`#quoteText${icon.alt}`);
            const contentBox = icon.closest('.flex_row1').querySelector('.content_box8');
            const quoteAuthor = icon.closest('.flex_row1').querySelector('.quoteAuthor');
            if (quoteText) {
                if (icon.id === 'monica') {
                    quoteText.innerHTML = '也有熱愛公司跟工作，每年假期都用不完的同事存在呢！';
                    quoteAuthor.innerHTML = '悄悄話:';
                    contentBox.style.setProperty('--src', `url(../assets/theme1_Rectangle.png)`);
                } else if (icon.id === 'david') {
                    quoteText.innerHTML = '你知道嗎? LnData有每個月兩天自由的遠距工作日！';
                    quoteAuthor.innerHTML = '悄悄話:';
                }
            }
        });

        icon.addEventListener('mouseleave', function () {
            const quoteText = document.querySelector(`#quoteText${icon.alt}`);
            const contentBox = icon.closest('.flex_row1').querySelector('.content_box8');
            const quoteAuthor = icon.closest('.flex_row1').querySelector('.quoteAuthor');
            if (quoteText) {
                if (icon.id === 'monica') {
                    quoteText.innerHTML = '勞基法的假實在太少了，以NUEIP來說，會鼓勵員工去休息、充電。除了圖表中的特殊假，不補班、自主連假、週五提早下班、全薪病假等也都是選項。';
                    contentBox.style.setProperty('--src', `url(../assets/theme1_Rectangle2.png)`);
                    quoteAuthor.innerHTML = 'Monica, NUEIP HR';
                } else if (icon.id === 'david') {
                    quoteText.innerHTML = '在數據公司上班，應該放一個「數據淨空假」！';
                    quoteAuthor.innerHTML = 'David, LnData 數據科學家';
                }
            }
        });
    });
});
