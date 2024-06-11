let isLightOn = false;

function toggleLight(): void {
    const body = document.body;
    isLightOn = !isLightOn;
    if (isLightOn) {
        body.classList.add('light-on');
    } else {
        body.classList.remove('light-on');
    }
}

export { toggleLight };
