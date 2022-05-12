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
    this.plotMap()
}

function compare(){
    document.getElementById("compare-right-side") = document.getElementById("compare-left-side");
}

function plotData(data, width, height){
    var x = d3.scaleLinear().range([0, width]).domain([0,width]);
    var y = d3.scaleLinear().range([height, 0]).domain([0,height]);

    var circles = svg.selectAll(".circle")
        .data(data)
        .enter().append("circle")
        .attr("id", "circle")
        .attr("r",3) //Radius of the dot.
        .attr("cx", function(d) { return x(d["vic_pos_x"]); }) // x-axis coordinate of the center of the element.
        .attr("cy", function (d) { return y(d["vic_pos_y"]); }) // y-axis coordinate of the center of the element.
        .style('fill', "red")
        .style("stroke-width", 1)
        .style("stroke", "black")
}

function mapCoordinates(data, mapData){
    var resX = 342;
    var resY = 460;
    var newData = data;
    var i = 0;
    newData.forEach(function(d) {
        if(mapData.map == d.map){
            d.att_pos_x = parseFloat(resX * ( (d.att_pos_x - mapData.StartX) / (mapData.EndX - mapData.StartX)));
            d.att_pos_y = parseFloat(resY * ( (d.att_pos_y - mapData.StartY) / (mapData.EndY - mapData.StartY)));
            d.vic_pos_x = parseFloat(resX * ( (d.vic_pos_x - mapData.StartX) / (mapData.EndX - mapData.StartX)));
            d.vic_pos_y = parseFloat(resY * ( (d.vic_pos_y - mapData.StartY) / (mapData.EndY - mapData.StartY)));
        }
    });
    return newData;
}

function plotMap(){
    d3.csv("./../data/cache_data.csv", function(d) {
        const data = d;
    })
    d3.csv("./../data/map_data.csv", function(d) {
        const mapData = d[0];
    })

    console.log(data)
    
    const width = 342;
    const height = 460;
    const currentMap = 'de_cache';

    var newData = mapCoordinates(data, mapData);

    if(document.getElementById('map') == null){
        svg = d3.select("#map_image").append("svg")
        .attr("id", "map")
        .attr("width",  width)
        .attr("height", height);
    }

    var img = svg.append("image")
        .attr("xlink:href", "./../assets/maps/"+currentMap+".png")
        .attr("width", width)
        .attr("height", height);


    plotData(newData, width, height);

}