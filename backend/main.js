import { drawDeathCircles } from "./getMap.js";

const infernoSrc = "./../assets/maps/de_inferno.png";
const cacheSrc = "./../assets/maps/de_cache.png";
const mirageSrc = "./../assets/maps/de_mirage.png";

const leftMapcard = document.getElementById("left-mapcard");

const loading = document.getElementsByClassName("loader");
const externalContainer = document.getElementsByClassName("external-container");

const cacheButton = document.getElementById("cache-button");
cacheButton.addEventListener("click", async () => {
  loading[0].style.display = "inherit";
  externalContainer[0].style.pointerEvents = "none";
  externalContainer[0].style.opacity = "0.5";
  leftMapcard.style.backgroundImage = "url('./../assets/maps/de_cache.png')";
  await draw("de_cache");
});

const infernoButtondocument = document.getElementById("inferno-button");
infernoButtondocument.addEventListener("click", async () => {
  loading[0].style.display = "inherit";
  externalContainer[0].style.pointerEvents = "none";
  externalContainer[0].style.opacity = "0.5";
  leftMapcard.style.backgroundImage = "url('./../assets/maps/de_inferno.png')";
  await draw("de_inferno");
});

const mirageButtondocument = document.getElementById("mirage-button");
mirageButtondocument.addEventListener("click", async () => {
  loading[0].style.display = "inherit";
  externalContainer[0].style.pointerEvents = "none";
  externalContainer[0].style.opacity = "0.5";
  leftMapcard.style.backgroundImage = "url('./../assets/maps/de_mirage.png')";
  await draw("de_mirage");
});

async function draw(map) {
  const filterCT = false;
  const filterTR = false;
  await drawDeathCircles(map, filterCT, filterTR);
}
