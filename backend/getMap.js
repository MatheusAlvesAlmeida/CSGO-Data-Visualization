export function getMapData(mapName) {
  const dataSrc = "./../data/" + mapName + "_filtered.csv";

  d3.csv(dataSrc, function (data) {
    var sampleSVG = d3
      .select("#left-mapcard")
      .append("svg")
      .attr("width", 1024)
      .attr("height", 1024);

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
  x = Math.floor((x / 3752) * 1024);
  console.log(x);
  return x;
}
function CalculatePointToResolutionY(y) {
  y += 2240;
  y = Math.floor((y / 3187) * 1024);
  y = (y - 1024) * -1;
  console.log(y);
  return y;
}
