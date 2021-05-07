window.onload=function () {
    let oToolbar = document.querySelector(".toolbar");
    let oNav = document.querySelector(".nav");
    let oMenu = document.querySelector("#myMenu");
    let oMenuUp = document.querySelector(".menu-up");
    let oMenuDown = document.querySelector(".menu-down");
    let oLis = document.querySelectorAll(".section-four>ul>li");
    let oImages=document.querySelectorAll(".section-four>ul>li>img")
    let oH3=document.querySelectorAll(".section-four>ul>li>h3")
    let oTips=document.querySelector(".tips")
    new fullpage('#fullpage', {
        //设置每一频的颜色
        sectionsColor: ["black", "black", "black", "black", "black", "black", "black"],
        verticalCentered: false,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
        menu: "#myMenu",
        onLeave: function (origin, destination, direction) {
            //判断当前是否为第一屏
            if (destination.isFirst) {
                //是第一屏
                oToolbar.style.display = "block";
                oNav.style.top = "42px";
                oMenu.style.display = "none";
            } else {
                //不是第一屏
                oToolbar.style.display = "none";
                oNav.style.top = "0";
                oMenu.style.display = "block";
            }
            if (destination.isLast){
                oTips.style.display="none";
            }else {
                oTips.style.display="block";
            }
        },
    });

    //监听点击事件
    oMenuUp.onclick = function () {
        fullpage_api.moveSectionUp();
    }
    oMenuDown.onclick = function () {
        fullpage_api.moveSectionDown();
    }

    //初始化第四屏动画
    function initSection4Animation() {
        for (let i=0;i<oLis.length;i++){
            let oItem=oLis[i];
            oItem.onmouseenter=function () {
                oLis[0].style.width="25%";
                oLis[1].style.width="25%";
                oLis[2].style.width="25%";
                oImages[i].style.opacity="1";
                oH3[i].style.opacity="0";
                this.style.width="50%";
            }
            oItem.onmouseleave=function () {
                oLis[0].style.width="33%";
                oLis[1].style.width="33%";
                oLis[2].style.width="34%";
                oImages[i].style.opacity="0.4";
                oH3[i].style.opacity="1";

            }
        }
    }
    initSection4Animation();
}