window.onload = function () {
    var transform1 = document.getElementById("bianxing1");
    var transform2 = document.getElementById("bianxing2");
    var transform3 = document.getElementById("bianxing3");
    var transform4 = document.getElementById("bianxing4");
    var transform5 = document.getElementById("bianxing5");
    var transform6 = document.getElementById("bianxing6");
    var transform7 = document.getElementById("bianxing7");

    transform1.onmouseover = function () {
        transform1.style.transform = "translate(10px,10px)";
    };
    transform1.onmouseout = function () {
        transform1.style.transform = "translate(0,0)";
    };
    transform2.onmouseover = function () {
        transform2.style.transform = "rotate(90deg)";
        transform2.style.backgroundImage = "linear-gradient(to left top,#99FFEB,#FFBFCA)";
        transform2.style.opacity = "0.8";
    };
    transform2.onmouseout = function () {
        transform2.style.transform =     "rotate(0)";
        transform2.style.backgroundImage = "";
        transform2.style.opacity = "1";
    };
    transform3.onmouseover = function () {
        transform3.style.transform = "scale(1.2)";
    };
    transform3.onmouseout = function () {
        transform3.style.transform = "scale(1)";
    };
    transform4.onmouseover = function () {
        transform4.style.transform = "scale(0.8)";
    };
    transform4.onmouseout = function () {
        transform4.style.transform = "scale(1)";
    };
    transform5.onmouseover = function () {
        transform5.style.transform = "skew(0deg,180deg)";
    };
    transform5.onmouseout = function () {
        transform5.style.transform = "skew(0,0)";
    };
    transform6.onmouseover = function () {
        transform6.style.transform = "skew(20deg,0)";
    };
    transform6.onmouseout = function () {
        transform6.style.transform = "skew(0,0)";
    };
    transform7.onmouseover = function () {
        transform7.style.transform = "skew(0,20deg)";
    };
    transform7.onmouseout = function () {
        transform7.style.transform = "skew(0,0)";
    };
};