chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "f.html";
  chrome.tabs.create({ url: newURL });
});