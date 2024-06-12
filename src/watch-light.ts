class LightManager {
    private isLightOn: boolean = false;

    public toggleLight(): void {
        const body = document.body;
        this.isLightOn = !this.isLightOn;
        if (this.isLightOn) {
            body.classList.add('light-on');
        } else {
            body.classList.remove('light-on');
        }
    }
}

export default LightManager;

