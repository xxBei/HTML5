var canvas = document.getElementById("cav");
var ctx = canvas.getContext("2d");

ctx.beginPath();
/**
 * arc(x, y, r, startAngle, endAngle, anticlockwise):
        以(x, y)为圆心，以r为半径，从 startAngle弧度开始到endAngle弧度结束。
        anticlosewise是布尔值，true表示逆时针，false表示顺时针。(默认是顺时针)

 * Math.PI表示180度,Math.PI/2表示90度,2*Math.PI表示360度
 */
ctx.arc(80,80,60,0,Math.PI/2 ,false);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.arc(180,180,60,0,Math.PI,false);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.arc(280,280,60,0,Math.PI*2,false);
ctx.closePath();
ctx.fill();