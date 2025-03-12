document.addEventListener("DOMContentLoaded", function () {
    const redCircle = document.querySelector(".redCircle");

    document.querySelector(".heroSection").addEventListener("mousemove", (event) => {
        const { clientX, clientY } = event;
        const { left, top, width, height } = redCircle.getBoundingClientRect();
        
        // 計算與紅圈中心的距離
        const offsetX = (clientX - (left + width / 2)) * -0.1;
        const offsetY = (clientY - (top + height / 2)) * -0.1;

        redCircle.style.setProperty("--mouseX", `${offsetX}px`);
        redCircle.style.setProperty("--mouseY", `${offsetY}px`);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".donutProgress").forEach(circle => {
        let value = circle.getAttribute("data-value");
        let radius = circle.getAttribute("r");
        let circumference = 2 * Math.PI * radius;
        let offset = circumference - (value / 100) * circumference;

        circle.style.strokeDasharray = `${circumference}, ${circumference}`;
        circle.style.strokeDashoffset = offset;
    });
});

window.addEventListener("scroll", function () {
    const section = document.querySelector(".breathingSpaceSection");
    const textContainer = document.querySelector(".textContainer");
  
    // 取得 breathingSpaceSection 距離視窗頂部的位置
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
  
    // 當 section 進入視窗時才開始計算
    if (sectionTop < windowHeight && sectionTop > -section.clientHeight) {
      const scrollProgress = Math.min((windowHeight - sectionTop) / windowHeight, 1);
  
      // 計算 clip-path 的變化
      const minClip = 20;  // 初始 clip-path 百分比
      const maxClip = 15;  // 滾動到最大時 clip-path 百分比
      let newClip = minClip - (scrollProgress * (minClip - maxClip));
      textContainer.style.clipPath = `polygon(${newClip}% 0%, 100% 0%, 100% 100%, 0% 100%)`;
  
      // 計算區塊擴展效果
      let newFlex = 1.1 + (scrollProgress * 0.2);
      textContainer.style.flex = newFlex;
    }
  });

  document.querySelectorAll('.indicator').forEach((indicator, index) => {
    indicator.addEventListener('click', function() {
      // 移除所有指示器的 active class
      document.querySelectorAll('.indicator').forEach(ind => ind.classList.remove('active'));
      // 為當前點擊的指示器新增 active class
      indicator.classList.add('active');
      // 根據 index 計算水平移動距離：index=0顯示第一頁(translateX(0%))，index=1顯示第二頁(translateX(-50%))
      document.querySelector('.chartsWrapper').style.transform = `translateX(-${index * 50}%)`;
    });
  });


  document.querySelectorAll('.indicator3').forEach((indicator, index) => { 
    indicator.addEventListener('click', () => {
      const chartsWrapper3 = document.querySelector('.chartsWrapper.row3');
        // 移除所有指示器的 active 類別
        document.querySelectorAll('.indicator3').forEach(i => i.classList.remove('active'));
        // 為當前點擊的指示器新增 active 類別
        indicator.classList.add('active');

        // 計算移動距離：index = 0 則 translateX(0)，index = 1 則 translateX(-33.33%)，index = 2 則 translateX(-66.66%)
        chartsWrapper3.style.transform = `translateX(-${index * 33.33}%)`;

        // 取得 card-bottom 元素
        const cardBottom = document.querySelector('.card-bottom');

        // 當 index 為 0，新增 "active" 類別，否則移除
        if (index === 0) {
            cardBottom.classList.add('active');
            cardBottom.style.width = '36.3%';
            cardBottom.style.height = '60%';
        } else {
            cardBottom.classList.remove('active');
            cardBottom.style.width = '33%';
            cardBottom.style.transform = 'translateX(-2.7%)';
        }
    });
});

  document.addEventListener("DOMContentLoaded", function () {
    // 三塊式翻頁效果
    document.querySelectorAll('.card-indicatorRow').forEach(row => {
      const indicators = row.querySelectorAll('.card-indicator');
      const chartsWrapper = row.closest('.imageContainer.card')?.querySelector('.chartsWrapper.row3');
      
      if (!chartsWrapper) return;
      
      indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          indicators.forEach(i => i.classList.remove('active'));
          indicator.classList.add('active');
          chartsWrapper.style.transform = `translateX(-${index * 33.33}%)`;
        });
      });
    });
  
    // 二塊式翻頁效果
    document.querySelectorAll('.card-indicatorRow2').forEach(row => {
      const indicators2 = row.querySelectorAll('.indicator2');
      const chartsWrapper2 = row.closest('.imageContainer.card')?.querySelector('.chartsWrapper.row2');
      
      if (!chartsWrapper2) return;
      
      indicators2.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          indicators2.forEach(i => i.classList.remove('active'));
          indicator.classList.add('active');
          chartsWrapper2.style.transform = `translateX(-${index * 50}%)`;
        });
      });
    });
  });


