let lastIndicator = 'active'; // 保存最後一個指示器的狀態

function changeTextOnHover(indicator) {
    const infoTextContainer = document.getElementById('infoText');
    const learnMoreContainer0 = document.querySelector('.learnMoreContainer_span0');
    const learnMoreContainer1 = document.querySelector('.learnMoreContainer_span1');
    const activeIndicator = document.querySelector('.activeIndicator');
    const inactiveIndicators = document.querySelectorAll('.inactiveIndicator');

    if (indicator === 'inactive') {
        infoTextContainer.innerHTML = '公司可以規定員工加班只能換補休嗎?<br />';
        infoTextContainer.nextElementSibling.innerHTML = '法律專家 彭律師：加班原則是以加班費為主，但如果公司有提供補休措施的話，那應該是加班費跟補休二選一，選擇權在勞工身上。';
        learnMoreContainer0.innerHTML = '了解更多：';
        learnMoreContainer1.innerHTML = '<a href="http://c.lndata.com/c/a80780,b1458127,c4218,i0,m101,h" target="_blank">人資好彭友</a>';
        inactiveIndicators[0].style.backgroundColor = '#f0eb47'
        inactiveIndicators[1].style.backgroundColor = '#d9d9d9'
        activeIndicator.style.backgroundColor = '#d9d9d9'; 
        console.log("change inactive")
    } else if (indicator === 'Lndata') {
        infoTextContainer.innerHTML = '加班費的計算與管理：NUEIP餐飲業客戶<br />';
        infoTextContainer.nextElementSibling.innerHTML = '只要員工有加班的事實以及需求，企業就應合法合規給予加班費。透過系統自動加權可大幅降低加班費發放的錯誤率；於此同時，透過系統後台的數據呈現加班時數的即時總合，了解最近加班或是經常加班員工們的工作情形。';
        learnMoreContainer0.innerHTML = '了解更多：';
        learnMoreContainer1.innerHTML = '<a href="http://c.lndata.com/c/a80780,b1458126,c4218,i0,m101,h" target="_blank">如何輕鬆計算與核發加班費？</a>';
        inactiveIndicators[1].style.backgroundColor = '#f0eb47';
        inactiveIndicators[0].style.backgroundColor = '#d9d9d9'
        activeIndicator.style.backgroundColor = '#d9d9d9';
        console.log("change lndata")
    } else if (indicator === 'active') {
        infoTextContainer.innerHTML = '不敢申請? 太難申請?<br />';
        infoTextContainer.nextElementSibling.innerHTML = ' 雖然許多公司可以申請加班，但因申報流程複雜，或是需要過多審核、提前或當面告知、紀錄加班工作項目等，可能導致員工不敢申報或難以申報，甚至產生怨言。可考慮簡化或數位化加班申請流程。';
        learnMoreContainer0.innerHTML = '';
        learnMoreContainer1.innerHTML = '';
        activeIndicator.style.backgroundColor = '#f0eb47'; 
        inactiveIndicators[1].style.backgroundColor = '#d9d9d9';
        inactiveIndicators[0].style.backgroundColor = '#d9d9d9';
        console.log("change active")
    }

    // 將當前指示器保存為最後狀態
    lastIndicator = indicator;
}

function resetText() {
    changeTextOnHover(lastIndicator);
}


