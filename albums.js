function parseData(data) {
    d = data['history'].filter(d => Number.isInteger(d.rating))
console.log(d)
    
    var t = d3.select("#holder")
    .selectAll("div")
    .data(d)
    .enter()
    .append("div")
    .attr("class", "img-holder")
    .append("a")
    .attr("href", d => d.album.wikipediaUrl)
    .attr("target", "_blank")
    
    t
    .append("img")
    .attr("src", d => d.album.images[1]["url"])
}

d3.json("sample.json", parseData);
