

// fetch('./treedata.json')
// .then(function(resp){
//     return resp.json();
// })
// .then(function(data){
//     console.log("Test")
//    parentFunction(data);
// });

// function parentFunction(jsondata){


// console.log("the data is")
// console.log(jsondata)


// let mouseX = 0;
// //these global variables I should later get via closure
// let buttonTracker = [];
// let rootNode = d3.hierarchy(jsondata, d=>d.children);
// var pathLinks = rootNode.links(); 
// var updatePathLinks;

// var circleLinks = rootNode.descendants();
// var updateCircleLinks;

// var textLinks = rootNode.descendants();
// var updateTextLinks;


// let dim = {
//     'width': window.screen.width, 
//     'height':window.screen.height * 7   , 
//     'margin':50    
// };

// let svg = d3.select('#chart').append('svg')
//      .style('background', 'black')   
//      .attrs(dim);


// document.querySelector("#chart").classList.add("center");

// //let rootNode = d3.hierarchy(data);
// //added
// const searchInput = document.querySelector('#searchInput');

// searchInput.addEventListener('input', function () {
//   updateCircles(circleLinks);
//   updateText(textLinks);
// });
// //added



// let g = svg.append('g')
//             .attr('transform', 'translate(140,50)');

//     let layout = d3.tree().size([dim.height-50, dim.width-320]);

//     layout(rootNode);
//     console.log(rootNode.links());
//     console.log("----------------------");
//     console.log(rootNode.descendants());
//     //console.log(rootNode.descendants());
//    //first lets create a path 
//    let lines = g.selectAll('path');  



// function update(data){

// let group =  g.selectAll('path')
//     .data(data, (d,i) => d.target.data.name)
//     .join(
//     function(enter){
//         return enter.append('path')
//                     .attrs({
//                         'd': d3.linkHorizontal()
//                         .x(d => mouseX)
//                          .y(d => d.x),
//                      'fill':'none',
//                      'stroke':'white'
//                     })
//     },
//     function(update){
//         return update;
//     },
//     function(exit){
 


//         return exit.call(path => path.transition().duration(300).remove()
//                                                 .attr('d', d3.linkHorizontal()
//                                                               .x(d => mouseX)
//                                                               .y(d =>d.x)));
//     }


// )
// .call(path => path.transition().duration(1000).attr('d', d3.linkHorizontal()
//         .x(d => d.y)
//          .y(d => d.x))
//          .attr("id", function(d,i){return "path"+i}));


// }
// update(pathLinks); //rootNode.links()

// //asddddd///;;.;.;..;.;;.
// function updateCircles(data) {
//     g.selectAll('circle')
//       .data(data, (d) => d.data.name)
//       .join(
//         function (enter) {
//           return enter
//             .append('circle')
//             .attrs({
//               'cx': (d) => mouseX,
//               'cy': (d) => d.x,
//               'r': 12,
//               'fill': (d) => {
//                 if (d.children == undefined) {
//                   return 'red';
//                 }
//                 return 'green';
//               },
//               'id': (d, i) => d.data.name,
//               'class': 'sel'
//             });
//         },
//         function (update) {
//           return update;
//         },
//         function (exit) {
//           return exit
//             .call((path) =>
//               path
//                 .transition()
//                 .duration(300)
//                 .remove()
//                 .attrs({
//                   'cx': (d) => mouseX,
//                   'r': (d) => 0
//                 })
//             );
//         }
//       )
//       .call((circle) =>
//         circle
//           .transition()
//           .duration(1000)
//           .attr('cx', (d) => d.y))
//       .on('mouseover', function (d) {
//         d3.select(this)
//           .attrs({
//             'fill': 'orange'
//           })
//           .transition()
//           .duration(100)
//           .attr('r', 16);
//       })
//       .on('mouseout', function (d) {
//         d3.select(this)
//           .attr('fill', (d) => {
//             if (d.children == undefined) {
//               return 'red';
//             }
//             return 'green';
//           })
//           .transition()
//           .duration(100)
//           .attr('r', 12);
//       })
//       .on('click', async function (d) {
//         let buttonId = d3.select(this)['_groups'][0][0]['attributes'].id.value;
//         mouseX = d3.select(this)['_groups'][0][0]['attributes'].cx.value;
  
//         // Rest of the code for handling the button click goes here...
        
