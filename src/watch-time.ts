let editMode = 0; // 0: non editable, 1: edit hours, 2: edit minutes
let currentTime = new Date();
let lastUpdateTime = currentTime.getTime();

const timeOffsets = [0, 1, 2]; // Définir les décalages horaires pour chaque horloge en heures

function padLeft(value: number, length: number): string {
    let strValue = value.toString();
    while (strValue.length < length) {
        strValue = '0' + strValue;
    }
    return strValue;
}

function updateClock(clockElementId: string, offset: number): void {
    const clockElement = document.getElementById(clockElementId);
    if (clockElement) {
        const localTime = new Date(currentTime.getTime() + offset * 3600000);
        const hours = padLeft(localTime.getHours(), 2);
        const minutes = padLeft(localTime.getMinutes(), 2);
        const seconds = padLeft(localTime.getSeconds(), 2);
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
    console.log(`Clock updated (${clockElementId}): ${clockElement?.textContent}`);
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
    updateAllClocks();
    console.log(`Time increased: ${currentTime}`);
}

function updateAllClocks(): void {
    updateClock('clock-time-1', timeOffsets[0]);
    updateClock('clock-time-2', timeOffsets[1]);
    updateClock('clock-time-3', timeOffsets[2]);
}

// Exposez les fonctions nécessaires
export { updateAllClocks, toggleMode, increaseTime };

// Met à jour les horloges chaque seconde
setInterval(() => {
    const now = new Date().getTime();
    const elapsed = now - lastUpdateTime;
    lastUpdateTime = now;

    if (editMode === 0) {
        currentTime = new Date(currentTime.getTime() + elapsed);
    } else {
        currentTime.setSeconds(currentTime.getSeconds() + Math.floor(elapsed / 1000));
    }
    updateAllClocks();
}, 1000);
