// import { bind_edges, PersonCicle, TeamCircle } from "./AgenD.js"
// import { bind_edges_2, PersonCicle_2, TeamCircle_2 } from "./AgenD.js"
// var TeamCircle = TeamCircle_2
// var bind_edges = bind_edges_2
// var PersonCicle = PersonCicle_2
import { bind_edges_3, PersonCicle_3, TeamCircle_3 } from "./AgenD.js"
var TeamCircle = TeamCircle_3
var bind_edges = bind_edges_3
var PersonCicle = PersonCicle_3


var AgendaPerson = (SVG) => {
  const width = $('.AgenBody').width()
  const height = $('.AgenBody').height()
  var EW = width / (TeamCircle.length + 1)

  // var Agencolors = d3.schemeSet2
  // var Agencolors = ['#4285f4', '#DA70D6', '#FF6A6A', '#24a853']
  var Agencolors = ['#7898e1', '#9987ce', '#f89588', '#76da91']
  
  // var Wordscale = d3
  //   .scaleLinear()
  //   .domain([0, 190])
  //   .range([6, 12]); 
  
  // var Interacscale = d3
  //   .scaleLinear()
  //   .domain([0, 190])
  //   .range([3, 7]); 
  
  //case 2
  var Wordscale = d3
  .scaleLinear()
  .domain([0, 100])
  .range([6, 12]); 
  // .range([20, 30]);   //test

  var Interacscale = d3
    .scaleLinear()
    .domain([0, 70])
    .range([3, 7]); 
    // .range([12, 20]); //test
  
  
  var Cpie = d3
    .pie()
    .sort(null)
    .value(function(d) {
      return d.value; 
    })
  
  var config = {
    inR: 0,
    outR: 0
  }
  var arc = d3.arc()
    .innerRadius(config.inR)
    .outerRadius(config.outR);

  var gPersonA = SVG.append('g').attr('class', 'personA')
  var gPersonB = SVG.append('g').attr('class', 'personB')
  var gPersonC = SVG.append('g').attr('class', 'personC')
  var gPersonD = SVG.append('g').attr('class', 'personD')

  var LineWidScale = d3.scaleLinear()
    .domain([0, 100])
  .range([4,13])
  // .range([0,0])  //test

  // A
  var GA = gPersonA
    .selectAll(".ACircle")
    .data(PersonCicle)
    .enter()
    .append("g")
    .attr("transform", function(d,i) {
      return "translate(" + (EW * (i+1)) + "," + (height * 0.12) + ")"
      // return "translate(" + (EW * (i+1)) + "," + (height * 0.3) + ")"  //test
    })
  
  var Circle_wai =  GA.append('circle')
    .attr('x', 0)
    .attr('y', 0)
    .attr('r', function (d) {
      return Wordscale(d.wordTotal[0].value)
    })
    .style("stroke", "black")
    .style("fill", "none")
    .style("stroke-width", "1px")
  
  var Circle_nei = GA.append('circle')
    .attr('x', 0)
    .attr('y', 0)
    .attr('r', function (d) {
      return Interacscale(d.Interaction[0].value)
    })
    .style("stroke", "white")
    .style("fill", "#A2B5CD")
    // .style('opacity', 0.2)
    .style("stroke-width", "1px")

  var arc_Total = d3.arc()
  
  var AgenPie = GA.selectAll("path")
    .data(function (d) {
      return Cpie(d.A)
    })
    .join("path")
    .attr('fill', function (d, i) {
      if (d.data.id == '-') {
        return '#CFCFCF'
      }
      else {
        return Agencolors[d.data.id];
      }
    })
    .attr('d', function (d) {
        d.innerRadius = Wordscale(d.data.Total) 
      d.outerRadius = Wordscale(d.data.Total) + 7
      // d.outerRadius = Wordscale(d.data.Total) + 18  //test
      d.padAngle = 0.03
      let k = arc_Total(d);
        return k;
    })
    // .attr('d',arc)
    .style("cursor", "pointer")
  
  GA
    .append('line')
    .attr('x1', function (d, i) {
      var MAX = d3.max(d.A, function (d) {
        return d.value
      })
      if (MAX != 0) {
        return (Wordscale(d.wordTotal[0].value)  + 7)
      }
      else {
        return (Wordscale(d.wordTotal[0].value))
      }   
    })
    .attr('y1', 0)
    .attr('x2', function (d, i) {
      if (i < PersonCicle.length - 1) {
        var MAX = d3.max(d.A, function (d) {
          return d.value
        })
        if (MAX != 0) {
          return (EW ) - (Wordscale(PersonCicle[i+1].wordTotal[0].value)  + 7)
        }
        else {
          return (EW ) - (Wordscale(PersonCicle[i+1].wordTotal[0].value))
        }
      }
      else {
        return (EW - 5 ) 
      }
      
    })
    .attr('y2', 0)
    .style("stroke", function (d, i) {
      if (i < PersonCicle.length - 1) {
        var Sub = PersonCicle[i + 1].wordTotal[0].value - PersonCicle[i].wordTotal[0].value
        if (Sub >= 0) {
          return '#B2DFEE'
        }
        else {
          return '#FFDAB9'
        }
      }
      else {
        return '#B2DFEE'
      }
    })
    .style("stroke-width", function (d, i) {
      if (i < PersonCicle.length - 1) {
        var Sub = Math.abs(PersonCicle[i + 1].wordTotal[0].value - PersonCicle[i].wordTotal[0].value )
        return LineWidScale(Sub)
      }
      else {
        return 2
      }
    })
  
  // B  
  var GB = gPersonB
    .selectAll(".BCircle")
    .data(PersonCicle)
    .enter()
    .append("g")
    .attr("transform", function(d,i) {
      return "translate(" + (EW * (i+1)) + "," + (height * 0.25) + ")"
    })
  
  var Circle_wai_B =  GB.append('circle')
    .attr('x', 0)
    .attr('y', 0)
    .attr('r', function (d) {
      return Wordscale(d.wordTotal[1].value)
    })
    .style("stroke", "black")
    .style("fill", "none")
    .style("stroke-width", "1px")
  
  var Circle_nei_B = GB.append('circle')
    .attr('x', 0)
    .attr('y', 0)
    .attr('r', function (d) {
      return Interacscale(d.Interaction[1].value)
    })
    .style("stroke", "white")
    .style("fill", "#A2B5CD")
    // .style('opacity', 0.2)
    .style("stroke-width", "1.5px")

  
  var AgenPie_B = GB.selectAll("path")
    .data(function (d) {
      return Cpie(d.B)
    })
    .join("path")
    .attr('fill', function (d, i) {
      if (d.data.id == '-') {
        return '#CFCFCF'
      }
      else {
        return Agencolors[d.data.id];
      }
    })
    .attr('d', function (d) {
      d.innerRadius = Wordscale(d.data.Total) 
      d.outerRadius = Wordscale(d.data.Total) + 7
      d.padAngle = 0.03
      let k = arc_Total(d);
        return k;
  })
    // .attr('d', arc)
    .style("cursor", "pointer")
  
  GB
    .append('line')
    .attr('x1', function (d, i) {
      var MAX = d3.max(d.B, function (d) {
        return d.value
      })
      if (MAX != 0) {
        return (Wordscale(d.wordTotal[1].value)  + 7)
      }
      else {
        return (Wordscale(d.wordTotal[1].value))
      }   
    })
    .attr('y1', 0)
    .attr('x2', function (d, i) {
      if (i < PersonCicle.length - 1) {
        var MAX = d3.max(d.B, function (d) {
          return d.value
        })
        if (MAX != 0) {
          return (EW ) - (Wordscale(PersonCicle[i+1].wordTotal[1].value)  + 7)
        }
        else {
          return (EW ) - (Wordscale(PersonCicle[i+1].wordTotal[1].value))
        }
      }
      else {
        return (EW - 5 ) 
      }
      
    })
    .attr('y2', 0)
    .style("stroke", function (d, i) {
      if (i < PersonCicle.length - 1) {
        var Sub = PersonCicle[i + 1].wordTotal[1].value - PersonCicle[i].wordTotal[1].value
        if (Sub >= 0) {
          return '#B2DFEE'
        }
        else {
          return '#FFDAB9'
        }
      }
      else {
        return '#B2DFEE'
      }
    })
    .style("stroke-width", function (d, i) {
      if (i < PersonCicle.length - 1) {
        var Sub = Math.abs(PersonCicle[i + 1].wordTotal[1].value - PersonCicle[i].wordTotal[1].value )
        return LineWidScale(Sub)
      }
      else {
        return 2
      }
    })
  
  // C
  var GC = gPersonC
    .selectAll(".CCircle")
    .data(PersonCicle)
    .enter()
    .append("g")
    .attr("transform", function(d,i) {
      return "translate(" + (EW * (i+1)) + "," + (height * 0.38) + ")"
    })
  
  var Circle_wai_C =  GC.append('circle')
    .attr('x', 0)
    .attr('y', 0)
    .attr('r', function (d) {
      return Wordscale(d.wordTotal[2].value)
    })
    .style("stroke", "black")
    .style("fill", "none")
    .style("stroke-width", "1px")
  
  var Circle_nei_C = GC.append('circle')
    .attr('x', 0)
    .attr('y', 0)
    .attr('r', function (d) {
      return Interacscale(d.Interaction[2].value)
    })
    .style("stroke", "white")
    .style("fill", "#A2B5CD")
    // .style('opacity', 0.2)
    .style("stroke-width", "1px")

  
  var AgenPie_C = GC.selectAll("path")
    .data(function (d) {
      return Cpie(d.C)
    })
    .join("path")
    .attr('fill', function (d, i) {
      if (d.data.id == '-') {
        return '#CFCFCF'
      }
      else {
        return Agencolors[d.data.id];
      }
    })
    .attr('d', function (d) {
      d.innerRadius = Wordscale(d.data.Total) 
      d.outerRadius = Wordscale(d.data.Total) + 7
      d.padAngle = 0.03
      let k = arc_Total(d);
        return k;
  })
    // .attr('d',arc)
    .style("cursor", "pointer")
  
  GC
    .append('line')
    .attr('x1', function (d, i) {
      var MAX = d3.max(d.C, function (d) {
        return d.value
      })
      if (MAX != 0) {
        return (Wordscale(d.wordTotal[2].value)  + 7)
      }
      else {
        return (Wordscale(d.wordTotal[2].value))
      }   
    })
    .attr('y1', 0)
    .attr('x2', function (d, i) {
      if (i < PersonCicle.length - 1) {
        var MAX = d3.max(d.C, function (d) {
          return d.value
        })
        if (MAX != 0) {
          return (EW ) - (Wordscale(PersonCicle[i+1].wordTotal[2].value)  + 7)
        }
        else {
          return (EW ) - (Wordscale(PersonCicle[i+1].wordTotal[2].value))
        }
      }
      else {
        return (EW - 5 ) 
      }
      
    })
    .attr('y2', 0)
    .style("stroke", function (d, i) {
      if (i < PersonCicle.length - 1) {
        var Sub = PersonCicle[i + 1].wordTotal[2].value - PersonCicle[i].wordTotal[2].value
        if (Sub >= 0) {
          return '#B2DFEE'
        }
        else {
          return '#FFDAB9'
        }
      }
      else {
        return '#B2DFEE'
      }
    })
    .style("stroke-width", function (d, i) {
      if (i < PersonCicle.length - 1) {
        var Sub = Math.abs(PersonCicle[i + 1].wordTotal[2].value - PersonCicle[2].wordTotal[0].value )
        return LineWidScale(Sub)
      }
      else {
        return 2
      }
    })
  
  // D
  var GD = gPersonD
    .selectAll(".DCircle")
    .data(PersonCicle)
    .enter()
    .append("g")
    .attr("transform", function(d,i) {
      return "translate(" + (EW * (i+1)) + "," + (height * 0.51) + ")"
    })
  
  var Circle_wai_D =  GD.append('circle')
    .attr('x', 0)
    .attr('y', 0)
    .attr('r', function (d) {
      return Wordscale(d.wordTotal[3].value)
    })
    .style("stroke", "black")
    .style("fill", "none")
    .style("stroke-width", "1px")
  
  var Circle_nei_D = GD.append('circle')
    .attr('x', 0)
    .attr('y', 0)
    .attr('r', function (d) {
      return Interacscale(d.Interaction[3].value)
    })
    .style("stroke", "white")
    .style("fill", "#A2B5CD")
    // .style('opacity', 0.2)
    .style("stroke-width", "1px")

  
  var AgenPie_D = GD.selectAll("path")
    .data(function (d) {
      return Cpie(d.D)
    })
    .join("path")
    .attr('fill', function (d, i) {
      if (d.data.id == '-') {
        return '#CFCFCF'
      }
      else {
        return Agencolors[d.data.id];
      }
    })
    .attr('d', function (d) {
      d.innerRadius = Wordscale(d.data.Total) 
      d.outerRadius = Wordscale(d.data.Total) + 7
      d.padAngle = 0.03
      let k = arc_Total(d);
        return k;l(d);
      return k;
  })
    // .attr('d',arc)
    .style("cursor", "pointer")
  
  GD
    .append('line')
    .attr('x1', function (d, i) {
      var MAX = d3.max(d.D, function (d) {
        return d.value
      })
      if (MAX != 0) {
        return (Wordscale(d.wordTotal[3].value)  + 7)
      }
      else {
        return (Wordscale(d.wordTotal[3].value))
      }   
    })
    .attr('y1', 0)
    .attr('x2', function (d, i) {
      if (i < PersonCicle.length - 1) {
        var MAX = d3.max(d.D, function (d) {
          return d.value
        })
        if (MAX != 0) {
          return (EW ) - (Wordscale(PersonCicle[i+1].wordTotal[3].value)  + 7)
        }
        else {
          return (EW ) - (Wordscale(PersonCicle[i+1].wordTotal[3].value))
        }
      }
      else {
        return (EW - 5 ) 
      }
      
    })
    .attr('y2', 0)
    .style("stroke", function (d, i) {
      if (i < PersonCicle.length - 1) {
        var Sub = PersonCicle[i + 1].wordTotal[3].value - PersonCicle[i].wordTotal[3].value
        if (Sub >= 0) {
          return '#B2DFEE'
        }
        else {
          return '#FFDAB9'
        }
      }
      else {
        return '#B2DFEE'
      }
    })
    .style("stroke-width", function (d, i) {
      if (i < PersonCicle.length - 1) {
        var Sub = Math.abs(PersonCicle[i + 1].wordTotal[3].value - PersonCicle[i].wordTotal[3].value )
        return LineWidScale(Sub)
      }
      else {
        return 2
      }
    })
  
 
}

