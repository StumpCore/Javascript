function meineFkt(){
    var x = document.getElementById("div1");
    var add = 0;
    var id = setInterval(function (){
        if (add >= 500){
            clearInterval(id);
        }
        else{
            x.style.marginLeft = add + 'px';
            add++;
        }
    },5);
}

function meinEvent(){
    document.cookie = "isread=true; expires=Thu, 01 Jan 1970 00.00:00 UTC; path=/";
    window.alert(document.cookie);
}