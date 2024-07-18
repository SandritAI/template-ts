import './index.css';

// Model
class Model {
    private currentTime: Date;
    private editMode: number = 0;
    private offset: number;
    private lastUpdateTime: number;
    private lightOn: boolean = false;
    private editOffset: number = 0;

    constructor(offset: number = 0) {
        this.offset = offset * 3600000; // Convert hours to milliseconds
        this.currentTime = new Date();
        this.lastUpdateTime = Date.now();
        setInterval(() => this.updateRealTime(), 1000);
    }

    getTime(): Date {
        const now = Date.now();
        const timeElapsed = now - this.lastUpdateTime;
        return new Date(this.currentTime.getTime() + this.offset + this.editOffset + timeElapsed);
    }

    toggleMode(): void {
        if (this.editMode !== 0) {
            this.currentTime = this.getTime(); // Apply the editOffset to currentTime
            this.editOffset = 0;
            this.lastUpdateTime = Date.now();
        }
        this.editMode = (this.editMode + 1) % 3;
    }

    increaseTime(): void {
        if (this.editMode === 1) {
            this.editOffset += 3600000; // 1 hour in milliseconds
        } else if (this.editMode === 2) {
            this.editOffset += 60000; // 1 minute in milliseconds
        }
    }

    resetTime(): void {
        const now = new Date();
        this.currentTime = new Date(now.getTime() - this.offset);
        this.editOffset = 0;
        this.lastUpdateTime = Date.now();
    }

    isTimeEditable(): boolean {
        return this.editMode !== 0;
    }

    getEditMode(): number {
        return this.editMode;
    }

    toggleLight(): void {
        this.lightOn = !this.lightOn;
    }

    isLightOn(): boolean {
        return this.lightOn;
    }

    private updateRealTime(): void {
        if (this.editMode === 0) {
            const now = Date.now();
            const elapsed = now - this.lastUpdateTime;
            this.currentTime = new Date(this.currentTime.getTime() + elapsed);
            this.lastUpdateTime = now;
        }
    }
}


// View
class View {
    private timeElements: HTMLElement[] = [];
    private modeButtons: HTMLInputElement[] = [];
    private increaseButtons: HTMLInputElement[] = [];
    private resetButtons: HTMLInputElement[] = [];
    private lightButton: HTMLButtonElement;
    private clocksWrapper: HTMLElement;

    constructor() {
        this.clocksWrapper = document.querySelector('.clocks-wrapper') as HTMLElement;
        this.lightButton = this.createLightButton();
    }

    createClock(clockIndex: number): void {
        const clockContainer = document.createElement('div');
        const clockTitle = document.createElement('div');
        const clock = document.createElement('div');
        const clockFace = document.createElement('div');
        const timeElement = document.createElement('div');
        const buttonGroup = document.createElement('div');
        const modeButtonLabel = document.createElement('label');
        const increaseButtonLabel = document.createElement('label');
        const resetButtonLabel = document.createElement('label');
        const modeButton = document.createElement('input');
        const increaseButton = document.createElement('input');
        const resetButton = document.createElement('input');

        clockContainer.className = 'clock-wrapper';
        clockTitle.className = 'clock-title';
        clock.className = 'clock';
        clockFace.className = 'clock-face';
        timeElement.className = 'clock-time';

        clockTitle.innerText = `Clock ${clockIndex + 1}`;
        clockFace.id = `clock-face-${clockIndex + 1}`;
        timeElement.id = `clock-time-${clockIndex + 1}`;
        modeButton.id = `mode-${clockIndex + 1}`;
        increaseButton.id = `increase-${clockIndex + 1}`;
        resetButton.id = `reset-${clockIndex + 1}`;

        modeButton.type = 'radio';
        increaseButton.type = 'radio';
        resetButton.type = 'radio';
        modeButton.name = `options-${clockIndex + 1}`;
        increaseButton.name = `options-${clockIndex + 1}`;
        resetButton.name = `options-${clockIndex + 1}`;
        modeButton.autocomplete = 'off';
        increaseButton.autocomplete = 'off';
        resetButton.autocomplete = 'off';

        modeButtonLabel.className = 'btn btn-secondary';
        increaseButtonLabel.className = 'btn btn-secondary';
        resetButtonLabel.className = 'btn btn-secondary';

        modeButtonLabel.innerText = 'Mode';
        increaseButtonLabel.innerText = 'Increase';
        resetButtonLabel.innerText = 'Reset';

        modeButtonLabel.appendChild(modeButton);
        increaseButtonLabel.appendChild(increaseButton);
        resetButtonLabel.appendChild(resetButton);

        buttonGroup.className = 'btn-group btn-group-toggle';
        buttonGroup.setAttribute('data-toggle', 'buttons');

        buttonGroup.appendChild(modeButtonLabel);
        buttonGroup.appendChild(increaseButtonLabel);
        buttonGroup.appendChild(resetButtonLabel);

        clock.appendChild(clockFace);
        clock.appendChild(timeElement);
        clockContainer.appendChild(clockTitle);
        clockContainer.appendChild(clock);
        clockContainer.appendChild(buttonGroup);
        this.clocksWrapper.appendChild(clockContainer);

        this.timeElements.push(timeElement);
        this.modeButtons.push(modeButton);
        this.increaseButtons.push(increaseButton);
        this.resetButtons.push(resetButton);
    }

