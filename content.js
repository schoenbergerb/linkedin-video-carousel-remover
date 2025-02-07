function removeVideoCarousels() {
    const videoContainers = document.querySelectorAll('.update-components-header--video-carousel');
    videoContainers.forEach(container => {
        const parent = container.closest('div.feed-shared-update-v2');
        if (parent) {
            parent.remove();
            console.log("Removed a LinkedIn video carousel.");
        }
    });
}

// Run initially
removeVideoCarousels();

// Observe changes to remove dynamically loaded content
const observer = new MutationObserver(removeVideoCarousels);
observer.observe(document.body, { childList: true, subtree: true });
