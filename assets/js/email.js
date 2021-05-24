function defer(method) {
    if (window.jQuery) {
        method();
    } else {
        setTimeout(function() { defer(method) }, 50);
    }
}

defer(function () {
  $('#email').html("\u003Cn uers=\"znvygb:fpvraprfhcresevraqf@tznvy.pbz\" ery=\"absbyybj\"\u003E Rznvy\u003C/n\u003E".replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);}));
});
