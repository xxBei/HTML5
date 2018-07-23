var arr = "";
var color = '';
var line = '';
var index = 0;
var b = false;

var line = document.getElementById("line");
var rect = document.getElementById("rect");
var circle = document.getElementById("circle");
var zdy = document.getElementById("zdy");
var canvas = document.getElementById("cav");
var reset = document.getElementById("reset");
var ctx = canvas.getContext("2d");
var width = canvas.offsetWidth;//获取canvas宽
var height = canvas.offsetWidth;//获取canvas高

line.onclick = function () {
  index = 1;
};
rect.onclick = function(){
    index = 2;
};
circle.onclick = function(){
    index = 3;
};
zdy.onclick = function () {
    index = 0;
};
//改变画笔颜色
for(var i=0 ;i<document.getElementsByClassName("color").length;i++){
    document.getElementsByClassName("color")[i].onclick=function(){
        color = window.getComputedStyle(this,false)["background-color"];
    }
}
//改变画笔线条粗细
for(var i=0;i<document.getElementsByClassName("line").length;i++){
    document.getElementsByClassName("line")[i].onclick = function () {
        line = this.innerText;
    }
}

canvas.onmousedown = function (event) {
    var x1 =event .clientX;
    var y1 = event.clientY;
    arr += x1+","+y1+",";
};
canvas.onmouseup = function(event){
    var x2 = event.clientX;
    var y2 = event.clientY-30;
    arr +=x2+","+y2;
    console.log("----"+arr+"----");
    if(index == 1){
        drawLine();
    }else if(index == 2){
        drawRect();
    }else if(index == 3){
        drawCircle();
    }
};

function drawLine() {
    arr = arr.split(",");
    ctx.lineWidth = line;
    ctx.beginPath();
    ctx.moveTo(arr[0],arr[1]);
    ctx.lineTo(arr[2],arr[3]);
    ctx.closePath();
    ctx.strokeStyle =color;
    ctx.stroke();
    arr = "";
}
function drawRect(){
    arr = arr.split(",");
    ctx.lineWidth = line;
    ctx.beginPath();
    ctx.rect(arr[0],arr[1],arr[2]-arr[0],arr[3]-arr[1]);
    ctx.strokeStyle =color;
    ctx.closePath();
    ctx.stroke();
    arr = "";
}
function drawCircle(){
    arr = arr.split(",");
    ctx.lineWidth = line;
    ctx.beginPath();
    ctx.arc(arr[0],arr[1],arr[3]-arr[1],0,2*Math.PI,false);
    ctx.strokeStyle =color;
    ctx.closePath();
    ctx.stroke();
    arr = "";
}
reset.onclick = function () {//清空画板
    ctx.clearRect(0,0,width,height);
};
