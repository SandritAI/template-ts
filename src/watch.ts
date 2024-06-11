// watch.ts

function padLeft(value: number, length: number): string {
    let strValue = value.toString();
    while (strValue.length < length) {
        strValue = '0' + strValue;
    }
    return strValue;
}

function updateClock(): void {
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        const now = new Date();
        const hours = padLeft(now.getHours(), 2);
        const minutes = padLeft(now.getMinutes(), 2);
        const seconds = padLeft(now.getSeconds(), 2);
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

// Exposez les fonctions nécessaires
export { updateClock };

// Met à jour l'horloge chaque seconde
setInterval(updateClock, 1000);
