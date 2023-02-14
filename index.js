const zodiac = document.getElementById("zodiac");

function changeBackground() {
    switch (zodiac.value) {
        case "aries":
            document.body.style.backgroundColor = "#effaf6";
            const para = document.createElement("p");
            para.innerText= "Aqua spring";
            document.body.appendChild(para);
            break;

        case "tarus":
            document.body.style.backgroundColor = "#af8536"; //copper
            break;

        case "gemini":
            document.body.style.backgroundColor = "#a0a1a1"; //Edward
            break;

        case "cancer":
            document.body.style.backgroundColor = "#cd2b27"; //persian red
            break;

        case "leo":
            document.body.style.backgroundColor = "#e1ae36"; //Aznac
            break;

        case "virgo":
            document.body.style.backgroundColor = "#01a72b"; //Green haze
            break;

        case "libra":
            document.body.style.backgroundColor = "#0082c6"; //lochmara
            break;

        case "scorpio":
            document.body.style.backgroundColor = "#e45046"; //Cinnabar
            break;

        case "sagittarius":
            document.body.style.backgroundColor = "#920c1a"; //monarch
            break;

        case "aquarius":
            document.body.style.backgroundColor = "#65cbfc"; //malibu
            break;

        case "capricorn":
            document.body.style.backgroundColor = "#3d3635"; //gray brown
            break;

        case "pisces":
            document.body.style.backgroundColor = "#84fff7"; //aquamarine
            break;

        default:
            document.body.style.backgroundColor = "#ffffff";
            break;

    }
}