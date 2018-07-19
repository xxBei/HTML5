var canvas = document.getElementById("cav");
var ctx = canvas.getContext("2d");
var ctx1 = canvas.getContext("2d");
var bodyMove = document.getElementsByName("body")[0];

function move(event){
    var x = event.clientX;
    var y = event.clientY;
    console.log("X轴:"+x+"Y轴:"+y);
}
/**
 * 绘制矩形
 * */

/*
* 绘制一个填充的矩形
* fillRect(x, y, width, height)
* 给图形填充颜色
* fillStyle = "#3b3b3b"
* */
ctx.fillStyle = "#3b3b3b";
ctx.fillRect(20,20,100,100);

/**
* 绘制一个矩形的边框
* strockRect(x, y, width, height)
* */
ctx.strokeRect(180,20,100,100);

/**
 * 清除指定的矩形区域，然后这块区域会变的完全透明。
 * clearRect(x, y, widh, height)
 * */
ctx.fillRect(20,140,250,200);
ctx.clearRect(30,150,230,80);
ctx.clearRect(105,250,80,80);

/**
 * createLinearGradient() 方法创建线性的渐变对象。
 * addColorStop(stop,color) 方法规定 gradient 对象中的颜色和位置。
 *      stop 介于 0.0 与 1.0 之间的值，表示渐变中开始与结束之间的位置。
        color 在结束位置显示的 CSS 颜色值
 */
var grd = ctx1.createLinearGradient(300,150,550,150);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");
ctx1.fillStyle=grd;
ctx1.fillRect(290,140,250,200);








