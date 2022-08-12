// ==UserScript==
// @name         "He/She" to "They"
// @namespace    https://ninjasmosa.com
// @version      0.1
// @description  Turns any string that says "he/she" into "they". For the sake of gender inlcusivity.
// @author       ninjasmosa
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.body.innerHTML = document.body.innerHTML.replace(/he or she is/g, 'they are');
    document.body.innerHTML = document.body.innerHTML.replace(/he\/she is/g, 'they are');
    document.body.innerHTML = document.body.innerHTML.replace(/his or her/g, 'their');
    document.body.innerHTML = document.body.innerHTML.replace(/his\/her/g, 'their');
    document.body.innerHTML = document.body.innerHTML.replace(/he or she/g, 'they');
    document.body.innerHTML = document.body.innerHTML.replace(/he\/she/g, 'they');
})();
