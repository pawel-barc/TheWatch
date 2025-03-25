// Création de graduation avec 60 unités réparties régulièrement sur le cadran
const markersContainer = document.getElementById("hour-markers-id");
for (let i = 0; i < 60; i++) {
  const marker = document.createElement("div");
  // 4 unités recevront une classe séparées(toutes les 15 minutes)
  marker.classList.add("hour-marker");
  if (i % 15 === 0) {
    marker.classList.add("thick-hour-marker");
  }
  // 12 unités recevront une classe séparées(toutes les 5 minutes)
  else if (i % 5 === 0) {
    marker.classList.add("middle-hour-marker");
  }
  // Applique la rotation à chaque unité
  marker.style.transform = `rotate(${i * 6}deg)`;
  markersContainer.appendChild(marker);
}

// Function qui gère la position exacte des aiguilles en fonction de l'heure actuelle,
//  et met à jour leur position pour simuler le mouvement naturel d'une montre
function updateTime() {
  const now = new Date();
  // Récupère l'heure au format 12 heures grâce au modulo
  const totalHours = now.getHours() % 12;
  //Récupère les minutes et les secondes
  const totalMinutes = now.getMinutes();
  const totalSeconds = now.getSeconds();
  // Sélectionne les éléments des aiguilles
  const hourHand = document.getElementById("hour-hand-id");
  const minuteHand = document.getElementById("minute-hand-id");
  const secondHand = document.getElementById("second-hand-id");

  // Calcule les angles des aiguilles pour leur position de départ
  const hoursDeg = totalHours * 30 + totalMinutes / 2; // 30° par heure + 0.5 par minute
  const minutesDeg = totalMinutes * 6 + totalSeconds * 0.1; // 6° par minute + 0.1 par seconde
  const secondDeg = totalSeconds * 6; // 6° par seconde

  // Applique les rotations aux aiguilles
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
}
// Met à jour l'heure chaque seconde
setInterval(updateTime, 1000);
updateTime();

// Fonction qui gère le calendrier pour afficher la date actuelle
function setCurrentDate() {
  const today = new Date();
  const currentDate = today.getDate();

  const dateDisplay = document.getElementById("calendar-complication-id");
  if (dateDisplay) {
    dateDisplay.textContent = currentDate;
  }
}
setCurrentDate();

// Fonction qui gère la phase de la lune
function setMoonPhase() {
  const now = new Date();
  // Une date exemple de la nouvelle lune
  const newMoonDate = new Date(2025, 1, 28, 1, 46);

  // Nombre des jours écoulés depuis la nouvelle lune
  const differenceDays = (now - newMoonDate) / (1000 * 60 * 60 * 24);

  // La durée du cycle lunaire
  const moonCycle = (differenceDays % 29.53) / 29.53;

  // Gestion de l'ombre
  const shadowOffset = (moonCycle - 0.5) * 1.1 + "vw";
  const shadowOpacity = Math.abs(moonCycle - 2) * 2;

  document.documentElement.style.setProperty("--moon-phase", shadowOffset);
  document.documentElement.style.setProperty("--moon-opacity", shadowOpacity);
}
setInterval(setMoonPhase, 1000);
setMoonPhase();