var AgendaGMatrix = (SVG) => {
  const width = $('.AgenBody').width()
  const height = $('.AgenBody').height()
  var EW = width / (TeamCircle.length + 1)
  var M_wid = EW * 0.9 / 4

  var MatrixA = SVG.append('g').attr("class", "MatrixA")
  var MatrixB = SVG.append('g').attr("class", "MatrixB")
  var MatrixC = SVG.append('g').attr("class", "MatrixC")
  var MatrixD = SVG.append('g').attr("class", "MatrixD")

  var MatrixTitle = SVG.append('g').attr("class", "TITLE")


  var w = 50
  var Matrixcolors = d3.scaleLinear()
  .domain([0, w * .16, w * .32, w * .48, w * .64, w * .82, w])
    .range(['#5CACEE', '#9370DB', '#B4EEB4', '#66CDAA', '#CDB38B', '#EEAD0E', '#CD0000'])
  
  // var Matrixcolors = d3.scaleQuantize()
  //   .domain([0,50])
  //   .range(["#1874CD", "#4F94CD", "#7EC0EE", "#B0E2FF", "#FFFFF0", 
  //   "#FFEBCD", "#FF8247", "#CD6839", "#CD5555"]);


  // A
  var MA = MatrixA
    .selectAll(".AMatrix")
    .data(PersonCicle)
    .enter()
    .append("g")
    .attr("transform", function(d,i) {
      return "translate(" + (EW * (i+1)) + "," + (height * 0.6) + ")"
    })
  
  //字母
  MA
    .append('text')
    .attr('x', -M_wid * 2)
    .attr('y', -3)
    .text(function (d, i) {
      if (i == 0) {
        return 'A'
      }
      
    })
    .attr('font-size', 12)
    .attr('fill', 'black')
  
  MA
    .append('text')
    .attr('x', -M_wid * 1)
    .attr('y', -3)
    .text(function (d, i) {
      if (i == 0) {
        return 'B'
      }
      
    })
    .attr('font-size', 12)
    .attr('fill', 'black')
  
  MA
    .append('text')
    .attr('x', M_wid * 0)
    .attr('y', -3)
    .text(function (d, i) {
      if (i == 0) {
        return 'C'
      }
      
    })
    .attr('font-size', 12)
    .attr('fill', 'black')
  
  MA
    .append('text')
    .attr('x', M_wid * 1)
    .attr('y', -3)
    .text(function (d, i) {
      if (i == 0) {
        return 'D'
      }
      
    })
    .attr('font-size', 12)
    .attr('fill', 'black')
  
    MA
    .append('text')
    .attr('x', M_wid * 1 + 12)
    .attr('y', -3)
    .text(function (d, i) {
      if (i == 0) {
        return '(Interaction)'
      }
      
    })
    .attr('font-size', 12)
    .attr('fill', 'black')
  
  // 纵向
    MA
    .append('text')
    .attr('x', -M_wid * 2 - 12)
    .attr('y', 10)
    .text(function (d, i) {
      if (i == 0) {
        return 'A'
      }
      
    })
    .attr('font-size', 12)
    .attr('fill', 'black')

  
  var RBorder = MA.append('rect')
    .attr('x', -M_wid * 2)
    .attr('width', EW * 0.9)
    .attr('height', height * 0.2)
    .style("stroke", "#FFD700")
    .style('fill', 'none')
    .style("stroke-width", "1.5px")
    .style("stroke-dasharray", "5,5")
  
  var PositonA = MA
    .selectAll(".AMatr")
    .data(function (d) {
      return d.RA
    })
    .enter()
    .append("g")
  
  var RectA = PositonA.append('rect')
    .attr('x', function (d, i) {
      return (M_wid * (i - 1))
    })
    .attr('width', function (d,i) {
      if (d.value == 0) {
      return 0
      }
      else {
        return 10
      }
    })
    .attr('height', function (d,i) {
      if (d.value == 0) {
      return 0
      }
      else {
        return 10
      }
    })
    .style("fill", function (d) {
      return Matrixcolors(d.value)
    })
    .style("stroke-width", "1px")
  
  // B
  var MB = MatrixB
    .selectAll(".BMatrix")
    .data(PersonCicle)
    .enter()
    .append("g")
    .attr("transform", function(d,i) {
      return "translate(" + (EW * (i+1)) + "," + (height * 0.65) + ")"
    })
  
  MB
    .append('text')
    .attr('x', -M_wid * 2 - 12)
    .attr('y', 10)
    .text(function (d, i) {
      if (i == 0) {
        return 'B'
      }
      
    })
    .attr('font-size', 12)
    .attr('fill', 'black')
  
  var PositonB = MB
    .selectAll(".BMatr")
    .data(function (d) {
      return d.RB
    })
    .enter()
    .append("g")
  
  var RectB = PositonB.append('rect')
    .attr('x', function (d, i) {
      if (i == 0) {
        return (-M_wid * 2)
      }
      if (i == 1) {
        return (-M_wid * 0)
      }
      if (i == 2) {
        return (M_wid)
      }
    })
    .attr('width', function (d,i) {
      if (d.value == 0) {
      return 0
      }
      else {
        return 10
      }
    })
    .attr('height', function (d,i) {
      if (d.value == 0) {
      return 0
      }
      else {
        return 10
      }
    })
    .style("fill", function (d) {
      return Matrixcolors(d.value)
    })
    .style("stroke-width", "1px")
  
    // C
    var MC = MatrixC
      .selectAll(".CMatrix")
      .data(PersonCicle)
      .enter()
      .append("g")
      .attr("transform", function(d,i) {
        return "translate(" + (EW * (i+1)) + "," + (height * 0.7) + ")"
      })

    MC
      .append('text')
      .attr('x', -M_wid * 2 - 12)
      .attr('y', 10)
      .text(function (d, i) {
        if (i == 0) {
          return 'C'
        }
        
      })
      .attr('font-size', 12)
      .attr('fill', 'black')
    
    var PositonC = MC
      .selectAll(".CMatr")
      .data(function (d) {
        return d.RC
      })
      .enter()
      .append("g")
    
    var RectC = PositonC.append('rect')
      .attr('x', function (d, i) {
        if (i == 0) {
          return (-M_wid * 2)
        }
        if (i == 1) {
          return (-M_wid * 1)
        }
        if (i == 2) {
          return (M_wid)
        }
      })
      .attr('width', function (d,i) {
        if (d.value == 0) {
        return 0
        }
        else {
          return 10
        }
      })
      .attr('height', function (d,i) {
        if (d.value == 0) {
        return 0
        }
        else {
          return 10
        }
      })
      .style("fill", function (d) {
        return Matrixcolors(d.value)
      })
      .style("stroke-width", "1px")
  
    // D
    var MD = MatrixD
      .selectAll(".DMatrix")
      .data(PersonCicle)
      .enter()
      .append("g")
      .attr("transform", function(d,i) {
        return "translate(" + (EW * (i+1)) + "," + (height * 0.75) + ")"
      })
  
    MD
      .append('text')
      .attr('x', -M_wid * 2 - 12)
      .attr('y', 10)
      .text(function (d, i) {
        if (i == 0) {
          return 'D'
        }
        
      })
      .attr('font-size', 12)
      .attr('fill', 'black')
    
    var PositonD = MD
      .selectAll(".DMatr")
      .data(function (d) {
        return d.RD
      })
      .enter()
      .append("g")
    
    var RectD = PositonD.append('rect')
      .attr('x', function (d, i) {
        return (M_wid * (i-2))
      })
      .attr('width', function (d,i) {
        if (d.value == 0) {
        return 0
        }
        else {
          return 10
        }
      })
      .attr('height', function (d,i) {
        if (d.value == 0) {
        return 0
        }
        else {
          return 10
        }
      })
      .style("fill", function (d) {
        return Matrixcolors(d.value)
      })
      .style("stroke-width", "1px")


}

