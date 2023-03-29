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
    $(".jammer").remove();
    $("span[style='display:none']").remove();

    var messages = $(".message");
    var a_nextpage = $("a:contains('下一页')");
    var a_previouspage = $("a:contains('上一页')");
    console.log(a_nextpage);
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
    wholeNoveldiv.append(a_previouspage[0]);
    wholeNoveldiv.append(a_nextpage[0]);
    document.body.appendChild(wholeNoveldiv);

    document.getElementById('WholeNovel').style.font="normal 20px '微软雅黑'";
    document.getElementById('WholeNovel').style.letterSpacing ='2px';
    document.getElementById('WholeNovel').style.lineHeight = '30px';
})();