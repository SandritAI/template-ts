let editMode = 0; // 0: non editable, 1: edit hours, 2: edit minutes
let currentTime = new Date();
let lastUpdateTime = currentTime.getTime();

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
        const hours = padLeft(currentTime.getHours(), 2);
        const minutes = padLeft(currentTime.getMinutes(), 2);
        const seconds = padLeft(currentTime.getSeconds(), 2);
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
    console.log(`Clock updated: ${clockElement?.textContent}`);
}

function toggleMode(): void {
    editMode = (editMode + 1) % 3;
    const modeButton = document.getElementById('mode');
    if (modeButton) {
        if (editMode === 0) {
            modeButton.textContent = 'Mode: View';
        } else if (editMode === 1) {
            modeButton.textContent = 'Mode: Edit Hours';
        } else if (editMode === 2) {
            modeButton.textContent = 'Mode: Edit Minutes';
        }
    }
    console.log(`Mode changed: ${editMode}`);
}

function increaseTime(): void {
    if (editMode === 1) {
        currentTime.setHours(currentTime.getHours() + 1);
    } else if (editMode === 2) {
        currentTime.setMinutes(currentTime.getMinutes() + 1);
    }
    updateClock();
    console.log(`Time increased: ${currentTime}`);
}

// Exposez les fonctions nécessaires
export { updateClock, toggleMode, increaseTime };

// Met à jour l'horloge chaque seconde
setInterval(() => {
    const now = new Date().getTime();
    const elapsed = now - lastUpdateTime;
    lastUpdateTime = now;

    if (editMode === 0) {
        currentTime = new Date(currentTime.getTime() + elapsed);
    } else {
        currentTime.setSeconds(currentTime.getSeconds() + Math.floor(elapsed / 1000));
    }
    updateClock();
}, 1000);
