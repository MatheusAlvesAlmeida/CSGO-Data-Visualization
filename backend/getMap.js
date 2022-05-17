import {
  CalculatePointToResolutionXCache,
  CalculatePointToResolutionXInferno,
  CalculatePointToResolutionXMirage,
  CalculatePointToResolutionYCache,
  CalculatePointToResolutionYInferno,
  CalculatePointToResolutionYMirage,
} from "./convertCoordinates.js";

export function drawDeathCircles(mapName) {
  const dataSrc = "./../data/" + mapName + "_data_filtered.csv";

  d3.csv(dataSrc, function (data) {
    var sampleSVG = d3
      .select("#left-mapcard")
      .append("svg")
      .attr("width", 450)
      .attr("height", 450);

    if (mapName == "de_cache") {
      for (let index = 0; index < data.length; index++) {
        sampleSVG
          .append("circle")
          .style("stroke", "gray")
          .style("fill", "red")
          .attr("r", 3)
          .attr("cx", CalculatePointToResolutionXCache(data[index].vic_pos_x))
          .attr("cy", CalculatePointToResolutionYCache(data[index].vic_pos_y));
      }
    } else if (mapName == "de_inferno") {
      for (let index = 0; index < data.length; index++) {
        sampleSVG
          .append("circle")
          .style("stroke", "gray")
          .style("fill", "red")
          .attr("r", 3)
          .attr("cx", CalculatePointToResolutionXInferno(data[index].vic_pos_x))
          .attr(
            "cy",
            CalculatePointToResolutionYInferno(data[index].vic_pos_y)
          );
      }
    } else {
      for (let index = 0; index < data.length; index++) {
        sampleSVG
          .append("circle")
          .style("stroke", "gray")
          .style("fill", "red")
          .attr("r", 3)
          .attr("cx", CalculatePointToResolutionXMirage(data[index].vic_pos_x))
          .attr("cy", CalculatePointToResolutionYMirage(data[index].vic_pos_y));
      }
    }
  });
}
