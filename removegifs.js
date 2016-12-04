// Copyright (c) 2016 Andrew Hogue. All rights reserved.

var allGifs = document.querySelectorAll('img[src*=".gif"]');
for (var ii = 0; ii < allGifs.length; ii++) {
  allGifs[ii].src = '';
}

var elementNames = ['div', 'body', 'td', 'span'];
var allBackgroundURLs = new Array();
elementNames.forEach( function(tagName) {
    var tags = document.getElementsByTagName(tagName);
    var numTags = tags.length;
    for (var i = 0; i < numTags; i++) {
      tag = tags[i];
      if (tag.style.background.match('url')) {
        tag.style.background = '';
      }
    }
  });