var arr = "";
var color = '';
var line = '';
var canvas = document.getElementById("cav");

for(var i=0 ;i<document.getElementsByClassName("color").length;i++){
    document.getElementsByClassName("color")[i].onclick=function(){
        // color=this.getComputedStyle.background;
        color = window.getComputedStyle(this,false)["background-color"];
    }
}

for(var i=0;i<document.getElementsByClassName("line").length;i++){
    document.getElementsByClassName("line")[i].onclick = function () {
        line = this.innerText;
    }
}

canvas.onmousedown = function (event) {
    var x1 =event .clientX;
    var y1 = event.clientY;
    arr +=x1+","+y1+",";
    console.log("---"+x1,y1+"---");
}
function draw1(e) {
    var x1 = e.clientX-30;
    var y1 = e.clientY-30;
    arr +=x1+","+y1+",";
}
function draw2(e) {
    var x2 = e.clientX;
    var y2 = e.clientY-30;
    arr +=x2+","+y2;
    console.log(arr);
    draw();
}
function draw() {
    arr = arr.split(",");

    var ctx = canvas.getContext("2d");
    ctx.lineWidth = line;
    ctx.beginPath();
    ctx.moveTo(arr[0],arr[1]);
    ctx.lineTo(arr[2],arr[3]);
    ctx.closePath();
    ctx.strokeStyle =color;
    ctx.stroke();
    arr = "";
}