var calTopWords = (words, k) => {
  const topWords = words.sort((a, b) => b.cnt - a.cnt).slice(0, k)
  return topWords
}

var calTextWidth = (r, dis) => {
  return Math.sqrt(Math.pow(r, 2) - Math.pow(dis, 2)) * 2
}


const canvas1 = document.createElement("canvas")
const canvas2 = document.createElement("canvas")
const canvas3 = document.createElement("canvas")

const ctxs = [canvas1.getContext("2d"), canvas2.getContext("2d"), canvas3.getContext("2d")]
ctxs[0].font = '18px sans-serif'
ctxs[1].font = '10px sans-serif'
ctxs[2].font = '8px sans-serif'
const fontsize = ctxs.map(v => Number(v.font.slice(0, v.font.indexOf('px'))))
var couldPlace = (offset, word, r) => {
  for (let i in fontsize) {
      let need = ctxs[i].measureText(word).width
      let real = 0
      if (offset < 0) {
          if (Math.abs(offset - fontsize[i]) < r)
              real = calTextWidth(r, offset - fontsize[i])
      } else {
          real = calTextWidth(r, offset)
      }
      if (real >= need)
          return i
  }
  return -1
}

var AgendaMouseShow = (circle, SVG, CX, CY,topk = 10) => {
  const roles = ['A', 'B', 'C', 'D']
  const adv = {} // agenda detail view
  adv.method = {}
  adv.config = {
    timeSilce: 60,
    rownum: 4,
    w: "67rem",
    h: "64rem",
    innerRadius: 35,
    outerRadius: 45,
    circlePadding: 16,
    marginLeft: 10,
    marginTop: 8,
    barWidth: 3,
    barPadding: 1,
  }
  let maxWordNum = 190  //indexG处理
  adv.method.x = d3.scaleLinear()
    .domain([0, maxWordNum * 1.05])
    .range([1 / 4 * Math.PI, 1.25 * Math.PI])
  const barchart_arc = (d, i) => d3.arc()
                .innerRadius(adv.config.outerRadius + adv.config.barPadding + (adv.config.barWidth + adv.config.barPadding) * i)
                .outerRadius(adv.config.outerRadius + adv.config.barPadding + (adv.config.barWidth + adv.config.barPadding) * i + adv.config.barWidth)
                .startAngle(1 / 4 * Math.PI)
    .endAngle(adv.method.x(d.num))()
  
  
  // const personColor = d3.scaleOrdinal(d3.schemeTableau10.slice(4, 4 + roles.length))
  // const color = ['#4285f4', '#DA70D6', '#FF6A6A', '#24a853']
  const color = ['#7898e1', '#9987ce', '#f89588', '#76da91']

  const personColor = d3.scaleOrdinal()
            .domain(roles)
            .range(['#04c5f3', '#fcd300', '#ff6600', '#8085e9'])
  const { sentences, words, agenda_rate, personGiveWordNum, highlightArc } = circle
  const personGiveWordNumList = roles.map(role => ({ role: role, num: personGiveWordNum[role] }))
  const topWords = calTopWords(words, topk)
  const arcs = d3.pie().padAngle(0).sort(null).value(d => d.value)(agenda_rate);
  const arc = d3.arc().innerRadius(adv.config.innerRadius).outerRadius(adv.config.outerRadius);
  
  const svg = SVG
  const g = svg.append("g")
    .attr('class', "circleText")
  .attr("font-family", "sans-serif")
  .attr("transform", `translate(${CX +34},${CY-30})`)

  g.selectAll("path")
    .data(arcs)
    .join("path")
    .attr("fill", d => agenda_rate[d.index].id === '-' ? '#CFCFCF' : color[agenda_rate[d.index].id])
    .attr("d", arc)
    .style("cursor", "pointer")
    .attr("stroke", d => '' + d.data.id === '' + highlightArc ? "yellow" : "none")
    .attr("stroke-width", d => '' + d.data.id === '' + highlightArc ? 3 : "none")
    // .on("click", function (e, d) { // 点击圆环的交互
    //     adv.method.updateData(circle.circle_id, d.data.id !== '-' ? Number(d.data.id) : d.data.id)
    //     adv.method.drawView()
    // })
  
   // 外层彩带
   const bar = g.append("g")
   bar.selectAll("path")
       .data(personGiveWordNumList)
       .join("path")
       .attr("fill", d => personColor(d.role))
       .attr("d", barchart_arc)
   //
   const y_pos = []
   const r = adv.config.innerRadius
   const wordPadding = 2
   let offset = r - 1
   for (let i in topWords) {
       const w = topWords[i].word
       let canPlace = couldPlace(offset, w, r)
       while (canPlace < 0 && Math.abs(offset) < r) {
           offset -= 2
           canPlace = couldPlace(offset, w, r)
       }
       if (Math.abs(offset) >= r)
           break
       y_pos.push({ font: fontsize[canPlace], y: -offset, word: topWords[i] })
       offset -= fontsize[canPlace]
   }
   g.selectAll("text")
       .data(y_pos)
       .join("text")
       .attr("text-anchor", "middle")
       .attr("alignment-baseline", "before-edge")
       .attr("font-size", d => d.font)
       //    .attr("textLength",r)
       .attr("y", d => d.y)
       .text(d => d.word.word)
    .style("cursor", "pointer")
    .on("click", function (e, d) {  // 交互：在itav视图中高亮选中关键词相关句子
      const { word, sentenceContainThisWord } = d.word
      d3.select(".itav svg .bindNodeArea").selectAll("rect").attr("opacity", 0.1)
      const bindEdgeTitle = d3.select(".itav svg .bindEdgeTitle")
      bindEdgeTitle.selectAll("circle").attr("opacity", 0.1)
      bindEdgeTitle.selectAll("text").attr("opacity", 0.1)
      d3.select(".itav svg .bindEdge").selectAll("path").attr("opacity", 0.1)
      d3.select(".itav svg .singleNode").selectAll("ellipse").attr("opacity", 0.1)
      const highlightSession = [...new Set(sentenceContainThisWord.map(v => bind_edges.idx2sessionId[v]))]
      highlightSession.forEach(v => {
          d3.selectAll(`.sidNode_${v}`).attr("opacity", 1)
          d3.selectAll(`.sidEge_${v}`).attr("opacity", 0.7)
      })
  })
   
       
}

