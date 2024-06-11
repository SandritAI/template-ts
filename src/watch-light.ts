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

// Exporter la fonction pour qu'elle soit accessible depuis index.ts
export { toggleLight };
