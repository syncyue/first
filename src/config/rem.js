// 计算字体大小自适应

// (function(){
//     // 计算字体大小自适应
//     function resetSize(){
//         var baseFontsize = 100; //100px 相当于1rem
//         var designWidth = 750 //设计稿宽度
//         var screenWidth = window.innerWidth;
//         var currentWidth = (screenWidth/designWidth)*baseFontsize;
//         document.querySelector('html').style.fontSize = currentWidth + 'px'


//     }
//     // 监听浏览器发生改变事件
//     window.onresize = function(){
//         resetSize();
//     }
//     //为文档添加监听事件
//     document.addEventListener('DOMcontentLoaded',resetSize);




// })()
(function(){
    // 计算字体大小字体的自适应
    function resetFontsize(){
        // 获取屏幕的宽度;
        var screenWidth = window.innerWidth;
        var resetSize = 100;
        // 设计稿的宽度；
        var designWidth = 750;
        var changeFontSize = (screenWidth/designWidth)*resetSize;
        document.querySelector('html').style.fontSize = changeFontSize + 'px';
    }

    // 什么时候实行,当屏幕发生变化的时候

    window.onresize = function(){
        // 
        resetFontsize()

    }
    document.addEventListener('DOMcontentLoaded',resetFontsize);

}())