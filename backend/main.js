import { getMapData } from "./getMap.js";

const infernoSrc = "./../assets/maps/de_inferno.png";
const cacheSrc = "./../assets/maps/de_cache.png";
const mirageSrc = "./../assets/maps/de_mirage.png";

document.getElementById("cache-button").addEventListener("click", changeMap('de_cache'), true);
//document.getElementById("inferno-button").addEventListener("click", changeMap('de_inferno'), true);
//document.getElementById("mirage-button").addEventListener("click", changeMap(), true);

function changeMap(map){
    if(map == "de_inferno"){
        document.getElementById("mapImage").src = infernoSrc;
    }else if(map == "de_cache"){
        document.getElementById("left-mapcard").style.backgroundImage = "url('./../assets/maps/de_cache.png')";
        getMapData('de_cache')
    }else{
        document.getElementById("mapImage").src = mirageSrc;
    }
}

function compare(){
    document.getElementById("compare-right-side") = document.getElementById("compare-left-side");
}