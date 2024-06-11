let editMode = [0, 0, 0]; // Array to track edit mode for each clock
let currentTime = new Date();
let lastUpdateTime = currentTime.getTime();

const timeOffsets = [0, 1, 2]; // Define time offsets for each clock in hours

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

function toggleMode(clockIndex: number): void {
    editMode[clockIndex] = (editMode[clockIndex] + 1) % 3;
    const modeButton = document.getElementById(`mode-${clockIndex + 1}`);
    if (modeButton) {
        if (editMode[clockIndex] === 0) {
            modeButton.textContent = 'Mode: View';
        } else if (editMode[clockIndex] === 1) {
            modeButton.textContent = 'Mode: Edit Hours';
        } else if (editMode[clockIndex] === 2) {
            modeButton.textContent = 'Mode: Edit Minutes';
        }
    }
    console.log(`Mode changed for clock ${clockIndex + 1}: ${editMode[clockIndex]}`);
}

function increaseTime(clockIndex: number): void {
    if (editMode[clockIndex] === 1) {
        currentTime.setHours(currentTime.getHours() + 1);
    } else if (editMode[clockIndex] === 2) {
        currentTime.setMinutes(currentTime.getMinutes() + 1);
    }
    updateAllClocks();
    console.log(`Time increased for clock ${clockIndex + 1}: ${currentTime}`);
}

function updateAllClocks(): void {
    updateClock('clock-time-1', timeOffsets[0]);
    updateClock('clock-time-2', timeOffsets[1]);
    updateClock('clock-time-3', timeOffsets[2]);
}

// Expose necessary functions
export { updateAllClocks, toggleMode, increaseTime };

// Update clocks every second
setInterval(() => {
    const now = new Date().getTime();
    const elapsed = now - lastUpdateTime;
    lastUpdateTime = now;

    if (editMode.every(mode => mode === 0)) {
        currentTime = new Date(currentTime.getTime() + elapsed);
    } else {
        currentTime.setSeconds(currentTime.getSeconds() + Math.floor(elapsed / 1000));
    }
    updateAllClocks();
}, 1000);