//       });
//       // Add an event listener to the search input field
// document.getElementById('searchInput').addEventListener('input', function (event) {
//     const searchQuery = event.target.value.toLowerCase();
//     const filteredNodes = filterNodes(rootNode, searchQuery);
//     updatePathLinks = rootNode.links().filter((link) => filteredNodes.includes(link.target));
//     updateCircleLinks = rootNode.descendants().filter((node) => filteredNodes.includes(node));
//     updateTextLinks = rootNode.descendants().filter((node) => filteredNodes.includes(node));
//     update(updatePathLinks);
//     updateCircles(updateCircleLinks);
//     updateText(updateTextLinks);
//   });
  
//   // Function to filter the nodes based on search query
//   function filterNodes(node, searchQuery) {
//     const filteredNodes = [];
//     if (node.data.name.toLowerCase().includes(searchQuery)) {
//       filteredNodes.push(node);
//     }
//     if (node.children) {
//       node.children.forEach((child) => {
//         filteredNodes.push(...filterNodes(child, searchQuery));
//       });
//     }
//     return filteredNodes;
//   }
  
//   }
  
  

// function updateCircles(data){
//     g.selectAll('circle')
//     .data(data, (d) => d.data.name)
//     .join(
//         function(enter){
//             return enter.append('circle')
//                         .attrs({
//                             'cx':(d)=> mouseX,
//                             'cy':(d) => d.x,
//                             'r':12,
//                             'fill':(d) => {
//                                 if(d.children == undefined){
//                                     return 'red'
//                                 }
//                                 return 'green'
//                             },
//                             'id': (d,i) =>d.data.name,
//                             'class':'sel'                           
//                         })
//         },
//         function(update){
//             return update;
//         },
//         function(exit){

//             return exit.call(path => path.transition().duration(300).remove()
//             .attrs({
//                 'cx':(d) =>mouseX,
//                 'r':(d) => 0
//             }));

//         }


//     )
//     .call(circle => circle.transition().duration(1000).attr('cx', (d)=>d.y))

//     .on('mouseover', function(d){

//        d3.select(this)
//            .attrs({                
//                'fill':'orange',

//            })
//            .transition().duration(100).attr('r', 16);
//     })
//     .on('mouseout', function(d){
//        d3.select(this)
//            .attr('fill', (d)=>{
//                 if(d.children ==undefined){
//                     return 'red'
//                 }
//                 return 'green'
//            })
//            .transition().duration(100).attr('r', 12)

//     })
//     .on('click', async function(d){

//            let buttonId = d3.select(this)["_groups"][0][0]["attributes"].id.value;
//            mouseX = d3.select(this)["_groups"][0][0]["attributes"].cx.value;
//            //check to see if button already exists aka has been clicked
//            //if it does, we need to send that data to update function
//            //and remove that object

//            let checkButtonExists = buttonTracker.filter(button => button.buttonId == buttonId);
 
//            if(checkButtonExists[0]!=undefined){
//                 //also remove this item from button tracker
//                buttonTracker = buttonTracker.filter(button => button.buttonId != buttonId);
               
//                //handle path update
//                pathLinks = checkButtonExists[0].buttonPathData.concat(pathLinks);
                              
//                update(pathLinks);


//                 //handle  circle update
//                circleLinks = checkButtonExists[0].buttonCircleData.concat(circleLinks);
//                  updateCircles(circleLinks);

//                  //handle text update

//                 textLinks =checkButtonExists[0].buttonTextData.concat(textLinks);
//                 updateText(textLinks);

//                 return;

//            }
//            //added
//            const searchQuery = document.querySelector('#searchInput').value.toLowerCase();

//   g.selectAll('circle')
//     .data(data.filter(d => d.data.name.toLowerCase().includes(searchQuery)), (d) => d.data.name)
//            //added//
//            var valueArray = await processedlinks(d.links());   

//            updatePathLinks = pathLinks.filter(function(item){        
//                    return !valueArray.includes(item.target.data.name);                                       
//            });

//            //now run the filter to get unfiltered items
//            var clickedPathData = pathLinks.filter(function(item){
//             return valueArray.includes(item.target.data.name);
//             });


//            updateCircleLinks = circleLinks.filter(function(item){
//                     return !valueArray.includes(item.data.name);
//            });

//            var clickedCircleData = circleLinks.filter(function(item){
//                     return valueArray.includes(item.data.name);
//            });
        
        
//            updateTextLinks = textLinks.filter(function(item){
//                     return !valueArray.includes(item.data.name);
//            });

//            var clickedTextData = textLinks.filter(function(item){
//                     return valueArray.includes(item.data.name);
//            });

