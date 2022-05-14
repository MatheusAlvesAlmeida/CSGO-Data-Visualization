export function getMapData(mapName) {
  if (mapName == "de_cache") {
    d3.csv("./../data/cache_data.csv", function (data) {
      var sampleSVG = d3
        .select("#left-mapcard")
        .append("svg")
        .attr("width", 342)
        .attr("height", 460);

      sampleSVG
        .append("circle")
        .style("stroke", "gray")
        .style("fill", "white")
        .attr("r", 40)
        .attr("cx", function (d, i) {
          return 50 + i * 80;
        })
        .attr("cy", 120);
    });
  } else if (mapName == "de_mirage") {
  } else {
  }
}
