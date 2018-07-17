var index = 0;
window.onload = function () {
    var menu = document.getElementById("menu");
    var menu_li = document.getElementById("menu_li");
    menu.onclick = function () {
        if(index==0){
            menu_li.style.display = "block";
            index++;
        }else{
            menu_li.style.display = "none";
            index=0;
        }

    }
};