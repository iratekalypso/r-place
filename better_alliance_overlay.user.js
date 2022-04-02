// ==UserScript==
// @name         April Fools
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Keep the canvas beautiful!
// @author       /u/irate_kalypso
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/iratekalypso/r-place-2022/raw/main/alliance_overlay.user.js
// @downloadURL  https://github.com/iratekalypso/r-place-2022/raw/main/alliance_overlay.user.js
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://cdn.discordapp.com/attachments/724673162842734662/959681569105248306/overlay_v3.8.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1000px;height: 1000px;";
            console.log(i);
            return i;
        })())

    }, false);

}
