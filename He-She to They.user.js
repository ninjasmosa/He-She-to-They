// ==UserScript==
// @name         "He/She" to "They"
// @namespace    https://github.com/ninjasmosa/-He-She-to-They-
// @version      0.2
// @description  Turns any string that says "he/she" into "they". For the sake of gender inclusivity.
// @author       ninjasmosa
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    //she/he to they
    document.body.innerHTML = document.body.innerHTML.replace(/she or he is/g, 'they are');
    document.body.innerHTML = document.body.innerHTML.replace(/she\/he is/g, 'they are');
    document.body.innerHTML = document.body.innerHTML.replace(/she or he/g, 'they');
    document.body.innerHTML = document.body.innerHTML.replace(/she\/he/g, 'they');

    //her/his to their
    document.body.innerHTML = document.body.innerHTML.replace(/is her's or his/g, "is their's");
    document.body.innerHTML = document.body.innerHTML.replace(/is her's\/his/g, "is their's");
    document.body.innerHTML = document.body.innerHTML.replace(/her's or his/g, "their's");
    document.body.innerHTML = document.body.innerHTML.replace(/her's\/his/g, "their's");
    document.body.innerHTML = document.body.innerHTML.replace(/her or his/g, 'their');
    document.body.innerHTML = document.body.innerHTML.replace(/her\/his/g, 'their');

    //her/him to them
    document.body.innerHTML = document.body.innerHTML.replace(/her or him is/g, 'they are');
    document.body.innerHTML = document.body.innerHTML.replace(/her\/him is/g, 'they are');
    document.body.innerHTML = document.body.innerHTML.replace(/her or him/g, 'them');
    document.body.innerHTML = document.body.innerHTML.replace(/her\/him/g, 'them');

    //his/her to their
    document.body.innerHTML = document.body.innerHTML.replace(/is his or her's/g, "is their's");
    document.body.innerHTML = document.body.innerHTML.replace(/is his\/her's/g, "is their's");
    document.body.innerHTML = document.body.innerHTML.replace(/his or her's/g, "their's");
    document.body.innerHTML = document.body.innerHTML.replace(/his\/her's/g, "their's");
    document.body.innerHTML = document.body.innerHTML.replace(/his or her/g, 'their');
    document.body.innerHTML = document.body.innerHTML.replace(/his\/her/g, 'their');

    //he/she to they
    document.body.innerHTML = document.body.innerHTML.replace(/he or she is/g, 'they are');
    document.body.innerHTML = document.body.innerHTML.replace(/he\/she is/g, 'they are');
    document.body.innerHTML = document.body.innerHTML.replace(/he or she/g, 'they');
    document.body.innerHTML = document.body.innerHTML.replace(/he\/she/g, 'they');

    //him/her to them
    document.body.innerHTML = document.body.innerHTML.replace(/him or her is/g, "they are");
    document.body.innerHTML = document.body.innerHTML.replace(/him\/her is/g, 'they are');
    document.body.innerHTML = document.body.innerHTML.replace(/him or her/g, 'them');
    document.body.innerHTML = document.body.innerHTML.replace(/him\/her/g, 'them');
})();
