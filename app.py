from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import configparser

from pytube import YouTube
import os
from pathlib import Path

##<strong>#Set up Flaskstrong>:
app = Flask(__name__)
##<strong>#Set up Flask to bypass CORSstrong>:
# Set up Flask to bypass CORS at the front end:
cors = CORS(app)

# Create the receiver API POST endpoint:
@app.route("/receiver", methods=["POST"])
def postME():
    data = request.get_json()
    url = data['url'] # Link to video
    #data = jsonify(data)
    #data = json.loads(data)
    #url = request.form['url']

    yt = YouTube(url)

    #the directory to store the downloads
    downloads_path = str(Path.home() / "Downloads")

    # download the video and store it in a folder called "YoutubeVideos" inside the downloads folder
    yt.streams.get_highest_resolution().download(output_path=os.path.join(downloads_path, 'YoutubeVideos'))


    return {url: "Downloaded"}

# Run the app:
if __name__ == "__main__":
    app.run(host = "0.0.0.0", port = 5000, debug=True)



