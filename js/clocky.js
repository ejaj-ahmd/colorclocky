var d, h, m, s, clock, color, count;

function clocky() {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    if(h <= 9) { h = "0" + h }
    if(m <= 9) { m = "0" + m }
    if(s <= 9) { s = "0" + s }

    color="#"+h+m+s;

    clock = document.getElementById("clock");
    clock.innerHTML = h + ":" + m + ":" + s;

    // document.body.style.backgroundColor = color;
    // document.getElementById("change").style.color = color;
    // document.getElementById("color").style.color = color;
    // document.getElementById("lblColor").style.color = color;
    // secondly();

    setInterval(clocky, 1000);
}

clocky();
secondly();
setInterval(secondly, 1000)

count = 0;

function changeFont() {
    switch (count) {
        case 0:
            clock.style.fontFamily = "'Black Ops One', cursive";
            count += 1;
            break;
        case 1:
            clock.style.fontFamily = "'Orbitron', sans-serif";
            count += 1;
            break;
        case 2:
            clock.style.fontFamily = "'Bungee Inline', cursive";
            count += 1;
            break;
        case 3:
            clock.style.fontFamily = "'Spicy Rice', cursive";
            count += 1;
            break;
        case 4:
            clock.style.fontFamily = "'Shojumaru', cursive";
            count += 1;
            break;
        case 5:
            clock.style.fontFamily = "'Faster One', cursive";
            count += 1;
            break;
        case 6:
            clock.style.fontFamily = "'Bungee Shade', cursive";
            count = 0;
            break;
        default:
            clock.style.fontFamily = "'Bungee Shade', cursive";
            count = 0;
            break;
    }
}

$("select#color").change(function(){
    var colorOption = $(this).children("option:selected").val();
    if (colorOption == "minutely") {
        setInterval(secondly, 60000);
        alert("minutely");
    } else if (colorOption == "hourly") {
        setInterval(secondly, 3600000);
        alert("hourly");
    } else if (colorOption == "daily") {
        setInterval(secondly, 86400000);
        alert("daily");
    } else {
        setInterval(secondly, 1000);
        alert("secondly");
    }    
});

function secondly() {
    document.body.style.backgroundColor = color;
    document.getElementById("change").style.color = color;
    document.getElementById("color").style.color = color;
    document.getElementById("lblColor").style.color = color;
    document.getElementById("check").innerHTML = color;

    // setInterval(secondly, 1000);
}