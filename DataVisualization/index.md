---
title       : Data Visualization
subtitle    : An art field in vision
author      : Nan Meng
job         : Ph.D
framework   : io2012        # {io2012, html5slides, shower, dzslides, ...}
highlighter : highlight.js  # {highlight.js, prettify, highlight}
hitheme     : tomorrow      # 
widgets     : [mathjax, quiz, bootstrap]       # {mathjax, quiz, bootstrap}
mode        : selfcontained # {standalone, draft}
knit        : slidify::knit2slides
---


## Overview

> 1. Recap traditional visualization methods
> 2. Techniques for advanced visualizing
> 3. Examples
> 4. Summary
> 5. For you...

--- bg:#FFFFFF

## Recap visualization methods(traditional)


```r
data1 <- read.csv("1_data_generated.csv",header = T)
head(data1, 10) # The first 10 rows in data1
```

```
##    language     date    price
## 1   Spanish Dec 1850 45871359
## 2   Spanish Dec 1851 53328379
## 3   Spanish Dec 1852 47419413
## 4   Spanish Dec 1853 41855112
## 5   Spanish Dec 1854 40154362
## 6   Spanish Dec 1855 43819130
## 7   Spanish Dec 1856 49579310
## 8   Spanish Dec 1857 55593229
## 9   Spanish Dec 1858 51145836
## 10  Spanish Dec 1859 55139219
```


--- &twocol bg:#FFFFFF

## Recap visualization methods(traditional)

```r
head(data1, 10) # The first 10 rows in data1
```



*** =left

<div width = '720px'>
      <iframe sandbox="allow-scripts allow-forms allow-same-origin" src="http://monaen.github.io/marvelchinese/PlotCode/3D-show-wheel/index.html" marginwidth="0" marginheight="0" scrolling="yes" width='720px' height='600px' frameBorder='1'></iframe>
</div>


*** =right

- lines
- horizons
- areas
- stacked areas
- streamgraph
- overlapping areas
- grouped bars
- stacked bars
- bars
- donut


--- .segue .dark
## What data visualization really is?

--- bg:#FFFFFF


## Book Data


```r
data2 <- read.csv("2_Export_Num.csv",header = T)
head(data2, 6) # The first 6 rows in data2
```

```
##   date Philosopy.Social.Science Culture.and.Education Literature.and.Art
## 1 2014                   111.65                216.22             143.87
## 2 2013                   159.54                386.27             203.52
## 3 2012                   173.44                350.60             233.41
## 4 2011                   101.52                158.08             144.66
## 5 2010                   105.32                124.24             129.70
## 6 2009                    84.04                123.97             105.12
##   Natural.Science.and.S.T For.Children General.Books
## 1                   41.53       807.08        145.40
## 2                   62.26       724.39        201.60
## 3                   85.49       538.23        295.99
## 4                   57.99       205.23        188.27
## 5                   59.86       140.47        147.64
## 6                   90.11        70.64        150.96
```

--- .segue .dark

## Thinking about it in 10 seconds ......

--- &twocol bg:#FFFFFF

## Motion Chart

```r
data2 <- read.csv("2_Export_Num.csv",header = T)
head(data2, 6) # The first 6 rows in data2
```
<h2 style="color:#E81515;">Radio</h2>


*** =left

<iframe sandbox="allow-scripts allow-forms allow-same-origin" src="http://monaen.github.io/marvelchinese/PlotCode/NVD3-Bar-Plot/Export_Num.html" marginwidth="0" marginheight="0" scrolling="yes" width='700px' height='300px' frameBorder='1'></iframe>

*** =right


- Proportional Information
- Tendency



--- bg:#FFFFFF

## Fruits Data

```
##     Fruit Year Location Sales Expenses Profit       Date
## 1  Apples 2008     West    98       78     20 2008-12-31
## 2  Apples 2009     West   111       79     32 2009-12-31
## 3  Apples 2010     West    89       76     13 2010-12-31
## 4 Oranges 2008     East    96       81     15 2008-12-31
## 5 Bananas 2008     East    85       76      9 2008-12-31
## 6 Oranges 2009     East    93       80     13 2009-12-31
## 7 Bananas 2009     East    94       78     16 2009-12-31
## 8 Oranges 2010     East    98       91      7 2010-12-31
## 9 Bananas 2010     East    81       71     10 2010-12-31
```

