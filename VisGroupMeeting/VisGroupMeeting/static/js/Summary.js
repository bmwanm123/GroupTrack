
 //多组概览视图
console.log("进来了")
GroupSummaryView = (function() {
  console.log("调用了")
  var margin = {top: 20, right: 20, bottom: 10, left: 20}
  const width1 = $('.groupSum').width()
  const height1 = $('.groupSum').height()
  var width = width1 - margin.left 
  var height = height1 - margin.top + 50
  var eachight = height / 15 - 5

  // 每一行的高度坐标位置比例尺
  var y = d3.scaleOrdinal()
      .domain(['Question 1','Question 2','Question 3','Question 4','Question 5','Question 6','Question 7','Question 8',
      'Question 9','Question 10','Question 11','Question 12','Question 13','Question 14','Question 15'])
      .range([eachight*1, eachight*2, eachight*3, eachight*4, eachight*5, eachight*6, eachight*7, eachight*8,
      eachight*9, eachight*10, eachight*11, eachight*12, eachight*13, eachight*14, eachight*15]);

  // 横坐标比例尺
  var x = d3.scaleLinear()
      .rangeRound([40, width]);

  var color = d3.scaleOrdinal()
      .range(["#fc8d62", "#af7aa1", "#59a14f", "#ff9da7", "#edc949"]);

  var xAxis = d3.axisTop(x)
              
                  

  var yAxis = d3.axisLeft(y)

  var svg = d3.select(".multi")
      .attr("width", width)
      .attr("height", height)
      .attr("id", "d3-plot")
  .append("g")

//   color.domain(["Strongly disagree", "Disagree", "Neither agree nor disagree", "Agree", "Strongly agree"]);
  color.domain(["Interactions","A Speeches", "B Speeches", "C Speeches", "D Speeches"]);

//   var data = [
//       {
//           "1": "24",
//           "2": "294",
//           "3": "594",
//           "4": "1927",
//           "5": "376",
//           "Question": "Question 1",
//           "N": "3215",
//           "Strongly disagree": 0.7465007776049767,
//           "Disagree": 9.144634525660964,
//           "Neither agree nor disagree": 18.475894245723172,
//           "Agree": 59.93779160186625,
//           "Strongly agree": 11.695178849144634,
//           "boxes": [
//               {
//                   "name": "Strongly disagree",
//                   "x0": -19.129082426127525,
//                   "x1": -18.38258164852255,
//                   "N": 3215,
//                   "n": 24
//               },
//               {
//                   "name": "Disagree",
//                   "x0": -18.38258164852255,
//                   "x1": -9.237947122861586,
//                   "N": 3215,
//                   "n": 294
//               },
//               {
//                   "name": "Neither agree nor disagree",
//                   "x0": -9.237947122861586,
//                   "x1": 9.237947122861586,
//                   "N": 3215,
//                   "n": 594
//               },
//               {
//                   "name": "Agree",
//                   "x0": 9.237947122861586,
//                   "x1": 69.17573872472784,
//                   "N": 3215,
//                   "n": 1927
//               },
//               {
//                   "name": "Strongly agree",
//                   "x0": 69.17573872472784,
//                   "x1": 80.87091757387248,
//                   "N": 3215,
//                   "n": 376
//               }
//           ]
//       },
//       {
//           "1": "2",
//           "2": "2",
//           "3": "0",
//           "4": "7",
//           "5": "0",
//           "Question": "Question 2",
//           "N": "11",
//           "Strongly disagree": 18.181818181818183,
//           "Disagree": 18.181818181818183,
//           "Neither agree nor disagree": 0,
//           "Agree": 63.63636363636363,
//           "Strongly agree": 0,
//           "boxes": [
//               {
//                   "name": "Strongly disagree",
//                   "x0": -36.36363636363637,
//                   "x1": -18.181818181818183,
//                   "N": 11,
//                   "n": 2
//               },
//               {
//                   "name": "Disagree",
//                   "x0": -18.181818181818183,
//                   "x1": 0,
//                   "N": 11,
//                   "n": 2
//               },
//               {
//                   "name": "Neither agree nor disagree",
//                   "x0": 0,
//                   "x1": 0,
//                   "N": 11,
//                   "n": 0
//               },
//               {
//                   "name": "Agree",
//                   "x0": 0,
//                   "x1": 63.63636363636363,
//                   "N": 11,
//                   "n": 7
//               },
//               {
//                   "name": "Strongly agree",
//                   "x0": 63.63636363636363,
//                   "x1": 63.63636363636363,
//                   "N": 11,
//                   "n": 0
//               }
//           ]
//       },
//       {
//           "1": "2",
//           "2": "0",
//           "3": "2",
//           "4": "4",
//           "5": "2",
//           "Question": "Question 3",
//           "N": "10",
//           "Strongly disagree": 20,
//           "Disagree": 0,
//           "Neither agree nor disagree": 20,
//           "Agree": 40,
//           "Strongly agree": 20,
//           "boxes": [
//               {
//                   "name": "Strongly disagree",
//                   "x0": -30,
//                   "x1": -10,
//                   "N": 10,
//                   "n": 2
//               },
//               {
//                   "name": "Disagree",
//                   "x0": -10,
//                   "x1": -10,
//                   "N": 10,
//                   "n": 0
//               },
//               {
//                   "name": "Neither agree nor disagree",
//                   "x0": -10,
//                   "x1": 10,
//                   "N": 10,
//                   "n": 2
//               },
//               {
//                   "name": "Agree",
//                   "x0": 10,
//                   "x1": 50,
//                   "N": 10,
//                   "n": 4
//               },
//               {
//                   "name": "Strongly agree",
//                   "x0": 50,
//                   "x1": 70,
//                   "N": 10,
//                   "n": 2
//               }
//           ]
//       },
//       {
//           "1": "0",
//           "2": "2",
//           "3": "1",
//           "4": "7",
//           "5": "6",
//           "Question": "Question 4",
//           "N": "16",
//           "Strongly disagree": 0,
//           "Disagree": 12.5,
//           "Neither agree nor disagree": 6.25,
//           "Agree": 43.75,
//           "Strongly agree": 37.5,
//           "boxes": [
//               {
//                   "name": "Strongly disagree",
//                   "x0": -15.625,
//                   "x1": -15.625,
//                   "N": 16,
//                   "n": 0
//               },
//               {
//                   "name": "Disagree",
//                   "x0": -15.625,
//                   "x1": -3.125,
//                   "N": 16,
//                   "n": 2
//               },
//               {
//                   "name": "Neither agree nor disagree",
//                   "x0": -3.125,
//                   "x1": 3.125,
//                   "N": 16,
//                   "n": 1
//               },
//               {
//                   "name": "Agree",
//                   "x0": 3.125,
//                   "x1": 46.875,
//                   "N": 16,
//                   "n": 7
//               },
//               {
//                   "name": "Strongly agree",
//                   "x0": 46.875,
//                   "x1": 84.375,
//                   "N": 16,
//                   "n": 6
//               }
//           ]
//       },
//       {
//           "1": "0",
//           "2": "1",
//           "3": "3",
//           "4": "16",
//           "5": "4",
//           "Question": "Question 5",
//           "N": "24",
//           "Strongly disagree": 0,
//           "Disagree": 4.166666666666667,
//           "Neither agree nor disagree": 12.5,
//           "Agree": 66.66666666666667,
//           "Strongly agree": 16.666666666666668,
//           "boxes": [
//               {
//                   "name": "Strongly disagree",
//                   "x0": -10.416666666666668,
//                   "x1": -10.416666666666668,
//                   "N": 24,
//                   "n": 0
//               },
//               {
//                   "name": "Disagree",
//                   "x0": -10.416666666666668,
//                   "x1": -6.250000000000001,
//                   "N": 24,
//                   "n": 1
//               },
//               {
//                   "name": "Neither agree nor disagree",
//                   "x0": -6.250000000000001,
//                   "x1": 6.249999999999999,
//                   "N": 24,
//                   "n": 3
//               },
//               {
//                   "name": "Agree",
//                   "x0": 6.249999999999999,
//                   "x1": 72.91666666666667,
//                   "N": 24,
//                   "n": 16
//               },
//               {
//                   "name": "Strongly agree",
//                   "x0": 72.91666666666667,
//                   "x1": 89.58333333333334,
//                   "N": 24,
//                   "n": 4
//               }
//           ]
//       },
//       {
//           "1": "1",
//           "2": "1",
//           "3": "2",
//           "4": "9",
//           "5": "3",
//           "Question": "Question 6",
//           "N": "16",
//           "Strongly disagree": 6.25,
//           "Disagree": 6.25,
//           "Neither agree nor disagree": 12.5,
//           "Agree": 56.25,
//           "Strongly agree": 18.75,
//           "boxes": [
//               {
//                   "name": "Strongly disagree",
//                   "x0": -18.75,
//                   "x1": -12.5,
//                   "N": 16,
//                   "n": 1
//               },
//               {
//                   "name": "Disagree",
//                   "x0": -12.5,
//                   "x1": -6.25,
//                   "N": 16,
//                   "n": 1
//               },
//               {
//                   "name": "Neither agree nor disagree",
//                   "x0": -6.25,
//                   "x1": 6.25,
//                   "N": 16,
//                   "n": 2
//               },
//               {
//                   "name": "Agree",
//                   "x0": 6.25,
//                   "x1": 62.5,
//                   "N": 16,
//                   "n": 9
//               },
//               {
//                   "name": "Strongly agree",
//                   "x0": 62.5,
//                   "x1": 81.25,
//                   "N": 16,
//                   "n": 3
//               }
//           ]
//       },
//       {
//           "1": "0",
//           "2": "0",
//           "3": "1",
//           "4": "4",
//           "5": "0",
//           "Question": "Question 7",
//           "N": "5",
//           "Strongly disagree": 0,
//           "Disagree": 0,
//           "Neither agree nor disagree": 20,
//           "Agree": 80,
//           "Strongly agree": 0,
//           "boxes": [
//               {
//                   "name": "Strongly disagree",
//                   "x0": -10,
//                   "x1": -10,
//                   "N": 5,
//                   "n": 0
//               },
//               {
//                   "name": "Disagree",
//                   "x0": -10,
//                   "x1": -10,
//                   "N": 5,
//                   "n": 0
//               },
//               {
//                   "name": "Neither agree nor disagree",
//                   "x0": -10,
//                   "x1": 10,
//                   "N": 5,
//                   "n": 1
//               },
//               {
//                   "name": "Agree",
//                   "x0": 10,
//                   "x1": 90,
//                   "N": 5,
//                   "n": 4
//               },
//               {
//                   "name": "Strongly agree",
//                   "x0": 90,
//                   "x1": 90,
//                   "N": 5,
//                   "n": 0
//               }
//           ]
//       },
//       {
//           "1": "0",
//           "2": "0",
//           "3": "0",
//           "4": "0",
//           "5": "2",
//           "Question": "Question 8",
//           "N": "2",
//           "Strongly disagree": 0,
//           "Disagree": 0,
//           "Neither agree nor disagree": 0,
//           "Agree": 0,
//           "Strongly agree": 100,
//           "boxes": [
//               {
//                   "name": "Strongly disagree",
//                   "x0": 0,
//                   "x1": 0,
//                   "N": 2,
//                   "n": 0
//               },
//               {
//                   "name": "Disagree",
//                   "x0": 0,
//                   "x1": 0,
//                   "N": 2,
//                   "n": 0
//               },
//               {
//                   "name": "Neither agree nor disagree",
//                   "x0": 0,
//                   "x1": 0,
//                   "N": 2,
//                   "n": 0
//               },
//               {
//                   "name": "Agree",
//                   "x0": 0,
//                   "x1": 0,
//                   "N": 2,
//                   "n": 0
//               },
//               {
//                   "name": "Strongly agree",
//                   "x0": 0,
//                   "x1": 100,
//                   "N": 2,
//                   "n": 2
//               }
//           ]
//       },
//       // ddd
//       {
//           "1": "2",
//           "2": "2",
//           "3": "0",
//           "4": "7",
//           "5": "0",
//           "Question": "Question 9",
//           "N": "11",
//           "Strongly disagree": 18.181818181818183,
//           "Disagree": 18.181818181818183,
//           "Neither agree nor disagree": 0,
//           "Agree": 63.63636363636363,
//           "Strongly agree": 0,
//           "boxes": [
//               {
//                   "name": "Strongly disagree",
//                   "x0": -36.36363636363637,
//                   "x1": -18.181818181818183,
//                   "N": 11,
//                   "n": 2
//               },
//               {
//                   "name": "Disagree",
//                   "x0": -18.181818181818183,
//                   "x1": 0,
//                   "N": 11,
//                   "n": 2
//               },
//               {
//                   "name": "Neither agree nor disagree",
//                   "x0": 0,
//                   "x1": 0,
//                   "N": 11,
//                   "n": 0
//               },
//               {
//                   "name": "Agree",
//                   "x0": 0,
//                   "x1": 63.63636363636363,
//                   "N": 11,
//                   "n": 7
//               },
//               {
//                   "name": "Strongly agree",
//                   "x0": 63.63636363636363,
//                   "x1": 63.63636363636363,
//                   "N": 11,
//                   "n": 0
//               }
//           ]
//       },
//       {
//           "1": "2",
//           "2": "0",
//           "3": "2",
//           "4": "4",
//           "5": "2",
//           "Question": "Question 10",
//           "N": "10",
//           "Strongly disagree": 20,
//           "Disagree": 0,
//           "Neither agree nor disagree": 20,
//           "Agree": 40,
//           "Strongly agree": 20,
//           "boxes": [
//               {
//                   "name": "Strongly disagree",
//                   "x0": -30,
//                   "x1": -10,
//                   "N": 10,
//                   "n": 2
//               },
//               {
//                   "name": "Disagree",
//                   "x0": -10,
//                   "x1": -10,
//                   "N": 10,
//                   "n": 0
//               },
//               {
//                   "name": "Neither agree nor disagree",
//                   "x0": -10,
//                   "x1": 10,
//                   "N": 10,
//                   "n": 2
//               },
//               {
//                   "name": "Agree",
//                   "x0": 10,
//                   "x1": 50,
//                   "N": 10,
//                   "n": 4
//               },
//               {
//                   "name": "Strongly agree",
//                   "x0": 50,
//                   "x1": 70,
//                   "N": 10,
//                   "n": 2
//               }
//           ]
//       },
//       {
//           "1": "0",
//           "2": "2",
//           "3": "1",
//           "4": "7",
//           "5": "6",
//           "Question": "Question 11",
//           "N": "16",
//           "Strongly disagree": 0,
//           "Disagree": 12.5,
//           "Neither agree nor disagree": 6.25,
//           "Agree": 43.75,
//           "Strongly agree": 37.5,
//           "boxes": [
//               {
//                   "name": "Strongly disagree",
//                   "x0": -15.625,
//                   "x1": -15.625,
//                   "N": 16,
//                   "n": 0
//               },
//               {
//                   "name": "Disagree",
//                   "x0": -15.625,
//                   "x1": -3.125,
//                   "N": 16,
//                   "n": 2
//               },
//               {
//                   "name": "Neither agree nor disagree",
//                   "x0": -3.125,
//                   "x1": 3.125,
//                   "N": 16,
//                   "n": 1
//               },
//               {
//                   "name": "Agree",
//                   "x0": 3.125,
//                   "x1": 46.875,
//                   "N": 16,
//                   "n": 7
//               },
//               {
//                   "name": "Strongly agree",
//                   "x0": 46.875,
//                   "x1": 84.375,
//                   "N": 16,
//                   "n": 6
//               }
//           ]
//       },
//       {
//           "1": "0",
//           "2": "1",
//           "3": "3",
//           "4": "16",
//           "5": "4",
//           "Question": "Question 12",
//           "N": "24",
//           "Strongly disagree": 0,
//           "Disagree": 4.166666666666667,
//           "Neither agree nor disagree": 12.5,
//           "Agree": 66.66666666666667,
//           "Strongly agree": 16.666666666666668,
//           "boxes": [
//               {
//                   "name": "Strongly disagree",
//                   "x0": -10.416666666666668,
//                   "x1": -10.416666666666668,
//                   "N": 24,
//                   "n": 0
//               },
//               {
//                   "name": "Disagree",
//                   "x0": -10.416666666666668,
//                   "x1": -6.250000000000001,
//                   "N": 24,
//                   "n": 1
//               },
//               {
//                   "name": "Neither agree nor disagree",
//                   "x0": -6.250000000000001,
//                   "x1": 6.249999999999999,
//                   "N": 24,
//                   "n": 3
//               },
//               {
//                   "name": "Agree",
//                   "x0": 6.249999999999999,
//                   "x1": 72.91666666666667,
//                   "N": 24,
//                   "n": 16
//               },
//               {
//                   "name": "Strongly agree",
//                   "x0": 72.91666666666667,
//                   "x1": 89.58333333333334,
//                   "N": 24,
//                   "n": 4
//               }
//           ]
//       },
//       {
//           "1": "1",
//           "2": "1",
//           "3": "2",
//           "4": "9",
//           "5": "3",
//           "Question": "Question 13",
//           "N": "16",
//           "Strongly disagree": 6.25,
//           "Disagree": 6.25,
//           "Neither agree nor disagree": 12.5,
//           "Agree": 56.25,
//           "Strongly agree": 18.75,
//           "boxes": [
//               {
//                   "name": "Strongly disagree",
//                   "x0": -18.75,
//                   "x1": -12.5,
//                   "N": 16,
//                   "n": 1
//               },
//               {
//                   "name": "Disagree",
//                   "x0": -12.5,
//                   "x1": -6.25,
//                   "N": 16,
//                   "n": 1
//               },
//               {
//                   "name": "Neither agree nor disagree",
//                   "x0": -6.25,
//                   "x1": 6.25,
//                   "N": 16,
//                   "n": 2
//               },
//               {
//                   "name": "Agree",
//                   "x0": 6.25,
//                   "x1": 62.5,
//                   "N": 16,
//                   "n": 9
//               },
//               {
//                   "name": "Strongly agree",
//                   "x0": 62.5,
//                   "x1": 81.25,
//                   "N": 16,
//                   "n": 3
//               }
//           ]
//       },
//       {
//           "1": "0",
//           "2": "0",
//           "3": "1",
//           "4": "4",
//           "5": "0",
//           "Question": "Question 14",
//           "N": "5",
//           "Strongly disagree": 0,
//           "Disagree": 0,
//           "Neither agree nor disagree": 20,
//           "Agree": 80,
//           "Strongly agree": 0,
//           "boxes": [
//               {
//                   "name": "Strongly disagree",
//                   "x0": -10,
//                   "x1": -10,
//                   "N": 5,
//                   "n": 0
//               },
//               {
//                   "name": "Disagree",
//                   "x0": -10,
//                   "x1": -10,
//                   "N": 5,
//                   "n": 0
//               },
//               {
//                   "name": "Neither agree nor disagree",
//                   "x0": -10,
//                   "x1": 10,
//                   "N": 5,
//                   "n": 1
//               },
//               {
//                   "name": "Agree",
//                   "x0": 10,
//                   "x1": 90,
//                   "N": 5,
//                   "n": 4
//               },
//               {
//                   "name": "Strongly agree",
//                   "x0": 90,
//                   "x1": 90,
//                   "N": 5,
//                   "n": 0
//               }
//           ]
//       },
//       {
//           "1": "0",
//           "2": "0",
//           "3": "1",
//           "4": "4",
//           "5": "0",
//           "Question": "Question 15",
//           "N": "5",
//           "Strongly disagree": 0,
//           "Disagree": 0,
//           "Neither agree nor disagree": 20,
//           "Agree": 80,
//           "Strongly agree": 0,
//           "boxes": [
//               {
//                   "name": "Strongly disagree",
//                   "x0": -10,
//                   "x1": -10,
//                   "N": 5,
//                   "n": 0
//               },
//               {
//                   "name": "Disagree",
//                   "x0": -10,
//                   "x1": -10,
//                   "N": 5,
//                   "n": 0
//               },
//               {
//                   "name": "Neither agree nor disagree",
//                   "x0": -10,
//                   "x1": 10,
//                   "N": 5,
//                   "n": 1
//               },
//               {
//                   "name": "Agree",
//                   "x0": 10,
//                   "x1": 90,
//                   "N": 5,
//                   "n": 4
//               },
//               {
//                   "name": "Strongly agree",
//                   "x0": 90,
//                   "x1": 90,
//                   "N": 5,
//                   "n": 0
//               }
//           ]
//       }
      
//   ]

  var data = [
    {
        "1": 152,
        "2": 76,
        "3": 479,
        "4": 24,
        "5": 412,
        "N": 1237,
        "iN": 458,
        "Question": "Question 1",
        "Interactions": 33.18777292576419,
        "A Speeches": 6.143896523848019,
        "B Speeches": 38.72271624898949,
        "C Speeches": 1.9401778496362168,
        "D Speeches": 33.306386418755054,
        "boxes": [
            {
                "name": "Interactions",
                "x0": -33.18777292576419,
                "x1": 0,
                "N": 1237,
                "n": 152
            },
            {
                "name": "A Speeches",
                "x0": 0,
                "x1": 6.143896523848019,
                "N": 1237,
                "n": 76
            },
            {
                "name": "B Speeches",
                "x0": 6.143896523848019,
                "x1": 44.86661277283751,
                "N": 1237,
                "n": 479
            },
            {
                "name": "C Speeches",
                "x0": 44.86661277283751,
                "x1": 46.80679062247373,
                "N": 1237,
                "n": 24
            },
            {
                "name": "D Speeches",
                "x0": 46.80679062247373,
                "x1": 80.11317704122878,
                "N": 1237,
                "n": 412
            }
        ]
    },
    {
        "1": 178,
        "2": 178,
        "3": 473,
        "4": 276,
        "5": 310,
        "N": 1237,
        "iN": 458,
        "Question": "Question 2",
        "Interactions": 38.8646288209607,
        "A Speeches": 14.38965238480194,
        "B Speeches": 38.237671786580435,
        "C Speeches": 22.31204527081649,
        "D Speeches": 25.060630557801133,
        "boxes": [
            {
                "name": "Interactions",
                "x0": -38.8646288209607,
                "x1": 0,
                "N": 1237,
                "n": 178
            },
            {
                "name": "A Speeches",
                "x0": 0,
                "x1": 14.38965238480194,
                "N": 1237,
                "n": 178
            },
            {
                "name": "B Speeches",
                "x0": 14.38965238480194,
                "x1": 52.62732417138238,
                "N": 1237,
                "n": 473
            },
            {
                "name": "C Speeches",
                "x0": 52.62732417138238,
                "x1": 74.93936944219887,
                "N": 1237,
                "n": 276
            },
            {
                "name": "D Speeches",
                "x0": 74.93936944219887,
                "x1": 100,
                "N": 1237,
                "n": 310
            }
        ]
    },
    {
        "1": 153,
        "2": 271,
        "3": 267,
        "4": 194,
        "5": 154,
        "N": 1237,
        "iN": 458,
        "Question": "Question 3",
        "Interactions": 33.4061135371179,
        "A Speeches": 21.90784155214228,
        "B Speeches": 21.584478577202912,
        "C Speeches": 15.683104284559418,
        "D Speeches": 12.449474535165724,
        "boxes": [
            {
                "name": "Interactions",
                "x0": -33.4061135371179,
                "x1": 0,
                "N": 1237,
                "n": 153
            },
            {
                "name": "A Speeches",
                "x0": 0,
                "x1": 21.90784155214228,
                "N": 1237,
                "n": 271
            },
            {
                "name": "B Speeches",
                "x0": 21.90784155214228,
                "x1": 43.49232012934519,
                "N": 1237,
                "n": 267
            },
            {
                "name": "C Speeches",
                "x0": 43.49232012934519,
                "x1": 59.17542441390461,
                "N": 1237,
                "n": 194
            },
            {
                "name": "D Speeches",
                "x0": 59.17542441390461,
                "x1": 71.62489894907033,
                "N": 1237,
                "n": 154
            }
        ]
    },
    {
        "1": 153,
        "2": 271,
        "3": 267,
        "4": 194,
        "5": 154,
        "N": 1237,
        "iN": 458,
        "Question": "Question 4",
        "Interactions": 33.4061135371179,
        "A Speeches": 21.90784155214228,
        "B Speeches": 21.584478577202912,
        "C Speeches": 15.683104284559418,
        "D Speeches": 12.449474535165724,
        "boxes": [
            {
                "name": "Interactions",
                "x0": -33.4061135371179,
                "x1": 0,
                "N": 1237,
                "n": 153
            },
            {
                "name": "A Speeches",
                "x0": 0,
                "x1": 21.90784155214228,
                "N": 1237,
                "n": 271
            },
            {
                "name": "B Speeches",
                "x0": 21.90784155214228,
                "x1": 43.49232012934519,
                "N": 1237,
                "n": 267
            },
            {
                "name": "C Speeches",
                "x0": 43.49232012934519,
                "x1": 59.17542441390461,
                "N": 1237,
                "n": 194
            },
            {
                "name": "D Speeches",
                "x0": 59.17542441390461,
                "x1": 71.62489894907033,
                "N": 1237,
                "n": 154
            }
        ]
    },
    {
        "1": 153,
        "2": 271,
        "3": 267,
        "4": 194,
        "5": 154,
        "N": 1237,
        "iN": 458,
        "Question": "Question 5",
        "Interactions": 33.4061135371179,
        "A Speeches": 21.90784155214228,
        "B Speeches": 21.584478577202912,
        "C Speeches": 15.683104284559418,
        "D Speeches": 12.449474535165724,
        "boxes": [
            {
                "name": "Interactions",
                "x0": -33.4061135371179,
                "x1": 0,
                "N": 1237,
                "n": 153
            },
            {
                "name": "A Speeches",
                "x0": 0,
                "x1": 21.90784155214228,
                "N": 1237,
                "n": 271
            },
            {
                "name": "B Speeches",
                "x0": 21.90784155214228,
                "x1": 43.49232012934519,
                "N": 1237,
                "n": 267
            },
            {
                "name": "C Speeches",
                "x0": 43.49232012934519,
                "x1": 59.17542441390461,
                "N": 1237,
                "n": 194
            },
            {
                "name": "D Speeches",
                "x0": 59.17542441390461,
                "x1": 71.62489894907033,
                "N": 1237,
                "n": 154
            }
        ]
    },
    {
        "1": 153,
        "2": 271,
        "3": 267,
        "4": 194,
        "5": 154,
        "N": 1237,
        "iN": 458,
        "Question": "Question 6",
        "Interactions": 33.4061135371179,
        "A Speeches": 21.90784155214228,
        "B Speeches": 21.584478577202912,
        "C Speeches": 15.683104284559418,
        "D Speeches": 12.449474535165724,
        "boxes": [
            {
                "name": "Interactions",
                "x0": -33.4061135371179,
                "x1": 0,
                "N": 1237,
                "n": 153
            },
            {
                "name": "A Speeches",
                "x0": 0,
                "x1": 21.90784155214228,
                "N": 1237,
                "n": 271
            },
            {
                "name": "B Speeches",
                "x0": 21.90784155214228,
                "x1": 43.49232012934519,
                "N": 1237,
                "n": 267
            },
            {
                "name": "C Speeches",
                "x0": 43.49232012934519,
                "x1": 59.17542441390461,
                "N": 1237,
                "n": 194
            },
            {
                "name": "D Speeches",
                "x0": 59.17542441390461,
                "x1": 71.62489894907033,
                "N": 1237,
                "n": 154
            }
        ]
    },
    {
        "1": 153,
        "2": 271,
        "3": 267,
        "4": 194,
        "5": 154,
        "N": 1237,
        "iN": 458,
        "Question": "Question 7",
        "Interactions": 33.4061135371179,
        "A Speeches": 21.90784155214228,
        "B Speeches": 21.584478577202912,
        "C Speeches": 15.683104284559418,
        "D Speeches": 12.449474535165724,
        "boxes": [
            {
                "name": "Interactions",
                "x0": -33.4061135371179,
                "x1": 0,
                "N": 1237,
                "n": 153
            },
            {
                "name": "A Speeches",
                "x0": 0,
                "x1": 21.90784155214228,
                "N": 1237,
                "n": 271
            },
            {
                "name": "B Speeches",
                "x0": 21.90784155214228,
                "x1": 43.49232012934519,
                "N": 1237,
                "n": 267
            },
            {
                "name": "C Speeches",
                "x0": 43.49232012934519,
                "x1": 59.17542441390461,
                "N": 1237,
                "n": 194
            },
            {
                "name": "D Speeches",
                "x0": 59.17542441390461,
                "x1": 71.62489894907033,
                "N": 1237,
                "n": 154
            }
        ]
    },
    {
        "1": 153,
        "2": 271,
        "3": 267,
        "4": 194,
        "5": 154,
        "N": 1237,
        "iN": 458,
        "Question": "Question 8",
        "Interactions": 33.4061135371179,
        "A Speeches": 21.90784155214228,
        "B Speeches": 21.584478577202912,
        "C Speeches": 15.683104284559418,
        "D Speeches": 12.449474535165724,
        "boxes": [
            {
                "name": "Interactions",
                "x0": -33.4061135371179,
                "x1": 0,
                "N": 1237,
                "n": 153
            },
            {
                "name": "A Speeches",
                "x0": 0,
                "x1": 21.90784155214228,
                "N": 1237,
                "n": 271
            },
            {
                "name": "B Speeches",
                "x0": 21.90784155214228,
                "x1": 43.49232012934519,
                "N": 1237,
                "n": 267
            },
            {
                "name": "C Speeches",
                "x0": 43.49232012934519,
                "x1": 59.17542441390461,
                "N": 1237,
                "n": 194
            },
            {
                "name": "D Speeches",
                "x0": 59.17542441390461,
                "x1": 71.62489894907033,
                "N": 1237,
                "n": 154
            }
        ]
    },
    {
        "1": 153,
        "2": 271,
        "3": 267,
        "4": 194,
        "5": 154,
        "N": 1237,
        "iN": 458,
        "Question": "Question 9",
        "Interactions": 33.4061135371179,
        "A Speeches": 21.90784155214228,
        "B Speeches": 21.584478577202912,
        "C Speeches": 15.683104284559418,
        "D Speeches": 12.449474535165724,
        "boxes": [
            {
                "name": "Interactions",
                "x0": -33.4061135371179,
                "x1": 0,
                "N": 1237,
                "n": 153
            },
            {
                "name": "A Speeches",
                "x0": 0,
                "x1": 21.90784155214228,
                "N": 1237,
                "n": 271
            },
            {
                "name": "B Speeches",
                "x0": 21.90784155214228,
                "x1": 43.49232012934519,
                "N": 1237,
                "n": 267
            },
            {
                "name": "C Speeches",
                "x0": 43.49232012934519,
                "x1": 59.17542441390461,
                "N": 1237,
                "n": 194
            },
            {
                "name": "D Speeches",
                "x0": 59.17542441390461,
                "x1": 71.62489894907033,
                "N": 1237,
                "n": 154
            }
        ]
    },
    {
        "1": 153,
        "2": 271,
        "3": 267,
        "4": 194,
        "5": 154,
        "N": 1237,
        "iN": 458,
        "Question": "Question 10",
        "Interactions": 33.4061135371179,
        "A Speeches": 21.90784155214228,
        "B Speeches": 21.584478577202912,
        "C Speeches": 15.683104284559418,
        "D Speeches": 12.449474535165724,
        "boxes": [
            {
                "name": "Interactions",
                "x0": -33.4061135371179,
                "x1": 0,
                "N": 1237,
                "n": 153
            },
            {
                "name": "A Speeches",
                "x0": 0,
                "x1": 21.90784155214228,
                "N": 1237,
                "n": 271
            },
            {
                "name": "B Speeches",
                "x0": 21.90784155214228,
                "x1": 43.49232012934519,
                "N": 1237,
                "n": 267
            },
            {
                "name": "C Speeches",
                "x0": 43.49232012934519,
                "x1": 59.17542441390461,
                "N": 1237,
                "n": 194
            },
            {
                "name": "D Speeches",
                "x0": 59.17542441390461,
                "x1": 71.62489894907033,
                "N": 1237,
                "n": 154
            }
        ]
    },
    {
        "1": 153,
        "2": 271,
        "3": 267,
        "4": 194,
        "5": 154,
        "N": 1237,
        "iN": 458,
        "Question": "Question 11",
        "Interactions": 33.4061135371179,
        "A Speeches": 21.90784155214228,
        "B Speeches": 21.584478577202912,
        "C Speeches": 15.683104284559418,
        "D Speeches": 12.449474535165724,
        "boxes": [
            {
                "name": "Interactions",
                "x0": -33.4061135371179,
                "x1": 0,
                "N": 1237,
                "n": 153
            },
            {
                "name": "A Speeches",
                "x0": 0,
                "x1": 21.90784155214228,
                "N": 1237,
                "n": 271
            },
            {
                "name": "B Speeches",
                "x0": 21.90784155214228,
                "x1": 43.49232012934519,
                "N": 1237,
                "n": 267
            },
            {
                "name": "C Speeches",
                "x0": 43.49232012934519,
                "x1": 59.17542441390461,
                "N": 1237,
                "n": 194
            },
            {
                "name": "D Speeches",
                "x0": 59.17542441390461,
                "x1": 71.62489894907033,
                "N": 1237,
                "n": 154
            }
        ]
    },
    {
        "1": 153,
        "2": 271,
        "3": 267,
        "4": 194,
        "5": 154,
        "N": 1237,
        "iN": 458,
        "Question": "Question 12",
        "Interactions": 33.4061135371179,
        "A Speeches": 21.90784155214228,
        "B Speeches": 21.584478577202912,
        "C Speeches": 15.683104284559418,
        "D Speeches": 12.449474535165724,
        "boxes": [
            {
                "name": "Interactions",
                "x0": -33.4061135371179,
                "x1": 0,
                "N": 1237,
                "n": 153
            },
            {
                "name": "A Speeches",
                "x0": 0,
                "x1": 21.90784155214228,
                "N": 1237,
                "n": 271
            },
            {
                "name": "B Speeches",
                "x0": 21.90784155214228,
                "x1": 43.49232012934519,
                "N": 1237,
                "n": 267
            },
            {
                "name": "C Speeches",
                "x0": 43.49232012934519,
                "x1": 59.17542441390461,
                "N": 1237,
                "n": 194
            },
            {
                "name": "D Speeches",
                "x0": 59.17542441390461,
                "x1": 71.62489894907033,
                "N": 1237,
                "n": 154
            }
        ]
    },
    {
        "1": 153,
        "2": 271,
        "3": 267,
        "4": 194,
        "5": 154,
        "N": 1237,
        "iN": 458,
        "Question": "Question 13",
        "Interactions": 33.4061135371179,
        "A Speeches": 21.90784155214228,
        "B Speeches": 21.584478577202912,
        "C Speeches": 15.683104284559418,
        "D Speeches": 12.449474535165724,
        "boxes": [
            {
                "name": "Interactions",
                "x0": -33.4061135371179,
                "x1": 0,
                "N": 1237,
                "n": 153
            },
            {
                "name": "A Speeches",
                "x0": 0,
                "x1": 21.90784155214228,
                "N": 1237,
                "n": 271
            },
            {
                "name": "B Speeches",
                "x0": 21.90784155214228,
                "x1": 43.49232012934519,
                "N": 1237,
                "n": 267
            },
            {
                "name": "C Speeches",
                "x0": 43.49232012934519,
                "x1": 59.17542441390461,
                "N": 1237,
                "n": 194
            },
            {
                "name": "D Speeches",
                "x0": 59.17542441390461,
                "x1": 71.62489894907033,
                "N": 1237,
                "n": 154
            }
        ]
    },
    {
        "1": 153,
        "2": 271,
        "3": 267,
        "4": 194,
        "5": 154,
        "N": 1237,
        "iN": 458,
        "Question": "Question 14",
        "Interactions": 33.4061135371179,
        "A Speeches": 21.90784155214228,
        "B Speeches": 21.584478577202912,
        "C Speeches": 15.683104284559418,
        "D Speeches": 12.449474535165724,
        "boxes": [
            {
                "name": "Interactions",
                "x0": -33.4061135371179,
                "x1": 0,
                "N": 1237,
                "n": 153
            },
            {
                "name": "A Speeches",
                "x0": 0,
                "x1": 21.90784155214228,
                "N": 1237,
                "n": 271
            },
            {
                "name": "B Speeches",
                "x0": 21.90784155214228,
                "x1": 43.49232012934519,
                "N": 1237,
                "n": 267
            },
            {
                "name": "C Speeches",
                "x0": 43.49232012934519,
                "x1": 59.17542441390461,
                "N": 1237,
                "n": 194
            },
            {
                "name": "D Speeches",
                "x0": 59.17542441390461,
                "x1": 71.62489894907033,
                "N": 1237,
                "n": 154
            }
        ]
    },
    {
        "1": 153,
        "2": 271,
        "3": 267,
        "4": 194,
        "5": 154,
        "N": 1237,
        "iN": 458,
        "Question": "Question 15",
        "Interactions": 33.4061135371179,
        "A Speeches": 21.90784155214228,
        "B Speeches": 21.584478577202912,
        "C Speeches": 15.683104284559418,
        "D Speeches": 12.449474535165724,
        "boxes": [
            {
                "name": "Interactions",
                "x0": -33.4061135371179,
                "x1": 0,
                "N": 1237,
                "n": 153
            },
            {
                "name": "A Speeches",
                "x0": 0,
                "x1": 21.90784155214228,
                "N": 1237,
                "n": 271
            },
            {
                "name": "B Speeches",
                "x0": 21.90784155214228,
                "x1": 43.49232012934519,
                "N": 1237,
                "n": 267
            },
            {
                "name": "C Speeches",
                "x0": 43.49232012934519,
                "x1": 59.17542441390461,
                "N": 1237,
                "n": 194
            },
            {
                "name": "D Speeches",
                "x0": 59.17542441390461,
                "x1": 71.62489894907033,
                "N": 1237,
                "n": 154
            }
        ]
    }
]

  var min_val = d3.min(data, function(d) {
    return d.boxes["0"].x0;
    });

  var max_val = d3.max(data, function(d) {
          return d.boxes["4"].x1;
          });

  x.domain([min_val, max_val]).nice();
  y.domain(data.map(function(d) { return d.Question; }));

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", function() {
                      return "translate(0," + 65 + ")"; 
                      })
      .call(xAxis);

  // svg.append("g")
  //     .attr("class", "y axis")
  //     .attr("transform", function() {
  //                     return "translate(40," + 30 + ")"; 
  //                     })
  //     .call(yAxis)

  var vakken = svg.selectAll(".question")
      .data(data)
      .enter().append("g")
      .attr("class", "bar")
      .attr("transform", function(d) {
           return "translate(0," + (y(d.Question)+38) + ")"; 
          });


  var bars = vakken.selectAll("rect")
      .data(function(d) { return d.boxes; })
      .enter().append("g").attr("class", "subbar");

  bars.append("rect")
      .attr("height", 25)
      .attr("x", function(d) { return x(d.x0); })
      .attr("width", function(d) { return x(d.x1) - x(d.x0); })
      .style("fill", function(d) { return color(d.name); });

  bars.append("text")
      .attr("x", function(d) { return x(d.x0); })
      .attr("y", 25/2)
      .attr("dy", "0.5em")
      .attr("dx", "0.5em")
      .style("font" ,"10px sans-serif")
      .style("text-anchor", "begin")
      .text(function(d) { return d.n !== 0 && (d.x1-d.x0)>3 ? d.n : "" });

    vakken.append("text")
      .attr("x", x(-53))
      .attr("y", 25 / 2)
      .attr("dy", "0.5em")
      .attr("dx", "0.5em")
      .style("font" ,"10px sans-serif")
      .text(function(d,i){
        return `SN200${2+i}`
      })
    

  vakken.insert("rect",":first-child")
      .attr("height", 25)
      .attr("x", "1")
      .attr("width", width)
      .attr("fill-opacity", "0.5")
      .style("fill", "#F5F5F5")
      .attr("class", function(d,index) { return index%2==0 ? "even" : "uneven"; });

  svg.append("g")
      .attr("class", "y axis")
  .append("line")
      .attr("x1", x(0)+0)
      .attr("x2", x(0)+0)
      .attr("y1",y('Question 1')+35)
      .attr("y2", height -10);

  var startp = svg.append("g").attr("class", "legendbox").attr("id", "mylegendbox");
  // this is not nice, we should calculate the bounding box and use that
  var legend_tabs = [-30, 68, 163, 258, 355];
  var legend = startp.selectAll(".legend")
      .data(color.domain().slice())
      .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(" + (legend_tabs[i]-70) + ",15)"; });

  legend.append("rect")
      .attr("x", 0)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

  legend.append("text")
      .attr("x", 22)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "begin")
      .style("font" ,"13px sans-serif")
      .text(function(d) { return d; });

  d3.selectAll(".axis path")
      .style("fill", "none")
      .style("stroke", "#000")
      .style("shape-rendering", "crispEdges")

  d3.selectAll(".axis line")
      .style("fill", "none")
      .style("stroke", "#000")
      .style("shape-rendering", "crispEdges")

  var movesize = width/2 - startp.node().getBBox().width/2 + 100;
  d3.selectAll(".legendbox").attr("transform", "translate(" + movesize  + ",0)");

})
GroupSummaryView()