//            //now we push the circleData to an array
//            buttonTracker.push({
//                buttonId:buttonId,
//                buttonPathData: clickedPathData,
//                buttonCircleData:clickedCircleData,
//                buttonTextData:clickedTextData
//            })

           
//            update(updatePathLinks);
//            updateCircles(updateCircleLinks);
//            updateText(updateTextLinks);
//           async function processedlinks(dlinks) {
//            var valueArray = [];
    
//                return new Promise((resolve, reject)=>{
//                      dlinks.forEach(async(element) =>{
//                           valueArray.push(element.target.data.name); 
//                      });
//                      resolve(valueArray);      
//                });
//            }

//            pathLinks = updatePathLinks;
//            circleLinks = updateCircleLinks;
//            textLinks = updateTextLinks;

//     });


// }

// updateCircles(rootNode.descendants());
 
// //asdfasdfasdfasdfasdfasdf

// function updateText(data) {
//     g.selectAll('text')
//       .data(data, (d) => d.data.name)
//       .join(
//         function (enter) {
//           return enter
//             .append('text')
//             .attrs({
//               'x': (d) => mouseX,
//               'y': (d) => d.x,
//               'font-size': 0
//             })
//             .text((d) => d.data.name);
//         },
//         function (update) {
//           return update;
//         },
//         function (exit) {
//           return exit
//             .call((text) =>
//               text
//                 .transition()
//                 .duration(300)
//                 .remove()
//                 .attrs({
//                   'x': (d) => mouseX,
//                   'font-size': 0
//                 })
//             );
//         }
//       )
//       .call((text) =>
//         text
//           .transition()
//           .duration(1000)
//           .attrs({
//             'x': (d) => d.y + 20,
//             'font-size': 15,
//             'fill': 'yellow'
//           })
//       );
//   }
  
// function updateText(data){

//     g.selectAll('text')
//       .data(data, (d) =>d.data.name)
//       .join(
//         function(enter){
//             return enter.append('text')
//                         .attrs({
//                             'x': (d) =>mouseX,
//                             'y':(d) => d.x,
//                             'font-size':0
//                         })
//                         .text((d) => d.data.name);
//         },
//         function(update){
//             return update;
//         },
//         function(exit){
//                 return exit.call(text => text.transition().duration(300).remove().attrs({
//                        'x':(d) => mouseX,
//                        'font-size':0 
//                 }));   
//         }
//         //added
//         const searchQuery = document.querySelector('#searchInput').value.toLowerCase();

//   g.selectAll('text')
//     .data(data.filter(d => d.data.name.toLowerCase().includes(searchQuery)), (d) => d.data.name)
//         //added//
//       )
//       .call(text => text.transition().duration(1000).attrs({
//           'x':(d) =>d.y+20,
//           'font-size':15,
//           'fill':'yellow',
//         }));
// }

// updateText(textLinks);

// }









// fetch('./treedata.json')
//   .then(function (resp) {
//     return resp.json();
//   })
//   .then(function (data) {
//     parentFunction(data);
//   });

// function parentFunction(jsondata) {
//   let mouseX = 0;
//   let buttonTracker = [];
//   let rootNode = d3.hierarchy(jsondata, (d) => d.children);
//   let pathLinks = rootNode.links();
//   let updatePathLinks;
//   let circleLinks = rootNode.descendants();
//   let updateCircleLinks;
//   let textLinks = rootNode.descendants();
//   let updateTextLinks;

//   let dim = {
//     width: window.innerWidth,
//     height: window.innerHeight * 0.7,
//     margin: 50,
//   };

//   let svg = d3
//     .select('#chart')
//     .append('svg')
//     .style('background', 'black')
//     .attrs(dim);

//   document.querySelector('#chart').classList.add('center');

//   let g = svg.append('g').attr('transform', 'translate(140,50)');
//   let layout = d3.tree().size([dim.height - 50, dim.width - 320]).separation((a, b) => (a.parent == b.parent ? 1 : 10) / a.depth);

// //   let layout = d3.tree().size([dim.height - 50, dim.width - 320]);
//   layout(rootNode);

//   let lines = g.selectAll('path');

