/*Homework 4.1.3 : Tamagochi*/

var MyAnimalFunc = function (nameAnimal, badAnimal, satietyAnimal, sleepAnimal, walkAnimal , healthAnimal, tieAnimal) {
  var nameAnimal = nameAnimal;
  var ageAnimal;
  var satiety = satietyAnimal;
  var water = 20;
  var bad = badAnimal;
  var health = healthAnimal;
  var happeAnimal = happeAnimal;
  var sleep = sleepAnimal;
  var walkAnimal = walkAnimal;
  var tie = tieAnimal;

  this.addWalkAnimal = function() {
    walkAnimal =  walkAnimal + 5;
    health = health - 5;
    water = water - 5;
    satiety = satiety - 5;
    return walkAnimal && health && water && satiety;
  };
	
  this.addSatietyAnimal = function() {
    return satiety =  satiety + 5;
  };
	
  this.addWaterAnimal = function() {
    return water =  water + 5;
  };
	
  this.addSleepAnimal = function() {
    return sleep =  sleep + 5;
  };
	
  this.addHealthAnimal = function() {
    return health =  health + 5;
  };
	
  this.addTieAnimal = function() {
    return tie = !(tie);
  };

  this.answerAboutAnimal = function() {
    if (satiety <=0 && tie) {
      return 'Ваш улюленець помер від голоду ';
    } else if(satiety > 0 && satiety <= 100 && water > 0 && health > 0) {
      return 'Вашому улюбленцю чогось не  вистачає!';
    } else if(satiety > 100 && tie) {
      return 'Ваш улюленець помер від переїдання';
    } else if (water <= 0  && tie) {
      return 'Ваш улюленець помер від спраги';
    } else if (health <= 0  && tie) {
      return 'Ваш улюленець помер';
    } else if ((satiety <= 0 && !(tie)) || (water <= 0 && !(tie)) || (sleep <= 0 && !(tie)) || (health <= 0 && !(tie))) {
      return 'Ваш улюленець пішов від Вас';
    } else {
      return 'Ваш улюленець впав в спячку';
    }
  };

}
var MyAnimal = new MyAnimalFunc('Tuzik', 'male', 80, 50, 60, 80, false);

console.log(MyAnimal);

var walkB = document.getElementById('walkButton');

walkB.onclick = function() {
  MyAnimal.addWalkAnimal();
};

var eatB = document.getElementById('eatkButton');

eatB.onclick = function() {
  MyAnimal.addSatietyAnimal();
};

var waterB = document.getElementById('waterButton');

waterB.onclick = function() {
  MyAnimal.addWaterAnimal();
};

var sleepB = document.getElementById('sleepButton');

sleepB.onclick = function() {
  MyAnimal.addSleepAnimal();
};

var medicB = document.getElementById('medicButton');

medicB.onclick = function() {
  MyAnimal.addHealthAnimal();
}

var tieB = document.getElementById('tieButton');

tieB.onclick = function() {
  MyAnimal.addTieAnimal();
}

var whatsupkB = document.getElementById('whatsupkButton');

whatsupkB.onclick = function() {
  var answerBlock = document.getElementById('answer-text'),
  answerText = MyAnimal.answerAboutAnimal();
  answerBlock.innerHTML = answerText;
};

