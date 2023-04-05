import { AllGroup, AllLine } from "./GLV.js"
import { RadarChart } from "./RadarChart.js"

var ListHead = () => {
  const width = $('.ListHead').width()
  const height = $('.ListHead').height()

  var svg = d3.select('.listH')
  .attr('width', width)
    .attr('height', height)
  
  var svgH = svg.append('g')
  .attr('class','ListHead')

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
  .style("stroke", "#87CEEB")
  .style("stroke-width", "1px")
  .style("border-radius", "0.5rem")
    .style("fill", "none")

  
  svgH
    .append('line')
    .attr('x1', width * 0.275)
    .attr('y1', height * 0.1)
    .attr('x2', width * 0.275)
    .attr('y2', height * 0.98)
    .style("stroke", "#87CEEB")
    .style("stroke-width", "1px")
  
  svgH
    .append('line')
    .attr('x1', width * 0.9 + 4)
    .attr('y1', height * 0.1)
    .attr('x2', width * 0.9 + 4)
    .attr('y2', height * 0.98)
    .style("stroke", "#87CEEB")
  .style("stroke-width", "1px")

  svgH
    .append('text')
    .attr('x', width * 0.03)
    .attr('y', height / 1.5)
    .text('Summary')
    .attr('font-size', 18)
    .attr('fill', 'black')
  
  svgH
    .append('text')
    .attr('x', width * 0.4)
    .attr('y', height / 1.5)
    .text('Distribution')
    .attr('font-size', 18)
    .attr('fill', 'black')
  
  svgH
    .append('text')
    .attr('x', width * 0.85)
    .attr('y', height / 1.5)
    .text('Rank')
    .attr('font-size', 18)
    .attr('fill', 'black')

}

