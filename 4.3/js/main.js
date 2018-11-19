/*Homework 4.3 */

 var startY = 1;//initial coordinates along the Y-axis
 var startX = 2;//initial coordinates along the x-axis
 var myMassive = [
    [11, 21, 35, 14],
    [47, 34, 27, 45],
    [31, 99, 88, 77]
];

function coordinates(oldMassive, coordY, coordX) {
     
  var lengthMainMassiv = myMassive.length;//length of the main array
  var stringLength  = myMassive[0].length;//string length
  var amountOldElements = lengthMainMassiv * stringLength;//number of elements in the old array
  var amountOldElementsWrap = amountOldElements * 2;
  var increase = 0;//starting quantity for bypassing array elements
  var newMassive = [];//array to record the traversal coordinates
     
  newMassive.push([coordY, coordX]);
  coordX = coordX + 1;
     
  while (amountOldElementsWrap > newMassive.length) {
    increase =  increase + 2;//increase in the number of bypassed elements of the array
         
    if (increase > 2) {
      coordX = coordX + 1;
    }
         
    //downward movement
    for (var i = increase; i > 0; i--) {
      newMassive.push([coordY, coordX]);
      coordY++;
    }
    coordY = coordY - 1;
    coordX = coordX - 1;
         
    //move left
    for (var t = increase; t > 0; t--) {
      newMassive.push([coordY, coordX]);
      coordX--;
    }
    coordX = coordX + 1;
         
    //upward movement
    for (var j = increase; j > 0; j--) {
      coordY--;
      newMassive.push([coordY, coordX]);
    }
         
    //move right
    for (var p = increase ; p > 0; p--) {
      coordX++;
      newMassive.push([coordY, coordX]);
    }
      
  }
     
  /* filter part */
  for (var w = 0; w <= (newMassive.length - 1); w++) {
    if (newMassive[w][0] < 0 || newMassive[w][0] >= lengthMainMassiv || newMassive[w][1] < 0 || newMassive[w][1] >= stringLength) {
      delete newMassive[w];
    }
  }
     
  return newMassive
     
}

console.log(coordinates(myMassive, startY, startX));