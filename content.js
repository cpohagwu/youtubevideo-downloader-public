console.log("Chrome extention ready");



chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
    if (message.txt === "hello") {
        let url = window.location.href;
        console.log(url);

        const dict_url = {url}; //Pass the Javascript variable to a dictionary
       
        
        // Get the reciever endpoint from Python using fetch:
        fetch("https://0.0.0.0:10000/receiver", 
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
        // Strigify the payload into JSON: Stringify converts a Javascript object or value to JSON
        body: JSON.stringify(dict_url)}).then(res=>{
                if(res.ok){
                    return res.json()
                }else{
                    alert("something is wrong")
                }
            }).then(jsonResponse=>{
                
                // Log the response data in the console
                console.log(jsonResponse)
            } 
            ).catch((err) => console.error(err));
            window.alert("Find your downloaded video here: Download ==> YoutubeVideos");
    }
};