var GroupBox = () => {
  //组类别筛选
  var ESGroup = ['ES2002a', 'ES2003a', 'ES2004a','ES2005a', 'ES2006a', 'ES2007a', 
    'ES2008a', 'ES2009a', 'ES2010a', 'ES2011a', 'ES2012a', 'ES2013a', 'ES2014a',
    'ES2015a', 'ES2016a', ]

  const width = $(".groupSum").width()
  const height = $(".groupSum").height()
  var EW = width * 0.95
  var EH = height / 7 - 5

  var svg = d3.select('.GlyphList')
    .attr('width', width)
    .attr('height', height + EH * 1)
  
  // 每一行的高度坐标位置比例尺
  const GroupH = d3.scaleOrdinal()
    .domain(['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8'])
    .range([EH * 0, EH * 1, EH * 2, EH * 3, EH * 4, EH * 5, EH * 6, EH * 7]);

  var GroupV = svg.append('g')
    .attr('class', 'AllGroup')
    .attr("transform", function () {
      return "translate(" + 0 + "," + (5) + ")";
    });


  var GClip = GroupV.selectAll('.ATSV')
    .data(AllGroup)
    .enter()
    .append('g')
    // .attr('class', (i) => `Degree${i + 1}`)
    .attr("transform", function (d) {
      return "translate(" + 5 + "," + (GroupH(d.GroupName)) + ")";
    });

  var ETSC = GClip.selectAll('.ATSV')
    .data(function (d) {
      return d.GroupData
    })
    .enter()
    .append('g')
    .attr('class', (i) => `GClip${i + 1}`)

  ETSC.append('rect')
    .attr('x', function (d) {
      return width * 0.008
    })
    .attr('width', function (d) {
      return EW +12
    })
    .attr('height', EH - 5)
    .style("stroke", "#87CEEB")
    .style("stroke-width", "1px")
    .style("border-radius", "0.5rem")
    .style("fill", "none")
  .style('rx','5px')
  
  ETSC
    .append('line')
    .attr('x1', EW * 0.27)
    .attr('y1', EH * 0.01)
    .attr('x2', EW * 0.27)
    .attr('y2', EH * 0.95)
    .style("stroke", "#87CEEB")
    .style("stroke-width", "1px")
  
  ETSC
    .append('line')
    .attr('x1', EW * 0.9)
    .attr('y1', EH * 0.01)
    .attr('x2', EW * 0.9)
    .attr('y2', EH * 0.95)
    .style("stroke", "#87CEEB")
  .style("stroke-width", "1px")
  
  //draw all glyph
  var ASvg = svg.append('g')
    .attr('class', "GroupGlyph")
  
  // draw all line 
  var LSvg = svg.append('g')
  .attr('class','GroupLine')
  
  for (var item = 0; item < AllGroup.length; item++){
    var EGSVG = ASvg.append('g')
      .attr('class', `E${AllGroup[item].GroupName}`)
      .attr(
        'transform',
        'translate(' +
          ( EW * (0.01)) +
          ',' +
          ( EH * (item))+
          ')'
      )
      .style('width', EW * 0.4)
      .style('height', EH)
    
    Draw(EGSVG, item, EW, EH)

    // LINE
    var LineSVG = LSvg.append('g')
    .attr('class', `Line${AllLine[item].GroupID}`)
    .attr(
      'transform',
      'translate(' +
        ( EW * (0.29)) +
        ',' +
        ( EH * (item) + 18)+
        ')'
    )
    .style('width', EW * 0.48)
    .style('height', EH)

    var selectID = `Line${AllLine[item].GroupID}`
    DrawLine(selectID, item)
  }

}
var Draw = (svg, item,EW,EH) => {
  //eslint-disable-next-line
 

  const width = EW * 0.4
  const height = EH
    svg
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr('id',`svg_legend${item}`)
  var radarChartOptions = {
      w: width *0.9 ,//Width of the circle
      h: height * 0.9,
      x: width * 0.35,
      y: height/2 + 2,
      // x: height/2,
      // y: height/2,
      levels: 1,
      maxValue: 1,
      roundStrokes: false,
      dotRadius: 2,
      strokeWidth: 1,
      opacityArea: 0.25,
      labelFactor: 0.8,
      fontsize: '8px',
      color: d3.scaleOrdinal().range(['rgb(80, 80, 80)', "rgb(59, 119, 176)"]),
  };
  // var data = [
  //     {"name":"Mean","axes":[{"axis":"blur_focus","alias":"b","value":0.6,"quantile_25":0,"quantile_75":0,"mean":0,"median":0},{"axis":"copy_paste","alias":"c","value":0.33122762148337594,"quantile_25":0,"quantile_75":0,"mean":0,"median":0},{"axis":"no_face","alias":"f","value":0.38745436442084302,"quantile_25":0,"quantile_75":0,"mean":0,"median":0},{"axis":"headpose","alias":"h","value":0.43788819875776397,"quantile_25":0,"quantile_75":0,"mean":0,"median":0}],"color":"rgb(255, 127, 14)"},
  //     {"name":"Cheating","axes":[{"axis":"blur_focus","alias":"bf","value":0.5,"quantile_25":0.3,"quantile_75":0.9233333333333334,"mean":0.6,"median":0.55},{"axis":"copy_paste","alias":"cp","value":0.60588235294117646,"quantile_25":0.1,"quantile_75":0.5582352941176471,"mean":0.33122762148337594,"median":0.39411764705882353},{"axis":"no_face","alias":"nf","value":0.7,"quantile_25":0.157251908396946565,"quantile_75":0.8587786259541985,"mean":0.38745436442084302,"median":0.6717557251908396},{"axis":"headpose","alias":"hp","value":0.1,"quantile_25":0.24107142857142858,"quantile_75":0.5654761904761905,"mean":0.43788819875776397,"median":0.4226190476190476}],"color":"rgb(255, 127, 14)"}
      
  // ]
  var data = AllGroup[item].GroupData
  //eslint-disable-next-line
  var glyph = RadarChart(`#svg_legend${item}`, data, radarChartOptions, this, "")

  // 外层弧
  var arc = d3.arc()

  // d3.select(`#svg_legend${item}`).append('path')
  //     .attr('transform', 'translate('+[height/2-20, height/2-18]+')')
  //     .attr('d', ()=>arc({
  //             innerRadius: width/2,
  //             outerRadius: width/2+5,
  //             startAngle: 0,
  //             endAngle: Math.PI*2*0.7
  //         }))
  //     .style('fill', '#8dd3c7')
  //     .style('opacity', 0.8)
  //     // .style('stroke', 'pink')
  //     // .style('stroke-width', 1)
  
  d3.select(`#svg_legend${item}`).append('path')
      .attr('transform', 'translate('+[width * 0.35, height/2 + 2]+')')
      .attr('d', ()=>arc({
              innerRadius: height/3+6,
              outerRadius: height/3+11,
              startAngle: 0,
              endAngle: Math.PI*2*8/14
          }))
      .style('fill', '#fdb462')
      .style('opacity', 0.8)

  //标签线
  // var g_legend = d3.select(`#svg_legend${item}`).append('g')
  //                 .attr('transform', 'translate('+[height/2-20, height/2-18]+')')
  
  // // Legend of error bar
  // g_legend.append('path')
  //     .attr('d', "M0, -27.8L60, -27.8")
  //     .attr('stroke', "rgb(100,100,100)")

  // g_legend.append("text")
  //     .text('Quartile')
  //     .attr('x', 63)
  //     .attr('y', -25.5)
  //     .attr("font-size", "10px")
  //     .attr("fill", "rgb(100,100,100)");

  // g_legend.append('path')
  //     .attr('d', "M0, -16.5L60, -16.5")
  //     .attr('stroke', "rgb(100,100,100)")

  // g_legend.append("text")
  //     .text('Median')
  //     .attr('x', 63)
  //     .attr('y', -12.5)
  //     .attr("font-size", "10px")
  //     .attr("fill", "rgb(100,100,100)");

  // g_legend.append('path')
  //     .attr('d', "M0, -9L60, -9")
  //     .attr('stroke', "rgb(100,100,100)")

  // g_legend.append("text")
  //     .text('Quartile')
  //     .attr('x', 63)
  //     .attr('y', 0)
  //     .attr("font-size", "10px")
  //     .attr("fill", "rgb(100,100,100)");

  // g_legend.append('path')
  //     .attr('d', "M2, 18L60, 18")
  //     .attr('stroke', "rgb(59, 119, 176)")

  // g_legend.append("text")
  //     .text('Current Student')
  //     .attr('x', 63)
  //     .attr('y', 23)
  //     .attr("font-size", "10px")
  //     .attr("fill", "rgb(59, 119, 176)");

  // g_legend.append('path')
  //     .attr('d', "M-6, 5L60, 5")
  //     .attr('stroke', "rgb(100,100,100)")

  // g_legend.append("text")
  //     .text('Mean')
  //     .attr('x', 63)
  //     .attr('y', 11)
  //     .attr("font-size", "10px")
  //     .attr("fill", "rgb(100,100,100)");

  // g_legend.append('path')
  //     .attr('d', "M0, 32L60, 32")
  //     .attr('stroke', '#8dd3c7')

  // g_legend.append("text")
  //     .text('Time Length')
  //     .attr('x', 63)
  //     .attr('y', 34)
  //     .attr("font-size", "10px")
  //     .attr("fill", '#8dd3c7');

  // g_legend.append('path')
  //     .attr('d', "M0, 39L60, 39")
  //     .attr('stroke', '#fdb462')

  // g_legend.append("text")
  //     .text('Score')
  //     .attr('x', 63)
  //     .attr('y', 45)
  //     .attr("font-size", "10px")
  //     .attr("fill", '#fdb462');

  // g_legend.append("rect")
  //     .attr("x", -12)
  //     .attr("y", 18.5215978681898)
  //     .attr("width", 10)
  //     .attr("height", 10)
  //     .attr("fill", "none")
  //     .attr("stroke", "rgb(60,60,60)")

  // g_legend.append('path')
  //     .attr('d', "M-7, 28.52L-7, 47")
  //     .attr('stroke', "rgb(60,60,60)")

  // g_legend.append("text")
  //     .text('Suspicious Type: b (blur & focus), ')
  //     .attr('x', -40)
  //     .attr('y', 57)
  //     .attr("font-size", "10px")
  //     .attr("fill", "rgb(60,60,60)");
  // g_legend.append("text")
  //     .text("c (copy & paste), h (abnormal head")
  //     .attr('x', -40)
  //     .attr('y', 57)
  //     .attr('dy', '1.1em')
  //     .attr("font-size", "10px")
  //     .attr("fill", "rgb(60,60,60)");
  // g_legend.append("text")
  //     .text(" pose), f (face disappearance)")
  //     .attr('x', -40)
  //     .attr('y', 57)
  //     .attr('dy', '2.2em')
  //     .attr("font-size", "10px")
  //     .attr("fill", "rgb(60,60,60)");

}

var DrawLine = (selectID, item) => {
  console.log(selectID)

  var dataSet = AllLine[item].StageNum

  let chart = d3_rs_lines
    .html()
    .scale(0.6)
  // .fill(['red', 'red', 'red', 'red'])
  .axisDisplayIndex(false) //x-axis display
  .axisDisplayValue(false) //y-axis display
  // .fillStroke(false)
    .tickCountIndex(6) //number of ticks on the x-axis set to 2
  //   .tickCountValue(4)   //number of ticks on the y-axis set to
  // .legend(['Green', 'Purple', 'Aqua', 'red']) //add legend
  .legendOrientation('voronoi') //orientate legend
  .voronoiAttraction(-1.5);

  d3.select(`.${selectID}`).datum(dataSet).call(chart);

}

var GroupListM = () => {
  GroupBox()
  ListHead()
}
export { GroupListM }