var LengedShow = () => {
  const width = $('.AgenTitle').width()
  const height = $('.AgenTitle').height()

  var svg = d3.select(".AgendaLenged")
    .attr("width", width *0.44)
    .attr("height", height)
  
  var w = width * 0.2

  //颜色比例尺
  var colors = d3.scaleLinear()
    .domain([0, w * .16, w * .32, w * .48, w * .64, w * .82, w])
    .range(['#5CACEE', '#9370DB', '#B4EEB4', '#66CDAA', '#CDB38B', '#EEAD0E', '#CD0000'])
  var bardata = [];

  for (var i = 0; i < 9; i++) {
    bardata.push(Math.random())
  }
  var ColorLine = svg.append('g')
    .attr('class', 'ColorLine')
    .attr("width", width * 0.5)
    .attr("height", 10)
    .attr('transform', "translate(" + ((w/9)*5 + 10) + "," + (1) + ")")
  
  var ColorTitle = svg.append('g')
    .attr('class', 'ColorTitle')
  
  var CLengen = ColorLine.selectAll('.colorlengen')
    // .data(colors.range())
    .data(bardata)
    .enter()
    .append('g')
    .attr('transform', function (d, i) {
    return "translate(" + ((w / 9) * i) + "," + (10) + ")"
  })

  CLengen.append("rect")
    .attr("x", 0)
    .attr("width", w / 9 +1)
    .attr("height", 15)
    .attr('border', '0px')
    .style("fill", function (d, i) {
        return colors(( (i) / 9) * w)
    });
  
  // 渐变颜色标签
  ColorTitle.append('text')
    .attr('x',  w / 9 - 12)
    .attr('y', 22)
    .text('Interaction (-)')
    .attr('font-size', 12)
    .attr('fill', 'black')
  
    ColorTitle.append('text')
    .attr('x', w  + w / 9 * 5 + 13)
    .attr('y', 22)
    .text('(+)')
    .attr('font-size', 12)
    .attr('fill', 'black')
  
}

