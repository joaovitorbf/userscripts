// ==UserScript==
// @name        Instagram Video Player Controls
// @namespace   jvbf Userscripts
// @match       *://*.instagram.com/*
// @grant       none
// @version     1.0
// @author      jvbf
// @license     MIT
// @description Enable video control on Instagram Web
// ==/UserScript==

var rateLimit = false;

var polling = setInterval(() => {
    var main = document.querySelector("main[role='main']")
    if (main) {
        var observer = new MutationObserver(() => {
            if (!rateLimit) {
                Array.from(document.querySelectorAll("video._ab1d")).forEach((el) => { el.setAttribute("controls", ""); })
                Array.from(document.querySelectorAll("._aato._ab1k._ab1l > div:not(:first-child)")).forEach((el) => { el.remove() })
                console.log("trigger")
                rateLimit = true
                setTimeout(() => { rateLimit = false }, 100)
            }
        })

        observer.observe(main, { childList: true });
        clearInterval(polling)
    }
}, 100)
