# YouTube Downloader Chrome Extension

A lightweight Chrome extension for one-click downloads of YouTube videos and Shorts.

## Overview

This project injects a download button into YouTube pages for easy access. It’s built using:

- **JavaScript:** Implements the Chrome extension to modify YouTube’s UI.
- **Python:** Provides a backend service (via `app.py`) to handle download requests.

## Installation

### Prerequisites

- [Google Chrome](https://www.google.com/chrome/) or any Chromium-based browser.
- [Python 3.x](https://www.python.org/downloads/) (for backend functionality).

### Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/cpohagwu/youtubevideo-downloader-public.git
   ```

2. **Load the Extension:**
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer mode**.
   - Click **Load unpacked** and select the cloned repository folder.

3. **Setup the Python Backend:**

   ```bash
   pip install -r requirements.txt
   python app.py
   ```

## Usage

Visit YouTube, click the download button on any video or Short, and follow the prompts.

## File Structure

- **manifest.json:** Extension configuration and permissions.
- **background.js:** Handles background operations.
- **content.js:** Injects UI elements into YouTube pages.
- **app.py:** Python backend service.
- **requirements.txt:** Python dependency list.

## License

MIT License

## Disclaimer

This tool is provided "as-is." Users must ensure compliance with YouTube's terms of service and applicable laws when downloading content.
