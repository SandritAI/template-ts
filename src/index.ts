import './index.css';
import { updateAllClocks, toggleMode, increaseTime } from './watch-time';
import { toggleLight } from './watch-light';

// Call updateAllClocks to display the time immediately
updateAllClocks();

// Attach events after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const lightButton = document.getElementById('light');

    for (let i = 1; i <= 3; i++) {
        const modeButton = document.getElementById(`mode-${i}`);
        const increaseButton = document.getElementById(`increase-${i}`);

        if (modeButton) {
            modeButton.addEventListener('click', () => toggleMode(i - 1));
        }

        if (increaseButton) {
            increaseButton.addEventListener('click', () => increaseTime(i - 1));
        }
    }

    if (lightButton) {
        lightButton.addEventListener('click', toggleLight);
    }
});
