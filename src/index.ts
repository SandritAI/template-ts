import './index.css';
import { updateClock, toggleMode, increaseTime } from './watch';

// Appelez updateClock pour afficher l'heure immédiatement
updateClock();

// Attachez les événements après le chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    const modeButton = document.getElementById('mode');
    const increaseButton = document.getElementById('increase');

    if (modeButton) {
        modeButton.addEventListener('click', toggleMode);
        console.log('Mode button event listener attached');
    }

    if (increaseButton) {
        increaseButton.addEventListener('click', increaseTime);
        console.log('Increase button event listener attached');
    }
});
