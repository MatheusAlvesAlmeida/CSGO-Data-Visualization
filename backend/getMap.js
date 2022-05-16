export function getMapData(mapName) {
  const dataSrc = "./../data/" + mapName + "_filtered.csv";

  d3.csv(dataSrc, function (data) {
    var sampleSVG = d3
      .select("#left-mapcard")
      .append("svg")
      .attr("width", 450)
      .attr("height", 450);

    for (let index = 0; index < data.length; index++) {
      sampleSVG
        .append("circle")
        .style("stroke", "gray")
        .style("fill", "red")
        .attr("r", 3)
        .attr("cx", CalculatePointToResolutionX(data[index].vic_pos_x))
        .attr("cy", CalculatePointToResolutionY(data[index].vic_pos_y));
    }
  });
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
  y = (y - 450) * -1;
  console.log(y);
  return y;
}
