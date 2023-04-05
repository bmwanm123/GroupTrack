import { GData } from "./GLV.js";
var AllLine = GData

var plotXY = [
  { x: 295.6407704727163, y: 202.82059658173512 },
  { x: 382.5842822584121, y: 90.46004101595736 },
  { x: 377.9267810318212, y: 194.0579434392171 },
  { x: 422.5343138719058, y: 101.55133806280047 },
  { x: 443.99904621384184, y: 30 },
  { x: 365.2366797954343, y: 289.0051031138632 },
  { x: 291.80199672232095, y: 247.5007303810074 },
  { x: 558.7730574389709, y: 73.83123516334638 },

  { x: 337.7577261834155, y: 72.3587583785216 },
  { x: 247.6375843232472, y: 185.8991951928892 },
  { x: 283.8525966731171, y: 133.41663648886495 },
  { x: 515.3188880273527, y: 107.06771971004349 },
  { x: 445.82121535672536, y: 105.8062794842254 },
  { x: 381.4154730493308, y: 147.1395600187207 },
  { x: 332.5608697011745, y: 305.3864674968387 },
  // { x: 253.21049100607303, y: 174.92180146884016 },
];

var DataProcess = () => {
  var GroupProjectD1 = []

  for (var i = 0; i < AllLine.length; i++) {
    var obj = {}
    
    var agenda = []
    var midD = []
    var agenda_rate = { agenda_rate: [] }
    var Radar = { Radar: {} }
    var obj_wai = { className: '', axes: [] }
    obj_wai.className = 'germany'
    for (var j = 0; j < 4; j++){
      var obj1 = {}
      if (j == 0) {
        obj1.axes = 'ASpeech'
        obj1.value = AllLine[i].LineD[0].ASpeech
        midD.push(obj1)
      }
      if (j == 1) {
        obj1.axes = 'BSpeech'
        obj1.value = AllLine[i].LineD[0].BSpeech
        midD.push(obj1)
      }
      if (j == 2) {
        obj1.axes = 'CSpeech'
        obj1.value = AllLine[i].LineD[0].CSpeech
        midD.push(obj1)
      }
      if (j == 3) {
        obj1.axes = 'DSpeech'
        obj1.value = AllLine[i].LineD[0].DSpeech
        midD.push(obj1)
      } 
    }
    obj_wai.axes = midD
    var volume = AllLine[i].LineD[0].ASpeech + AllLine[i].LineD[0].BSpeech +AllLine[i].LineD[0].CSpeech + AllLine[i].LineD[0].DSpeech
    for (var id = 0; id < 5; id++){
      var obj2 = {}
      if (id == 0) {
        obj2.id = '0'
        obj2.value = 12
        obj2.Total = volume
        agenda.push(obj2)
      }
      if (id == 1) {
        obj2.id = '1'
        obj2.value = 12
        obj2.Total = volume
        agenda.push(obj2)
      }
      if (id == 2) {
        obj2.id = '2'
        obj2.value = 12
        obj2.Total = volume
        agenda.push(obj2)
      }
      if (id == 3) {
        obj2.id = '3'
        obj2.value = 12
        obj2.Total = volume
        agenda.push(obj2)
      }
      if (id == 4) {
        obj2.id = '-'
        obj2.value = 12
        obj2.Total = volume
        agenda.push(obj2)
      }
    }

    agenda_rate.agenda_rate = agenda
    Object.assign(Radar.Radar, obj_wai)

    obj.GroupID = AllLine[i].GroupID
    obj.pX = 2
    obj.pY = 2
    
    obj.ToalVolume = AllLine[i].LineD[0].ASpeech + AllLine[i].LineD[0].BSpeech +AllLine[i].LineD[0].CSpeech + AllLine[i].LineD[0].DSpeech
    obj.Interaction = 50
    obj.AllTime = AllLine[i].LineD[0].AllTime
    Object.assign(obj, agenda_rate, Radar)
    GroupProjectD1.push(obj)
  }
  console.log(GroupProjectD1)
}

export { DataProcess };

