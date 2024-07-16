import './index.css';

// Modèle (Model)
class Model {
    private currentTime: Date;
    private isLightOnFlag: boolean = false;
    private editMode: number = 0; // 0: Not editable, 1: Edit hours, 2: Edit minutes
    private offset: number;
    private lastUpdateTime: number;

    constructor(offset: number = 0) {
        this.offset = offset;
        this.currentTime = new Date(Date.now() + this.offset * 3600000);
        this.lastUpdateTime = Date.now();
        setInterval(() => this.updateRealTime(), 1000);
    }

    getTime(): Date {
        return new Date(this.currentTime.getTime() + this.offset * 3600000);
    }

    toggleMode(): void {
        this.editMode = (this.editMode + 1) % 3;
    }

    increaseTime(): void {
        if (this.editMode === 1) {
            this.currentTime.setHours(this.currentTime.getHours() + 1);
        } else if (this.editMode === 2) {
            this.currentTime.setMinutes(this.currentTime.getMinutes() + 1);
        }
    }

    isTimeEditable(): boolean {
        return this.editMode !== 0;
    }

    getEditMode(): number {
        return this.editMode;
    }

    toggleLight(): void {
        this.isLightOnFlag = !this.isLightOnFlag;
    }

    isLightOn(): boolean {
        return this.isLightOnFlag;
    }

    private updateRealTime(): void {
        const now = Date.now();
        const elapsed = now - this.lastUpdateTime;
        this.lastUpdateTime = now;

        if (this.editMode === 0) {
            this.currentTime = new Date(this.currentTime.getTime() + elapsed);
        } else {
            this.currentTime.setSeconds(this.currentTime.getSeconds() + Math.floor(elapsed / 1000));
        }
    }
}

// Vue (View)
class View {
    private timeElements: HTMLElement[] = [];
    private modeButtons: HTMLButtonElement[] = [];
    private increaseButtons: HTMLButtonElement[] = [];
    private resetButtons: HTMLButtonElement[] = [];
    private lightButton: HTMLButtonElement;

    constructor() {
        this.lightButton = this.createLightButton();
    }

    createClock(clockIndex: number): void {
        const clockContainer = document.createElement('div');
        const timeElement = document.createElement('div');
        const modeButton = document.createElement('button');
        const increaseButton = document.createElement('button');
        const resetButton = document.createElement('button');

        timeElement.id = `clock-time-${clockIndex}`;
        timeElement.innerText = '00:00:00';
        modeButton.id = `mode-${clockIndex}`;
        modeButton.innerText = 'Mode: View';
        increaseButton.id = `increase-${clockIndex}`;
        increaseButton.innerText = 'Increase';
        resetButton.id = `reset-${clockIndex}`;
        resetButton.innerText = 'Reset';

        clockContainer.appendChild(timeElement);
        clockContainer.appendChild(modeButton);
        clockContainer.appendChild(increaseButton);
        clockContainer.appendChild(resetButton);
        document.body.appendChild(clockContainer);

        this.timeElements.push(timeElement);
        this.modeButtons.push(modeButton);
        this.increaseButtons.push(increaseButton);
        this.resetButtons.push(resetButton);
    }

    createLightButton(): HTMLButtonElement {
        const lightButton = document.createElement('button');
        lightButton.id = 'light';
        lightButton.innerText = 'Light';
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
        this.modeButtons[clockIndex].innerText = modes[mode];
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

// Contrôleur (Controller)
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
        this.models[index] = new Model(index); // Resets the model
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
