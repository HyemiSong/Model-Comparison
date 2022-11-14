// test
// Scrolling Mechanism:
var current_viz = 0
var viz_ids = [
  '#viz_1_1',
  '#viz_1_2',
  '#viz_1_3',
  '#viz_1_4',
]

d3.graphScroll()
    .graph(d3.selectAll('#graph'))
    .container(d3.select('#main'))
    .sections(d3.selectAll('#sections > div'))
    .on('active', function (i) {
        console.log("At section " + i);
        updateViz(i)
    })

function updateViz(i) {
  d3.select(viz_ids[current_viz]).style('display', 'none')
  d3.select(viz_ids[i]).style('display','block')
  current_viz = i
}

// Getting the data via promise so you can work through irises as well to get the data

// var irises = {}

// Promise.all([
//   d3.csv('iris.csv', function (row) {
//     var node = {
//         id: +row['Id'], sepalLength: +row['SepalLengthCm'],
//         sepalWidth: +row['SepalWidthCm'],petalLength: +row['PetalLengthCm'],
//         petalWidth: +row['PetalWidthCm'],species: +row['Species'],
//     };
//     irises[node-id] = node;

//     return node;
//   }), 
// ])

/* Visualizations: */
var width = 680
var widthMargin = 20
var height = 640
var heightMargin = 60

var lengthScale = d3.scaleLinear()
.domain([4,8]).range([heightMargin, height-heightMargin]);

var widthScale = d3.scaleLinear()
.domain([1.8,4.5]).range([height-heightMargin, heightMargin]);

function scaleLength(SepalLengthCm) {
  return lengthScale(SepalLengthCm);
}

function scaleWidth(SepalWidthCm) {
  return widthScale(SepalWidthCm);
}

var kfoldDots;

var dataset;
d3.csv('iris.csv').then(function(data) {
  dataset = data
  kfold(dataset);
  //sections-newly drawing visualization or update visual channels (color, position etc)
  viz11(dataset);
  viz12(dataset);
}); //dataloader

function kfold(dataset){
var svg = d3.select('#viz_1_3').append('svg')
  .attr('width', width)
  .attr('height', height)

var radius = 30;
var count = [1,2,3,4,5];
var pieData = {a:20,b:80}
var dots = svg.selectAll('g').data(count)
var pieArea = svg.append('g')

pieCharts(pieArea, radius, count, pieData)
}

function pieCharts(pieArea, radius, count, pieData){

  // set the color scale
  var color = d3.scaleOrdinal()
    .domain(pieData)
    .range(["#00FFE0", "#1E8B8B", "#323D52"])

  var pieGroup = pieArea.selectAll('g')
    .data(count)
    .enter()
    .append('g')
    .attr('transform', function(d, i) {return 'translate('+(((width-widthMargin)/3)-2*radius*i)+','+((height-heightMargin)/8)+')'})
    .attr('class', 'pies')

  var pie = d3.pie()
    .value(function(d) {return d.value; })
  var data_ready = pie(d3.entries(pieData))
  
  var pies = pieGroup.selectAll('.pie')
    .data(data_ready)
    .enter()
    .append('g')
    .attr('class', 'arc')
    .append('path')
    .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(radius)
    )
    .attr('fill', function(d){ return(color(d.data.key)) })
    .attr("stroke", '#323D52')
    .style("stroke-width", "0px")
    .style("opacity", 1)
    .attr('transform','translate('+(((width-widthMargin)/2)-2.2*radius)+','+((height-heightMargin)/5)+')')

  var dataLines = pieGroup.append("line")
    .attr("stroke", '#323D52')
    .style("stroke-width", function(d, i){return (i == 3) ? 3:1})
    .style("stroke-dasharray", ("3, 3"))
    .attr("x1", 0)
    .attr("y1", radius)
    .attr("x2", function(d, i){return posi(d, i, radius)})
    .attr("y2", 145)
    .attr('transform','translate('+(((width-widthMargin)/2)-2.2*radius)+','+(((height-heightMargin)/5))+')')
   
  var acc = radius*4
  var accuracyLine = pieArea.append("line")
    .attr("stroke", '#323D52')
    .style("stroke-width", 3)
    .style("stroke-dasharray", ("3, 3"))
    .attr("x1", 0)
    .attr("y1", radius)
    .attr("x2", acc)
    .attr("y2", 145)
    .attr('transform','translate('+(((width-widthMargin)/2)+radius)+','+((height-heightMargin)/1.6)+')')
     
  function posi(d, i, radius){
      var x;
      if(i == 0){x = -radius*(i+4)}
      else if(i == 1){x = -radius*(i+1)}
      else if(i == 2){x = 0}
      else if(i == 3){x = radius*(i-1)}
      else if(i == 4){x = radius*(i)}
      return x
    }
  
  var accAxis = pieArea.append('accDot')
  
  var outerRect = pieArea.append("rect")
    .attr("style", "fill:white")
    .attr("stroke", '#323D52')
    .style("stroke-width", "2px")
    .attr("x", 100)
    .attr("y", 100)
    .attr("rx", radius)	
    .attr("ry", radius)								
    .attr("width", radius*10)
    .attr("height", radius*2)
    .attr('transform','translate('+(((width-widthMargin)/2)-7.2*radius)+','+((height-heightMargin)/2.5)+')')

  var innnerRect = pieArea.append("rect")
    .attr("style", "fill:#323D52")
    .attr("stroke", '#323D52')
    .style("stroke-width", "2px")
    .attr("x", 100)
    .attr("y", 100)
    .attr("rx", radius)	
    .attr("ry", radius)								
    .attr("width", radius*8)
    .attr("height", radius*2)
    .attr('transform','translate('+(((width-widthMargin)/2)-7.2*radius)+','+((height-heightMargin)/2.5)+')')

}