function initializeBarProgress() {
  // 設定長條的寬度
  document.querySelectorAll('.bar').forEach(bar => {
    const value = bar.getAttribute('data-value'); // 例如 "3.3" 等
    bar.style.width = `${value * 2}%`;
  });

  // 設定 hover 事件，顯示對應的統計內容
  const bars = document.querySelectorAll('.bar');
  const statsContents = document.querySelectorAll('.statisticsContent2');
  const badgeImg = document.querySelectorAll('.badge-image');

  // 默認顯示第一個內容
  showContent(0);

  bars.forEach(bar => {
    bar.addEventListener('mouseenter', function () {
      // 清除所有 bar 的 hover 狀態
      bars.forEach(b => b.classList.remove('bar-hover'));
      // 為當前 bar 加上 hover 狀態
      bar.classList.add('bar-hover');

      const index = bar.getAttribute('data-index') - 1;
      showContent(index);
    });
  });

  // 滑鼠離開所有長條時的處理
  const barChart = document.querySelector('.bar-chart');
  barChart.addEventListener('mouseleave', function () {
    // 可以選擇顯示默認內容或隱藏所有內容
    // 這裡選擇保持當前顯示的內容，不做任何操作
  });

  // 顯示特定索引的內容
  function showContent(index) {
    statsContents.forEach((content, idx) => {
      if (idx === index) {
        content.classList.remove('hide');
      } else {
        content.classList.add('hide');
      }
    });
    badgeImg.forEach((content, idx) => {
      if (idx === index) {
        content.classList.remove('hide');
      } else {
        content.classList.add('hide');
      }
    });
  }
}

// 在 DOM 加載完成後執行初始化
document.addEventListener('DOMContentLoaded', initializeBarProgress);


// 第一種sticky效果
  document.addEventListener("DOMContentLoaded", function () {
    // 選取所有右側統計內容區塊
    const statsSections = document.querySelectorAll('.statisticsContent3');
    // 選取所有左側圖表區塊
    const chartWrappers = document.querySelectorAll('.chart-wrapper3');
  
    const observerOptions = {
      root: null,
      threshold: 1.0  // 當至少50%進入視窗時觸發
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        const index = entry.target.getAttribute('data-index');
        if (entry.isIntersecting) {
          // 找到對應的圖表區塊並顯示：opacity = 1, visibility = visible
          chartWrappers.forEach(chart => {
            if (chart.getAttribute('data-index') === index) {
              chart.style.opacity = '1';
              chart.style.visibility = 'visible';
            } else {
              // 可選：隱藏其他不對應的圖表
              chart.style.opacity = '0';
              chart.style.visibility = 'hidden';
            }
          });
          // 同時顯示該統計內容區塊
          entry.target.style.opacity = '1';
        } else {
          // 當離開視窗時，將其隱藏（根據需求也可不隱藏）
          entry.target.style.opacity = '0';
        }
      });
    }, observerOptions);
  
    statsSections.forEach(section => observer.observe(section));
  });


