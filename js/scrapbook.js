//
// /////////////////////////Hyper Transcript end /////////////////////
// /**
// scapbook.js contains popcorn js instance
// */
// // Create a popcporn instance by calling Popcorn("#id-of-my-video")
// var pop = Popcorn("#mainVideo", {pauseOnLinkClicked: true});
// // // 1 NY Blockbuster article
// // pop.timeline({
// //     start: 689,
// //     target: "timeline",
// //     title: "<span  onclick='takeVideoToTc(689)'>“warentless wiretapping”</span>",
// //     text: "2005 Dec James",
// //     innerHTML: "<a href='http://www.nytimes.com/2005/12/16/politics/bush-lets-us-spy-on-callers-without-courts.html' target='_blank'>NY times article</a>",
// //     direction: "down"
// // });
// // // class='fancybox fancybox.iframe'
// // //2 James NY
// pop.tagthisperson({
//     start: 689,
//     //end: 5,
//     person: "James Risen - Journalist",
//     image: "http://i.huffpost.com/gen/1967371/images/o-JAMES-RISEN-facebook.jpg",
//     href: "https://en.wikipedia.org/wiki/James_Risen" ,
//     target: "people"
// });
// // //3 CNN
// // pop.timeline({
// //     start: 723,
// //     target: "timeline",
// //     title: "<span  onclick='takeVideoToTc(723)'>National security leak investigation</span>",
// //     text: "Dec 30th",
// //     innerHTML: "<a  href='http://edition.cnn.com/2005/POLITICS/12/30/nsa.leak/index.html' target='_blank'>CNN</a>",
// //     direction: "down"
// // });
// // //4 Washington Post
// // pop.timeline({
// //     start: 723,
// //     target: "timeline",
// //     title: "<span  onclick='takeVideoToTc(723)'>National security leak investigation</span>",
// //     text: "Dec 30th",
// //     innerHTML: "<a href='http://www.washingtonpost.com/wp-dyn/content/article/2005/12/30/AR2005123000538.html' target='_blank'>CNN</button>",
// //     direction: "down"
// // });
//
// /* derived values from tabletop - live*/
//
//
//   window.onload = function() { init() };
//
//   var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1b1L7D-CvtuUnQaAsJqaiwW9M1o7a26zK7jBQaKA207o/pubhtml';
//
//   function init() {
//     Tabletop.init( { key: public_spreadsheet_url,
//                      callback: showInfo,
//                      simpleSheet: true } );
//   }
//
//
//   function showInfo(data, tabletop) {
//       console.log("Successfully processed!");
//     console.log(data);
//     console.log(data.length);
//
// var timelineElements=[];
//     for (var i=0; i<data.length; i++){
//
//             var start = data[i].start;
//             var title = data[i].title;
//             var text = data[i].text;
//             var innerHTML = data[i].innerHTML;
//             var link = data[i].link;
//               // console.log("start"+start);
//               // console.log("title"+title);
//               // console.log("text"+text);
//               // console.log("innerHTML"+innerHTML);
//               // console.log("link"+link);
//
//     var timeline={};
//     timeline.start = data[i].start;
//     timeline.target= "timeline";
//     timeline.title="<span  onclick='takeVideoToTc("+start+")'>"+title+"</span>";
//     timeline.text= text;
//     timeline.innerHTML= "<a href='"+link+"' target='_blank'>"+innerHTML+"</a>";
//     timeline.direction = "down";
//     console.log(JSON.stringify(timeline));
//
//
// // var str = ["I'm only", age, "years old"].join(" ");
//
//               // document.write(timeline+"\n");
//
//     }
//     console.log(timelineElements.join("\n"));
//   }
//
//
//
//
// //method to take the viewer back to part of the video where the source is being shown
// function takeVideoToTc(tc){
//   video.currentTime = tc;
//   video.play();
//
// }
//
// function openPage(url){
//     window.open(url);
// }
//
//
// // 001203_1a_Justice Dept. Investigating Leak of NSA Wiretapping.pdf
// // 001203_2_How Jeffrey Sterling Took on the CIA — and Lost Everything.pdf
// // 001203_2a_How the NSA Started Investigating the New York Times' Warrantless Wiretapping Story.pdf
// // 001203_3_C.I.A. Officer Is Found Guilty in Leak Tied to Times Reporter - The New York Times.pdf
// // 001244_1_How Laura Poitras Helped Snowden Spill His Secrets - NYTimes.com.pdf
// // 001244_2_Snowden/ NSA targeted journalists critical of government after 9/11 | TheHill.pdf
// // 001244_3_Surveillance is Hurting Journalists and Defense Attorneys, Report Says.pdf
// // 001324_1_Journey into cryptography | Computer science | Khan Academy.pdf
// // 001415_Public interest - Wikipedia, the free encyclopedia.pdf
// // 001428_1_Whistleblower Protection Enhancement Act (WPEA) | GAP.pdf
// // 001428_2_Whistleblower Protection Information.pdf
// // 001455_1_Management shortcomings seen at NSA - baltimoresun.com.pdf
// // 001455_2_Management shortcomings seen at NSA - Page 2 - baltimoresun.com.pdf
// // 001455_3_NSA to defend against hackers - Baltimore Sun.pdf
// // 001455_4_NSA to defend against hackers - Page 2 - Baltimore Sun.pdf
//
//
//
// // 764
// // 00:12:44:00
// // NSA program spying on journalists and reporters
// //
//
// //804
// // 00:13:24:00
// // encryption
// //
// // 840
// // 00:14:00:00
// // Admin policy (unauthorised contact with press
// //
//
// //855
// // 00:14:15:00
// // public interest
// //
// //868
// // 00:14:28:00
// // Waste fraud and abuse
// //
// //895
// // 00:14:55:00
// // shared info with reporter
// //
//
// //896
// // 00:14:56:00
// // End clip
//
//
//
//
//
//
// // play the video right away
// //pop.play(689);
// video.currentTime =689;
// //video.play();
