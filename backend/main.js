import { drawDeathCircles } from "./getMap.js";

const infernoSrc = "./../assets/maps/de_inferno.png";
const cacheSrc = "./../assets/maps/de_cache.png";
const mirageSrc = "./../assets/maps/de_mirage.png";

//document
//  .getElementById("cache-button")
//  .addEventListener("click", changeMap("de_cache"), true);
//document
//  .getElementById("inferno-button")
//  .addEventListener("click", changeMap("de_inferno"), true);
document
  .getElementById("mirage-button")
  .addEventListener("click", changeMap("de_mirage"), true);

function changeMap(map) {
  document.getElementById("left-mapcard").style.backgroundImage =
    "url('./../assets/maps/" + map + ".png')";
  drawDeathCircles(map);
}