//   function update(data) {
//     let group = g
//       .selectAll('path')
//       .data(data, (d, i) => d.target.data.name)
//       .join(
//         function (enter) {
//           return enter
//             .append('path')
//             .attrs({
//               d: d3
//                 .linkHorizontal()
//                 .x((d) => mouseX)
//                 .y((d) => d.x),
//               fill: 'none',
//               stroke: 'white',
//             });
//         },
//         function (update) {
//           return update;
//         },
//         function (exit) {
//           return exit
//             .call((path) =>
//               path
//                 .transition()
//                 .duration(300)
//                 .remove()
//                 .attr('d', d3.linkHorizontal().x((d) => mouseX).y((d) => d.x))
//             );
//         }
//       )
//       .call((path) =>
//         path
//           .transition()
//           .duration(1000)
//           .attr('d', d3.linkHorizontal().x((d) => d.y).y((d) => d.x))
//           .attr('id', function (d, i) {
//             return 'path' + i;
//           })
//       );
//   }

//   update(pathLinks);

//   function updateCircles(data) {
//     g.selectAll('circle')
//       .data(data, (d) => d.data.name)
//       .join(
//         function (enter) {
//           return enter
//             .append('circle')
//             .attrs({
//               cx: (d) => mouseX,
//               cy: (d) => d.x,
//               r: 12,
//               fill: (d) => (d.children == undefined ? 'red' : 'green'),
//               id: (d, i) => d.data.name,
//               class: 'sel',
//             });
//         },
//         function (update) {
//           return update;
//         },
//         function (exit) {
//           return exit.call((circle) =>
//             circle
//               .transition()
//               .duration(300)
//               .remove()
//               .attrs({
//                 cx: (d) => mouseX,
//                 r: (d) => 0,
//               })
//           );
//         }
//       )
//       .call((circle) =>
//         circle
//           .transition()
//           .duration(1000)
//           .attr('cx', (d) => d.y)
//       )
//       .on('mouseover', function (d) {        d3.select(this)
//         .attrs({
//           fill: 'orange',
//         })
//         .transition()
//         .duration(100)
//         .attr('r', 16);
//     })
//     .on('mouseout', function (d) {
//       d3.select(this)
//         .attr('fill', (d) => (d.children == undefined ? 'red' : 'green'))
//         .transition()
//         .duration(100)
//         .attr('r', 12);
//     })
//     .on('click', async function (d) {
//       let buttonId = d3.select(this)['_groups'][0][0]['attributes'].id.value;
//       mouseX = d3.select(this)['_groups'][0][0]['attributes'].cx.value;

//       let checkButtonExists = buttonTracker.filter((button) => button.buttonId === buttonId);

//       if (checkButtonExists[0] !== undefined) {
//         buttonTracker = buttonTracker.filter((button) => button.buttonId !== buttonId);

//         pathLinks = checkButtonExists[0].buttonPathData.concat(pathLinks);
//         update(pathLinks);

//         circleLinks = checkButtonExists[0].buttonCircleData.concat(circleLinks);
//         updateCircles(circleLinks);

//         textLinks = checkButtonExists[0].buttonTextData.concat(textLinks);
//         updateText(textLinks);

//         return;
//       }

//       const valueArray = await processedLinks(d.links());

//       updatePathLinks = pathLinks.filter((item) => !valueArray.includes(item.target.data.name));
//       const clickedPathData = pathLinks.filter((item) => valueArray.includes(item.target.data.name));

//       updateCircleLinks = circleLinks.filter((item) => !valueArray.includes(item.data.name));
//       const clickedCircleData = circleLinks.filter((item) => valueArray.includes(item.data.name));

//       updateTextLinks = textLinks.filter((item) => !valueArray.includes(item.data.name));
//       const clickedTextData = textLinks.filter((item) => valueArray.includes(item.data.name));

//       buttonTracker.push({
//         buttonId: buttonId,
//         buttonPathData: clickedPathData,
//         buttonCircleData: clickedCircleData,
//         buttonTextData: clickedTextData,
//       });

//       update(updatePathLinks);
//       updateCircles(updateCircleLinks);
//       updateText(updateTextLinks);
//     });
// }

// updateCircles(circleLinks);

// function updateText(data) {
//   g.selectAll('text')
//     .data(data, (d) => d.data.name)
//     .join(
//       function (enter) {
//         return enter
//           .append('text')
//           .text((d) => d.data.name)
//           .attrs({
//             x: (d) => mouseX,
//             y: (d) => d.x,
//             fill: 'white',
//             'text-anchor': 'start',
//             'alignment-baseline': 'middle',
//             class: 'node-text',
//             id: (d) => d.data.name,
//           });
//       },
//       function (update) {
//         return update;
//       },
//       function (exit) {
//         return exit
//           .call((text) =>
//             text
//               .transition()
//               .duration(300)
//               .remove()
//               .attrs({
//                 x: (d) => mouseX,
//                 opacity: 0,
//               })
//           );
//       }
//     )
//     .call((text) =>
//       text
//         .transition()
//         .duration(1000)
//         .attr('x', (d) => d.y + 20)
//         .attr('opacity', 1)
//     );
// }

