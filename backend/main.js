import { drawDeathCircles } from "./getMap.js";

const infernoSrc = "./../assets/maps/de_inferno.png";
const cacheSrc = "./../assets/maps/de_cache.png";
const mirageSrc = "./../assets/maps/de_mirage.png";

const leftMapcard = document.getElementById("left-mapcard");

const loading = document.getElementsByClassName("loader");

const cacheButton = document.getElementById("cache-button");
cacheButton.addEventListener("click", async () => {
  console.log("cache");
  debugger;
  leftMapcard.style.backgroundImage = "url('./../assets/maps/de_cache.png')";
  loading.style.display = "inherit";
  await drawDeathCircles("de_cache");
  loading.style.display = "none";
});

const infernoButtondocument = document.getElementById("inferno-button");
infernoButtondocument.addEventListener("click", async () => {
  console.log("inferno");
  leftMapcard.style.backgroundImage = "url('./../assets/maps/de_inferno.png')";
  loading.style.display = "inherit";
  await drawDeathCircles("de_inferno");
  loading.style.display = "none";
});

const mirageButtondocument = document.getElementById("mirage-button");
infernoButtondocument.addEventListener("click", async () => {
  console.log("mirage");
  leftMapcard.style.backgroundImage = "url('./../assets/maps/de_mirage.png')";
  loading.style.display = "inherit";
  await drawDeathCircles("de_mirage");
  loading.style.display = "none";
});
