import { JRadarChart } from './D3RadarChart.js'
// import { GroupProjectT, plotXY } from "./PD.js"
import { GroupProjectT, plotXY } from "./PD2.js"


var GroupProject = () => {
  const width = $('.PBody').width()
  const height = $('.PBody').height()

  var X = d3.extent(GroupProjectT, function (d) {
    return d.pX
  })

  var Y = d3.extent(GroupProjectT, function (d) {
    return d.pY
  })

  var T = d3.extent(GroupProjectT, function (d) {
    return d.ToalVolume
  })

  var InteractionL = d3.extent(GroupProjectT, function (d) {
    return d.Interaction
  })

  var Time = d3.extent(GroupProjectT, function (d) {
    return d.AllTime
  })

  var Tmin = T[0]
  var Tmax = T[1]
  
  var Xmin = X[0]
  var Xmax = X[1]

  var Ymin = Y[0]
  var Ymax = Y[1]

  var Imin = InteractionL[0]
  var Imax = InteractionL[1]

  var Timemin = Time[0]
  var Timemax = Time[1]


  var scaleX = d3
    .scaleLinear()
    // .domain([Xmin, Xmax])
    // .domain([59.220393655315846, 838.3351443171508])
    .domain([33.02743463761582, 738.7371758013992 ]) //CASE 2
    .nice()
    .range([width * 0.1, width * 0.9]);
  
  var scaleY = d3
    .scaleLinear()
    // .domain([Ymin, Ymax])
    // .domain([2.491229947259264, 342.86166461146377])
    .domain([66.63080013608104, 341.1950545012833])  //CASE 2
    .nice() 
    .range([height * 0.08, height * 0.9]); 
  
  var RadiusScale = d3
    .scaleLinear()
    .domain([Tmin, Tmax])
    .nice() 
    .range([5, 25]); 
    // .range([50, 60]); 
  
  var ArcScale = d3
    .scaleLinear()
    .domain([0, 300])
    .nice() 
    .range([0, Math.PI * 2]); 
  
  var TimeScale = d3
    .scaleLinear()
    .domain([0, 1500])
    .nice() 
    .range([0, Math.PI * 2]); 
  
  var pieAgenda = d3
    .pie()
    .sort(null)
    .value(function(d) {
      return d.value; 
    });
  
  // var Agencolors = d3.schemeSet2
  // var Agencolors = ['#4285f4', '#DA70D6', '#FF6A6A', '#24a853']
  var Agencolors = ['#7898e1', '#9987ce', '#f89588', '#76da91']

  var arc_Total = d3.arc()



  var svg = d3.select(".GProject")
  .attr("width", width)
    .attr("height", height)
  
  var svg_lenged = svg.append('g')
    .attr('class', 'Lenged')
  
  // 添加图例
  // var lengedColors = ['#FFD700', '#7dc3fe', '#f89588', '#7898e1', '#9987ce','#76da91']
  // var lengedTitle = ['Duration', 'Interaction','Agenda_survival tools', 'Agenda_food', 'Agenda_cold proof',
  //  'Agenda_junk',
  // ] 
  var lengedColors = ['#FFD700', '#7dc3fe', '#7898e1', '#9987ce', '#f89588','#76da91']
  var lengedTitle = ['Duration', 'Interaction','Introduce name and profession', 'Draw favorite animal', 'Project finances selling prices',
   'Discussion remote controller features',
  ] //case 2
  // var lengedColors = ['#FFD700', '#7dc3fe', '#7898e1', '#9987ce', '#f89588','#76da91']
  // var lengedTitle = ['Duration', 'Interaction','Topic_food', 'Topic_cold proof', 'Topic_survival tools',
  //  'Topic_junk',
  // ] //case 1
  var HIG = height * 0.87
  var Lenged = svg_lenged.selectAll('alllenged')
    .data(lengedTitle)
    .enter()
    .append("g")
    // .attr("transform", function (d, i) {
    //   if (i < 3) {
    //     return "translate(" + (10) + "," + (HIG + i*15) + ")"
    //   }
    //   else {
    //     return "translate(" + (width * 0.7) + "," + (HIG + (i - 3)*15) + ")"
    //   }
    // }) //case 1
    .attr("transform", function (d, i) {
      if (i < 3) {
        return "translate(" + (10) + "," + (HIG + i*15) + ")"
      }
      else {
        return "translate(" + (width * 0.55) + "," + (HIG + (i - 3)*15) + ")"
      }
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
    .style("fill", function (d, i) {
      return lengedColors[i]
    })
  
  Lenged.append('text')
  .attr('x', 15)
  .attr('y', 9)
    .text(function (d, i) {
    return d
  })
  .attr('font-size', 10)
    .attr('fill', 'black')
  
        
  

  
  var gRadarCircle = svg.append("g").attr("class", "GroupProject")
    .attr('width', width)
      .attr('height',height) //一个小组
  var RadarG = svg.append("g").attr("class", "PRO") //一个小组
  
  var Ggroup = gRadarCircle
    .selectAll(".AllGroup")
    .data(GroupProjectT)
    .enter()
    .append("g") 
    .attr("class", function (d, i) {
      // if (i == 7) {
      //   return `T${i}`
      // }
      return `T${i}`
    })
    .attr("transform", function(d,i) {
      // return "translate(" + (scaleX(plotXY[i].x)) + "," + (scaleY(plotXY[i].y)) + ")"
      // return "translate(" + (plotXY[i].x) + "," + (plotXY[i].y) + ")" //case 1
      return "translate(" + (plotXY[i].x -200) + "," + (plotXY[i].y) + ")" //case 2
    })
  
    // 议题占比
  var gAgenda = Ggroup
    .selectAll(".ClickArc")
    .data(function (d) {
      let ctem = pieAgenda(d.agenda_rate)
      return ctem
    })
    .enter()
    .append("g")

  gAgenda.append("path")
    .attr("fill", function (d, i) {
      if (d.data.id == '-') {
        return '#CFCFCF'
      }
      else {
        return Agencolors[d.data.id];
      }
    })
    .attr("d", function (d) {
        d.innerRadius = RadiusScale(d.data.Total)
      d.outerRadius = RadiusScale(d.data.Total) + 7
      // d.outerRadius = RadiusScale(d.data.Total) + 15  //test
      d.padAngle = 0.01
      let k = arc_Total(d);
        return k;
    });
  
  // 交互量
  Ggroup.append('path')
      .attr("d", function (d) {
      return arc_Total({
                innerRadius: RadiusScale(d.ToalVolume) +7.5,
                outerRadius:  RadiusScale(d.ToalVolume) +10.5,
                // innerRadius: RadiusScale(d.ToalVolume) +16,  //test
                // outerRadius:  RadiusScale(d.ToalVolume) +21,
                startAngle: 0,
                endAngle: ArcScale(d.Interaction)
            })
    })
    .style('fill', '#7dc3fe')
    .style('opacity', 1)
  
   // 时间
   Ggroup.append('path')
   .attr("d", function (d) {
   return arc_Total({
             innerRadius: RadiusScale(d.ToalVolume) +11,
             outerRadius:  RadiusScale(d.ToalVolume) +14,
            // innerRadius: RadiusScale(d.ToalVolume) +22,
            //  outerRadius:  RadiusScale(d.ToalVolume) +27,
             startAngle: 0,
             endAngle: TimeScale(d.AllTime)
         })
 })
 .style('fill', '#FFD700')
 .style('opacity', 1)



  for (var i = 0; i < GroupProjectT.length; i++){
    var R = RadiusScale(GroupProjectT[i].ToalVolume)
    // if (i == 7) {
      // var data = GroupProjectT[i].Radar //case 1
      var data = [GroupProjectT[i].Radar] //CASE 2
      console.log(data)
      JRadarChart.generateChart(
        // '.GroupProject',
        // '.GroupProject',
        `.T${i}`,
        `.T${i}`,
        data,
        R,
        1
      );
    // }
    // var data = GroupProjectT[i].Radar
    // console.log(data)
    // JRadarChart.generateChart(
    //   // '.GProject',
    //   // '.GProject',
    //   `.T${i}`,
    //   `.T${i}`,
    //   data,
    //   1
    // );
  }
  
}


var ProjectionM = () => {
  GroupProject()
}

export { ProjectionM }

