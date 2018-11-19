/* Homework 4.3: Task */


var whatsupktaskWriteB = document.getElementById('taskWriteButton');

whatsupktaskWriteB.onclick = function() {


    var dynamiTag = document.createElement('li');////створює тег li
    dynamiTag.className = "task__one-item";//дає клас тегу який я створи раніше

    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.className = 'task__one-item-checkbox';
    checkbox.value = 0;// дає значення value даному елементу 0    -значить що задача покищо не виконана
    dynamiTag.appendChild(checkbox);


    var taskDynamicList = document.getElementById('task__list');
    var text = document.getElementById('task__write-input');//бере текст з input
    var dynamiTextSpan = document.createElement('span');////створює тег span
    dynamiTextSpan.className = "task__text-part-item";//дає клас тегу який я створив раніше
    dynamiTextSpan.appendChild(document.createTextNode(text.value));//вставляє текст з input в span



    dynamiTag.appendChild(dynamiTextSpan);//вставляє span з текстом в li в якому вже є checkbox




    taskDynamicList.appendChild(dynamiTag);//вставляє текст який було отримано з inpute в створений раніше тег з класом
};

var taskDeleteB = document.getElementById('taskDeleteButton');

taskDeleteB.onclick = function () {
    var selectionСheckboxTask = document.getElementsByClassName('task__one-item-checkbox');
    console.log(selectionСheckboxTask);
    if (selectionСheckboxTask.checked==true) {
        alert('Выбран');
    }
    else {
        alert ('Не выбран');
    };
};
















/*

if (chbox.checked) {
		alert('Выбран');
	}
	else {
		alert ('Не выбран');
	}

 */