/*Homework 4.1 : Part 2*/

var fruits = function (newapple, newcherry) {
  
  var apple = newapple;
  
  var cherry = newcherry;
  
  this.AddnowApple = function() {
    
    return apple =  apple + 12;
    
  };
  
  this.subtractionNowApple = function() {
    
    return apple =  apple - 4;
    
  };
  
  this.answerApple = function() {
    
    return apple;
    
  };

  this.Addnowcherry = function() {
    
    return cherry =  cherry + 12;
    
  };
  
  this.subtractionNowcherry = function() {
    
    return cherry =  cherry - 4;
    
  };
  
  this.answercherry = function() {
    
    return cherry;
    
  };

}

console.log('Homework 4.1 : Part 2');

var myFruits = new fruits(4, 6);

console.log('Answer for first prop');

myFruits.AddnowApple();

console.log(myFruits.answerApple());

myFruits.subtractionNowApple();

console.log(myFruits.answerApple());

myFruits.subtractionNowApple();

console.log(myFruits.answerApple());

myFruits.subtractionNowApple();

console.log(myFruits.answerApple());

console.log('Answer for second prop');

var yourFruits = new fruits(0, 9);

yourFruits.Addnowcherry();

console.log(yourFruits.answercherry());

yourFruits.subtractionNowcherry();

console.log(yourFruits.answercherry());

yourFruits.subtractionNowcherry();

console.log(yourFruits.answercherry());

yourFruits.subtractionNowcherry();

console.log(yourFruits.answercherry());

console.log('Answer for third prop');

var yourFruitsаа = new fruits(100, 100);

console.log(yourFruitsаа.answercherry());
