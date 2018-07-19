var cav = document.getElementById("cav");
// 渲染上下文
var ctx = cav.getContext("2d");

/**
 * 绘制一条直线
 * 绘制一条斜线
 *
 * */
//新建一条路径，路径一旦创建成功，图形绘制命令被指向到路径上生成路径
ctx.beginPath();
//把画笔移动到指定的坐标(x, y)。相当于设置路径的起始点坐标。
ctx.moveTo(20,20);
//把画笔移动到指定的坐标(x, y)。相当于设置路径的结束的坐标。
ctx.lineTo(20,100);
//闭合路径之后，图形绘制命令又重新指向到上下文中
ctx.closePath();
//通过线条来绘制图形轮廓
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50,150);
ctx.lineTo(200,300);
ctx.closePath();
ctx.stroke();

