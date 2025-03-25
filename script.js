// Création de graduation avec 60 unités réparties régulièrement sur le cadran
const markersContainer = document.getElementById("hour-markers-id");
for (let i = 0; i < 60; i++) {
  const marker = document.createElement("div");
  // 4 unités recevrons une classe séparées(chaque 15 minutes)
  marker.classList.add("hour-marker");
  if (i % 15 === 0) {
    marker.classList.add("thick-hour-marker");
  }
  // 12 unités recevrons une classe séparées(chaque 5 minutes)
  if (i % 5 === 0) {
    marker.classList.add("middle-hour-marker");
  }
  // Applique la rotation à chaque unité
  marker.style.transform = `rotate(${i * 6}deg)`;
  markersContainer.appendChild(marker);
}