--- &twocol bg:#FFFFFF

## Motion Chart

*** =left

<!-- MotionChart generated in R 3.2.3 by googleVis 0.5.10 package -->
<!-- Fri Mar 11 18:00:12 2016 -->


<!-- jsHeader -->
<script type="text/javascript">
 
// jsData 
function gvisDataMotionChartID32811b8ca5dd () {
var data = new google.visualization.DataTable();
var datajson =
[
 [
 "Apples",
2008,
"West",
98,
78,
20,
"2008-12-31" 
],
[
 "Apples",
2009,
"West",
111,
79,
32,
"2009-12-31" 
],
[
 "Apples",
2010,
"West",
89,
76,
13,
"2010-12-31" 
],
[
 "Oranges",
2008,
"East",
96,
81,
15,
"2008-12-31" 
],
[
 "Bananas",
2008,
"East",
85,
76,
9,
"2008-12-31" 
],
[
 "Oranges",
2009,
"East",
93,
80,
13,
"2009-12-31" 
],
[
 "Bananas",
2009,
"East",
94,
78,
16,
"2009-12-31" 
],
[
 "Oranges",
2010,
"East",
98,
91,
7,
"2010-12-31" 
],
[
 "Bananas",
2010,
"East",
81,
71,
10,
"2010-12-31" 
] 
];
data.addColumn('string','Fruit');
data.addColumn('number','Year');
data.addColumn('string','Location');
data.addColumn('number','Sales');
data.addColumn('number','Expenses');
data.addColumn('number','Profit');
data.addColumn('string','Date');
data.addRows(datajson);
return(data);
}
 
// jsDrawChart
function drawChartMotionChartID32811b8ca5dd() {
var data = gvisDataMotionChartID32811b8ca5dd();
var options = {};
options["width"] =    600;
options["height"] =    500;
options["state"] = "";

    var chart = new google.visualization.MotionChart(
    document.getElementById('MotionChartID32811b8ca5dd')
    );
    chart.draw(data,options);
    

}
  
 
// jsDisplayChart
(function() {
var pkgs = window.__gvisPackages = window.__gvisPackages || [];
var callbacks = window.__gvisCallbacks = window.__gvisCallbacks || [];
var chartid = "motionchart";
  
// Manually see if chartid is in pkgs (not all browsers support Array.indexOf)
var i, newPackage = true;
for (i = 0; newPackage && i < pkgs.length; i++) {
if (pkgs[i] === chartid)
newPackage = false;
}
if (newPackage)
  pkgs.push(chartid);
  
// Add the drawChart function to the global list of callbacks
callbacks.push(drawChartMotionChartID32811b8ca5dd);
})();
function displayChartMotionChartID32811b8ca5dd() {
  var pkgs = window.__gvisPackages = window.__gvisPackages || [];
  var callbacks = window.__gvisCallbacks = window.__gvisCallbacks || [];
  window.clearTimeout(window.__gvisLoad);
  // The timeout is set to 100 because otherwise the container div we are
  // targeting might not be part of the document yet
  window.__gvisLoad = setTimeout(function() {
  var pkgCount = pkgs.length;
  google.load("visualization", "1", { packages:pkgs, callback: function() {
  if (pkgCount != pkgs.length) {
  // Race condition where another setTimeout call snuck in after us; if
  // that call added a package, we must not shift its callback
  return;
}
while (callbacks.length > 0)
callbacks.shift()();
} });
}, 100);
}
 
// jsFooter
</script>
 
<!-- jsChart -->  
<script type="text/javascript" src="https://www.google.com/jsapi?callback=displayChartMotionChartID32811b8ca5dd"></script>
 
<!-- divChart -->
  
<div id="MotionChartID32811b8ca5dd" 
  style="width: 600; height: 500;">
</div>

*** =right

- Checkbox
- ScrollBar
- Menu


--- .segue .dark

## More complex data ......

--- bg:#FFFFFF


## Geography Data
<br>
<h2 style="color:#E81515;">Warming up</h2>

```r
data3 <- read.csv("3_sell.csv",header = T)
head(data3, 6) # The first 6 rows in data3
```

