// Jquery frame rate
jQuery.fx.interval = 9;

//DATA 
// MAP setup
var width = 800,
    height = 550;

// data goes here
var data=[
  ["Anhui",5710.00],
  ["Beijing",15610.00],
  ["Chongqing",8350.00],
  ["Fujian",10440.00],
  ["Gansu",4360.00],
  ["Guangdong",9880.00],
  ["Guangxi",5480.00],
  ["Guizhou",4420.00],
  ["Hainan",6340.00],
  ["Hebei",6440.00],
  ["Heilongjiang",6370.00],
  ["Henan",6020.00],
  ["Hubei",8030.00],
  ["Hunan",6640.00],
  ["Inner Mongol",11690.00],
  ["Jiangsu",13160.00],
  ["Jiangxi",5580.00],
  ["Jilin",8270.00],
  ["Liaoning",10700.00],
  ["Ningxia",6830.00],
  ["Qinghai",6360.00],
  ["Shaanxi",7640.00],
  ["Shandong",9990.00],
  ["Shanghai",14990.00],
  ["Shanxi",5710.00],
  ["Sichuan",5940.00],
  ["Tianjin",18030.00],
  ["Tibet",4760.00],
  ["Xinjiang",6350.00],
  ["Yunnan",4440.00],
  ["Zhejiang",11430.00]
];
var title = "2014 GDP Per Capita(Current USD$)";
var desc = "Source: China Statistical Information and Consultancy Centre (CSICC)";
var credits='';var units='';

// parse data properly
var umap = []
data.map(function(d) {umap[d[0]]=Number(d[1])});

var v = Object.keys(umap).map(function(k){return umap[k]})
// console.log(v);

// LOAD DATA
queue()
    .defer(d3.json, "maps/zh-mainland-provinces.topo.json") // mainland
    .await(drawGdpMap); // function that uses files

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
