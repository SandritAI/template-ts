import './index.css';
import { updateAllClocks, toggleMode, increaseTime } from './watch-time';
import { toggleLight } from './watch-light';

// Appelez updateAllClocks pour afficher l'heure immédiatement
updateAllClocks();

// Attacher les événements après le chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    const modeButton = document.getElementById('mode');
    const increaseButton = document.getElementById('increase');
    const lightButton = document.getElementById('light'); // Ajout du bouton light

    if (modeButton) {
        modeButton.addEventListener('click', toggleMode);
    }

    if (increaseButton) {
        increaseButton.addEventListener('click', increaseTime);
    }

    if (lightButton) {
        lightButton.addEventListener('click', toggleLight); // Ajout de l'événement pour le bouton light
    }
});
