var canvas = document.getElementById("cav");
var ctx = canvas.getContext("2d");


/**
 * 绘制二次贝塞尔曲线
 * quadraticCurveTo(cp1x, cp1y, x, y):
    参数1和2：控制点坐标
    参数3和4：结束点坐标
 * */
ctx.beginPath();
ctx.moveTo(20,20);
var cp1x = 40, cp1y = 100;  //控制点
var x = 200,y = 200;
ctx.quadraticCurveTo(cp1x,cp1y,x,y);
ctx.stroke();

