import { TeamCircle_3 } from "./AgenD.js"
var dataTeam = () => {
  var data = []
  for (var i = 0; i < TeamCircle_3 .length; i++){
    let tem = {
      "circle_id": 0, "start": 0, "end": 0, "sentences": [], "words" :[],
      "agenda_rate": [], "personGiveWordNum": [],  "clickTag": ''
    }
    tem.circle_id = TeamCircle_3 [i].circle_id
    tem.start = TeamCircle_3 [i].start
    tem.end = TeamCircle_3 [i].end
    tem.sentences = TeamCircle_3 [i].sentences
    tem.words = TeamCircle_3 [i].words
    // tem.agenda_rate = TeamCircle_3 [i].agenda_rate
    tem.personGiveWordNum = TeamCircle_3 [i].personGiveWordNum
    tem.clickTag = TeamCircle_3 [i].clickTag
    let wordnum = []
    let rate = []
    // let tag = ['B', 'D', 'A', 'C']
    let tag = ['N','K','L','M']
    
    // let total = TeamCircle_3 [i].personGiveWordNum.A + TeamCircle_3 [i].personGiveWordNum.B +
    //             TeamCircle_3 [i].personGiveWordNum.C+TeamCircle_3 [i].personGiveWordNum.D
    let total = TeamCircle_3 [i].personGiveWordNum.N + TeamCircle_3 [i].personGiveWordNum.K +
                TeamCircle_3 [i].personGiveWordNum.L+TeamCircle_3 [i].personGiveWordNum.M
    for (var j = 0; j < 4; j++){
      let each = { "id": "", "value": 0, "Total": 0 }
      each.id = tag[j]
      each.value = TeamCircle_3 [i].personGiveWordNum[tag[j]]
      each.Total = total
      wordnum.push(each)
    }
    for (var idx = 0; idx < TeamCircle_3[i].agenda_rate.length; idx++){
      let each = { "id": "", "value": 0, "Total": 0 }
      each.id = TeamCircle_3[i].agenda_rate[idx].id
      each.value = TeamCircle_3 [i].agenda_rate[idx].value
      each.Total = total
      rate.push(each)
    }
    tem.agenda_rate = rate
    let WordNum = { WordNum: {} }
    WordNum.WordNum = wordnum
    Object.assign(tem, WordNum)
    data.push(tem)
  }

  console.log(data)
}

export { dataTeam }

