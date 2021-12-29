var a;

function show_hide() {
    if(a == 1) {
        document.getElementById("15form").style.display="none";
        return a=0;
    }else{
        document.getElementById("15form").style.display="block";
        return a=1;
    }
}


var b;

function hide_show() {
    if(b == 1) {
        document.getElementById("24form").style.display="none";
        return b=0;
    }else{
        document.getElementById("24form").style.display="block";
        return b=1;
    }
}