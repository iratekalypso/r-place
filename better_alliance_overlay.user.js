// ==UserScript==
// @name         April Fools r/starwars_place Allies
// @namespace    http://tampermonkey.net/
// @version      7.8
// @description  Keep the canvas beautiful!
// @author       /r/AprilKnights, oralekin from osu! /r/osuplace, maintainer /u/irate_kalypso /r/starwars_place
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
            (function () {
                const i = document.createElement("img");
                i.src = "https://cdn.discordapp.com/attachments/959905843556520039/959976429414658128/newCanvas.png";
                i.onload = () => {
                    if (i.width === i.height) {
                        i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1000px;height: 1000px;";
                    } else {
                        i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;";
                    }
                };
                return i;
            })())
    }, false);
}
