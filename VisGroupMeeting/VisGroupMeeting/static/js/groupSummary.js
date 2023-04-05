import { GSummaryD } from "./GSummaryD.js"

var ListHead = () => {
  const width = $('.ListHead').width()
  const height = $('.ListHead').height()

  var svg = d3.select('.listH')
  .attr('width', width)
    .attr('height', height)
  
  var svg_lenged = svg.append('g')
  .attr('class', 'Lenged')
  
  var svgH = svg.append('g')
    .attr('class', 'ListHead')
  
  // var LenColors = ['#af7aa1', '#59a14f', '#ff9da7', '#edc949']
  var LenColors = ['#04c5f3', '#fcd300', '#ff6600', '#8085e9']
  // var LenColors = ['#009db2', '#5690dd', '#bd88f5', '#765005']
  
  // 添加图例
  var WID = width / 4
  var lengedTitle = ['Student A','Student B','Student C','Student D']
  var Lenged = svg_lenged.selectAll('alllenged')
    .data(lengedTitle)
    .enter()
    .append("g")
    .attr("transform", function(d,i) {
      return "translate(" + (WID * i + 20) + "," + (height * 0.28) + ")"
    })
  
  Lenged.append('rect')
    .attr('x', function (d) {
      return 0
    })
    .attr('width', function (d) {
      return 10
    })
    .attr('height', 10)
    .style("stroke", "#999999")
    .style("stroke-width", "0px")
    .style("border-radius", "0.5rem")
    .style("fill", function (d,i) {
      return LenColors[i]
    })
  
  Lenged.append('text')
  .attr('x', 15)
  .attr('y', height * 0.15)
    .text(function (d, i) {
    return d
  })
  .attr('font-size', 12)
  .attr('fill', 'black')


  svgH.append('rect')
  .attr('x', function (d) {
    return 0
  })
  .attr('width', function (d) {
    return width
  })
  .attr("transform", function (d) {
    return "translate(" + 0 + "," + (5) + ")";
  })
  .attr('height', height * 0.95)
  .style("stroke", "#999999")
  .style("stroke-width", "1px")
  .style("border-radius", "0.5rem")
    .style("fill", "none")

  
  // svgH
  //   .append('line')
  //   .attr('x1', width *  0.353)
  //   .attr('y1', height * 0.1)
  //   .attr('x2', width *  0.353)
  //   .attr('y2', height * 0.98)
  //   .style("stroke", "#CFCFCF")
  //   .style("stroke-width", "1px")
  
  // svgH
  //   .append('line')
  //   .attr('x1', width * 0.863)
  //   .attr('y1', height * 0.1)
  //   .attr('x2', width * 0.865)
  //   .attr('y2', height * 0.98)
  //   .style("stroke", "#CFCFCF")
  // .style("stroke-width", "1px")

  svgH
    .append('text')
    .attr('x', width * 0.08)
    .attr('y', height / 1.2)
    .text('Summary')
    .attr('font-size', 18)
    .attr('fill', 'black')
  
  svgH
    .append('text')
    .attr('x', width * 0.51)
    .attr('y', height / 1.2)
    // .text('Distribution')
    .text('Comparison')
    .attr('font-size', 18)
    .attr('fill', 'black')
  
  // svgH
  //   .append('text')
  //   .attr('x', width * 0.88)
  //   .attr('y', height / 1.2)
  //   .text('Rank')
  //   .attr('font-size', 18)
  //   .attr('fill', 'black')

}

