// Copyright (c) 2016 Andrew Hogue. All rights reserved.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({file: 'removegifs.js'});
  });