// 第二種sticky效果
  document.addEventListener("DOMContentLoaded", function () {
    // -------------------------------
  // 更新滾動方向判斷
  let lastScrollY = window.pageYOffset;
  let scrollDirection = "down";
  window.addEventListener("scroll", function() {
    const currentScrollY = window.pageYOffset;
    scrollDirection = (currentScrollY > lastScrollY) ? "down" : "up";
    lastScrollY = currentScrollY;
  });
  // -------------------------------
  
  // 取得右側統計內容區塊（若需要避免衝突，可將 class 改為 statisticsContent4）
  const statsSections = document.querySelectorAll('.statisticsContent3');
  // 取得左側的 showout 物件
  const showouts = document.querySelectorAll('.showout');

  const observerOptions = {
    root: null,
    threshold: 0.3  // 當目標至少50%進入視窗時觸發
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const index = entry.target.getAttribute('data-index');
      if (!index) return;  // 若沒有 data-index 則跳過
      
      if (entry.isIntersecting && scrollDirection === "down") {
        // 當右側統計內容進入視窗且向下滾動，顯示對應的 showout 物件
        showouts.forEach(showout => {
          if (showout.getAttribute('data-index') === index) {
            showout.style.opacity = "1";
            showout.style.visibility = "visible";
          }
        });
        // 同時可讓該統計內容顯示（若有需要）
        entry.target.style.opacity = "1";
      } else if (!entry.isIntersecting && scrollDirection === "up") {
        // 當右側統計內容離開視窗且向上滾動，隱藏對應的 showout 物件
        showouts.forEach(showout => {
          if (showout.getAttribute('data-index') === index) {
            showout.style.opacity = "0";
            showout.style.visibility = "hidden";
          }
        });
        entry.target.style.opacity = "0";
      }
    });
  }, observerOptions);

  statsSections.forEach(section => observer.observe(section));
});

//展開中的人物對應內容
function changeContentOnHover(person) {
    const insightQuestion = document.querySelector('.insightQuestion');
    const insightAnswer = document.querySelector('.insightAnswer');

    if (person === 'amy') {
        insightQuestion.textContent = '如何讓遠端工作的同事也能接觸到公司文化?  ';
        insightAnswer.textContent = '從招募流程開始，就可以向求職者說明公司希望這職位所具備的特質，以及公司在乎的價值是什麼，利用新人入職期間，透過訓練、活動等傳遞價值觀，並舉辦更多面對面的活動，讓遠端同事也能感受團隊的氛圍，打破電腦螢幕的隔閡。';
    } else if (person === 'jason') {
        insightQuestion.textContent = '如何有效管理遠距上班員工?';
        insightAnswer.textContent = '身為部門主管，會期望能夠掌握團隊成員的工作進度；若團隊因為某些事情耽擱了進度，主管需要去了解並想辦法幫助他們排除這些問題。投入時間、人力、質化量化成效、是否加班等都會是身為主管需掌握的。';
    }
}

// 設定滑鼠移開時重置內容的函數
function resetContent() {
    const insightQuestion = document.querySelector('.insightQuestion');
    const insightAnswer = document.querySelector('.insightAnswer');

    insightQuestion.textContent = '聽聽他們說';
    insightAnswer.textContent = '移動滑鼠到對應人物上';
}

// 將事件監聽器附加到對應的圖像上
document.getElementById('amy').addEventListener('mouseover', () => changeContentOnHover('amy'));
document.getElementById('jason').addEventListener('mouseover', () => changeContentOnHover('jason'));
document.getElementById('amy').addEventListener('mouseout', resetContent);
document.getElementById('jason').addEventListener('mouseout', resetContent);


let currentCtaImage = './assets/aboutus_team_1.png'

// 關於我們按鈕互動效果
const getStartedBtn = document.getElementById('cta2');
const aboutusImg = document.querySelector('.aboutusImg');
const partnerDescription = document.querySelector('.partnerDescription_box');
const partnerNameWrapper = document.querySelector('.partnerNameWrapper');

getStartedBtn.addEventListener('mouseover', () => {
    partnerNameWrapper.classList.add('hover-effect');
    partnerDescription.classList.add('hover-effect');
    aboutusImg.src = './assets/aboutus_team_2.png'; // 換成想要的圖片路徑
});

getStartedBtn.addEventListener('mouseout', () => {
    partnerNameWrapper.classList.remove('hover-effect');
    partnerDescription.classList.remove('hover-effect');
    aboutusImg.src = currentCtaImage;
});

const getStartedBtn1 = document.getElementById('cta1');
const companyDescription = document.querySelector('.companyDescription_box');
const companyNameWrapper = document.querySelector('.companyNameWrapper');

getStartedBtn1.addEventListener('mouseover', () => {
    companyNameWrapper.classList.add('hover-effect');
    companyDescription.classList.add('hover-effect');
});

getStartedBtn1.addEventListener('mouseout', () => {
    companyNameWrapper.classList.remove('hover-effect');
    companyDescription.classList.remove('hover-effect');
});
