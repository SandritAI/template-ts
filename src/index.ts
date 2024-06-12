import './index.css';
import Clock from './watch-time';
import LightManager from './watch-light';

class ClockManager {
    private clocks: Clock[] = [];
    private lightManager: LightManager = new LightManager();

    constructor() {
        for (let i = 1; i <= 3; i++) {
            const clock = new Clock(`clock-time-${i}`, i - 1, i - 1);
            this.clocks.push(clock);
            this.bindClockButtons(i, clock);
        }
        this.bindLightButton();
    }

    private bindClockButtons(clockIndex: number, clock: Clock): void {
        const modeButton = document.getElementById(`mode-${clockIndex}`);
        const increaseButton = document.getElementById(`increase-${clockIndex}`);
        const resetButton = document.getElementById(`reset-${clockIndex}`);

        if (modeButton) {
            modeButton.addEventListener('click', () => clock.toggleMode());
        }

        if (increaseButton) {
            increaseButton.addEventListener('click', () => clock.increaseTime());
        }

        if (resetButton) {
            resetButton.addEventListener('click', () => clock.resetTime());
        }
    }

    private bindLightButton(): void {
        const lightButton = document.getElementById('light');
        if (lightButton) {
            lightButton.addEventListener('click', () => this.lightManager.toggleLight());
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ClockManager();
});
