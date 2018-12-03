/* forEach */

var testArrayMyForEach = ['Irina', 'Viktoriya', 'Anastasiya', 'Elena'];

Array.prototype.myforEach = function (func) {
  virtualArrayForEach = this;
  myContext = this;
  var newArrayForEach = [];

  for  (var i = 0; i < virtualArrayForEach.length; i++) {
    func.call(myContext, virtualArrayForEach, i, newArrayForEach)
  }

  return newArrayForEach;
}

console.log('Array after forEach:');
console.log(testArrayMyForEach.myforEach(function (virtualArrayForEach, i, newArrayForEach) {
  newArrayForEach[i] = virtualArrayForEach[i] + ' - Number ' + i;
}))

/* myMap */

var testArrayMyMap = ['apple', 'cherry', 'orange'];

Array.prototype.myMap = function (func) {

  virtualLike = this;
  myContext = this;

  for (var i = 0; i < virtualLike.length ; i++) {

    virtualLike[i] = func.call(myContext, virtualLike[i])
  };

  return virtualLike
}

console.log('Array after Map:');
console.log(testArrayMyMap.myMap(function (whatILike) {
  whatILike = 'I like ' + whatILike;
  return whatILike
}))

/*  mySort  */

var testArrayMySort = [1, -1, 4, 5, 14, 11, 56, 4, 7, 8];

Array.prototype.mySort = function() {
  oldArrayNumbers = this
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

Array.prototype.myFilter = function (func) {
  virtualCupboard = this
  myContext = this
  var newCustomArray = []


  for (var i = 0; i < virtualCupboard.length ; i++) {

    if (func.call(myContext, virtualCupboard[i])) {
      newCustomArray.push(virtualCupboard[i])
    }

  }

  return newCustomArray

}

console.log('Array after filter:');
console.log(testArrayMyFilter.myFilter(function (item) {
  return item > 0
}))
