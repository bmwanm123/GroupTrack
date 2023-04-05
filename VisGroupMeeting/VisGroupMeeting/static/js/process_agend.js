var dataProcess = () => {
//  //对比1
//   var data = [
//     {
//       "startTime": "50.42",
//       "endTime": "50.99",
//       "role": "B",
//       "text": "Okay.",
//       "agenda": "-",
//       "agenda_similiarity": "-"
//     },
//     {
//       "startTime": "53.56",
//       "endTime": "53.96",
//       "role": "B",
//       "text": "Right.",
//       "agenda": "-",
//       "agenda_similiarity": "-"
//     },
//     {
//       "startTime": "55.98",
//       "endTime": "77.29",
//       "role": "B",
//       "text": "Um well this is the kick-off meeting for our our project. Um and um this is just what we're gonna be doing over the next twenty five minutes. Um so first of all , just to kind of make sure that we all know each other , I'm Laura and I'm the project manager. Do you want to introduce yourself again?",
//       "agenda": 0,
//       "agenda_similiarity": 0.21955385764175592
//     },
//     {
//       "startTime": "67.21",
//       "endTime": "67.45",
//       "role": "D",
//       "text": "Mm-hmm.",
//       "agenda": 0,
//       "agenda_similiarity": 0.21955385764175592
//     },
//     {
//       "startTime": "74.89",
//       "endTime": "75.24",
//       "role": "D",
//       "text": "Great.",
//       "agenda": 0,
//       "agenda_similiarity": 0.21955385764175592
//     },
//     {
//       "startTime": "77.44",
//       "endTime": "80.87",
//       "role": "A",
//       "text": "Hi , I'm David and I'm supposed to be an industrial designer.",
//       "agenda": 0,
//       "agenda_similiarity": 0.21955385764175592
//     },
//     {
//       "startTime": "80.81",
//       "endTime": "81.26",
//       "role": "B",
//       "text": "Okay.",
//       "agenda": 0,
//       "agenda_similiarity": 0.21955385764175592
//     },
//     {
//       "startTime": "82.08",
//       "endTime": "86.5",
//       "role": "D",
//       "text": "And I'm Andrew and I'm uh our marketing expert.",
//       "agenda": 0,
//       "agenda_similiarity": 0.21955385764175592
//     },
//     {
//       "startTime": "85.99",
//       "endTime": "88.71",
//       "role": "C",
//       "text": "Um I'm Craig and I'm User Interface.",
//       "agenda": 0,
//       "agenda_similiarity": 0.21955385764175592
//     },
//     {
//       "startTime": "89.3",
//       "endTime": "101.76",
//       "role": "B",
//       "text": "Great. Okay. Um so we're designing a new remote control and um Oh I have to record who's here actually. So that's David , Andrew and Craig , isn't it?",
//       "agenda": 3,
//       "agenda_similiarity": 0.21052426560715892
//     },
//     {
//       "startTime": "104.89",
//       "endTime": "106.58",
//       "role": "B",
//       "text": "And you all arrived on time.",
//       "agenda": 3,
//       "agenda_similiarity": 0.21052426560715892
//     },
//     {
//       "startTime": "108.96",
//       "endTime": "132.03",
//       "role": "B",
//       "text": "Um yeah so des uh design a new remote control. Um , as you can see it's supposed to be original , trendy and user friendly. Um so that's kind of our our brief , as it were. Um and so there are three different stages to the design. Um I'm not really sure what what you guys have already received um in your emails. What did you get?",
//       "agenda": 1,
//       "agenda_similiarity": 0.22188848510190115
//     },
//     {
//       "startTime": "132.57",
//       "endTime": "141.98",
//       "role": "A",
//       "text": "Um , I just got the project announcement about what the project is. Designing a remote control. That's about it , didn't get anything else. Did you get the same thing?",
//       "agenda": 1,
//       "agenda_similiarity": 0.22188848510190115
//     },
//     {
//       "startTime": "135.08",
//       "endTime": "135.44",
//       "role": "B",
//       "text": "Mm-hmm.",
//       "agenda": 1,
//       "agenda_similiarity": 0.22188848510190115
//     },
//     {
//       "startTime": "137.12",
//       "endTime": "137.39",
//       "role": "D",
//       "text": "Mm-hmm.",
//       "agenda": 1,
//       "agenda_similiarity": 0.22188848510190115
//     },
//     {
//       "startTime": "138.96",
//       "endTime": "140.56",
//       "role": "D",
//       "text": "Mm-hmm. Yeah , that's that's it.",
//       "agenda": 1,
//       "agenda_similiarity": 0.22188848510190115
//     },
//     {
//       "startTime": "140.1",
//       "endTime": "167.31",
//       "role": "B",
//       "text": "Is that what everybody got? Okay. Um. So we're gonna have like individual work and then a meeting about it. And repeat that process three times. Um and at this point we get try out the whiteboard over there. Um. So uh you get to draw your favourite animal and sum up your favourite characteristics of it. So who would like to go first?",
//       "agenda": 1,
//       "agenda_similiarity": 0.22188848510190115
//     },
//     {
//       "startTime": "140.47",
//       "endTime": "140.83",
//       "role": "C",
//       "text": "Yeah.",
//       "agenda": 1,
//       "agenda_similiarity": 0.22188848510190115
//     },
//     {
//       "startTime": "141.8",
//       "endTime": "141.95",
//       "role": "D",
//       "text": "Yeah.",
//       "agenda": 1,
//       "agenda_similiarity": 0.22188848510190115
//     },
//     {
//       "startTime": "166.67",
//       "endTime": "167.81",
//       "role": "D",
//       "text": "I will go. That's fine.",
//       "agenda": 1,
//       "agenda_similiarity": 0.22188848510190115
//     },
//     {
//       "startTime": "167.84",
//       "endTime": "168.84",
//       "role": "B",
//       "text": "Very good.",
//       "agenda": 1,
//       "agenda_similiarity": 0.22188848510190115
//     },
//     {
//       "startTime": "174.2",
//       "endTime": "182.34",
//       "role": "D",
//       "text": "Alright. So This one here , right?",
//       "agenda": 1,
//       "agenda_similiarity": 0.35627469070745854
//     },
//     {
//       "startTime": "183.26",
//       "endTime": "184.24",
//       "role": "B",
//       "text": "Mm-hmm.",
//       "agenda": 1,
//       "agenda_similiarity": 0.35627469070745854
//     },
//     {
//       "startTime": "183.93",
//       "endTime": "204.24",
//       "role": "D",
//       "text": "Okay. Very nice. Alright. My favourite animal is like A beagle.",
//       "agenda": 1,
//       "agenda_similiarity": 0.35627469070745854
//     },
//     {
//       "startTime": "211.97",
//       "endTime": "242.41",
//       "role": "D",
//       "text": "Um charac favourite characteristics of it? Is that right? Uh , right , well basically um high priority for any animal for me is that they be willing to take a lot of physical affection from their family. And , yeah that they have lots of personality and uh be fit and in robust good health. So this is blue. Blue beagle. My family's beagle.",
//       "agenda": 1,
//       "agenda_similiarity": 0.35627469070745854
//     },
//     {
//       "startTime": "215.95",
//       "endTime": "216.77",
//       "role": "B",
//       "text": "Yeah. Yeah.",
//       "agenda": 1,
//       "agenda_similiarity": 0.35627469070745854
//     },
//     {
//       "startTime": "243.4",
//       "endTime": "245.7",
//       "role": "B",
//       "text": "Right. Lovely.",
//       "agenda": 1,
//       "agenda_similiarity": 0.35627469070745854
//     },
//     {
//       "startTime": "255.07",
//       "endTime": "257.26",
//       "role": "C",
//       "text": "Well , my favourite animal would be a monkey.",
//       "agenda": 1,
//       "agenda_similiarity": 0.22188848510190115
//     },
//     {
//       "startTime": "268.0",
//       "endTime": "273.99",
//       "role": "C",
//       "text": "Then they're small cute and furry , and uh when planet of the apes becomes real , I'm gonna be up there with them.",
//       "agenda": 1,
//       "agenda_similiarity": 0.22188848510190115
//     },
//     {
//       "startTime": "275.67",
//       "endTime": "276.02",
//       "role": "B",
//       "text": "Right.",
//       "agenda": 1,
//       "agenda_similiarity": 0.22188848510190115
//     },
//     {
//       "startTime": "275.83",
//       "endTime": "276.15",
//       "role": "A",
//       "text": "Cool.",
//       "agenda": 1,
//       "agenda_similiarity": 0.22188848510190115
//     },
//     {
//       "startTime": "280.75",
//       "endTime": "282.65",
//       "role": "A",
//       "text": "There's too much gear.",
//       "agenda": 1,
//       "agenda_similiarity": 0.22188848510190115
//     },
//     {
//       "startTime": "285.96",
//       "endTime": "293.37",
//       "role": "B",
//       "text": "You can take as long over this as you like , because we haven't got an awful lot to discuss. Ok oh we do we do. Don't feel like you're in a rush , anyway.",
//       "agenda": 0,
//       "agenda_similiarity": 0.17642399439062015
//     },
//     {
//       "startTime": "293.26",
//       "endTime": "294.25",
//       "role": "A",
//       "text": "Okay.",
//       "agenda": 0,
//       "agenda_similiarity": 0.17642399439062015
//     },
//     {
//       "startTime": "296.02",
//       "endTime": "300.92",
//       "role": "D",
//       "text": "I coulda told you a whole lot more about beagles. Boy , let me tell you.",
//       "agenda": 0,
//       "agenda_similiarity": 0.17642399439062015
//     },
//     {
//       "startTime": "297.94",
//       "endTime": "300.43",
//       "role": "B",
//       "text": "Ach why not We might have to get you up again then.",
//       "agenda": 0,
//       "agenda_similiarity": 0.17642399439062015
//     },
//     {
//       "startTime": "301.14",
//       "endTime": "303.58",
//       "role": "B",
//       "text": "I don't know what mine is. I'm gonna have to think on the spot now.",
//       "agenda": 1,
//       "agenda_similiarity": 0.22188848510190115
//     },
//     {
//       "startTime": "307.06",
//       "endTime": "307.9",
//       "role": "D",
//       "text": "Impressionist.",
//       "agenda": "-",
//       "agenda_similiarity": "-"
//     },
//     {
//       "startTime": "309.38",
//       "endTime": "310.85",
//       "role": "A",
//       "text": "Can't draw.",
//       "agenda": 1,
//       "agenda_similiarity": 0.15950529210077397
//     },
//     {
//       "startTime": "312.05",
//       "endTime": "315.13",
//       "role": "B",
//       "text": "Is that a whale?",
//       "agenda": 1,
//       "agenda_similiarity": 0.15950529210077397
//     },
//     {
//       "startTime": "312.06",
//       "endTime": "312.84",
//       "role": "A",
//       "text": "Um.",
//       "agenda": 1,
//       "agenda_similiarity": 0.15950529210077397
//     },
//     {
//       "startTime": "313.09",
//       "endTime": "313.52",
//       "role": "A",
//       "text": "Yeah.",
//       "agenda": 1,
//       "agenda_similiarity": 0.15950529210077397
//     },
//     {
//       "startTime": "318.58",
//       "endTime": "331.57",
//       "role": "A",
//       "text": "Um , well anyway , I don't know , it's just the first animal I can think off the top of my head. Um. Yes. Big reason is 'cause I'm allergic to most animals. Allergic to animal fur , so um fish was a natural choice.",
//       "agenda": 1,
//       "agenda_similiarity": 0.15950529210077397
//     },
//     {
//       "startTime": "327.91",
//       "endTime": "328.53",
//       "role": "B",
//       "text": "Ah.",
//       "agenda": 1,
//       "agenda_similiarity": 0.15950529210077397
//     },
//     {
//       "startTime": "332.03",
//       "endTime": "337.7",
//       "role": "A",
//       "text": "Um , yeah , and I kind of like whales. They come in and go eat everything in sight.",
//       "agenda": 1,
//       "agenda_similiarity": 0.15950529210077397
//     },
//     {
//       "startTime": "338.22",
//       "endTime": "341.52",
//       "role": "A",
//       "text": "And they're quite harmless and mild and interesting.",
//       "agenda": 1,
//       "agenda_similiarity": 0.15950529210077397
//     },
//     {
//       "startTime": "338.48",
//       "endTime": "339.05",
//       "role": "D",
//       "text": "Alright.",
//       "agenda": 1,
//       "agenda_similiarity": 0.15950529210077397
//     },
//     {
//       "startTime": "341.85",
//       "endTime": "342.2",
//       "role": "D",
//       "text": "Mm.",
//       "agenda": 1,
//       "agenda_similiarity": 0.15950529210077397
//     },
//     {
//       "startTime": "342.42",
//       "endTime": "346.85",
//       "role": "B",
//       "text": "Okay. God , I still don't know what I'm gonna write about. Um.",
//       "agenda": 1,
//       "agenda_similiarity": 0.2880213045076271
//     },
//     {
//       "startTime": "349.66",
//       "endTime": "350.84",
//       "role": "D",
//       "text": "Superb sketch , by the way.",
//       "agenda": 1,
//       "agenda_similiarity": 0.2880213045076271
//     },
//     {
//       "startTime": "353.86",
//       "endTime": "355.11",
//       "role": "A",
//       "text": "Tail's a bit big , I think.",
//       "agenda": 1,
//       "agenda_similiarity": 0.2880213045076271
//     },
//     {
//       "startTime": "354.91",
//       "endTime": "368.63",
//       "role": "B",
//       "text": "I was gonna choose a dog as well. But I'll just draw a different kind of dog. M my favourite animal is my own dog at home. Um That doesn't really look like him , actually.",
//       "agenda": 1,
//       "agenda_similiarity": 0.2880213045076271
//     },
//     {
//       "startTime": "359.62",
//       "endTime": "359.9",
//       "role": "D",
//       "text": "Yep.",
//       "agenda": 1,
//       "agenda_similiarity": 0.2880213045076271
//     },
//     {
//       "startTime": "373.3",
//       "endTime": "374.72",
//       "role": "B",
//       "text": "He looks more like a pig , actually.",
//       "agenda": 1,
//       "agenda_similiarity": 0.2880213045076271
//     },
//     {
//       "startTime": "375.84",
//       "endTime": "376.27",
//       "role": "B",
//       "text": "Ah well.",
//       "agenda": 1,
//       "agenda_similiarity": 0.2880213045076271
//     },
//     {
//       "startTime": "378.46",
//       "endTime": "380.14",
//       "role": "D",
//       "text": "I see a dog in there. Yep.",
//       "agenda": 1,
//       "agenda_similiarity": 0.2880213045076271
//     },
//     {
//       "startTime": "379.52",
//       "endTime": "380.97",
//       "role": "B",
//       "text": "Do you? Oh that's very good of you.",
//       "agenda": 1,
//       "agenda_similiarity": 0.2880213045076271
//     },
//     {
//       "startTime": "382.82",
//       "endTime": "383.68",
//       "role": "D",
//       "text": "Now I see a rooster.",
//       "agenda": 1,
//       "agenda_similiarity": 0.2880213045076271
//     },
//     {
//       "startTime": "388.27",
//       "endTime": "389.07",
//       "role": "B",
//       "text": "Uh.",
//       "agenda": "-",
//       "agenda_similiarity": "-"
//     },
//     {
//       "startTime": "393.42",
//       "endTime": "394.21",
//       "role": "D",
//       "text": "What kind is it?",
//       "agenda": 0,
//       "agenda_similiarity": 0.1739773837181985
//     },
//     {
//       "startTime": "394.87",
//       "endTime": "441.92",
//       "role": "B",
//       "text": "Um he's a mixture of uh various things. Um and what do I like about him , um That's just to suggest that his tail wags. Um he's very friendly and cheery and always pleased to see you , and very kind of affectionate and um uh and he's quite quite wee as well so you know he can doesn't take up too much space. Um and uh And he does a funny thing where he chases his tail as well , which is quite amusing , so It is. I think it is. He only does it after he's had his dinner and um he'll just all of a sudden just get up and start chasing his tail 'round the living room.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1739773837181985
//     },
//     {
//       "startTime": "431.27",
//       "endTime": "433.44",
//       "role": "D",
//       "text": "Is he aware that th it's his own cha tail he's chasing?",
//       "agenda": 0,
//       "agenda_similiarity": 0.1739773837181985
//     },
//     {
//       "startTime": "440.33",
//       "endTime": "440.47",
//       "role": "D",
//       "text": "Hmm.",
//       "agenda": "-",
//       "agenda_similiarity": "-"
//     },
//     {
//       "startTime": "442.02",
//       "endTime": "443.21",
//       "role": "A",
//       "text": "It's an after dinner dog then.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1739773837181985
//     },
//     {
//       "startTime": "443.59",
//       "endTime": "448.08",
//       "role": "B",
//       "text": "Yeah , so uh Yeah , maybe.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1739773837181985
//     },
//     {
//       "startTime": "444.05",
//       "endTime": "448.71",
//       "role": "D",
//       "text": "Probably when he was little he got lots of attention for doing it and has forever been conditioned.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1739773837181985
//     },
//     {
//       "startTime": "449.0",
//       "endTime": "453.61",
//       "role": "B",
//       "text": "Maybe. Right , um where did you find this? Just down here? Yeah.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1739773837181985
//     },
//     {
//       "startTime": "455.51",
//       "endTime": "456.76",
//       "role": "B",
//       "text": "Okay.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1739773837181985
//     },
//     {
//       "startTime": "458.92",
//       "endTime": "462.97",
//       "role": "B",
//       "text": "Um what are we doing next? Uh um.",
//       "agenda": 2,
//       "agenda_similiarity": 0.22893564042470535
//     },
//     {
//       "startTime": "465.51",
//       "endTime": "495.0",
//       "role": "B",
//       "text": "Okay , uh we now need to discuss the project finance. Um so according to the brief um we're gonna be selling this remote control for twenty five Euro , um and we're aiming to make fifty million Euro. Um so we're gonna be selling this on an international scale. And uh we don't want it to cost any more than uh twelve fifty Euros , so fifty percent of the selling price.",
//       "agenda": 2,
//       "agenda_similiarity": 0.22893564042470535
//     },
//     {
//       "startTime": "488.56",
//       "endTime": "488.91",
//       "role": "D",
//       "text": "'Kay.",
//       "agenda": 2,
//       "agenda_similiarity": 0.22893564042470535
//     },
//     {
//       "startTime": "496.02",
//       "endTime": "497.6",
//       "role": "D",
//       "text": "Um , can we just go over that again?",
//       "agenda": 2,
//       "agenda_similiarity": 0.22893564042470535
//     },
//     {
//       "startTime": "497.99",
//       "endTime": "498.46",
//       "role": "B",
//       "text": "Sure.",
//       "agenda": 2,
//       "agenda_similiarity": 0.22893564042470535
//     },
//     {
//       "startTime": "499.16",
//       "endTime": "504.1",
//       "role": "D",
//       "text": "Uh , so bas at twel Alright , yeah. Okay.",
//       "agenda": 2,
//       "agenda_similiarity": 0.11054476336301995
//     },
//     {
//       "startTime": "505.28",
//       "endTime": "514.0",
//       "role": "D",
//       "text": "So cost like production cost is twelve fifty , but selling price is is that wholesale or retail? Like on the shelf.",
//       "agenda": 2,
//       "agenda_similiarity": 0.5357301816498307
//     },
//     {
//       "startTime": "508.17",
//       "endTime": "508.92",
//       "role": "B",
//       "text": "All together.",
//       "agenda": 2,
//       "agenda_similiarity": 0.5357301816498307
//     },
//     {
//       "startTime": "515.16",
//       "endTime": "518.91",
//       "role": "B",
//       "text": "Um I dunno. I imagine That's a good question.",
//       "agenda": 2,
//       "agenda_similiarity": 0.5357301816498307
//     },
//     {
//       "startTime": "518.31",
//       "endTime": "522.57",
//       "role": "D",
//       "text": "Our sale our sale anyway. Yeah , okay okay.",
//       "agenda": 2,
//       "agenda_similiarity": 0.5357301816498307
//     },
//     {
//       "startTime": "519.67",
//       "endTime": "530.2",
//       "role": "B",
//       "text": "I imagine it probably is our sale actually because it's probably up to the the um the retailer to uh sell it for whatever price they want. Um.",
//       "agenda": 2,
//       "agenda_similiarity": 0.5357301816498307
//     },
//     {
//       "startTime": "526.79",
//       "endTime": "527.05",
//       "role": "D",
//       "text": "Okay.",
//       "agenda": 2,
//       "agenda_similiarity": 0.5357301816498307
//     },
//     {
//       "startTime": "528.9",
//       "endTime": "529.14",
//       "role": "D",
//       "text": "Mm-hmm.",
//       "agenda": "-",
//       "agenda_similiarity": "-"
//     },
//     {
//       "startTime": "531.58",
//       "endTime": "531.81",
//       "role": "D",
//       "text": "Alright.",
//       "agenda": 2,
//       "agenda_similiarity": 0.17046931316543884
//     },
//     {
//       "startTime": "531.83",
//       "endTime": "538.19",
//       "role": "B",
//       "text": "But I I don't know , I mean do you think the fact that it's going to be sold internationally will have a bearing on how we design it at all?",
//       "agenda": 2,
//       "agenda_similiarity": 0.17046931316543884
//     },
//     {
//       "startTime": "538.77",
//       "endTime": "539.13",
//       "role": "D",
//       "text": "Yes.",
//       "agenda": 2,
//       "agenda_similiarity": 0.17046931316543884
//     },
//     {
//       "startTime": "539.31",
//       "endTime": "542.15",
//       "role": "B",
//       "text": "Think it will? Um.",
//       "agenda": 2,
//       "agenda_similiarity": 0.17046931316543884
//     },
//     {
//       "startTime": "540.69",
//       "endTime": "540.94",
//       "role": "D",
//       "text": "Mm-hmm.",
//       "agenda": 2,
//       "agenda_similiarity": 0.17046931316543884
//     },
//     {
//       "startTime": "543.86",
//       "endTime": "544.12",
//       "role": "D",
//       "text": "Mm-hmm.",
//       "agenda": "-",
//       "agenda_similiarity": "-"
//     },
//     {
//       "startTime": "545.43",
//       "endTime": "546.06",
//       "role": "B",
//       "text": "Hmm.",
//       "agenda": "-",
//       "agenda_similiarity": "-"
//     },
//     {
//       "startTime": "548.28",
//       "endTime": "565.35",
//       "role": "D",
//       "text": "Well right away I'm wondering if there's um th th uh , like with D_V_D_ players , if there are zones. Um f frequencies or something um as well as uh characters , um different uh keypad styles and s symbols.",
//       "agenda": 3,
//       "agenda_similiarity": 0.25776533628240555
//     },
//     {
//       "startTime": "553.78",
//       "endTime": "558.06",
//       "role": "B",
//       "text": "Oh yeah , regions and stuff , yeah. Yeah. Okay.",
//       "agenda": 3,
//       "agenda_similiarity": 0.25776533628240555
//     },
//     {
//       "startTime": "565.05",
//       "endTime": "565.32",
//       "role": "A",
//       "text": "Hmm.",
//       "agenda": 3,
//       "agenda_similiarity": 0.25776533628240555
//     },
//     {
//       "startTime": "565.13",
//       "endTime": "571.01",
//       "role": "B",
//       "text": "Yeah. Well for a remote control , do you think that will be I suppose it's depends on how complicated our remote control is.",
//       "agenda": 3,
//       "agenda_similiarity": 0.25776533628240555
//     },
//     {
//       "startTime": "566.17",
//       "endTime": "566.7",
//       "role": "D",
//       "text": "Um.",
//       "agenda": 3,
//       "agenda_similiarity": 0.25776533628240555
//     },
//     {
//       "startTime": "568.46",
//       "endTime": "568.83",
//       "role": "D",
//       "text": "I don't know.",
//       "agenda": 3,
//       "agenda_similiarity": 0.25776533628240555
//     },
//     {
//       "startTime": "571.22",
//       "endTime": "571.58",
//       "role": "D",
//       "text": "Yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.25776533628240555
//     },
//     {
//       "startTime": "571.74",
//       "endTime": "580.21",
//       "role": "A",
//       "text": "It does make sense from maybe the design point of view 'cause you have more complicated characters like European languages , then you need more buttons.",
//       "agenda": 3,
//       "agenda_similiarity": 0.25776533628240555
//     },
//     {
//       "startTime": "580.42",
//       "endTime": "583.9",
//       "role": "B",
//       "text": "Yeah , yeah. Okay.",
//       "agenda": 3,
//       "agenda_similiarity": 0.25776533628240555
//     },
//     {
//       "startTime": "580.66",
//       "endTime": "580.94",
//       "role": "D",
//       "text": "Yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.25776533628240555
//     },
//     {
//       "startTime": "581.3",
//       "endTime": "582.52",
//       "role": "A",
//       "text": "So , possibly.",
//       "agenda": 3,
//       "agenda_similiarity": 0.25776533628240555
//     },
//     {
//       "startTime": "582.33",
//       "endTime": "616.94",
//       "role": "D",
//       "text": "Yeah. And then a and then al the other thing international is on top of the price. I'm thinking the price might might appeal to a certain market in one region , whereas in another it'll be different , so Just a chara just a characteristic of the Just Or just like , basic product podi positioning , the twenty five Euro remote control might be a big hit in London , might not be such a big hit in Greece , who knows , something like that , yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.25776533628240555
//     },
//     {
//       "startTime": "597.79",
//       "endTime": "603.43",
//       "role": "B",
//       "text": "What , just like in terms of like the wealth of the country? Like how much money people have to spend on things like?",
//       "agenda": 3,
//       "agenda_similiarity": 0.25776533628240555
//     },
//     {
//       "startTime": "615.74",
//       "endTime": "617.28",
//       "role": "B",
//       "text": "Aye , I see what you mean , yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.25776533628240555
//     },
//     {
//       "startTime": "619.01",
//       "endTime": "624.87",
//       "role": "B",
//       "text": "Marketing. Good marketing thoughts. Oh gosh , I should be writing all this down. Um.",
//       "agenda": 3,
//       "agenda_similiarity": 0.25776533628240555
//     },
//     {
//       "startTime": "620.48",
//       "endTime": "620.64",
//       "role": "D",
//       "text": "Yep.",
//       "agenda": 3,
//       "agenda_similiarity": 0.25776533628240555
//     },
//     {
//       "startTime": "655.45",
//       "endTime": "680.81",
//       "role": "D",
//       "text": "Right away I'm making some kind of assumptions about what what information we're given here , thinking , 'kay trendy probably means something other than just basic , something other than just standard. Um so I'm wondering right away , is selling twenty five Euros , is that sort of the thi is this gonna to be like the premium product kinda thing or Uh-huh.",
//       "agenda": 2,
//       "agenda_similiarity": 0.2167909857468998
//     },
//     {
//       "startTime": "660.7",
//       "endTime": "661.22",
//       "role": "B",
//       "text": "Mm.",
//       "agenda": 2,
//       "agenda_similiarity": 0.2167909857468998
//     },
//     {
//       "startTime": "665.36",
//       "endTime": "665.84",
//       "role": "B",
//       "text": "Yeah.",
//       "agenda": 2,
//       "agenda_similiarity": 0.2167909857468998
//     },
//     {
//       "startTime": "677.15",
//       "endTime": "680.53",
//       "role": "B",
//       "text": "Yeah , yeah. Like how much does , you know , a remote control cost.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1739773837181985
//     },
//     {
//       "startTime": "681.66",
//       "endTime": "691.58",
//       "role": "B",
//       "text": "Well twenty five Euro , I mean that's um that's about like eighteen pounds or something , isn't it? Or no , is it as much as that? Sixteen seventeen eighteen pounds.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1739773837181985
//     },
//     {
//       "startTime": "687.72",
//       "endTime": "688.11",
//       "role": "D",
//       "text": "Mm-hmm.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1739773837181985
//     },
//     {
//       "startTime": "689.77",
//       "endTime": "689.98",
//       "role": "D",
//       "text": "Yep.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1739773837181985
//     },
//     {
//       "startTime": "691.16",
//       "endTime": "691.97",
//       "role": "D",
//       "text": "Yeah , I'd say so , yeah.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1739773837181985
//     },
//     {
//       "startTime": "692.42",
//       "endTime": "700.41",
//       "role": "B",
//       "text": "Um , I dunno , I've never bought a remote control , so I don't know how how good a remote control that would get you. Um.",
//       "agenda": 3,
//       "agenda_similiarity": 0.2770152784502575
//     },
//     {
//       "startTime": "696.23",
//       "endTime": "696.58",
//       "role": "D",
//       "text": "No.",
//       "agenda": 3,
//       "agenda_similiarity": 0.2770152784502575
//     },
//     {
//       "startTime": "697.98",
//       "endTime": "702.01",
//       "role": "D",
//       "text": "Yeah , yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.2770152784502575
//     },
//     {
//       "startTime": "702.02",
//       "endTime": "705.01",
//       "role": "B",
//       "text": "But yeah , I suppose it has to look kind of cool and gimmicky.",
//       "agenda": 3,
//       "agenda_similiarity": 0.2770152784502575
//     },
//     {
//       "startTime": "704.03",
//       "endTime": "704.41",
//       "role": "D",
//       "text": "Mm-hmm.",
//       "agenda": 3,
//       "agenda_similiarity": 0.2770152784502575
//     },
//     {
//       "startTime": "707.1",
//       "endTime": "710.07",
//       "role": "B",
//       "text": "Um right , okay.",
//       "agenda": 2,
//       "agenda_similiarity": 0.18921711804071958
//     },
//     {
//       "startTime": "711.43",
//       "endTime": "721.44",
//       "role": "B",
//       "text": "Let me just scoot on ahead here. Okay. Um well d Does anybody have anything to add to uh to the finance issue at all?",
//       "agenda": 2,
//       "agenda_similiarity": 0.18921711804071958
//     },
//     {
//       "startTime": "722.77",
//       "endTime": "731.07",
//       "role": "D",
//       "text": "Do we have any other background information on like how that compares to other other Yeah.",
//       "agenda": 2,
//       "agenda_similiarity": 0.18921711804071958
//     },
//     {
//       "startTime": "722.81",
//       "endTime": "732.87",
//       "role": "B",
//       "text": "Thin No , actually. That would be useful , though , wouldn't it , if you knew like what your money would get you now.",
//       "agenda": 2,
//       "agenda_similiarity": 0.18921711804071958
//     },
//     {
//       "startTime": "732.32",
//       "endTime": "732.54",
//       "role": "A",
//       "text": "Hmm.",
//       "agenda": 2,
//       "agenda_similiarity": 0.18921711804071958
//     },
//     {
//       "startTime": "734.73",
//       "endTime": "735.08",
//       "role": "D",
//       "text": "Mm-hmm.",
//       "agenda": 2,
//       "agenda_similiarity": 0.18921711804071958
//     },
//     {
//       "startTime": "735.11",
//       "endTime": "735.7",
//       "role": "B",
//       "text": "Mm-hmm.",
//       "agenda": 2,
//       "agenda_similiarity": 0.18921711804071958
//     },
//     {
//       "startTime": "753.67",
//       "endTime": "773.41",
//       "role": "D",
//       "text": "Yeah , interesting thing about discussing um production of a remote control for me is that l as you point out , I just don't think of remote controls as somethin something people consciously assess in their purchasing habits. It's just like getting shoelaces with shoes or something. It just comes along.",
//       "agenda": 2,
//       "agenda_similiarity": 0.27996985308972394
//     },
//     {
//       "startTime": "767.69",
//       "endTime": "768.25",
//       "role": "B",
//       "text": "Yeah , yeah.",
//       "agenda": 2,
//       "agenda_similiarity": 0.27996985308972394
//     },
//     {
//       "startTime": "772.01",
//       "endTime": "772.14",
//       "role": "B",
//       "text": "Oh.",
//       "agenda": "-",
//       "agenda_similiarity": "-"
//     },
//     {
//       "startTime": "772.8",
//       "endTime": "776.97",
//       "role": "B",
//       "text": "Five minutes to end of meeting. Oh , okay. We're a bit behind.",
//       "agenda": 3,
//       "agenda_similiarity": 0.12864483989878292
//     },
//     {
//       "startTime": "776.12",
//       "endTime": "793.63",
//       "role": "D",
//       "text": "Do you know what I mean? Like so sort of like how do you I I mean one one way of looking at it would be , well the people producing television sets , maybe they have to buy remote controls. Or another way is maybe people who have T_V_ sets are really fed up with their remote control and they really want a better one or something.",
//       "agenda": 3,
//       "agenda_similiarity": 0.22885891127983163
//     },
//     {
//       "startTime": "777.32",
//       "endTime": "777.89",
//       "role": "C",
//       "text": "Yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.22885891127983163
//     },
//     {
//       "startTime": "777.7",
//       "endTime": "778.02",
//       "role": "A",
//       "text": "Yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.22885891127983163
//     },
//     {
//       "startTime": "792.52",
//       "endTime": "804.33",
//       "role": "C",
//       "text": "I know um My parents went out and bought um remote controls because um they got fed up of having four or five different remote controls for each things the house. So um for them it was just how many devices control.",
//       "agenda": 3,
//       "agenda_similiarity": 0.22885891127983163
//     },
//     {
//       "startTime": "794.53",
//       "endTime": "817.04",
//       "role": "D",
//       "text": "But Right. Right. Okay so Right , so in function one of the priorities might be to combine as many uses I think so. Yeah , yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.22885891127983163
//     },
//     {
//       "startTime": "806.46",
//       "endTime": "806.98",
//       "role": "B",
//       "text": "Yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.22885891127983163
//     },
//     {
//       "startTime": "811.51",
//       "endTime": "820.83",
//       "role": "B",
//       "text": "Right , so do you think that should be like a main design aim of our remote control d you know , do your your satellite and your regular telly and your V_C_R_ and everything?",
//       "agenda": 3,
//       "agenda_similiarity": 0.22885891127983163
//     },
//     {
//       "startTime": "818.45",
//       "endTime": "818.67",
//       "role": "D",
//       "text": "Yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.22885891127983163
//     },
//     {
//       "startTime": "819.79",
//       "endTime": "879.22",
//       "role": "D",
//       "text": "Well like um , maybe what we could use is a sort of like a example of a successful other piece technology is palm palm pilots. They're gone from being just like little sort of scribble boards to cameras , M_P_ three players , telephones , everything , agenda. So , like , I wonder if we might add something new to the to the remote control market , such as the lighting in your house , or um Yeah , yeah. An Yeah. Like , p personally for me , at home I've I've combined the um the audio video of my television set and my D_V_D_ player and my C_D_ player. So they w all work actually function together but I have different remote controls for each of them. So it's sort of ironic that that then they're in there um you know , the sound and everything it's just one system. But each one's got its own little part.",
//       "agenda": 3,
//       "agenda_similiarity": 0.22885891127983163
//     },
//     {
//       "startTime": "832.76",
//       "endTime": "833.2",
//       "role": "B",
//       "text": "Mm-hmm.",
//       "agenda": 3,
//       "agenda_similiarity": 0.22885891127983163
//     },
//     {
//       "startTime": "840.25",
//       "endTime": "840.69",
//       "role": "B",
//       "text": "Yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.22885891127983163
//     },
//     {
//       "startTime": "843.99",
//       "endTime": "853.03",
//       "role": "B",
//       "text": "Or even like , you know , notes about um what you wanna watch. Like you might put in there oh I want to watch such and such and look a Oh that's a good idea. So extra functionalities.",
//       "agenda": 3,
//       "agenda_similiarity": 0.22885891127983163
//     },
//     {
//       "startTime": "866.59",
//       "endTime": "867.24",
//       "role": "B",
//       "text": "Mm-hmm.",
//       "agenda": 3,
//       "agenda_similiarity": 0.22885891127983163
//     },
//     {
//       "startTime": "876.88",
//       "endTime": "877.46",
//       "role": "B",
//       "text": "Hmm.",
//       "agenda": 3,
//       "agenda_similiarity": 0.22885891127983163
//     },
//     {
//       "startTime": "883.05",
//       "endTime": "902.62",
//       "role": "B",
//       "text": "Um okay , uh I'd wel we're gonna have to wrap up pretty quickly in the next couple of minutes. Um I'll just check we've nothing else. Okay. Um so anything else anybody wants to add about what they don't like about remote controls they've used , what they would really like to be part of this new one at all?",
//       "agenda": 3,
//       "agenda_similiarity": 0.22885891127983163
//     },
//     {
//       "startTime": "903.08",
//       "endTime": "903.98",
//       "role": "A",
//       "text": "And you keep losing them.",
//       "agenda": 3,
//       "agenda_similiarity": 0.22885891127983163
//     },
//     {
//       "startTime": "904.6",
//       "endTime": "906.08",
//       "role": "B",
//       "text": "You keep losing them. Okay.",
//       "agenda": 3,
//       "agenda_similiarity": 0.22885891127983163
//     },
//     {
//       "startTime": "904.75",
//       "endTime": "905.26",
//       "role": "D",
//       "text": "Mm.",
//       "agenda": 3,
//       "agenda_similiarity": 0.22885891127983163
//     },
//     {
//       "startTime": "906.45",
//       "endTime": "914.44",
//       "role": "A",
//       "text": "Finding them is really a pain , you know. I mean it's usually quite small , or when you want it right , it slipped behind the couch or it's kicked under the table.",
//       "agenda": 3,
//       "agenda_similiarity": 0.22885891127983163
//     },
//     {
//       "startTime": "907.47",
//       "endTime": "909.26",
//       "role": "D",
//       "text": "Mm. Mm.",
//       "agenda": 3,
//       "agenda_similiarity": 0.22885891127983163
//     },
//     {
//       "startTime": "911.1",
//       "endTime": "912.1",
//       "role": "D",
//       "text": "Mm-hmm. Mm-hmm.",
//       "agenda": 3,
//       "agenda_similiarity": 0.22885891127983163
//     },
//     {
//       "startTime": "913.17",
//       "endTime": "922.53",
//       "role": "B",
//       "text": "Yeah. W You get those ones where you can , if you like , whistle or make a really high pitched noise they beep. There I mean is that something we'd want to include , do you think?",
//       "agenda": 3,
//       "agenda_similiarity": 0.22885891127983163
//     },
//     {
//       "startTime": "913.22",
//       "endTime": "913.58",
//       "role": "D",
//       "text": "Yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.22885891127983163
//     },
//     {
//       "startTime": "914.77",
//       "endTime": "915.13",
//       "role": "D",
//       "text": "Yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.22885891127983163
//     },
//     {
//       "startTime": "915.45",
//       "endTime": "916.11",
//       "role": "A",
//       "text": "You know.",
//       "agenda": 3,
//       "agenda_similiarity": 0.22885891127983163
//     },
//     {
//       "startTime": "916.12",
//       "endTime": "919.69",
//       "role": "D",
//       "text": "That's just really good id Yep.",
//       "agenda": 3,
//       "agenda_similiarity": 0.22885891127983163
//     },
//     {
//       "startTime": "924.35",
//       "endTime": "956.35",
//       "role": "D",
//       "text": "Uh , sure. I remember when the first remote control my my family had was on a cable. Actually had a cable between it and the T_V_ and big like buttons that sort of like , like on a blender or something. And um , you know , when I think about what they are now , it's better , but actually it's still kind of , I dunno , like a massive junky thing on the table. Maybe we could think about how , could be more , you know , streamlined. S Something like that , yeah. Or whatever would be technologically reasonable.",
//       "agenda": 3,
//       "agenda_similiarity": 0.18791363349634702
//     },
//     {
//       "startTime": "925.37",
//       "endTime": "927.4",
//       "role": "B",
//       "text": "Dunno. Okay maybe.",
//       "agenda": 3,
//       "agenda_similiarity": 0.18791363349634702
//     },
//     {
//       "startTime": "937.0",
//       "endTime": "937.62",
//       "role": "B",
//       "text": "My goodness.",
//       "agenda": "-",
//       "agenda_similiarity": "-"
//     },
//     {
//       "startTime": "946.26",
//       "endTime": "948.04",
//       "role": "B",
//       "text": "Still feels quite primitive.",
//       "agenda": 3,
//       "agenda_similiarity": 0.16198693700262623
//     },
//     {
//       "startTime": "951.41",
//       "endTime": "952.78",
//       "role": "B",
//       "text": "Maybe like a touch screen or something?",
//       "agenda": 3,
//       "agenda_similiarity": 0.20235644531201774
//     },
//     {
//       "startTime": "954.09",
//       "endTime": "954.42",
//       "role": "B",
//       "text": "Okay.",
//       "agenda": "-",
//       "agenda_similiarity": "-"
//     },
//     {
//       "startTime": "956.36",
//       "endTime": "959.3",
//       "role": "B",
//       "text": "Uh-huh , okay. Well I guess that's up to our industrial designer.",
//       "agenda": 3,
//       "agenda_similiarity": 0.20235644531201774
//     },
//     {
//       "startTime": "957.54",
//       "endTime": "976.83",
//       "role": "D",
//       "text": "'Cause it could b it could it could be that f it could be that functionally that doesn't make it any better , but that just the appeal of of not having You know , these days there's a r pe things in people's homes are becoming more and more like chic , you know. Um , nicer materials and might be be worth exploring anyway.",
//       "agenda": 3,
//       "agenda_similiarity": 0.20235644531201774
//     },
//     {
//       "startTime": "962.22",
//       "endTime": "963.35",
//       "role": "B",
//       "text": "It looks better.",
//       "agenda": "-",
//       "agenda_similiarity": "-"
//     },
//     {
//       "startTime": "969.0",
//       "endTime": "969.47",
//       "role": "B",
//       "text": "Yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.20235644531201774
//     },
//     {
//       "startTime": "971.85",
//       "endTime": "972.39",
//       "role": "B",
//       "text": "Okay.",
//       "agenda": 3,
//       "agenda_similiarity": 0.20235644531201774
//     },
//     {
//       "startTime": "975.24",
//       "endTime": "975.63",
//       "role": "B",
//       "text": "Okay.",
//       "agenda": 3,
//       "agenda_similiarity": 0.20235644531201774
//     },
//     {
//       "startTime": "977.17",
//       "endTime": "1019.31",
//       "role": "B",
//       "text": "Right , well um so just to wrap up , the next meeting's gonna be in thirty minutes. So that's about um about ten to twelve by my watch. Um so inbetween now and then , um as the industrial designer , you're gonna be working on you know the actual working design of it so y you know what you're doing there. Um for user interface , technical functions , I guess that's you know like what we've been talking about , what it'll actually do. Um and uh marketing executive , you'll be just thinking about what it actually what , you know , what requirements it has to has to fulfil and you'll all get instructions emailed to you , I guess.",
//       "agenda": 0,
//       "agenda_similiarity": 0.2192508636824206
//     },
//     {
//       "startTime": "993.88",
//       "endTime": "994.02",
//       "role": "A",
//       "text": "Yep.",
//       "agenda": 0,
//       "agenda_similiarity": 0.2192508636824206
//     },
//     {
//       "startTime": "1019.67",
//       "endTime": "1020.01",
//       "role": "D",
//       "text": "Okay.",
//       "agenda": 0,
//       "agenda_similiarity": 0.2192508636824206
//     },
//     {
//       "startTime": "1021.55",
//       "endTime": "1022.56",
//       "role": "B",
//       "text": "Um.",
//       "agenda": "-",
//       "agenda_similiarity": "-"
//     },
//     {
//       "startTime": "1028.05",
//       "endTime": "1031.66",
//       "role": "B",
//       "text": "Yeah , so it's th the functional design stage is next , I guess.",
//       "agenda": 0,
//       "agenda_similiarity": 0.16842486800290984
//     },
//     {
//       "startTime": "1034.47",
//       "endTime": "1037.69",
//       "role": "B",
//       "text": "And uh and that's the end of the meeting.",
//       "agenda": 0,
//       "agenda_similiarity": 0.16842486800290984
//     },
//     {
//       "startTime": "1039.12",
//       "endTime": "1050.04",
//       "role": "B",
//       "text": "So I got that little message a lot sooner than I thought I would , so Mm-hmm.",
//       "agenda": 0,
//       "agenda_similiarity": 0.16842486800290984
//     },
//     {
//       "startTime": "1039.8",
//       "endTime": "1040.97",
//       "role": "D",
//       "text": "Um.",
//       "agenda": 0,
//       "agenda_similiarity": 0.16842486800290984
//     },
//     {
//       "startTime": "1047.17",
//       "endTime": "1074.44",
//       "role": "D",
//       "text": "Before we wrap up , just to make sure we're all on the same page here , um , do we We were given sort of an example of a coffee machine or something , right? Well , um are we at ma right now on the assumption that our television remote control may have features which go beyond the television? Or are we keeping sort of like a a design commitment to television features? I I don't know.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1835147150353203
//     },
//     {
//       "startTime": "1056.3",
//       "endTime": "1057.68",
//       "role": "B",
//       "text": "Uh-huh , yeah.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1835147150353203
//     },
//     {
//       "startTime": "1056.93",
//       "endTime": "1057.09",
//       "role": "A",
//       "text": "Mm-hmm.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1835147150353203
//     },
//     {
//       "startTime": "1068.76",
//       "endTime": "1088.2",
//       "role": "B",
//       "text": "Th Okay , well just very quickly 'cause this we're supposed to finish now. Um I guess that's up to us , I mean you probably want some kind of unique selling point of it , so um , you know Yeah.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1835147150353203
//     },
//     {
//       "startTime": "1076.56",
//       "endTime": "1078.06",
//       "role": "D",
//       "text": "Yep. Yeah , sure.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1835147150353203
//     },
//     {
//       "startTime": "1081.99",
//       "endTime": "1082.38",
//       "role": "D",
//       "text": "Okay.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1835147150353203
//     },
//     {
//       "startTime": "1084.36",
//       "endTime": "1086.91",
//       "role": "A",
//       "text": "I think one factor would be production cost.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1835147150353203
//     },
//     {
//       "startTime": "1086.96",
//       "endTime": "1087.76",
//       "role": "D",
//       "text": "Okay , yeah.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1835147150353203
//     },
//     {
//       "startTime": "1087.57",
//       "endTime": "1094.9",
//       "role": "A",
//       "text": "Because there's a cap there , so um depends on how much you can cram into that price. Um.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1835147150353203
//     },
//     {
//       "startTime": "1089.89",
//       "endTime": "1090.23",
//       "role": "D",
//       "text": "Okay.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1835147150353203
//     },
//     {
//       "startTime": "1093.82",
//       "endTime": "1094.41",
//       "role": "B",
//       "text": "Mm-hmm.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1835147150353203
//     },
//     {
//       "startTime": "1093.83",
//       "endTime": "1094.13",
//       "role": "D",
//       "text": "Okay.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1835147150353203
//     },
//     {
//       "startTime": "1095.78",
//       "endTime": "1096.16",
//       "role": "B",
//       "text": "Yeah.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1835147150353203
//     },
//     {
//       "startTime": "1096.03",
//       "endTime": "1098.43",
//       "role": "A",
//       "text": "I think that that's the main factor.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1835147150353203
//     },
//     {
//       "startTime": "1098.51",
//       "endTime": "1103.2",
//       "role": "B",
//       "text": "Okay. Right , okay , we'll that's that's the end of the meeting , then. Um.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1835147150353203
//     },
//     {
//       "startTime": "1098.52",
//       "endTime": "1098.85",
//       "role": "D",
//       "text": "Okay.",
//       "agenda": 0,
//       "agenda_similiarity": 0.1835147150353203
//     }
//   ]
//   var Rdata = [
//     {
//         "id": 0,
//         "startTime-endTime": "50.42-50.99",
//         "text": "Okay.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 1,
//         "startTime-endTime": "53.56-53.96",
//         "text": "Right.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 2,
//         "startTime-endTime": "55.98-77.29",
//         "text": "Um well this is the kick-off meeting for our our project. Um and um this is just what we're gonna be doing over the next twenty five minutes. Um so first of all , just to kind of make sure that we all know each other , I'm Laura and I'm the project manager. Do you want to introduce yourself again?",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 3,
//         "startTime-endTime": "67.21-67.45",
//         "text": "Mm-hmm.",
//         "speaker": "D",
//         "reply_to_id": "2"
//     },
//     {
//         "id": 4,
//         "startTime-endTime": "74.89-75.24",
//         "text": "Great.",
//         "speaker": "D",
//         "reply_to_id": "2"
//     },
//     {
//         "id": 5,
//         "startTime-endTime": "77.44-80.87",
//         "text": "Hi , I'm David and I'm supposed to be an industrial designer.",
//         "speaker": "A",
//         "reply_to_id": "2"
//     },
//     {
//         "id": 6,
//         "startTime-endTime": "80.81-81.26",
//         "text": "Okay.",
//         "speaker": "B",
//         "reply_to_id": "5"
//     },
//     {
//         "id": 7,
//         "startTime-endTime": "82.08-86.5",
//         "text": "And I'm Andrew and I'm uh our marketing expert.",
//         "speaker": "D",
//         "reply_to_id": "2"
//     },
//     {
//         "id": 8,
//         "startTime-endTime": "85.99-88.71",
//         "text": "Um I'm Craig and I'm User Interface.",
//         "speaker": "C",
//         "reply_to_id": "2"
//     },
//     {
//         "id": 9,
//         "startTime-endTime": "89.3-101.76",
//         "text": "Great. Okay. Um so we're designing a new remote control and um Oh I have to record who's here actually. So that's David , Andrew and Craig , isn't it?",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 10,
//         "startTime-endTime": "104.89-106.58",
//         "text": "And you all arrived on time.",
//         "speaker": "B",
//         "reply_to_id": "9"
//     },
//     {
//         "id": 11,
//         "startTime-endTime": "108.96-132.03",
//         "text": "Um yeah so des uh design a new remote control. Um , as you can see it's supposed to be original , trendy and user friendly. Um so that's kind of our our brief , as it were. Um and so there are three different stages to the design. Um I'm not really sure what what you guys have already received um in your emails. What did you get?",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 12,
//         "startTime-endTime": "132.57-141.98",
//         "text": "Um , I just got the project announcement about what the project is. Designing a remote control. That's about it , didn't get anything else. Did you get the same thing?",
//         "speaker": "A",
//         "reply_to_id": "11"
//     },
//     {
//         "id": 13,
//         "startTime-endTime": "135.08-135.44",
//         "text": "Mm-hmm.",
//         "speaker": "B",
//         "reply_to_id": "12"
//     },
//     {
//         "id": 14,
//         "startTime-endTime": "137.12-137.39",
//         "text": "Mm-hmm.",
//         "speaker": "D",
//         "reply_to_id": "12"
//     },
//     {
//         "id": 15,
//         "startTime-endTime": "138.96-140.56",
//         "text": "Mm-hmm. Yeah , that's that's it.",
//         "speaker": "D",
//         "reply_to_id": "12"
//     },
//     {
//         "id": 16,
//         "startTime-endTime": "140.1-167.31",
//         "text": "Is that what everybody got? Okay. Um. So we're gonna have like individual work and then a meeting about it. And repeat that process three times. Um and at this point we get try out the whiteboard over there. Um. So uh you get to draw your favourite animal and sum up your favourite characteristics of it. So who would like to go first?",
//         "speaker": "B",
//         "reply_to_id": "12"
//     },
//     {
//         "id": 17,
//         "startTime-endTime": "140.47-140.83",
//         "text": "Yeah.",
//         "speaker": "C",
//         "reply_to_id": "16"
//     },
//     {
//         "id": 18,
//         "startTime-endTime": "141.8-141.95",
//         "text": "Yeah.",
//         "speaker": "D",
//         "reply_to_id": "16"
//     },
//     {
//         "id": 19,
//         "startTime-endTime": "166.67-167.81",
//         "text": "I will go. That's fine.",
//         "speaker": "D",
//         "reply_to_id": "16"
//     },
//     {
//         "id": 20,
//         "startTime-endTime": "167.84-168.84",
//         "text": "Very good.",
//         "speaker": "B",
//         "reply_to_id": "19"
//     },
//     {
//         "id": 21,
//         "startTime-endTime": "174.2-182.34",
//         "text": "Alright. So This one here , right?",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 22,
//         "startTime-endTime": "183.26-184.24",
//         "text": "Mm-hmm.",
//         "speaker": "B",
//         "reply_to_id": "21"
//     },
//     {
//         "id": 23,
//         "startTime-endTime": "183.93-204.24",
//         "text": "Okay. Very nice. Alright. My favourite animal is like A beagle.",
//         "speaker": "D",
//         "reply_to_id": "22"
//     },
//     {
//         "id": 24,
//         "startTime-endTime": "211.97-242.41",
//         "text": "Um charac favourite characteristics of it? Is that right? Uh , right , well basically um high priority for any animal for me is that they be willing to take a lot of physical affection from their family. And , yeah that they have lots of personality and uh be fit and in robust good health. So this is blue. Blue beagle. My family's beagle.",
//         "speaker": "D",
//         "reply_to_id": "22"
//     },
//     {
//         "id": 25,
//         "startTime-endTime": "215.95-216.77",
//         "text": "Yeah. Yeah.",
//         "speaker": "B",
//         "reply_to_id": "24"
//     },
//     {
//         "id": 26,
//         "startTime-endTime": "243.4-245.7",
//         "text": "Right. Lovely.",
//         "speaker": "B",
//         "reply_to_id": "24"
//     },
//     {
//         "id": 27,
//         "startTime-endTime": "255.07-257.26",
//         "text": "Well , my favourite animal would be a monkey.",
//         "speaker": "C",
//         "reply_to_id": "16"
//     },
//     {
//         "id": 28,
//         "startTime-endTime": "268.0-273.99",
//         "text": "Then they're small cute and furry , and uh when planet of the apes becomes real , I'm gonna be up there with them.",
//         "speaker": "C",
//         "reply_to_id": "27"
//     },
//     {
//         "id": 29,
//         "startTime-endTime": "275.67-276.02",
//         "text": "Right.",
//         "speaker": "B",
//         "reply_to_id": "28"
//     },
//     {
//         "id": 30,
//         "startTime-endTime": "275.83-276.15",
//         "text": "Cool.",
//         "speaker": "A",
//         "reply_to_id": "28"
//     },
//     {
//         "id": 31,
//         "startTime-endTime": "280.75-282.65",
//         "text": "There's too much gear.",
//         "speaker": "A",
//         "reply_to_id": "28"
//     },
//     {
//         "id": 32,
//         "startTime-endTime": "285.96-293.37",
//         "text": "You can take as long over this as you like , because we haven't got an awful lot to discuss. Ok oh we do we do. Don't feel like you're in a rush , anyway.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 33,
//         "startTime-endTime": "293.26-294.25",
//         "text": "Okay.",
//         "speaker": "A",
//         "reply_to_id": "32"
//     },
//     {
//         "id": 34,
//         "startTime-endTime": "296.02-300.92",
//         "text": "I coulda told you a whole lot more about beagles. Boy , let me tell you.",
//         "speaker": "D",
//         "reply_to_id": "32"
//     },
//     {
//         "id": 35,
//         "startTime-endTime": "297.94-300.43",
//         "text": "Ach why not We might have to get you up again then.",
//         "speaker": "B",
//         "reply_to_id": "34"
//     },
//     {
//         "id": 36,
//         "startTime-endTime": "301.14-303.58",
//         "text": "I don't know what mine is. I'm gonna have to think on the spot now.",
//         "speaker": "B",
//         "reply_to_id": "16"
//     },
//     {
//         "id": 37,
//         "startTime-endTime": "307.06-307.9",
//         "text": "Impressionist.",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 38,
//         "startTime-endTime": "309.38-310.85",
//         "text": "Can't draw.",
//         "speaker": "A",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 39,
//         "startTime-endTime": "312.05-315.13",
//         "text": "Is that a whale?",
//         "speaker": "B",
//         "reply_to_id": "38"
//     },
//     {
//         "id": 40,
//         "startTime-endTime": "312.06-312.84",
//         "text": "Um.",
//         "speaker": "A",
//         "reply_to_id": "38"
//     },
//     {
//         "id": 41,
//         "startTime-endTime": "313.09-313.52",
//         "text": "Yeah.",
//         "speaker": "A",
//         "reply_to_id": "40"
//     },
//     {
//         "id": 42,
//         "startTime-endTime": "318.58-331.57",
//         "text": "Um , well anyway , I don't know , it's just the first animal I can think off the top of my head. Um. Yes. Big reason is 'cause I'm allergic to most animals. Allergic to animal fur , so um fish was a natural choice.",
//         "speaker": "A",
//         "reply_to_id": "40"
//     },
//     {
//         "id": 43,
//         "startTime-endTime": "327.91-328.53",
//         "text": "Ah.",
//         "speaker": "B",
//         "reply_to_id": "42"
//     },
//     {
//         "id": 44,
//         "startTime-endTime": "332.03-337.7",
//         "text": "Um , yeah , and I kind of like whales. They come in and go eat everything in sight.",
//         "speaker": "A",
//         "reply_to_id": "43"
//     },
//     {
//         "id": 45,
//         "startTime-endTime": "338.22-341.52",
//         "text": "And they're quite harmless and mild and interesting.",
//         "speaker": "A",
//         "reply_to_id": "44"
//     },
//     {
//         "id": 46,
//         "startTime-endTime": "338.48-339.05",
//         "text": "Alright.",
//         "speaker": "D",
//         "reply_to_id": "45"
//     },
//     {
//         "id": 47,
//         "startTime-endTime": "341.85-342.2",
//         "text": "Mm.",
//         "speaker": "D",
//         "reply_to_id": "46"
//     },
//     {
//         "id": 48,
//         "startTime-endTime": "342.42-346.85",
//         "text": "Okay. God , I still don't know what I'm gonna write about. Um.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 49,
//         "startTime-endTime": "349.66-350.84",
//         "text": "Superb sketch , by the way.",
//         "speaker": "D",
//         "reply_to_id": "48"
//     },
//     {
//         "id": 50,
//         "startTime-endTime": "353.86-355.11",
//         "text": "Tail's a bit big , I think.",
//         "speaker": "A",
//         "reply_to_id": "48"
//     },
//     {
//         "id": 51,
//         "startTime-endTime": "354.91-368.63",
//         "text": "I was gonna choose a dog as well. But I'll just draw a different kind of dog. M my favourite animal is my own dog at home. Um That doesn't really look like him , actually.",
//         "speaker": "B",
//         "reply_to_id": "50"
//     },
//     {
//         "id": 52,
//         "startTime-endTime": "359.62-359.9",
//         "text": "Yep.",
//         "speaker": "D",
//         "reply_to_id": "51"
//     },
//     {
//         "id": 53,
//         "startTime-endTime": "373.3-374.72",
//         "text": "He looks more like a pig , actually.",
//         "speaker": "B",
//         "reply_to_id": "51"
//     },
//     {
//         "id": 54,
//         "startTime-endTime": "375.84-376.27",
//         "text": "Ah well.",
//         "speaker": "B",
//         "reply_to_id": "53"
//     },
//     {
//         "id": 55,
//         "startTime-endTime": "378.46-380.14",
//         "text": "I see a dog in there. Yep.",
//         "speaker": "D",
//         "reply_to_id": "53"
//     },
//     {
//         "id": 56,
//         "startTime-endTime": "379.52-380.97",
//         "text": "Do you? Oh that's very good of you.",
//         "speaker": "B",
//         "reply_to_id": "55"
//     },
//     {
//         "id": 57,
//         "startTime-endTime": "382.82-383.68",
//         "text": "Now I see a rooster.",
//         "speaker": "D",
//         "reply_to_id": "56"
//     },
//     {
//         "id": 58,
//         "startTime-endTime": "388.27-389.07",
//         "text": "Uh.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 59,
//         "startTime-endTime": "393.42-394.21",
//         "text": "What kind is it?",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 60,
//         "startTime-endTime": "394.87-441.92",
//         "text": "Um he's a mixture of uh various things. Um and what do I like about him , um That's just to suggest that his tail wags. Um he's very friendly and cheery and always pleased to see you , and very kind of affectionate and um uh and he's quite quite wee as well so you know he can doesn't take up too much space. Um and uh And he does a funny thing where he chases his tail as well , which is quite amusing , so It is. I think it is. He only does it after he's had his dinner and um he'll just all of a sudden just get up and start chasing his tail 'round the living room.",
//         "speaker": "B",
//         "reply_to_id": "59"
//     },
//     {
//         "id": 61,
//         "startTime-endTime": "431.27-433.44",
//         "text": "Is he aware that th it's his own cha tail he's chasing?",
//         "speaker": "D",
//         "reply_to_id": "60"
//     },
//     {
//         "id": 62,
//         "startTime-endTime": "440.33-440.47",
//         "text": "Hmm.",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 63,
//         "startTime-endTime": "442.02-443.21",
//         "text": "It's an after dinner dog then.",
//         "speaker": "A",
//         "reply_to_id": "60"
//     },
//     {
//         "id": 64,
//         "startTime-endTime": "443.59-448.08",
//         "text": "Yeah , so uh Yeah , maybe.",
//         "speaker": "B",
//         "reply_to_id": "63"
//     },
//     {
//         "id": 65,
//         "startTime-endTime": "444.05-448.71",
//         "text": "Probably when he was little he got lots of attention for doing it and has forever been conditioned.",
//         "speaker": "D",
//         "reply_to_id": "60"
//     },
//     {
//         "id": 66,
//         "startTime-endTime": "449.0-453.61",
//         "text": "Maybe. Right , um where did you find this? Just down here? Yeah.",
//         "speaker": "B",
//         "reply_to_id": "65"
//     },
//     {
//         "id": 67,
//         "startTime-endTime": "455.51-456.76",
//         "text": "Okay.",
//         "speaker": "B",
//         "reply_to_id": "66"
//     },
//     {
//         "id": 68,
//         "startTime-endTime": "458.92-462.97",
//         "text": "Um what are we doing next? Uh um.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 69,
//         "startTime-endTime": "465.51-495.0",
//         "text": "Okay , uh we now need to discuss the project finance. Um so according to the brief um we're gonna be selling this remote control for twenty five Euro , um and we're aiming to make fifty million Euro. Um so we're gonna be selling this on an international scale. And uh we don't want it to cost any more than uh twelve fifty Euros , so fifty percent of the selling price.",
//         "speaker": "B",
//         "reply_to_id": "68"
//     },
//     {
//         "id": 70,
//         "startTime-endTime": "488.56-488.91",
//         "text": "'Kay.",
//         "speaker": "D",
//         "reply_to_id": "69"
//     },
//     {
//         "id": 71,
//         "startTime-endTime": "496.02-497.6",
//         "text": "Um , can we just go over that again?",
//         "speaker": "D",
//         "reply_to_id": "69"
//     },
//     {
//         "id": 72,
//         "startTime-endTime": "497.99-498.46",
//         "text": "Sure.",
//         "speaker": "B",
//         "reply_to_id": "71"
//     },
//     {
//         "id": 73,
//         "startTime-endTime": "499.16-504.1",
//         "text": "Uh , so bas at twel Alright , yeah. Okay.",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 74,
//         "startTime-endTime": "505.28-514.0",
//         "text": "So cost like production cost is twelve fifty , but selling price is is that wholesale or retail? Like on the shelf.",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 75,
//         "startTime-endTime": "508.17-508.92",
//         "text": "All together.",
//         "speaker": "B",
//         "reply_to_id": "74"
//     },
//     {
//         "id": 76,
//         "startTime-endTime": "515.16-518.91",
//         "text": "Um I dunno. I imagine That's a good question.",
//         "speaker": "B",
//         "reply_to_id": "74"
//     },
//     {
//         "id": 77,
//         "startTime-endTime": "518.31-522.57",
//         "text": "Our sale our sale anyway. Yeah , okay okay.",
//         "speaker": "D",
//         "reply_to_id": "76"
//     },
//     {
//         "id": 78,
//         "startTime-endTime": "519.67-530.2",
//         "text": "I imagine it probably is our sale actually because it's probably up to the the um the retailer to uh sell it for whatever price they want. Um.",
//         "speaker": "B",
//         "reply_to_id": "77"
//     },
//     {
//         "id": 79,
//         "startTime-endTime": "526.79-527.05",
//         "text": "Okay.",
//         "speaker": "D",
//         "reply_to_id": "78"
//     },
//     {
//         "id": 80,
//         "startTime-endTime": "528.9-529.14",
//         "text": "Mm-hmm.",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 81,
//         "startTime-endTime": "531.58-531.81",
//         "text": "Alright.",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 82,
//         "startTime-endTime": "531.83-538.19",
//         "text": "But I I don't know , I mean do you think the fact that it's going to be sold internationally will have a bearing on how we design it at all?",
//         "speaker": "B",
//         "reply_to_id": "81"
//     },
//     {
//         "id": 83,
//         "startTime-endTime": "538.77-539.13",
//         "text": "Yes.",
//         "speaker": "D",
//         "reply_to_id": "82"
//     },
//     {
//         "id": 84,
//         "startTime-endTime": "539.31-542.15",
//         "text": "Think it will? Um.",
//         "speaker": "B",
//         "reply_to_id": "83"
//     },
//     {
//         "id": 85,
//         "startTime-endTime": "540.69-540.94",
//         "text": "Mm-hmm.",
//         "speaker": "D",
//         "reply_to_id": "84"
//     },
//     {
//         "id": 86,
//         "startTime-endTime": "543.86-544.12",
//         "text": "Mm-hmm.",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 87,
//         "startTime-endTime": "545.43-546.06",
//         "text": "Hmm.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 88,
//         "startTime-endTime": "548.28-565.35",
//         "text": "Well right away I'm wondering if there's um th th uh , like with D_V_D_ players , if there are zones. Um f frequencies or something um as well as uh characters , um different uh keypad styles and s symbols.",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 89,
//         "startTime-endTime": "553.78-558.06",
//         "text": "Oh yeah , regions and stuff , yeah. Yeah. Okay.",
//         "speaker": "B",
//         "reply_to_id": "88"
//     },
//     {
//         "id": 90,
//         "startTime-endTime": "565.05-565.32",
//         "text": "Hmm.",
//         "speaker": "A",
//         "reply_to_id": "88"
//     },
//     {
//         "id": 91,
//         "startTime-endTime": "565.13-571.01",
//         "text": "Yeah. Well for a remote control , do you think that will be I suppose it's depends on how complicated our remote control is.",
//         "speaker": "B",
//         "reply_to_id": "88"
//     },
//     {
//         "id": 92,
//         "startTime-endTime": "566.17-566.7",
//         "text": "Um.",
//         "speaker": "D",
//         "reply_to_id": "91"
//     },
//     {
//         "id": 93,
//         "startTime-endTime": "568.46-568.83",
//         "text": "I don't know.",
//         "speaker": "D",
//         "reply_to_id": "91"
//     },
//     {
//         "id": 94,
//         "startTime-endTime": "571.22-571.58",
//         "text": "Yeah.",
//         "speaker": "D",
//         "reply_to_id": "91"
//     },
//     {
//         "id": 95,
//         "startTime-endTime": "571.74-580.21",
//         "text": "It does make sense from maybe the design point of view 'cause you have more complicated characters like European languages , then you need more buttons.",
//         "speaker": "A",
//         "reply_to_id": "91"
//     },
//     {
//         "id": 96,
//         "startTime-endTime": "580.42-583.9",
//         "text": "Yeah , yeah. Okay.",
//         "speaker": "B",
//         "reply_to_id": "95"
//     },
//     {
//         "id": 97,
//         "startTime-endTime": "580.66-580.94",
//         "text": "Yeah.",
//         "speaker": "D",
//         "reply_to_id": "95"
//     },
//     {
//         "id": 98,
//         "startTime-endTime": "581.3-582.52",
//         "text": "So , possibly.",
//         "speaker": "A",
//         "reply_to_id": "91"
//     },
//     {
//         "id": 99,
//         "startTime-endTime": "582.33-616.94",
//         "text": "Yeah. And then a and then al the other thing international is on top of the price. I'm thinking the price might might appeal to a certain market in one region , whereas in another it'll be different , so Just a chara just a characteristic of the Just Or just like , basic product podi positioning , the twenty five Euro remote control might be a big hit in London , might not be such a big hit in Greece , who knows , something like that , yeah.",
//         "speaker": "D",
//         "reply_to_id": "98"
//     },
//     {
//         "id": 100,
//         "startTime-endTime": "597.79-603.43",
//         "text": "What , just like in terms of like the wealth of the country? Like how much money people have to spend on things like?",
//         "speaker": "B",
//         "reply_to_id": "99"
//     },
//     {
//         "id": 101,
//         "startTime-endTime": "615.74-617.28",
//         "text": "Aye , I see what you mean , yeah.",
//         "speaker": "B",
//         "reply_to_id": "99"
//     },
//     {
//         "id": 102,
//         "startTime-endTime": "619.01-624.87",
//         "text": "Marketing. Good marketing thoughts. Oh gosh , I should be writing all this down. Um.",
//         "speaker": "B",
//         "reply_to_id": "99"
//     },
//     {
//         "id": 103,
//         "startTime-endTime": "620.48-620.64",
//         "text": "Yep.",
//         "speaker": "D",
//         "reply_to_id": "102"
//     },
//     {
//         "id": 104,
//         "startTime-endTime": "655.45-680.81",
//         "text": "Right away I'm making some kind of assumptions about what what information we're given here , thinking , 'kay trendy probably means something other than just basic , something other than just standard. Um so I'm wondering right away , is selling twenty five Euros , is that sort of the thi is this gonna to be like the premium product kinda thing or Uh-huh.",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 105,
//         "startTime-endTime": "660.7-661.22",
//         "text": "Mm.",
//         "speaker": "B",
//         "reply_to_id": "104"
//     },
//     {
//         "id": 106,
//         "startTime-endTime": "665.36-665.84",
//         "text": "Yeah.",
//         "speaker": "B",
//         "reply_to_id": "104"
//     },
//     {
//         "id": 107,
//         "startTime-endTime": "677.15-680.53",
//         "text": "Yeah , yeah. Like how much does , you know , a remote control cost.",
//         "speaker": "B",
//         "reply_to_id": "65"
//     },
//     {
//         "id": 108,
//         "startTime-endTime": "681.66-691.58",
//         "text": "Well twenty five Euro , I mean that's um that's about like eighteen pounds or something , isn't it? Or no , is it as much as that? Sixteen seventeen eighteen pounds.",
//         "speaker": "B",
//         "reply_to_id": "65"
//     },
//     {
//         "id": 109,
//         "startTime-endTime": "687.72-688.11",
//         "text": "Mm-hmm.",
//         "speaker": "D",
//         "reply_to_id": "108"
//     },
//     {
//         "id": 110,
//         "startTime-endTime": "689.77-689.98",
//         "text": "Yep.",
//         "speaker": "D",
//         "reply_to_id": "108"
//     },
//     {
//         "id": 111,
//         "startTime-endTime": "691.16-691.97",
//         "text": "Yeah , I'd say so , yeah.",
//         "speaker": "D",
//         "reply_to_id": "108"
//     },
//     {
//         "id": 112,
//         "startTime-endTime": "692.42-700.41",
//         "text": "Um , I dunno , I've never bought a remote control , so I don't know how how good a remote control that would get you. Um.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 113,
//         "startTime-endTime": "696.23-696.58",
//         "text": "No.",
//         "speaker": "D",
//         "reply_to_id": "112"
//     },
//     {
//         "id": 114,
//         "startTime-endTime": "697.98-702.01",
//         "text": "Yeah , yeah.",
//         "speaker": "D",
//         "reply_to_id": "112"
//     },
//     {
//         "id": 115,
//         "startTime-endTime": "702.02-705.01",
//         "text": "But yeah , I suppose it has to look kind of cool and gimmicky.",
//         "speaker": "B",
//         "reply_to_id": "112"
//     },
//     {
//         "id": 116,
//         "startTime-endTime": "704.03-704.41",
//         "text": "Mm-hmm.",
//         "speaker": "D",
//         "reply_to_id": "115"
//     },
//     {
//         "id": 117,
//         "startTime-endTime": "707.1-710.07",
//         "text": "Um right , okay.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 118,
//         "startTime-endTime": "711.43-721.44",
//         "text": "Let me just scoot on ahead here. Okay. Um well d Does anybody have anything to add to uh to the finance issue at all?",
//         "speaker": "B",
//         "reply_to_id": "117"
//     },
//     {
//         "id": 119,
//         "startTime-endTime": "722.77-731.07",
//         "text": "Do we have any other background information on like how that compares to other other Yeah.",
//         "speaker": "D",
//         "reply_to_id": "118"
//     },
//     {
//         "id": 120,
//         "startTime-endTime": "722.81-732.87",
//         "text": "Thin No , actually. That would be useful , though , wouldn't it , if you knew like what your money would get you now.",
//         "speaker": "B",
//         "reply_to_id": "119"
//     },
//     {
//         "id": 121,
//         "startTime-endTime": "732.32-732.54",
//         "text": "Hmm.",
//         "speaker": "A",
//         "reply_to_id": "120"
//     },
//     {
//         "id": 122,
//         "startTime-endTime": "734.73-735.08",
//         "text": "Mm-hmm.",
//         "speaker": "D",
//         "reply_to_id": "120"
//     },
//     {
//         "id": 123,
//         "startTime-endTime": "735.11-735.7",
//         "text": "Mm-hmm.",
//         "speaker": "B",
//         "reply_to_id": "120"
//     },
//     {
//         "id": 124,
//         "startTime-endTime": "753.67-773.41",
//         "text": "Yeah , interesting thing about discussing um production of a remote control for me is that l as you point out , I just don't think of remote controls as somethin something people consciously assess in their purchasing habits. It's just like getting shoelaces with shoes or something. It just comes along.",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 125,
//         "startTime-endTime": "767.69-768.25",
//         "text": "Yeah , yeah.",
//         "speaker": "B",
//         "reply_to_id": "124"
//     },
//     {
//         "id": 126,
//         "startTime-endTime": "772.01-772.14",
//         "text": "Oh.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 127,
//         "startTime-endTime": "772.8-776.97",
//         "text": "Five minutes to end of meeting. Oh , okay. We're a bit behind.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 128,
//         "startTime-endTime": "776.12-793.63",
//         "text": "Do you know what I mean? Like so sort of like how do you I I mean one one way of looking at it would be , well the people producing television sets , maybe they have to buy remote controls. Or another way is maybe people who have T_V_ sets are really fed up with their remote control and they really want a better one or something.",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 129,
//         "startTime-endTime": "777.32-777.89",
//         "text": "Yeah.",
//         "speaker": "C",
//         "reply_to_id": "128"
//     },
//     {
//         "id": 130,
//         "startTime-endTime": "777.7-778.02",
//         "text": "Yeah.",
//         "speaker": "A",
//         "reply_to_id": "128"
//     },
//     {
//         "id": 131,
//         "startTime-endTime": "792.52-804.33",
//         "text": "I know um My parents went out and bought um remote controls because um they got fed up of having four or five different remote controls for each things the house. So um for them it was just how many devices control.",
//         "speaker": "C",
//         "reply_to_id": "128"
//     },
//     {
//         "id": 132,
//         "startTime-endTime": "794.53-817.04",
//         "text": "But Right. Right. Okay so Right , so in function one of the priorities might be to combine as many uses I think so. Yeah , yeah.",
//         "speaker": "D",
//         "reply_to_id": "131"
//     },
//     {
//         "id": 133,
//         "startTime-endTime": "806.46-806.98",
//         "text": "Yeah.",
//         "speaker": "B",
//         "reply_to_id": "131"
//     },
//     {
//         "id": 134,
//         "startTime-endTime": "811.51-820.83",
//         "text": "Right , so do you think that should be like a main design aim of our remote control d you know , do your your satellite and your regular telly and your V_C_R_ and everything?",
//         "speaker": "B",
//         "reply_to_id": "132"
//     },
//     {
//         "id": 135,
//         "startTime-endTime": "818.45-818.67",
//         "text": "Yeah.",
//         "speaker": "D",
//         "reply_to_id": "134"
//     },
//     {
//         "id": 136,
//         "startTime-endTime": "819.79-879.22",
//         "text": "Well like um , maybe what we could use is a sort of like a example of a successful other piece technology is palm palm pilots. They're gone from being just like little sort of scribble boards to cameras , M_P_ three players , telephones , everything , agenda. So , like , I wonder if we might add something new to the to the remote control market , such as the lighting in your house , or um Yeah , yeah. An Yeah. Like , p personally for me , at home I've I've combined the um the audio video of my television set and my D_V_D_ player and my C_D_ player. So they w all work actually function together but I have different remote controls for each of them. So it's sort of ironic that that then they're in there um you know , the sound and everything it's just one system. But each one's got its own little part.",
//         "speaker": "D",
//         "reply_to_id": "134"
//     },
//     {
//         "id": 137,
//         "startTime-endTime": "832.76-833.2",
//         "text": "Mm-hmm.",
//         "speaker": "B",
//         "reply_to_id": "136"
//     },
//     {
//         "id": 138,
//         "startTime-endTime": "840.25-840.69",
//         "text": "Yeah.",
//         "speaker": "B",
//         "reply_to_id": "136"
//     },
//     {
//         "id": 139,
//         "startTime-endTime": "843.99-853.03",
//         "text": "Or even like , you know , notes about um what you wanna watch. Like you might put in there oh I want to watch such and such and look a Oh that's a good idea. So extra functionalities.",
//         "speaker": "B",
//         "reply_to_id": "136"
//     },
//     {
//         "id": 140,
//         "startTime-endTime": "866.59-867.24",
//         "text": "Mm-hmm.",
//         "speaker": "B",
//         "reply_to_id": "136"
//     },
//     {
//         "id": 141,
//         "startTime-endTime": "876.88-877.46",
//         "text": "Hmm.",
//         "speaker": "B",
//         "reply_to_id": "136"
//     },
//     {
//         "id": 142,
//         "startTime-endTime": "883.05-902.62",
//         "text": "Um okay , uh I'd wel we're gonna have to wrap up pretty quickly in the next couple of minutes. Um I'll just check we've nothing else. Okay. Um so anything else anybody wants to add about what they don't like about remote controls they've used , what they would really like to be part of this new one at all?",
//         "speaker": "B",
//         "reply_to_id": "136"
//     },
//     {
//         "id": 143,
//         "startTime-endTime": "903.08-903.98",
//         "text": "And you keep losing them.",
//         "speaker": "A",
//         "reply_to_id": "142"
//     },
//     {
//         "id": 144,
//         "startTime-endTime": "904.6-906.08",
//         "text": "You keep losing them. Okay.",
//         "speaker": "B",
//         "reply_to_id": "143"
//     },
//     {
//         "id": 145,
//         "startTime-endTime": "904.75-905.26",
//         "text": "Mm.",
//         "speaker": "D",
//         "reply_to_id": "143"
//     },
//     {
//         "id": 146,
//         "startTime-endTime": "906.45-914.44",
//         "text": "Finding them is really a pain , you know. I mean it's usually quite small , or when you want it right , it slipped behind the couch or it's kicked under the table.",
//         "speaker": "A",
//         "reply_to_id": "144"
//     },
//     {
//         "id": 147,
//         "startTime-endTime": "907.47-909.26",
//         "text": "Mm. Mm.",
//         "speaker": "D",
//         "reply_to_id": "146"
//     },
//     {
//         "id": 148,
//         "startTime-endTime": "911.1-912.1",
//         "text": "Mm-hmm. Mm-hmm.",
//         "speaker": "D",
//         "reply_to_id": "146"
//     },
//     {
//         "id": 149,
//         "startTime-endTime": "913.17-922.53",
//         "text": "Yeah. W You get those ones where you can , if you like , whistle or make a really high pitched noise they beep. There I mean is that something we'd want to include , do you think?",
//         "speaker": "B",
//         "reply_to_id": "148"
//     },
//     {
//         "id": 150,
//         "startTime-endTime": "913.22-913.58",
//         "text": "Yeah.",
//         "speaker": "D",
//         "reply_to_id": "149"
//     },
//     {
//         "id": 151,
//         "startTime-endTime": "914.77-915.13",
//         "text": "Yeah.",
//         "speaker": "D",
//         "reply_to_id": "149"
//     },
//     {
//         "id": 152,
//         "startTime-endTime": "915.45-916.11",
//         "text": "You know.",
//         "speaker": "A",
//         "reply_to_id": "149"
//     },
//     {
//         "id": 153,
//         "startTime-endTime": "916.12-919.69",
//         "text": "That's just really good id Yep.",
//         "speaker": "D",
//         "reply_to_id": "149"
//     },
//     {
//         "id": 154,
//         "startTime-endTime": "924.35-956.35",
//         "text": "Uh , sure. I remember when the first remote control my my family had was on a cable. Actually had a cable between it and the T_V_ and big like buttons that sort of like , like on a blender or something. And um , you know , when I think about what they are now , it's better , but actually it's still kind of , I dunno , like a massive junky thing on the table. Maybe we could think about how , could be more , you know , streamlined. S Something like that , yeah. Or whatever would be technologically reasonable.",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 155,
//         "startTime-endTime": "925.37-927.4",
//         "text": "Dunno. Okay maybe.",
//         "speaker": "B",
//         "reply_to_id": "154"
//     },
//     {
//         "id": 156,
//         "startTime-endTime": "937.0-937.62",
//         "text": "My goodness.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 157,
//         "startTime-endTime": "946.26-948.04",
//         "text": "Still feels quite primitive.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 158,
//         "startTime-endTime": "951.41-952.78",
//         "text": "Maybe like a touch screen or something?",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 159,
//         "startTime-endTime": "954.09-954.42",
//         "text": "Okay.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 160,
//         "startTime-endTime": "956.36-959.3",
//         "text": "Uh-huh , okay. Well I guess that's up to our industrial designer.",
//         "speaker": "B",
//         "reply_to_id": "158"
//     },
//     {
//         "id": 161,
//         "startTime-endTime": "957.54-976.83",
//         "text": "'Cause it could b it could it could be that f it could be that functionally that doesn't make it any better , but that just the appeal of of not having You know , these days there's a r pe things in people's homes are becoming more and more like chic , you know. Um , nicer materials and might be be worth exploring anyway.",
//         "speaker": "D",
//         "reply_to_id": "160"
//     },
//     {
//         "id": 162,
//         "startTime-endTime": "962.22-963.35",
//         "text": "It looks better.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 163,
//         "startTime-endTime": "969.0-969.47",
//         "text": "Yeah.",
//         "speaker": "B",
//         "reply_to_id": "161"
//     },
//     {
//         "id": 164,
//         "startTime-endTime": "971.85-972.39",
//         "text": "Okay.",
//         "speaker": "B",
//         "reply_to_id": "161"
//     },
//     {
//         "id": 165,
//         "startTime-endTime": "975.24-975.63",
//         "text": "Okay.",
//         "speaker": "B",
//         "reply_to_id": "161"
//     },
//     {
//         "id": 166,
//         "startTime-endTime": "977.17-1019.31",
//         "text": "Right , well um so just to wrap up , the next meeting's gonna be in thirty minutes. So that's about um about ten to twelve by my watch. Um so inbetween now and then , um as the industrial designer , you're gonna be working on you know the actual working design of it so y you know what you're doing there. Um for user interface , technical functions , I guess that's you know like what we've been talking about , what it'll actually do. Um and uh marketing executive , you'll be just thinking about what it actually what , you know , what requirements it has to has to fulfil and you'll all get instructions emailed to you , I guess.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 167,
//         "startTime-endTime": "993.88-994.02",
//         "text": "Yep.",
//         "speaker": "A",
//         "reply_to_id": "166"
//     },
//     {
//         "id": 168,
//         "startTime-endTime": "1019.67-1020.01",
//         "text": "Okay.",
//         "speaker": "D",
//         "reply_to_id": "166"
//     },
//     {
//         "id": 169,
//         "startTime-endTime": "1021.55-1022.56",
//         "text": "Um.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 170,
//         "startTime-endTime": "1028.05-1031.66",
//         "text": "Yeah , so it's th the functional design stage is next , I guess.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 171,
//         "startTime-endTime": "1034.47-1037.69",
//         "text": "And uh and that's the end of the meeting.",
//         "speaker": "B",
//         "reply_to_id": "170"
//     },
//     {
//         "id": 172,
//         "startTime-endTime": "1039.12-1050.04",
//         "text": "So I got that little message a lot sooner than I thought I would , so Mm-hmm.",
//         "speaker": "B",
//         "reply_to_id": "171"
//     },
//     {
//         "id": 173,
//         "startTime-endTime": "1039.8-1040.97",
//         "text": "Um.",
//         "speaker": "D",
//         "reply_to_id": "172"
//     },
//     {
//         "id": 174,
//         "startTime-endTime": "1047.17-1074.44",
//         "text": "Before we wrap up , just to make sure we're all on the same page here , um , do we We were given sort of an example of a coffee machine or something , right? Well , um are we at ma right now on the assumption that our television remote control may have features which go beyond the television? Or are we keeping sort of like a a design commitment to television features? I I don't know.",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 175,
//         "startTime-endTime": "1056.3-1057.68",
//         "text": "Uh-huh , yeah.",
//         "speaker": "B",
//         "reply_to_id": "174"
//     },
//     {
//         "id": 176,
//         "startTime-endTime": "1056.93-1057.09",
//         "text": "Mm-hmm.",
//         "speaker": "A",
//         "reply_to_id": "174"
//     },
//     {
//         "id": 177,
//         "startTime-endTime": "1068.76-1088.2",
//         "text": "Th Okay , well just very quickly 'cause this we're supposed to finish now. Um I guess that's up to us , I mean you probably want some kind of unique selling point of it , so um , you know Yeah.",
//         "speaker": "B",
//         "reply_to_id": "174"
//     },
//     {
//         "id": 178,
//         "startTime-endTime": "1076.56-1078.06",
//         "text": "Yep. Yeah , sure.",
//         "speaker": "D",
//         "reply_to_id": "177"
//     },
//     {
//         "id": 179,
//         "startTime-endTime": "1081.99-1082.38",
//         "text": "Okay.",
//         "speaker": "D",
//         "reply_to_id": "177"
//     },
//     {
//         "id": 180,
//         "startTime-endTime": "1084.36-1086.91",
//         "text": "I think one factor would be production cost.",
//         "speaker": "A",
//         "reply_to_id": "177"
//     },
//     {
//         "id": 181,
//         "startTime-endTime": "1086.96-1087.76",
//         "text": "Okay , yeah.",
//         "speaker": "D",
//         "reply_to_id": "180"
//     },
//     {
//         "id": 182,
//         "startTime-endTime": "1087.57-1094.9",
//         "text": "Because there's a cap there , so um depends on how much you can cram into that price. Um.",
//         "speaker": "A",
//         "reply_to_id": "180"
//     },
//     {
//         "id": 183,
//         "startTime-endTime": "1089.89-1090.23",
//         "text": "Okay.",
//         "speaker": "D",
//         "reply_to_id": "182"
//     },
//     {
//         "id": 184,
//         "startTime-endTime": "1093.82-1094.41",
//         "text": "Mm-hmm.",
//         "speaker": "B",
//         "reply_to_id": "182"
//     },
//     {
//         "id": 185,
//         "startTime-endTime": "1093.83-1094.13",
//         "text": "Okay.",
//         "speaker": "D",
//         "reply_to_id": "182"
//     },
//     {
//         "id": 186,
//         "startTime-endTime": "1095.78-1096.16",
//         "text": "Yeah.",
//         "speaker": "B",
//         "reply_to_id": "182"
//     },
//     {
//         "id": 187,
//         "startTime-endTime": "1096.03-1098.43",
//         "text": "I think that that's the main factor.",
//         "speaker": "A",
//         "reply_to_id": "182"
//     },
//     {
//         "id": 188,
//         "startTime-endTime": "1098.51-1103.2",
//         "text": "Okay. Right , okay , we'll that's that's the end of the meeting , then. Um.",
//         "speaker": "B",
//         "reply_to_id": "187"
//     },
//     {
//         "id": 189,
//         "startTime-endTime": "1098.52-1098.85",
//         "text": "Okay.",
//         "speaker": "D",
//         "reply_to_id": "188"
//     }
//   ]

//   var data = [  //对比2
//     {
//       "startTime": "0.37",
//       "endTime": "1.76",
//       "role": "A",
//       "text": "Hmm hmm hmm.",
//       "agenda": "-",
//       "agenda_similiarity": "-"
//     },
//     {
//       "startTime": "10.99",
//       "endTime": "14.53",
//       "role": "B",
//       "text": "Are we we're not allowed to dim the lights so people can see that a bit better?",
//       "agenda": 3,
//       "agenda_similiarity": 0.23555894113185893
//     },
//     {
//       "startTime": "17.88",
//       "endTime": "18.15",
//       "role": "A",
//       "text": "Yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.23555894113185893
//     },
//     {
//       "startTime": "18.87",
//       "endTime": "20.29",
//       "role": "B",
//       "text": "Okay , that's fine.",
//       "agenda": 3,
//       "agenda_similiarity": 0.23555894113185893
//     },
//     {
//       "startTime": "22.37",
//       "endTime": "23.81",
//       "role": "B",
//       "text": "Am I supposed to be standing up there?",
//       "agenda": 0,
//       "agenda_similiarity": 0.1726923837291649
//     },
//     {
//       "startTime": "25.15",
//       "endTime": "26.83",
//       "role": "D",
//       "text": "So we've got both of these clipped on?",
//       "agenda": 1,
//       "agenda_similiarity": 0.11839126026609531
//     },
//     {
//       "startTime": "25.18",
//       "endTime": "25.6",
//       "role": "B",
//       "text": "Okay.",
//       "agenda": "-",
//       "agenda_similiarity": "-"
//     },
//     {
//       "startTime": "29.12",
//       "endTime": "30.48",
//       "role": "D",
//       "text": "She gonna answer me or not?",
//       "agenda": 1,
//       "agenda_similiarity": 0.12683729890537732
//     },
//     {
//       "startTime": "29.86",
//       "endTime": "34.72",
//       "role": "B",
//       "text": "Yeah , I've got Yes.",
//       "agenda": 1,
//       "agenda_similiarity": 0.12683729890537732
//     },
//     {
//       "startTime": "31.3",
//       "endTime": "33.39",
//       "role": "D",
//       "text": "Right , both of them , okay.",
//       "agenda": 1,
//       "agenda_similiarity": 0.12683729890537732
//     },
//     {
//       "startTime": "42.63",
//       "endTime": "43.29",
//       "role": "D",
//       "text": "God.",
//       "agenda": "-",
//       "agenda_similiarity": "-"
//     },
//     {
//       "startTime": "49.75",
//       "endTime": "53.18",
//       "role": "D",
//       "text": "Jesus , it's gonna fall off.",
//       "agenda": "-",
//       "agenda_similiarity": "-"
//     },
//     {
//       "startTime": "63.81",
//       "endTime": "66.33",
//       "role": "A",
//       "text": "Okay. Yep , yep.",
//       "agenda": "-",
//       "agenda_similiarity": "-"
//     },
//     {
//       "startTime": "71.95",
//       "endTime": "72.06",
//       "role": "A",
//       "text": "Okay.",
//       "agenda": "-",
//       "agenda_similiarity": "-"
//     },
//     {
//       "startTime": "80.49",
//       "endTime": "115.89",
//       "role": "B",
//       "text": "Okay. Hello everybody. Um I'm Sarah , the Project Manager and this is our first meeting , surprisingly enough. Okay , this is our agenda , um we will do some stuff , get to know each other a bit better to feel more comfortable with each other. Um then we'll go do tool training , talk about the project plan , discuss our own ideas and everything um and we've got twenty five minutes to do that , as far as I can understand.",
//       "agenda": 0,
//       "agenda_similiarity": 0.05784834390130708
//     },
//     {
//       "startTime": "80.5",
//       "endTime": "84.03",
//       "role": "A",
//       "text": "Tu tu tu tu Hi , good morning.",
//       "agenda": 0,
//       "agenda_similiarity": 0.05784834390130708
//     },
//     {
//       "startTime": "117.62",
//       "endTime": "167.8",
//       "role": "B",
//       "text": "Now , we're developing a remote control which you probably already know. Um , we want it to be original , something that's uh people haven't thought of , that's not out in the shops , um , trendy , appealing to a wide market , but you know , not a hunk of metal , and user-friendly , grannies to kids , maybe even pooches should be able to use it. Okay , um , first is the functional design , um this is where we all go off and do our individual work , um what needs need to be fulfilled by the product , um what effects the product has to have and how it's actually going to do that. Um , conceptual design , what we're thinking , how it's gonna go and then the detailed design , how we're actually gonna put it into practice and make it work.",
//       "agenda": 2,
//       "agenda_similiarity": 0.36529478358407075
//     },
//     {
//       "startTime": "168.79",
//       "endTime": "168.88",
//       "role": "A",
//       "text": "'Kay.",
//       "agenda": 2,
//       "agenda_similiarity": 0.36529478358407075
//     },
//     {
//       "startTime": "170.38",
//       "endTime": "211.97",
//       "role": "B",
//       "text": "Okay , right. We're gonna practice with the pens and draw our favourite animal on the white board , I'll go first , and um sum up the characteristics of that animal. So Okay , I'll leave space for everyone else. Um What's missing?",
//       "agenda": 1,
//       "agenda_similiarity": 0.5641370323961196
//     },
//     {
//       "startTime": "188.28",
//       "endTime": "188.43",
//       "role": "A",
//       "text": "Oops.",
//       "agenda": "-",
//       "agenda_similiarity": "-"
//     },
//     {
//       "startTime": "243.22",
//       "endTime": "244.33",
//       "role": "B",
//       "text": "We're running out of blue.",
//       "agenda": "-",
//       "agenda_similiarity": "-"
//     },
//     {
//       "startTime": "246.93",
//       "endTime": "250.6",
//       "role": "B",
//       "text": "Okay. I'm not gonna ask you to guess , I'm going to tell you that's supposed to be a tiger.",
//       "agenda": 0,
//       "agenda_similiarity": 0.22282171704066728
//     },
//     {
//       "startTime": "252.48",
//       "endTime": "252.56",
//       "role": "A",
//       "text": "Mm.",
//       "agenda": 0,
//       "agenda_similiarity": 0.22282171704066728
//     },
//     {
//       "startTime": "254.53",
//       "endTime": "269.06",
//       "role": "B",
//       "text": "And I see them as majestic , and independent , and proud.",
//       "agenda": 0,
//       "agenda_similiarity": 0.22282171704066728
//     },
//     {
//       "startTime": "255.91",
//       "endTime": "256.25",
//       "role": "A",
//       "text": "Oh sorry.",
//       "agenda": 0,
//       "agenda_similiarity": 0.22282171704066728
//     },
//     {
//       "startTime": "258.31",
//       "endTime": "258.64",
//       "role": "A",
//       "text": "Mm-hmm.",
//       "agenda": 0,
//       "agenda_similiarity": 0.22282171704066728
//     },
//     {
//       "startTime": "272.31",
//       "endTime": "275.8",
//       "role": "B",
//       "text": "Now , who would like to go next? 'Kay.",
//       "agenda": "-",
//       "agenda_similiarity": "-"
//     },
//     {
//       "startTime": "275.09",
//       "endTime": "275.45",
//       "role": "A",
//       "text": "Yeah , me.",
//       "agenda": "-",
//       "agenda_similiarity": "-"
//     },
//     {
//       "startTime": "279.18",
//       "endTime": "279.75",
//       "role": "A",
//       "text": "Cat.",
//       "agenda": "-",
//       "agenda_similiarity": "-"
//     },
//     {
//       "startTime": "285.15",
//       "endTime": "286.61",
//       "role": "A",
//       "text": "Where did this come from?",
//       "agenda": 3,
//       "agenda_similiarity": 0.14536675164003415
//     },
//     {
//       "startTime": "287.57",
//       "endTime": "290.1",
//       "role": "B",
//       "text": "Is that your lapel then? There you go.",
//       "agenda": 3,
//       "agenda_similiarity": 0.14536675164003415
//     },
//     {
//       "startTime": "289.09",
//       "endTime": "296.02",
//       "role": "A",
//       "text": "Uh , yep. Thank you. Uh , maybe you can guess what I'm trying to make?",
//       "agenda": 3,
//       "agenda_similiarity": 0.14536675164003415
//     },
//     {
//       "startTime": "306.38",
//       "endTime": "307.2",
//       "role": "D",
//       "text": "A kind of dog?",
//       "agenda": 3,
//       "agenda_similiarity": 0.14536675164003415
//     },
//     {
//       "startTime": "309.22",
//       "endTime": "310.08",
//       "role": "A",
//       "text": "Yep.",
//       "agenda": 3,
//       "agenda_similiarity": 0.14536675164003415
//     },
//     {
//       "startTime": "313.47",
//       "endTime": "321.86",
//       "role": "A",
//       "text": "It's actually sitting , so it's sitting , it's not standing. Okay , I see it as one thing it's very supportive.",
//       "agenda": 3,
//       "agenda_similiarity": 0.14536675164003415
//     },
//     {
//       "startTime": "315.85",
//       "endTime": "316.3",
//       "role": "D",
//       "text": "Sorry?",
//       "agenda": 3,
//       "agenda_similiarity": 0.14536675164003415
//     },
//     {
//       "startTime": "316.65",
//       "endTime": "317.4",
//       "role": "C",
//       "text": "It's sitting down.",
//       "agenda": 3,
//       "agenda_similiarity": 0.14536675164003415
//     },
//     {
//       "startTime": "317.9",
//       "endTime": "318.62",
//       "role": "D",
//       "text": "Uh.",
//       "agenda": 3,
//       "agenda_similiarity": 0.14536675164003415
//     },
//     {
//       "startTime": "324.13",
//       "endTime": "351.47",
//       "role": "A",
//       "text": "It's your best friend and your you can talk to a dog , it can be your best friend , it doesn't discriminate between you , based on what you are. Second it's loyal and third thing it's got intuition. dogs can som sometimes can make out between a thief and a person so basically these are the three unique features I think belong to a dog. Thank you.",
//       "agenda": 1,
//       "agenda_similiarity": 0.3839031791994419
//     },
//     {
//       "startTime": "344.91",
//       "endTime": "345.36",
//       "role": "D",
//       "text": "Mm-hmm.",
//       "agenda": 1,
//       "agenda_similiarity": 0.3839031791994419
//     },
//     {
//       "startTime": "350.01",
//       "endTime": "351.09",
//       "role": "B",
//       "text": "Okay , thank you.",
//       "agenda": 1,
//       "agenda_similiarity": 0.3839031791994419
//     },
//     {
//       "startTime": "353.48",
//       "endTime": "355.55",
//       "role": "C",
//       "text": "Yeah I'll have a go.",
//       "agenda": 1,
//       "agenda_similiarity": 0.18267440245613323
//     },
//     {
//       "startTime": "354.11",
//       "endTime": "354.82",
//       "role": "A",
//       "text": "Okay.",
//       "agenda": 1,
//       "agenda_similiarity": 0.18267440245613323
//     },
//     {
//       "startTime": "356.33",
//       "endTime": "356.9",
//       "role": "A",
//       "text": "Sorry.",
//       "agenda": 1,
//       "agenda_similiarity": 0.18267440245613323
//     },
//     {
//       "startTime": "356.51",
//       "endTime": "362.14",
//       "role": "D",
//       "text": "Please , please leave me a space at the bottom , I'm little , you can get to the top , with standing on a chair.",
//       "agenda": 1,
//       "agenda_similiarity": 0.18267440245613323
//     },
//     {
//       "startTime": "356.98",
//       "endTime": "357.37",
//       "role": "C",
//       "text": "Thanks.",
//       "agenda": 1,
//       "agenda_similiarity": 0.18267440245613323
//     },
//     {
//       "startTime": "359.11",
//       "endTime": "367.65",
//       "role": "C",
//       "text": "Alright , okay. Well since you guys have chosen the ones I wanted to do , I'll have to have to go for something a bit random.",
//       "agenda": 1,
//       "agenda_similiarity": 0.3857796374602527
//     },
//     {
//       "startTime": "364.81",
//       "endTime": "366.01",
//       "role": "B",
//       "text": "Okay.",
//       "agenda": 1,
//       "agenda_similiarity": 0.3857796374602527
//     },
//     {
//       "startTime": "365.93",
//       "endTime": "367.84",
//       "role": "A",
//       "text": "Does it look like a dog actually?",
//       "agenda": 1,
//       "agenda_similiarity": 0.3857796374602527
//     },
//     {
//       "startTime": "371.43",
//       "endTime": "375.29",
//       "role": "C",
//       "text": "And also , my drawing skill isn't that great so , yeah.",
//       "agenda": 1,
//       "agenda_similiarity": 0.3857796374602527
//     },
//     {
//       "startTime": "373.84",
//       "endTime": "394.92",
//       "role": "B",
//       "text": "Well , as you can see , the quality of the work today is um Gonna be a bird.",
//       "agenda": 1,
//       "agenda_similiarity": 0.3857796374602527
//     },
//     {
//       "startTime": "375.08",
//       "endTime": "375.43",
//       "role": "A",
//       "text": "Mm.",
//       "agenda": 1,
//       "agenda_similiarity": 0.3857796374602527
//     },
//     {
//       "startTime": "376.8",
//       "endTime": "378.94",
//       "role": "D",
//       "text": "I think it's outstandingly good.",
//       "agenda": 1,
//       "agenda_similiarity": 0.3857796374602527
//     },
//     {
//       "startTime": "379.6",
//       "endTime": "384.48",
//       "role": "C",
//       "text": "Okay , now I'm gonna have to change what is was originally gonna be because that looks like a beak now , so.",
//       "agenda": 0,
//       "agenda_similiarity": 0.2644235499783272
//     },
//     {
//       "startTime": "391.13",
//       "endTime": "391.74",
//       "role": "D",
//       "text": "Crocodile?",
//       "agenda": 0,
//       "agenda_similiarity": 0.2644235499783272
//     },
//     {
//       "startTime": "394.38",
//       "endTime": "406.27",
//       "role": "C",
//       "text": "Yeah , it can be a crocodile , it can be a crocodile. Well it was it was an at first firstly it was an attempt at a T_ Rex and then it sort of changed into a pelican but it can be a crocodile now actually.",
//       "agenda": 0,
//       "agenda_similiarity": 0.2644235499783272
//     },
//     {
//       "startTime": "396.31",
//       "endTime": "399.8",
//       "role": "B",
//       "text": "Is it gonna be it's gonna be a bird.",
//       "agenda": 0,
//       "agenda_similiarity": 0.2644235499783272
//     },
//     {
//       "startTime": "403.24",
//       "endTime": "442.12",
//       "role": "D",
//       "text": "O Beauti that's Okay.",
//       "agenda": 0,
//       "agenda_similiarity": 0.2644235499783272
//     },
//     {
//       "startTime": "420.11",
//       "endTime": "420.95",
//       "role": "B",
//       "text": "That's lovely.",
//       "agenda": 0,
//       "agenda_similiarity": 0.2644235499783272
//     },
//     {
//       "startTime": "421.2",
//       "endTime": "441.99",
//       "role": "C",
//       "text": "Yeah and uh I'll have to think on the spot of uh things that it is. Um uh scary , uh strong , yeah that's about it I think.",
//       "agenda": 0,
//       "agenda_similiarity": 0.2644235499783272
//     },
//     {
//       "startTime": "439.85",
//       "endTime": "441.77",
//       "role": "B",
//       "text": "Okay it's fine.",
//       "agenda": 0,
//       "agenda_similiarity": 0.2644235499783272
//     },
//     {
//       "startTime": "443.16",
//       "endTime": "450.85",
//       "role": "D",
//       "text": "Um , I'm very impressed with your artistic skills , mine's are dreadful. Oops this is now coming apart , let me just put the top in.",
//       "agenda": 1,
//       "agenda_similiarity": 0.2282936641215696
//     },
//     {
//       "startTime": "445.23",
//       "endTime": "465.99",
//       "role": "C",
//       "text": "Uh uh Wo Hmm.",
//       "agenda": 1,
//       "agenda_similiarity": 0.2282936641215696
//     },
//     {
//       "startTime": "454.0",
//       "endTime": "456.94",
//       "role": "D",
//       "text": "I hope that clicks in , I'll just I'll hold it on , okay.",
//       "agenda": 1,
//       "agenda_similiarity": 0.2282936641215696
//     },
//     {
//       "startTime": "457.97",
//       "endTime": "460.57",
//       "role": "D",
//       "text": "Oops , oh dear , what happened there?",
//       "agenda": 1,
//       "agenda_similiarity": 0.2282936641215696
//     },
//     {
//       "startTime": "461.09",
//       "endTime": "462.16",
//       "role": "B",
//       "text": "Technical help.",
//       "agenda": 1,
//       "agenda_similiarity": 0.2282936641215696
//     },
//     {
//       "startTime": "465.38",
//       "endTime": "479.35",
//       "role": "D",
//       "text": "Hopefully that'll stay on , two-handed version. Okay , uh Again this is off the top of my head , I was gonna do a big cat too , um.",
//       "agenda": 1,
//       "agenda_similiarity": 0.2282936641215696
//     },
//     {
//       "startTime": "467.94",
//       "endTime": "468.7",
//       "role": "C",
//       "text": "Okay.",
//       "agenda": 1,
//       "agenda_similiarity": 0.2282936641215696
//     },
//     {
//       "startTime": "476.71",
//       "endTime": "499.98",
//       "role": "C",
//       "text": "Uh S Uh Okay , some sort of bird.",
//       "agenda": 1,
//       "agenda_similiarity": 0.2282936641215696
//     },
//     {
//       "startTime": "481.26",
//       "endTime": "484.68",
//       "role": "D",
//       "text": "Oh dear , it doesn't look what like what I want it to be.",
//       "agenda": 1,
//       "agenda_similiarity": 0.2282936641215696
//     },
//     {
//       "startTime": "481.27",
//       "endTime": "481.66",
//       "role": "B",
//       "text": "Hmm.",
//       "agenda": 1,
//       "agenda_similiarity": 0.2282936641215696
//     },
//     {
//       "startTime": "487.1",
//       "endTime": "487.71",
//       "role": "D",
//       "text": "Uh.",
//       "agenda": 1,
//       "agenda_similiarity": 0.2282936641215696
//     },
//     {
//       "startTime": "488.77",
//       "endTime": "491.41",
//       "role": "D",
//       "text": "It's not a vampire bat honestly.",
//       "agenda": 1,
//       "agenda_similiarity": 0.2282936641215696
//     },
//     {
//       "startTime": "489.88",
//       "endTime": "491.34",
//       "role": "B",
//       "text": "Okay , yeah.",
//       "agenda": 1,
//       "agenda_similiarity": 0.2282936641215696
//     },
//     {
//       "startTime": "492.9",
//       "endTime": "518.66",
//       "role": "D",
//       "text": "Uh and somewhere there's a body behind. That's my dreadful that's the worst yet , that's it's meant to be an eagle you can tell it's a flying animal could have been a seagull , I never thought of a seagull. An eagle , um again I'm thinking on my feet goodness. I suppose they're all so independent , I'd put that one down again. Da dum um.",
//       "agenda": 2,
//       "agenda_similiarity": 0.12663726257195831
//     },
//     {
//       "startTime": "501.19",
//       "endTime": "504.66",
//       "role": "B",
//       "text": "A seagu right , not a seagull.",
//       "agenda": 2,
//       "agenda_similiarity": 0.12663726257195831
//     },
//     {
//       "startTime": "501.76",
//       "endTime": "503.22",
//       "role": "C",
//       "text": "Ah eagle , right okay.",
//       "agenda": 2,
//       "agenda_similiarity": 0.12663726257195831
//     },
//     {
//       "startTime": "501.78",
//       "endTime": "502.67",
//       "role": "A",
//       "text": "Eagle , okay.",
//       "agenda": 2,
//       "agenda_similiarity": 0.12663726257195831
//     },
//     {
//       "startTime": "519.87",
//       "endTime": "520.95",
//       "role": "C",
//       "text": "They're good at golf.",
//       "agenda": 2,
//       "agenda_similiarity": 0.12663726257195831
//     },
//     {
//       "startTime": "520.28",
//       "endTime": "536.6",
//       "role": "D",
//       "text": "Indepen independent , right , did you say they're good at golf? Are they? Oh. Oh right , okay , I'm not good at golf. I'd say they're quite free-spirited , flying around everywhere , doing their own thing.",
//       "agenda": 2,
//       "agenda_similiarity": 0.12663726257195831
//     },
//     {
//       "startTime": "524.31",
//       "endTime": "528.63",
//       "role": "C",
//       "text": "Yeah , no yeah , an eagle.",
//       "agenda": 2,
//       "agenda_similiarity": 0.12663726257195831
//     },
//     {
//       "startTime": "525.5",
//       "endTime": "525.96",
//       "role": "B",
//       "text": "Eagle.",
//       "agenda": 2,
//       "agenda_similiarity": 0.12663726257195831
//     },
//     {
//       "startTime": "541.43",
//       "endTime": "549.53",
//       "role": "D",
//       "text": "And uh , birds of prey aren't they , oh dear , intrepid. I'll put that , intrepid.",
//       "agenda": 1,
//       "agenda_similiarity": 0.17404708210412623
//     },
//     {
//       "startTime": "545.31",
//       "endTime": "545.64",
//       "role": "B",
//       "text": "Mm-hmm.",
//       "agenda": 1,
//       "agenda_similiarity": 0.17404708210412623
//     },
//     {
//       "startTime": "553.66",
//       "endTime": "556.77",
//       "role": "D",
//       "text": "There we go , hope that pen's gonna be okay.",
//       "agenda": 1,
//       "agenda_similiarity": 0.17404708210412623
//     },
//     {
//       "startTime": "554.48",
//       "endTime": "555.15",
//       "role": "B",
//       "text": "That's lovely.",
//       "agenda": 1,
//       "agenda_similiarity": 0.17404708210412623
//     },
//     {
//       "startTime": "558.67",
//       "endTime": "559.33",
//       "role": "D",
//       "text": "Whoops.",
//       "agenda": 1,
//       "agenda_similiarity": 0.17404708210412623
//     },
//     {
//       "startTime": "561.11",
//       "endTime": "561.6",
//       "role": "B",
//       "text": "Okay.",
//       "agenda": 1,
//       "agenda_similiarity": 0.17404708210412623
//     },
//     {
//       "startTime": "563.12",
//       "endTime": "575.32",
//       "role": "B",
//       "text": "That was fun , right. Um finance-wise , we've got a selling price at twenty five Euros , which I don't actually know what that is in Pounds , at all. Any ideas?",
//       "agenda": 2,
//       "agenda_similiarity": 0.1783663489499802
//     },
//     {
//       "startTime": "575.11",
//       "endTime": "577.66",
//       "role": "C",
//       "text": "It's about mm , mm yeah.",
//       "agenda": 2,
//       "agenda_similiarity": 0.1783663489499802
//     },
//     {
//       "startTime": "576.51",
//       "endTime": "577.21",
//       "role": "D",
//       "text": "Seventeen.",
//       "agenda": 2,
//       "agenda_similiarity": 0.1783663489499802
//     },
//     {
//       "startTime": "576.76",
//       "endTime": "581.5",
//       "role": "A",
//       "text": "One point four or something like that. One point four Euro would make a Pound or something like that.",
//       "agenda": 2,
//       "agenda_similiarity": 0.1783663489499802
//     },
//     {
//       "startTime": "580.85",
//       "endTime": "587.57",
//       "role": "C",
//       "text": "Yeah , yeah , something like that , so that yeah about seventeen , seventeen Pounds , something like that.",
//       "agenda": 2,
//       "agenda_similiarity": 0.1783663489499802
//     },
//     {
//       "startTime": "582.6",
//       "endTime": "582.92",
//       "role": "A",
//       "text": "Yeah.",
//       "agenda": 2,
//       "agenda_similiarity": 0.1783663489499802
//     },
//     {
//       "startTime": "583.85",
//       "endTime": "587.98",
//       "role": "B",
//       "text": "D fifteen? Seventeen. Okay , that's expensive.",
//       "agenda": 2,
//       "agenda_similiarity": 0.1783663489499802
//     },
//     {
//       "startTime": "584.88",
//       "endTime": "585.97",
//       "role": "D",
//       "text": "Seventeen Pounds.",
//       "agenda": 2,
//       "agenda_similiarity": 0.1783663489499802
//     },
//     {
//       "startTime": "588.37",
//       "endTime": "592.28",
//       "role": "D",
//       "text": "Should we be making notes of this? We can just refer to this later can't we? Yeah , okay.",
//       "agenda": 0,
//       "agenda_similiarity": 0.2367694327918801
//     },
//     {
//       "startTime": "590.86",
//       "endTime": "608.09",
//       "role": "C",
//       "text": "But Havi having said that though , if you wanna get one of those the the ones on the market at the moment they're s they're about twenty pounds anyway. So , it'd still be yeah , we had to buy one.",
//       "agenda": 2,
//       "agenda_similiarity": 0.1783663489499802
//     },
//     {
//       "startTime": "590.98",
//       "endTime": "595.93",
//       "role": "B",
//       "text": "I think so , I think so , I'll be able to um pull it up , or I could put it in the shared folder or something.",
//       "agenda": 0,
//       "agenda_similiarity": 0.2367694327918801
//     },
//     {
//       "startTime": "593.81",
//       "endTime": "594.27",
//       "role": "D",
//       "text": "Okay.",
//       "agenda": 0,
//       "agenda_similiarity": 0.2367694327918801
//     },
//     {
//       "startTime": "603.51",
//       "endTime": "604.22",
//       "role": "D",
//       "text": "Right.",
//       "agenda": 0,
//       "agenda_similiarity": 0.2367694327918801
//     },
//     {
//       "startTime": "603.88",
//       "endTime": "604.22",
//       "role": "B",
//       "text": "Really?",
//       "agenda": 2,
//       "agenda_similiarity": 0.1783663489499802
//     },
//     {
//       "startTime": "605.84",
//       "endTime": "613.93",
//       "role": "D",
//       "text": "So so I suppose later it depends if we want to undercut the price , we d or or is it going to make our product look a cheapie-cheapie option?",
//       "agenda": 2,
//       "agenda_similiarity": 0.1783663489499802
//     },
//     {
//       "startTime": "606.66",
//       "endTime": "607.02",
//       "role": "B",
//       "text": "Mm.",
//       "agenda": 2,
//       "agenda_similiarity": 0.1783663489499802
//     },
//     {
//       "startTime": "608.13",
//       "endTime": "645.59",
//       "role": "B",
//       "text": "I think Yeah , um production cost's at twelve fifty , so half of the selling price is taken up by building it. Um , and profit aim is fifty million Euros , which is uh Yi yes , um yeah , I presume so. Um Mm-hmm.",
//       "agenda": 2,
//       "agenda_similiarity": 0.1783663489499802
//     },
//     {
//       "startTime": "614.07",
//       "endTime": "614.89",
//       "role": "C",
//       "text": "Hmm.",
//       "agenda": 2,
//       "agenda_similiarity": 0.1783663489499802
//     },
//     {
//       "startTime": "617.54",
//       "endTime": "619.59",
//       "role": "A",
//       "text": "Okay , pretty huge margin.",
//       "agenda": 2,
//       "agenda_similiarity": 0.1783663489499802
//     },
//     {
//       "startTime": "621.46",
//       "endTime": "622.16",
//       "role": "C",
//       "text": "Yeah.",
//       "agenda": 2,
//       "agenda_similiarity": 0.1783663489499802
//     },
//     {
//       "startTime": "622.02",
//       "endTime": "622.23",
//       "role": "D",
//       "text": "Mm.",
//       "agenda": 2,
//       "agenda_similiarity": 0.1783663489499802
//     },
//     {
//       "startTime": "623.85",
//       "endTime": "624.23",
//       "role": "D",
//       "text": "Mm-hmm.",
//       "agenda": 2,
//       "agenda_similiarity": 0.1783663489499802
//     },
//     {
//       "startTime": "630.37",
//       "endTime": "631.2",
//       "role": "D",
//       "text": "In our first year?",
//       "agenda": 2,
//       "agenda_similiarity": 0.1783663489499802
//     },
//     {
//       "startTime": "635.54",
//       "endTime": "635.88",
//       "role": "D",
//       "text": "Mm-hmm.",
//       "agenda": 2,
//       "agenda_similiarity": 0.1783663489499802
//     },
//     {
//       "startTime": "636.39",
//       "endTime": "687.56",
//       "role": "A",
//       "text": "So then Mm-hmm.",
//       "agenda": 2,
//       "agenda_similiarity": 0.1783663489499802
//     },
//     {
//       "startTime": "638.1",
//       "endTime": "651.49",
//       "role": "D",
//       "text": "You've got market range international and you did say earlier it's got to be a um accessible and usable by sort of all age groups just t we're not focusing on business market , any particular thing , it's everyone user-friendly to everyone. Okay.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "649.13",
//       "endTime": "650.29",
//       "role": "B",
//       "text": "No , yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "653.41",
//       "endTime": "655.4",
//       "role": "D",
//       "text": "Big target group.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "653.57",
//       "endTime": "670.24",
//       "role": "B",
//       "text": "So yes , yes , I don't think we have to I don't think it's a case of worrying about different languages and things like that , um making that a key point , just that it's going to be in the international market like Australia , America , things like that. Okay.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "661.85",
//       "endTime": "662.2",
//       "role": "D",
//       "text": "No.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "666.69",
//       "endTime": "666.94",
//       "role": "D",
//       "text": "Mm.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "675.2",
//       "endTime": "708.91",
//       "role": "B",
//       "text": "What are your experiences with remote controls? I mean I've got we got um we had three videos , a T_V_ and a sort of amp thing all set up so we got one of the universal remote controls , um that you programme each of your things into , but that kept losing the signals so we'd have to re-programme it every now and again. I think it was quite a cheapie as well , so that might have had something to do with it , but that was quite good , the fact that you could You didn't have six remote controls sitting in front of you.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "688.13",
//       "endTime": "688.44",
//       "role": "C",
//       "text": "Yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "691.12",
//       "endTime": "691.89",
//       "role": "D",
//       "text": "Alright.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "691.23",
//       "endTime": "692.13",
//       "role": "C",
//       "text": "Yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "691.49",
//       "endTime": "712.72",
//       "role": "A",
//       "text": "Yeah , that c Okay , you wanna integrate everything into one like Okay.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "701.09",
//       "endTime": "701.69",
//       "role": "D",
//       "text": "Mm-hmm.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "701.1",
//       "endTime": "701.88",
//       "role": "C",
//       "text": "Yeah uh.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "705.18",
//       "endTime": "706.72",
//       "role": "C",
//       "text": "Use all the ones at the same time.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "708.07",
//       "endTime": "708.55",
//       "role": "D",
//       "text": "Right.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "711.24",
//       "endTime": "747.95",
//       "role": "C",
//       "text": "Yeah , 'cause you Yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "711.88",
//       "endTime": "736.05",
//       "role": "D",
//       "text": "Mm-hmm. My experience has only been being given the remote control with the object I buy , not doing any tampering with it and programming , using it to programme T_V_ and uh uh videos and things. But basically on , off , volume up and down , channel one , two , th that basic functions , I don't think I could go any further with it than that , so , I suppose it's got to be something usable by someone like me as well.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "727.67",
//       "endTime": "728.16",
//       "role": "B",
//       "text": "Mm.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "734.98",
//       "endTime": "751.76",
//       "role": "B",
//       "text": "Yeah , the main that's the main stuff anyway , I mean and you don't want to I hate I hate looking at a control and seeing a million tiny little buttons with tiny little words saying what they all do and just sitting there searching for the teletext button or something like that.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "737.29",
//       "endTime": "737.67",
//       "role": "D",
//       "text": "Mm-hmm.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "746.42",
//       "endTime": "746.84",
//       "role": "D",
//       "text": "Mm.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "749.82",
//       "endTime": "755.29",
//       "role": "D",
//       "text": "Mm. And symbols that you don't necessarily understand , symbols you're meant to understand that you don't.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "752.59",
//       "endTime": "752.95",
//       "role": "B",
//       "text": "Yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "755.18",
//       "endTime": "758.06",
//       "role": "A",
//       "text": "So simplification of symbols you could think of.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "755.68",
//       "endTime": "755.92",
//       "role": "B",
//       "text": "Um.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "757.43",
//       "endTime": "779.79",
//       "role": "B",
//       "text": "When they're when you've got the main things on the front of it and a section opens up or something to the other functions where you can do sound or options kind of recording , things like that inside it. 'Cause it doesn't make when you pick it up it doesn't make it really complicated to look at , it's obvious what you're doing , um.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "768.52",
//       "endTime": "768.98",
//       "role": "D",
//       "text": "Oh yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "772.32",
//       "endTime": "772.69",
//       "role": "D",
//       "text": "Mm-hmm.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "775.6",
//       "endTime": "775.84",
//       "role": "D",
//       "text": "Mm.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "777.34",
//       "endTime": "777.65",
//       "role": "D",
//       "text": "Mm-hmm.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "777.92",
//       "endTime": "778.66",
//       "role": "C",
//       "text": "Mm.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "779.78",
//       "endTime": "794.48",
//       "role": "D",
//       "text": "Actually that just raises a point , I wonder what our design people think , but you know on a mobile phone , you can press a key and it gives you a menu , it's got a menu display , I wonder if incorporating that into the design of a remote control might be useful , so you've got a little L_C_D_ display.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "784.99",
//       "endTime": "785.28",
//       "role": "A",
//       "text": "Mm-hmm.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "787.08",
//       "endTime": "787.74",
//       "role": "A",
//       "text": "Menu , alright.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "792.17",
//       "endTime": "792.62",
//       "role": "C",
//       "text": "Yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "792.89",
//       "endTime": "812.03",
//       "role": "A",
//       "text": "Uh uh Right , I was thinking on the same lines you , instead of having too many b buttons and make it complicated for the user , may h maybe have an L_C_D_ di display or something like that , like a mobile , yeah and with menus. And if it's s somewhat similar to what you have on mobile phone , people might find it easier to browse and navigate also maybe.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "803.8",
//       "endTime": "805.92",
//       "role": "D",
//       "text": "With menus , yeah , yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "811.15",
//       "endTime": "811.49",
//       "role": "D",
//       "text": "Yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3629469510492876
//     },
//     {
//       "startTime": "812.35",
//       "endTime": "815.09",
//       "role": "B",
//       "text": "What about the older generation? What about granny and grandads?",
//       "agenda": 3,
//       "agenda_similiarity": 0.294867823975459
//     },
//     {
//       "startTime": "816.15",
//       "endTime": "823.63",
//       "role": "B",
//       "text": "Um , my grandad can answer his mobile phone , but he couldn't even dream of texting or something like that.",
//       "agenda": 3,
//       "agenda_similiarity": 0.294867823975459
//     },
//     {
//       "startTime": "816.27",
//       "endTime": "818.96",
//       "role": "A",
//       "text": "You mean to save it lesser number.",
//       "agenda": 3,
//       "agenda_similiarity": 0.294867823975459
//     },
//     {
//       "startTime": "819.96",
//       "endTime": "820.26",
//       "role": "C",
//       "text": "Yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.294867823975459
//     },
//     {
//       "startTime": "821.35",
//       "endTime": "827.97",
//       "role": "D",
//       "text": "Mm-hmm. Mm-hmm. Can he programme his remote control or is it basic with that too?",
//       "agenda": 3,
//       "agenda_similiarity": 0.294867823975459
//     },
//     {
//       "startTime": "826.06",
//       "endTime": "826.35",
//       "role": "A",
//       "text": "Right.",
//       "agenda": 3,
//       "agenda_similiarity": 0.294867823975459
//     },
//     {
//       "startTime": "828.12",
//       "endTime": "843.24",
//       "role": "B",
//       "text": "I don't think they tape things , I don't think they use Mm , yeah , the age gap.",
//       "agenda": 3,
//       "agenda_similiarity": 0.294867823975459
//     },
//     {
//       "startTime": "829.37",
//       "endTime": "834.05",
//       "role": "C",
//       "text": "Yeah , my grandad's actually better than me at using teletext , so.",
//       "agenda": 3,
//       "agenda_similiarity": 0.294867823975459
//     },
//     {
//       "startTime": "830.05",
//       "endTime": "830.6",
//       "role": "D",
//       "text": "Right.",
//       "agenda": 3,
//       "agenda_similiarity": 0.294867823975459
//     },
//     {
//       "startTime": "833.26",
//       "endTime": "833.8",
//       "role": "D",
//       "text": "Right.",
//       "agenda": 3,
//       "agenda_similiarity": 0.294867823975459
//     },
//     {
//       "startTime": "834.64",
//       "endTime": "844.64",
//       "role": "D",
//       "text": "So that's a problem regardless of of any design modifications you you come up with , that's gonna be a problem anyway with the older generation perhaps , and that's another issue how we tackle that.",
//       "agenda": 3,
//       "agenda_similiarity": 0.294867823975459
//     },
//     {
//       "startTime": "838.64",
//       "endTime": "839.0",
//       "role": "C",
//       "text": "Yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.294867823975459
//     },
//     {
//       "startTime": "843.73",
//       "endTime": "861.94",
//       "role": "C",
//       "text": "Yeah , what it just needs to be as long as it's sort of self-intuitive and you can can work out what everything's doing , 'cause I mean , menus on sort of new phones now they've sort of got all these pictures and stuff which makes it fairly obvious what you're trying to do.",
//       "agenda": 3,
//       "agenda_similiarity": 0.294867823975459
//     },
//     {
//       "startTime": "862.33",
//       "endTime": "862.76",
//       "role": "B",
//       "text": "Mm.",
//       "agenda": 3,
//       "agenda_similiarity": 0.294867823975459
//     },
//     {
//       "startTime": "863.21",
//       "endTime": "863.53",
//       "role": "A",
//       "text": "Mm-hmm.",
//       "agenda": 3,
//       "agenda_similiarity": 0.294867823975459
//     },
//     {
//       "startTime": "864.3",
//       "endTime": "871.74",
//       "role": "B",
//       "text": "I don't know , I d I don't like the , you know the new phones that have kind of got a Windows-based running system.",
//       "agenda": 3,
//       "agenda_similiarity": 0.294867823975459
//     },
//     {
//       "startTime": "864.43",
//       "endTime": "870.69",
//       "role": "C",
//       "text": "But I don't know how Oh yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.294867823975459
//     },
//     {
//       "startTime": "872.2",
//       "endTime": "872.59",
//       "role": "D",
//       "text": "Mm-hmm.",
//       "agenda": 3,
//       "agenda_similiarity": 0.294867823975459
//     },
//     {
//       "startTime": "872.95",
//       "endTime": "885.17",
//       "role": "B",
//       "text": "I find it really confusing , I kept getting lost in the phone , I di I've not got a new one but uh my friend got a new one and I was trying to do things with it and I just kept getting lost , but that's just me.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3348711318480611
//     },
//     {
//       "startTime": "878.36",
//       "endTime": "878.8",
//       "role": "D",
//       "text": "Right.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3348711318480611
//     },
//     {
//       "startTime": "885.18",
//       "endTime": "899.31",
//       "role": "C",
//       "text": "Yeah , I don't I don't know how for twenty fi , or twelve Euros fifty how much of a excellent screen you could get , you'd you'd have to sort of keep it down to a black and white L_C_D_ thing anyway , I'd assume.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3348711318480611
//     },
//     {
//       "startTime": "893.63",
//       "endTime": "894.31",
//       "role": "B",
//       "text": "Yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3348711318480611
//     },
//     {
//       "startTime": "895.43",
//       "endTime": "895.75",
//       "role": "D",
//       "text": "Mm-hmm.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3348711318480611
//     },
//     {
//       "startTime": "898.71",
//       "endTime": "911.78",
//       "role": "D",
//       "text": "Is it possible that that for the older generation you could have like an extra button that you press for large print like you do in large print books? Obviously it displays less on the screen , it displays less on the screen but as long as they can read it that's the main thing.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3348711318480611
//     },
//     {
//       "startTime": "905.32",
//       "endTime": "905.7",
//       "role": "A",
//       "text": "Okay.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3348711318480611
//     },
//     {
//       "startTime": "905.77",
//       "endTime": "907.5",
//       "role": "B",
//       "text": "Teletext has got that option as well.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3348711318480611
//     },
//     {
//       "startTime": "911.86",
//       "endTime": "912.35",
//       "role": "B",
//       "text": "Yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.3348711318480611
//     },
//     {
//       "startTime": "913.69",
//       "endTime": "934.88",
//       "role": "B",
//       "text": "Or what about kind of a dual function? In that you've got the basic buttons just for your play , volume , programme things and also and then a menu to go into with obvious pictures , obvious symbols and that's where you control recording and things like that.",
//       "agenda": 3,
//       "agenda_similiarity": 0.44018142653717096
//     },
//     {
//       "startTime": "923.65",
//       "endTime": "924.04",
//       "role": "D",
//       "text": "Mm-hmm.",
//       "agenda": 3,
//       "agenda_similiarity": 0.44018142653717096
//     },
//     {
//       "startTime": "930.83",
//       "endTime": "931.44",
//       "role": "D",
//       "text": "Yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.44018142653717096
//     },
//     {
//       "startTime": "932.99",
//       "endTime": "933.37",
//       "role": "D",
//       "text": "Mm-hmm.",
//       "agenda": 3,
//       "agenda_similiarity": 0.44018142653717096
//     },
//     {
//       "startTime": "934.74",
//       "endTime": "947.56",
//       "role": "D",
//       "text": "Mm. The other thing is , just ch chucking into mobile phone f design features again , it could have a flip top remote control so that when you flip over the top , your screen is you can have a bigger screen in the the flip over.",
//       "agenda": 2,
//       "agenda_similiarity": 0.3873198317791399
//     },
//     {
//       "startTime": "945.43",
//       "endTime": "945.84",
//       "role": "B",
//       "text": "Mm-hmm.",
//       "agenda": 2,
//       "agenda_similiarity": 0.3873198317791399
//     },
//     {
//       "startTime": "946.04",
//       "endTime": "946.66",
//       "role": "A",
//       "text": "Mm , okay.",
//       "agenda": 2,
//       "agenda_similiarity": 0.3873198317791399
//     },
//     {
//       "startTime": "948.48",
//       "endTime": "958.07",
//       "role": "B",
//       "text": "I think that's a cost thing , I don't I don't know how much we're gonna know about Yes , no that's important.",
//       "agenda": 2,
//       "agenda_similiarity": 0.3873198317791399
//     },
//     {
//       "startTime": "948.6",
//       "endTime": "959.24",
//       "role": "A",
//       "text": "S It might it might save a b bit of space , it's i instead of looking bulky , it might look small. But it might have its cost implications.",
//       "agenda": 2,
//       "agenda_similiarity": 0.3873198317791399
//     },
//     {
//       "startTime": "949.9",
//       "endTime": "957.6",
//       "role": "C",
//       "text": "Y Yeah.",
//       "agenda": 2,
//       "agenda_similiarity": 0.3873198317791399
//     },
//     {
//       "startTime": "951.06",
//       "endTime": "951.41",
//       "role": "D",
//       "text": "Yeah?",
//       "agenda": 2,
//       "agenda_similiarity": 0.3873198317791399
//     },
//     {
//       "startTime": "954.93",
//       "endTime": "955.27",
//       "role": "D",
//       "text": "Mm-hmm.",
//       "agenda": 2,
//       "agenda_similiarity": 0.3873198317791399
//     },
//     {
//       "startTime": "956.78",
//       "endTime": "958.6",
//       "role": "D",
//       "text": "Yeah , like smaller.",
//       "agenda": 2,
//       "agenda_similiarity": 0.3873198317791399
//     },
//     {
//       "startTime": "959.48",
//       "endTime": "960.29",
//       "role": "B",
//       "text": "Okay.",
//       "agenda": 2,
//       "agenda_similiarity": 0.3873198317791399
//     },
//     {
//       "startTime": "959.69",
//       "endTime": "972.45",
//       "role": "D",
//       "text": "And there's no reason we need to make it look as fashionable and stylish as a mobile phone , it can still be lightweight plastic , you know? Something that's easily moulded and produced. Sorry I'm treading on your territory guys.",
//       "agenda": 3,
//       "agenda_similiarity": 0.2504183071685268
//     },
//     {
//       "startTime": "965.1",
//       "endTime": "965.57",
//       "role": "B",
//       "text": "Mm.",
//       "agenda": 3,
//       "agenda_similiarity": 0.2504183071685268
//     },
//     {
//       "startTime": "966.22",
//       "endTime": "966.48",
//       "role": "A",
//       "text": "Right.",
//       "agenda": 3,
//       "agenda_similiarity": 0.2504183071685268
//     },
//     {
//       "startTime": "968.84",
//       "endTime": "969.23",
//       "role": "B",
//       "text": "Yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.2504183071685268
//     },
//     {
//       "startTime": "970.68",
//       "endTime": "1018.91",
//       "role": "C",
//       "text": "No uh uh Yeah. Just just a quick thing about the um about what you're saying about the uh does does it need to be fashionable? The sort of I I had a quick look at the company website and it's like the the uh we put the fashion into electronics , so I think think the whole design thing might be qui I mean you don't you you can still have plastic and it'd look quite good but Yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.2504183071685268
//     },
//     {
//       "startTime": "972.92",
//       "endTime": "989.51",
//       "role": "B",
//       "text": "Um , right , okay we've got half an hour before the next meeting , so we're all gonna go off and do our individual things. Um I think that's probably about it and then we'll come back and liaise again and I get to do another fantastic PowerPoint presentation.",
//       "agenda": 3,
//       "agenda_similiarity": 0.13738406261528835
//     },
//     {
//       "startTime": "991.07",
//       "endTime": "991.47",
//       "role": "B",
//       "text": "Sure.",
//       "agenda": 3,
//       "agenda_similiarity": 0.13738406261528835
//     },
//     {
//       "startTime": "1005.06",
//       "endTime": "1005.74",
//       "role": "D",
//       "text": "Ah right.",
//       "agenda": 3,
//       "agenda_similiarity": 0.13738406261528835
//     },
//     {
//       "startTime": "1005.79",
//       "endTime": "1006.25",
//       "role": "A",
//       "text": "Okay.",
//       "agenda": 3,
//       "agenda_similiarity": 0.13738406261528835
//     },
//     {
//       "startTime": "1005.86",
//       "endTime": "1006.44",
//       "role": "B",
//       "text": "Okay.",
//       "agenda": 3,
//       "agenda_similiarity": 0.13738406261528835
//     },
//     {
//       "startTime": "1006.9",
//       "endTime": "1007.5",
//       "role": "D",
//       "text": "Okay.",
//       "agenda": 3,
//       "agenda_similiarity": 0.13738406261528835
//     },
//     {
//       "startTime": "1009.16",
//       "endTime": "1011.3",
//       "role": "D",
//       "text": "Sure b y yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.13738406261528835
//     },
//     {
//       "startTime": "1013.7",
//       "endTime": "1024.41",
//       "role": "D",
//       "text": "But yeah , I mean it doesn't have to be that , you know th that was my main point , we don't have to use metal , I don't know if using plastic does make it cheaper , I presume it would. Yeah , yeah , yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.28581090285034355
//     },
//     {
//       "startTime": "1019.99",
//       "endTime": "1020.49",
//       "role": "B",
//       "text": "Mm.",
//       "agenda": 3,
//       "agenda_similiarity": 0.28581090285034355
//     },
//     {
//       "startTime": "1022.0",
//       "endTime": "1022.96",
//       "role": "C",
//       "text": "Yeah. Yeah.",
//       "agenda": 3,
//       "agenda_similiarity": 0.28581090285034355
//     },
//     {
//       "startTime": "1022.32",
//       "endTime": "1023.99",
//       "role": "B",
//       "text": "I would it would probably.",
//       "agenda": 3,
//       "agenda_similiarity": 0.28581090285034355
//     },
//     {
//       "startTime": "1025.04",
//       "endTime": "1041.56",
//       "role": "B",
//       "text": "I mean there's Sky remote controls and everything. They're kind of moulded and look a bit different , and the Telewest remote controls are silver plastic , which looks a bit smarter , so yeah I guess that's stuff we can think about. Okay , so let's break it up there.",
//       "agenda": 3,
//       "agenda_similiarity": 0.28581090285034355
//     },
//     {
//       "startTime": "1032.93",
//       "endTime": "1033.35",
//       "role": "D",
//       "text": "Right.",
//       "agenda": 3,
//       "agenda_similiarity": 0.28581090285034355
//     },
//     {
//       "startTime": "1037.32",
//       "endTime": "1037.95",
//       "role": "D",
//       "text": "Okay.",
//       "agenda": 3,
//       "agenda_similiarity": 0.28581090285034355
//     },
//     {
//       "startTime": "1042.19",
//       "endTime": "1042.3",
//       "role": "D",
//       "text": "'Kay.",
//       "agenda": 3,
//       "agenda_similiarity": 0.28581090285034355
//     },
//     {
//       "startTime": "1042.4",
//       "endTime": "1044.16",
//       "role": "B",
//       "text": "Okay? So , see you in half an hour.",
//       "agenda": 3,
//       "agenda_similiarity": 0.28581090285034355
//     },
//     {
//       "startTime": "1046.42",
//       "endTime": "1048.48",
//       "role": "D",
//       "text": "Do we go back to our room? Yep?",
//       "agenda": "-",
//       "agenda_similiarity": "-"
//     }
//   ]
//   var Rdata = [
//     {
//         "id": 0,
//         "startTime-endTime": "0.37-1.76",
//         "text": "Hmm hmm hmm.",
//         "speaker": "A",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 1,
//         "startTime-endTime": "10.99-14.53",
//         "text": "Are we we're not allowed to dim the lights so people can see that a bit better?",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 2,
//         "startTime-endTime": "17.88-18.15",
//         "text": "Yeah.",
//         "speaker": "A",
//         "reply_to_id": "1"
//     },
//     {
//         "id": 3,
//         "startTime-endTime": "18.87-20.29",
//         "text": "Okay , that's fine.",
//         "speaker": "B",
//         "reply_to_id": "2"
//     },
//     {
//         "id": 4,
//         "startTime-endTime": "22.37-23.81",
//         "text": "Am I supposed to be standing up there?",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 5,
//         "startTime-endTime": "25.15-26.83",
//         "text": "So we've got both of these clipped on?",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 6,
//         "startTime-endTime": "25.18-25.6",
//         "text": "Okay.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 7,
//         "startTime-endTime": "29.12-30.48",
//         "text": "She gonna answer me or not?",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 8,
//         "startTime-endTime": "29.86-34.72",
//         "text": "Yeah , I've got Yes.",
//         "speaker": "B",
//         "reply_to_id": "7"
//     },
//     {
//         "id": 9,
//         "startTime-endTime": "31.3-33.39",
//         "text": "Right , both of them , okay.",
//         "speaker": "D",
//         "reply_to_id": "8"
//     },
//     {
//         "id": 10,
//         "startTime-endTime": "42.63-43.29",
//         "text": "God.",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 11,
//         "startTime-endTime": "49.75-53.18",
//         "text": "Jesus , it's gonna fall off.",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 12,
//         "startTime-endTime": "63.81-66.33",
//         "text": "Okay. Yep , yep.",
//         "speaker": "A",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 13,
//         "startTime-endTime": "71.95-72.06",
//         "text": "Okay.",
//         "speaker": "A",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 14,
//         "startTime-endTime": "80.49-115.89",
//         "text": "Okay. Hello everybody. Um I'm Sarah , the Project Manager and this is our first meeting , surprisingly enough. Okay , this is our agenda , um we will do some stuff , get to know each other a bit better to feel more comfortable with each other. Um then we'll go do tool training , talk about the project plan , discuss our own ideas and everything um and we've got twenty five minutes to do that , as far as I can understand.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 15,
//         "startTime-endTime": "80.5-84.03",
//         "text": "Tu tu tu tu Hi , good morning.",
//         "speaker": "A",
//         "reply_to_id": "14"
//     },
//     {
//         "id": 16,
//         "startTime-endTime": "117.62-167.8",
//         "text": "Now , we're developing a remote control which you probably already know. Um , we want it to be original , something that's uh people haven't thought of , that's not out in the shops , um , trendy , appealing to a wide market , but you know , not a hunk of metal , and user-friendly , grannies to kids , maybe even pooches should be able to use it. Okay , um , first is the functional design , um this is where we all go off and do our individual work , um what needs need to be fulfilled by the product , um what effects the product has to have and how it's actually going to do that. Um , conceptual design , what we're thinking , how it's gonna go and then the detailed design , how we're actually gonna put it into practice and make it work.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 17,
//         "startTime-endTime": "168.79-168.88",
//         "text": "'Kay.",
//         "speaker": "A",
//         "reply_to_id": "16"
//     },
//     {
//         "id": 18,
//         "startTime-endTime": "170.38-211.97",
//         "text": "Okay , right. We're gonna practice with the pens and draw our favourite animal on the white board , I'll go first , and um sum up the characteristics of that animal. So Okay , I'll leave space for everyone else. Um What's missing?",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 19,
//         "startTime-endTime": "188.28-188.43",
//         "text": "Oops.",
//         "speaker": "A",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 20,
//         "startTime-endTime": "243.22-244.33",
//         "text": "We're running out of blue.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 21,
//         "startTime-endTime": "246.93-250.6",
//         "text": "Okay. I'm not gonna ask you to guess , I'm going to tell you that's supposed to be a tiger.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 22,
//         "startTime-endTime": "252.48-252.56",
//         "text": "Mm.",
//         "speaker": "A",
//         "reply_to_id": "21"
//     },
//     {
//         "id": 23,
//         "startTime-endTime": "254.53-269.06",
//         "text": "And I see them as majestic , and independent , and proud.",
//         "speaker": "B",
//         "reply_to_id": "22"
//     },
//     {
//         "id": 24,
//         "startTime-endTime": "255.91-256.25",
//         "text": "Oh sorry.",
//         "speaker": "A",
//         "reply_to_id": "23"
//     },
//     {
//         "id": 25,
//         "startTime-endTime": "258.31-258.64",
//         "text": "Mm-hmm.",
//         "speaker": "A",
//         "reply_to_id": "23"
//     },
//     {
//         "id": 26,
//         "startTime-endTime": "272.31-275.8",
//         "text": "Now , who would like to go next? 'Kay.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 27,
//         "startTime-endTime": "275.09-275.45",
//         "text": "Yeah , me.",
//         "speaker": "A",
//         "reply_to_id": "26"
//     },
//     {
//         "id": 28,
//         "startTime-endTime": "279.18-279.75",
//         "text": "Cat.",
//         "speaker": "A",
//         "reply_to_id": "26"
//     },
//     {
//         "id": 29,
//         "startTime-endTime": "285.15-286.61",
//         "text": "Where did this come from?",
//         "speaker": "A",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 30,
//         "startTime-endTime": "287.57-290.1",
//         "text": "Is that your lapel then? There you go.",
//         "speaker": "B",
//         "reply_to_id": "29"
//     },
//     {
//         "id": 31,
//         "startTime-endTime": "289.09-296.02",
//         "text": "Uh , yep. Thank you. Uh , maybe you can guess what I'm trying to make?",
//         "speaker": "A",
//         "reply_to_id": "30"
//     },
//     {
//         "id": 32,
//         "startTime-endTime": "306.38-307.2",
//         "text": "A kind of dog?",
//         "speaker": "D",
//         "reply_to_id": "31"
//     },
//     {
//         "id": 33,
//         "startTime-endTime": "309.22-310.08",
//         "text": "Yep.",
//         "speaker": "A",
//         "reply_to_id": "32"
//     },
//     {
//         "id": 34,
//         "startTime-endTime": "313.47-321.86",
//         "text": "It's actually sitting , so it's sitting , it's not standing. Okay , I see it as one thing it's very supportive.",
//         "speaker": "A",
//         "reply_to_id": "32"
//     },
//     {
//         "id": 35,
//         "startTime-endTime": "315.85-316.3",
//         "text": "Sorry?",
//         "speaker": "D",
//         "reply_to_id": "34"
//     },
//     {
//         "id": 36,
//         "startTime-endTime": "316.65-317.4",
//         "text": "It's sitting down.",
//         "speaker": "C",
//         "reply_to_id": "34"
//     },
//     {
//         "id": 37,
//         "startTime-endTime": "317.9-318.62",
//         "text": "Uh.",
//         "speaker": "D",
//         "reply_to_id": "36"
//     },
//     {
//         "id": 38,
//         "startTime-endTime": "324.13-351.47",
//         "text": "It's your best friend and your you can talk to a dog , it can be your best friend , it doesn't discriminate between you , based on what you are. Second it's loyal and third thing it's got intuition. dogs can som sometimes can make out between a thief and a person so basically these are the three unique features I think belong to a dog. Thank you.",
//         "speaker": "A",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 39,
//         "startTime-endTime": "344.91-345.36",
//         "text": "Mm-hmm.",
//         "speaker": "D",
//         "reply_to_id": "38"
//     },
//     {
//         "id": 40,
//         "startTime-endTime": "350.01-351.09",
//         "text": "Okay , thank you.",
//         "speaker": "B",
//         "reply_to_id": "38"
//     },
//     {
//         "id": 41,
//         "startTime-endTime": "353.48-355.55",
//         "text": "Yeah I'll have a go.",
//         "speaker": "C",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 42,
//         "startTime-endTime": "354.11-354.82",
//         "text": "Okay.",
//         "speaker": "A",
//         "reply_to_id": "41"
//     },
//     {
//         "id": 43,
//         "startTime-endTime": "356.33-356.9",
//         "text": "Sorry.",
//         "speaker": "A",
//         "reply_to_id": "41"
//     },
//     {
//         "id": 44,
//         "startTime-endTime": "356.51-362.14",
//         "text": "Please , please leave me a space at the bottom , I'm little , you can get to the top , with standing on a chair.",
//         "speaker": "D",
//         "reply_to_id": "41"
//     },
//     {
//         "id": 45,
//         "startTime-endTime": "356.98-357.37",
//         "text": "Thanks.",
//         "speaker": "C",
//         "reply_to_id": "44"
//     },
//     {
//         "id": 46,
//         "startTime-endTime": "359.11-367.65",
//         "text": "Alright , okay. Well since you guys have chosen the ones I wanted to do , I'll have to have to go for something a bit random.",
//         "speaker": "C",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 47,
//         "startTime-endTime": "364.81-366.01",
//         "text": "Okay.",
//         "speaker": "B",
//         "reply_to_id": "46"
//     },
//     {
//         "id": 48,
//         "startTime-endTime": "365.93-367.84",
//         "text": "Does it look like a dog actually?",
//         "speaker": "A",
//         "reply_to_id": "46"
//     },
//     {
//         "id": 49,
//         "startTime-endTime": "371.43-375.29",
//         "text": "And also , my drawing skill isn't that great so , yeah.",
//         "speaker": "C",
//         "reply_to_id": "48"
//     },
//     {
//         "id": 50,
//         "startTime-endTime": "373.84-394.92",
//         "text": "Well , as you can see , the quality of the work today is um Gonna be a bird.",
//         "speaker": "B",
//         "reply_to_id": "49"
//     },
//     {
//         "id": 51,
//         "startTime-endTime": "375.08-375.43",
//         "text": "Mm.",
//         "speaker": "A",
//         "reply_to_id": "49"
//     },
//     {
//         "id": 52,
//         "startTime-endTime": "376.8-378.94",
//         "text": "I think it's outstandingly good.",
//         "speaker": "D",
//         "reply_to_id": "49"
//     },
//     {
//         "id": 53,
//         "startTime-endTime": "379.6-384.48",
//         "text": "Okay , now I'm gonna have to change what is was originally gonna be because that looks like a beak now , so.",
//         "speaker": "C",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 54,
//         "startTime-endTime": "391.13-391.74",
//         "text": "Crocodile?",
//         "speaker": "D",
//         "reply_to_id": "53"
//     },
//     {
//         "id": 55,
//         "startTime-endTime": "394.38-406.27",
//         "text": "Yeah , it can be a crocodile , it can be a crocodile. Well it was it was an at first firstly it was an attempt at a T_ Rex and then it sort of changed into a pelican but it can be a crocodile now actually.",
//         "speaker": "C",
//         "reply_to_id": "54"
//     },
//     {
//         "id": 56,
//         "startTime-endTime": "396.31-399.8",
//         "text": "Is it gonna be it's gonna be a bird.",
//         "speaker": "B",
//         "reply_to_id": "55"
//     },
//     {
//         "id": 57,
//         "startTime-endTime": "403.24-442.12",
//         "text": "O Beauti that's Okay.",
//         "speaker": "D",
//         "reply_to_id": "55"
//     },
//     {
//         "id": 58,
//         "startTime-endTime": "420.11-420.95",
//         "text": "That's lovely.",
//         "speaker": "B",
//         "reply_to_id": "55"
//     },
//     {
//         "id": 59,
//         "startTime-endTime": "421.2-441.99",
//         "text": "Yeah and uh I'll have to think on the spot of uh things that it is. Um uh scary , uh strong , yeah that's about it I think.",
//         "speaker": "C",
//         "reply_to_id": "58"
//     },
//     {
//         "id": 60,
//         "startTime-endTime": "439.85-441.77",
//         "text": "Okay it's fine.",
//         "speaker": "B",
//         "reply_to_id": "59"
//     },
//     {
//         "id": 61,
//         "startTime-endTime": "443.16-450.85",
//         "text": "Um , I'm very impressed with your artistic skills , mine's are dreadful. Oops this is now coming apart , let me just put the top in.",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 62,
//         "startTime-endTime": "445.23-465.99",
//         "text": "Uh uh Wo Hmm.",
//         "speaker": "C",
//         "reply_to_id": "61"
//     },
//     {
//         "id": 63,
//         "startTime-endTime": "454.0-456.94",
//         "text": "I hope that clicks in , I'll just I'll hold it on , okay.",
//         "speaker": "D",
//         "reply_to_id": "62"
//     },
//     {
//         "id": 64,
//         "startTime-endTime": "457.97-460.57",
//         "text": "Oops , oh dear , what happened there?",
//         "speaker": "D",
//         "reply_to_id": "63"
//     },
//     {
//         "id": 65,
//         "startTime-endTime": "461.09-462.16",
//         "text": "Technical help.",
//         "speaker": "B",
//         "reply_to_id": "64"
//     },
//     {
//         "id": 66,
//         "startTime-endTime": "465.38-479.35",
//         "text": "Hopefully that'll stay on , two-handed version. Okay , uh Again this is off the top of my head , I was gonna do a big cat too , um.",
//         "speaker": "D",
//         "reply_to_id": "65"
//     },
//     {
//         "id": 67,
//         "startTime-endTime": "467.94-468.7",
//         "text": "Okay.",
//         "speaker": "C",
//         "reply_to_id": "66"
//     },
//     {
//         "id": 68,
//         "startTime-endTime": "476.71-499.98",
//         "text": "Uh S Uh Okay , some sort of bird.",
//         "speaker": "C",
//         "reply_to_id": "66"
//     },
//     {
//         "id": 69,
//         "startTime-endTime": "481.26-484.68",
//         "text": "Oh dear , it doesn't look what like what I want it to be.",
//         "speaker": "D",
//         "reply_to_id": "68"
//     },
//     {
//         "id": 70,
//         "startTime-endTime": "481.27-481.66",
//         "text": "Hmm.",
//         "speaker": "B",
//         "reply_to_id": "69"
//     },
//     {
//         "id": 71,
//         "startTime-endTime": "487.1-487.71",
//         "text": "Uh.",
//         "speaker": "D",
//         "reply_to_id": "69"
//     },
//     {
//         "id": 72,
//         "startTime-endTime": "488.77-491.41",
//         "text": "It's not a vampire bat honestly.",
//         "speaker": "D",
//         "reply_to_id": "69"
//     },
//     {
//         "id": 73,
//         "startTime-endTime": "489.88-491.34",
//         "text": "Okay , yeah.",
//         "speaker": "B",
//         "reply_to_id": "72"
//     },
//     {
//         "id": 74,
//         "startTime-endTime": "492.9-518.66",
//         "text": "Uh and somewhere there's a body behind. That's my dreadful that's the worst yet , that's it's meant to be an eagle you can tell it's a flying animal could have been a seagull , I never thought of a seagull. An eagle , um again I'm thinking on my feet goodness. I suppose they're all so independent , I'd put that one down again. Da dum um.",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 75,
//         "startTime-endTime": "501.19-504.66",
//         "text": "A seagu right , not a seagull.",
//         "speaker": "B",
//         "reply_to_id": "74"
//     },
//     {
//         "id": 76,
//         "startTime-endTime": "501.76-503.22",
//         "text": "Ah eagle , right okay.",
//         "speaker": "C",
//         "reply_to_id": "74"
//     },
//     {
//         "id": 77,
//         "startTime-endTime": "501.78-502.67",
//         "text": "Eagle , okay.",
//         "speaker": "A",
//         "reply_to_id": "74"
//     },
//     {
//         "id": 78,
//         "startTime-endTime": "519.87-520.95",
//         "text": "They're good at golf.",
//         "speaker": "C",
//         "reply_to_id": "77"
//     },
//     {
//         "id": 79,
//         "startTime-endTime": "520.28-536.6",
//         "text": "Indepen independent , right , did you say they're good at golf? Are they? Oh. Oh right , okay , I'm not good at golf. I'd say they're quite free-spirited , flying around everywhere , doing their own thing.",
//         "speaker": "D",
//         "reply_to_id": "78"
//     },
//     {
//         "id": 80,
//         "startTime-endTime": "524.31-528.63",
//         "text": "Yeah , no yeah , an eagle.",
//         "speaker": "C",
//         "reply_to_id": "79"
//     },
//     {
//         "id": 81,
//         "startTime-endTime": "525.5-525.96",
//         "text": "Eagle.",
//         "speaker": "B",
//         "reply_to_id": "79"
//     },
//     {
//         "id": 82,
//         "startTime-endTime": "541.43-549.53",
//         "text": "And uh , birds of prey aren't they , oh dear , intrepid. I'll put that , intrepid.",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 83,
//         "startTime-endTime": "545.31-545.64",
//         "text": "Mm-hmm.",
//         "speaker": "B",
//         "reply_to_id": "82"
//     },
//     {
//         "id": 84,
//         "startTime-endTime": "553.66-556.77",
//         "text": "There we go , hope that pen's gonna be okay.",
//         "speaker": "D",
//         "reply_to_id": "82"
//     },
//     {
//         "id": 85,
//         "startTime-endTime": "554.48-555.15",
//         "text": "That's lovely.",
//         "speaker": "B",
//         "reply_to_id": "84"
//     },
//     {
//         "id": 86,
//         "startTime-endTime": "558.67-559.33",
//         "text": "Whoops.",
//         "speaker": "D",
//         "reply_to_id": "84"
//     },
//     {
//         "id": 87,
//         "startTime-endTime": "561.11-561.6",
//         "text": "Okay.",
//         "speaker": "B",
//         "reply_to_id": "86"
//     },
//     {
//         "id": 88,
//         "startTime-endTime": "563.12-575.32",
//         "text": "That was fun , right. Um finance-wise , we've got a selling price at twenty five Euros , which I don't actually know what that is in Pounds , at all. Any ideas?",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 89,
//         "startTime-endTime": "575.11-577.66",
//         "text": "It's about mm , mm yeah.",
//         "speaker": "C",
//         "reply_to_id": "88"
//     },
//     {
//         "id": 90,
//         "startTime-endTime": "576.51-577.21",
//         "text": "Seventeen.",
//         "speaker": "D",
//         "reply_to_id": "88"
//     },
//     {
//         "id": 91,
//         "startTime-endTime": "576.76-581.5",
//         "text": "One point four or something like that. One point four Euro would make a Pound or something like that.",
//         "speaker": "A",
//         "reply_to_id": "88"
//     },
//     {
//         "id": 92,
//         "startTime-endTime": "580.85-587.57",
//         "text": "Yeah , yeah , something like that , so that yeah about seventeen , seventeen Pounds , something like that.",
//         "speaker": "C",
//         "reply_to_id": "91"
//     },
//     {
//         "id": 93,
//         "startTime-endTime": "582.6-582.92",
//         "text": "Yeah.",
//         "speaker": "A",
//         "reply_to_id": "92"
//     },
//     {
//         "id": 94,
//         "startTime-endTime": "583.85-587.98",
//         "text": "D fifteen? Seventeen. Okay , that's expensive.",
//         "speaker": "B",
//         "reply_to_id": "92"
//     },
//     {
//         "id": 95,
//         "startTime-endTime": "584.88-585.97",
//         "text": "Seventeen Pounds.",
//         "speaker": "D",
//         "reply_to_id": "94"
//     },
//     {
//         "id": 96,
//         "startTime-endTime": "588.37-592.28",
//         "text": "Should we be making notes of this? We can just refer to this later can't we? Yeah , okay.",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 97,
//         "startTime-endTime": "590.86-608.09",
//         "text": "But Havi having said that though , if you wanna get one of those the the ones on the market at the moment they're s they're about twenty pounds anyway. So , it'd still be yeah , we had to buy one.",
//         "speaker": "C",
//         "reply_to_id": "94"
//     },
//     {
//         "id": 98,
//         "startTime-endTime": "590.98-595.93",
//         "text": "I think so , I think so , I'll be able to um pull it up , or I could put it in the shared folder or something.",
//         "speaker": "B",
//         "reply_to_id": "96"
//     },
//     {
//         "id": 99,
//         "startTime-endTime": "593.81-594.27",
//         "text": "Okay.",
//         "speaker": "D",
//         "reply_to_id": "98"
//     },
//     {
//         "id": 100,
//         "startTime-endTime": "603.51-604.22",
//         "text": "Right.",
//         "speaker": "D",
//         "reply_to_id": "98"
//     },
//     {
//         "id": 101,
//         "startTime-endTime": "603.88-604.22",
//         "text": "Really?",
//         "speaker": "B",
//         "reply_to_id": "97"
//     },
//     {
//         "id": 102,
//         "startTime-endTime": "605.84-613.93",
//         "text": "So so I suppose later it depends if we want to undercut the price , we d or or is it going to make our product look a cheapie-cheapie option?",
//         "speaker": "D",
//         "reply_to_id": "97"
//     },
//     {
//         "id": 103,
//         "startTime-endTime": "606.66-607.02",
//         "text": "Mm.",
//         "speaker": "B",
//         "reply_to_id": "102"
//     },
//     {
//         "id": 104,
//         "startTime-endTime": "608.13-645.59",
//         "text": "I think Yeah , um production cost's at twelve fifty , so half of the selling price is taken up by building it. Um , and profit aim is fifty million Euros , which is uh Yi yes , um yeah , I presume so. Um Mm-hmm.",
//         "speaker": "B",
//         "reply_to_id": "102"
//     },
//     {
//         "id": 105,
//         "startTime-endTime": "614.07-614.89",
//         "text": "Hmm.",
//         "speaker": "C",
//         "reply_to_id": "104"
//     },
//     {
//         "id": 106,
//         "startTime-endTime": "617.54-619.59",
//         "text": "Okay , pretty huge margin.",
//         "speaker": "A",
//         "reply_to_id": "104"
//     },
//     {
//         "id": 107,
//         "startTime-endTime": "621.46-622.16",
//         "text": "Yeah.",
//         "speaker": "C",
//         "reply_to_id": "106"
//     },
//     {
//         "id": 108,
//         "startTime-endTime": "622.02-622.23",
//         "text": "Mm.",
//         "speaker": "D",
//         "reply_to_id": "106"
//     },
//     {
//         "id": 109,
//         "startTime-endTime": "623.85-624.23",
//         "text": "Mm-hmm.",
//         "speaker": "D",
//         "reply_to_id": "106"
//     },
//     {
//         "id": 110,
//         "startTime-endTime": "630.37-631.2",
//         "text": "In our first year?",
//         "speaker": "D",
//         "reply_to_id": "106"
//     },
//     {
//         "id": 111,
//         "startTime-endTime": "635.54-635.88",
//         "text": "Mm-hmm.",
//         "speaker": "D",
//         "reply_to_id": "110"
//     },
//     {
//         "id": 112,
//         "startTime-endTime": "636.39-687.56",
//         "text": "So then Mm-hmm.",
//         "speaker": "A",
//         "reply_to_id": "110"
//     },
//     {
//         "id": 113,
//         "startTime-endTime": "638.1-651.49",
//         "text": "You've got market range international and you did say earlier it's got to be a um accessible and usable by sort of all age groups just t we're not focusing on business market , any particular thing , it's everyone user-friendly to everyone. Okay.",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 114,
//         "startTime-endTime": "649.13-650.29",
//         "text": "No , yeah.",
//         "speaker": "B",
//         "reply_to_id": "113"
//     },
//     {
//         "id": 115,
//         "startTime-endTime": "653.41-655.4",
//         "text": "Big target group.",
//         "speaker": "D",
//         "reply_to_id": "114"
//     },
//     {
//         "id": 116,
//         "startTime-endTime": "653.57-670.24",
//         "text": "So yes , yes , I don't think we have to I don't think it's a case of worrying about different languages and things like that , um making that a key point , just that it's going to be in the international market like Australia , America , things like that. Okay.",
//         "speaker": "B",
//         "reply_to_id": "115"
//     },
//     {
//         "id": 117,
//         "startTime-endTime": "661.85-662.2",
//         "text": "No.",
//         "speaker": "D",
//         "reply_to_id": "116"
//     },
//     {
//         "id": 118,
//         "startTime-endTime": "666.69-666.94",
//         "text": "Mm.",
//         "speaker": "D",
//         "reply_to_id": "116"
//     },
//     {
//         "id": 119,
//         "startTime-endTime": "675.2-708.91",
//         "text": "What are your experiences with remote controls? I mean I've got we got um we had three videos , a T_V_ and a sort of amp thing all set up so we got one of the universal remote controls , um that you programme each of your things into , but that kept losing the signals so we'd have to re-programme it every now and again. I think it was quite a cheapie as well , so that might have had something to do with it , but that was quite good , the fact that you could You didn't have six remote controls sitting in front of you.",
//         "speaker": "B",
//         "reply_to_id": "115"
//     },
//     {
//         "id": 120,
//         "startTime-endTime": "688.13-688.44",
//         "text": "Yeah.",
//         "speaker": "C",
//         "reply_to_id": "119"
//     },
//     {
//         "id": 121,
//         "startTime-endTime": "691.12-691.89",
//         "text": "Alright.",
//         "speaker": "D",
//         "reply_to_id": "119"
//     },
//     {
//         "id": 122,
//         "startTime-endTime": "691.23-692.13",
//         "text": "Yeah.",
//         "speaker": "C",
//         "reply_to_id": "119"
//     },
//     {
//         "id": 123,
//         "startTime-endTime": "691.49-712.72",
//         "text": "Yeah , that c Okay , you wanna integrate everything into one like Okay.",
//         "speaker": "A",
//         "reply_to_id": "119"
//     },
//     {
//         "id": 124,
//         "startTime-endTime": "701.09-701.69",
//         "text": "Mm-hmm.",
//         "speaker": "D",
//         "reply_to_id": "119"
//     },
//     {
//         "id": 125,
//         "startTime-endTime": "701.1-701.88",
//         "text": "Yeah uh.",
//         "speaker": "C",
//         "reply_to_id": "119"
//     },
//     {
//         "id": 126,
//         "startTime-endTime": "705.18-706.72",
//         "text": "Use all the ones at the same time.",
//         "speaker": "C",
//         "reply_to_id": "119"
//     },
//     {
//         "id": 127,
//         "startTime-endTime": "708.07-708.55",
//         "text": "Right.",
//         "speaker": "D",
//         "reply_to_id": "119"
//     },
//     {
//         "id": 128,
//         "startTime-endTime": "711.24-747.95",
//         "text": "Yeah , 'cause you Yeah.",
//         "speaker": "C",
//         "reply_to_id": "119"
//     },
//     {
//         "id": 129,
//         "startTime-endTime": "711.88-736.05",
//         "text": "Mm-hmm. My experience has only been being given the remote control with the object I buy , not doing any tampering with it and programming , using it to programme T_V_ and uh uh videos and things. But basically on , off , volume up and down , channel one , two , th that basic functions , I don't think I could go any further with it than that , so , I suppose it's got to be something usable by someone like me as well.",
//         "speaker": "D",
//         "reply_to_id": "119"
//     },
//     {
//         "id": 130,
//         "startTime-endTime": "727.67-728.16",
//         "text": "Mm.",
//         "speaker": "B",
//         "reply_to_id": "129"
//     },
//     {
//         "id": 131,
//         "startTime-endTime": "734.98-751.76",
//         "text": "Yeah , the main that's the main stuff anyway , I mean and you don't want to I hate I hate looking at a control and seeing a million tiny little buttons with tiny little words saying what they all do and just sitting there searching for the teletext button or something like that.",
//         "speaker": "B",
//         "reply_to_id": "129"
//     },
//     {
//         "id": 132,
//         "startTime-endTime": "737.29-737.67",
//         "text": "Mm-hmm.",
//         "speaker": "D",
//         "reply_to_id": "131"
//     },
//     {
//         "id": 133,
//         "startTime-endTime": "746.42-746.84",
//         "text": "Mm.",
//         "speaker": "D",
//         "reply_to_id": "131"
//     },
//     {
//         "id": 134,
//         "startTime-endTime": "749.82-755.29",
//         "text": "Mm. And symbols that you don't necessarily understand , symbols you're meant to understand that you don't.",
//         "speaker": "D",
//         "reply_to_id": "131"
//     },
//     {
//         "id": 135,
//         "startTime-endTime": "752.59-752.95",
//         "text": "Yeah.",
//         "speaker": "B",
//         "reply_to_id": "134"
//     },
//     {
//         "id": 136,
//         "startTime-endTime": "755.18-758.06",
//         "text": "So simplification of symbols you could think of.",
//         "speaker": "A",
//         "reply_to_id": "134"
//     },
//     {
//         "id": 137,
//         "startTime-endTime": "755.68-755.92",
//         "text": "Um.",
//         "speaker": "B",
//         "reply_to_id": "134"
//     },
//     {
//         "id": 138,
//         "startTime-endTime": "757.43-779.79",
//         "text": "When they're when you've got the main things on the front of it and a section opens up or something to the other functions where you can do sound or options kind of recording , things like that inside it. 'Cause it doesn't make when you pick it up it doesn't make it really complicated to look at , it's obvious what you're doing , um.",
//         "speaker": "B",
//         "reply_to_id": "136"
//     },
//     {
//         "id": 139,
//         "startTime-endTime": "768.52-768.98",
//         "text": "Oh yeah.",
//         "speaker": "D",
//         "reply_to_id": "138"
//     },
//     {
//         "id": 140,
//         "startTime-endTime": "772.32-772.69",
//         "text": "Mm-hmm.",
//         "speaker": "D",
//         "reply_to_id": "138"
//     },
//     {
//         "id": 141,
//         "startTime-endTime": "775.6-775.84",
//         "text": "Mm.",
//         "speaker": "D",
//         "reply_to_id": "138"
//     },
//     {
//         "id": 142,
//         "startTime-endTime": "777.34-777.65",
//         "text": "Mm-hmm.",
//         "speaker": "D",
//         "reply_to_id": "138"
//     },
//     {
//         "id": 143,
//         "startTime-endTime": "777.92-778.66",
//         "text": "Mm.",
//         "speaker": "C",
//         "reply_to_id": "138"
//     },
//     {
//         "id": 144,
//         "startTime-endTime": "779.78-794.48",
//         "text": "Actually that just raises a point , I wonder what our design people think , but you know on a mobile phone , you can press a key and it gives you a menu , it's got a menu display , I wonder if incorporating that into the design of a remote control might be useful , so you've got a little L_C_D_ display.",
//         "speaker": "D",
//         "reply_to_id": "138"
//     },
//     {
//         "id": 145,
//         "startTime-endTime": "784.99-785.28",
//         "text": "Mm-hmm.",
//         "speaker": "A",
//         "reply_to_id": "144"
//     },
//     {
//         "id": 146,
//         "startTime-endTime": "787.08-787.74",
//         "text": "Menu , alright.",
//         "speaker": "A",
//         "reply_to_id": "144"
//     },
//     {
//         "id": 147,
//         "startTime-endTime": "792.17-792.62",
//         "text": "Yeah.",
//         "speaker": "C",
//         "reply_to_id": "144"
//     },
//     {
//         "id": 148,
//         "startTime-endTime": "792.89-812.03",
//         "text": "Uh uh Right , I was thinking on the same lines you , instead of having too many b buttons and make it complicated for the user , may h maybe have an L_C_D_ di display or something like that , like a mobile , yeah and with menus. And if it's s somewhat similar to what you have on mobile phone , people might find it easier to browse and navigate also maybe.",
//         "speaker": "A",
//         "reply_to_id": "144"
//     },
//     {
//         "id": 149,
//         "startTime-endTime": "803.8-805.92",
//         "text": "With menus , yeah , yeah.",
//         "speaker": "D",
//         "reply_to_id": "148"
//     },
//     {
//         "id": 150,
//         "startTime-endTime": "811.15-811.49",
//         "text": "Yeah.",
//         "speaker": "D",
//         "reply_to_id": "148"
//     },
//     {
//         "id": 151,
//         "startTime-endTime": "812.35-815.09",
//         "text": "What about the older generation? What about granny and grandads?",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 152,
//         "startTime-endTime": "816.15-823.63",
//         "text": "Um , my grandad can answer his mobile phone , but he couldn't even dream of texting or something like that.",
//         "speaker": "B",
//         "reply_to_id": "151"
//     },
//     {
//         "id": 153,
//         "startTime-endTime": "816.27-818.96",
//         "text": "You mean to save it lesser number.",
//         "speaker": "A",
//         "reply_to_id": "152"
//     },
//     {
//         "id": 154,
//         "startTime-endTime": "819.96-820.26",
//         "text": "Yeah.",
//         "speaker": "C",
//         "reply_to_id": "152"
//     },
//     {
//         "id": 155,
//         "startTime-endTime": "821.35-827.97",
//         "text": "Mm-hmm. Mm-hmm. Can he programme his remote control or is it basic with that too?",
//         "speaker": "D",
//         "reply_to_id": "152"
//     },
//     {
//         "id": 156,
//         "startTime-endTime": "826.06-826.35",
//         "text": "Right.",
//         "speaker": "A",
//         "reply_to_id": "155"
//     },
//     {
//         "id": 157,
//         "startTime-endTime": "828.12-843.24",
//         "text": "I don't think they tape things , I don't think they use Mm , yeah , the age gap.",
//         "speaker": "B",
//         "reply_to_id": "155"
//     },
//     {
//         "id": 158,
//         "startTime-endTime": "829.37-834.05",
//         "text": "Yeah , my grandad's actually better than me at using teletext , so.",
//         "speaker": "C",
//         "reply_to_id": "155"
//     },
//     {
//         "id": 159,
//         "startTime-endTime": "830.05-830.6",
//         "text": "Right.",
//         "speaker": "D",
//         "reply_to_id": "157"
//     },
//     {
//         "id": 160,
//         "startTime-endTime": "833.26-833.8",
//         "text": "Right.",
//         "speaker": "D",
//         "reply_to_id": "158"
//     },
//     {
//         "id": 161,
//         "startTime-endTime": "834.64-844.64",
//         "text": "So that's a problem regardless of of any design modifications you you come up with , that's gonna be a problem anyway with the older generation perhaps , and that's another issue how we tackle that.",
//         "speaker": "D",
//         "reply_to_id": "157"
//     },
//     {
//         "id": 162,
//         "startTime-endTime": "838.64-839.0",
//         "text": "Yeah.",
//         "speaker": "C",
//         "reply_to_id": "161"
//     },
//     {
//         "id": 163,
//         "startTime-endTime": "843.73-861.94",
//         "text": "Yeah , what it just needs to be as long as it's sort of self-intuitive and you can can work out what everything's doing , 'cause I mean , menus on sort of new phones now they've sort of got all these pictures and stuff which makes it fairly obvious what you're trying to do.",
//         "speaker": "C",
//         "reply_to_id": "161"
//     },
//     {
//         "id": 164,
//         "startTime-endTime": "862.33-862.76",
//         "text": "Mm.",
//         "speaker": "B",
//         "reply_to_id": "163"
//     },
//     {
//         "id": 165,
//         "startTime-endTime": "863.21-863.53",
//         "text": "Mm-hmm.",
//         "speaker": "A",
//         "reply_to_id": "163"
//     },
//     {
//         "id": 166,
//         "startTime-endTime": "864.3-871.74",
//         "text": "I don't know , I d I don't like the , you know the new phones that have kind of got a Windows-based running system.",
//         "speaker": "B",
//         "reply_to_id": "163"
//     },
//     {
//         "id": 167,
//         "startTime-endTime": "864.43-870.69",
//         "text": "But I don't know how Oh yeah.",
//         "speaker": "C",
//         "reply_to_id": "166"
//     },
//     {
//         "id": 168,
//         "startTime-endTime": "872.2-872.59",
//         "text": "Mm-hmm.",
//         "speaker": "D",
//         "reply_to_id": "166"
//     },
//     {
//         "id": 169,
//         "startTime-endTime": "872.95-885.17",
//         "text": "I find it really confusing , I kept getting lost in the phone , I di I've not got a new one but uh my friend got a new one and I was trying to do things with it and I just kept getting lost , but that's just me.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 170,
//         "startTime-endTime": "878.36-878.8",
//         "text": "Right.",
//         "speaker": "D",
//         "reply_to_id": "169"
//     },
//     {
//         "id": 171,
//         "startTime-endTime": "885.18-899.31",
//         "text": "Yeah , I don't I don't know how for twenty fi , or twelve Euros fifty how much of a excellent screen you could get , you'd you'd have to sort of keep it down to a black and white L_C_D_ thing anyway , I'd assume.",
//         "speaker": "C",
//         "reply_to_id": "169"
//     },
//     {
//         "id": 172,
//         "startTime-endTime": "893.63-894.31",
//         "text": "Yeah.",
//         "speaker": "B",
//         "reply_to_id": "171"
//     },
//     {
//         "id": 173,
//         "startTime-endTime": "895.43-895.75",
//         "text": "Mm-hmm.",
//         "speaker": "D",
//         "reply_to_id": "171"
//     },
//     {
//         "id": 174,
//         "startTime-endTime": "898.71-911.78",
//         "text": "Is it possible that that for the older generation you could have like an extra button that you press for large print like you do in large print books? Obviously it displays less on the screen , it displays less on the screen but as long as they can read it that's the main thing.",
//         "speaker": "D",
//         "reply_to_id": "171"
//     },
//     {
//         "id": 175,
//         "startTime-endTime": "905.32-905.7",
//         "text": "Okay.",
//         "speaker": "A",
//         "reply_to_id": "174"
//     },
//     {
//         "id": 176,
//         "startTime-endTime": "905.77-907.5",
//         "text": "Teletext has got that option as well.",
//         "speaker": "B",
//         "reply_to_id": "174"
//     },
//     {
//         "id": 177,
//         "startTime-endTime": "911.86-912.35",
//         "text": "Yeah.",
//         "speaker": "B",
//         "reply_to_id": "176"
//     },
//     {
//         "id": 178,
//         "startTime-endTime": "913.69-934.88",
//         "text": "Or what about kind of a dual function? In that you've got the basic buttons just for your play , volume , programme things and also and then a menu to go into with obvious pictures , obvious symbols and that's where you control recording and things like that.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 179,
//         "startTime-endTime": "923.65-924.04",
//         "text": "Mm-hmm.",
//         "speaker": "D",
//         "reply_to_id": "178"
//     },
//     {
//         "id": 180,
//         "startTime-endTime": "930.83-931.44",
//         "text": "Yeah.",
//         "speaker": "D",
//         "reply_to_id": "178"
//     },
//     {
//         "id": 181,
//         "startTime-endTime": "932.99-933.37",
//         "text": "Mm-hmm.",
//         "speaker": "D",
//         "reply_to_id": "178"
//     },
//     {
//         "id": 182,
//         "startTime-endTime": "934.74-947.56",
//         "text": "Mm. The other thing is , just ch chucking into mobile phone f design features again , it could have a flip top remote control so that when you flip over the top , your screen is you can have a bigger screen in the the flip over.",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 183,
//         "startTime-endTime": "945.43-945.84",
//         "text": "Mm-hmm.",
//         "speaker": "B",
//         "reply_to_id": "182"
//     },
//     {
//         "id": 184,
//         "startTime-endTime": "946.04-946.66",
//         "text": "Mm , okay.",
//         "speaker": "A",
//         "reply_to_id": "182"
//     },
//     {
//         "id": 185,
//         "startTime-endTime": "948.48-958.07",
//         "text": "I think that's a cost thing , I don't I don't know how much we're gonna know about Yes , no that's important.",
//         "speaker": "B",
//         "reply_to_id": "182"
//     },
//     {
//         "id": 186,
//         "startTime-endTime": "948.6-959.24",
//         "text": "S It might it might save a b bit of space , it's i instead of looking bulky , it might look small. But it might have its cost implications.",
//         "speaker": "A",
//         "reply_to_id": "185"
//     },
//     {
//         "id": 187,
//         "startTime-endTime": "949.9-957.6",
//         "text": "Y Yeah.",
//         "speaker": "C",
//         "reply_to_id": "185"
//     },
//     {
//         "id": 188,
//         "startTime-endTime": "951.06-951.41",
//         "text": "Yeah?",
//         "speaker": "D",
//         "reply_to_id": "185"
//     },
//     {
//         "id": 189,
//         "startTime-endTime": "954.93-955.27",
//         "text": "Mm-hmm.",
//         "speaker": "D",
//         "reply_to_id": "186"
//     },
//     {
//         "id": 190,
//         "startTime-endTime": "956.78-958.6",
//         "text": "Yeah , like smaller.",
//         "speaker": "D",
//         "reply_to_id": "186"
//     },
//     {
//         "id": 191,
//         "startTime-endTime": "959.48-960.29",
//         "text": "Okay.",
//         "speaker": "B",
//         "reply_to_id": "190"
//     },
//     {
//         "id": 192,
//         "startTime-endTime": "959.69-972.45",
//         "text": "And there's no reason we need to make it look as fashionable and stylish as a mobile phone , it can still be lightweight plastic , you know? Something that's easily moulded and produced. Sorry I'm treading on your territory guys.",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 193,
//         "startTime-endTime": "965.1-965.57",
//         "text": "Mm.",
//         "speaker": "B",
//         "reply_to_id": "192"
//     },
//     {
//         "id": 194,
//         "startTime-endTime": "966.22-966.48",
//         "text": "Right.",
//         "speaker": "A",
//         "reply_to_id": "192"
//     },
//     {
//         "id": 195,
//         "startTime-endTime": "968.84-969.23",
//         "text": "Yeah.",
//         "speaker": "B",
//         "reply_to_id": "192"
//     },
//     {
//         "id": 196,
//         "startTime-endTime": "970.68-1018.91",
//         "text": "No uh uh Yeah. Just just a quick thing about the um about what you're saying about the uh does does it need to be fashionable? The sort of I I had a quick look at the company website and it's like the the uh we put the fashion into electronics , so I think think the whole design thing might be qui I mean you don't you you can still have plastic and it'd look quite good but Yeah.",
//         "speaker": "C",
//         "reply_to_id": "192"
//     },
//     {
//         "id": 197,
//         "startTime-endTime": "972.92-989.51",
//         "text": "Um , right , okay we've got half an hour before the next meeting , so we're all gonna go off and do our individual things. Um I think that's probably about it and then we'll come back and liaise again and I get to do another fantastic PowerPoint presentation.",
//         "speaker": "B",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 198,
//         "startTime-endTime": "991.07-991.47",
//         "text": "Sure.",
//         "speaker": "B",
//         "reply_to_id": "197"
//     },
//     {
//         "id": 199,
//         "startTime-endTime": "1005.06-1005.74",
//         "text": "Ah right.",
//         "speaker": "D",
//         "reply_to_id": "197"
//     },
//     {
//         "id": 200,
//         "startTime-endTime": "1005.79-1006.25",
//         "text": "Okay.",
//         "speaker": "A",
//         "reply_to_id": "197"
//     },
//     {
//         "id": 201,
//         "startTime-endTime": "1005.86-1006.44",
//         "text": "Okay.",
//         "speaker": "B",
//         "reply_to_id": "197"
//     },
//     {
//         "id": 202,
//         "startTime-endTime": "1006.9-1007.5",
//         "text": "Okay.",
//         "speaker": "D",
//         "reply_to_id": "197"
//     },
//     {
//         "id": 203,
//         "startTime-endTime": "1009.16-1011.3",
//         "text": "Sure b y yeah.",
//         "speaker": "D",
//         "reply_to_id": "197"
//     },
//     {
//         "id": 204,
//         "startTime-endTime": "1013.7-1024.41",
//         "text": "But yeah , I mean it doesn't have to be that , you know th that was my main point , we don't have to use metal , I don't know if using plastic does make it cheaper , I presume it would. Yeah , yeah , yeah.",
//         "speaker": "D",
//         "reply_to_id": "-"
//     },
//     {
//         "id": 205,
//         "startTime-endTime": "1019.99-1020.49",
//         "text": "Mm.",
//         "speaker": "B",
//         "reply_to_id": "204"
//     },
//     {
//         "id": 206,
//         "startTime-endTime": "1022.0-1022.96",
//         "text": "Yeah. Yeah.",
//         "speaker": "C",
//         "reply_to_id": "204"
//     },
//     {
//         "id": 207,
//         "startTime-endTime": "1022.32-1023.99",
//         "text": "I would it would probably.",
//         "speaker": "B",
//         "reply_to_id": "204"
//     },
//     {
//         "id": 208,
//         "startTime-endTime": "1025.04-1041.56",
//         "text": "I mean there's Sky remote controls and everything. They're kind of moulded and look a bit different , and the Telewest remote controls are silver plastic , which looks a bit smarter , so yeah I guess that's stuff we can think about. Okay , so let's break it up there.",
//         "speaker": "B",
//         "reply_to_id": "204"
//     },
//     {
//         "id": 209,
//         "startTime-endTime": "1032.93-1033.35",
//         "text": "Right.",
//         "speaker": "D",
//         "reply_to_id": "208"
//     },
//     {
//         "id": 210,
//         "startTime-endTime": "1037.32-1037.95",
//         "text": "Okay.",
//         "speaker": "D",
//         "reply_to_id": "208"
//     },
//     {
//         "id": 211,
//         "startTime-endTime": "1042.19-1042.3",
//         "text": "'Kay.",
//         "speaker": "D",
//         "reply_to_id": "208"
//     },
//     {
//         "id": 212,
//         "startTime-endTime": "1042.4-1044.16",
//         "text": "Okay? So , see you in half an hour.",
//         "speaker": "B",
//         "reply_to_id": "211"
//     },
//     {
//         "id": 213,
//         "startTime-endTime": "1046.42-1048.48",
//         "text": "Do we go back to our room? Yep?",
//         "speaker": "D",
//         "reply_to_id": "-"
//     }
// ]
  
  var data = [  //case 2
    {
      "startTime": 0.1,
      "endTime": 0.84,
      "role": "A",
      "text": "To agree.",
      "agenda": "-",
      "agenda_similiarity": "-"
    },
    {
      "startTime": 0.7,
      "endTime": 1.98,
      "role": "B",
      "text": "Agree on the items.",
      "agenda": "-",
      "agenda_similiarity": "-"
    },
    {
      "startTime": 2.4,
      "endTime": 3.54,
      "role": "C",
      "text": "In ten minutes.",
      "agenda": "-",
      "agenda_similiarity": "-"
    },
    {
      "startTime": 3.2,
      "endTime": 3.58,
      "role": "B",
      "text": "Yeah.",
      "agenda": "-",
      "agenda_similiarity": "-"
    },
    {
      "startTime": 3.6,
      "endTime": 3.92,
      "role": "D",
      "text": "Okay.",
      "agenda": "-",
      "agenda_similiarity": "-"
    },
    {
      "startTime": 5.8,
      "endTime": 9.04,
      "role": "A",
      "text": "So which is your- the most important for you?",
      "agenda": 1,
      "agenda_similiarity": 0.4196150404662515
    },
    {
      "startTime": 9.5,
      "endTime": 15.26,
      "role": "B",
      "text": "For me was the piece of heavy duty canvas. I was thinking about making a kind of tent.",
      "agenda": 1,
      "agenda_similiarity": 0.4196150404662515
    },
    {
      "startTime": 17.7,
      "endTime": 18.34,
      "role": "A",
      "text": "Mm hmm.",
      "agenda": 1,
      "agenda_similiarity": 0.4196150404662515
    },
    {
      "startTime": 18.6,
      "endTime": 20.7,
      "role": "B",
      "text": "Against the cold. I don't know.",
      "agenda": 1,
      "agenda_similiarity": 0.4196150404662515
    },
    {
      "startTime": 22.2,
      "endTime": 25.53,
      "role": "C",
      "text": "This weighs equally with the extra shirts and pants.",
      "agenda": 1,
      "agenda_similiarity": 0.4196150404662515
    },
    {
      "startTime": 28.4,
      "endTime": 29.39,
      "role": "D",
      "text": "I think .",
      "agenda": 1,
      "agenda_similiarity": 0.4196150404662515
    },
    {
      "startTime": 28.9,
      "endTime": 38.89,
      "role": "B",
      "text": "Er, I don't know if they're equal. Like, I mean, duty canvas can protect you against wind or rain. Extra shirts and pants will get wet, like.",
      "agenda": 1,
      "agenda_similiarity": 0.4196150404662515
    },
    {
      "startTime": 42.7,
      "endTime": 44.68,
      "role": "A",
      "text": "It's- it's too cold to rain.",
      "agenda": 1,
      "agenda_similiarity": 0.4196150404662515
    },
    {
      "startTime": 44.7,
      "endTime": 45.06,
      "role": "B",
      "text": "Yeah.",
      "agenda": 1,
      "agenda_similiarity": 0.4196150404662515
    },
    {
      "startTime": 45.2,
      "endTime": 51.28,
      "role": "C",
      "text": "It's minus ten. So in- in my opinion, the time is the most important thing here.",
      "agenda": 1,
      "agenda_similiarity": 0.1532784636768867
    },
    {
      "startTime": 49.8,
      "endTime": 50.5,
      "role": "B",
      "text": "Well I...",
      "agenda": 1,
      "agenda_similiarity": 0.1532784636768867
    },
    {
      "startTime": 50.1,
      "endTime": 61.12,
      "role": "C",
      "text": "So minus ten degrees in the morning meaning we know we can easily survive another two hours. In two hours from seventy kilometres habituation people can easily come, so.",
      "agenda": 1,
      "agenda_similiarity": 0.1532784636768867
    },
    {
      "startTime": 59.3,
      "endTime": 60.9,
      "role": "A",
      "text": "Just a consideration, er .",
      "agenda": 1,
      "agenda_similiarity": 0.1532784636768867
    },
    {
      "startTime": 60.5,
      "endTime": 61.16,
      "role": "B",
      "text": "I would...",
      "agenda": "-",
      "agenda_similiarity": "-"
    },
    {
      "startTime": 61.8,
      "endTime": 62.79,
      "role": "C",
      "text": "So making tent.",
      "agenda": 1,
      "agenda_similiarity": 0.11027442576154395
    },
    {
      "startTime": 62.6,
      "endTime": 69.4,
      "role": "B",
      "text": "No. I think it's more like we should walk or try to move to the direction where people is coming.",
      "agenda": 1,
      "agenda_similiarity": 0.11027442576154395
    },
    {
      "startTime": 68.7,
      "endTime": 80.95,
      "role": "D",
      "text": "But in my opinion the most important thing is the thing that allows you to survive in the next five minutes at least to survive in the next- because minus ten degrees you can die.",
      "agenda": 1,
      "agenda_similiarity": 0.20886256595830235
    },
    {
      "startTime": 76.4,
      "endTime": 77.54,
      "role": "C",
      "text": "Next two hours.",
      "agenda": 1,
      "agenda_similiarity": 0.20886256595830235
    },
    {
      "startTime": 77.4,
      "endTime": 84.4,
      "role": "D",
      "text": "Yeah, but at least you survive five minutes. So you have five minutes to decide what to do next. Because-",
      "agenda": 1,
      "agenda_similiarity": 0.20886256595830235
    },
    {
      "startTime": 83.1,
      "endTime": 84.9,
      "role": "B",
      "text": "But you won't die in...",
      "agenda": 1,
      "agenda_similiarity": 0.20886256595830235
    },
    {
      "startTime": 84.6,
      "endTime": 89.7,
      "role": "D",
      "text": "At minus ten you can die. If you are not well dressed you can die.",
      "agenda": 1,
      "agenda_similiarity": 0.20886256595830235
    },
    {
      "startTime": 88.2,
      "endTime": 91.08,
      "role": "C",
      "text": "So we are well dressed that was mentioned.",
      "agenda": 1,
      "agenda_similiarity": 0.20886256595830235
    },
    {
      "startTime": 90.1,
      "endTime": 90.45,
      "role": "B",
      "text": "Yeah.",
      "agenda": 1,
      "agenda_similiarity": 0.20886256595830235
    },
    {
      "startTime": 90.3,
      "endTime": 91.95,
      "role": "C",
      "text": "We are all well dressed.",
      "agenda": 1,
      "agenda_similiarity": 0.20886256595830235
    },
    {
      "startTime": 91.0,
      "endTime": 92.32,
      "role": "B",
      "text": "Yeah for winter clothes.",
      "agenda": 1,
      "agenda_similiarity": 0.20886256595830235
    },
    {
      "startTime": 92.4,
      "endTime": 97.2,
      "role": "C",
      "text": "For winter so. Minus ten we have by default. Next two hours without doing effort-",
      "agenda": 1,
      "agenda_similiarity": 0.1951118997756494
    },
    {
      "startTime": 97.5,
      "endTime": 99.54,
      "role": "B",
      "text": "I think we have to move-",
      "agenda": 0,
      "agenda_similiarity": 0.2362497301205719
    },
    {
      "startTime": 97.7,
      "endTime": 99.98,
      "role": "C",
      "text": "We need to have something more.",
      "agenda": "-",
      "agenda_similiarity": "-"
    },
    {
      "startTime": 99.4,
      "endTime": 108.04,
      "role": "B",
      "text": "Like then start moving and then we- we need something to, er, well protect us like in winter, something to eat and to know where to go.",
      "agenda": 0,
      "agenda_similiarity": 0.2362497301205719
    },
    {
      "startTime": 110.7,
      "endTime": 118.38,
      "role": "D",
      "text": "Exactly. I put the chocolate as the first one. So you can-if there are people who didn't eat, they can't move in the cold.",
      "agenda": 0,
      "agenda_similiarity": 0.2362497301205719
    },
    {
      "startTime": 116.1,
      "endTime": 117.95,
      "role": "C",
      "text": "In the flight, er, well-",
      "agenda": 1,
      "agenda_similiarity": 0.15351957000198052
    },
    {
      "startTime": 118.2,
      "endTime": 122.82,
      "role": "C",
      "text": "Probably we were flying for one hour. We are in Minnesota. Imagine we are...",
      "agenda": 1,
      "agenda_similiarity": 0.15351957000198052
    },
    {
      "startTime": 122.1,
      "endTime": 127.05,
      "role": "D",
      "text": "We are not well- well we are dressed like in flight, but not dressed like...",
      "agenda": 1,
      "agenda_similiarity": 0.15351957000198052
    },
    {
      "startTime": 128.2,
      "endTime": 130.42,
      "role": "C",
      "text": "No it is mentioned we were...",
      "agenda": 1,
      "agenda_similiarity": 0.15351957000198052
    },
    {
      "startTime": 129.6,
      "endTime": 133.45,
      "role": "B",
      "text": "Winter clothes. Suits, pant suits, street shoes and a work coat.",
      "agenda": 1,
      "agenda_similiarity": 0.15351957000198052
    },
    {
      "startTime": 133.2,
      "endTime": 134.22,
      "role": "C",
      "text": "Yeah winter clothes.",
      "agenda": 1,
      "agenda_similiarity": 0.15351957000198052
    },
    {
      "startTime": 134.7,
      "endTime": 135.72,
      "role": "B",
      "text": "I think that-",
      "agenda": 2,
      "agenda_similiarity": 0.09219700411601985
    },
    {
      "startTime": 135.9,
      "endTime": 138.46,
      "role": "C",
      "text": "Dressed in winter clothing, appropriate for city wear.",
      "agenda": 1,
      "agenda_similiarity": 0.15351957000198052
    },
    {
      "startTime": 138.4,
      "endTime": 145.24,
      "role": "B",
      "text": "I think it's quite important also, like, to know where to go and, like, a compass and a map.",
      "agenda": 2,
      "agenda_similiarity": 0.09219700411601985
    },
    {
      "startTime": 143.3,
      "endTime": 145.54,
      "role": "C",
      "text": "Appropriate for city weather, not the outskirts",
      "agenda": 1,
      "agenda_similiarity": 0.15351957000198052
    },
    {
      "startTime": 146.6,
      "endTime": 146.94,
      "role": "B",
      "text": "Yeah.",
      "agenda": 2,
      "agenda_similiarity": 0.09219700411601985
    },
    {
      "startTime": 146.8,
      "endTime": 151.84,
      "role": "C",
      "text": "So probably the first thing that we have to do is get more clothing.",
      "agenda": 2,
      "agenda_similiarity": 0.12941070010640668
    },
    {
      "startTime": 150.1,
      "endTime": 150.45,
      "role": "B",
      "text": "Yeah.",
      "agenda": 2,
      "agenda_similiarity": 0.12941070010640668
    },
    {
      "startTime": 151.7,
      "endTime": 155.54,
      "role": "C",
      "text": "And then started moving. So to move we need to have something.",
      "agenda": 2,
      "agenda_similiarity": 0.12941070010640668
    },
    {
      "startTime": 159.4,
      "endTime": 162.2,
      "role": "B",
      "text": "Yeah the maps- aerial maps and the compass.",
      "agenda": 2,
      "agenda_similiarity": 0.12941070010640668
    },
    {
      "startTime": 161.6,
      "endTime": 171.1,
      "role": "C",
      "text": "So as I said, first of all seventy kilometres away from the habituation and they'd know the news already that we are- we have crashed.",
      "agenda": 2,
      "agenda_similiarity": 0.15299203644391937
    },
    {
      "startTime": 172.2,
      "endTime": 178.28,
      "role": "B",
      "text": "Yeah but they don't know exactly where we are. And if- we have to walk seventy kilometres in snow.",
      "agenda": 2,
      "agenda_similiarity": 0.15299203644391937
    },
    {
      "startTime": 177.8,
      "endTime": 179.6,
      "role": "C",
      "text": "They, they must know because-",
      "agenda": 2,
      "agenda_similiarity": 0.15299203644391937
    },
    {
      "startTime": 178.1,
      "endTime": 179.62,
      "role": "B",
      "text": "That could be like...",
      "agenda": 2,
      "agenda_similiarity": 0.15299203644391937
    },
    {
      "startTime": 179.3,
      "endTime": 182.34,
      "role": "C",
      "text": "Because the information is sent before the crash.",
      "agenda": 2,
      "agenda_similiarity": 0.15299203644391937
    },
    {
      "startTime": 183.2,
      "endTime": 184.52,
      "role": "D",
      "text": "That's not been sent.",
      "agenda": 2,
      "agenda_similiarity": 0.15299203644391937
    },
    {
      "startTime": 185.4,
      "endTime": 191.69,
      "role": "C",
      "text": "The information is sent. It's mentioned. The crash came suddenly before the pilot had time to radio.",
      "agenda": 2,
      "agenda_similiarity": 0.15299203644391937
    },
    {
      "startTime": 191.4,
      "endTime": 191.77,
      "role": "A",
      "text": "Before?",
      "agenda": 2,
      "agenda_similiarity": 0.15299203644391937
    },
    {
      "startTime": 191.9,
      "endTime": 192.22,
      "role": "C",
      "text": "So.",
      "agenda": 2,
      "agenda_similiarity": 0.15299203644391937
    },
    {
      "startTime": 192.1,
      "endTime": 192.43,
      "role": "A",
      "text": "Before.",
      "agenda": 2,
      "agenda_similiarity": 0.15299203644391937
    },
    {
      "startTime": 194.0,
      "endTime": 194.35,
      "role": "B",
      "text": "Before.",
      "agenda": 2,
      "agenda_similiarity": 0.15299203644391937
    },
    {
      "startTime": 194.0,
      "endTime": 197.5,
      "role": "C",
      "text": "Before the crash. Meaning they'd know our locations exactly, so.",
      "agenda": 2,
      "agenda_similiarity": 0.16119429866357748
    },
    {
      "startTime": 196.8,
      "endTime": 197.14,
      "role": "A",
      "text": "No.",
      "agenda": 2,
      "agenda_similiarity": 0.16119429866357748
    },
    {
      "startTime": 197.2,
      "endTime": 197.56,
      "role": "B",
      "text": "No.",
      "agenda": 2,
      "agenda_similiarity": 0.16119429866357748
    },
    {
      "startTime": 198.3,
      "endTime": 200.94,
      "role": "A",
      "text": "No. The crash came suddenly before the pilot-",
      "agenda": 2,
      "agenda_similiarity": 0.16119429866357748
    },
    {
      "startTime": 200.5,
      "endTime": 200.88,
      "role": "C",
      "text": "Ah.",
      "agenda": 2,
      "agenda_similiarity": 0.16119429866357748
    },
    {
      "startTime": 200.8,
      "endTime": 202.4,
      "role": "A",
      "text": "Had a chance to radio.",
      "agenda": 2,
      "agenda_similiarity": 0.16119429866357748
    },
    {
      "startTime": 201.4,
      "endTime": 203.0,
      "role": "C",
      "text": "Okay. I wrongly read it.",
      "agenda": 2,
      "agenda_similiarity": 0.16119429866357748
    },
    {
      "startTime": 202.3,
      "endTime": 205.8,
      "role": "B",
      "text": "So yes. It's like they don't know we have crashed.",
      "agenda": 2,
      "agenda_similiarity": 0.16119429866357748
    },
    {
      "startTime": 204.9,
      "endTime": 209.52,
      "role": "C",
      "text": "Okay. So if they don't know we crashed suddenly before the pilot had time.",
      "agenda": 2,
      "agenda_similiarity": 0.16119429866357748
    },
    {
      "startTime": 210.1,
      "endTime": 212.0,
      "role": "B",
      "text": "And, I mean, they could...",
      "agenda": 2,
      "agenda_similiarity": 0.16119429866357748
    },
    {
      "startTime": 213.4,
      "endTime": 219.01,
      "role": "C",
      "text": "Okay this means we certainly have to move. So for that we need some direction maps, so.",
      "agenda": 2,
      "agenda_similiarity": 0.16119429866357748
    },
    {
      "startTime": 221.5,
      "endTime": 227.1,
      "role": "B",
      "text": "And thirty-five, like, seventy kilometres with snow- that's two days of walking or something like that.",
      "agenda": 2,
      "agenda_similiarity": 0.16119429866357748
    },
    {
      "startTime": 227.2,
      "endTime": 229.12,
      "role": "A",
      "text": "Yeah at least two days that.",
      "agenda": 2,
      "agenda_similiarity": 0.16119429866357748
    },
    {
      "startTime": 230.8,
      "endTime": 232.9,
      "role": "B",
      "text": "So we need something to eat.",
      "agenda": 0,
      "agenda_similiarity": "-"
    },
    {
      "startTime": 234.9,
      "endTime": 235.23,
      "role": "A",
      "text": "Exactly.",
      "agenda": 0,
      "agenda_similiarity": "-"
    },
    {
      "startTime": 235.6,
      "endTime": 236.62,
      "role": "B",
      "text": "To be warm.",
      "agenda": 0,
      "agenda_similiarity": "-"
    },
    {
      "startTime": 236.2,
      "endTime": 237.8,
      "role": "C",
      "text": "So seventy-five kilometres of walking.",
      "agenda": 1,
      "agenda_similiarity": 0.15405184571505626
    },
    {
      "startTime": 237.1,
      "endTime": 237.82,
      "role": "B",
      "text": "In snow.",
      "agenda": 1,
      "agenda_similiarity": 0.15405184571505626
    },
    {
      "startTime": 239.7,
      "endTime": 240.72,
      "role": "A",
      "text": "In the snow.",
      "agenda": 1,
      "agenda_similiarity": 0.15405184571505626
    },
    {
      "startTime": 240.3,
      "endTime": 242.1,
      "role": "C",
      "text": "In the snow until .",
      "agenda": 1,
      "agenda_similiarity": 0.15405184571505626
    },
    {
      "startTime": 242.9,
      "endTime": 246.3,
      "role": "B",
      "text": "Until- but well we hope maybe to find some maybe.",
      "agenda": 1,
      "agenda_similiarity": 0.15405184571505626
    },
    {
      "startTime": 248.3,
      "endTime": 252.0,
      "role": "A",
      "text": "Okay let's- let's identify the- the first three or four-",
      "agenda": 1,
      "agenda_similiarity": 0.05406711208759469
    },
    {
      "startTime": 251.6,
      "endTime": 251.93,
      "role": "B",
      "text": "Yeah.",
      "agenda": 1,
      "agenda_similiarity": 0.05406711208759469
    },
    {
      "startTime": 252.2,
      "endTime": 256.16,
      "role": "A",
      "text": "More- more important. Because we- we don't have too much time.",
      "agenda": 1,
      "agenda_similiarity": 0.05406711208759469
    },
    {
      "startTime": 253.1,
      "endTime": 253.48,
      "role": "B",
      "text": "Yeah.",
      "agenda": 1,
      "agenda_similiarity": 0.05406711208759469
    },
    {
      "startTime": 253.5,
      "endTime": 253.82,
      "role": "A",
      "text": "So.",
      "agenda": 0,
      "agenda_similiarity": 0.2798768952859531
    },
    {
      "startTime": 254.9,
      "endTime": 256.38,
      "role": "B",
      "text": "Extra shirts and pants?",
      "agenda": 0,
      "agenda_similiarity": 0.2798768952859531
    },
    {
      "startTime": 255.1,
      "endTime": 259.06,
      "role": "A",
      "text": "So something to- something to eat, I don't know chocolate? At least.",
      "agenda": 0,
      "agenda_similiarity": 0.2798768952859531
    },
    {
      "startTime": 260.2,
      "endTime": 261.72,
      "role": "D",
      "text": "It's not very useful.",
      "agenda": 0,
      "agenda_similiarity": 0.2798768952859531
    },
    {
      "startTime": 263.7,
      "endTime": 265.5,
      "role": "B",
      "text": "Chocolate and can of shortening.",
      "agenda": 0,
      "agenda_similiarity": 0.2798768952859531
    },
    {
      "startTime": 264.4,
      "endTime": 269.44,
      "role": "A",
      "text": "Well it is full of sugar. It burns. It keeps you alive at least.",
      "agenda": 0,
      "agenda_similiarity": 0.2798768952859531
    },
    {
      "startTime": 268.6,
      "endTime": 270.25,
      "role": "D",
      "text": "It burns too- too rapidly.",
      "agenda": 0,
      "agenda_similiarity": 0.2798768952859531
    },
    {
      "startTime": 269.2,
      "endTime": 272.9,
      "role": "A",
      "text": "So you don't need to eat for two- two days.",
      "agenda": 0,
      "agenda_similiarity": 0.2798768952859531
    },
    {
      "startTime": 271.4,
      "endTime": 276.8,
      "role": "D",
      "text": "I don't think it's a good idea. Maybe we can find some animals to kill.",
      "agenda": 0,
      "agenda_similiarity": 0.2798768952859531
    },
    {
      "startTime": 275.1,
      "endTime": 278.52,
      "role": "B",
      "text": "Er, how to eat them? How to kill them?",
      "agenda": 0,
      "agenda_similiarity": 0.2798768952859531
    },
    {
      "startTime": 280.1,
      "endTime": 281.54,
      "role": "D",
      "text": "We have an axe.",
      "agenda": 0,
      "agenda_similiarity": 0.2798768952859531
    },
    {
      "startTime": 281.3,
      "endTime": 283.1,
      "role": "C",
      "text": "Hand axe. But we ...",
      "agenda": 0,
      "agenda_similiarity": 0.2798768952859531
    },
    {
      "startTime": 284.5,
      "endTime": 285.55,
      "role": "B",
      "text": "Well it .",
      "agenda": 0,
      "agenda_similiarity": 0.2798768952859531
    },
    {
      "startTime": 287.4,
      "endTime": 296.04,
      "role": "C",
      "text": "First of all we just survived from the flight. So basically we want to survive from the cold. The cold is the main point. Not the hunger.",
      "agenda": 2,
      "agenda_similiarity": 0.28260330710531684
    },
    {
      "startTime": 294.7,
      "endTime": 296.6,
      "role": "B",
      "text": "I think we have to-",
      "agenda": "-",
      "agenda_similiarity": "-"
    },
    {
      "startTime": 295.8,
      "endTime": 296.76,
      "role": "C",
      "text": "Not the hunger.",
      "agenda": 2,
      "agenda_similiarity": 0.28260330710531684
    },
    {
      "startTime": 296.2,
      "endTime": 306.84,
      "role": "B",
      "text": "If we are planning, like, we will have to walk for two days or three. Well we have to have something to eat but maybe not so much.",
      "agenda": 2,
      "agenda_similiarity": 0.28260330710531684
    },
    {
      "startTime": 304.1,
      "endTime": 312.42,
      "role": "A",
      "text": "But we have the gun so we don't need the axe to kill animals. It's a- it's a forty-five calibre pistol. So we can kill animals.",
      "agenda": 2,
      "agenda_similiarity": 0.28260330710531684
    },
    {
      "startTime": 310.9,
      "endTime": 314.64,
      "role": "B",
      "text": "I don't think we will have lots of things to kill.",
      "agenda": 2,
      "agenda_similiarity": 0.28260330710531684
    },
    {
      "startTime": 315.5,
      "endTime": 317.81,
      "role": "D",
      "text": "A pistol is not a good idea.",
      "agenda": 2,
      "agenda_similiarity": 0.28260330710531684
    },
    {
      "startTime": 316.3,
      "endTime": 316.66,
      "role": "A",
      "text": "Why?",
      "agenda": 2,
      "agenda_similiarity": 0.28260330710531684
    },
    {
      "startTime": 317.2,
      "endTime": 330.88,
      "role": "D",
      "text": "When people are together for too long a period of time without a- with less hope to survive, I'm not very sure, except for a family, er, it's a good idea to give them a pistol.",
      "agenda": 2,
      "agenda_similiarity": 0.28260330710531684
    },
    {
      "startTime": 330.6,
      "endTime": 330.97,
      "role": "B",
      "text": "Even...",
      "agenda": "-",
      "agenda_similiarity": "-"
    },
    {
      "startTime": 330.0,
      "endTime": 331.92,
      "role": "A",
      "text": "If you want to kill ",
      "agenda": 2,
      "agenda_similiarity": 0.28260330710531684
    },
    {
      "startTime": 334.1,
      "endTime": 335.09,
      "role": "B",
      "text": "No I think..",
      "agenda": 2,
      "agenda_similiarity": 0.28260330710531684
    },
    {
      "startTime": 335.4,
      "endTime": 340.02,
      "role": "D",
      "text": "No. But I- but I'm not pretty sure that human beings are good, so.",
      "agenda": 2,
      "agenda_similiarity": 0.28260330710531684
    },
    {
      "startTime": 339.3,
      "endTime": 346.33,
      "role": "B",
      "text": "Come on. You are big and you can stay two days without eating and nothing will happen to you.",
      "agenda": 0,
      "agenda_similiarity": 0.12611105317051124
    },
    {
      "startTime": 345.2,
      "endTime": 345.56,
      "role": "A",
      "text": "Yes.",
      "agenda": 0,
      "agenda_similiarity": 0.12611105317051124
    },
    {
      "startTime": 345.6,
      "endTime": 347.82,
      "role": "D",
      "text": "Okay we don't have time ",
      "agenda": 0,
      "agenda_similiarity": 0.12611105317051124
    },
    {
      "startTime": 347.7,
      "endTime": 356.2,
      "role": "C",
      "text": "So four days- for me this is a second priority. We are still in the first priority where we need something to survive without food.",
      "agenda": 0,
      "agenda_similiarity": 0.40128968804670023
    },
    {
      "startTime": 355.7,
      "endTime": 357.6,
      "role": "B",
      "text": "Okay I think it's maybe..",
      "agenda": 0,
      "agenda_similiarity": 0.40128968804670023
    },
    {
      "startTime": 357.3,
      "endTime": 359.22,
      "role": "C",
      "text": "Against the cold and walking towards.",
      "agenda": 0,
      "agenda_similiarity": 0.40128968804670023
    },
    {
      "startTime": 359.1,
      "endTime": 359.43,
      "role": "D",
      "text": "Yeah.",
      "agenda": 0,
      "agenda_similiarity": 0.40128968804670023
    },
    {
      "startTime": 361.8,
      "endTime": 364.44,
      "role": "B",
      "text": "Well cold, then something to eat and then-",
      "agenda": 0,
      "agenda_similiarity": 0.40128968804670023
    },
    {
      "startTime": 364.9,
      "endTime": 368.53,
      "role": "C",
      "text": "So cannot reach the habituation in one day. We need shelter.",
      "agenda": 2,
      "agenda_similiarity": 0.12518018993715144
    },
    {
      "startTime": 368.4,
      "endTime": 369.51,
      "role": "B",
      "text": "We need something.",
      "agenda": 0,
      "agenda_similiarity": 0.40128968804670023
    },
    {
      "startTime": 369.3,
      "endTime": 372.1,
      "role": "C",
      "text": "So second one should be the twenty-by-twenty metres-",
      "agenda": 1,
      "agenda_similiarity": 0.012432370448373352
    },
    {
      "startTime": 373.6,
      "endTime": 373.94,
      "role": "B",
      "text": "Tent.",
      "agenda": 1,
      "agenda_similiarity": 0.012432370448373352
    },
    {
      "startTime": 374.2,
      "endTime": 374.58,
      "role": "C",
      "text": "Yeah.",
      "agenda": 1,
      "agenda_similiarity": 0.012432370448373352
    },
    {
      "startTime": 375.3,
      "endTime": 384.82,
      "role": "B",
      "text": "I'm not so sure. Is it better to get second, like, the compass and the maps? Because, I mean, getting oriented in the snow, it's not so easy.",
      "agenda": 2,
      "agenda_similiarity": 0.17096690321051572
    },
    {
      "startTime": 384.4,
      "endTime": 398.08,
      "role": "C",
      "text": "Er, if if you have compass or not, you are not- you are going to stay in the forest for the night. So if you have compass, it doesn't make sense if you don't have, so.",
      "agenda": 2,
      "agenda_similiarity": 0.17096690321051572
    },
    {
      "startTime": 396.1,
      "endTime": 398.9,
      "role": "A",
      "text": "We did what? Because time is running, so.",
      "agenda": 2,
      "agenda_similiarity": 0.04825865941952381
    },
    {
      "startTime": 399.4,
      "endTime": 399.76,
      "role": "B",
      "text": "Yeah.",
      "agenda": 2,
      "agenda_similiarity": 0.04825865941952381
    },
    {
      "startTime": 400.3,
      "endTime": 405.48,
      "role": "C",
      "text": "So twenty-by-twenty piece of this should be the second one that we should carry?",
      "agenda": 1,
      "agenda_similiarity": 0.06936215782428407
    },
    {
      "startTime": 405.7,
      "endTime": 408.66,
      "role": "A",
      "text": "Sorry, which is the first one for you?",
      "agenda": 1,
      "agenda_similiarity": 0.06936215782428407
    },
    {
      "startTime": 409.5,
      "endTime": 411.1,
      "role": "C",
      "text": "Er, extra pants and shirts.",
      "agenda": 1,
      "agenda_similiarity": 0.06936215782428407
    },
    {
      "startTime": 410.6,
      "endTime": 413.48,
      "role": "A",
      "text": "Yeah okay I agree- I can agree with that.",
      "agenda": 1,
      "agenda_similiarity": 0.06936215782428407
    },
    {
      "startTime": 414.9,
      "endTime": 418.97,
      "role": "C",
      "text": "And the third one is for the navigations I- I believe.",
      "agenda": 0,
      "agenda_similiarity": 0.09825389191254019
    },
    {
      "startTime": 419.4,
      "endTime": 423.25,
      "role": "D",
      "text": "The third one. But the second one, what did you put?",
      "agenda": 0,
      "agenda_similiarity": 0.09825389191254019
    },
    {
      "startTime": 426.5,
      "endTime": 429.38,
      "role": "C",
      "text": "The second one is for a night tent.",
      "agenda": 0,
      "agenda_similiarity": 0.09825389191254019
    },
    {
      "startTime": 430.2,
      "endTime": 430.88,
      "role": "A",
      "text": "Twenty-by-twenty foot.",
      "agenda": 0,
      "agenda_similiarity": 0.09825389191254019
    },
    {
      "startTime": 431.3,
      "endTime": 435.46,
      "role": "D",
      "text": "Okay. Okay I can agree with that. Nothing to eat, are we sure?",
      "agenda": 0,
      "agenda_similiarity": 0.09825389191254019
    },
    {
      "startTime": 437.1,
      "endTime": 437.84,
      "role": "B",
      "text": "I think.",
      "agenda": 0,
      "agenda_similiarity": 0.09825389191254019
    },
    {
      "startTime": 438.8,
      "endTime": 442.98,
      "role": "C",
      "text": "It's a second priority. We are still in the first priority.",
      "agenda": 0,
      "agenda_similiarity": 0.09825389191254019
    },
    {
      "startTime": 441.5,
      "endTime": 441.88,
      "role": "D",
      "text": "Okay.",
      "agenda": 0,
      "agenda_similiarity": 0.09825389191254019
    },
    {
      "startTime": 442.3,
      "endTime": 449.23,
      "role": "B",
      "text": "Maybe we should not, like, fulfil the first priority but, like, first item of first priority, first item of second priority.",
      "agenda": 0,
      "agenda_similiarity": 0.09825389191254019
    },
    {
      "startTime": 458.0,
      "endTime": 465.36,
      "role": "B",
      "text": "I'm not sure it's, like- first we take the map and the compass and afterwards the food? Or we take food and then...",
      "agenda": 0,
      "agenda_similiarity": 0.09825389191254019
    },
    {
      "startTime": 464.8,
      "endTime": 470.56,
      "role": "A",
      "text": "Before we can pass we have to be sure that we have something to eat I think. No?",
      "agenda": 0,
      "agenda_similiarity": 0.4041106255540055
    },
    {
      "startTime": 467.4,
      "endTime": 467.78,
      "role": "B",
      "text": "Yeah.",
      "agenda": 0,
      "agenda_similiarity": 0.4041106255540055
    },
    {
      "startTime": 469.2,
      "endTime": 472.4,
      "role": "A",
      "text": "I think at minus twenty you need to eat something.",
      "agenda": 0,
      "agenda_similiarity": 0.4041106255540055
    },
    {
      "startTime": 471.2,
      "endTime": 473.0,
      "role": "C",
      "text": "Yeah. Let's go for food.",
      "agenda": 0,
      "agenda_similiarity": 0.4041106255540055
    },
    {
      "startTime": 472.1,
      "endTime": 474.69,
      "role": "D",
      "text": "I can agree to kill animals .",
      "agenda": 0,
      "agenda_similiarity": 0.18150521840389314
    },
    {
      "startTime": 475.9,
      "endTime": 481.98,
      "role": "C",
      "text": "So food. Which kind of food? We go for chocolate bar which is small or the...",
      "agenda": 0,
      "agenda_similiarity": 0.22292468694598727
    },
    {
      "startTime": 480.3,
      "endTime": 484.37,
      "role": "B",
      "text": "Short- can of shortening it's not too- it's a little bigger.",
      "agenda": 0,
      "agenda_similiarity": 0.22292468694598727
    },
    {
      "startTime": 484.2,
      "endTime": 491.55,
      "role": "D",
      "text": "Well a chocolate bar there's not enough for the whole plane, I think. So maybe it's fairly useless for four people.",
      "agenda": 0,
      "agenda_similiarity": 0.22292468694598727
    },
    {
      "startTime": 491.3,
      "endTime": 491.96,
      "role": "B",
      "text": "Yeah. ",
      "agenda": 0,
      "agenda_similiarity": 0.22292468694598727
    },
    {
      "startTime": 492.1,
      "endTime": 497.54,
      "role": "C",
      "text": "So we should go for the family-sized chocolate bar which is sugar . Let's go for this.",
      "agenda": 0,
      "agenda_similiarity": 0.22292468694598727
    },
    {
      "startTime": 499.1,
      "endTime": 499.48,
      "role": "B",
      "text": "Yeah.",
      "agenda": 0,
      "agenda_similiarity": 0.22292468694598727
    },
    {
      "startTime": 502.3,
      "endTime": 503.32,
      "role": "C",
      "text": "And then compass-",
      "agenda": 2,
      "agenda_similiarity": 0.03682890452334573
    },
    {
      "startTime": 506.8,
      "endTime": 507.44,
      "role": "B",
      "text": "Aerial map.",
      "agenda": 2,
      "agenda_similiarity": 0.03682890452334573
    },
    {
      "startTime": 507.4,
      "endTime": 508.88,
      "role": "C",
      "text": "Or the map? So...",
      "agenda": 2,
      "agenda_similiarity": 0.03682890452334573
    },
    {
      "startTime": 510.2,
      "endTime": 512.51,
      "role": "A",
      "text": "Okay. I think I'd go for the",
      "agenda": 2,
      "agenda_similiarity": 0.03682890452334573
    },
    {
      "startTime": 511.5,
      "endTime": 512.78,
      "role": "D",
      "text": "Which for the map",
      "agenda": 2,
      "agenda_similiarity": 0.07845682462465425
    },
    {
      "startTime": 512.7,
      "endTime": 514.62,
      "role": "B",
      "text": "Well I think we need both.",
      "agenda": 2,
      "agenda_similiarity": 0.07845682462465425
    },
    {
      "startTime": 515.3,
      "endTime": 520.48,
      "role": "A",
      "text": "Maybe the aerial map is more important. You can still understand where is the-",
      "agenda": 2,
      "agenda_similiarity": 0.14100756412456025
    },
    {
      "startTime": 520.9,
      "endTime": 521.26,
      "role": "D",
      "text": "Yeah.",
      "agenda": 2,
      "agenda_similiarity": 0.14100756412456025
    },
    {
      "startTime": 521.2,
      "endTime": 521.92,
      "role": "C",
      "text": "The sun.",
      "agenda": 2,
      "agenda_similiarity": 0.14100756412456025
    },
    {
      "startTime": 522.1,
      "endTime": 525.3,
      "role": "D",
      "text": "You can see, like, then put it in the map.",
      "agenda": 2,
      "agenda_similiarity": 0.14100756412456025
    },
    {
      "startTime": 524.5,
      "endTime": 525.82,
      "role": "C",
      "text": "The light. Continue ",
      "agenda": 2,
      "agenda_similiarity": 0.14100756412456025
    },
    {
      "startTime": 526.7,
      "endTime": 533.5,
      "role": "D",
      "text": "Or if you see a bit light you can understand where is the sun. You can guess where is North.",
      "agenda": 2,
      "agenda_similiarity": 0.14100756412456025
    },
    {
      "startTime": 531.5,
      "endTime": 533.66,
      "role": "C",
      "text": "The map is more important then?",
      "agenda": 2,
      "agenda_similiarity": 0.2420016327105271
    },
    {
      "startTime": 532.4,
      "endTime": 532.74,
      "role": "D",
      "text": "Yeah.",
      "agenda": 2,
      "agenda_similiarity": 0.2420016327105271
    },
    {
      "startTime": 533.4,
      "endTime": 537.82,
      "role": "B",
      "text": "Yes. I think it's more important, but I would take the compass also.",
      "agenda": 2,
      "agenda_similiarity": 0.2420016327105271
    },
    {
      "startTime": 538.6,
      "endTime": 546.65,
      "role": "C",
      "text": "So compass should go into the next, depending on the food and the compass. Now we can choose between whisky or compass. ",
      "agenda": 2,
      "agenda_similiarity": 0.2420016327105271
    },
    {
      "startTime": 550.2,
      "endTime": 558.56,
      "role": "B",
      "text": "Come on. Whisky, I mean, it wouldn't keep- you may feel warmer drinking alcohol, but it, in fact, it just dilates your....",
      "agenda": 2,
      "agenda_similiarity": 0.2420016327105271
    },
    {
      "startTime": 557.7,
      "endTime": 558.38,
      "role": "A",
      "text": "Mm hmm.",
      "agenda": 2,
      "agenda_similiarity": 0.2420016327105271
    },
    {
      "startTime": 558.4,
      "endTime": 563.5,
      "role": "D",
      "text": "Maybe you can- you can use- because we are not sure we can light wood.",
      "agenda": 2,
      "agenda_similiarity": 0.2420016327105271
    },
    {
      "startTime": 562.2,
      "endTime": 565.08,
      "role": "B",
      "text": "We have nothing to light it with. ",
      "agenda": 2,
      "agenda_similiarity": 0.2420016327105271
    },
    {
      "startTime": 564.9,
      "endTime": 569.45,
      "role": "D",
      "text": "No you can use the whisky and the empty cigarette lighter to- to...",
      "agenda": 2,
      "agenda_similiarity": 0.2420016327105271
    },
    {
      "startTime": 568.2,
      "endTime": 573.32,
      "role": "B",
      "text": "But then you also need to take the newspapers and the hand axe, so it's like...",
      "agenda": 2,
      "agenda_similiarity": 0.2420016327105271
    },
    {
      "startTime": 574.6,
      "endTime": 577.26,
      "role": "A",
      "text": "Yeah. Actually- actually we were going to...",
      "agenda": 2,
      "agenda_similiarity": 0.2420016327105271
    },
    {
      "startTime": 577.6,
      "endTime": 584.6,
      "role": "D",
      "text": "They said there is plenty of dead wood. So you just need a spark and then it will burn normally.",
      "agenda": 2,
      "agenda_similiarity": 0.2420016327105271
    },
    {
      "startTime": 583.1,
      "endTime": 583.74,
      "role": "A",
      "text": "Mmm. Yeah.",
      "agenda": 2,
      "agenda_similiarity": 0.2420016327105271
    },
    {
      "startTime": 585.8,
      "endTime": 589.54,
      "role": "D",
      "text": "Being said it's dead wood. Not- not wood plenty of .",
      "agenda": 2,
      "agenda_similiarity": 0.2420016327105271
    },
    {
      "startTime": 590.6,
      "endTime": 596.89,
      "role": "B",
      "text": "You need some kind of paper. I mean, you cannot put a lighter and dead wood and...",
      "agenda": 2,
      "agenda_similiarity": 0.2420016327105271
    },
    {
      "startTime": 596.2,
      "endTime": 597.95,
      "role": "C",
      "text": "The cold is minus ten.",
      "agenda": 1,
      "agenda_similiarity": 0.519933834612258
    },
    {
      "startTime": 597.3,
      "endTime": 600.9,
      "role": "A",
      "text": "You can- can- you can take newspapers if you want.",
      "agenda": 2,
      "agenda_similiarity": 0.2420016327105271
    },
    {
      "startTime": 599.3,
      "endTime": 599.66,
      "role": "C",
      "text": "Yeah.",
      "agenda": 2,
      "agenda_similiarity": 0.2420016327105271
    },
    {
      "startTime": 600.6,
      "endTime": 602.04,
      "role": "A",
      "text": "But whisky is not-",
      "agenda": 2,
      "agenda_similiarity": 0.2420016327105271
    },
    {
      "startTime": 601.1,
      "endTime": 602.54,
      "role": "B",
      "text": "No I don't see.",
      "agenda": 2,
      "agenda_similiarity": 0.2420016327105271
    },
    {
      "startTime": 602.4,
      "endTime": 603.36,
      "role": "A",
      "text": "Not very useful.",
      "agenda": 2,
      "agenda_similiarity": 0.2420016327105271
    },
    {
      "startTime": 603.3,
      "endTime": 604.38,
      "role": "B",
      "text": "But no it's-",
      "agenda": "-",
      "agenda_similiarity": "-"
    },
    {
      "startTime": 604.6,
      "endTime": 605.68,
      "role": "C",
      "text": "It doesn't burn?",
      "agenda": "-",
      "agenda_similiarity": "-"
    },
    {
      "startTime": 604.3,
      "endTime": 607.93,
      "role": "B",
      "text": "Well it's a thing to get the spark on- the spark.",
      "agenda": 3,
      "agenda_similiarity": 0.1793947214201759
    },
    {
      "startTime": 607.4,
      "endTime": 608.16,
      "role": "D",
      "text": "The spark?",
      "agenda": 3,
      "agenda_similiarity": 0.1793947214201759
    },
    {
      "startTime": 608.7,
      "endTime": 609.42,
      "role": "A",
      "text": "Cigarette lighter.",
      "agenda": 3,
      "agenda_similiarity": 0.1793947214201759
    },
    {
      "startTime": 609.7,
      "endTime": 610.46,
      "role": "B",
      "text": "Without flint?",
      "agenda": 3,
      "agenda_similiarity": 0.1793947214201759
    },
    {
      "startTime": 611.9,
      "endTime": 615.23,
      "role": "C",
      "text": "There is no flint so how do you ?",
      "agenda": 3,
      "agenda_similiarity": 0.1793947214201759
    },
    {
      "startTime": 612.2,
      "endTime": 615.6,
      "role": "A",
      "text": "You can have a spark- or a stone for spark.",
      "agenda": 3,
      "agenda_similiarity": 0.1793947214201759
    },
    {
      "startTime": 615.1,
      "endTime": 621.5,
      "role": "D",
      "text": "Yeah, yeah. That's the point. You use the stone of the- of the cigarette lighter and the whisky as liquid.",
      "agenda": 3,
      "agenda_similiarity": 0.1793947214201759
    },
    {
      "startTime": 621.1,
      "endTime": 623.08,
      "role": "A",
      "text": "I'm pretty sure whisky is .",
      "agenda": 3,
      "agenda_similiarity": 0.1793947214201759
    },
    {
      "startTime": 622.4,
      "endTime": 625.92,
      "role": "D",
      "text": "At minus twenty you can light the wood with only the-",
      "agenda": 3,
      "agenda_similiarity": 0.1793947214201759
    },
    {
      "startTime": 626.6,
      "endTime": 626.97,
      "role": "A",
      "text": "No.",
      "agenda": "-",
      "agenda_similiarity": "-"
    },
    {
      "startTime": 626.6,
      "endTime": 626.98,
      "role": "D",
      "text": "Newspaper.",
      "agenda": 3,
      "agenda_similiarity": 0.1793947214201759
    },
    {
      "startTime": 628.4,
      "endTime": 632.96,
      "role": "A",
      "text": "I- I'm not- I'm not sure, but I don't know if it.",
      "agenda": 3,
      "agenda_similiarity": 0.1793947214201759
    },
    {
      "startTime": 630.7,
      "endTime": 634.22,
      "role": "C",
      "text": "Newspaper standing- well newspaper is with us, it's- it's- it's dry.",
      "agenda": 3,
      "agenda_similiarity": 0.1793947214201759
    },
    {
      "startTime": 635.9,
      "endTime": 639.23,
      "role": "A",
      "text": "Yeah. And newspaper is smaller than a whisky bottle.",
      "agenda": 3,
      "agenda_similiarity": 0.1793947214201759
    },
    {
      "startTime": 639.3,
      "endTime": 643.38,
      "role": "D",
      "text": "But with only the stone of the lighter you can light newspaper?",
      "agenda": 3,
      "agenda_similiarity": 0.1793947214201759
    },
    {
      "startTime": 643.8,
      "endTime": 644.12,
      "role": "A",
      "text": "Certainly.",
      "agenda": 3,
      "agenda_similiarity": 0.1793947214201759
    },
    {
      "startTime": 646.1,
      "endTime": 646.43,
      "role": "A",
      "text": "Okay.",
      "agenda": "-",
      "agenda_similiarity": "-"
    },
    {
      "startTime": 649.9,
      "endTime": 652.56,
      "role": "C",
      "text": "Okay. So lighter without newspaper is meaningless?",
      "agenda": 3,
      "agenda_similiarity": 0.11111144957942927
    },
    {
      "startTime": 656.5,
      "endTime": 657.58,
      "role": "A",
      "text": "No. Then you-",
      "agenda": "-",
      "agenda_similiarity": "-"
    },
    {
      "startTime": 657.4,
      "endTime": 658.36,
      "role": "B",
      "text": "Yeah. I mean...",
      "agenda": "-",
      "agenda_similiarity": "-"
    },
    {
      "startTime": 658.2,
      "endTime": 661.72,
      "role": "A",
      "text": "Lighter and newspaper is the next- are the next. Yeah, so.",
      "agenda": 3,
      "agenda_similiarity": 0.08495006162857958
    },
    {
      "startTime": 660.7,
      "endTime": 663.74,
      "role": "C",
      "text": "Are we allowed to rank both together? Or..",
      "agenda": "-",
      "agenda_similiarity": 0.05538151388160534
    },
    {
      "startTime": 663.6,
      "endTime": 665.04,
      "role": "D",
      "text": "What about the compass?",
      "agenda": 2,
      "agenda_similiarity": 0.24128845202490912
    },
    {
      "startTime": 665.3,
      "endTime": 674.18,
      "role": "B",
      "text": "I think the compass is much more important. We will be moving and in a snowy area it's- it's really easy to get lost-",
      "agenda": 2,
      "agenda_similiarity": 0.24128845202490912
    },
    {
      "startTime": 671.5,
      "endTime": 671.88,
      "role": "A",
      "text": "True-",
      "agenda": 2,
      "agenda_similiarity": 0.24128845202490912
    },
    {
      "startTime": 671.4,
      "endTime": 672.45,
      "role": "B",
      "text": "If there's snow.",
      "agenda": 2,
      "agenda_similiarity": 0.24128845202490912
    },
    {
      "startTime": 673.2,
      "endTime": 683.08,
      "role": "A",
      "text": "that if it's night- if it's night and it's cloudy you don't really know where is anything. You don't see anything. So maybe compass is still...",
      "agenda": 2,
      "agenda_similiarity": 0.24128845202490912
    },
    {
      "startTime": 681.8,
      "endTime": 683.6,
      "role": "B",
      "text": "And if there's er you-",
      "agenda": "-",
      "agenda_similiarity": "-"
    },
    {
      "startTime": 684.5,
      "endTime": 684.85,
      "role": "D",
      "text": "Smoke.",
      "agenda": "-",
      "agenda_similiarity": "-"
    },
    {
      "startTime": 685.6,
      "endTime": 685.92,
      "role": "B",
      "text": "Smoke.",
      "agenda": "-",
      "agenda_similiarity": "-"
    },
    {
      "startTime": 686.2,
      "endTime": 686.94,
      "role": "D",
      "text": "Er, fog.",
      "agenda": "-",
      "agenda_similiarity": "-"
    },
    {
      "startTime": 686.7,
      "endTime": 689.74,
      "role": "B",
      "text": "Fog? You- you wouldn't know where you are.",
      "agenda": "-",
      "agenda_similiarity": "-"
    },
    {
      "startTime": 689.1,
      "endTime": 691.2,
      "role": "A",
      "text": "Hmm. Okay. So five for compass?",
      "agenda": 2,
      "agenda_similiarity": 0.08994148006591403
    },
    {
      "startTime": 692.1,
      "endTime": 693.58,
      "role": "D",
      "text": "Yeah. Then cigarette lighter?",
      "agenda": 2,
      "agenda_similiarity": 0.08994148006591403
    },
    {
      "startTime": 698.7,
      "endTime": 699.46,
      "role": "A",
      "text": "Oh yeah.",
      "agenda": 2,
      "agenda_similiarity": 0.08994148006591403
    },
    {
      "startTime": 700.2,
      "endTime": 708.02,
      "role": "C",
      "text": "How would- how would- thinking like this. If the crash happens, sooner or later they will know and they will search for us.",
      "agenda": 1,
      "agenda_similiarity": 0.12523580014161723
    },
    {
      "startTime": 706.2,
      "endTime": 710.62,
      "role": "B",
      "text": "Well no if there's a snow storm they could spend two days without.",
      "agenda": 1,
      "agenda_similiarity": 0.12523580014161723
    },
    {
      "startTime": 711.5,
      "endTime": 712.46,
      "role": "C",
      "text": "Okay. No idea.",
      "agenda": 1,
      "agenda_similiarity": 0.12523580014161723
    },
    {
      "startTime": 718.3,
      "endTime": 722.46,
      "role": "B",
      "text": "I mean think just as the plane can get covered with snow and...",
      "agenda": 1,
      "agenda_similiarity": 0.12523580014161723
    },
    {
      "startTime": 724.4,
      "endTime": 725.88,
      "role": "D",
      "text": "The plane has sunk.",
      "agenda": 1,
      "agenda_similiarity": 0.12523580014161723
    },
    {
      "startTime": 725.6,
      "endTime": 731.87,
      "role": "A",
      "text": "What about the . I was just thinking about the food. Are we surviving with just the chocolate bar?",
      "agenda": 2,
      "agenda_similiarity": 0.1915118407572021
    },
    {
      "startTime": 734.4,
      "endTime": 738.0,
      "role": "B",
      "text": "I think we should just take the can of shortening.",
      "agenda": 2,
      "agenda_similiarity": 0.1915118407572021
    },
    {
      "startTime": 735.7,
      "endTime": 742.35,
      "role": "C",
      "text": "Now we should make the fire. We need fire now. Because we have to be a certain amount of...",
      "agenda": 2,
      "agenda_similiarity": 0.1915118407572021
    },
    {
      "startTime": 743.9,
      "endTime": 745.34,
      "role": "B",
      "text": "So cigarette and newspaper.",
      "agenda": 2,
      "agenda_similiarity": 0.1915118407572021
    },
    {
      "startTime": 747.2,
      "endTime": 749.58,
      "role": "C",
      "text": "Okay. Let's go cigarette lighter is five?",
      "agenda": 2,
      "agenda_similiarity": 0.1915118407572021
    },
    {
      "startTime": 750.3,
      "endTime": 750.63,
      "role": "A",
      "text": "Six.",
      "agenda": 2,
      "agenda_similiarity": 0.1915118407572021
    },
    {
      "startTime": 751.2,
      "endTime": 751.53,
      "role": "B",
      "text": "Six.",
      "agenda": 2,
      "agenda_similiarity": 0.1915118407572021
    },
    {
      "startTime": 751.8,
      "endTime": 752.91,
      "role": "C",
      "text": "What was five?",
      "agenda": 2,
      "agenda_similiarity": 0.1915118407572021
    },
    {
      "startTime": 752.1,
      "endTime": 752.43,
      "role": "B",
      "text": "Compass.",
      "agenda": 2,
      "agenda_similiarity": 0.1915118407572021
    },
    {
      "startTime": 752.7,
      "endTime": 753.36,
      "role": "A",
      "text": "Er, compass.",
      "agenda": 2,
      "agenda_similiarity": 0.1915118407572021
    },
    {
      "startTime": 753.3,
      "endTime": 753.63,
      "role": "C",
      "text": "Compass.",
      "agenda": 2,
      "agenda_similiarity": 0.1915118407572021
    },
    {
      "startTime": 755.6,
      "endTime": 756.24,
      "role": "D",
      "text": "And then",
      "agenda": 3,
      "agenda_similiarity": 0.08495006162857958
    },
    {
      "startTime": 756.4,
      "endTime": 758.2,
      "role": "C",
      "text": "Six and then newspaper seven?",
      "agenda": 3,
      "agenda_similiarity": 0.08495006162857958
    },
    {
      "startTime": 758.1,
      "endTime": 758.43,
      "role": "B",
      "text": "Yeah.",
      "agenda": 3,
      "agenda_similiarity": 0.08495006162857958
    },
    {
      "startTime": 759.4,
      "endTime": 760.14,
      "role": "D",
      "text": "Except .",
      "agenda": 3,
      "agenda_similiarity": 0.08495006162857958
    },
    {
      "startTime": 760.9,
      "endTime": 766.15,
      "role": "C",
      "text": "Okay so once we have this we need a hand axe to cut the wood?",
      "agenda": 2,
      "agenda_similiarity": 0.2253788740808909
    },
    {
      "startTime": 764.2,
      "endTime": 764.55,
      "role": "B",
      "text": "Er.",
      "agenda": 2,
      "agenda_similiarity": 0.2253788740808909
    },
    {
      "startTime": 766.7,
      "endTime": 771.18,
      "role": "C",
      "text": "We can just burn it otherwise. A hand axe is not- but we need...",
      "agenda": 2,
      "agenda_similiarity": 0.2253788740808909
    },
    {
      "startTime": 772.1,
      "endTime": 781.22,
      "role": "D",
      "text": "What's- what's the point of making it more complicated to use a newspaper. Because probably it's possible to do it, but it's more difficult.",
      "agenda": 3,
      "agenda_similiarity": 0.15631172973770938
    },
    {
      "startTime": 781.4,
      "endTime": 792.5,
      "role": "A",
      "text": "Yes but it's more than a bottle of whisky. The bottle of whisky is heavy. It's big. And if you have to walk, you will not be happy with that.",
      "agenda": 3,
      "agenda_similiarity": 0.15631172973770938
    },
    {
      "startTime": 789.3,
      "endTime": 792.93,
      "role": "D",
      "text": "It's not big. It's one litre. I mean, it's one kilo.",
      "agenda": 3,
      "agenda_similiarity": 0.15631172973770938
    },
    {
      "startTime": 792.5,
      "endTime": 794.4,
      "role": "C",
      "text": "I can carry it. ",
      "agenda": 3,
      "agenda_similiarity": 0.15631172973770938
    },
    {
      "startTime": 794.3,
      "endTime": 802.7,
      "role": "A",
      "text": "I offer my services. Well at least I don't spend what thirty minutes, I don't know, to try to- maybe it's windy and it...",
      "agenda": 3,
      "agenda_similiarity": 0.13840224468002393
    },
    {
      "startTime": 801.1,
      "endTime": 802.8,
      "role": "B",
      "text": "I- I think it's like...",
      "agenda": "-",
      "agenda_similiarity": 0.03682890452334573
    },
    {
      "startTime": 802.6,
      "endTime": 806.23,
      "role": "C",
      "text": "Does it burn first of all? Whisky. Does- does it burn?",
      "agenda": 1,
      "agenda_similiarity": 0.06204179237842269
    },
    {
      "startTime": 807.2,
      "endTime": 811.04,
      "role": "D",
      "text": "Whisky is maybe it can be sixty degrees, fifty. So it burns.",
      "agenda": 1,
      "agenda_similiarity": 0.06204179237842269
    },
    {
      "startTime": 812.3,
      "endTime": 813.41,
      "role": "B",
      "text": "Sure it burns.",
      "agenda": 1,
      "agenda_similiarity": 0.06204179237842269
    },
    {
      "startTime": 813.7,
      "endTime": 814.69,
      "role": "D",
      "text": "Like- like oil.",
      "agenda": 1,
      "agenda_similiarity": 0.06204179237842269
    },
    {
      "startTime": 816.6,
      "endTime": 816.94,
      "role": "C",
      "text": "Okay.",
      "agenda": 1,
      "agenda_similiarity": 0.06204179237842269
    },
    {
      "startTime": 817.9,
      "endTime": 825.16,
      "role": "B",
      "text": "The thing is that I am not sure it will work with a cigarette lighter. I've never tried to put real alcohol.",
      "agenda": 3,
      "agenda_similiarity": 0.12509514451842793
    },
    {
      "startTime": 824.3,
      "endTime": 828.04,
      "role": "D",
      "text": "I've never tried it. I- I'm trying only to think, erm.",
      "agenda": 3,
      "agenda_similiarity": 0.12509514451842793
    },
    {
      "startTime": 827.9,
      "endTime": 830.78,
      "role": "C",
      "text": "So maybe we should change the newspaper to...",
      "agenda": 3,
      "agenda_similiarity": 0.12509514451842793
    },
    {
      "startTime": 831.6,
      "endTime": 832.32,
      "role": "B",
      "text": "Should we-",
      "agenda": "-",
      "agenda_similiarity": 0.1490609624888986
    },
    {
      "startTime": 833.1,
      "endTime": 839.02,
      "role": "B",
      "text": "Should we maybe, like, start by the ending now so we'll have less things to decide.",
      "agenda": "-",
      "agenda_similiarity": 0.1490609624888986
    },
    {
      "startTime": 837.5,
      "endTime": 837.86,
      "role": "A",
      "text": "Okay.",
      "agenda": "-",
      "agenda_similiarity": 0.1490609624888986
    },
    {
      "startTime": 838.2,
      "endTime": 842.82,
      "role": "B",
      "text": "I don't see the point of the ball of steel wool. It's heavy and...",
      "agenda": 3,
      "agenda_similiarity": 0.1749720301006754
    },
    {
      "startTime": 844.8,
      "endTime": 846.72,
      "role": "D",
      "text": "It's not- it's not really heavy.",
      "agenda": 3,
      "agenda_similiarity": 0.1749720301006754
    },
    {
      "startTime": 846.5,
      "endTime": 846.83,
      "role": "B",
      "text": "No?",
      "agenda": 3,
      "agenda_similiarity": 0.1749720301006754
    },
    {
      "startTime": 847.1,
      "endTime": 847.78,
      "role": "D",
      "text": "But useful-",
      "agenda": 3,
      "agenda_similiarity": 0.1749720301006754
    },
    {
      "startTime": 848.1,
      "endTime": 848.78,
      "role": "B",
      "text": "It's steel.",
      "agenda": 3,
      "agenda_similiarity": 0.1749720301006754
    },
    {
      "startTime": 849.7,
      "endTime": 852.08,
      "role": "D",
      "text": "I'm not very sure. Steel, but it's-",
      "agenda": 3,
      "agenda_similiarity": 0.1749720301006754
    },
    {
      "startTime": 851.6,
      "endTime": 855.8,
      "role": "B",
      "text": "The only use I could think of was, like, trying to fish.",
      "agenda": 3,
      "agenda_similiarity": 0.1749720301006754
    },
    {
      "startTime": 854.4,
      "endTime": 856.96,
      "role": "D",
      "text": "Yes but it's a very, very, very thin-",
      "agenda": 3,
      "agenda_similiarity": 0.1749720301006754
    },
    {
      "startTime": 857.5,
      "endTime": 857.87,
      "role": "B",
      "text": "Yes.",
      "agenda": 3,
      "agenda_similiarity": 0.1749720301006754
    },
    {
      "startTime": 857.9,
      "endTime": 863.15,
      "role": "D",
      "text": "Thread of steel wool so it's not very heavy. But useful, I'm not very sure.",
      "agenda": 3,
      "agenda_similiarity": 0.17462206563302785
    },
    {
      "startTime": 864.3,
      "endTime": 870.24,
      "role": "B",
      "text": "No I think it's less useful. So we'll put it as the last one? We have any other...",
      "agenda": 3,
      "agenda_similiarity": 0.17462206563302785
    },
    {
      "startTime": 876.1,
      "endTime": 878.69,
      "role": "C",
      "text": "I don't see any use of it.",
      "agenda": 3,
      "agenda_similiarity": 0.17462206563302785
    },
    {
      "startTime": 877.5,
      "endTime": 878.24,
      "role": "D",
      "text": "No. Okay.",
      "agenda": 3,
      "agenda_similiarity": 0.17462206563302785
    },
    {
      "startTime": 878.1,
      "endTime": 878.42,
      "role": "B",
      "text": "Okay.",
      "agenda": 3,
      "agenda_similiarity": 0.17462206563302785
    },
    {
      "startTime": 879.3,
      "endTime": 880.7,
      "role": "A",
      "text": "So it's twelve. Right?",
      "agenda": 3,
      "agenda_similiarity": 0.12284198721316282
    },
    {
      "startTime": 880.1,
      "endTime": 880.46,
      "role": "B",
      "text": "Yeah.",
      "agenda": 3,
      "agenda_similiarity": 0.12284198721316282
    },
    {
      "startTime": 881.2,
      "endTime": 882.64,
      "role": "C",
      "text": "Yes it is useful.",
      "agenda": 3,
      "agenda_similiarity": 0.12284198721316282
    },
    {
      "startTime": 884.4,
      "endTime": 884.78,
      "role": "D",
      "text": "Okay.",
      "agenda": 3,
      "agenda_similiarity": 0.12284198721316282
    },
    {
      "startTime": 884.8,
      "endTime": 885.17,
      "role": "B",
      "text": "Okay.",
      "agenda": 3,
      "agenda_similiarity": 0.12284198721316282
    },
    {
      "startTime": 885.2,
      "endTime": 885.55,
      "role": "A",
      "text": "Quickly.",
      "agenda": 3,
      "agenda_similiarity": 0.12284198721316282
    },
    {
      "startTime": 885.5,
      "endTime": 894.86,
      "role": "C",
      "text": "Okay but then, er, look. If you are stuck in the snow while walking, we don't have any way to get out. Maybe this is useful.",
      "agenda": 3,
      "agenda_similiarity": 0.12284198721316282
    },
    {
      "startTime": 894.6,
      "endTime": 896.3,
      "role": "A",
      "text": "You will cut your hand.",
      "agenda": 3,
      "agenda_similiarity": 0.12284198721316282
    },
    {
      "startTime": 895.4,
      "endTime": 895.77,
      "role": "C",
      "text": "Huh?",
      "agenda": 3,
      "agenda_similiarity": 0.12284198721316282
    },
    {
      "startTime": 896.3,
      "endTime": 898.0,
      "role": "A",
      "text": "You will cut your hands.",
      "agenda": 3,
      "agenda_similiarity": 0.12284198721316282
    },
    {
      "startTime": 897.2,
      "endTime": 901.36,
      "role": "C",
      "text": "On this kind of thing. Okay so let's go for twelve on this.",
      "agenda": 3,
      "agenda_similiarity": 0.12284198721316282
    },
    {
      "startTime": 900.2,
      "endTime": 900.94,
      "role": "B",
      "text": "So then...",
      "agenda": 1,
      "agenda_similiarity": 0.14253433447253117
    },
    {
      "startTime": 902.8,
      "endTime": 905.02,
      "role": "C",
      "text": "We have shortening, whisky. Whisky was?",
      "agenda": 1,
      "agenda_similiarity": 0.14253433447253117
    },
    {
      "startTime": 906.2,
      "endTime": 909.16,
      "role": "D",
      "text": "Er, whisky we were not pretty sure. ",
      "agenda": 1,
      "agenda_similiarity": 0.14253433447253117
    },
    {
      "startTime": 911.5,
      "endTime": 919.5,
      "role": "B",
      "text": "Okay. So less useful the pistol. The only use I can make of it is to make noise to let someone know where we are.",
      "agenda": 2,
      "agenda_similiarity": 0.2814059788616026
    },
    {
      "startTime": 920.1,
      "endTime": 920.86,
      "role": "C",
      "text": "That's eleven.",
      "agenda": 2,
      "agenda_similiarity": 0.2814059788616026
    },
    {
      "startTime": 921.4,
      "endTime": 921.76,
      "role": "A",
      "text": "Eleven.",
      "agenda": 2,
      "agenda_similiarity": 0.2814059788616026
    },
    {
      "startTime": 922.7,
      "endTime": 923.03,
      "role": "D",
      "text": "Okay.",
      "agenda": 2,
      "agenda_similiarity": 0.2814059788616026
    },
    {
      "startTime": 923.9,
      "endTime": 925.5,
      "role": "A",
      "text": "Er, one can of shortening.",
      "agenda": 0,
      "agenda_similiarity": "-"
    },
    {
      "startTime": 925.2,
      "endTime": 927.05,
      "role": "B",
      "text": "That's- we can always take.",
      "agenda": 0,
      "agenda_similiarity": "-"
    },
    {
      "startTime": 926.6,
      "endTime": 927.34,
      "role": "A",
      "text": "Ten. Okay.",
      "agenda": 0,
      "agenda_similiarity": "-"
    },
    {
      "startTime": 928.2,
      "endTime": 928.84,
      "role": "C",
      "text": "Ten. Okay.",
      "agenda": 0,
      "agenda_similiarity": "-"
    },
    {
      "startTime": 928.9,
      "endTime": 929.23,
      "role": "A",
      "text": "Then",
      "agenda": "-",
      "agenda_similiarity": "-"
    },
    {
      "startTime": 930.7,
      "endTime": 931.42,
      "role": "C",
      "text": "Next whisky.",
      "agenda": "0",
      "agenda_similiarity": "-"
    },
    {
      "startTime": 932.5,
      "endTime": 933.52,
      "role": "A",
      "text": "Er, hand axe.",
      "agenda": 2,
      "agenda_similiarity": 0.11363051352197968
    },
    {
      "startTime": 934.7,
      "endTime": 935.03,
      "role": "C",
      "text": "Nine.",
      "agenda": 2,
      "agenda_similiarity": 0.11363051352197968
    },
    {
      "startTime": 935.2,
      "endTime": 935.58,
      "role": "A",
      "text": "Nine.",
      "agenda": 2,
      "agenda_similiarity": 0.11363051352197968
    },
    {
      "startTime": 936.7,
      "endTime": 937.4,
      "role": "D",
      "text": "Whisky eight.",
      "agenda": 0,
      "agenda_similiarity": "-"
    },
    {
      "startTime": 938.2,
      "endTime": 938.52,
      "role": "B",
      "text": "Okay.",
      "agenda": 0,
      "agenda_similiarity": "-"
    },
    {
      "startTime": 938.7,
      "endTime": 942.54,
      "role": "D",
      "text": "So whisky and papers together so we can use together. You can...",
      "agenda": 0,
      "agenda_similiarity": 0.19041090551677953
    },
    {
      "startTime": 950.6,
      "endTime": 952.0,
      "role": "C",
      "text": "So I give you...",
      "agenda": "-",
      "agenda_similiarity": "-"
    },
    {
      "startTime": 962.3,
      "endTime": 962.68,
      "role": "B",
      "text": "Okay.",
      "agenda": 0,
      "agenda_similiarity": 0.19041090551677953
    },
    {
      "startTime": 985.7,
      "endTime": 989.99,
      "role": "D",
      "text": "I think it's the- at least one other person we have to .",
      "agenda": "-",
      "agenda_similiarity": 0.07385113645077089
    },
    {
      "startTime": 989.8,
      "endTime": 993.96,
      "role": "B",
      "text": "Yeah but I asked them and they told me I could leave early.",
      "agenda": "-",
      "agenda_similiarity": 0.07385113645077089
    },
    {
      "startTime": 991.1,
      "endTime": 991.43,
      "role": "D",
      "text": "Okay.",
      "agenda": "-",
      "agenda_similiarity": 0.07385113645077089
    }
  ]
  var Rdata = [
    {
        "id": 0,
        "startTime-endTime": "0.1-0.84",
        "text": "To agree.",
        "speaker": "A",
        "reply_to_id": "-"
    },
    {
        "id": 1,
        "startTime-endTime": "0.7-1.98",
        "text": "Agree on the items.",
        "speaker": "B",
        "reply_to_id": "0"
    },
    {
        "id": 2,
        "startTime-endTime": "2.4-3.54",
        "text": "In ten minutes.",
        "speaker": "C",
        "reply_to_id": "1"
    },
    {
        "id": 3,
        "startTime-endTime": "3.2-3.58",
        "text": "Yeah.",
        "speaker": "B",
        "reply_to_id": "2"
    },
    {
        "id": 4,
        "startTime-endTime": "3.6-3.92",
        "text": "Okay.",
        "speaker": "D",
        "reply_to_id": "-"
    },
    {
        "id": 5,
        "startTime-endTime": "5.8-9.04",
        "text": "So which is your- the most important for you?",
        "speaker": "A",
        "reply_to_id": "-"
    },
    {
        "id": 6,
        "startTime-endTime": "9.5-15.26",
        "text": "For me was the piece of heavy duty canvas. I was thinking about making a kind of tent.",
        "speaker": "B",
        "reply_to_id": "5"
    },
    {
        "id": 7,
        "startTime-endTime": "17.7-18.34",
        "text": "Mm hmm.",
        "speaker": "A",
        "reply_to_id": "6"
    },
    {
        "id": 8,
        "startTime-endTime": "18.6-20.7",
        "text": "Against the cold. I don't know.",
        "speaker": "B",
        "reply_to_id": "7"
    },
    {
        "id": 9,
        "startTime-endTime": "22.2-25.53",
        "text": "This weighs equally with the extra shirts and pants.",
        "speaker": "C",
        "reply_to_id": "8"
    },
    {
        "id": 10,
        "startTime-endTime": "28.4-29.39",
        "text": "I think .",
        "speaker": "D",
        "reply_to_id": "9"
    },
    {
        "id": 11,
        "startTime-endTime": "28.9-38.89",
        "text": "Er, I don't know if they're equal. Like, I mean, duty canvas can protect you against wind or rain. Extra shirts and pants will get wet, like.",
        "speaker": "B",
        "reply_to_id": "9"
    },
    {
        "id": 12,
        "startTime-endTime": "42.7-44.68",
        "text": "It's- it's too cold to rain.",
        "speaker": "A",
        "reply_to_id": "11"
    },
    {
        "id": 13,
        "startTime-endTime": "44.7-45.06",
        "text": "Yeah.",
        "speaker": "B",
        "reply_to_id": "12"
    },
    {
        "id": 14,
        "startTime-endTime": "45.2-51.28",
        "text": "It's minus ten. So in- in my opinion, the time is the most important thing here.",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 15,
        "startTime-endTime": "49.8-50.5",
        "text": "Well I...",
        "speaker": "B",
        "reply_to_id": "14"
    },
    {
        "id": 16,
        "startTime-endTime": "50.1-61.12",
        "text": "So minus ten degrees in the morning meaning we know we can easily survive another two hours. In two hours from seventy kilometres habituation people can easily come, so.",
        "speaker": "C",
        "reply_to_id": "14"
    },
    {
        "id": 17,
        "startTime-endTime": "59.3-60.9",
        "text": "Just a consideration, er .",
        "speaker": "A",
        "reply_to_id": "16"
    },
    {
        "id": 18,
        "startTime-endTime": "60.5-61.16",
        "text": "I would...",
        "speaker": "B",
        "reply_to_id": "-"
    },
    {
        "id": 19,
        "startTime-endTime": "61.8-62.79",
        "text": "So making tent.",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 20,
        "startTime-endTime": "62.6-69.4",
        "text": "No. I think it's more like we should walk or try to move to the direction where people is coming.",
        "speaker": "B",
        "reply_to_id": "19"
    },
    {
        "id": 21,
        "startTime-endTime": "68.7-80.95",
        "text": "But in my opinion the most important thing is the thing that allows you to survive in the next five minutes at least to survive in the next- because minus ten degrees you can die.",
        "speaker": "D",
        "reply_to_id": "-"
    },
    {
        "id": 22,
        "startTime-endTime": "76.4-77.54",
        "text": "Next two hours.",
        "speaker": "C",
        "reply_to_id": "21"
    },
    {
        "id": 23,
        "startTime-endTime": "77.4-84.4",
        "text": "Yeah, but at least you survive five minutes. So you have five minutes to decide what to do next. Because-",
        "speaker": "D",
        "reply_to_id": "22"
    },
    {
        "id": 24,
        "startTime-endTime": "83.1-84.9",
        "text": "But you won't die in...",
        "speaker": "B",
        "reply_to_id": "23"
    },
    {
        "id": 25,
        "startTime-endTime": "84.6-89.7",
        "text": "At minus ten you can die. If you are not well dressed you can die.",
        "speaker": "D",
        "reply_to_id": "24"
    },
    {
        "id": 26,
        "startTime-endTime": "88.2-91.08",
        "text": "So we are well dressed that was mentioned.",
        "speaker": "C",
        "reply_to_id": "25"
    },
    {
        "id": 27,
        "startTime-endTime": "90.1-90.45",
        "text": "Yeah.",
        "speaker": "B",
        "reply_to_id": "26"
    },
    {
        "id": 28,
        "startTime-endTime": "90.3-91.95",
        "text": "We are all well dressed.",
        "speaker": "C",
        "reply_to_id": "26"
    },
    {
        "id": 29,
        "startTime-endTime": "91.0-92.32",
        "text": "Yeah for winter clothes.",
        "speaker": "B",
        "reply_to_id": "28"
    },
    {
        "id": 30,
        "startTime-endTime": "92.4-97.2",
        "text": "For winter so. Minus ten we have by default. Next two hours without doing effort-",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 31,
        "startTime-endTime": "97.5-99.54",
        "text": "I think we have to move-",
        "speaker": "B",
        "reply_to_id": "-"
    },
    {
        "id": 32,
        "startTime-endTime": "97.7-99.98",
        "text": "We need to have something more.",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 33,
        "startTime-endTime": "99.4-108.04",
        "text": "Like then start moving and then we- we need something to, er, well protect us like in winter, something to eat and to know where to go.",
        "speaker": "B",
        "reply_to_id": "31"
    },
    {
        "id": 34,
        "startTime-endTime": "110.7-118.38",
        "text": "Exactly. I put the chocolate as the first one. So you can-if there are people who didn't eat, they can't move in the cold.",
        "speaker": "D",
        "reply_to_id": "33"
    },
    {
        "id": 35,
        "startTime-endTime": "116.1-117.95",
        "text": "In the flight, er, well-",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 36,
        "startTime-endTime": "118.2-122.82",
        "text": "Probably we were flying for one hour. We are in Minnesota. Imagine we are...",
        "speaker": "C",
        "reply_to_id": "35"
    },
    {
        "id": 37,
        "startTime-endTime": "122.1-127.05",
        "text": "We are not well- well we are dressed like in flight, but not dressed like...",
        "speaker": "D",
        "reply_to_id": "36"
    },
    {
        "id": 38,
        "startTime-endTime": "128.2-130.42",
        "text": "No it is mentioned we were...",
        "speaker": "C",
        "reply_to_id": "37"
    },
    {
        "id": 39,
        "startTime-endTime": "129.6-133.45",
        "text": "Winter clothes. Suits, pant suits, street shoes and a work coat.",
        "speaker": "B",
        "reply_to_id": "38"
    },
    {
        "id": 40,
        "startTime-endTime": "133.2-134.22",
        "text": "Yeah winter clothes.",
        "speaker": "C",
        "reply_to_id": "39"
    },
    {
        "id": 41,
        "startTime-endTime": "134.7-135.72",
        "text": "I think that-",
        "speaker": "B",
        "reply_to_id": "-"
    },
    {
        "id": 42,
        "startTime-endTime": "135.9-138.46",
        "text": "Dressed in winter clothing, appropriate for city wear.",
        "speaker": "C",
        "reply_to_id": "40"
    },
    {
        "id": 43,
        "startTime-endTime": "138.4-145.24",
        "text": "I think it's quite important also, like, to know where to go and, like, a compass and a map.",
        "speaker": "B",
        "reply_to_id": "41"
    },
    {
        "id": 44,
        "startTime-endTime": "143.3-145.54",
        "text": "Appropriate for city weather, not the outskirts",
        "speaker": "C",
        "reply_to_id": "42"
    },
    {
        "id": 45,
        "startTime-endTime": "146.6-146.94",
        "text": "Yeah.",
        "speaker": "B",
        "reply_to_id": "43"
    },
    {
        "id": 46,
        "startTime-endTime": "146.8-151.84",
        "text": "So probably the first thing that we have to do is get more clothing.",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 47,
        "startTime-endTime": "150.1-150.45",
        "text": "Yeah.",
        "speaker": "B",
        "reply_to_id": "46"
    },
    {
        "id": 48,
        "startTime-endTime": "151.7-155.54",
        "text": "And then started moving. So to move we need to have something.",
        "speaker": "C",
        "reply_to_id": "46"
    },
    {
        "id": 49,
        "startTime-endTime": "159.4-162.2",
        "text": "Yeah the maps- aerial maps and the compass.",
        "speaker": "B",
        "reply_to_id": "48"
    },
    {
        "id": 50,
        "startTime-endTime": "161.6-171.1",
        "text": "So as I said, first of all seventy kilometres away from the habituation and they'd know the news already that we are- we have crashed.",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 51,
        "startTime-endTime": "172.2-178.28",
        "text": "Yeah but they don't know exactly where we are. And if- we have to walk seventy kilometres in snow.",
        "speaker": "B",
        "reply_to_id": "50"
    },
    {
        "id": 52,
        "startTime-endTime": "177.8-179.6",
        "text": "They, they must know because-",
        "speaker": "C",
        "reply_to_id": "51"
    },
    {
        "id": 53,
        "startTime-endTime": "178.1-179.62",
        "text": "That could be like...",
        "speaker": "B",
        "reply_to_id": "52"
    },
    {
        "id": 54,
        "startTime-endTime": "179.3-182.34",
        "text": "Because the information is sent before the crash.",
        "speaker": "C",
        "reply_to_id": "52"
    },
    {
        "id": 55,
        "startTime-endTime": "183.2-184.52",
        "text": "That's not been sent.",
        "speaker": "D",
        "reply_to_id": "54"
    },
    {
        "id": 56,
        "startTime-endTime": "185.4-191.69",
        "text": "The information is sent. It's mentioned. The crash came suddenly before the pilot had time to radio.",
        "speaker": "C",
        "reply_to_id": "55"
    },
    {
        "id": 57,
        "startTime-endTime": "191.4-191.77",
        "text": "Before?",
        "speaker": "A",
        "reply_to_id": "56"
    },
    {
        "id": 58,
        "startTime-endTime": "191.9-192.22",
        "text": "So.",
        "speaker": "C",
        "reply_to_id": "57"
    },
    {
        "id": 59,
        "startTime-endTime": "192.1-192.43",
        "text": "Before.",
        "speaker": "A",
        "reply_to_id": "56"
    },
    {
        "id": 60,
        "startTime-endTime": "194.0-194.35",
        "text": "Before.",
        "speaker": "B",
        "reply_to_id": "56"
    },
    {
        "id": 61,
        "startTime-endTime": "194.0-197.5",
        "text": "Before the crash. Meaning they'd know our locations exactly, so.",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 62,
        "startTime-endTime": "196.8-197.14",
        "text": "No.",
        "speaker": "A",
        "reply_to_id": "61"
    },
    {
        "id": 63,
        "startTime-endTime": "197.2-197.56",
        "text": "No.",
        "speaker": "B",
        "reply_to_id": "61"
    },
    {
        "id": 64,
        "startTime-endTime": "198.3-200.94",
        "text": "No. The crash came suddenly before the pilot-",
        "speaker": "A",
        "reply_to_id": "61"
    },
    {
        "id": 65,
        "startTime-endTime": "200.5-200.88",
        "text": "Ah.",
        "speaker": "C",
        "reply_to_id": "64"
    },
    {
        "id": 66,
        "startTime-endTime": "200.8-202.4",
        "text": "Had a chance to radio.",
        "speaker": "A",
        "reply_to_id": "64"
    },
    {
        "id": 67,
        "startTime-endTime": "201.4-203.0",
        "text": "Okay. I wrongly read it.",
        "speaker": "C",
        "reply_to_id": "66"
    },
    {
        "id": 68,
        "startTime-endTime": "202.3-205.8",
        "text": "So yes. It's like they don't know we have crashed.",
        "speaker": "B",
        "reply_to_id": "67"
    },
    {
        "id": 69,
        "startTime-endTime": "204.9-209.52",
        "text": "Okay. So if they don't know we crashed suddenly before the pilot had time.",
        "speaker": "C",
        "reply_to_id": "67"
    },
    {
        "id": 70,
        "startTime-endTime": "210.1-212.0",
        "text": "And, I mean, they could...",
        "speaker": "B",
        "reply_to_id": "69"
    },
    {
        "id": 71,
        "startTime-endTime": "213.4-219.01",
        "text": "Okay this means we certainly have to move. So for that we need some direction maps, so.",
        "speaker": "C",
        "reply_to_id": "69"
    },
    {
        "id": 72,
        "startTime-endTime": "221.5-227.1",
        "text": "And thirty-five, like, seventy kilometres with snow- that's two days of walking or something like that.",
        "speaker": "B",
        "reply_to_id": "71"
    },
    {
        "id": 73,
        "startTime-endTime": "227.2-229.12",
        "text": "Yeah at least two days that.",
        "speaker": "A",
        "reply_to_id": "72"
    },
    {
        "id": 74,
        "startTime-endTime": "230.8-232.9",
        "text": "So we need something to eat.",
        "speaker": "B",
        "reply_to_id": "-"
    },
    {
        "id": 75,
        "startTime-endTime": "234.9-235.23",
        "text": "Exactly.",
        "speaker": "A",
        "reply_to_id": "74"
    },
    {
        "id": 76,
        "startTime-endTime": "235.6-236.62",
        "text": "To be warm.",
        "speaker": "B",
        "reply_to_id": "75"
    },
    {
        "id": 77,
        "startTime-endTime": "236.2-237.8",
        "text": "So seventy-five kilometres of walking.",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 78,
        "startTime-endTime": "237.1-237.82",
        "text": "In snow.",
        "speaker": "B",
        "reply_to_id": "77"
    },
    {
        "id": 79,
        "startTime-endTime": "239.7-240.72",
        "text": "In the snow.",
        "speaker": "A",
        "reply_to_id": "77"
    },
    {
        "id": 80,
        "startTime-endTime": "240.3-242.1",
        "text": "In the snow until .",
        "speaker": "C",
        "reply_to_id": "79"
    },
    {
        "id": 81,
        "startTime-endTime": "242.9-246.3",
        "text": "Until- but well we hope maybe to find some maybe.",
        "speaker": "B",
        "reply_to_id": "80"
    },
    {
        "id": 82,
        "startTime-endTime": "248.3-252.0",
        "text": "Okay let's- let's identify the- the first three or four-",
        "speaker": "A",
        "reply_to_id": "-"
    },
    {
        "id": 83,
        "startTime-endTime": "251.6-251.93",
        "text": "Yeah.",
        "speaker": "B",
        "reply_to_id": "82"
    },
    {
        "id": 84,
        "startTime-endTime": "252.2-256.16",
        "text": "More- more important. Because we- we don't have too much time.",
        "speaker": "A",
        "reply_to_id": "83"
    },
    {
        "id": 85,
        "startTime-endTime": "253.1-253.48",
        "text": "Yeah.",
        "speaker": "B",
        "reply_to_id": "84"
    },
    {
        "id": 86,
        "startTime-endTime": "253.5-253.82",
        "text": "So.",
        "speaker": "A",
        "reply_to_id": "-"
    },
    {
        "id": 87,
        "startTime-endTime": "254.9-256.38",
        "text": "Extra shirts and pants?",
        "speaker": "B",
        "reply_to_id": "86"
    },
    {
        "id": 88,
        "startTime-endTime": "255.1-259.06",
        "text": "So something to- something to eat, I don't know chocolate? At least.",
        "speaker": "A",
        "reply_to_id": "86"
    },
    {
        "id": 89,
        "startTime-endTime": "260.2-261.72",
        "text": "It's not very useful.",
        "speaker": "D",
        "reply_to_id": "88"
    },
    {
        "id": 90,
        "startTime-endTime": "263.7-265.5",
        "text": "Chocolate and can of shortening.",
        "speaker": "B",
        "reply_to_id": "88"
    },
    {
        "id": 91,
        "startTime-endTime": "264.4-269.44",
        "text": "Well it is full of sugar. It burns. It keeps you alive at least.",
        "speaker": "A",
        "reply_to_id": "89"
    },
    {
        "id": 92,
        "startTime-endTime": "268.6-270.25",
        "text": "It burns too- too rapidly.",
        "speaker": "D",
        "reply_to_id": "91"
    },
    {
        "id": 93,
        "startTime-endTime": "269.2-272.9",
        "text": "So you don't need to eat for two- two days.",
        "speaker": "A",
        "reply_to_id": "92"
    },
    {
        "id": 94,
        "startTime-endTime": "271.4-276.8",
        "text": "I don't think it's a good idea. Maybe we can find some animals to kill.",
        "speaker": "D",
        "reply_to_id": "93"
    },
    {
        "id": 95,
        "startTime-endTime": "275.1-278.52",
        "text": "Er, how to eat them? How to kill them?",
        "speaker": "B",
        "reply_to_id": "94"
    },
    {
        "id": 96,
        "startTime-endTime": "280.1-281.54",
        "text": "We have an axe.",
        "speaker": "D",
        "reply_to_id": "95"
    },
    {
        "id": 97,
        "startTime-endTime": "281.3-283.1",
        "text": "Hand axe. But we ...",
        "speaker": "C",
        "reply_to_id": "96"
    },
    {
        "id": 98,
        "startTime-endTime": "284.5-285.55",
        "text": "Well it .",
        "speaker": "B",
        "reply_to_id": "96"
    },
    {
        "id": 99,
        "startTime-endTime": "287.4-296.04",
        "text": "First of all we just survived from the flight. So basically we want to survive from the cold. The cold is the main point. Not the hunger.",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 100,
        "startTime-endTime": "294.7-296.6",
        "text": "I think we have to-",
        "speaker": "B",
        "reply_to_id": "-"
    },
    {
        "id": 101,
        "startTime-endTime": "295.8-296.76",
        "text": "Not the hunger.",
        "speaker": "C",
        "reply_to_id": "99"
    },
    {
        "id": 102,
        "startTime-endTime": "296.2-306.84",
        "text": "If we are planning, like, we will have to walk for two days or three. Well we have to have something to eat but maybe not so much.",
        "speaker": "B",
        "reply_to_id": "101"
    },
    {
        "id": 103,
        "startTime-endTime": "304.1-312.42",
        "text": "But we have the gun so we don't need the axe to kill animals. It's a- it's a forty-five calibre pistol. So we can kill animals.",
        "speaker": "A",
        "reply_to_id": "102"
    },
    {
        "id": 104,
        "startTime-endTime": "310.9-314.64",
        "text": "I don't think we will have lots of things to kill.",
        "speaker": "B",
        "reply_to_id": "103"
    },
    {
        "id": 105,
        "startTime-endTime": "315.5-317.81",
        "text": "A pistol is not a good idea.",
        "speaker": "D",
        "reply_to_id": "103"
    },
    {
        "id": 106,
        "startTime-endTime": "316.3-316.66",
        "text": "Why?",
        "speaker": "A",
        "reply_to_id": "105"
    },
    {
        "id": 107,
        "startTime-endTime": "317.2-330.88",
        "text": "When people are together for too long a period of time without a- with less hope to survive, I'm not very sure, except for a family, er, it's a good idea to give them a pistol.",
        "speaker": "D",
        "reply_to_id": "106"
    },
    {
        "id": 108,
        "startTime-endTime": "330.6-330.97",
        "text": "Even...",
        "speaker": "B",
        "reply_to_id": "-"
    },
    {
        "id": 109,
        "startTime-endTime": "330.0-331.92",
        "text": "If you want to kill ",
        "speaker": "A",
        "reply_to_id": "107"
    },
    {
        "id": 110,
        "startTime-endTime": "334.1-335.09",
        "text": "No I think..",
        "speaker": "B",
        "reply_to_id": "109"
    },
    {
        "id": 111,
        "startTime-endTime": "335.4-340.02",
        "text": "No. But I- but I'm not pretty sure that human beings are good, so.",
        "speaker": "D",
        "reply_to_id": "109"
    },
    {
        "id": 112,
        "startTime-endTime": "339.3-346.33",
        "text": "Come on. You are big and you can stay two days without eating and nothing will happen to you.",
        "speaker": "B",
        "reply_to_id": "-"
    },
    {
        "id": 113,
        "startTime-endTime": "345.2-345.56",
        "text": "Yes.",
        "speaker": "A",
        "reply_to_id": "112"
    },
    {
        "id": 114,
        "startTime-endTime": "345.6-347.82",
        "text": "Okay we don't have time ",
        "speaker": "D",
        "reply_to_id": "112"
    },
    {
        "id": 115,
        "startTime-endTime": "347.7-356.2",
        "text": "So four days- for me this is a second priority. We are still in the first priority where we need something to survive without food.",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 116,
        "startTime-endTime": "355.7-357.6",
        "text": "Okay I think it's maybe..",
        "speaker": "B",
        "reply_to_id": "115"
    },
    {
        "id": 117,
        "startTime-endTime": "357.3-359.22",
        "text": "Against the cold and walking towards.",
        "speaker": "C",
        "reply_to_id": "116"
    },
    {
        "id": 118,
        "startTime-endTime": "359.1-359.43",
        "text": "Yeah.",
        "speaker": "D",
        "reply_to_id": "117"
    },
    {
        "id": 119,
        "startTime-endTime": "361.8-364.44",
        "text": "Well cold, then something to eat and then-",
        "speaker": "B",
        "reply_to_id": "117"
    },
    {
        "id": 120,
        "startTime-endTime": "364.9-368.53",
        "text": "So cannot reach the habituation in one day. We need shelter.",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 121,
        "startTime-endTime": "368.4-369.51",
        "text": "We need something.",
        "speaker": "B",
        "reply_to_id": "119"
    },
    {
        "id": 122,
        "startTime-endTime": "369.3-372.1",
        "text": "So second one should be the twenty-by-twenty metres-",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 123,
        "startTime-endTime": "373.6-373.94",
        "text": "Tent.",
        "speaker": "B",
        "reply_to_id": "122"
    },
    {
        "id": 124,
        "startTime-endTime": "374.2-374.58",
        "text": "Yeah.",
        "speaker": "C",
        "reply_to_id": "123"
    },
    {
        "id": 125,
        "startTime-endTime": "375.3-384.82",
        "text": "I'm not so sure. Is it better to get second, like, the compass and the maps? Because, I mean, getting oriented in the snow, it's not so easy.",
        "speaker": "B",
        "reply_to_id": "-"
    },
    {
        "id": 126,
        "startTime-endTime": "384.4-398.08",
        "text": "Er, if if you have compass or not, you are not- you are going to stay in the forest for the night. So if you have compass, it doesn't make sense if you don't have, so.",
        "speaker": "C",
        "reply_to_id": "125"
    },
    {
        "id": 127,
        "startTime-endTime": "396.1-398.9",
        "text": "We did what? Because time is running, so.",
        "speaker": "A",
        "reply_to_id": "-"
    },
    {
        "id": 128,
        "startTime-endTime": "399.4-399.76",
        "text": "Yeah.",
        "speaker": "B",
        "reply_to_id": "127"
    },
    {
        "id": 129,
        "startTime-endTime": "400.3-405.48",
        "text": "So twenty-by-twenty piece of this should be the second one that we should carry?",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 130,
        "startTime-endTime": "405.7-408.66",
        "text": "Sorry, which is the first one for you?",
        "speaker": "A",
        "reply_to_id": "129"
    },
    {
        "id": 131,
        "startTime-endTime": "409.5-411.1",
        "text": "Er, extra pants and shirts.",
        "speaker": "C",
        "reply_to_id": "130"
    },
    {
        "id": 132,
        "startTime-endTime": "410.6-413.48",
        "text": "Yeah okay I agree- I can agree with that.",
        "speaker": "A",
        "reply_to_id": "129"
    },
    {
        "id": 133,
        "startTime-endTime": "414.9-418.97",
        "text": "And the third one is for the navigations I- I believe.",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 134,
        "startTime-endTime": "419.4-423.25",
        "text": "The third one. But the second one, what did you put?",
        "speaker": "D",
        "reply_to_id": "133"
    },
    {
        "id": 135,
        "startTime-endTime": "426.5-429.38",
        "text": "The second one is for a night tent.",
        "speaker": "C",
        "reply_to_id": "134"
    },
    {
        "id": 136,
        "startTime-endTime": "430.2-430.88",
        "text": "Twenty-by-twenty foot.",
        "speaker": "A",
        "reply_to_id": "134"
    },
    {
        "id": 137,
        "startTime-endTime": "431.3-435.46",
        "text": "Okay. Okay I can agree with that. Nothing to eat, are we sure?",
        "speaker": "D",
        "reply_to_id": "136"
    },
    {
        "id": 138,
        "startTime-endTime": "437.1-437.84",
        "text": "I think.",
        "speaker": "B",
        "reply_to_id": "137"
    },
    {
        "id": 139,
        "startTime-endTime": "438.8-442.98",
        "text": "It's a second priority. We are still in the first priority.",
        "speaker": "C",
        "reply_to_id": "137"
    },
    {
        "id": 140,
        "startTime-endTime": "441.5-441.88",
        "text": "Okay.",
        "speaker": "D",
        "reply_to_id": "139"
    },
    {
        "id": 141,
        "startTime-endTime": "442.3-449.23",
        "text": "Maybe we should not, like, fulfil the first priority but, like, first item of first priority, first item of second priority.",
        "speaker": "B",
        "reply_to_id": "139"
    },
    {
        "id": 142,
        "startTime-endTime": "458.0-465.36",
        "text": "I'm not sure it's, like- first we take the map and the compass and afterwards the food? Or we take food and then...",
        "speaker": "B",
        "reply_to_id": "141"
    },
    {
        "id": 143,
        "startTime-endTime": "464.8-470.56",
        "text": "Before we can pass we have to be sure that we have something to eat I think. No?",
        "speaker": "A",
        "reply_to_id": "-"
    },
    {
        "id": 144,
        "startTime-endTime": "467.4-467.78",
        "text": "Yeah.",
        "speaker": "B",
        "reply_to_id": "143"
    },
    {
        "id": 145,
        "startTime-endTime": "469.2-472.4",
        "text": "I think at minus twenty you need to eat something.",
        "speaker": "A",
        "reply_to_id": "144"
    },
    {
        "id": 146,
        "startTime-endTime": "471.2-473.0",
        "text": "Yeah. Let's go for food.",
        "speaker": "C",
        "reply_to_id": "145"
    },
    {
        "id": 147,
        "startTime-endTime": "472.1-474.69",
        "text": "I can agree to kill animals .",
        "speaker": "D",
        "reply_to_id": "-"
    },
    {
        "id": 148,
        "startTime-endTime": "475.9-481.98",
        "text": "So food. Which kind of food? We go for chocolate bar which is small or the...",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 149,
        "startTime-endTime": "480.3-484.37",
        "text": "Short- can of shortening it's not too- it's a little bigger.",
        "speaker": "B",
        "reply_to_id": "148"
    },
    {
        "id": 150,
        "startTime-endTime": "484.2-491.55",
        "text": "Well a chocolate bar there's not enough for the whole plane, I think. So maybe it's fairly useless for four people.",
        "speaker": "D",
        "reply_to_id": "148"
    },
    {
        "id": 151,
        "startTime-endTime": "491.3-491.96",
        "text": "Yeah. ",
        "speaker": "B",
        "reply_to_id": "150"
    },
    {
        "id": 152,
        "startTime-endTime": "492.1-497.54",
        "text": "So we should go for the family-sized chocolate bar which is sugar . Let's go for this.",
        "speaker": "C",
        "reply_to_id": "150"
    },
    {
        "id": 153,
        "startTime-endTime": "499.1-499.48",
        "text": "Yeah.",
        "speaker": "B",
        "reply_to_id": "152"
    },
    {
        "id": 154,
        "startTime-endTime": "502.3-503.32",
        "text": "And then compass-",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 155,
        "startTime-endTime": "506.8-507.44",
        "text": "Aerial map.",
        "speaker": "B",
        "reply_to_id": "154"
    },
    {
        "id": 156,
        "startTime-endTime": "507.4-508.88",
        "text": "Or the map? So...",
        "speaker": "C",
        "reply_to_id": "155"
    },
    {
        "id": 157,
        "startTime-endTime": "510.2-512.51",
        "text": "Okay. I think I'd go for the",
        "speaker": "A",
        "reply_to_id": "156"
    },
    {
        "id": 158,
        "startTime-endTime": "511.5-512.78",
        "text": "Which for the map",
        "speaker": "D",
        "reply_to_id": "-"
    },
    {
        "id": 159,
        "startTime-endTime": "512.7-514.62",
        "text": "Well I think we need both.",
        "speaker": "B",
        "reply_to_id": "158"
    },
    {
        "id": 160,
        "startTime-endTime": "515.3-520.48",
        "text": "Maybe the aerial map is more important. You can still understand where is the-",
        "speaker": "A",
        "reply_to_id": "-"
    },
    {
        "id": 161,
        "startTime-endTime": "520.9-521.26",
        "text": "Yeah.",
        "speaker": "D",
        "reply_to_id": "160"
    },
    {
        "id": 162,
        "startTime-endTime": "521.2-521.92",
        "text": "The sun.",
        "speaker": "C",
        "reply_to_id": "160"
    },
    {
        "id": 163,
        "startTime-endTime": "522.1-525.3",
        "text": "You can see, like, then put it in the map.",
        "speaker": "D",
        "reply_to_id": "162"
    },
    {
        "id": 164,
        "startTime-endTime": "524.5-525.82",
        "text": "The light. Continue ",
        "speaker": "C",
        "reply_to_id": "163"
    },
    {
        "id": 165,
        "startTime-endTime": "526.7-533.5",
        "text": "Or if you see a bit light you can understand where is the sun. You can guess where is North.",
        "speaker": "D",
        "reply_to_id": "163"
    },
    {
        "id": 166,
        "startTime-endTime": "531.5-533.66",
        "text": "The map is more important then?",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 167,
        "startTime-endTime": "532.4-532.74",
        "text": "Yeah.",
        "speaker": "D",
        "reply_to_id": "166"
    },
    {
        "id": 168,
        "startTime-endTime": "533.4-537.82",
        "text": "Yes. I think it's more important, but I would take the compass also.",
        "speaker": "B",
        "reply_to_id": "166"
    },
    {
        "id": 169,
        "startTime-endTime": "538.6-546.65",
        "text": "So compass should go into the next, depending on the food and the compass. Now we can choose between whisky or compass. ",
        "speaker": "C",
        "reply_to_id": "168"
    },
    {
        "id": 170,
        "startTime-endTime": "550.2-558.56",
        "text": "Come on. Whisky, I mean, it wouldn't keep- you may feel warmer drinking alcohol, but it, in fact, it just dilates your....",
        "speaker": "B",
        "reply_to_id": "169"
    },
    {
        "id": 171,
        "startTime-endTime": "557.7-558.38",
        "text": "Mm hmm.",
        "speaker": "A",
        "reply_to_id": "170"
    },
    {
        "id": 172,
        "startTime-endTime": "558.4-563.5",
        "text": "Maybe you can- you can use- because we are not sure we can light wood.",
        "speaker": "D",
        "reply_to_id": "170"
    },
    {
        "id": 173,
        "startTime-endTime": "562.2-565.08",
        "text": "We have nothing to light it with. ",
        "speaker": "B",
        "reply_to_id": "172"
    },
    {
        "id": 174,
        "startTime-endTime": "564.9-569.45",
        "text": "No you can use the whisky and the empty cigarette lighter to- to...",
        "speaker": "D",
        "reply_to_id": "173"
    },
    {
        "id": 175,
        "startTime-endTime": "568.2-573.32",
        "text": "But then you also need to take the newspapers and the hand axe, so it's like...",
        "speaker": "B",
        "reply_to_id": "174"
    },
    {
        "id": 176,
        "startTime-endTime": "574.6-577.26",
        "text": "Yeah. Actually- actually we were going to...",
        "speaker": "A",
        "reply_to_id": "174"
    },
    {
        "id": 177,
        "startTime-endTime": "577.6-584.6",
        "text": "They said there is plenty of dead wood. So you just need a spark and then it will burn normally.",
        "speaker": "D",
        "reply_to_id": "175"
    },
    {
        "id": 178,
        "startTime-endTime": "583.1-583.74",
        "text": "Mmm. Yeah.",
        "speaker": "A",
        "reply_to_id": "177"
    },
    {
        "id": 179,
        "startTime-endTime": "585.8-589.54",
        "text": "Being said it's dead wood. Not- not wood plenty of .",
        "speaker": "D",
        "reply_to_id": "177"
    },
    {
        "id": 180,
        "startTime-endTime": "590.6-596.89",
        "text": "You need some kind of paper. I mean, you cannot put a lighter and dead wood and...",
        "speaker": "B",
        "reply_to_id": "179"
    },
    {
        "id": 181,
        "startTime-endTime": "596.2-597.95",
        "text": "The cold is minus ten.",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 182,
        "startTime-endTime": "597.3-600.9",
        "text": "You can- can- you can take newspapers if you want.",
        "speaker": "A",
        "reply_to_id": "180"
    },
    {
        "id": 183,
        "startTime-endTime": "599.3-599.66",
        "text": "Yeah.",
        "speaker": "C",
        "reply_to_id": "182"
    },
    {
        "id": 184,
        "startTime-endTime": "600.6-602.04",
        "text": "But whisky is not-",
        "speaker": "A",
        "reply_to_id": "182"
    },
    {
        "id": 185,
        "startTime-endTime": "601.1-602.54",
        "text": "No I don't see.",
        "speaker": "B",
        "reply_to_id": "184"
    },
    {
        "id": 186,
        "startTime-endTime": "602.4-603.36",
        "text": "Not very useful.",
        "speaker": "A",
        "reply_to_id": "184"
    },
    {
        "id": 187,
        "startTime-endTime": "603.3-604.38",
        "text": "But no it's-",
        "speaker": "B",
        "reply_to_id": "-"
    },
    {
        "id": 188,
        "startTime-endTime": "604.6-605.68",
        "text": "It doesn't burn?",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 189,
        "startTime-endTime": "604.3-607.93",
        "text": "Well it's a thing to get the spark on- the spark.",
        "speaker": "B",
        "reply_to_id": "-"
    },
    {
        "id": 190,
        "startTime-endTime": "607.4-608.16",
        "text": "The spark?",
        "speaker": "D",
        "reply_to_id": "189"
    },
    {
        "id": 191,
        "startTime-endTime": "608.7-609.42",
        "text": "Cigarette lighter.",
        "speaker": "A",
        "reply_to_id": "189"
    },
    {
        "id": 192,
        "startTime-endTime": "609.7-610.46",
        "text": "Without flint?",
        "speaker": "B",
        "reply_to_id": "191"
    },
    {
        "id": 193,
        "startTime-endTime": "611.9-615.23",
        "text": "There is no flint so how do you ?",
        "speaker": "C",
        "reply_to_id": "191"
    },
    {
        "id": 194,
        "startTime-endTime": "612.2-615.6",
        "text": "You can have a spark- or a stone for spark.",
        "speaker": "A",
        "reply_to_id": "193"
    },
    {
        "id": 195,
        "startTime-endTime": "615.1-621.5",
        "text": "Yeah, yeah. That's the point. You use the stone of the- of the cigarette lighter and the whisky as liquid.",
        "speaker": "D",
        "reply_to_id": "194"
    },
    {
        "id": 196,
        "startTime-endTime": "621.1-623.08",
        "text": "I'm pretty sure whisky is .",
        "speaker": "A",
        "reply_to_id": "195"
    },
    {
        "id": 197,
        "startTime-endTime": "622.4-625.92",
        "text": "At minus twenty you can light the wood with only the-",
        "speaker": "D",
        "reply_to_id": "194"
    },
    {
        "id": 198,
        "startTime-endTime": "626.6-626.97",
        "text": "No.",
        "speaker": "A",
        "reply_to_id": "-"
    },
    {
        "id": 199,
        "startTime-endTime": "626.6-626.98",
        "text": "Newspaper.",
        "speaker": "D",
        "reply_to_id": "197"
    },
    {
        "id": 200,
        "startTime-endTime": "628.4-632.96",
        "text": "I- I'm not- I'm not sure, but I don't know if it.",
        "speaker": "A",
        "reply_to_id": "199"
    },
    {
        "id": 201,
        "startTime-endTime": "630.7-634.22",
        "text": "Newspaper standing- well newspaper is with us, it's- it's- it's dry.",
        "speaker": "C",
        "reply_to_id": "200"
    },
    {
        "id": 202,
        "startTime-endTime": "635.9-639.23",
        "text": "Yeah. And newspaper is smaller than a whisky bottle.",
        "speaker": "A",
        "reply_to_id": "201"
    },
    {
        "id": 203,
        "startTime-endTime": "639.3-643.38",
        "text": "But with only the stone of the lighter you can light newspaper?",
        "speaker": "D",
        "reply_to_id": "202"
    },
    {
        "id": 204,
        "startTime-endTime": "643.8-644.12",
        "text": "Certainly.",
        "speaker": "A",
        "reply_to_id": "203"
    },
    {
        "id": 205,
        "startTime-endTime": "646.1-646.43",
        "text": "Okay.",
        "speaker": "A",
        "reply_to_id": "-"
    },
    {
        "id": 206,
        "startTime-endTime": "649.9-652.56",
        "text": "Okay. So lighter without newspaper is meaningless?",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 207,
        "startTime-endTime": "656.5-657.58",
        "text": "No. Then you-",
        "speaker": "A",
        "reply_to_id": "-"
    },
    {
        "id": 208,
        "startTime-endTime": "657.4-658.36",
        "text": "Yeah. I mean...",
        "speaker": "B",
        "reply_to_id": "-"
    },
    {
        "id": 209,
        "startTime-endTime": "658.2-661.72",
        "text": "Lighter and newspaper is the next- are the next. Yeah, so.",
        "speaker": "A",
        "reply_to_id": "-"
    },
    {
        "id": 210,
        "startTime-endTime": "660.7-663.74",
        "text": "Are we allowed to rank both together? Or..",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 211,
        "startTime-endTime": "663.6-665.04",
        "text": "What about the compass?",
        "speaker": "D",
        "reply_to_id": "-"
    },
    {
        "id": 212,
        "startTime-endTime": "665.3-674.18",
        "text": "I think the compass is much more important. We will be moving and in a snowy area it's- it's really easy to get lost-",
        "speaker": "B",
        "reply_to_id": "211"
    },
    {
        "id": 213,
        "startTime-endTime": "671.5-671.88",
        "text": "True-",
        "speaker": "A",
        "reply_to_id": "212"
    },
    {
        "id": 214,
        "startTime-endTime": "671.4-672.45",
        "text": "If there's snow.",
        "speaker": "B",
        "reply_to_id": "212"
    },
    {
        "id": 215,
        "startTime-endTime": "673.2-683.08",
        "text": "that if it's night- if it's night and it's cloudy you don't really know where is anything. You don't see anything. So maybe compass is still...",
        "speaker": "A",
        "reply_to_id": "214"
    },
    {
        "id": 216,
        "startTime-endTime": "681.8-683.6",
        "text": "And if there's er you-",
        "speaker": "B",
        "reply_to_id": "-"
    },
    {
        "id": 217,
        "startTime-endTime": "684.5-684.85",
        "text": "Smoke.",
        "speaker": "D",
        "reply_to_id": "216"
    },
    {
        "id": 218,
        "startTime-endTime": "685.6-685.92",
        "text": "Smoke.",
        "speaker": "B",
        "reply_to_id": "217"
    },
    {
        "id": 219,
        "startTime-endTime": "686.2-686.94",
        "text": "Er, fog.",
        "speaker": "D",
        "reply_to_id": "218"
    },
    {
        "id": 220,
        "startTime-endTime": "686.7-689.74",
        "text": "Fog? You- you wouldn't know where you are.",
        "speaker": "B",
        "reply_to_id": "219"
    },
    {
        "id": 221,
        "startTime-endTime": "689.1-691.2",
        "text": "Hmm. Okay. So five for compass?",
        "speaker": "A",
        "reply_to_id": "-"
    },
    {
        "id": 222,
        "startTime-endTime": "692.1-693.58",
        "text": "Yeah. Then cigarette lighter?",
        "speaker": "D",
        "reply_to_id": "221"
    },
    {
        "id": 223,
        "startTime-endTime": "698.7-699.46",
        "text": "Oh yeah.",
        "speaker": "A",
        "reply_to_id": "222"
    },
    {
        "id": 224,
        "startTime-endTime": "700.2-708.02",
        "text": "How would- how would- thinking like this. If the crash happens, sooner or later they will know and they will search for us.",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 225,
        "startTime-endTime": "706.2-710.62",
        "text": "Well no if there's a snow storm they could spend two days without.",
        "speaker": "B",
        "reply_to_id": "224"
    },
    {
        "id": 226,
        "startTime-endTime": "711.5-712.46",
        "text": "Okay. No idea.",
        "speaker": "C",
        "reply_to_id": "225"
    },
    {
        "id": 227,
        "startTime-endTime": "718.3-722.46",
        "text": "I mean think just as the plane can get covered with snow and...",
        "speaker": "B",
        "reply_to_id": "226"
    },
    {
        "id": 228,
        "startTime-endTime": "724.4-725.88",
        "text": "The plane has sunk.",
        "speaker": "D",
        "reply_to_id": "227"
    },
    {
        "id": 229,
        "startTime-endTime": "725.6-731.87",
        "text": "What about the . I was just thinking about the food. Are we surviving with just the chocolate bar?",
        "speaker": "A",
        "reply_to_id": "-"
    },
    {
        "id": 230,
        "startTime-endTime": "734.4-738.0",
        "text": "I think we should just take the can of shortening.",
        "speaker": "B",
        "reply_to_id": "229"
    },
    {
        "id": 231,
        "startTime-endTime": "735.7-742.35",
        "text": "Now we should make the fire. We need fire now. Because we have to be a certain amount of...",
        "speaker": "C",
        "reply_to_id": "230"
    },
    {
        "id": 232,
        "startTime-endTime": "743.9-745.34",
        "text": "So cigarette and newspaper.",
        "speaker": "B",
        "reply_to_id": "231"
    },
    {
        "id": 233,
        "startTime-endTime": "747.2-749.58",
        "text": "Okay. Let's go cigarette lighter is five?",
        "speaker": "C",
        "reply_to_id": "232"
    },
    {
        "id": 234,
        "startTime-endTime": "750.3-750.63",
        "text": "Six.",
        "speaker": "A",
        "reply_to_id": "233"
    },
    {
        "id": 235,
        "startTime-endTime": "751.2-751.53",
        "text": "Six.",
        "speaker": "B",
        "reply_to_id": "233"
    },
    {
        "id": 236,
        "startTime-endTime": "751.8-752.91",
        "text": "What was five?",
        "speaker": "C",
        "reply_to_id": "234"
    },
    {
        "id": 237,
        "startTime-endTime": "752.1-752.43",
        "text": "Compass.",
        "speaker": "B",
        "reply_to_id": "236"
    },
    {
        "id": 238,
        "startTime-endTime": "752.7-753.36",
        "text": "Er, compass.",
        "speaker": "A",
        "reply_to_id": "237"
    },
    {
        "id": 239,
        "startTime-endTime": "753.3-753.63",
        "text": "Compass.",
        "speaker": "C",
        "reply_to_id": "234"
    },
    {
        "id": 240,
        "startTime-endTime": "755.6-756.24",
        "text": "And then",
        "speaker": "D",
        "reply_to_id": "-"
    },
    {
        "id": 241,
        "startTime-endTime": "756.4-758.2",
        "text": "Six and then newspaper seven?",
        "speaker": "C",
        "reply_to_id": "240"
    },
    {
        "id": 242,
        "startTime-endTime": "758.1-758.43",
        "text": "Yeah.",
        "speaker": "B",
        "reply_to_id": "241"
    },
    {
        "id": 243,
        "startTime-endTime": "759.4-760.14",
        "text": "Except .",
        "speaker": "D",
        "reply_to_id": "241"
    },
    {
        "id": 244,
        "startTime-endTime": "760.9-766.15",
        "text": "Okay so once we have this we need a hand axe to cut the wood?",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 245,
        "startTime-endTime": "764.2-764.55",
        "text": "Er.",
        "speaker": "B",
        "reply_to_id": "244"
    },
    {
        "id": 246,
        "startTime-endTime": "766.7-771.18",
        "text": "We can just burn it otherwise. A hand axe is not- but we need...",
        "speaker": "C",
        "reply_to_id": "244"
    },
    {
        "id": 247,
        "startTime-endTime": "772.1-781.22",
        "text": "What's- what's the point of making it more complicated to use a newspaper. Because probably it's possible to do it, but it's more difficult.",
        "speaker": "D",
        "reply_to_id": "-"
    },
    {
        "id": 248,
        "startTime-endTime": "781.4-792.5",
        "text": "Yes but it's more than a bottle of whisky. The bottle of whisky is heavy. It's big. And if you have to walk, you will not be happy with that.",
        "speaker": "A",
        "reply_to_id": "247"
    },
    {
        "id": 249,
        "startTime-endTime": "789.3-792.93",
        "text": "It's not big. It's one litre. I mean, it's one kilo.",
        "speaker": "D",
        "reply_to_id": "248"
    },
    {
        "id": 250,
        "startTime-endTime": "792.5-794.4",
        "text": "I can carry it. ",
        "speaker": "C",
        "reply_to_id": "249"
    },
    {
        "id": 251,
        "startTime-endTime": "794.3-802.7",
        "text": "I offer my services. Well at least I don't spend what thirty minutes, I don't know, to try to- maybe it's windy and it...",
        "speaker": "A",
        "reply_to_id": "-"
    },
    {
        "id": 252,
        "startTime-endTime": "801.1-802.8",
        "text": "I- I think it's like...",
        "speaker": "B",
        "reply_to_id": "-"
    },
    {
        "id": 253,
        "startTime-endTime": "802.6-806.23",
        "text": "Does it burn first of all? Whisky. Does- does it burn?",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 254,
        "startTime-endTime": "807.2-811.04",
        "text": "Whisky is maybe it can be sixty degrees, fifty. So it burns.",
        "speaker": "D",
        "reply_to_id": "253"
    },
    {
        "id": 255,
        "startTime-endTime": "812.3-813.41",
        "text": "Sure it burns.",
        "speaker": "B",
        "reply_to_id": "253"
    },
    {
        "id": 256,
        "startTime-endTime": "813.7-814.69",
        "text": "Like- like oil.",
        "speaker": "D",
        "reply_to_id": "254"
    },
    {
        "id": 257,
        "startTime-endTime": "816.6-816.94",
        "text": "Okay.",
        "speaker": "C",
        "reply_to_id": "255"
    },
    {
        "id": 258,
        "startTime-endTime": "817.9-825.16",
        "text": "The thing is that I am not sure it will work with a cigarette lighter. I've never tried to put real alcohol.",
        "speaker": "B",
        "reply_to_id": "-"
    },
    {
        "id": 259,
        "startTime-endTime": "824.3-828.04",
        "text": "I've never tried it. I- I'm trying only to think, erm.",
        "speaker": "D",
        "reply_to_id": "258"
    },
    {
        "id": 260,
        "startTime-endTime": "827.9-830.78",
        "text": "So maybe we should change the newspaper to...",
        "speaker": "C",
        "reply_to_id": "259"
    },
    {
        "id": 261,
        "startTime-endTime": "831.6-832.32",
        "text": "Should we-",
        "speaker": "B",
        "reply_to_id": "-"
    },
    {
        "id": 262,
        "startTime-endTime": "833.1-839.02",
        "text": "Should we maybe, like, start by the ending now so we'll have less things to decide.",
        "speaker": "B",
        "reply_to_id": "261"
    },
    {
        "id": 263,
        "startTime-endTime": "837.5-837.86",
        "text": "Okay.",
        "speaker": "A",
        "reply_to_id": "262"
    },
    {
        "id": 264,
        "startTime-endTime": "838.2-842.82",
        "text": "I don't see the point of the ball of steel wool. It's heavy and...",
        "speaker": "B",
        "reply_to_id": "-"
    },
    {
        "id": 265,
        "startTime-endTime": "844.8-846.72",
        "text": "It's not- it's not really heavy.",
        "speaker": "D",
        "reply_to_id": "264"
    },
    {
        "id": 266,
        "startTime-endTime": "846.5-846.83",
        "text": "No?",
        "speaker": "B",
        "reply_to_id": "265"
    },
    {
        "id": 267,
        "startTime-endTime": "847.1-847.78",
        "text": "But useful-",
        "speaker": "D",
        "reply_to_id": "266"
    },
    {
        "id": 268,
        "startTime-endTime": "848.1-848.78",
        "text": "It's steel.",
        "speaker": "B",
        "reply_to_id": "267"
    },
    {
        "id": 269,
        "startTime-endTime": "849.7-852.08",
        "text": "I'm not very sure. Steel, but it's-",
        "speaker": "D",
        "reply_to_id": "268"
    },
    {
        "id": 270,
        "startTime-endTime": "851.6-855.8",
        "text": "The only use I could think of was, like, trying to fish.",
        "speaker": "B",
        "reply_to_id": "269"
    },
    {
        "id": 271,
        "startTime-endTime": "854.4-856.96",
        "text": "Yes but it's a very, very, very thin-",
        "speaker": "D",
        "reply_to_id": "270"
    },
    {
        "id": 272,
        "startTime-endTime": "857.5-857.87",
        "text": "Yes.",
        "speaker": "B",
        "reply_to_id": "271"
    },
    {
        "id": 273,
        "startTime-endTime": "857.9-863.15",
        "text": "Thread of steel wool so it's not very heavy. But useful, I'm not very sure.",
        "speaker": "D",
        "reply_to_id": "-"
    },
    {
        "id": 274,
        "startTime-endTime": "864.3-870.24",
        "text": "No I think it's less useful. So we'll put it as the last one? We have any other...",
        "speaker": "B",
        "reply_to_id": "273"
    },
    {
        "id": 275,
        "startTime-endTime": "876.1-878.69",
        "text": "I don't see any use of it.",
        "speaker": "C",
        "reply_to_id": "273"
    },
    {
        "id": 276,
        "startTime-endTime": "877.5-878.24",
        "text": "No. Okay.",
        "speaker": "D",
        "reply_to_id": "274"
    },
    {
        "id": 277,
        "startTime-endTime": "878.1-878.42",
        "text": "Okay.",
        "speaker": "B",
        "reply_to_id": "276"
    },
    {
        "id": 278,
        "startTime-endTime": "879.3-880.7",
        "text": "So it's twelve. Right?",
        "speaker": "A",
        "reply_to_id": "-"
    },
    {
        "id": 279,
        "startTime-endTime": "880.1-880.46",
        "text": "Yeah.",
        "speaker": "B",
        "reply_to_id": "278"
    },
    {
        "id": 280,
        "startTime-endTime": "881.2-882.64",
        "text": "Yes it is useful.",
        "speaker": "C",
        "reply_to_id": "278"
    },
    {
        "id": 281,
        "startTime-endTime": "884.4-884.78",
        "text": "Okay.",
        "speaker": "D",
        "reply_to_id": "280"
    },
    {
        "id": 282,
        "startTime-endTime": "884.8-885.17",
        "text": "Okay.",
        "speaker": "B",
        "reply_to_id": "280"
    },
    {
        "id": 283,
        "startTime-endTime": "885.2-885.55",
        "text": "Quickly.",
        "speaker": "A",
        "reply_to_id": "280"
    },
    {
        "id": 284,
        "startTime-endTime": "885.5-894.86",
        "text": "Okay but then, er, look. If you are stuck in the snow while walking, we don't have any way to get out. Maybe this is useful.",
        "speaker": "C",
        "reply_to_id": "283"
    },
    {
        "id": 285,
        "startTime-endTime": "894.6-896.3",
        "text": "You will cut your hand.",
        "speaker": "A",
        "reply_to_id": "284"
    },
    {
        "id": 286,
        "startTime-endTime": "895.4-895.77",
        "text": "Huh?",
        "speaker": "C",
        "reply_to_id": "285"
    },
    {
        "id": 287,
        "startTime-endTime": "896.3-898.0",
        "text": "You will cut your hands.",
        "speaker": "A",
        "reply_to_id": "286"
    },
    {
        "id": 288,
        "startTime-endTime": "897.2-901.36",
        "text": "On this kind of thing. Okay so let's go for twelve on this.",
        "speaker": "C",
        "reply_to_id": "287"
    },
    {
        "id": 289,
        "startTime-endTime": "900.2-900.94",
        "text": "So then...",
        "speaker": "B",
        "reply_to_id": "-"
    },
    {
        "id": 290,
        "startTime-endTime": "902.8-905.02",
        "text": "We have shortening, whisky. Whisky was?",
        "speaker": "C",
        "reply_to_id": "289"
    },
    {
        "id": 291,
        "startTime-endTime": "906.2-909.16",
        "text": "Er, whisky we were not pretty sure. ",
        "speaker": "D",
        "reply_to_id": "290"
    },
    {
        "id": 292,
        "startTime-endTime": "911.5-919.5",
        "text": "Okay. So less useful the pistol. The only use I can make of it is to make noise to let someone know where we are.",
        "speaker": "B",
        "reply_to_id": "-"
    },
    {
        "id": 293,
        "startTime-endTime": "920.1-920.86",
        "text": "That's eleven.",
        "speaker": "C",
        "reply_to_id": "292"
    },
    {
        "id": 294,
        "startTime-endTime": "921.4-921.76",
        "text": "Eleven.",
        "speaker": "A",
        "reply_to_id": "292"
    },
    {
        "id": 295,
        "startTime-endTime": "922.7-923.03",
        "text": "Okay.",
        "speaker": "D",
        "reply_to_id": "294"
    },
    {
        "id": 296,
        "startTime-endTime": "923.9-925.5",
        "text": "Er, one can of shortening.",
        "speaker": "A",
        "reply_to_id": "-"
    },
    {
        "id": 297,
        "startTime-endTime": "925.2-927.05",
        "text": "That's- we can always take.",
        "speaker": "B",
        "reply_to_id": "296"
    },
    {
        "id": 298,
        "startTime-endTime": "926.6-927.34",
        "text": "Ten. Okay.",
        "speaker": "A",
        "reply_to_id": "297"
    },
    {
        "id": 299,
        "startTime-endTime": "928.2-928.84",
        "text": "Ten. Okay.",
        "speaker": "C",
        "reply_to_id": "297"
    },
    {
        "id": 300,
        "startTime-endTime": "928.9-929.23",
        "text": "Then",
        "speaker": "A",
        "reply_to_id": "-"
    },
    {
        "id": 301,
        "startTime-endTime": "930.7-931.42",
        "text": "Next whisky.",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 302,
        "startTime-endTime": "932.5-933.52",
        "text": "Er, hand axe.",
        "speaker": "A",
        "reply_to_id": "-"
    },
    {
        "id": 303,
        "startTime-endTime": "934.7-935.03",
        "text": "Nine.",
        "speaker": "C",
        "reply_to_id": "302"
    },
    {
        "id": 304,
        "startTime-endTime": "935.2-935.58",
        "text": "Nine.",
        "speaker": "A",
        "reply_to_id": "302"
    },
    {
        "id": 305,
        "startTime-endTime": "936.7-937.4",
        "text": "Whisky eight.",
        "speaker": "D",
        "reply_to_id": "301"
    },
    {
        "id": 306,
        "startTime-endTime": "938.2-938.52",
        "text": "Okay.",
        "speaker": "B",
        "reply_to_id": "305"
    },
    {
        "id": 307,
        "startTime-endTime": "938.7-942.54",
        "text": "So whisky and papers together so we can use together. You can...",
        "speaker": "D",
        "reply_to_id": "-"
    },
    {
        "id": 308,
        "startTime-endTime": "950.6-952.0",
        "text": "So I give you...",
        "speaker": "C",
        "reply_to_id": "-"
    },
    {
        "id": 309,
        "startTime-endTime": "962.3-962.68",
        "text": "Okay.",
        "speaker": "B",
        "reply_to_id": "307"
    },
    {
        "id": 310,
        "startTime-endTime": "985.7-989.99",
        "text": "I think it's the- at least one other person we have to .",
        "speaker": "D",
        "reply_to_id": "-"
    },
    {
        "id": 311,
        "startTime-endTime": "989.8-993.96",
        "text": "Yeah but I asked them and they told me I could leave early.",
        "speaker": "B",
        "reply_to_id": "310"
    },
    {
        "id": 312,
        "startTime-endTime": "991.1-991.43",
        "text": "Okay.",
        "speaker": "D",
        "reply_to_id": "311"
    }
]

  // var Slice = 60
  var Slice = 50
  const Adata = []
  const Adata1 = []
  let start = 0
  let start1 = 0
  // let end = 60
  let end = 50
  let circle_id = 0
  let temp = true
  let circle = {
      circle_id: 0,
      start: 0,
      end: Slice,
      agenda: [],
      wordTotal: [{"id": "A","value": 0},{"id": "B","value": 0},{"id": "C","value": 0},{"id": "D","value": 0}],
      A: [{"id": "0","value": 0},{"id": "1","value": 0},{"id": "2","value": 0},{"id": "3","value": 0},{"id": "-","value": 0}],
      B: [{"id": "0","value": 0},{"id": "1","value": 0},{"id": "2","value": 0},{"id": "3","value": 0},{"id": "-","value": 0}],
      C: [{"id": "0","value": 0},{"id": "1","value": 0},{"id": "2","value": 0},{"id": "3","value": 0},{"id": "-","value": 0}],
      D: [{"id": "0","value": 0},{"id": "1","value": 0},{"id": "2","value": 0},{"id": "3","value": 0},{"id": "-","value": 0}],
      reply: [],
  }

  let circle1 = {
    start: 0,
    reply: [{ "id": "A", "value": 0 }, { "id": "B", "value": 0 }, { "id": "C", "value": 0 }, { "id": "D", "value": 0 }],
    Areply: [{ "id": "0", "value": 0 }, { "id": "1", "value": 0 }, { "id": "2", "value": 0 }],
    Breply: [{ "id": "0", "value": 0 }, { "id": "1", "value": 0 }, { "id": "2", "value": 0 }],
    Creply: [{ "id": "0", "value": 0 }, { "id": "1", "value": 0 }, { "id": "2", "value": 0 }],
    Dreply: [{"id": "0","value": 0},{"id": "1","value": 0},{"id": "2","value": 0}],
  }

  for (var i = 0; i < Rdata.length; i++){
    var tem = Rdata[i]["startTime-endTime"].split('-')[0]
    var wordsL = Rdata[i].text.split(" ").length
    if (tem < start1 + Slice) {
      circle1.start = start1

      if (Rdata[i].reply_to_id != '-') {
        // A回复他人
        if (Rdata[i].speaker == 'A' && Rdata[Rdata[i].reply_to_id].speaker == 'B') {
          circle1.Areply[0].value += wordsL
        }
        if (Rdata[i].speaker == 'A' && Rdata[Rdata[i].reply_to_id].speaker == 'C') {
          circle1.Areply[1].value += wordsL
        }
        if (Rdata[i].speaker == 'A' && Rdata[Rdata[i].reply_to_id].speaker == 'D') {
          circle1.Areply[2].value += wordsL
        }

        // B回复他人
        if (Rdata[i].speaker == 'B' && Rdata[Rdata[i].reply_to_id].speaker == 'A') {
          circle1.Breply[0].value += wordsL
        }
        if (Rdata[i].speaker == 'B' && Rdata[Rdata[i].reply_to_id].speaker == 'C') {
          circle1.Breply[1].value += wordsL
        }
        if (Rdata[i].speaker == 'B' && Rdata[Rdata[i].reply_to_id].speaker == 'D') {
          circle1.Breply[2].value += wordsL
        }

        // C回复他人
        if (Rdata[i].speaker == 'C' && Rdata[Rdata[i].reply_to_id].speaker == 'A') {
          circle1.Creply[0].value += wordsL
        }
        if (Rdata[i].speaker == 'C' && Rdata[Rdata[i].reply_to_id].speaker == 'B') {
          circle1.Creply[1].value += wordsL
        }
        if (Rdata[i].speaker == 'C' && Rdata[Rdata[i].reply_to_id].speaker == 'D') {
          circle1.Creply[2].value += wordsL
        }

          // D回复他人
        if (Rdata[i].speaker == 'D' && Rdata[Rdata[i].reply_to_id].speaker == 'A') {
        circle1.Dreply[0].value += wordsL
        }
        if (Rdata[i].speaker == 'D' && Rdata[Rdata[i].reply_to_id].speaker == 'B') {
          circle1.Dreply[1].value += wordsL
        }
        if (Rdata[i].speaker == 'D' && Rdata[Rdata[i].reply_to_id].speaker == 'C') {
          circle1.Dreply[2].value += wordsL
        }
      }

      // 回复总数
      if (Rdata[i].speaker == 'A' && Rdata[i].reply_to_id != '-') {
        circle1.reply[0].value += wordsL
      }
      if (Rdata[i].speaker == 'B' && Rdata[i].reply_to_id != '-') {
        circle1.reply[1].value += wordsL
      }
      if (Rdata[i].speaker == 'C' && Rdata[i].reply_to_id != '-') {
        circle1.reply[2].value += wordsL
      }
      if (Rdata[i].speaker == 'D' && Rdata[i].reply_to_id != '-') {
        circle1.reply[3].value += wordsL
      }

      if (i == Rdata.length - 1) {
        Adata1.push(circle1)
      }
    }
    else {
      Adata1.push(circle1)
      start1 += Slice
      // 重置
      circle1 = {
        start: 0,
        reply: [{"id": "A","value": 0},{"id": "B","value": 0},{"id": "C","value": 0},{"id": "D","value": 0}],
        Areply: [{ "id": "0", "value": 0 }, { "id": "1", "value": 0 }, { "id": "2", "value": 0 }],
        Breply: [{ "id": "0", "value": 0 }, { "id": "1", "value": 0 }, { "id": "2", "value": 0 }],
        Creply: [{ "id": "0", "value": 0 }, { "id": "1", "value": 0 }, { "id": "2", "value": 0 }],
        Dreply: [{"id": "0","value": 0},{"id": "1","value": 0},{"id": "2","value": 0}],
      }

      if (Rdata[i].reply_to_id != '-') {
        // A回复他人
        if (Rdata[i].speaker == 'A' && Rdata[Rdata[i].reply_to_id].speaker == 'B') {
          circle1.Areply[0].value += wordsL
        }
        if (Rdata[i].speaker == 'A' && Rdata[Rdata[i].reply_to_id].speaker == 'C') {
          circle1.Areply[1].value += wordsL
        }
        if (Rdata[i].speaker == 'A' && Rdata[Rdata[i].reply_to_id].speaker == 'D') {
          circle1.Areply[2].value += wordsL
        }

        // B回复他人
        if (Rdata[i].speaker == 'B' && Rdata[Rdata[i].reply_to_id].speaker == 'A') {
          circle1.Breply[0].value += wordsL
        }
        if (Rdata[i].speaker == 'B' && Rdata[Rdata[i].reply_to_id].speaker == 'C') {
          circle1.Breply[1].value += wordsL
        }
        if (Rdata[i].speaker == 'B' && Rdata[Rdata[i].reply_to_id].speaker == 'D') {
          circle1.Breply[2].value += wordsL
        }

        // C回复他人
        if (Rdata[i].speaker == 'C' && Rdata[Rdata[i].reply_to_id].speaker == 'A') {
          circle1.Creply[0].value += wordsL
        }
        if (Rdata[i].speaker == 'C' && Rdata[Rdata[i].reply_to_id].speaker == 'B') {
          circle1.Creply[1].value += wordsL
        }
        if (Rdata[i].speaker == 'C' && Rdata[Rdata[i].reply_to_id].speaker == 'D') {
          circle1.Creply[2].value += wordsL
        }

          // D回复他人
        if (Rdata[i].speaker == 'D' && Rdata[Rdata[i].reply_to_id].speaker == 'A') {
        circle1.Dreply[0].value += wordsL
        }
        if (Rdata[i].speaker == 'D' && Rdata[Rdata[i].reply_to_id].speaker == 'B') {
          circle1.Dreply[1].value += wordsL
        }
        if (Rdata[i].speaker == 'D' && Rdata[Rdata[i].reply_to_id].speaker == 'C') {
          circle1.Dreply[2].value += wordsL
        }
      }

      // 回复总数
      if (Rdata[i].speaker == 'A' && Rdata[i].reply_to_id != '-') {
        circle1.reply[0].value += wordsL
      }
      if (Rdata[i].speaker == 'B' && Rdata[i].reply_to_id != '-') {
        circle1.reply[1].value += wordsL
      }
      if (Rdata[i].speaker == 'C' && Rdata[i].reply_to_id != '-') {
        circle1.reply[2].value += wordsL
      }
      if (Rdata[i].speaker == 'D' && Rdata[i].reply_to_id != '-') {
        circle1.reply[3].value += wordsL
      }
    }
    
  }

  for (var i = 0; i < data.length; i++){
    var wordsL = data[i].text.split(" ").length
    if (data[i].startTime < start + Slice) {
      circle.circle_id = circle_id
      circle.start = start
      circle.end = end

      // 单词量
      if (data[i].role == 'A') {
        circle.wordTotal[0].value += wordsL
      }
      if (data[i].role == 'B' ) {
        circle.wordTotal[1].value += wordsL
      }
      if (data[i].role == 'C') {
        circle.wordTotal[2].value += wordsL
      }
      if (data[i].role == 'D' ) {
        circle.wordTotal[3].value += wordsL
      }
      

      if (data[i].role == 'A' && data[i].agenda == '0') {
        circle.A[0].value += wordsL
      }
      if (data[i].role == 'A' && data[i].agenda == '1') {
        circle.A[1].value += wordsL
      }
      if (data[i].role == 'A' && data[i].agenda == '2') {
        circle.A[2].value += wordsL
      }
      if (data[i].role == 'A' && data[i].agenda == '3') {
        circle.A[3].value += wordsL
      }
      if (data[i].role == 'A' && data[i].agenda == '-') {
        circle.A[4].value += wordsL
      }

      // B
      if (data[i].role == 'B' && data[i].agenda == '0') {
        circle.B[0].value += wordsL
      }
      if (data[i].role == 'B' && data[i].agenda == '1') {
        circle.B[1].value += wordsL
      }
      if (data[i].role == 'B' && data[i].agenda == '2') {
        circle.B[2].value += wordsL
      }
      if (data[i].role == 'B' && data[i].agenda == '3') {
        circle.B[3].value += wordsL
      }
      if (data[i].role == 'B' && data[i].agenda == '-') {
        circle.B[4].value += wordsL
      }

      // C
      if (data[i].role == 'C' && data[i].agenda == '0') {
        circle.C[0].value += wordsL
      }
      if (data[i].role == 'C' && data[i].agenda == '1') {
        circle.C[1].value += wordsL
      }
      if (data[i].role == 'C' && data[i].agenda == '2') {
        circle.C[2].value += wordsL
      }
      if (data[i].role == 'C' && data[i].agenda == '3') {
        circle.C[3].value += wordsL
      }
      if (data[i].role == 'C' && data[i].agenda == '-') {
        circle.C[4].value += wordsL
      }
      // D

      if (data[i].role == 'D' && data[i].agenda == '0') {
        circle.D[0].value += wordsL
      }
      if (data[i].role == 'D' && data[i].agenda == '1') {
        circle.D[1].value += wordsL
      }
      if (data[i].role == 'D' && data[i].agenda == '2') {
        circle.D[2].value += wordsL
      }
      if (data[i].role == 'D' && data[i].agenda == '3') {
        circle.D[3].value += wordsL
      }
      if (data[i].role == 'D' && data[i].agenda == '-') {
        circle.D[4].value += wordsL
      }

      // 最后一个
      if (i == data.length - 1) {
          // 对齐供后面半径调整
      let TA = { Total: {} }
      let TB = { Total: {} }
      let TC = { Total: {} }
      let TD = { Total: {} }
      TA.Total = circle.wordTotal[0].value
      TB.Total = circle.wordTotal[1].value
      TC.Total = circle.wordTotal[2].value
      TD.Total = circle.wordTotal[3].value
      Object.assign(circle.A[0], TA)
      Object.assign(circle.A[1], TA)
      Object.assign(circle.A[2], TA)
      Object.assign(circle.A[3], TA)
      Object.assign(circle.A[4], TA)
      Object.assign(circle.B[0], TB)
      Object.assign(circle.B[1], TB)
      Object.assign(circle.B[2], TB)
      Object.assign(circle.B[3], TB)
      Object.assign(circle.B[4], TB)
      Object.assign(circle.C[0], TC)
      Object.assign(circle.C[1], TC)
      Object.assign(circle.C[2], TC)
      Object.assign(circle.C[3], TC)
      Object.assign(circle.C[4], TC)
      Object.assign(circle.D[0], TD)
      Object.assign(circle.D[1], TD)
      Object.assign(circle.D[2], TD)
      Object.assign(circle.D[3], TD)
      Object.assign(circle.D[4], TD)
        Adata.push(circle)
      }
      
    }
    else {
      // 对齐供后面半径调整
      let TA = { Total: {} }
      let TB = { Total: {} }
      let TC = { Total: {} }
      let TD = { Total: {} }
      TA.Total = circle.wordTotal[0].value
      TB.Total = circle.wordTotal[1].value
      TC.Total = circle.wordTotal[2].value
      TD.Total = circle.wordTotal[3].value
      Object.assign(circle.A[0], TA)
      Object.assign(circle.A[1], TA)
      Object.assign(circle.A[2], TA)
      Object.assign(circle.A[3], TA)
      Object.assign(circle.A[4], TA)
      Object.assign(circle.B[0], TB)
      Object.assign(circle.B[1], TB)
      Object.assign(circle.B[2], TB)
      Object.assign(circle.B[3], TB)
      Object.assign(circle.B[4], TB)
      Object.assign(circle.C[0], TC)
      Object.assign(circle.C[1], TC)
      Object.assign(circle.C[2], TC)
      Object.assign(circle.C[3], TC)
      Object.assign(circle.C[4], TC)
      Object.assign(circle.D[0], TD)
      Object.assign(circle.D[1], TD)
      Object.assign(circle.D[2], TD)
      Object.assign(circle.D[3], TD)
      Object.assign(circle.D[4], TD)

      Adata.push(circle)
      circle_id += 1
      start += Slice
      end += Slice
      // 重置
      circle = {
        circle_id,
        start: 0,
        end: Slice,
        agenda: [],
        wordTotal: [{"id": "A","value": 0},{"id": "B","value": 0},{"id": "C","value": 0},{"id": "D","value": 0}],
        A: [{"id": "0","value": 0},{"id": "1","value": 0},{"id": "2","value": 0},{"id": "3","value": 0},{"id": "-","value": 0}],
        B: [{"id": "0","value": 0},{"id": "1","value": 0},{"id": "2","value": 0},{"id": "3","value": 0},{"id": "-","value": 0}],
        C: [{"id": "0","value": 0},{"id": "1","value": 0},{"id": "2","value": 0},{"id": "3","value": 0},{"id": "-","value": 0}],
        D: [{"id": "0","value": 0},{"id": "1","value": 0},{"id": "2","value": 0},{"id": "3","value": 0},{"id": "-","value": 0}],
        reply: [],
      }

      circle.circle_id = circle_id
      circle.start = start
      circle.end = end

       // 单词量
       if (data[i].role == 'A') {
        circle.wordTotal[0].value += wordsL
      }
      if (data[i].role == 'B' ) {
        circle.wordTotal[1].value += wordsL
      }
      if (data[i].role == 'C') {
        circle.wordTotal[2].value += wordsL
      }
      if (data[i].role == 'D' ) {
        circle.wordTotal[3].value += wordsL
      }

      if (data[i].role == 'A' && data[i].agenda == '0') {
        circle.A[0].value += wordsL
      }
      if (data[i].role == 'A' && data[i].agenda == '1') {
        circle.A[1].value += wordsL
      }
      if (data[i].role == 'A' && data[i].agenda == '2') {
        circle.A[2].value += wordsL
      }
      if (data[i].role == 'A' && data[i].agenda == '3') {
        circle.A[3].value += wordsL
      }
      if (data[i].role == 'A' && data[i].agenda == '-') {
        circle.A[4].value += wordsL
      }

      // B
      if (data[i].role == 'B' && data[i].agenda == '0') {
        circle.B[0].value += wordsL
      }
      if (data[i].role == 'B' && data[i].agenda == '1') {
        circle.B[1].value += wordsL
      }
      if (data[i].role == 'B' && data[i].agenda == '2') {
        circle.B[2].value += wordsL
      }
      if (data[i].role == 'B' && data[i].agenda == '3') {
        circle.B[3].value += wordsL
      }
      if (data[i].role == 'B' && data[i].agenda == '-') {
        circle.B[4].value += wordsL
      }

      // C
      if (data[i].role == 'C' && data[i].agenda == '0') {
        circle.C[0].value += wordsL
      }
      if (data[i].role == 'C' && data[i].agenda == '1') {
        circle.C[1].value += wordsL
      }
      if (data[i].role == 'C' && data[i].agenda == '2') {
        circle.C[2].value += wordsL
      }
      if (data[i].role == 'C' && data[i].agenda == '3') {
        circle.C[3].value += wordsL
      }
      if (data[i].role == 'C' && data[i].agenda == '-') {
        circle.C[4].value += wordsL
      }
      // D

      if (data[i].role == 'D' && data[i].agenda == '0') {
        circle.D[0].value += wordsL
      }
      if (data[i].role == 'D' && data[i].agenda == '1') {
        circle.D[1].value += wordsL
      }
      if (data[i].role == 'D' && data[i].agenda == '2') {
        circle.D[2].value += wordsL
      }
      if (data[i].role == 'D' && data[i].agenda == '3') {
        circle.D[3].value += wordsL
      }
      if (data[i].role == 'D' && data[i].agenda == '-') {
        circle.D[4].value += wordsL
      }
    }
  }

  console.log(Adata, Adata1)

  for (var item = 0; item < Adata.length; item++){
    let obj = { Interaction: [] }
    // let obj1 = {WordNum: []}
    obj.Interaction = Adata1[item].reply
    // obj1.WordNum = TeamCircle[item].WordNum
    // Object.assign(Adata[item], obj,obj1)

    let ojbA = { RA: [] }
    let ojbB = { RB: [] }
    let ojbC = { RC: [] }
    let ojbD = { RD: [] }
    
    ojbA.RA = Adata1[item].Areply
    ojbB.RB = Adata1[item].Breply
    ojbC.RC = Adata1[item].Creply
    ojbD.RD = Adata1[item].Dreply

    Object.assign(Adata[item], obj,ojbA,ojbB,ojbC,ojbD)
  }

  console.log(Adata)

 
  
}

export { dataProcess }

