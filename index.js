const zodiac = document.getElementById("zodiac");

function changeBackground() {
    switch (zodiac.value) {
        case "aries":
            document.body.style.backgroundColor = "#d01c1f";
            const para = document.createElement("p");
            para.innerText = "The first sign of the zodiac, Aries is ruled by Mars, the God of War, which is associated with the color Fiery red";
            document.body.appendChild(para);
            break;

        case "taurus":
            document.body.style.backgroundColor = "#2f803a"; //copper
            const para2 = document.createElement("p");
            para2.innerText = "The Taurus color is green, grounded in earth energy. It's no surprise that fresh green nurtures the Taurus spirit and reinforces a connection to nature and growth since this is a sign of absolute progress.";
            document.body.appendChild(para2);
            break;

        case "gemini":
            document.body.style.backgroundColor = "#edd784"; //Edward
            const para3 = document.createElement("p");
            para3.innerText = "The Gemini color is yellow, which lifts your spirit and triggers curiosity and brilliant thoughts. This bright color shines through in a Gemini's exciting, upbeat nature. It mimics the warm sun, and brightens everything around it.";
            document.body.appendChild(para3);
            break;

        case "cancer":
            document.body.style.backgroundColor = "#dadbdd"; //persian red
            const para4 = document.createElement("p");
            para4.innerText = "The Cancer colors are white and silver, creating a sense of calmness as they connect your intuition and give you a clean slate. Like the glistening surface of water or the shining face of the moon, silver and white are colors of purity";
            document.body.appendChild(para4);
            break;

        case "leo":
            document.body.style.backgroundColor = "#dab135"; //Aznac
            const para5 = document.createElement("p");
            para5.innerText = "Leos are ruled by the sun and, like the sun, are often the charismatic center of their environment. By channeling your zodiac sign's colors, you'll allow your inner brilliance to resonate with the world around you.";
            document.body.appendChild(para5);
            break;

        case "virgo":
            document.body.style.backgroundColor = "#3d452c"; //Green haze
            const para6 = document.createElement("p");
            para6.innerText = "The Virgo color is green and brown, keeping a sense of grounding and focus on continuous growth. Brown represents stability while green represents growth in nature strengthening Virgo's life long plan towards self improvement.";
            document.body.appendChild(para6);
            break;

        case "libra":
            document.body.style.backgroundColor = "#e2b4c5"; //lochmara
            const para7 = document.createElement("p");
            para7.innerText = "Libra's colors are pink and blue, which help open the heart and soften one's presence. These pastel hues bring a calming and likable presence to Libra's personality, symbolizing a cool, calming breeze. Light blue increases clarity and balance while pink evokes Libra's sweet and loving nature.";
            document.body.appendChild(para7);
            break;

        case "scorpio":
            document.body.style.backgroundColor = "#1c1c1c"; //Cinnabar
            const para8 = document.createElement("p");
            para8.innerText = "Scarlet colour captures the mystic aura of this sign. Shades of purple, maroon, bottle green and red with a shade of black appeal to you. Pale shades and pastel colours are not for you.";
            document.body.appendChild(para8);
            break;

        case "sagittarius":
            document.body.style.backgroundColor = "#683e6b"; //monarch
            const para9 = document.createElement("p");
            para9.innerText = "The Sagittarius color is purple, the color of spirituality and awareness. Purple pushes one's philosophical mind towards enlightenment and openness. Also a color of abundance, purple encourages Sagitarius' natural luck and positive nature and drives it to continuously broaden its horizons.";
            document.body.appendChild(para9);
            break;

        case "aquarius":
            document.body.style.backgroundColor = "#3a8cc3"; //malibu
            const para10 = document.createElement("p");
            para10.innerText = "Aquarius is an imaginative air sign associated with the sky and the color blue. To take the metaphor further, Terrones says, “the sky is not the limit for Aquarius, and they can often spend a lot of time day dreaming in the clouds.";
            document.body.appendChild(para10);
            break;

        case "capricorn":
            document.body.style.backgroundColor = "#5d524b"; //gray brown
            const para11 = document.createElement("p");
            para11.innerText = "Both neutral hues that are staples of any outfit or home. Brown is associated with seriousness and stability, and gray is known as being neutral, indecisive, in between black and white, steady, mature, and a little mysterious.";
            document.body.appendChild(para11);
            break;

        case "pisces":
            document.body.style.backgroundColor = "#a2d093"; //aquamarine
            const para12 = document.createElement("p");
            para12.innerText = "The Pisces color is light green; a perfectly pale green brings about healing and renewal that connects one with their subconscious. As the color of life, light green represents renewal and inspiration, encouraging the healing and rejuvenating energies that Pisces is known for.";
            document.body.appendChild(para12);
            break;

        default:
            document.body.style.backgroundColor = "#ffffff";
            break;

    }
}