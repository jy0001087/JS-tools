// ==UserScript==
// @name         NovelMode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      *://*shuai*/*mod=viewthread*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    console.log('日日生活日日活');
    $(".jammer").remove();
    $("span[style='display:none']").remove();

    var messages = $(".message");
    console.log(messages);
    document.body.innerHTML="";

    var wholeNoveldiv=document.createElement('div');
    wholeNoveldiv.setAttribute('id','WholeNovel');


    for(var i = 0,len=messages.length;i<len;i++){

        var paragraph=document.createElement('div');
        paragraph.setAttribute('class','paragraph');
        paragraph.innerText=messages[i].innerText;
        wholeNoveldiv.appendChild(paragraph);
        console.log(messages[i].innerText);
    }
    document.body.appendChild(wholeNoveldiv);
})();