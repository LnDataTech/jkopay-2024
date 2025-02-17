function changeText(indicator) {
    const infoTextContainer = document.getElementById('infoText');

    if (indicator === 'inactive') {
        // 當點擊 inactiveIndicator 時，變更為 (2)
        infoTextContainer.innerHTML = '(人資觀點)<br />';
        infoTextContainer.nextElementSibling.innerHTML = '(人資觀點)';
    } else if (indicator === 'Lndata') {
        // 當點擊 inactiveIndicator 時，變更為 (3)
        infoTextContainer.innerHTML = '(Lndata觀點)<br />';
        infoTextContainer.nextElementSibling.innerHTML = '(Lndata觀點)';
    } else if (indicator === 'active') {
        // 當點擊 activeIndicator 時，變更為 (1)
        infoTextContainer.innerHTML = '不敢申請? 太難申請?<br />';
        infoTextContainer.nextElementSibling.innerHTML = '如果加班費申報流程複雜，或是採用實體模式，可能導致員工不敢申報或難以申報，甚至產生怨言';
    } 
}
