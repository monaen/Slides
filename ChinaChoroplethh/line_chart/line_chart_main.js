function makeLineChart(provinceName, parentElement) {
    var PROVINCE_NAME = provinceName;

    var CSV_INPUT = '../processed/nations.csv';
    var START_YEAR_NUMBER = 1996;
    var END_YEAR_NUMBER = 2013;

    var parseDate = d3.time.format("%Y").parse;
    var END_YEAR_DATE = parseDate('' + END_YEAR_NUMBER);

    var margin = {top:50, right:0, bottom:70, left:70},
        width  = 300 + margin.left + margin.right,
        height = 200 + margin.top + margin.bottom,
        legendWidth = 200;

    var x = d3.time.scale()
        .range([0, width]);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .tickSize(width, 0) // set outer to 0 to avoid ticks on the border
        .orient("right");

    var setColor = d3.scale.ordinal()
    .domain(["median", "closest", "province"])
    .range(['#fee5d9',"#a50f15",'#fb6a4a']);;

    var line = d3.svg.line()
        .interpolate("basis")
        .x(function(d) { return x(d.year); })
        .y(function(d) { return y(d.rate); });



    var svg = d3.select(parentElement).append("svg")
        .attr("width", width + margin.left + margin.right + legendWidth)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  
    getProvinceData(PROVINCE_NAME, function(rawData, countryData) {

      x.domain(d3.extent(rawData, function(d) {
        return d.year;
      }));
      y.domain([
          d3.min(countryData, function(c) { return d3.min(c.values, function(v) { return v.rate; }); }),
          d3.max(countryData, function(c) { return d3.max(c.values, function(v) { return v.rate; }); })
      ])
      
      var gx = svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      var gy = svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
          .call(customAxis)
          .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Unemployment Rate (%)")
          .style("fill","#737373")
          .attr("transform", "rotate(-90),translate(-10,-30)");      


      var country = svg.selectAll(".geography")
          .data(countryData)
          .enter()
          .append("g")
          .attr("class", "geography");




      country.append("path")
          .attr("class", "line")
          .attr("stroke", function(d, i){
            return setColor(i);
          })
          .attr("d", function(d) { 
            return line(d.values);
          })
          .attr("data-legend",function(d) { return d.name});

      svg.append("g")
          .attr("class","legend")
          .attr("transform","translate(50,30)")
          .style("font-size","10px")
          .call(d3.legend);

      // country.append("text")
      //     .datum(function(d) { return {name: d.name, value: d.values[d.values.length-1]}; })
      //     .attr("transform", function(d) { 
      //         return "translate(" + x(d.value.year) + "," + y(d.value.rate) + ")";
      //     })
      //     .attr("x", "0")
      //     .attr("dy", function(d){
      //       if (d.name.indexOf("Closest Country") >=0){
      //         return "0em";
      //       }else{
      //         return "3em";
      //       };})
      //     .style('fill', '#737373')
      //     .attr('class', 'legend')
      //     .text(function(d) { return d.name; });


        // /* Add 'curtain' rectangle to hide entire graph */
        // var curtain = svg.append('rect')
        //   .attr('x', -1 * width)
        //   .attr('y', -1 * height)
        //   .attr('height', height)
        //   .attr('width', width)
        //   .attr('class', 'curtain')
        //   .attr('transform', 'rotate(180)')
        //   .style('fill', '#ffffff')

        // /* Optionally add a guideline */
        // var guideline = svg.append('line')
        //   .attr('stroke', '#333')
        //   .attr('stroke-width',0)
        //   .attr('class', 'guide')
        //   .attr('x1', 1)
        //   .attr('y1', 1)
        //   .attr('x2', 1)
        //   .attr('y2', height)

        /* Create a shared transition for anything we're animating */
        setTimeout(function(){
          y.domain([0,3e6]);
          gy.call(customAxis);
        }, 1000);

        function customAxis(g) {
            g.selectAll("text")
                .attr("x", 4)
                .attr("dy", -4);
          };


        var t = svg.transition()
          .delay(750)
          .duration(6000)
          .ease('linear')
          .each('end', function() {
            d3.select('line.guide')
              .transition()
              .style('opacity', 0)
              .remove()
          });
      }); // end of getProvinceData() 

      // t.select('rect.curtain')
      //   .attr('width', 0);
      // t.select('line.guide')
      //   .attr('transform', 'translate(' + width + ', 0)')

      // d3.select("#show_guideline").on("change", function(e) {
      //   guideline.attr('stroke-width', this.checked ? 1 : 0);
      //   curtain.attr("opacity", this.checked ? 0.75 : 1);
      // })


    function findClosestInCountries(num, arr) {
      if (arr.length < 1) {
        return -1;
      }
      var diff = Math.abs(num - arr[0]);
      resultIndex = 0;
      for (var index in arr) {
          var newdiff = Math.abs(num - arr[index]);
          if (newdiff < diff) {
            diff = newdiff;
            resultIndex = index;
          }
      }
      return resultIndex;
    };

    function getProvinceData(provinceName, callback) {
      d3.csv(CSV_INPUT, function(error, data) {

        data = data.filter(function(d) {
          var dataExists = d.year && d.unem && d.country;
          var dataValid = !isNaN(+d.unem);
          // Skip unmatched year
          return dataExists && dataValid && +d.year <= END_YEAR_NUMBER && +d.year >= START_YEAR_NUMBER;
        });

        var provinces = {}
        var countries = {}
        var mediansData = []
        var yearToCountries = {}
        data.forEach(function(d) {

          // Process the year and value type.
          d.year = parseDate(d.year);
          d.unem = +d.unem;

          // Process median data. 
          // Note that value field name should be 'rate'.
          if (!d.AD && d.country === 'median') {
            mediansData.push({
              year: d.year,
              rate: d.unem
            });
          }

          // Process all country and province data.
          // Note that value field name should be 'rate'.
          if (d.iso2c) {
            // Year as key.
            if (d.year in yearToCountries) {
              yearToCountries[d.year].push({
                country: d.country,
                rate: d.unem
              });
            } else {
              yearToCountries[d.year] = []
            }

            // CountryName as key.
            if (d.country in countries) {
              countries[d.country].push({
                year: d.year,
                rate: d.unem
              });
            } else {
              countries[d.country] = []
            }
          } else {
            // Process all the provinces.
            if (d.country in provinces) {
              provinces[d.country].push({
                year: d.year,
                rate: d.unem
              });
            } else {
              provinces[d.country] = []
            }
          }
        });

      var finalData = [];

      // Push world median's data.
      finalData.push({
        name: 'World Median',
        values: mediansData
      });

      // Push this province's data.
      finalData.push({
        name: provinceName,
        values: provinces[provinceName]
      });

      // Put in year 2013 the nearest country's every year's data into finalData.
      var singleProvince = provinces[provinceName];
      var closestCountryIndex = findClosestInCountries(
          singleProvince.filter(function(obj){
            return obj.year.getYear() === END_YEAR_DATE.getYear();
          })[0].rate,
          yearToCountries[END_YEAR_DATE].map(function(item) {
            return item.rate;
          }));
      var closestCountryName = yearToCountries[END_YEAR_DATE][closestCountryIndex].country;

      finalData.push({
        name: 'Closest Country: ' + closestCountryName,
        values: countries[closestCountryName]
      });

      // TODO: Format the date for data.
      // Do the callback.
      callback(data, finalData);
    });
  };

/* create grid*/
//Draw a grid
}