    createLightButton(): HTMLButtonElement {
        const lightButton = document.createElement('button');
        lightButton.id = 'light';
        lightButton.innerText = 'Light';
        lightButton.className = 'btn btn-secondary'; // Change to btn-secondary
        document.body.appendChild(lightButton);
        return lightButton;
    }

    updateTime(times: Date[]): void {
        times.forEach((time, index) => {
            this.timeElements[index].innerText = time.toLocaleTimeString();
        });
    }

    setMode(clockIndex: number, mode: number): void {
        const modes = ['Mode: View', 'Mode: Edit Hours', 'Mode: Edit Minutes'];
        // Update the button labels
        const buttonLabels = this.clocksWrapper.querySelectorAll(`#clock-time-${clockIndex + 1} + .btn-group .btn`);
        buttonLabels.forEach((label, index) => {
            label.classList.toggle('active', index === mode);
        });
    }

    onModeButtonClick(clockIndex: number, handler: () => void): void {
        this.modeButtons[clockIndex].addEventListener('click', handler);
    }

    onIncreaseButtonClick(clockIndex: number, handler: () => void): void {
        this.increaseButtons[clockIndex].addEventListener('click', handler);
    }

    onResetButtonClick(clockIndex: number, handler: () => void): void {
        this.resetButtons[clockIndex].addEventListener('click', handler);
    }

    onLightButtonClick(handler: () => void): void {
        this.lightButton.addEventListener('click', handler);
    }

    toggleLight(isLightOn: boolean): void {
        if (isLightOn) {
            document.body.classList.add('light-on');
        } else {
            document.body.classList.remove('light-on');
        }
    }
}



// Controller
class Controller {
    private models: Model[];
    private view: View;

    constructor(models: Model[], view: View) {
        this.models = models;
        this.view = view;

        this.models.forEach((model, index) => {
            this.view.createClock(index);
            this.view.onModeButtonClick(index, () => this.handleModeButtonClick(index));
            this.view.onIncreaseButtonClick(index, () => this.handleIncreaseButtonClick(index));
            this.view.onResetButtonClick(index, () => this.handleResetButtonClick(index));
        });
        this.view.onLightButtonClick(this.handleLightButtonClick.bind(this));

        setInterval(() => this.updateView(), 1000);
    }

    handleModeButtonClick(index: number): void {
        this.models[index].toggleMode();
        this.updateView();
    }

    handleIncreaseButtonClick(index: number): void {
        this.models[index].increaseTime();
        this.updateView();
    }

    handleResetButtonClick(index: number): void {
        this.models[index].resetTime();
        this.updateView();
    }

    handleLightButtonClick(): void {
        this.models.forEach(model => model.toggleLight());
        this.updateView();
    }

    updateView(): void {
        const times = this.models.map(model => model.getTime());
        this.view.updateTime(times);
        this.models.forEach((model, index) => this.view.setMode(index, model.getEditMode()));
        this.view.toggleLight(this.models[0].isLightOn()); // Assuming all models share the same light state
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    const models = [
        new Model(0),
        new Model(1),
        new Model(2)
    ];
    const view = new View();
    new Controller(models, view);
});