// updateText(textLinks);


// // Add an event listener to the search input field
// document.getElementById('searchInput').addEventListener('input', function (event) {
//     const searchQuery = event.target.value.toLowerCase();
//     const filteredNodes = filterNodes(rootNode, searchQuery);
//     updatePathLinks = rootNode.links().filter((link) => filteredNodes.includes(link.target));
//     updateCircleLinks = rootNode.descendants().filter((node) => filteredNodes.includes(node));
//     updateTextLinks = rootNode.descendants().filter((node) => filteredNodes.includes(node));
//     update(updatePathLinks);
//     updateCircles(updateCircleLinks);
//     updateText(updateTextLinks);
//   });
  
//   // Function to filter the nodes based on search query
//   function filterNodes(node, searchQuery) {
//     const filteredNodes = [];
//     if (node.data.name.toLowerCase().includes(searchQuery)) {
//       filteredNodes.push(node);
//     }
//     if (node.children) {
//       node.children.forEach((child) => {
//         filteredNodes.push(...filterNodes(child, searchQuery));
//       });
//     }
//     return filteredNodes;
//   }
  
// }













fetch('./treedata.json')
.then(function(resp){
    return resp.json();
})
.then(function(data){
    console.log("Test")
   parentFunction(data);
});

function parentFunction(jsondata){


console.log("the data is")
console.log(jsondata)


let mouseX = 0;
//these global variables I should later get via closure
let buttonTracker = [];
let rootNode = d3.hierarchy(jsondata, d=>d.children);
var pathLinks = rootNode.links(); 
var updatePathLinks;

var circleLinks = rootNode.descendants();
var updateCircleLinks;

var textLinks = rootNode.descendants();
var updateTextLinks;


let dim = {
    'width': window.screen.width, 
    'height':window.screen.height * 7   , 
    'margin':50    
};

let svg = d3.select('#chart').append('svg')
     .style('background', 'black')   
     .attrs(dim);


document.querySelector("#chart").classList.add("center");


let g = svg.append('g')
            .attr('transform', 'translate(140,50)');

    let layout = d3.tree().size([dim.height-50, dim.width-320]);

    layout(rootNode);
    console.log(rootNode.links());
    console.log("----------------------");
    console.log(rootNode.descendants());
     
   let lines = g.selectAll('path');  



function update(data){

let group =  g.selectAll('path')
    .data(data, (d,i) => d.target.data.name)
    .join(
    function(enter){
        return enter.append('path')
                    .attrs({
                        'd': d3.linkHorizontal()
                        .x(d => mouseX)
                         .y(d => d.x),
                     'fill':'none',
                     'stroke':'white'
                    })
    },
    function(update){
        return update;
    },
    function(exit){
 


        return exit.call(path => path.transition().duration(300).remove()
                                                .attr('d', d3.linkHorizontal()
                                                              .x(d => mouseX)
                                                              .y(d =>d.x)));
    }


)
.call(path => path.transition().duration(1000).attr('d', d3.linkHorizontal()
        .x(d => d.y)
         .y(d => d.x))
         .attr("id", function(d,i){return "path"+i}));


}
update(pathLinks); //rootNode.links()



function updateCircles(data){
    g.selectAll('circle')
    .data(data, (d) => d.data.name)
    .join(
        function(enter){
            return enter.append('circle')
                        .attrs({
                            'cx':(d)=> mouseX,
                            'cy':(d) => d.x,
                            'r':12,
                            'fill':(d) => {
                                if(d.children == undefined){
                                    return 'red'
                                }
                                return 'green'
                            },
                            'id': (d,i) =>d.data.name,
                            'class':'sel'                           
                        })
        },
        function(update){
            return update;
        },
        function(exit){

            return exit.call(path => path.transition().duration(300).remove()
            .attrs({
                'cx':(d) =>mouseX,
                'r':(d) => 0
            }));

        }


    )
    .call(circle => circle.transition().duration(1000).attr('cx', (d)=>d.y))

    .on('mouseover', function(d){

       d3.select(this)
           .attrs({                
               'fill':'orange',

           })
           .transition().duration(100).attr('r', 16);
    })
    .on('mouseout', function(d){
       d3.select(this)
           .attr('fill', (d)=>{
                if(d.children ==undefined){
                    return 'red'
                }
                return 'green'
           })
           .transition().duration(100).attr('r', 12)

    })
    .on('click', async function(d){

           let buttonId = d3.select(this)["_groups"][0][0]["attributes"].id.value;
           mouseX = d3.select(this)["_groups"][0][0]["attributes"].cx.value;
           //chk if but is clk

           let checkButtonExists = buttonTracker.filter(button => button.buttonId == buttonId);
 
           if(checkButtonExists[0]!=undefined){
                //also remove this item from button tracker
               buttonTracker = buttonTracker.filter(button => button.buttonId != buttonId);
               
               //handle path update
               pathLinks = checkButtonExists[0].buttonPathData.concat(pathLinks);
                              
               update(pathLinks);


                //handle  circle update
               circleLinks = checkButtonExists[0].buttonCircleData.concat(circleLinks);
                 updateCircles(circleLinks);

                 //handle text update

                textLinks =checkButtonExists[0].buttonTextData.concat(textLinks);
                updateText(textLinks);

                return;

           }

           var valueArray = await processedlinks(d.links());   

           updatePathLinks = pathLinks.filter(function(item){        
                   return !valueArray.includes(item.target.data.name);                                       
           });

           //now run the filter to get unfiltered items
           var clickedPathData = pathLinks.filter(function(item){
            return valueArray.includes(item.target.data.name);
            });


           updateCircleLinks = circleLinks.filter(function(item){
                    return !valueArray.includes(item.data.name);
           });

           var clickedCircleData = circleLinks.filter(function(item){
                    return valueArray.includes(item.data.name);
           });
        
        
           updateTextLinks = textLinks.filter(function(item){
                    return !valueArray.includes(item.data.name);
           });

           var clickedTextData = textLinks.filter(function(item){
                    return valueArray.includes(item.data.name);
           });

           //push array
           buttonTracker.push({
               buttonId:buttonId,
               buttonPathData: clickedPathData,
               buttonCircleData:clickedCircleData,
               buttonTextData:clickedTextData
           })

           
           update(updatePathLinks);
           updateCircles(updateCircleLinks);
           updateText(updateTextLinks);
          async function processedlinks(dlinks) {
           var valueArray = [];
    
               return new Promise((resolve, reject)=>{
                     dlinks.forEach(async(element) =>{
                          valueArray.push(element.target.data.name); 
                     });
                     resolve(valueArray);      
               });
           }

           pathLinks = updatePathLinks;
           circleLinks = updateCircleLinks;
           textLinks = updateTextLinks;

    });


}

updateCircles(rootNode.descendants());
 

function updateText(data){

    g.selectAll('text')
      .data(data, (d) =>d.data.name)
      .join(
        function(enter){
            return enter.append('text')
                        .attrs({
                            'x': (d) =>mouseX,
                            'y':(d) => d.x,
                            'font-size':0
                        })
                        .text((d) => d.data.name);
        },
        function(update){
            return update;
        },
        function(exit){
                return exit.call(text => text.transition().duration(300).remove().attrs({
                       'x':(d) => mouseX,
                       'font-size':0 
                }));   
        }

      )
      .call(text => text.transition().duration(1000).attrs({
          'x':(d) =>d.y+20,
          'font-size':15,
          'fill':'yellow',
        }));
}

updateText(textLinks);


document.getElementById('searchInput').addEventListener('input', function (event) {
    const searchQuery = event.target.value.toLowerCase();
    const filteredNodes = filterNodes(rootNode, searchQuery);
    updatePathLinks = rootNode.links().filter((link) => filteredNodes.includes(link.target));
    updateCircleLinks = rootNode.descendants().filter((node) => filteredNodes.includes(node));
    updateTextLinks = rootNode.descendants().filter((node) => filteredNodes.includes(node));
    update(updatePathLinks);
    updateCircles(updateCircleLinks);
    updateText(updateTextLinks);
  });
  
  
  function filterNodes(node, searchQuery) {
    const filteredNodes = [];
    if (node.data.name.toLowerCase().includes(searchQuery)) {
      filteredNodes.push(node);
    }
    if (node.children) {
      node.children.forEach((child) => {
        filteredNodes.push(...filterNodes(child, searchQuery));
      });
    }
    return filteredNodes;
  }
  

}