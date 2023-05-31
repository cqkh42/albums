function parseData(data) {
    d = data['history']
    .filter(d => Number.isInteger(d.rating))
    .sort((a, b) => d3.descending(a.rating, b.rating))

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

    var d = t.append("div")
    .attr("class", "img-text")
    .text(d => "★".repeat(Number(d.rating)).padEnd(5, "☆"))
}

//d3.json("sample.json", parseData);
d3.json("https://1001albumsgenerator.com/api/v1/projects/cqkh42", parseData);
