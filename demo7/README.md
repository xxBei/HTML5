# canvas画布

> 使用canvas画布，首先需要获取该节点
```
	var canvas = document.getElementById("myCanvas");
```
> 第二步需要声明。
```
	var context = canvas.getContext("2d");
```
## 绘制直线

> **beginPath();**方法用于起始一条路径，或重置当前路径；
> 
> **stroke();**方法用于绘制路径，不进行填充；
> 
> **moveTo(x,y);**把路径移动到画布中的指定点，不创建线条；
> 
> **lineTo(x,y);**添加一个新点，然后在画布中创建从该点到最后指定点的线条；


```
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(300,150);
	ctx.stroke();
```
## 绘制三角形
```
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(20,20);
	ctx.lineTo(20,100);
	ctx.lineTo(70,100);
	ctx.closePath();
	ctx.stroke();
```
## 绘制矩形
> **rect(x,y,width,height);**
```
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");

	ctx.beginPath();
	ctx.lineWidth="6";
	ctx.rect(5,5,290,140);
	ctx.stroke();
```
## 绘制圆形
> **arc(x,y,r,sAngle,eAngle,counterclockwise);**

<table>
	<tr>
		<td>参数</td>
		<td>概述</td>
	</tr>
	<tr>
		<td>x</td>
		<td>圆的中心的 x 坐标</td>
	</tr>
	<tr>
		<td>y</td>
		<td>圆的中心的 y 坐标</td>
	</tr>
	<tr>
		<td>r</td>
		<td>圆的半径</td>
	</tr>
	<tr>
		<td>sAngle</td>
		<td>起始角，以弧度计。（弧的圆形的三点钟位置是 0 度）</td>
	</tr>
	<tr>
		<td>eAngle</td>
		<td>结束角，以弧度计</td>
	</tr>
	<tr>
		<td>counterclockwise</td>
		<td>可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针。</td>
	</tr>
</table>

> **Math.PI**表示180度
> 
> **Math.PI/2**表示90度
> 
> **2xMath.PI**表示360度
```
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.arc(100,75,50,0,2*Math.PI);
	ctx.stroke();
```

## 颜色样式
> **fillStyle**属性设置或返回用于填充绘画的颜色、渐变或模式。
> 
> **strokeStyle**属性设置或返回用于笔触的颜色、渐变或模式。
> 
> **lineWidth**设置或返回当前的线条宽度
> 
> **fill()**填充当前绘图（路径）
> 
> **clearRect()**在给定的矩形内清除指定的像素
