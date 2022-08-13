// ==UserScript==
// @name         "He/She" to "They"
// @namespace    https://github.com/ninjasmosa/He-She-to-They
// @version      0.2.2
// @description  Turns any string that says "he/she" into "they". For the sake of gender inclusivity.
// @author       ninjasmosa
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    //she/he to they
    document.body.innerHTML = document.body.innerHTML.replace(/[sS]he or [hH]e is/g, 'they are');
    document.body.innerHTML = document.body.innerHTML.replace(/[sS]he\/[hH]e is/g, 'they are');
    document.body.innerHTML = document.body.innerHTML.replace(/[sS]he or [hH]e/g, 'they');
    document.body.innerHTML = document.body.innerHTML.replace(/[sS]he\/[hH]e/g, 'they');


    //her/his to their
    document.body.innerHTML = document.body.innerHTML.replace(/[hH]er's or [hH]is/g, "their's");
    document.body.innerHTML = document.body.innerHTML.replace(/[hH]er's\/[hH]is/g, "their's");
    document.body.innerHTML = document.body.innerHTML.replace(/[hH]er or [hH]is/g, 'their');
    document.body.innerHTML = document.body.innerHTML.replace(/[hH]er\/[hH]is/g, 'their');

    //her/him to them
    document.body.innerHTML = document.body.innerHTML.replace(/[hH]er or [hH]im is/g, 'they are');
    document.body.innerHTML = document.body.innerHTML.replace(/[hH]er\/[hH]im is/g, 'they are');
    document.body.innerHTML = document.body.innerHTML.replace(/[hH]er or [hH]im/g, 'them');
    document.body.innerHTML = document.body.innerHTML.replace(/[hH]er\/[hH]im/g, 'them');

    //his/her to their
    document.body.innerHTML = document.body.innerHTML.replace(/[hH]is or [hH]er's/g, "their's");
    document.body.innerHTML = document.body.innerHTML.replace(/[hH]is\/[hH]er's/g, "their's");
    document.body.innerHTML = document.body.innerHTML.replace(/[hH]is or [hH]er/g, 'their');
    document.body.innerHTML = document.body.innerHTML.replace(/[hH]is\/[hH]er/g, 'their');

    //he/she to they
    document.body.innerHTML = document.body.innerHTML.replace(/[hH]e or [sS]he is/g, 'they are');
    document.body.innerHTML = document.body.innerHTML.replace(/[hH]e\/[sS]he is/g, 'they are');
    document.body.innerHTML = document.body.innerHTML.replace(/[hH]e or [sS]he/g, 'they');
    document.body.innerHTML = document.body.innerHTML.replace(/[hH]e\/[sS]he/g, 'they');

    //him/her to them
    document.body.innerHTML = document.body.innerHTML.replace(/[hH]im or [hH]er is/g, "they are");
    document.body.innerHTML = document.body.innerHTML.replace(/[hH]im\/[hH]er is/g, 'they are');
    document.body.innerHTML = document.body.innerHTML.replace(/[hH]im or [hH]er/g, 'them');
    document.body.innerHTML = document.body.innerHTML.replace(/[hH]im\/[hH]er/g, 'them');
})();