var AgendaM = () => {
  const width = $('.AgenBody').width()
  const height = $('.AgenBody').height()

  var svg = d3.select(".AgenV")
    .attr("width", width)
    .attr("height", height)
  
  var EW = width / (TeamCircle.length +1)
  
  var gTime = svg.append("g").attr("class", "AllTime")  //Group
  var gEachPerson = svg.append('g').attr("class", "Person")  //person circle
  var gTitle = svg.append("g").attr("class", "Title")
  var gMatrix = svg.append("g").attr("class", "GroupMatrix")
  var gShow = svg.append("g").attr("class", "GroupShow")


  LengedShow()
  // draw group matrix
  AgendaGMatrix(gMatrix)

  // draw each person
  AgendaPerson(gEachPerson)

  var T = ['A', 'B', 'C', 'D','Group']
  var TitleP = gTitle
    .selectAll(".TITLE")
    .data(T)
    .enter()
    .append("g")
    .attr("transform", function(d,i) {
      return "translate(" + (5) + "," + (height / 5 * (i+0.5)) + ")"
    })
  
  TitleP
    .append('text')
    .attr('x', 0)
    .attr('y', function(d, i){
      if(i == 0){
        return 13
      }
      if(i == 1){
        return -10
      }
      if(i == 2){
        return -35
      }
      if(i == 3){
        return -55
      }
      if(i == 4){
        return -15
      }
    })
    .text(function (d,i) {
      return T[i]
    })
    .attr('font-size', 12)
    .attr('fill', 'black')


  var TimeStage = gTime
    .selectAll(".AllT")
    .data(TeamCircle)
    .enter()
    .append("g")
  .attr("transform", function(d,i) {
    return "translate(" + (EW * (i+1)) + "," + (0) + ")"
  })

var CircleStage = gTime
  .selectAll(".AllT")
  .data(TeamCircle)
  .enter()
  .append("g")
  .attr("transform", function(d,i) {
    return "translate(" + (EW * (i+1)) + "," + (0) + ")"
  })
  // .on("mouseover", function (e, d) {
  //   var showLine = gShow.append('line')
  //     .attr('class', 'MouseLine')
  //     .attr('x1', e.offsetX)
  //     .attr('y1', e.offsetY)
  //     .attr('x2', e.offsetX + 45)
  //     .attr('y2', e.offsetY - 40)
  //     .attr("stroke", 'red')
  //     .attr('stroke-width', '2px')
    
  //   // 画圆
  //   var CX = e.offsetX + 45
  //   var CY = e.offsetY - 40
  //   AgendaMouseShow(d, gShow, CX,CY)
      
  // })
  // .on("mouseout", function () {
  //   d3.select('.MouseLine').remove()
  //   d3.select('.circleText').remove()
  // })
  .on('click', function (e,d) {
    var showLine = gShow.append('line')
      .attr('class', 'MouseLine')
      .attr('x1', e.offsetX)
      .attr('y1', e.offsetY)
      .attr('x2', e.offsetX + 45)
      .attr('y2', e.offsetY - 40)
      .attr("stroke", 'rgb(207, 207, 207)')
      .attr('stroke-width', '2px')
    
    // 画圆
    var CX = e.offsetX + 45
    var CY = e.offsetY - 40
    AgendaMouseShow(d, gShow, CX,CY)
  })
  
  // 时间线
   TimeStage.append('line')
    .attr('x1', function (d,i) {
      return 0
    })
    .attr('y1', height * 0.05)
    .attr('x2', function (d,i) {
      return 0
    })
    .attr('y2', height)
    .style("stroke", "rgb(207, 207, 207)")
     .style("stroke-width", "1px")
    //  .style('opacity', 0.5)
    .style("stroke-dasharray", "10,10")
  
  // 时间标签
  TimeStage
    .append('text')
    .attr('x', -14)
    .attr('y', height * 0.05)
    .text(function (d) {
      return `${d.end}`
    })
    .attr('font-size', 12)
    .attr('fill', 'black')
  
  
  //team circle
  var config = {
    innerRadius: 0,
    outerRadius: 10,
  }
  var Cpie = d3
    .pie()
    .sort(null)
    .value(function(d) {
      return d.value; 
    })

  var colors_stu = d3.scaleOrdinal()
  .domain(['A', 'B', 'C', 'D'])
  .range(['#04c5f3', '#fcd300', '#ff6600', '#8085e9'])
  // const color = d3.schemeSet2
  // const color = ['#4285f4', '#DA70D6', '#FF6A6A', '#24a853']
  const color = ['#7898e1', '#9987ce', '#f89588', '#76da91']

  var arc1 = d3.arc()
    .padAngle(0.03)
    .innerRadius(config.outerRadius + 2)
    .outerRadius(config.outerRadius + 7);
  
  var arc = d3.arc()
    .innerRadius(config.innerRadius)
    .outerRadius(config.outerRadius);
  
  var TeamWord = d3
  .scaleLinear()
  .domain([0, 300])
    .range([8, 14]); 
    // .range([20, 30]); //test
  
  var arc_Total = d3.arc()

  CircleStage.selectAll("path")
    .data(function (d) {
      return Cpie(d.WordNum)
    })
    .join("path")
    .attr('fill', function (d, i) {
      return colors_stu(d.data.id);
    })
    .attr('d', function (d) {
      d.innerRadius = 0
      d.outerRadius = TeamWord(d.data.Total)
      let k = arc_Total(d);
      return k;
  })
    // .attr("d", arc1)
    .attr("transform", function(d,i) {
      return "translate(" + (0) + "," + (height * 0.9) + ")"
      // return "translate(" + (0) + "," + (height * 0.7) + ")"  //test
    })
    .style("cursor", "pointer")
  
  CircleStage.selectAll("path1")
    .data(function (d) {
      // console.log(d)
      return Cpie(d.agenda_rate)
    })
    .join("path")
    .attr('fill', function (d, i) {
      if (d.data.id == '-') {
        return '#CFCFCF'
      }
      else {
        return color[d.data.id];
      }
    })
    .attr('d', function (d) {
      d.innerRadius = TeamWord(d.data.Total) + 2
      d.outerRadius = TeamWord(d.data.Total) + 10
      // d.innerRadius = TeamWord(d.data.Total) + 2
      // d.outerRadius = TeamWord(d.data.Total) + 20  //test
      d.padAngle = 0.03
      // console.log(d)
      let k = arc_Total(d);
      return k;
  })
    // .attr("d", arc)
    .attr("transform", function(d,i) {
      return "translate(" + (0) + "," + (height * 0.9) + ")"
      // return "translate(" + (0) + "," + (height * 0.7) + ")" //test
    })
    .style("cursor", "pointer")
  
  var LineWidScale = d3.scaleLinear()
    .domain([0, 100])
    .range([4, 13])
  
  CircleStage
    .append('line')
    .attr('x1', function (d, i) {
      console.log(d)
        return (TeamWord(d.WordNum[0].Total)  + 10)  
    })
    .attr('y1', height * 0.9)
    .attr('x2', function (d, i) {
      if (i < TeamCircle.length - 1) {
          return (EW ) - (TeamWord(TeamCircle[i+1].WordNum[0].Total)  + 10)
      }
      else {
        return (EW - 5 ) 
      }   
    })
    .attr('y2', height * 0.9)
    .style("stroke", function (d, i) {
      if (i < TeamCircle.length - 1) {
        var Sub = TeamCircle[i + 1].WordNum[0].Total - TeamCircle[i].WordNum[0].Total
        if (Sub >= 0) {
          return '#B2DFEE'
        }
        else {
          return '#FFDAB9'
        }
      }
      else {
        return '#B2DFEE'
      }
    })
    .style("stroke-width", function (d, i) {
      if (i < TeamCircle.length - 1) {
        var Sub = Math.abs(TeamCircle[i + 1].WordNum[0].Total - TeamCircle[i].WordNum[0].Total)
        return LineWidScale(Sub)
      }
      else {
        return 2
      }
  })
  
  
  // TimeStage
  //   .append('line')
  //   .attr('x1', function (d,i) {
  //     return (config.outerRadius  + 7)
  //   })
  //   .attr('y1', height * 0.9)
  //   .attr('x2', function (d,i) {
  //     return (EW ) - (config.outerRadius  + 7)
  //   })
  //   .attr('y2', height * 0.9)
  //   .style("stroke", "#B2DFEE")
  //   .style("stroke-width", "1.5px")
  

}

export { AgendaM }

