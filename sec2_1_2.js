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

    //versicolor, center circle
    var centerCircle = visContainer.append('ellipse').attr('fill', mainColor['yellow'])
      .attr('rx',radius*0.5).attr('ry', radius*0.5).attr('cx',0).attr('cy',0)
      .attr('stroke','black').attr('stroke-dasharray','4')
      .attr('rx',radius*0.5).attr('ry', radius*0.5).attr('cx',0).attr('cy',0)
      .attr('stroke','black').attr('stroke-dasharray','4')
      .attr('stroke-width','1')
      .transition(transition_500)
      .attr('rx',radius*0.2).attr('ry', radius*0.2)
      .attr('fill', "none")
      .attr('stroke',mainColor['yellow'])
      .attr('stroke-width','3')

    await delay(500);

      svg.selectAll('line')
      //versicolor
      visContainer.append('text').attr('class','label_iris').attr('fill','black')
        .text('Versicolor').attr('transform','translate(-48, -110)').attr('opacity','0')
        .transition(transition_1000).attr('opacity','1')

      svg.selectAll('line.sepalAxisX').transition(transition_800).attr('y1','78').attr('y2', '-73')
      svg.selectAll('line.sepalAxisY').transition(transition_800).attr('x1', '78').attr('x2', '-72').attr('y1', '15').attr('y2', '15')

    await delay(800);

      //Setosa:
      visContainer.append('ellipse').attr('fill','none').attr('rx','50').attr('ry','70').attr('cx','0').attr('cy','0')
        .attr('stroke', mainColor['yellow']).attr('stroke-dasharray','4')
        .attr('stroke-width','1')
        .transition().duration(duration_800)
        .attr('rx','70').attr('ry','58').attr('cx','250')
        .attr('stroke-width','3')
      
      visContainer.append('text').attr('class','label_iris').attr('fill','black')
        .text('Setosa').attr('transform','translate(215,-110)').attr('opacity','0')
        .transition().duration(duration_800).attr('opacity','1')

      visContainer.append('line').attr('class','sepal')
        .attr('stroke', mainColor['darkblue']).attr('stroke-width', '2')
        .attr('x1', '0').attr('x2', '0')
        .attr('y1','57').attr('y2', '-48')
        .attr('marker-start','url(#startarrow)').attr('marker-end','url(#endarrow)')
        .transition().duration(duration_800)
        .attr('x1', '261').attr('x2','261')
    
      visContainer.append('line').attr('class','sepal')
        .attr('stroke', mainColor['darkblue']).attr('stroke-width', '2')
        .attr('x1', '0').attr('x2', '0')
        .attr('y1','0').attr('y2', '0')
        .attr('marker-start','url(#startarrow)').attr('marker-end','url(#endarrow)')
        .transition().duration(duration_800)
        .attr('x1', '180').attr('x2','310')
    
      // Virginica:
      visContainer.append('ellipse').attr('fill','none').attr('rx','50').attr('ry','70').attr('cx','0').attr('cy','0')
      .attr('stroke',mainColor['yellow']).attr('stroke-dasharray','4')
      .attr('stroke-width','1')
      .transition().duration(duration_800)
      .attr('rx','50').attr('ry','70').attr('cx','-250')
      .attr('stroke-width','3')
      
      visContainer.append('text').attr('class','label_iris').attr('fill','black')
      .text('Virginica').attr('transform','translate(-290, -110)').attr('opacity','0')
      .transition().duration(duration_800).attr('opacity','1')

      visContainer.append('line').attr('class','sepal')
        .attr('stroke', mainColor['darkblue']).attr('stroke-width', '2')
        .attr('x1', '0').attr('x2', '0')
        .attr('y1','66').attr('y2', '-56')
        .attr('marker-start','url(#startarrow)').attr('marker-end','url(#endarrow)')
        .transition().duration(duration_800)
        .attr('x1', '-261').attr('x2','-261')
    
      visContainer.append('line').attr('class','sepal')
        .attr('stroke', mainColor['darkblue']).attr('stroke-width', '2')
        .attr('x1', '0').attr('x2', '0')
        .attr('y1','0').attr('y2', '0')
        .attr('marker-start','url(#startarrow)').attr('marker-end','url(#endarrow)')
        .transition().duration(duration_800)
        .attr('x1', '-200').attr('x2','-290')
    
  }
  