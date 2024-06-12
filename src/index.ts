import './index.css';
import { updateAllClocks, toggleMode, increaseTime, resetTime } from './watch-time';
import { toggleLight } from './watch-light';

updateAllClocks();

document.addEventListener('DOMContentLoaded', () => {
    const lightButton = document.getElementById('light');

    for (let i = 1; i <= 3; i++) {
        const modeButton = document.getElementById(`mode-${i}`);
        const increaseButton = document.getElementById(`increase-${i}`);
        const resetButton = document.getElementById(`reset-${i}`); // Bouton Reset

        if (modeButton) {
            modeButton.addEventListener('click', () => toggleMode(i - 1));
        }

        if (increaseButton) {
            increaseButton.addEventListener('click', () => increaseTime(i - 1));
        }

        if (resetButton) { 
            resetButton.addEventListener('click', () => resetTime(i - 1));
        }
    }

    if (lightButton) {
        lightButton.addEventListener('click', toggleLight);
    }
});
