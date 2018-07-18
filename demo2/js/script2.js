var menu = document.getElementById("menu");
var nav = document.getElementsByClassName("nav")[0];
var index = 0;
change();
window.onresize  = change;
function change() {
    var width = document.documentElement.clientWidth;
    var text = document.getElementById("text");
    text.innerHTML = width;

}

menu.onclick = function () {
  if(index == 0){
        nav.style.display = "block";
        index++;
  }else {
      nav.style.display = "none";
      index = 0;
  }
};
