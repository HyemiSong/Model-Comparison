function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
  }

async function sec2_1_2(){
    var radius = 400;
    var size = 5.1 
    var size1 = 3.3
    
    var svg = d3.select("#sec2_1")
    .select('svg')
    
    svg.select('image').attr('opacity',1).transition(transition_500).attr('opacity', 0)
    svg.select('defs').selectAll('marker').selectAll('polygon').transition(transition_800).attr('fill','black')
    svg.selectAll('line.sepal').transition(transition_800).attr('stroke','black')
    // svg.selectAll('line.petal').transition(transitionPath).attr('stroke','white')
    svg.selectAll('line.petal').remove()
    svg.selectAll('line.sepalAnnotate').remove()
    // svg.selectAll('line.sepal').remove()
    svg.selectAll('text.label').remove()
    svg.selectAll('circle.bcCircle').remove()
  
    await delay(500);
  
    svg.selectAll('line')
  
    svg.append('ellipse').attr('fill','none').attr('rx',radius*0.5).attr('ry', radius*0.5).attr('cx',(w_width/2)).attr('cy',(w_height/2))
        .attr('stroke','black').attr('stroke-dasharray','4')
        .transition(transition_500).duration(500)
        .attr('rx',radius*0.2).attr('ry', radius*0.2)
        // .attr('transform', function(d, i) {return 'translate('+ (w_width/2) +','+ (w_height/2) +')'})

    svg.append('text').attr('class','label').attr('fill','black')
      .text('versicolor').attr('transform','translate(285,225)').attr('opacity','0')
      .transition(transition_1000).attr('opacity','1')
  
    await delay(800);
    svg.selectAll('line.sepalAxisX').transition(transition_800).attr('y1','150').attr('y2', '300')
    svg.selectAll('line.sepalAxisY').transition(transition_800).attr('x1', '250').attr('x2', '400').attr('y1', '230').attr('y2', '230')

    // Setosa:
    var duration = 800
    svg.append('line').attr('class','sepal')
      .attr('stroke', 'black').attr('stroke-width', '2')
      .attr('x1', '325').attr('x2', '325')
      .attr('y1','350').attr('y2', '270')
      .attr('marker-start','url(#startarrow)').attr('marker-end','url(#endarrow)')
      .transition().duration(duration_800)
      .attr('x1', '160').attr('x2','160')
  
    svg.append('line').attr('class','sepal')
      .attr('stroke', 'black').attr('stroke-width', '2')
      .attr('x1', '355').attr('x2', '285')
      .attr('y1','290').attr('y2', '290')
      .attr('marker-start','url(#startarrow)').attr('marker-end','url(#endarrow)')
      .transition().duration(duration_800)
      .attr('x1', '200').attr('x2','120')
      .attr('y2','310').attr('y1','310')
  
    svg.append('ellipse').attr('fill','none').attr('rx','50').attr('ry','70').attr('cx','320').attr('cy','310')
      .attr('stroke','black').attr('stroke-dasharray','4')
      .transition().duration(duration_800)
      .attr('rx','50').attr('ry','50').attr('cx','160')
      
    svg.append('text').attr('class','label').attr('fill','black')
      .text('setosa').attr('transform','translate(135,225)').attr('opacity','0')
      .transition().duration(duration_800).attr('opacity','1')
  
    // Virginica:
    svg.append('line').attr('class','sepal')
      .attr('stroke', 'black').attr('stroke-width', '2')
      .attr('x1', '325').attr('x2', '325')
      .attr('y1','365').attr('y2', '255')
      .attr('marker-start','url(#startarrow)').attr('marker-end','url(#endarrow)')
      .transition().duration(duration_800)
      .attr('x1', '500').attr('x2','500')
  
    svg.append('line').attr('class','sepal')
      .attr('stroke', 'black').attr('stroke-width', '2')
      .attr('x1', '355').attr('x2', '285')
      .attr('y1','290').attr('y2', '290')
      .attr('marker-start','url(#startarrow)').attr('marker-end','url(#endarrow)')
      .transition().duration(duration_800)
      .attr('x1', '540').attr('x2','460')
      .attr('y2','310').attr('y1','310')
  
    svg.append('ellipse').attr('fill','none').attr('rx','50').attr('ry','70').attr('cx','320').attr('cy','310')
      .attr('stroke','black').attr('stroke-dasharray','4')
      .transition().duration(duration_800)
      .attr('rx','50').attr('ry','70').attr('cx','500')
      
    svg.append('text').attr('class','label').attr('fill','black')
      .text('virginica').attr('transform','translate(470,225)').attr('opacity','0')
      .transition().duration(duration_800).attr('opacity','1')
  
  }
  