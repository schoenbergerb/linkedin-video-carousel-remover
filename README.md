# LinkedIn Video Blocker

This Chrome extension automatically removes video carousels from the LinkedIn feed, keeping your browsing experience distraction-free.

## Features
✅ Automatically removes LinkedIn video carousels  
✅ Works dynamically as new content loads  
✅ Lightweight and runs in the background

---

## Installation

1. **Download the Extension**
    - Clone this repository or download the ZIP.

2. **Load the Extension in Chrome**
    - Open **Google Chrome** and go to `chrome://extensions/`
    - Enable **Developer Mode** (toggle in the top-right corner).
    - Click **Load unpacked** and select the folder containing the extension.

3. **Done!**
    - The extension will now automatically remove LinkedIn video carousels when you browse LinkedIn.

---

## How It Works

This extension runs a **content script** on LinkedIn that:
- Finds video carousel elements.
- Removes them from the page.
- Uses a **MutationObserver** to block dynamically loaded videos.

---

## Development & Contribution

### Modify the Code
- Open `content.js` and update the selector if needed.

### Testing
- Load the extension as described above.
- Open LinkedIn and check if the video carousels are gone.

### Contributing
Feel free to **fork** the repository and submit a pull request if you find improvements!

---

## Privacy Policy

This extension **does not** collect, store, or transmit any user data. It simply modifies the appearance of LinkedIn pages in your browser.

---

## License

MIT License - Free to use and modify.
