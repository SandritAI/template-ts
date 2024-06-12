class Clock {
    private currentTime: Date;
    private editMode: number = 0;
    private offset: number;
    private lastUpdateTime: number;

    constructor(private clockElementId: string, private clockIndex: number, offset: number) {
        this.currentTime = new Date();
        this.offset = offset;
        this.lastUpdateTime = new Date().getTime();
        this.updateClock();
        setInterval(() => this.updateRealTime(), 1000);
    }

    private padLeft(value: number, length: number): string {
        let strValue = value.toString();
        while (strValue.length < length) {
            strValue = '0' + strValue;
        }
        return strValue;
    }

    private updateClock(): void {
        const clockElement = document.getElementById(this.clockElementId);
        if (clockElement) {
            const localTime = new Date(this.currentTime.getTime() + this.offset * 3600000);
            const hours = this.padLeft(localTime.getHours(), 2);
            const minutes = this.padLeft(localTime.getMinutes(), 2);
            const seconds = this.padLeft(localTime.getSeconds(), 2);
            clockElement.textContent = `${hours}:${minutes}:${seconds}`;
        }
    }

    private updateRealTime(): void {
        const now = new Date().getTime();
        const elapsed = now - this.lastUpdateTime;
        this.lastUpdateTime = now;

        if (this.editMode === 0) {
            this.currentTime = new Date(this.currentTime.getTime() + elapsed);
        } else {
            this.currentTime.setSeconds(this.currentTime.getSeconds() + Math.floor(elapsed / 1000));
        }
        this.updateClock();
    }

    public toggleMode(): void {
        this.editMode = (this.editMode + 1) % 3;
        const modeButton = document.getElementById(`mode-${this.clockIndex + 1}`);
        if (modeButton) {
            if (this.editMode === 0) {
                modeButton.textContent = 'Mode: View';
            } else if (this.editMode === 1) {
                modeButton.textContent = 'Mode: Edit Hours';
            } else if (this.editMode === 2) {
                modeButton.textContent = 'Mode: Edit Minutes';
            }
        }
    }

    public increaseTime(): void {
        if (this.editMode === 1) {
            this.currentTime.setHours(this.currentTime.getHours() + 1);
        } else if (this.editMode === 2) {
            this.currentTime.setMinutes(this.currentTime.getMinutes() + 1);
        }
        this.updateClock();
    }

    public resetTime(): void {
        this.currentTime = new Date();
        this.updateClock();
    }
}

export default Clock;
