// Jquery frame rate
jQuery.fx.interval = 9;

//DATA 
// MAP setup
var width = 800,
    height = 550;

// data goes here
var data=[
  ["Beijing",80.18],
  ["Tianjin",78.89],
  ["Hebei",74.97],
  ["Shaanxi",74.92],
  ["Inner Mongol",74.44],
  ["Liaoning",76.38],
  ["Jilin",76.18],
  ["Heilongjiang",75.98],
  ["Shanghai",80.26],
  ["Jiangsu",76.63],
  ["Zhejiang",77.73],
  ["Anhui",75.08],
  ["Fujian",75.76],
  ["Jiangxi",74.33],
  ["Shandong",76.46],
  ["Henan",74.57],
  ["Hubei",74.87],
  ["Hunan",74.7],
  ["Guangdong",76.49],
  ["Guangxi",75.11],
  ["Hainan",76.3],
  ["Chongqing",75.7],
  ["Sichuan",74.75],
  ["Guizhou",71.1],
  ["Yunnan",69.54],
  ["Tibet",68.17],
  ["Shanxi",74.68],
  ["Gansu",72.23],
  ["Qinghai",69.96],
  ["Ningxia",73.38],
  ["Xinjiang",72.35]
];

var title = "2010 Life Expectancy(Y)";
var desc = "Source: National Bureau of Statistics";
var credits='';var units='';

// parse data properly
var umap = []
data.map(function(d) {umap[d[0]]=Number(d[1])});

var v = Object.keys(umap).map(function(k){return umap[k]})
// console.log(v);

// LOAD DATA
queue()
    .defer(d3.json, "maps/zh-mainland-provinces.topo.json") // mainland
    .await(drawLifeMap); // function that uses files

// DRAW 
// create SVG map
var projection = d3.geo.mercator()
    .center([116,39])
    .scale(600);

var svg = d3.select("#map").append("svg")
    .attr("width", width+50)
    .attr("height", height)
    .attr("preserveAspectRatio", "xMidYMid")
    .attr("viewBox", "0 0 " + width + " " + height);


var path = d3.geo.path()
    .projection(projection);

// COLORS
// define color scale
var colorScale = d3.scale.quantile()
           .domain(d3.extent(v))
           //.interpolate(d3.interpolateHcl)
           //.range(["#D0D8E3", "#386590"]);
           //.range(["#E4E9F0", "#214B73"]);
           .range(['#f2f0f7','#dadaeb','#bcbddc','#9e9ac8','#807dba','#6a51a3','#4a1486'])
      



// add grey color if no values
var color = function(i){ 
    if (i==undefined) {return "grey"}
    else return colorScale(i)
}

// BACKGROUND
svg.append("g")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height)
    .attr("fill", "#eeeeee")
    .attr("stroke-width", "0.35");

// TITLE AND INFOS
svg.append('g')
    .attr("class","info")
    .attr("transform", "translate("+(width-130)+","+(height-250)+")")
    .append("rect")
    .attr({fill : "transparent", height: 160,width:160})

svg.select('.info')
    .append("g")
    .attr("class", "title")
    .append("text")
    // .attr("dx", function(d){return 35})          
    .attr("transform", "translate(0,-35)")
    .attr("dy", function(d){return 16})
    .attr("text-anchor", "middle")  
    .attr("font-family", "sans-serif")
    .attr("fill", "#4B4B4B")
    .style("text-decoration", "bold")  
    .text(title)
    .attr("font-size", 14)
    .call(wrap, 150);

svg.select('.info')
    .append("g")
    .attr("class","legend")
    .append("text")
    .attr("dx", function(d){return 0})          
    .attr("dy", 12 )
    .attr("text-anchor", "middle")  
    .attr("font-family", "sans-serif")
    .attr("fill", "#aaaaaa")
    .attr("font-size", 10)
    .text(desc)
    .call(wrap, 150);

svg.select('.info')
    .append("g")
    .attr("class","credits")
    .attr("transform", "translate(0,140)")
    .append("text")
    .attr("dx", function(d){return 0})          
    .attr("dy", 5 )
    .attr("text-anchor", "middle")  
    .attr("font-family", "sans-serif")
    .attr("fill", "#aaaaaa")
    .attr("font-size", 11)
    .text(credits)
    .call(wrap, 150);

// CAPTION
// Color bar adapted from http://tributary.io/tributary/3650755/
svg.append("g")
    .attr("class","caption")
    .append("g")
    .attr("class","color-bar")
    .selectAll("rect")
    .data(d3.range(d3.min(v), d3.max(v), (d3.max(v)-d3.min(v))/50.0))
    .enter()
    .append("rect")
    .attr({width: 25,
          height: 5,
          y: function(d,i) { return height-25-i*5 },
          x: width-50,
          fill: function(d,i) { return color(d); } })

svg.select(".caption")
    .append("g")
    .attr("transform", "translate(" + (width-25) + "," + (height-25-5*49) + ")")
    .call(d3.svg.axis()
           .scale(d3.scale.linear().domain(d3.extent(v)).range([5*50,0]))
            .orient("right"))
    .attr("font-family", "sans-serif")
    .attr("fill", "#bdbdbd")
    .attr("font-size", 10)

svg.select('.caption')
    .append("g")
    .attr("class","units")
    .attr("transform", "translate("+(width-35)+","+(height/2-20)+")")
    .append("text")
    .attr("dx", function(d){return 0})          
    .attr("dy", 9 )
    .attr("text-anchor", "middle")  
    .attr("font-family", "sans-serif")
    .attr("fill", "#4b4b4b")
    .attr("font-size", 10)
    .text(units)
    .call(wrap, 50);
