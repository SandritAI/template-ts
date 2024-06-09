// Fonction pour ajouter un padding à gauche
function padLeft(value, length) {
    var strValue = value.toString();
    while (strValue.length < length) {
        strValue = '0' + strValue;
    }
    return strValue;
}
function updateClock() {
    var clockElement = document.getElementById('clock');
    if (clockElement) {
        var now = new Date();
        var hours = padLeft(now.getHours(), 2);
        var minutes = padLeft(now.getMinutes(), 2);
        var seconds = padLeft(now.getSeconds(), 2);
        clockElement.textContent = "".concat(hours, ":").concat(minutes, ":").concat(seconds);
    }
}
// Met à jour l'horloge chaque seconde
setInterval(updateClock, 1000);
