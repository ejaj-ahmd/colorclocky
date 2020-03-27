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

    document.body.style.backgroundColor = color;
    document.getElementById("change").style.color = color;

    setInterval(clocky, 1000);
}

clocky();

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