var GroupBox = () => {
  //组类别筛选
  // var ESGroup = ['ELEA12','ES2002a', 'ES2003a', 'ES2004a','ES2005a', 'ES2006a', 'ES2007a', 
  //   'ES2008a', 'ES2009a', 'ES2010a', 'ES2011a', 'ES2012a', 'ES2013a', 'ES2014a',
  //   'ES2015a', 'ES2016a',]
  // var ESGroup = ['ES2011a','ES2002a', 'ES2008a', 'ES2004a','ELEA12', 'ES2006a', 'ES2007a', 
  //   'ES2003a', 'ES2009a', 'ES2010a', 'ES2005a', 'ES2012a', 'ES2013a', 'ES2014a',
  //   'ES2015a', 'ES2016a',]
  // var ESGroup = ['ES2002c','ES2002b', 'ES2008b', 'ES2004b','ES2011b', 'ES2006b', 'ES2007b', 
  //   'ES2003b', 'ES2009b', 'ES2010b', 'ES2005b', 'ES2012b', 'ES2013b', 'ES2014b',
  //   'ES2015b', 'ES2016b',] //case2
  // var ESGroup = ['TS3003a','TS3004a', 'TS3005a', 'TS3006a','TS3007a', 'TS3008a', 'TS3009a', 
  // 'TS3010a', 'TS3011a', 'TS3012a', 'TS3003b', 'TS3004b', 'TS3005b', 'TS3006b',
  // 'TS3007b', 'TS3008b']//case2
  // var ESGroup = ['IS1000a','IS1001a', 'IS1002a', 'IS1003a','IS1004a', 'IS1005a', 'IS1006a', 
  // 'IS1007a', 'IS1008a', 'IS1009a', 'TS3003a', 'TS3004a', 'TS3005a', 'TS3006a',
  //   'TS3007a', 'TS3008a']//case2
  
  // newversion
  // var ESGroup = ['ES2011a','TS3005a', 'ES2008a', 'TS3003a','ELEA12', 'ES2007a','ES2006a',  
  // 'ES2009a','ES2003a',  'ES2010a', 'ES2005a', 'ES2012a', 'ES2013a', 'ES2014a',
  //   'ES2015a', 'ES2016a',] //case 1
  var ESGroup = ['IS1001a', 'ES2002a', 'ES2004a','IS1000a','TS3005a', 'IS1005a', 'IS1006a', 
  'IS1007a', 'IS1008a', 'IS1009a', 'TS3003a', 'TS3004a', 'IS1004a', 'TS3006a',
    'TS3007a', 'TS3008a']//case2
  var GData = []
  
  for (var i = 0; i < ESGroup.length; i++){
    var name = ESGroup[i]
    for (var j = 0; j < GSummaryD.length; j++){
      if (GSummaryD[j].GroupID == name) {
        let idx = { "idx": j }
        let Mitem = Object.assign(idx, GSummaryD[j])
        GData.push(Mitem)
        break
      }
    }
  }

  // console.log(GData)


  const width = $(".groupSum").width()
  const height = $(".groupSum").height()
  var EW = width * 0.95
  var EH = height / 7 - 5

  var svg = d3.select('.GlyphList')
    .attr('width', width)
    .attr('height', height + EH * (ESGroup.length - 7))
  
  // 每一行的高度坐标位置比例尺
  const GroupH = d3.scaleOrdinal()
    // .domain([0, ESGroup.length])
    // .domain(['ELEA12','ES2002a', 'ES2003a', 'ES2004a','ES2005a', 'ES2006a', 'ES2007a', 
    // 'ES2008a', 'ES2009a', 'ES2010a', 'ES2011a', 'ES2012a', 'ES2013a', 'ES2014a',
    //   'ES2015a', 'ES2016a',])
    // .domain(['ES2011a','ES2002a', 'ES2008a', 'ES2004a','ELEA12', 'ES2006a', 'ES2007a', 
    //   'ES2003a', 'ES2009a', 'ES2010a', 'ES2005a', 'ES2012a', 'ES2013a', 'ES2014a',
    //   'ES2015a', 'ES2016a',])
    // .domain(['ES2002c','ES2002b', 'ES2008b', 'ES2004b','ES2011b', 'ES2006b', 'ES2007b', 
    // 'ES2003b', 'ES2009b', 'ES2010b', 'ES2005b', 'ES2012b', 'ES2013b', 'ES2014b',
    // 'ES2015b', 'ES2016b']) //case2
    // .domain(['TS3003a','TS3004a', 'TS3005a', 'TS3006a','TS3007a', 'TS3008a', 'TS3009a', 
    // 'TS3010a', 'TS3011a', 'TS3012a', 'TS3003b', 'TS3004b', 'TS3005b', 'TS3006b',
    // 'TS3007b', 'TS3008b']) //case2
    // .domain(['IS1000a','IS1001a', 'IS1002a', 'IS1003a','IS1004a', 'IS1005a', 'IS1006a', 
    // 'IS1007a', 'IS1008a', 'IS1009a', 'TS3003a', 'TS3004a', 'TS3005a', 'TS3006a',
    //   'TS3007a', 'TS3008a']) //case2
    // newverison
    // .domain(['ES2011a','TS3005a', 'ES2008a', 'TS3003a','ELEA12', 'ES2007a','ES2006a',  
    // 'ES2009a','ES2003a',  'ES2010a', 'ES2005a', 'ES2012a', 'ES2013a', 'ES2014a',
    //   'ES2015a', 'ES2016a',]) //case 1
    .domain(['IS1001a', 'ES2002a', 'ES2004a','IS1000a','TS3005a', 'IS1005a', 'IS1006a', 
    'IS1007a', 'IS1008a', 'IS1009a', 'TS3003a', 'TS3004a', 'IS1004a', 'TS3006a',
      'TS3007a', 'TS3008a']) //case 2

    .range([EH * 0, EH * 1, EH * 2, EH * 3, EH * 4, EH * 5, EH * 6, EH * 7,
      EH * 8, EH * 9, EH * 10, EH * 11, EH * 12, EH * 13, EH * 14, EH * 15]);

  var GroupV = svg.append('g')
    .attr('class', 'AllGroup')
    .attr("transform", function () {
      return "translate(" + 0 + "," + (5) + ")";
    });


  var GClip = GroupV.selectAll('.ATSV')
    .data(GData)
    .enter()
    .append('g')
    .attr("transform", function (d, i) {
      return "translate(" + 5 + "," + (GroupH(i)) + ")";
    });

  var ETSC = GClip.selectAll('.ATSV')
    .data(function (d) {
      return d.GroupID
    })
    .enter()
    .append('g')
    .attr('class', (i) => `GClip${i + 1}`)

  ETSC.append('rect')
    .attr('x', function (d) {
      return width * 0.008
    })
    .attr('width', function (d) {
      return EW +10
    })
    .attr('height', EH - 5)
    .style("stroke", "#CFCFCF")
    .style("stroke-width", "1px")
    .style("fill", "none")
    .style('rx', 8)
  .style('box-shadow','3 3 2px #CFCFCF')
  
  ETSC
    .append('line')
    .attr('x1', EW * 0.36 + 11)
    .attr('y1', EH * 0.01)
    .attr('x2', EW * 0.36 + 11)
    .attr('y2', EH * 0.95)
    .style("stroke", "#CFCFCF")
    .style("stroke-width", "1px")
  
  // ETSC
  //   .append('line')
  //   .attr('x1', EW * 0.9)
  //   .attr('y1', EH * 0.01)
  //   .attr('x2', EW * 0.9)
  //   .attr('y2', EH * 0.95)
  //   .style("stroke", "#CFCFCF")
  // .style("stroke-width", "1px")
  
  //draw all Spiral
  var ASvg = svg.append('g')
    .attr('class', "GroupGlyph")
  
  // draw all line 
  var LSvg = svg.append('g')
  .attr('class','GroupLine')
  
  for (var item = 0; item < GData.length; item++){

      var EGSVG = ASvg.append('g')
      .attr('class', `E${GData[item].GroupID}`)
      // .attr(
      //   'transform',
      //   'translate(' +
      //     ( EW * (0.05)+ 65) +
      //     ',' +
      //     ( EH * (item) + 85)+
      //     ')'
      // )  //case 1高度
      .attr(
        'transform',
        'translate(' +
          ( EW * (0.05)+ 65) +
          ',' +
          ( EH * (item) + 80)+
          ')'
      )
      .style('width', EW * 0.45)
      .style('height', EH)
    
    // if (item == 0) {
      Draw(EGSVG, GData[item].idx, EW, EH)
    // }
    
    // Draw(EGSVG, GData[item].idx, EW, EH)

    // LINE
    var LineSVG = LSvg.append('g')
    .attr('class', `Line${GData[item].GroupID}`)
    .attr(
      'transform',
      'translate(' +
        ( EW * (0.38) + 10) +
        ',' +
        ( EH * (item) + 23)+
        ')'
    )
    .style('width', EW * 0.43)
    .style('height', EH)

    var selectID = `Line${GData[item].GroupID}`
    DrawLine(selectID, GData[item].idx)
  }

}
var Draw = (svg, item,EW,EH) => {
  //eslint-disable-next-line
 
  var ESD = GSummaryD[item].Spiral
  var LEN = GSummaryD[item].LineD[0].AllTime
  const width = EW * 0.4
  const height = EH

  var SpiraLen = d3.scaleLinear()
    .domain([0, 2600])
  .range([0.5, 2.8])

  svg
    .append("g")
    .attr("width", width)
    .attr("height", height)
    .attr('id', `svg_legend${item}`)
    // .attr('transform', 'translate(' + 60 + ',' + 75 + ')');
  
  
  var start = 0,
    // end = 2,
    end = SpiraLen(LEN),
    numSpirals = 3;

  var theta = function (r) {
    return numSpirals * Math.PI * r;
  };
  
  // used to assign nodes color by group
  // var color = d3.scaleOrdinal(d3.schemeCategory10);

  var color = d3.scaleOrdinal()
    .domain(['A', 'B', 'C', 'D'])
    // .range(['#af7aa1', '#59a14f', '#ff9da7', '#edc949'])
   .range(['#04c5f3', '#fcd300', '#ff6600', '#8085e9'])
  // .range(['#009db2', '#5690dd', '#bd88f5', '#765005'])
  
  var r = d3.min([width, height]) / 2 ;
  // var r = d3.min([width, height]) / 1.5  ;
  
  var radius = d3.scaleLinear().domain([start, end]).range([20, r]);
  // var radius = d3.scaleLinear().domain([start, end]).range([30, r]);
  
  var points = d3.range(start, end + 0.001, (end - start) / 1000);
  
  var spiral = d3
    .radialLine()
    .curve(d3.curveCardinal)
    .angle(theta)
    .radius(radius);
  
  var path = svg
    .append('path')
    .datum(points)
    .attr('id', 'spiral')
    .attr('d', spiral)
    .style('fill', 'none')
    .style('stroke', 'steelblue');
  
  var spiralLength = path.node().getTotalLength(),
    N = ESD.length,
    // barWidth = spiralLength / N - 1 - 2;
    barWidth = 2.5;
  
  
  path
    .attr('stroke-dasharray', spiralLength + ' ' + spiralLength)
    .attr('stroke-dashoffset', spiralLength)
    .attr('stroke-dashoffset', 0);
  
  var timeScale = d3
    .scaleTime()
    .domain(
      d3.extent(ESD, function (d) {
        return d.id;
      })
    )
    .range([0, spiralLength]);
  
  // yScale for the bar height
  var yScale = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(ESD, function (d) {
        return d.value;
      }),
    ])
    .range([2.5, r / numSpirals - 5]); //直方图的高度
  
  svg
    .selectAll('rect')
    .data(ESD)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
      var linePer = timeScale(d.id + 1),
        posOnLine = path.node().getPointAtLength(linePer),
        angleOnLine = path.node().getPointAtLength(linePer - barWidth);
  
      d.linePer = linePer; // % distance are on the spiral
      d.x = posOnLine.x; // x postion on the spiral
      d.y = posOnLine.y; // y position on the spiral
  
      d.a = (Math.atan2(angleOnLine.y, angleOnLine.x) * 180) / Math.PI - 90; //angle at the spiral position
  
      return d.x;
    })
    .attr('y', function (d) {
      return d.y;
    })
    .attr('width', function (d) {
      return barWidth;
    })
    .attr('height', function (d) {
      return yScale(0);
    })
    .style('fill', function (d) {
      return color(d.role);
    })
    .style('stroke', 'none')
    .style('rx', 3)
    .attr('transform', function (d) {
      return 'rotate(' + d.a + ',' + d.x + ',' + d.y + ')'; // rotate the bar
    });
  
  svg.selectAll('rect').attr('height', function (d) {
    return yScale(d.value);
  });
  
  // add role labels
  var firstInMonth = {}
  svg
    .selectAll('text')
    .data(ESD)
    .enter()
    .append('text')
    .attr('dy', 10)
    .style('text-anchor', 'start')
    .style('font', '10px arial')
    .append('textPath')
    // only add for the first of each month
    .filter(function (d) {
      var sd = d.role;
      if (!firstInMonth[sd]) {
        firstInMonth[sd] = 1;
        return true;
      }
      return false;
    })
    .text(function (d) {
      return d.role;
    })
    // place text along spiral
    .attr('xlink:href', '#spiral')
    .style('fill', 'grey')
    .attr('startOffset', function (d) {
      return (d.linePer / spiralLength) * 100 + '%';
    });
  
  var tooltip = d3.select(".groupSum").append('div').attr('class', 'tooltip');
  
  tooltip.append('div').attr('class', 'date');
  tooltip.append('div').attr('class', 'value');
  
  svg
    .selectAll('rect')
    .on('mouseover', function (d,i) {
      tooltip.select('.date').html('TimeID: <b>' + i.id + '</b>');
      tooltip.select('.value').html('SpeechVolume: <b>' + i.value + '<b>');
  
      d3.select(this)
        .style('fill', 'none')
        .style('stroke', '#000000')
        .style('stroke-width', '1px');
  
      tooltip.style('display', 'block');
      tooltip.style('opacity', 2);
    })
    .on('mousemove', function (d) {
      // console.log(d)
      tooltip
        .style('top', d.layerY + 10 + 'px')
        .style('left', d.layerX - 25 + 'px');
    })
    .on('mouseout', function (d,i) {
      d3.select(this)
        .style('fill', function (d) {
          // console.log(d,i)
          return color(i.role);
        })
        .style('stroke', 'none');
  
      tooltip.style('display', 'none');
      tooltip.style('opacity', 0);
      // d3.select('.date').remove()
      // d3.select('.value').remove()
    });

}

var DrawLine = (selectID, item) => {
  var StageNum = []
  for (var i = 1; i < GSummaryD[item].LineD.length; i++){
    StageNum.push(GSummaryD[item].LineD[i])
  }
  var dataSet = StageNum

  let chart = d3_rs_lines
    .html()
    .scale(0.65)
  .fill(['#04c5f3', '#fcd300', '#ff6600', '#8085e9'])
    // .fill(['#af7aa1', '#59a14f', '#ff9da7', '#edc949'])
  .axisDisplayIndex(false) //x-axis display
  .axisDisplayValue(false) //y-axis display
  // .fillStroke(false)
    .tickCountIndex(6) //number of ticks on the x-axis set to 2
  //   .tickCountValue(4)   //number of ticks on the y-axis set to
  .legend(['A', 'B', 'C', 'D']) //add legend
  .legendOrientation('voronoi') //orientate legend
  .voronoiAttraction(-1.5);

  d3.select(`.${selectID}`).datum(dataSet).call(chart);

}

var GroupListM = () => {
  GroupBox()
  ListHead()
}
export { GroupListM }