//多组议题比较视图
GroupFilter = (function(){
    const width = $('.groupFilter').width()
    const height = $('.groupFilter').height()
    var boxH = height * 0.7 / 3
    var boxW = width * 0.75 / 4

    const config = {
        margins: {top: 15, left: 80, bottom: 50, right: 80},
        animateDuration: 1000
    }

    var data = [
        {
            "date": "2019-06-01",
            "house": 56,
            "food": 30,
            "transportation": 40,
            "education": 50,
            "clothes": 30
        },
        {
            "date": "2019-06-02",
            "house": 42,
            "food": 20,
            "transportation": 80,
            "education": 56,
            "clothes": 60
        },
        {
            "date": "2019-06-03",
            "house": 57,
            "food": 20,
            "transportation": 50,
            "education": 80,
            "clothes": 54
        },
        {
            "date": "2019-06-04",
            "house": 36,
            "food": 10,
            "transportation": 30,
            "education": 40,
            "clothes": 62
        },
        {
            "date": "2019-06-05",
            "house": 50,
            "food": 15,
            "transportation": 20,
            "education": 35,
            "clothes": 43
        },
        {
            "date": "2019-06-06",
            "house": 73,
            "food": 10,
            "transportation": 30,
            "education": 70,
            "clothes": 34
        },
        {
            "date": "2019-06-07",
            "house": 37,
            "food": 20,
            "transportation": 56,
            "education": 60,
            "clothes": 20
        },
        {
            "date": "2019-06-08",
            "house": 46,
            "food": 15,
            "transportation": 20,
            "education": 65,
            "clothes": 25
        },
        {
            "date": "2019-06-09",
            "house": 64,
            "food": 40,
            "transportation": 34,
            "education": 43,
            "clothes": 45
        },
        {
            "date": "2019-06-10",
            "house": 75,
            "food": 36,
            "transportation": 46,
            "education": 60,
            "clothes": 62
        },
        {
            "date": "2019-06-11",
            "house": 60,
            "food": 25,
            "transportation": 32,
            "education": 40,
            "clothes": 38
        },
        {
            "date": "2019-06-12",
            "house": 34,
            "food": 10,
            "transportation": 18,
            "education": 32,
            "clothes": 55
        },
        {
            "date": "2019-06-13",
            "house": 43,
            "food": 34,
            "transportation": 23,
            "education": 42,
            "clothes": 32
        },
        {
            "date": "2019-06-14",
            "house": 25,
            "food": 30,
            "transportation": 46,
            "education": 25,
            "clothes": 23
        },
        {
            "date": "2019-06-15",
            "house": 20,
            "food": 22,
            "transportation": 62,
            "education": 52,
            "clothes": 26
        },
        {
            "date": "2019-06-16",
            "house": 10,
            "food": 17,
            "transportation": 45,
            "education": 42,
            "clothes": 21
        },
        {
            "date": "2019-06-17",
            "house": 21,
            "food": 13,
            "transportation": 50,
            "education": 72,
            "clothes": 30
        },
        {
            "date": "2019-06-18",
            "house": 34,
            "food": 10,
            "transportation": 34,
            "education": 65,
            "clothes": 20
        },
        {
            "date": "2019-06-19",
            "house": 44,
            "food": 25,
            "transportation": 34,
            "education": 56,
            "clothes": 15
        },
        {
            "date": "2019-06-21",
            "house": 56,
            "food": 15,
            "transportation": 14,
            "education": 32,
            "clothes": 32
        },
        {
            "date": "2019-06-22",
            "house": 24,
            "food": 30,
            "transportation": 32,
            "education": 42,
            "clothes": 42
        },
        {
            "date": "2019-06-23",
            "house": 32,
            "food": 20,
            "transportation": 25,
            "education": 23,
            "clothes": 23
        },
        {
            "date": "2019-06-24",
            "house": 42,
            "food": 5,
            "transportation": 14,
            "education": 52,
            "clothes": 10
        },
        {
            "date": "2019-06-25",
            "house": 36,
            "food": 18,
            "transportation": 36,
            "education": 25,
            "clothes": 12
        },
        {
            "date": "2019-06-26",
            "house": 20,
            "food": 34,
            "transportation": 40,
            "education": 30,
            "clothes": 22
        },
        {
            "date": "2019-06-27",
            "house": 54,
            "food": 12,
            "transportation": 32,
            "education": 34,
            "clothes": 34
        },
        {
            "date": "2019-06-28",
            "house": 68,
            "food": 10,
            "transportation": 50,
            "education": 24,
            "clothes": 20
        },
        {
            "date": "2019-06-29",
            "house": 35,
            "food": 26,
            "transportation": 55,
            "education": 32,
            "clothes": 36
        },
        {
            "date": "2019-06-30",
            "house": 53,
            "food": 21,
            "transportation": 40,
            "education": 20,
            "clothes": 30
        }
    ]

    var svg = d3.select(".groupCompare")
        .attr("width", width)
        .attr("height", height + boxH )
        .attr("class", "filterGroup")
    // .append("g")

    var scaleX = d3.scaleTime()
                .domain([new Date(data[0].date), new Date(data[data.length-1].date)])
                .range([0, width]);

    var scaleY = d3.scaleLinear()
                .domain([0, (Math.floor((
                    d3.max(data, (d) => d.house) +
                    d3.max(data, (d) => d.food) +
                    d3.max(data, (d) => d.education) +
                    d3.max(data, (d) => d.transportation) +
                    d3.max(data, (d) => d.clothes)
                    )/10) + 1)*10])
                .range([height*0.25, 0])

    var stack = d3.stack()
                    .keys(['house', 'food', 'transportation', 'education', 'clothes'])
                    .order(d3.stackOrderInsideOut)
                    .offset(d3.stackOffsetWiggle);

    // var _colors = d3.scaleOrdinal(d3.schemeCategory10)
    var _colors = d3.scaleOrdinal()
                    .range(["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3","none"]);

    /* ----------------------------渲染河流面------------------------  */
    const areas = svg.insert('g',':first-child')
                    .attr("width", width*0.25)
                    .attr("height", height )
                    .attr("class","AgendaStream")
                    // .attr('transform', 'translate(0, -' +  d3.max(data, (d) => d3.mean(Object.values(d))) + ')')   // 使流图的位置处于Y轴中部
                    .attr('transform', 'translate(-30,' +  0 + ')')   // 使流图的位置处于Y轴中部
                    .selectAll('.area')
                    .data(stack(data));

    areas.enter()
            .append('path')
            .attr('class', (d) => 'area area-' + d.key)
        .merge(areas)
            .style('fill', (d,i) => _colors(i))
            .transition().duration(config.animateDuration)
            .attrTween('d', areaTween);

    // svg.append('g').attr('class','yAxis')
    //                 .attr('transform', 'translate(' + width * 0.25 + ',' + config.margins.top + ')')
    //                 .call(d3.axisLeft(scaleX))
    


    /* ----------------------------渲染box------------------------  */
        // 每一行的高度坐标位置比例尺
        var boxY = d3.scaleOrdinal()
        .domain(['G1','G2','G3','G4'])
        .range([boxH * 0,boxH * 1,boxH * 2,boxH * 3]);

    var boxX = d3.scaleOrdinal()
        .domain(['T1','T2','T3',"T4"])
        .range([boxW * 0,boxW * 1,boxW * 2,boxW * 3]);

    var dataBox = [
        {
            "Group" : "G1",
            "TimeClip": [
                {"clip": "T1", "name": "SN2002_1"},
                {"clip": "T2", "name": "SN2002_2"},
                {"clip": "T3", "name": "SN2002_3"},
                {"clip": "T4", "name": "SN2002_4"},      
            ]
        },
        {
            "Group" : "G2",
            "TimeClip": [
                {"clip": "T1", "name": "SN2003_1"},
                {"clip": "T2", "name": "SN2003_2"},
                {"clip": "T3", "name": "SN2003_3"},
                {"clip": "T4", "name": "SN2003_4"},      
            ]
        },
        {
            "Group" : "G3",
            "TimeClip": [
                {"clip": "T1", "name": "SN2004_1"},
                {"clip": "T2", "name": "SN2004_2"},
                {"clip": "T3", "name": "SN2004_3"},
                {"clip": "T4", "name": "SN2004_4"},      
            ]
        },
        {
            "Group" : "G4",
            "TimeClip": [
                {"clip": "T1", "name": "SN2005_1"},
                {"clip": "T2", "name": "SN2005_2"},
                {"clip": "T3", "name": "SN2005_3"},
                {"clip": "T4", "name": "SN2005_4"},      
            ]
        },
        
    ]
    
    var BoxLengend = svg.append('g')
                    .attr("width", width*0.75 )
                    .attr("height", height * 0.3)
                    .attr("class","BoxLengend")
                    .attr("transform","translate(" + width * 0.25 + "," + 20 + ")")

    // BoxLengend.append("rect")
    //     .attr("x", 0)
    //     .attr("width", 100)
    //     .attr("height", 100)
    //     .attr("transform","translate(" + 10 + "," + 10 + ")")
    //     .style("stroke", "green")
    //     .style("stroke-width","2px")
    //     .style("fill", "none");

    BoxLengend
    .append('svg:image')
        .attr(
                'xlink:href',
                'https://video-lecture.oss-cn-beijing.aliyuncs.com/Group/SN2002.png'
            )
        .attr("width", 100)
        .attr("height", 100)
        .attr("transform","translate(" + 10 + "," + 10 + ")")
        

    var BoxLengencolor = d3.scaleOrdinal()
        .range(["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3"]);
    BoxLengencolor.domain(["Introduce name and profession", "Draw favorite animal", "Project fimances selling prices", "Discuss remote controller features"]);

    var eachLenH = height * 0.3 / 4 -5
    var legendbox = BoxLengend.selectAll(".legend")
        .data(BoxLengencolor.domain().slice())
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function(d, i) {
            console.log(d,i)
            return "translate(" + width * 0.3 + "," + (eachLenH * i) + ")"
        })

    legendbox.append("rect")
        .attr("x", 0)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", BoxLengencolor);

    legendbox.append("text")
        .attr("x", 22)
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "begin")
        .style("font" ,"10px sans-serif")
        .text(function(d) { return d; });

    var GroupBox = svg.append('g')
                    .attr("width", width*0.75 )
                    .attr("height", height * 0.7)
                    .attr("class","AgendaBox")
                    .style("overflow-y","scroll")
                    .attr("transform","translate(" + width * 0.25 + "," + height * 0.3 + ")")

    var GBox = GroupBox.selectAll(".grouptime")
        .data(dataBox)
        .enter().append("g")
        .attr("class", "box")
        // .attr("transform","translate(" + width * 0.25 + "," + boxY(d.Group) + ")")
        .attr("transform", function(d) {
            return "translate(" + 0 + "," + (boxY(d.Group)) + ")"; 
        });


    var boxs = GBox.selectAll("rect")
        .data(function (d) {
            console.log(d)
            return d.TimeClip
        })
        // .data(dataBox)
        .enter().append("g").attr("class", "subbox")

    boxs.append("rect")
        .attr("height", boxH -8)
        .attr("x", function(d) { 
            return boxX(d.clip); 
            // return boxX(d); 
        })
        .attr("width", boxW - 6)
        .style("stroke", "#FFEBCD")
        .style("stroke-width","1.5px")
        .style("fill", "none");


    /* ----------------------------3、每一个组中的四个box------------------------  */
    var Barconfig = {
        barOuterPadding: 0.15,
        barColor: _colors(0),
        margins: {top: 80, left: 80, bottom: 50, right: 80},
        textColor: 'black',
        gridColor: 'gray',
        tickShowGrid: [20, 40, 60, 80, 100],
        title: '多列直方图',
        barInnerPadding: 2,
        hoverColor: 'white',
        animateDuration: 1000
    }

    var bardata = [
        {
            "date": "Mon",
            "food": 30,
            "transportation": 40,
            "education": 50,
            "p": 40
        },
        {
            "date": "Tue",
            "food": 20,
            "transportation": 80,
            "education": 100,
            "p": 90
        },
        {
            "date": "Wed",
            "food": 20,
            "transportation": 50,
            "education": 80,
            "p": 70
        },
        {
            "date": "Thu",
            "food": 10,
            "transportation": 30,
            "education": 40,
            "p": 45
        }
    ]
    var multiData = [
            [
                [
                    "Mon",
                    30,
                    "food"
                ],
                [
                    "Tue",
                    20,
                    "food"
                ],
                [
                    "Wed",
                    20,
                    "food"
                ],
                [
                    "Thu",
                    10,
                    "food"
                ]
            ],
            [
                [
                    "Mon",
                    40,
                    "transportation"
                ],
                [
                    "Tue",
                    80,
                    "transportation"
                ],
                [
                    "Wed",
                    50,
                    "transportation"
                ],
                [
                    "Thu",
                    30,
                    "transportation"
                ]
            ],
            [
                [
                    "Mon",
                    50,
                    "education"
                ],
                [
                    "Tue",
                    100,
                    "education"
                ],
                [
                    "Wed",
                    80,
                    "education"
                ],
                [
                    "Thu",
                    40,
                    "education"
                ]
            ],
            [
                [
                    "Mon",
                    40,
                    "p"
                ],
                [
                    "Tue",
                    90,
                    "p"
                ],
                [
                    "Wed",
                    70,
                    "p"
                ],
                [
                    "Thu",
                    45,
                    "p"
                ]
            ]
        ]
    var columns = ["date","food","transportation","education","p"]
    var eachGroup = 0.23

    for(var i =0; i< 4;i++){
        var BoxTIME = svg.append('g')
                    .attr("class", () => 'AgendaBarG' + (i + 1))
                    // .attr("class","AgendaBar")
                    // .attr("transform","translate(" + width * 0.25 + "," + height * 0.3 + ")")
    

        var barscaleX = d3.scaleBand()
                    .domain(bardata.map((d) => d.date))
                    .range([width * 0.24, width])
                    .padding(Barconfig.barOuterPadding);
    
        var barscaleY = d3.scaleLinear()
                    .domain([0, d3.max(bardata, (d) => d3.max([d.food, d.transportation, d.education]))])
                    .range([height * (0.5 + i * eachGroup), height * (0.31 + i * eachGroup)])
                    
        /* ----------------------------渲染柱形------------------------  */
        
        let Bargroups = BoxTIME.selectAll('.g')
                            .data(multiData);
        let Eachbars = Bargroups.enter()
                            .append('g')
                        .merge(Bargroups)
                            .attr('class', (d) => 'g ' + d[0][2])
                            .attr('fill', (d,i) => _colors(i))
                            .selectAll('.bar')
                            .data((d) => d);
            
            Bargroups.exit()
                    .remove();

            Eachbars.enter()
                    .append('rect')
                    .attr('class','bar')
                .merge(Eachbars)
                    .attr('x', (d) => {
                        return barscaleX(d[0]) + barscaleX.bandwidth() / multiData.length * (columns.indexOf(d[2]) - 1);
                    })
                    .attr('y', barscaleY(0))
                    .attr('width', barscaleX.bandwidth() / multiData.length - Barconfig.barInnerPadding * (multiData.length-1))
                    .attr('height', 0)
                    .transition().duration(Barconfig.animateDuration)
                    .attr('height', (d) => height * (0.5 + i * eachGroup) - barscaleY(d[1]))
                    .attr('y', (d) => barscaleY(d[1]));
            
            Eachbars.exit()
                    .remove();
    }
    // // 鼠标交互事件
    //   //防抖函数
    //   function debounce(fn, time){
    //     let timeId = null;
    //     return function(){
    //         const context = this;
    //         const event = d3.event;
    //         timeId && clearTimeout(timeId)
    //         timeId = setTimeout(function(){
    //             d3.event = event;
    //             fn.apply(context, arguments);
    //         }, time);
    //     }
    // }
    // d3.selectAll('.bar')
    //     .on('mouseover', function(d){
    //         const e = d3.event;
    //         const position = d3.pointer(svg.node());

    //         d3.select(event.target)
    //             .attr('fill', 'white');
            
    //         svg
    //             .append('text')
    //             .classed('tip', true)
    //             .attr('x', function(){
    //                 console.log(position,event)
    //                 return position[0]+5
    //             })
    //             .attr('y', position[1])
    //             .attr('fill', 'black')
    //             .text( d[2] + ':' + d[1] + '元');
    //     })
    //     .on('mouseleave', function(d){
    //         const e = d3.event;
            
    //         d3.select(event.target)
    //             .attr('fill', _colors(columns.indexOf(d[2]) - 1));
                
    //         d3.select('.tip').remove();
    //     })
    //     .on('mousemove', debounce(function(){
    //             const position = d3.pointer(svg.node());
    //             d3.select('.tip')
    //             .attr('x', position[0]+5)
    //             .attr('y', position[1]-5);
    //         }, 6)
    //     );

    // var BoxTIME = svg.append('g')
    //                 // .attr("width", width*0.75 )
    //                 // .attr("height", height * 0.7)
    //                 .attr("class","AgendaBar")
    //                 // .attr("transform","translate(" + width * 0.25 + "," + height * 0.3 + ")")
    

    // var barscaleX = d3.scaleBand()
    //             .domain(bardata.map((d) => d.date))
    //             .range([width * 0.24, width])
    //             .padding(Barconfig.barOuterPadding);

    // var barscaleY = d3.scaleLinear()
    //             .domain([0, d3.max(bardata, (d) => d3.max([d.food, d.transportation, d.education]))])
    //             .range([height * 0.5, height * 0.31])
                
    //  /* ----------------------------渲染柱形------------------------  */
    
    // let Bargroups = BoxTIME.selectAll('.g')
    //                     .data(multiData);
    // let Eachbars = Bargroups.enter()
    //                     .append('g')
    //                  .merge(Bargroups)
    //                     .attr('class', (d) => 'g ' + d[0][2])
    //                     .attr('fill', (d,i) => _colors(i))
    //                     .selectAll('.bar')
    //                     .data((d) => d);
        
    //     Bargroups.exit()
    //             .remove();

    //     Eachbars.enter()
    //             .append('rect')
    //             .attr('class','bar')
    //         .merge(Eachbars)
    //             .attr('x', (d) => {
    //                 return barscaleX(d[0]) + barscaleX.bandwidth() / multiData.length * (columns.indexOf(d[2]) - 1);
    //             })
    //             .attr('y', barscaleY(0))
    //             .attr('width', barscaleX.bandwidth() / multiData.length - Barconfig.barInnerPadding * (multiData.length-1))
    //             .attr('height', 0)
    //             .transition().duration(Barconfig.animateDuration)
    //             .attr('height', (d) => height * 0.5 - barscaleY(d[1]))
    //             .attr('y', (d) => barscaleY(d[1]));
        
    //     Eachbars.exit()
    //             .remove();

        //中间帧函数
    function areaTween(_d){

        var scaleX = d3.scaleTime()
                    .domain([new Date(data[0].date), new Date(data[data.length-1].date)])
                    .range([0, width * 0.95]);

        var scaleY = d3.scaleLinear()
                    .domain([0, (Math.floor((
                        d3.max(data, (d) => d.house) +
                        d3.max(data, (d) => d.food) +
                        d3.max(data, (d) => d.education) +
                        d3.max(data, (d) => d.transportation) +
                        d3.max(data, (d) => d.clothes)
                        )/10) + 1)*10])
                    .range([height*0.25, 0])

        if (!_d) return;
        const generateArea = d3.area()
                    .y((d) => d[0])
                    .x0((d) => d[1])
                    .x1((d) => d[2])
                    .curve(d3.curveCardinal.tension(0));

        const pointX = data.map((d) => scaleX(new Date(d.date)));
        const pointY0 = _d.map((d) => scaleY(d[0]));
        const pointY1 = _d.map((d) => scaleY(d[1]));

        const interpolate = getAreaInterpolate(pointX, pointY0, pointY1);

        const ponits = [];

        return function(t){
            ponits.push([interpolate.x(t), interpolate.y0(t), interpolate.y1(t)]);
            return generateArea(ponits);
        }
    }

        //点插值
    function getAreaInterpolate(pointX, pointY0, pointY1){
        const domain = d3.range(0, 1, 1/(pointX.length-1));
        domain.push(1);

        const interpolateX = d3.scaleLinear()
                                .domain(domain)
                                .range(pointX);

        const interpolateY0 = d3.scaleLinear()
                                .domain(domain)
                                .range(pointY0);

        const interpolateY1 = d3.scaleLinear()
                                .domain(domain)
                                .range(pointY1);
        return {
            x: interpolateX,
            y0: interpolateY0,
            y1: interpolateY1
        };
    }
})
GroupFilter()