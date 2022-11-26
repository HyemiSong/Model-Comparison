// _4_model comparison

function sec1_1_1(){
    console.log("svg1-1-1")
    d3.select(".svg2-1-1").remove()
    d3.select('#toolbar').style('display', 'none');

    var radius = 400;
    var data=[1,2,3,4]
    
    var svg = d3.select('#sec1_1').append('svg').attr("class", "svg1-1-1")
    .attr('width', w_width)
    .attr('height', w_height)

    var circleGroup = svg.selectAll('g')
    .data(data)
    .enter()
    .append('g')
    .attr('transform', function(d, i) {return 'translate('+ xPos(i) +','+ yPos(i) +')'})

    function xPos(i){
        var x;
        if(i==0){x = w_width/2}
        if(i==1){x = w_width/4}
        if(i==2){x = w_width/6}
        if(i==3){x = w_width/5}
        return x
    }
    function yPos(i){
        var y;
        if(i==0){y = w_height/2}
        if(i==1){y = w_height/4}
        if(i==2){y = w_height/6}
        if(i==3){y = w_height/5}
        return y
    }

    var bgCircle = circleGroup.append("circle")
    .attr("class", "bcCircle")
    .attr("fill", 'none')
    .attr("stroke", mainColor['darkblue'])
    .style("stroke-dasharray", ("3, 3"))
    .style("stroke-width", 1)
    .attr("cx", 0).attr("cy", 0)
    .attr("r", function(d, i) {return i == 0 ? radius : radius/(i*2)})
    repeat();
    
    function repeat() {
        bgCircle
        .attr('r', function(d, i) {return i == 0 ? radius : radius/(i*2)})
        .transition()        // apply a transition
        .duration(2000)      // apply it over 2000 milliseconds
        .attr('r', function(d, i) {return i == 0 ? radius*0.95 : radius/(i*2)*0.95})
        .transition()        // apply a transition
        .duration(2000)      // apply it over 2000 milliseconds
        .attr('r', function(d, i) {return i == 0 ? radius : radius/(i*2)})
        .on("end", repeat);  // when the transition finishes start again
    };

    var title1 = svg.append('text').text('Learning').attr("class", "text-mlg").attr("fill", mainColor['darkblue'])
    var title2 = svg.append('text').text('ML Model Comparison').attr("class", "text-mlg").attr("fill", mainColor['darkblue'])
    title1.attr('transform', function(d, i) {return 'translate('+ (w_width/20) +','+((w_height/2)-30) +')'})
    title2.attr('transform', function(d, i) {return 'translate('+ (w_width/20) +','+((w_height/2)+30) +')'})

    // visContainer.append('text').attr('class','label_iris irisCircle').attr('fill','black')
    // .text('Versicolor').attr('transform','translate(-48, -110)').attr('opacity','0')
    // .transition(transition_1000).attr('opacity','1')



  }//end of func
  
  //display chart
  //var myChart411 = sec4_1_1(); @@JJ4 Commented out to roll with ST
  
  function display_sec1_1_1(error, data) {
    sec1_1_1()
    if (error) {
      console.log(error);
    }
  }
  