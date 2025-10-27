//function to resize video-1 depending on window size
function resizeVideoSection1() {
    const video = document.querySelector('.video-section-1');
    const startWidthResizing = 1387; //width in px to start resizing

    if (window.innerWidth < startWidthResizing) {
        // object-position: 0% 98%; we need to recalculate the 0% value
        const aspectRatio = 16 / 9;
        const videoHeight = video.videoHeight;
        const videoWidth = video.videoWidth;
        const windowWidth = window.innerWidth;
        const calculatedVideoWidth = videoHeight * aspectRatio;
        const extraWidth = calculatedVideoWidth - windowWidth;
        const objectPositionX = (extraWidth / calculatedVideoWidth) * 100;;

        video.style.objectPosition = `${objectPositionX}% 98%`;
    } else {
        video.style.objectPosition = `0% 98%`;
    }   
}

//function to resize video-3 depending on window size
function resizeVideoSection3() {
    const video = document.querySelector('.video-section-3');
    const startWidthResizing = 1453; //width in px to start resizing
    if (window.innerWidth < startWidthResizing) {
        // object-position: 0% 70%; we need to recalculate the 0% value
        const aspectRatio = 16 / 9;
        const videoHeight = video.videoHeight;
        const videoWidth = video.videoWidth;
        const windowWidth = window.innerWidth;
        const calculatedVideoWidth = videoHeight * aspectRatio;
        const extraWidth = calculatedVideoWidth - windowWidth;
        const objectPositionX = (extraWidth / calculatedVideoWidth) * 100;;
        video.style.objectPosition = `${objectPositionX}% 70%`;
    } else {
        video.style.objectPosition = `0% 70%`;
    }
}

//function to resize video-5 depending on window size
function resizeVideoSection5() {
    const video = document.querySelector('.video-section-5');
    const startWidthResizing = 1387; //width in px to start resizing
    if (window.innerWidth < startWidthResizing) {
        // object-position: 0% 98%; we need to recalculate the 0% value
        const aspectRatio = 16 / 9;
        const videoHeight = video.videoHeight;
        const videoWidth = video.videoWidth;
        const windowWidth = window.innerWidth;
        const calculatedVideoWidth = videoHeight * aspectRatio;
        const extraWidth = calculatedVideoWidth - windowWidth;
        const objectPositionX = (extraWidth / calculatedVideoWidth) * 100;;
        video.style.objectPosition = `${objectPositionX}% 98%`;
    } else {
        video.style.objectPosition = `0% 98%`;
    }
}

//initial resize
resizeVideoSection1();
resizeVideoSection3();
resizeVideoSection5();

//resize on window resize
window.addEventListener('resize', () => {
    resizeVideoSection1();
    resizeVideoSection3();
    resizeVideoSection5();
});