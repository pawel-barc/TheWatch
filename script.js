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