```
##   Province total Y2013 Y2014
## 1  Beijing   371   185   186
## 2  Tianjin   646   324   322
## 3    Hebei  1166   562   604
## 4   Shanxi   117    60    57
## 5 Mongolia    78    40    38
## 6 Liaoning   613   327   286
```

--- bg:#FFFFFF

## Choropleth
<iframe align = "center" sandbox="allow-scripts allow-forms allow-same-origin" src="http://monaen.github.io/marvelchinese/PlotCode/chinaChoropleth/index.html" marginwidth="0" marginheight="0" scrolling="yes" width='700px' height='900px' frameBorder='1'></iframe>


--- bg:#FFFFFF

## Time for you
<h3 style="color:#E81515;">World Heritage Data</h3>

```r
data4 <- read.csv("whc-sites-2015.csv",header = T)
head(data4[,c(4,10,13,14,15,27,29)], 5) # The first 5 rows in data4
```

```
##                                                               name_en
## 1 Cultural Landscape and Archaeological Remains of the Bamiyan Valley
## 2                           Minaret and Archaeological Remains of Jam
## 3                          Historic Centres of Berat and Gjirokastra 
## 4                                                             Butrint
## 5                                             Al Qal'a of Beni Hammad
##   date_inscribed longitude latitude area_hectares category states_name_en
## 1           2003  67.82525 34.84694      158.9265 Cultural    Afghanistan
## 2           2002  64.51606 34.39656       70.0000 Cultural    Afghanistan
## 3           2005  20.13333 40.06944       58.9000 Cultural        Albania
## 4           1992  20.02611 39.75111            NA Cultural        Albania
## 5           1980   4.78684 35.81844      150.0000 Cultural        Algeria
```




--- .segue .dark

## Thinking about it in 10 seconds ......

--- bg:#FFFFFF

## Symbol Map & Crossfilter
<iframe align = "center" sandbox="allow-scripts allow-forms allow-same-origin" src="http://monaen.github.io/marvelchinese/PlotCode/World-Heritage-List/World-Heritage-List/webpage/index.html" marginwidth="0" marginheight="0" scrolling="yes" width='800px' height='900px' frameBorder='1'></iframe>


--- .segue .dark

## Hmmmmm how about Network !!!

--- bg:#FFFFFF


<h2 style="color:#E81515;" align = "center">Facebook</h2>
![img](./facebook_map.png)


--- .segue .dark

## Can we do that ......

--- bg:#FFFFFF
## Flights Data


```r
data5 <- read.csv("5_flight.csv",header = T)
head(data5, 3) # The first 3 rows in data5
```

```
##   residence.area. workplace.area. X.categories WorkAtHome Underground
## 1       E02000001       E02000001         1506          0          73
## 2       E02000001       E02000014            2          0           2
## 3       E02000001       E02000016            3          0           1
##   Train Bus Taxi Other.method F10 F11 F12  F13 F14
## 1    41  32    9            1   8   1  33 1304   4
## 2     0   0    0            0   0   0   0    0   0
## 3     0   2    0            0   0   0   0    0   0
```

--- bg:#FFFFFF

## Flights Data


<div style='float:left;width:40%;' class='centered'>
  <img src="flights.png" height="500px" width="400px">
</div>

<div style='float:right;width:50%;'>
  <pre style = "width:600px;height:500px;overflow-x:scroll">
    library(ggmap)
    library(geosphere)
    library(rgdal)
    library(threejs)
    library(plyr)
    library(ggplot2)
    library(maptools)
    #######################################################################################
    # https://web.archive.org/web/20150405212054/http://spatial.ly/2015/03/mapping-flows/ #
    #######################################################################################
        
    input<-read.table("wu03ew_v1.csv", sep=",", header=T)
    input<- input[,1:3]
    names(input)<- c("origin", "destination","total")
    centroids<- read.csv("msoa_popweightedcentroids.csv")
    
    or.xy<- merge(input, centroids, by.x="origin", by.y="Code")
    names(or.xy)<- c("origin", "destination", "trips", "o_name", "oX", "oY")
    dest.xy<- merge(or.xy, centroids, by.x="destination", by.y="Code")
    names(dest.xy)<- c("origin", "destination", "trips", "o_name", "oX", "oY","d_name", "dX", "dY")
    
    # removes the axes in the resulting plot.
    xquiet<- scale_x_continuous("", breaks=NULL)
    yquiet<-scale_y_continuous("", breaks=NULL)
    quiet<-list(xquiet, yquiet)
    
    
    
    
    dest <- dest.xy
    dest.xy <- dest.xy[1:2000,]
    # build the plot
    # First we specify the dataframe we need, with a filter excluding flows of <10
    
    ggplot(dest.xy[which(dest.xy$trips>10),], aes(oX, oY))+
    
    # tells ggplot that we wish to plot line segments. The "alpha=" is line transparency and used below
      geom_segment(aes(x=oX, y=oY,xend=dX, yend=dY, alpha=trips), col="white")+
    
    # Here is the magic bit that sets line transparency - essential to make the plot readable
      scale_alpha_continuous(range = c(0.03, 0.3))+
      
    # Set black background, remove axes and fix aspect ratio
      theme(panel.background = element_rect(fill='black',colour='black'))+quiet+coord_equal()

  </pre>
