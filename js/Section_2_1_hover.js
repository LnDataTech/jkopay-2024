let lastTextState2 = 'active'; // 初始化最後狀態為 'active'

function changeTextOnHover2(state) {
    const infoText2 = document.getElementById('infoText2');
    const learnMoreContainer0 = document.getElementById('learnMoreContainer2');
    const indicators = document.querySelectorAll('.indicatorRow div'); // 取得所有指示器

    if (state === 'inactive') {
        infoText2.innerHTML = '打造DEI文化<br />';
        infoText2.nextElementSibling.innerHTML = '"多元、包容、共融 (DEI) "企業可從招募、教育訓練等渠道，傳遞組織的多元價值；並落實薪資福利對等政策、建立完善績效管理制度；以NUEIP來說，我們致力並鼓勵客戶打造不論性別、族群、年齡，都能表達自我與發揮的團隊。';
        learnMoreContainer0.innerHTML = '';
        learnMoreContainer0.nextElementSibling.innerHTML = '';
        lastTextState2 = 'inactive'; // 更新最後狀態

        // 指示器變色邏輯
        indicators.forEach(indicator => {
            if (indicator.classList.contains('inactiveIndicator')) {
                indicator.style.backgroundColor = '#f0eb47'; // 指示器變色
            } else {
                indicator.style.backgroundColor = ''; // 重置其他指示器顏色
            }
        });
    } else if (state === 'active') {
        infoText2.innerHTML = '天花板還在?<br />';
        infoText2.nextElementSibling.innerHTML = '不過實際上，現在產業薪資差異的情況持續改善，所謂"天花板"也越來越少見。統計數據顯示反應的是特定產業中，不同性別在年資、學歷甚至職位選擇上可能存在差異。或許我們更須從教育開始，跳脫刻板的學業與職涯選擇思維。';
        learnMoreContainer0.innerHTML = '';
        learnMoreContainer0.nextElementSibling.innerHTML = '';
        lastTextState2 = 'active'; // 更新最後狀態

        // 指示器變色邏輯
        indicators.forEach(indicator => {
            if (indicator.classList.contains('activeIndicator')) {
                indicator.style.backgroundColor = '#f0eb47'; // 指示器變色
            } else {
                indicator.style.backgroundColor = ''; // 重置其他指示器顏色
            }
        });
    }
}

function resetText2() {
    // 根據最後的狀態設置內容，而不是重置為初始值
    changeTextOnHover2(lastTextState2);
}