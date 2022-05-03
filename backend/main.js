const infernoSrc = "./../assets/maps/de_inferno.png";
const cacheSrc = "./../assets/maps/de_cache.png";
const mirageSrc = "./../assets/maps/de_mirage.png";

function changeMap(map){
    if(map == "de_inferno"){
        document.getElementById("mapImage").src = infernoSrc;
    }else if(map == "de_cache"){
        document.getElementById("mapImage").src = cacheSrc;
    }else{
        document.getElementById("mapImage").src = mirageSrc;
    }
}