</div>






--- bg:#FFFFFF

## Migration Data

```r
data6 <- read.csv("6_migration.csv",header = T, sep=";")
head(data6[,c(-1,-5,-10)], 3) # The first 3 rows in data6
```

```
##   PrsLabel BYear BLocLabel  BLocLat BLocLong DYear DLocLabel  DLocLat
## 1    David -1039 Bethlehem 31.70310 35.19560  -969 Jerusalem 31.78333
## 2   Josiah  -648 Jerusalem 31.78333 35.21667  -608 Jerusalem 31.78333
## 3  Ezekiel  -621 Jerusalem 31.78333 35.21667  -569   Babylon 32.54167
##   DLocLong Gender PerformingArts Creative Gov.Law.Mil.Act.Rel
## 1 35.21667   Male              0        0                   1
## 2 35.21667   Male              0        0                   0
## 3 44.42333   Male              0        0                   1
##   Academic.Edu.Health Sports Business.Industry.Travel
## 1                   0      0                        0
## 2                   0      0                        0
## 3                   0      0                        0
```

--- bg:#000000


## Migration Data
<a href="http://monaen.github.io/marvelchinese/PlotCode/example4_use_FB/index.html"> source </a>
<iframe sandbox="allow-scripts allow-forms allow-same-origin" src="http://monaen.github.io/marvelchinese/PlotCode/example4_use_FB/index.html" marginwidth="0" marginheight="0" width='800px' height='400px' frameBorder='1'></iframe>


--- .segue .dark

## Just do it !!!

---

## Summary

> 1. Recap some traditional visualization methods

> 2. Advanced Techniques(Radio, Checkbox, ScrollBar, Menu, Choropleth, Symbol Map, Crossfilter)

> 3. Networks(Facebook, Flights, Migration)

--- .segue .dark


<h2 size = "4">Learning Object: <br> <br> Master the visualization techniques for <br> <br> different kind of data...</h2> 

<h3></h3>



--- bg:#FFFFFF


## For test
<h3 style="color:#E81515;" align = "center">Visualize Text Data</h3>


```
##             word   counts
## 1   Peking opera 13443635
## 2      Confucius  4352466
## 3     Lion dance   426534
## 4        Chinese  2452436
## 5           Pipa 34224555
## 6   Chinese knot  7454635
## 7      Dumplings  3546546
## 8        Couplet 73565436
## 9  Facial Makeup   873536
## 10       Culture  5693465
## 11   Tang poetry    45678
```



--- &carousel
## You may 

*** {class: active, img: "./final1.png"}
<!-- Bruce Lowell http://bruce.kus-numa.net/ -->
Words Count(Simple bar plot)

*** {img: "./final2.png"}
Words Count(Muilt bar plot)

*** {img: "./final3.png"}
Word Cloud

*** {img: "./final4.png", alt=""}
Bubble Cloud

--- .segue .dark


## But what I want you to do is ......

--- bg:#FFFFFF

## WordCloud(Animation)
<div align = "center">
<iframe align = "center" sandbox="allow-scripts allow-forms allow-same-origin" src="http://monaen.github.io/marvelchinese/wordcloud/index.html" marginwidth="0" marginheight="0" scrolling="yes" width='800px' height='900px' frameBorder='1'></iframe>
<div>

--- .segue .dark


## Thank you !!!

