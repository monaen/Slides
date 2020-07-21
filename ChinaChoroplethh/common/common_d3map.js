
function drawGdpMap(error, mainland) {
    drawProvinces(error, mainland, true /* withDollar*/);
    provinceOnclick();
}

function drawUnemploymentMap(error, mainland) {
    drawProvinces(error, mainland, false /* not withDollar*/);
    provinceOnclick();
}

function drawLifeMap(error, mainland) {
    drawProvinces(error, mainland, false /* not withDollar*/);
    provinceOnclick();
}

// Mainland provinces
function drawProvinces(error, cn, withDollar) {
    
    // var codes=[];
    // for (var i = 0; i < topojson.feature(cn, cn.objects.provinces).features.length; i++) {
    //     codes.push(topojson.feature(cn, cn.objects.provinces).features[i].properties.name)
        
    // };

    svg.append("g")
        .attr("class", "map")
        .append("g")
        .attr("class", "mainland")
        .selectAll("path")
        .data(topojson.feature(cn, cn.objects.provinces).features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("id", function(d) { return d.id; })
        .attr("class", "province")
        .attr("fill", "#cccccc")
        .attr("fill", function(d) { 
            return color(umap[d.properties.name]);
        })
        //.style("opacity", .7) 
        .attr("stroke", "white")
        .attr("stroke-width", "0.7")
        .call(d3.helper.tooltip(
            function(d, i){
              return "<b>"+d.properties.name +"</b>"+ "<br/>" + (withDollar ? '$' : '')
               + d3.round(umap[d.properties.name],2) + (withDollar ? '' : '%');
            }
        ));
}


function wrap(text, width) {
  text.each(function() {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 0.7, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy );
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy ).text(word);
      }
    }
  });
}

// Animation of a province
function provinceOnclick() {
    for (var i = 0; i < 31 /* total province count */; i++){
        (function registerProvinceClicks(index){
            $('#' + index).click(function(){
                // Show the corresponding province icons.
                $('#' + index + '_1').toggle();
                //show the corresponding province tree. 
                $('#'+index + '_2').toggle();
                //show the corresponding province chart.
                $('#'+index + '_3').toggle();

                if(!$(this).data('enlarged')) {
                    // Enlarge this province.
                    $(this).data('enlarged', true);

                    // Store this path's bbox.
                    $(this).data('bBox', this.getBBox());
                    $(this).css('opacity', 0.5);
                    $('.province').not(this).hide();
                    provinceAnimation(this, true);
                    $('.caption').hide();
                    $('.info').hide();
                    $('.countrylabels').hide();
                    $('p').hide();
                } else {
                    // Zoom out to whole map.
                    $(this).data('enlarged', false); 
                    $(this).css('opacity', 1);
                    provinceAnimation(this, false, function(){
                        // Do not show other provinces until this province zooms out.
                        $('.province').show();
                        $('.caption').show();
                        $('.info').show();
                        $('.countrylabels').show();
                        $('p').show();
                    });
                }
            });
        })(i);
    }
}

function provinceAnimation(provinceElement, zoomin, completeCallback) {
    var box = provinceElement.getBBox();
    var oldBox = $(provinceElement).data('bBox');
    var pinnedPos = {
      x : -oldBox.x + 120 + 'px',
      y : -oldBox.y + 220 + 'px'
    };

    var cx = box.x + box.width/2;
    var cy = box.y + box.height/2;

    $(provinceElement).animate(
        { scale: (zoomin ? 2 : 1)},
        { 
            duration: 1000,
            step: function(now, fx) {
                scaleVal = now;
                $(provinceElement).attr(
                    "transform", "translate(" + cx + " " + cy + ") scale(" + scaleVal + ") translate(" + (-cx) + " " + (-cy) + ")");
            },
            complete: completeCallback
        }
    );

    if (zoomin) {
      // Move to the left side. Using css transform.
      $(provinceElement).css(
        'transform',
        'translate(' + pinnedPos.x + ', ' +  pinnedPos.y + ')');
    } else {
      $(provinceElement).css('transform', '');
    }
}
