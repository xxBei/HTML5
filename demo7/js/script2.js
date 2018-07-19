var canvas = document.getElementById("cav");
var ctx = canvas.getContext("2d");

/**
 * 绘制空心三角形
 * */
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(50,200);
ctx.lineTo(200,200);
ctx.closePath();
//用轮廓绘制
ctx.stroke();
/**
 * 绘制实心三角形
 * */
ctx.beginPath();
ctx.moveTo(300,50);
ctx.lineTo(300,200);
ctx.lineTo(450,200);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(500,50);
ctx.lineTo(500,200);
ctx.lineTo(700,50);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.lineTo(800,50);
ctx.lineTo(1000,50);
ctx.lineTo(1000,200);
ctx.closePath();
ctx.stroke();