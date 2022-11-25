// _4_model comparison

function sec1_1_1(){
    var svg = d3.select('#sec1_1').append('svg')
    .attr('width', w_width)
    .attr('height', w_height)

    console.log(svg)
    var pieArea = svg.append('g')
  
  }//end of func
  
  //display chart
  //var myChart411 = sec4_1_1(); @@JJ4 Commented out to roll with ST
  
  function display_sec1_1_1(error, data) {
    sec1_1_1()
    if (error) {
      console.log(error);
    }
  }
  