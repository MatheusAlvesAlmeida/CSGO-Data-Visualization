export function getMapData(mapName) {
  if (mapName == "de_cache") {
    d3.csv("./../data/cache_data.csv", function (data) {
      var sampleSVG = d3
        .select("#left-mapcard")
        .append("svg")
        .attr("width", 450)
        .attr("height", 450);

      //for (let index = 0; index < data.length; index++) {
      sampleSVG
        .append("circle")
        .style("stroke", "gray")
        .style("fill", "red")
        .attr("r", 3)
        .attr("cx", CalculatePointToResolutionX(-156.3252))
        .attr("cy", CalculatePointToResolutionY(196.0616));
      //}
    });
  } else if (mapName == "de_mirage") {
  } else {
  }
}

function CalculatePointToResolutionX(x) {
  x += 2031;
  x = Math.floor((x / 3752) * 450);
  console.log(x);
  return x;
}
function CalculatePointToResolutionY(y) {
  y += 2240;
  y = Math.floor((y / 3187) * 450);
  y = y - 450;
  console.log(y);
  return y;
}
