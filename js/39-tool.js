// 显示/隐藏
function show(ele) {
    ele.style.display = "block";
}

function hide(ele) {
    ele.style.display = "none";
}

function scroll() {
    // ie9+
    if (window.pageYOffset !== null) {
        // 因为window.pageYOffset默认0，所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset,
        };
    } else if (document.compatMode === "CSS1Compat") {
        // 标准浏览器，判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop,
        };
    }

    // 未声明DTD
    return {
        left: document.body.scrollLeft,
        top: document.body.scrollTop,
    };
}