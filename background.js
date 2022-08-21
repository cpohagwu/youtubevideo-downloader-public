console.log("Background running");








chrome.action.onClicked.addListener(buttenClicked);

function buttenClicked(tab) {
    let msg = {
        txt: "hello"
    }

    chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function(tabs) {
        var tab = tabs[0];
        var url = tab.url
        console.log(url);
        if (url.startsWith("https://www.youtube.com")) {
            // this is true
            console.log("Background is good");
            chrome.tabs.sendMessage(tab.id, msg);
        
          } else {
            console.log("Background is not good");
        
          }
      });
      
    
}
