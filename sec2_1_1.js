function sec2_1_1(){
    var radius = 400;
    var size = 5.1 
    var size1 = 3.3

    var svg = d3.select("#sec2_1")
    .append('svg')
    .attr('width', w_width)
    .attr('height', w_height)
  
    var defs = svg.append('defs')

    visContainer = svg.append('g').attr("class", "iris")
    .attr('transform', function(d, i) {return 'translate('+ (w_width/2) +','+(w_height/2) +')'})
  
    defs.append('marker').attr('id','startarrow').attr('orient','auto').attr('markerHeight', '4')
        .attr('refY', '2').attr('refX', '0').attr('markerWidth','4').attr('markerUnits','strokeWidth')
        .append('polygon').attr('fill','white').attr('points', '4 0, 4 4, 0 2')
  
    defs.append('marker').attr('id','endarrow').attr('orient','auto').attr('markerHeight', '4')
        .attr('refY', '2').attr('refX', '0').attr('markerWidth','4').attr('markerUnits','strokeWidth')
        .append('polygon').attr('fill','white').attr('points', '0 0, 4 2, 0 4')
    
    var irisCircle = visContainer.append("circle")
      .attr("class", "bcCircle")
      .attr("fill", 'none')
      .attr("stroke", mainColor['darkblue'])
      .style("stroke-dasharray", ("3, 3"))
      .style("stroke-width", 1)
      .attr("cx", 0).attr("cy", 0)
      .attr("r", radius)
      // .attr('transform', function(d, i) {return 'translate('+ (w_width/2) +','+ (w_height/2) +')'})
      .transition()
      .duration(800)
      .attr('r', radius*0.5)
      .attr("fill", mainColor['yellow'])
 
    var imgSize = 300
    var img = visContainer.append('image')
      .attr('href', 'static/iris.png')
      .attr('height', imgSize)
      .attr('width', imgSize)
      .attr('transform', function(d, i) {return 'translate('+ (-imgSize/2) +','+ (-imgSize/2) +')'})
    
    const transitionPath = d3.transition().ease(d3.easeSin).duration(500);
    var sepallaxis = visContainer.append('line').attr('class','sepal sepalAxisX')
      .attr('stroke', 'white').attr('stroke-width', '2')
      //.attr('stroke-dashoffset', '5').attr('stroke-dasharray', '4')
      .attr('x1','0').attr('x2', '0')
      .attr('y1','10').attr('y2', '10')
      .attr('marker-start','url(#startarrow)').attr('marker-end','url(#endarrow)')
      .transition(transitionPath)
      .attr('y1', '124')
  
    var sepalwaxis = visContainer.append('line').attr('class','sepal sepalAxisY')
      .attr('stroke', 'white').attr('stroke-width', '2')
      .attr('x1','-52').attr('x2', '-52')
      .attr('y1','60').attr('y2', '60')
      .attr('marker-start','url(#startarrow)').attr('marker-end','url(#endarrow)')
      .transition(transitionPath)
      .attr('x1', '57')
  
    var sepaltxt = visContainer.append('text').attr('class','label').attr('fill', mainColor['darkblue'])
      .attr('transform', 'translate(-195, 230)').text('Sepal').attr('opacity','0')
      .transition(transitionPath)
      .attr('opacity','1')

    var sepalAnnotateLine = visContainer.append('line').attr('class','sepalAnnotate')
      .attr('stroke', mainColor['darkblue']).attr('stroke-width', '2')
      .attr('x1','0').attr('x2', '-100')
      .attr('y1','124').attr('y2', '225')
      .attr('opacity','0')
      .style("stroke-width", 1)
      .transition(transitionPath)
      .attr('opacity','1')
    var sepalAnnotateLine2 = visContainer.append('line').attr('class','sepalAnnotate')
      .attr('stroke', mainColor['darkblue']).attr('stroke-width', '2')
      .attr('x1','-100').attr('x2', '-150')
      .attr('y1','225').attr('y2', '225')
      .attr('opacity','0')
      .style("stroke-width", 1)
      .transition(transitionPath)
      .attr('opacity','1')  
  
    var petallaxis = visContainer.append('line').attr('class','petal petalAxisX')
      .attr('stroke', 'white').attr('stroke-width', '2')
      .attr('x1', '-1').attr('x2', '-1')
      .attr('y1','-22').attr('y2', '-40')
      .attr('marker-start','url(#startarrow)').attr('marker-end','url(#endarrow)')
      .transition(transitionPath)
      .attr('y2', '-120')
  
    var petalwaxis = visContainer.append('line').attr('class','petal petalAxisY')
      .attr('stroke', 'white').attr('stroke-width', '2')
      .attr('x1', '-15').attr('x2', '-15')
      .attr('y1','-70').attr('y2', '-70')
      .attr('marker-start','url(#startarrow)').attr('marker-end','url(#endarrow)')
      .transition(transitionPath)
      .attr('x1', '20')
  
    var petaltxt= visContainer.append('text').attr('class','label').attr('fill', mainColor['darkblue'])
      .attr('transform', 'translate(155,-225)').text('Petal').attr('opacity','0')
      .transition(transitionPath)
      .attr('opacity','1')

    var petalAnnotateLine = visContainer.append('line').attr('class','petal')
      .attr('stroke', mainColor['darkblue']).attr('stroke-width', '2')
      .attr('x1','0').attr('x2','100')
      .attr('y1','-126').attr('y2','-230')
      .attr('opacity','0')
      .style("stroke-width", 1)
      .transition(transitionPath)
      .attr('opacity','1')
    var petalAnnotateLine2 = visContainer.append('line').attr('class','petal')
      .attr('stroke', mainColor['darkblue']).attr('stroke-width', '2')
      .attr('x1','100').attr('x2','150')
      .attr('y1','-230').attr('y2','-230')
      .attr('opacity','0')
      .style("stroke-width", 1)
      .transition(transitionPath)
      .attr('opacity','1')
  }
  
  
