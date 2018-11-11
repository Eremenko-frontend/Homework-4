/* forEach */

var testArrayMyForEach = ['Irina', 'Viktoriya', 'Anastasiya', 'Elena'];

Array.prototype.myforEach = function () {
  virtualArrayForEach = this;
  var newArrayForEach = [];

  for  (var i = 0; i < virtualArrayForEach.length; i++) {
    newArrayForEach[i] = virtualArrayForEach[i] + ' - Number ' + i;
  }

  return newArrayForEach;
}

console.log('Array after forEach:');
console.log(testArrayMyForEach.myforEach())

/* myMap */

var testArrayMyMap = ['apple', 'cherry', 'orange'];

Array.prototype.myMap =  function () {

  virtualLike = this;
  var newArrayFruits = [];

  for (var i =0; i < virtualLike.length; i++) {
    newArrayFruits[i] = 'I like ' + virtualLike[i];
  }

  return newArrayFruits;

}

console.log('Array after Map:');
console.log(testArrayMyMap.myMap());

/*  mySort  */

var testArrayMySort = [1, -1, 4, 5, 14, 11, 56, 4, 7, 8];

Array.prototype.mySort = function() {
  newArrayNumbers = this
  var newArrayNumbers = [];

  for (var i = 0; i < oldArrayNumbers.length; i++) {

    if (oldArrayNumbers[i] < oldArrayNumbers[i++]) {
      newArrayNumbers[i] = oldArrayNumbers[i];
    }

  }

  return newArrayNumbers;

};

console.log('Array after sort:');
console.log(testArrayMySort.sort());

/* myFilter */

var testArrayMyFilter = [-3, 7, 1, 2, '127', false, 'table', 45];

Array.prototype.myFilter = function () {
  virtualCupboard = this
  var newCustomArray = [];

  for (var i = 0; i <virtualCupboard.length; i++ ) {

    if (virtualCupboard[i] > 0) {
      newCustomArray.push(virtualCupboard[i])
    }

  }

  return newCustomArray;
}

console.log('Array after filter:');
console.log(testArrayMyFilter.myFilter());