;
/***** JS Homework #11.23 Advanced events. Bubbling and capturing. Preventing default browser actions. Event delegation *****/


console.log('-----------------------------------');
/******* JS Homework #23. Minesweeper. Basic  *******/
console.log('*** JS Homework #23. Minesweeper. Basic ***');

//Данное задание не обязательно для выполнения
//
//Задание
//Написать реализацию игры "Сапер".
//
//Технические требования:
//
//Нарисовать на экране поле 8*8 (можно использовать таблицу или набор блоков).
//Сгенерировать на поле случайным образом 10 мин. Пользователь не видит где они находятся.
//Клик левой кнопкой по ячейке поля "открывает" ее содержимое пользователю.
//
//Если в данной ячейке находится мина, игрок проиграл. В таком случае показать все остальные мины на поле. Другие действия стают недоступны, можно только начать новую игру.
//Если мины нет, показать цифру - сколько мин находится рядом с этой ячейкой.
//Если ячейка пустая (рядом с ней нет ни одной мины) - необходимо открыть все соседние ячейки с цифрами.
//
//
//Клик правой кнопки мыши устанавливает или снимает с "закрытой" ячейки флажок мины.
//После первого хода над полем должна появляться кнопка "Начать игру заново",  которая будет обнулять предыдущий результат прохождения и заново инициализировать поле.
//Над полем должно показываться количество расставленных флажков, и общее количество мин (например 7 / 10).




/***  INNER CALCULATIONS CONTROLLER ***/
//
//const ICController = (function () {
//    
//    let numbers = {
//        sizes: {
//            x: 0,
//            y: 0
//        },
//        fieldSquare: 0,
//        minesQuantity: 0
//    };
//    
//    return {
//        
//           /***  функция валидации (проверки наличия некорректных данных) инпутов из nodeList (если есть ошибки - возвращает тру): ***/
//        validateInput: (nodeList) => {
//            let array = Array.prototype.slice.call(nodeList);
//            return array.some( (el) =>  ( el.value === '' || isNaN(Number(el.value)) || !Number.isInteger(Number(el.value)) || Number(el.value) <4 || Number(el.value) > 24));
//        },
//
//           /***  функция подсчета всех числовых значений и выведение: ***/
//        calcNumbers: (list) => {
//            let a = list[0].value;
//            let b = list[1].value;
//            numbers.sizes.x = a;
//            numbers.sizes.y = b;
//            numbers.fieldSquare = a*b;
//            numbers.minesQuantity = Math.floor(a*b/6);
//            return numbers;
//        },
//
//    }
//    
//})();
//
//
//
///***  USER INTERFACE\INTERACTIONS CONTROLLER ***/
//
//const UIController = (function () {
//    
//    let DOMSelector = {
//        
//        btnNewGame: document.getElementById('btn-new-game'),
//        gameContainer: document.getElementById('game-container'),
//        errorMessage: document.getElementById('error-message'),
//        field: document.getElementById('field'), // пусть будет сразу или потом добавить?
//        
//        setCells: document.querySelectorAll('.starter-box .set-cells'),
//        fieldCells: document.querySelectorAll('.field-cell'), // пусть будет сразу или потом добавить?
//        mines: document.querySelectorAll('.mine'), // пусть будет сразу или потом добавить?
//    }; 
//    
//    
//    return {
//        
//        /***  функции вывода объекта с нужными html элементами: ***/
//        getDOM: () => DOMSelector,
//        
//        /***  функция уделения потомков элемента: ***/
//        clearElement: (el) => {
//            while (el.firstChild) {
//                el.removeChild(el.firstChild);
//            }; 
//        },
//        
//        /***  функция удаления лишнего элемента: ***/
//        removeElement: (el) => {
//            if(el) {
//                el.remove();
//            }
//        },
//        
//        /***  функции создания сообщения об ошибке:  ***/
//        displayError: (place) => {
//            let errorMessage = document.createElement('p');
//                errorMessage.classList.add('error-message');
//                errorMessage.id = 'error-message';
//                errorMessage.innerText = 'Only numbers from 4 to 24';
//                place.before(errorMessage);
//        },
//        
//         /***  функции создания поля с ячейками ***/
//        drawField: function (a, b) {
//            
//            let field = document.createElement('div');
//            field.classList.add('field');
//            field.id = 'field'; 
//            DOMSelector.gameContainer.appendChild(field);
//            DOMSelector.field = document.getElementById('field');
//            
//            let fragment = document.createDocumentFragment();
//            for (let i=0; i < a*b; i++) {
//                let fieldCell = document.createElement('div');
//                fieldCell.classList.add('field-cell');
//                fieldCell.classList.add('tile');
//                fragment.appendChild(fieldCell);        
//            }
//            field.style.cssText = `grid-template: repeat(${a}, min-content) / repeat(${b}, min-content);`;
//            field.appendChild(fragment);
//            DOMSelector.fieldCells = document.querySelectorAll('.field-cell');            
//        },
//        
//          /***  функции создания мин ***/
//        createMines: function (fieldSquare, minesQuantity) {
//            
//            for (let i = 0; i< minesQuantity; ) {  
//                let cellNumber = Math.floor(Math.random()*fieldSquare);
//                if (DOMSelector.fieldCells[cellNumber].childElementCount === 0) {
//                    let mine = document.createElement('div');
//                    mine.classList.add('mine');
//                    mine.classList.add('icon');
//        //            mine.classList.add('hidden');
//                    DOMSelector.fieldCells[cellNumber].appendChild(mine);
//                    i++;
//                };
//            };
//            DOMSelector.mines = document.querySelectorAll('.mine');
//        },
//        
//    }
//    
//})();
//
//
//
//
///***  GLOBAL APP CONTROLLER ***/
//
//const appController = (function (ICCtrl, UICtrl) {
//    
//    let DOM = UICtrl.getDOM();
//    
//    const setupEventListeners = function () {
//        
//        DOM.btnNewGame.addEventListener('click', startNewGame);
//               
//    }; 
//    
//    const startNewGame = function (event) {
//        
//        // 0. event.preventDefault();
//        event.preventDefault;
//        
//        // 1. clean game container
//        UICtrl.clearElement(DOM.gameContainer);       
//        
//        // 2. get & check inputs
//        if (ICCtrl.validateInput(DOM.setCells)) {
//            
//            // 2.1. if there are mistakes: display error
//            UICtrl.displayError(DOM.btnNewGame);
//        } else {
//            
//            // 3. remove error message
//            UICtrl.removeElement(DOM.errorMessage);
//        
//            // 4. add input values to ICController & calculate numbers (field cells & mines)
//            let numbers = ICCtrl.calcNumbers(DOM.setCells);
//            
//            // 5. create and display field
//            UICtrl.drawField(numbers.x, numbers.y);
//
//            // 6. create and (non)-display mines
//            
//            UICtrl.createMines(numbers.fieldSquare, numbers.minesQuantity);
//        };        
//    }
//    
//    return {
//        // 1. initialize app;
//        initialize: () => { 
//            setupEventListeners();
//        }
//    };
//    
//    
//})(ICController, UIController);
//
//
//appController.initialize();
//
//
//
//
//
//
//
//
//
//


//
//Нарисовать на экране поле 8*8 (можно использовать таблицу или набор блоков).
//Сгенерировать на поле случайным образом 10 мин. Пользователь не видит где они находятся.
//Клик левой кнопкой по ячейке поля "открывает" ее содержимое пользователю.
//
//Если в данной ячейке находится мина, игрок проиграл. В таком случае показать все остальные мины на поле. Другие действия стают недоступны, можно только начать новую игру.
//Если мины нет, показать цифру - сколько мин находится рядом с этой ячейкой.
//Если ячейка пустая (рядом с ней нет ни одной мины) - необходимо открыть все соседние ячейки с цифрами.
//
//
//Клик правой кнопки мыши устанавливает или снимает с "закрытой" ячейки флажок мины.
//После первого хода над полем должна появляться кнопка "Начать игру заново",  которая будет обнулять предыдущий результат прохождения и заново инициализировать поле.
//Над полем должно показываться количество расставленных флажков, и общее количество 


//
//


// 0. ПОДГОТОВКА К СТАРТУ:

/***  уделениt потомков элемента (очистка предыдущей игры): ***/
function clearElement (el) {
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    };
};

/***  валидациz инпутов из nodeList: ***/
function validateInput (nodeList) {
    let array = Array.prototype.slice.call(nodeList);
    return !array.some( (el) =>  ( el.value === '' || isNaN(Number(el.value)) || !Number.isInteger(Number(el.value)) || Number(el.value) <4 || Number(el.value) > 24));
}

/***  показ сообщения об ошибке: ***/
function displayError (button) {
    let errorMessage = document.createElement('p');
    errorMessage.classList.add('error-message');
    errorMessage.id = 'error-message';
    errorMessage.innerText = 'Only numbers from 4 to 24';
    button.before(errorMessage);  
};

/***  удалениt лишнего элемента (сообщения об ошибке): ***/
function removeElement (el) {
    if(el) {
        el.remove();
    }
};



// 1. СОЗДАНИЕ НОВОГО ПОЛЯ С МИНАМИ ПО КЛИКУ:

const btnNewGame = document.getElementById('btn-new-game');
const gameContainer = document.getElementById('game-container');
let setCells = document.querySelectorAll('.starter-box .set-cells');
let field, fieldCell;


/***  рисование поля ***/

const drawField =  function (a, b) {
    field = document.createElement('div');
    field.classList.add('field');
    field.id = 'field';
    gameContainer.appendChild(field);

    let fragment = document.createDocumentFragment();
    for (let i=0; i < a*b; i++) {
        fieldCell = document.createElement('div');
        fieldCell.classList.add('field-cell');
        fragment.appendChild(fieldCell);        
    }
    field.style.cssText = `grid-template: repeat(${b}, min-content) / repeat(${a}, min-content);`;
    field.appendChild(fragment);  
};


/***  создание плиток и мин ***/

const createMines = function (cols, rows) {
    
    let fieldCells = document.querySelectorAll('.field-cell'); 
    fieldCells.forEach((el) => {
        let tile = document.createElement('div');
        tile.classList.add('icon');
        tile.classList.add('tile');
//            tile.classList.add('hidden');
        el.appendChild(tile);
    });
        
    let minesQuantity = Math.floor(cols*rows/6);
    for (let i = 0; i< minesQuantity; ) {  
        let cellNumber = Math.floor(Math.random()*cols*rows);
        if (fieldCells[cellNumber].childElementCount === 1) {
            let mine = document.createElement('div');
            mine.classList.add('icon');
            mine.classList.add('mine');
            mine.classList.add('hidden');
            fieldCells[cellNumber].appendChild(mine);
            i++;
        };
    };
    
/***  подсчет цифры в ячейках - кол-во соседних мин ***/
    let numbersBack = [
        
    ]
    
    fieldCells.forEach((el,ind) => {
        
        let count = 0;
        
        let cellUC = fieldCells[ind-cols]; // upper-center
        let cellUL = fieldCells[ind-cols-1]; // upper-left
        let cellUR = fieldCells[ind-cols+1]; // upper-right
        let cellDC = fieldCells[ind+cols]; // down-center
        let cellDL = fieldCells[ind+cols-1]; // down-left
        let cellDR = fieldCells[ind+cols+1]; // down-right
        let cellLL = fieldCells[ind-1]; // left
        let cellRR = fieldCells[ind+1]; // right
        
        // upper neighbours:
        
        if (cellUC && cellUC.childElementCount > 1) {count++}; // upper center
        if (cellUL && ind % cols !== 0 && cellUL.childElementCount > 1) {count++}; // upper left
        if (cellUR && (ind + 1) % cols !== 0 && cellUR.childElementCount > 1) {count++}; // upper right
     
        // down neighbours:
        if (cellDC && cellDC.childElementCount > 1) {count++}; // down center
        if (cellDL && ind % cols !== 0 && cellDL.childElementCount > 1) {count++}; // down left
        if (cellDR && (ind + 1) % cols !== 0 && cellDR.childElementCount > 1) {count++}; // down right
        
        // in-row neighbours:
        if (cellLL && ind % cols !== 0 && cellLL.childElementCount > 1) {count++}; // left
        if (cellRR && (ind + 1) % cols !== 0 && cellRR.childElementCount > 1) {count++}; //right

        if (count !==0) { el.setAttribute('data-num', count); };        
        
        switch (count) {
            case 1: el.style.color = 'blue';
                break;
            case 2: el.style.color = 'green';
                break;
            case 3: el.style.color = 'red';
                break;
            case 4: el.style.color = 'darkblue';
                break;
            case 5: el.style.color = 'darkred';
                break;
            case 6: el.style.color = 'purple';
                break;
            case 7: el.style.color = 'darkpurple';
                break;
            case 8: el.style.color = 'black';
                break;
        } 
    });
};



/***  запуск игры по клику на 'NEW GAME': ***/

btnNewGame.addEventListener('click', (event) => {
    
        event.preventDefault();
        clearElement(gameContainer);
    
        if (validateInput(setCells)) {          
            removeElement(document.querySelector('.error-message'));            
            drawField(setCells[0].value, setCells[1].value);    
            createMines(setCells[0].value, setCells[1].value);             
            playGame(field);            
        } else {
            displayError(event.target);
        };
});


function playGame (fld) {
    
// по левому клику на ячейку 
    
    fld.addEventListener('click', checker);
    
    function checker (event) {
        let el = event.target  || event;
        console.log(el);
        if (el && el.classList.contains('tile')) {
//        if (event.target && event.target.classList.contains('tile')) {
//            console.log(event.target);
            
   // переменные для обработки ячеек:            
            let cols = setCells[0].value;
            let fieldCells = Array.from(field.children);
            let ind = fieldCells.indexOf(el.parentElement);
//            console.log(event.target.parentElement);

            let cellUC = fieldCells[ind-cols]; // upper-center
            let cellUL = fieldCells[ind-cols-1]; // upper-left
            let cellUR = fieldCells[ind-cols+1]; // upper-right
            let cellDC = fieldCells[ind+cols]; // down-center
            let cellDL = fieldCells[ind+cols-1]; // down-left
            let cellDR = fieldCells[ind+cols+1]; // down-right
            let cellLL = fieldCells[ind-1]; // left
            let cellRR = fieldCells[ind+1]; // right
//            console.log(cellUC);
            
            checkCell(event);         
        
            function checkCell (event) {
                let el = event.target  || event;
    // 1. открыть ее содержимое: 
                el.hidden = true;
                
    //    1.1.  если мина - показать все мины и заблокировать дальнейшие клики
                if (el.nextElementSibling && el.nextElementSibling.classList.contains('mine')) {
                    document.querySelectorAll('.mine').forEach((el) => {
                        el.classList.toggle('hidden');
                        el.previousElementSibling.hidden = true;
                        console.log(event.currentTarget);
                        console.log(el);
                        event.currentTarget.removeEventListener('click', checker);
//                        return false;
                    })

            //    1.2.  если цифра - показать цифру в ячейке
                } else {
                    openRegularCells(event);
                };
            };

            function openRegularCells (event) {
                let el = event.target  || event;
    //            console.log(fieldCells);
                console.log(ind);

                if (el.parentElement.hasAttribute('data-num')) {
                    el.parentElement.innerText = el.parentElement.getAttribute('data-num'); 

            //    1.3.  если пусто - показать все прилегающие пустые ячейки  и ячейки по периметру пустоты с цифрами
                } else {
                    if (cellUC) {checker(cellUC.children[0])}; // upper center
                    if (cellUL && ind % cols !== 0) {checker(cellUL.children[0])}; // upper left
//                    if (cellUR && (ind + 1) % cols !== 0) {checker(cellUR.children[0])}; // upper right
//                    if (cellDC) {checker(cellDC.children[0])}; // down center
//                    if (cellDL && ind % cols !== 0) {checker(cellDL.children[0])}; // down left
//                    if (cellDR && (ind + 1) % cols !== 0) {checker(cellDR.children[0])}; // upper right
//                    if (cellLL && ind % cols !== 0) {checker(cellLL.children[0])}; //  left
//                    if (cellRR && (ind + 1) % cols !== 0) {checker(cellRR.children[0])}; // right
                };
            };
        };
    };
};  

            



//Не обязательное задание продвинутой сложности:
//
//При двойном клике на ячейку с цифрой - если вокруг нее установлено такое же количество флажков, что указано на цифре этой ячейки, открывать все соседние ячейки.
//Добавить возможность пользователю самостоятельно указывать размер поля. Количество мин на поле можно считать по формуле Количество мин = количество ячеек / 6.












//
//
//
///*******Some inital configurations *****/
//var msRows = 10;
//var msColumns = 10;
//var mineCount = 20;
//var targetDiv = null;
//var counterInterval = null;
//var homeFolder = "https://raw.githubusercontent.com/strahlistvan/minesweeper/devjs/";
//
///*********** ****************/
//
//var ScoreCounter = 
//{
//	targetDiv	 : null,
//	currentScore : 0,
//	self		 : this,
//	
//	getScoreDivElement : function(scoreParam)
//	{
//		var counterDiv = document.createElement("div");
//		counterDiv.id = "counter";
//		
//		var num1 = Math.floor(scoreParam%1000/100);
//		var num1Img = document.createElement("img");
//		num1Img.src = homeFolder+"Images/score/"+num1+".bmp";
//		num1Img.style.width = "30px";
//		num1Img.style.height = "30px";
//		
//		var num2 = Math.floor(scoreParam%100/10);
//		var num2Img = document.createElement("img");
//		num2Img.src = homeFolder+"Images/score/"+num2+".bmp";
//		num2Img.style.width = "30px";
//		num2Img.style.height = "30px";
//		
//		var num3 = scoreParam%10;
//		var num3Img = document.createElement("img");
//		num3Img.src = homeFolder+"/Images/score/"+num3+".bmp";
//		num3Img.style.width = "30px";
//		num3Img.style.height = "30px";		
//		
//		counterDiv.appendChild(num1Img);
//		counterDiv.appendChild(num2Img);
//		counterDiv.appendChild(num3Img);
//		
//		return counterDiv;	
//	}
//	
//}
///**** timecounter.js ******/
//var TimeCounter = 
//{
//	targetDiv	 	: null,
//	currentSeconds  : 0,
//	currentMinutes	: 0,
//	isCounting		: false,
//	
//	/**  Returns a HTML DOM element which contains the current time in a div which ID is 'timer'. */
//	getTimerDivElement : function()
//	{		
//		this.isCounting = false;
//		
//		var counterDiv = document.createElement("div");
//		counterDiv.id = "timer";
//		
//		var min1 = Math.floor(this.currentMinutes / 10) % 100;
//		var min1Img = document.createElement("img");
//		min1Img.src = homeFolder+"Images/score/"+min1+".bmp";
//		min1Img.style.height = "30px";
//		min1Img.id = "min1Img";
//		
//		var min2 = this.currentMinutes % 10;
//		var min2Img = document.createElement("img");
//		min2Img.src = homeFolder+"Images/score/"+min2+".bmp";
//		min2Img.style.height = "30px";
//		min2Img.id = "min2Img";
//
//		
//		var dotsImg = document.createElement("img");
//		dotsImg.src = homeFolder+"Images/score/dots.bmp";
//		dotsImg.style.height = "30px";
//		
//		var sec1 = Math.floor(this.currentSeconds / 10);
//		var sec1Img = document.createElement("img");
//		sec1Img.src = homeFolder+"Images/score/"+sec1+".bmp";
//		sec1Img.style.height = "30px";
//		sec1Img.id = "sec1Img";		
//		
//		var sec2 = this.currentSeconds % 10;
//		var sec2Img = document.createElement("img");
//		sec2Img.src = homeFolder+"Images/score/"+sec2+".bmp";
//		sec2Img.style.height = "30px";
//		sec2Img.id = "sec2Img";		
//		
//		counterDiv.appendChild(min1Img);
//		counterDiv.appendChild(min2Img);
//		counterDiv.appendChild(dotsImg);
//		counterDiv.appendChild(sec1Img);
//		counterDiv.appendChild(sec2Img);		
//				
//		return counterDiv;	
//	},
//	
//	/** Starts an interval what is refershing the timer div element secondly. */
//	startClock : function()
//	{	
//		this.isCounting = true;
//		var self = this;
//		self.isCounting = true;
//		counterInterval = setInterval(function() 
//		{	
//			//Refresh timer HTML element
//			var timerElement = document.getElementById("timer").parentElement;
//			timerElement.innerHTML = "";
//			timerElement.appendChild(self.getTimerDivElement());
//			
//			self.currentSeconds = (self.currentSeconds + 1) % 60;
//			self.currentMinutes = (self.currentSeconds == 0) ? self.currentMinutes + 1 : self.currentMinutes;
//		}, 1000);
//	},
//	
//	/** Clear the timer interval, stops the clock*/
//	stopClock : function()
//	{
//		this.isCounting = false;
//		clearInterval(counterInterval);
//	},
//	
//	 /** Set the timer to 00:00 */
//	resetClock : function()
//	{
//		this.currentMinutes = this.currentSeconds = 0;
//	}
//	
//}
//
///********* minesweeperfield.js *********/
//function MineSweeperField(rowIndex, columnIndex, hasMinePar) 
//{
//	this.flagged = false;
//	this.opened = false;
//	this.hasMine = hasMinePar;
//	
//	var self = this;
//	
//	this.msbtn = document.createElement("div");
//	
//	this.appendTo = function(parentElement) 
//	{	
//		self.msbtn.style.width = "40px";
//		self.msbtn.style.height = "40px";
//		self.msbtn.style.backgroundColor = "lightgrey";
//		self.msbtn.class = "self.msbtn";
//		self.msbtn.onmousedown = function(evt) 
//		{
//			if (MineSweeper.isPlayerDied)
//				return;
//			
//			var isRight = false;
//			var isLeft = false;
//					
//			if ("which" in evt)
//			{
//				isRight = (evt.which == 3);
//				isLeft 	= (evt.which == 1);
//			}
//			else if ("button" in evt)
//			{
//				isRight = (evt.button == 3);
//				isLeft = (evt.button == 1);
//			}
//			
//			/** Handling click actions **/
//						if (isRight && !MineSweeper.isGameRunning)
//			{
//				alert("Press left click in a field to start game");
//				return;
//
//			} 
// 
//			if (self.flagged)
//			{
//				self.flagged = false;
//				++MineSweeper.remainingMines;
//			}
//			else if (isRight && !self.flagged && !self.opened) 
//			{				
//				--MineSweeper.remainingMines;
//				self.flagged = true;
//				MineSweeper.repaintGrid(MineSweeper.getTargetDiv());
//
//				console.log("Mines left: " + MineSweeper.remainingMines);
//				
//			}
//			else if (isLeft) 
//			{				
//				if (!MineSweeper.isGameRunning)
//				{
//					var cycle = 0; //to avoid infinite loops
//					do 
//					{
//						MineSweeper.clearField(rowIndex, columnIndex);
//						MineSweeper.placeMines();
//
//						console.log("cycle = "+cycle++);
//					} 
//					while ( ( MineSweeper.isMineField(rowIndex, columnIndex) 
//							    || Mi.startClock();
//					MineSweeper.isGameRunning = true;neSweeper.countNeigbourMines(rowIndex, columnIndex) > 0 )
//							  && cycle < 10000 );
//					//Start clock ticking...
//					TimeCounter
//
//				}
//				
//				if (!self.flagged)
//				{
//					if (MineSweeper.grid[rowIndex][columnIndex].hasMine)
//					{ //explode!
//
//						var bangSound = new Audio(homeFolder+"explosion.wav");
//						bangSound.play();
//						
//							MineSweeper.grid[rowIndex][columnIndex].getButton().style.backgroundColor = "red";
//						//stop timer
//						TimeCounter.stopClock();
//            
//            MineSweeper.isPlayerDied = true;
//						MineSweeper.openAllFields();
//						MineSweeper.isGameRunning = false;
//
//					}
//					else //open field (no mine)
//					{
//						MineSweeper.openField(self.getRowIndex(), self.getColumnIndex());
//					}
//				}
//				else //remove flag
//				{
//					self.msbtn.style.backgroundImage = "none";
//					++MineSweeper.remainingMines;
//					flagged = false;
//					
//					console.log("Mines left: " + MineSweeper.remainingMines);
//
//				}
//			}
//			// you win!
//			if (!MineSweeper.hasOpenableField() && MineSweeper.isGameRunning)
//			{
//				var winSound = new Audio(homeFolder+"winner.wav");
//				winSound.play();
//				TimeCounter.stopClock();
//        
//				MineSweeper.remainingMines = 0;
//				MineSweeper.isPlayerWin = true;
//				MineSweeper.openAllFields();
//				MineSweeper.isGameRunning = false;
//			}
//						MineSweeper.repaintGrid(MineSweeper.getTargetDiv());
//		}
//		
//		parentElement.appendChild(self.msbtn);
//	}
//	
//	this.getButton = function()
//	{
//		return self.msbtn;
//	}
//	
//	this.isOpened = function()
//	{
//		return self.opened;
//	}
//	
//	this.setOpened = function(isOpened)
//	{
//		self.opened = isOpened;
//	}
//	
//	this.isFlagged = function()
//	{
//		return self.flagged;
//	}
//	
//	this.setFlagged = function(isFlagged)
//	{
//		self.flagged = isFlagged;
//	}
//	
//	this.getRowIndex = function()
//	{
//		return rowIndex;
//	}
//	
//	this.getColumnIndex = function()
//	{
//		return columnIndex;
//	}
//	
//	this.getNeighbourMinesCount = function()
//	{
//		return MineSweeper.countNeigbourMines(rowIndex, columnIndex);
//	}
//	
//	this.isMineField = function()
//	{
//		 return this.hasMine;
//		 return MineSweeper.isMineField(rowIndex, columnIndex);
//	}
//}
//
///************* minesweeper.js ****************/
//window.oncontextmenu = function() { 
//	return false; 
//}
//
//var MineSweeper = {
//	
//	remainingMines : mineCount,
//	isPlayerWin : false,
//	isPlayerDied : false,
//	isGameRunning : false,
//	grid : [],
//	
//	generateGrid : function(rows, columns)
//	{		
//		this.grid = new Array(rows);
//		for (var i=0; i<rows; ++i)
//		{
//			this.grid[i] = new Array(columns);
//			for (var j=0; j<columns; ++j) 
//			{
//				this.grid[i][j] = new MineSweeperField(i, j, false);
//				this.grid[i][j].hasMine = false;
//			}
//		}
//		//this.placeMines();
//	},
//
//	//generating mines into random places
//	placeMines : function()
//	{
//		var rows = MineSweeper.grid.length;
//		var columns = MineSweeper.grid[0].length;
//		
//		//clear all mines
//		for (var i=0; i<rows; ++i)
//		{
//			for (var j=0; j<columns; ++j)
//			{
//				this.grid[i][j].hasMine = false;
//			}
//		}
//			
//		var index = mineCount;
//		while (index != 0)
//		{
//			var rand = Math.floor(Math.round(Math.random()*(rows*columns))) ;
//			var rowIndex = Math.floor(rand/rows) -1 ; 
//			var colIndex = rand%rows - 1;
//			
//			rowIndex = (rowIndex < 0) ? 0 : rowIndex;
//			colIndex = (colIndex < 0) ? 0 : colIndex;
//			
////			console.log("row: "+rowIndex + " column: " + colIndex);
//			
//			if (!this.grid[colIndex][rowIndex].hasMine)
//			{
//				this.grid[colIndex][rowIndex].hasMine = true;
//			//	console.log('('+colIndex+', '+rowIndex+') has Mine');
//				--index;
//			}
//		}
////		console.log(this.grid);
//	},
//	
//	clearField : function (selectedRow, selectedCol)
//	{
//		if ( selectedRow < 0 || selectedRow >= this.grid.length
//		     || selectedCol < 0 || selectedCol >= this.grid[0].length )
//			return;
//		
//		
//		if (!this.grid[selectedRow][selectedCol].isMineField())
//			return;
//			
//		var findPlace = false;
//		
//		for (var i=0; i<this.grid.length && !findPlace; ++i)
//		{
//			for (var j=0; j<this.grid[i].length && !findPlace; ++j)
//			{
//				if (i!=selectedRow && j!=selectedCol && !this.grid[i][j].hasMine)
//				{					
//					this.grid[i][j].hasMine = true;
//					findPlace = true;
//				}
//			}
//		}
//			
//		if (findPlace)
//			this.grid[selectedRow][selectedCol].hasMine = false;
//	},
//	
//	errorMessage : function(errorText)
//	{
//		alert(errorText);
//		console.log(errorText);
//	},
//	
//	create: function(parentId)
//	{
//		this.isPlayerDied = false;
//		this.isPlayerWin = false;
//		this.isGameRunning = false;
//		this.remainingMines = mineCount;
//		
//		this.generateGrid(msRows, msColumns);
//		
//		targetDiv = null;
//		targetDiv = document.getElementById(parentId);
//		
//		if (!targetDiv) 
//			this.errorMessage("Failed to create MineSweeper. Element not found with ID "+parentId);
//		
//		targetDiv.innerHTML = '';
//	
//		var table = document.createElement("table");
//		
//		var thead = this.createHeader();
//		table.appendChild(thead);
//		
//		var tbody = document.createElement("tbody");
//		
//		for (var i=0; i<msRows; ++i)
//		{
//			var row = document.createElement("tr");
//			for (var j=0; j<msColumns; ++j)
//			{
//				var column = document.createElement("td");
//				row.appendChild(column);
//				
//				var msField = new MineSweeperField(i, j, false);
//				msField.appendTo(column);
//			}
//			
//			tbody.appendChild(row);
//		}
//		
//		table.appendChild(tbody);
//		targetDiv.appendChild(table);				
//	},
//	
//	repaintGrid: function(parentId) {
//		
//		targetDiv = null;
//		targetDiv = document.getElementById(parentId);
//		
//		if (!targetDiv) 
//			this.errorMessage("Failed to create MineSweeper. Element not found with ID "+parentId);
//		
//		targetDiv.innerHTML = '';
//	
//		var table = document.createElement("table");
//		
//		var thead = this.createHeader();
//		table.appendChild(thead);
//		
//		var tbody = document.createElement("tbody");
//		
//		for (var i=0; i<msRows; ++i)
//		{
//			var row = document.createElement("tr");
//			for (var j=0; j<msColumns; ++j)
//			{
//				var column = document.createElement("td");
//				row.appendChild(column);
//				
//				
//				if (this.grid[i][j].flagged)
//				{
//					if (!this.grid[i][j].hasMine && +!this.isGameRunning)
//						this.grid[i][j].getButton().style.backgroundImage = "url('https://raw.githubusercontent.com/strahlistvan/minesweeper/devjs/Images/flagged_false.png')";					
//					else
//						this.grid[i][j].getButton().style.backgroundImage = "url('https://raw.githubusercontent.com/strahlistvan/minesweeper/devjs/Images/flagged.png')";
//					this.grid[i][j].getButton().style.backgroundSize = "cover";					
//				}
//				else if (this.grid[i][j].opened)
//				{
//					
//					if (this.grid[i][j].hasMine)
//					{
//						this.grid[i][j].getButton().style.backgroundImage = "url('https://raw.githubusercontent.com/strahlistvan/minesweeper/devjs/Images/bomb.png')";
//						this.grid[i][j].getButton().style.backgroundSize = "cover";		
//					}
//					else 
//					{
//						this.grid[i][j].getButton().style.backgroundImage = "url('https://raw.githubusercontent.com/strahlistvan/minesweeper/devjs/Images/"+this.grid[i][j].getNeighbourMinesCount()+".png')";
//						this.grid[i][j].getButton().style.backgroundSize = "cover";	
//					}
//
//				}
//				else
//				{
//					this.grid[i][j].getButton().style.backgroundImage = "none";
//				}
//	
//				//var msField = this.grid[i][j];
//				this.grid[i][j].appendTo(column);
//			}
//			
//			tbody.appendChild(row);
//		}
//		
//		table.appendChild(tbody);
//		targetDiv.appendChild(table);				
//		
//	},
//	
//	countNeigbourMines: function(i, j)
//	{
//		var count = 0;
//		
//		//If the position is not valid
//		if (i<0 || j<0 || i>=this.grid.length || j>=this.grid[i].length)
//			return 0;
//		
//		//Top neighbour
//		if (i > 0 && this.grid[i-1][j].hasMine)
//		{
////			console.log(i+' row '+j+' column Top neighbour');
//			++count;
//		}
//			
//		//Top right neighbour
//		if (i > 0 && j < this.grid[i-1].length - 1
//		    && this.grid[i-1][j+1].hasMine)
//		{
////			console.log(i+' row '+j+' column Top Right neighbour');
//			++count;
//		}
//		
//		//Right neighbour
//		if (j < this.grid[i].length - 1 
//			&& this.grid[i][j+1].hasMine)
//		{
////			console.log(i+' row '+j+' column Right neighbour');
//			++count;
//		}
//		
//		//Bottom right neighbour
//		if (i < this.grid.length - 1 && j < this.grid[i+1].length - 1  
//			&& this.grid[i+1][j+1].hasMine)
//			{
////				console.log(i+' row '+j+' column Bottom Right neighbour');
//				++count;
//			}
//		
//		//Bottom neighbour
//		if (i < this.grid.length - 1
//			&& this.grid[i+1][j].hasMine)
//			{
////				console.log(i+' row '+j+' column Bottom neighbour');
//				++count;
//			}
//	
//		//Bottom left neighbour
//		if (i < this.grid.length - 1 && j > 0
//			&& this.grid[i+1][j-1].hasMine)
//		{
////			console.log(i+' row '+j+' column Bottom Left neighbour');
//			++count;
//		}
//			
//		//Left neighbour
//		if (j > 0 && this.grid[i][j-1].hasMine) 
//		{
////			console.log(i+' row '+j+' column Left neighbour');
//			++count;
//		}
//		
//		//Top left neighbour
//		if (i > 0 && j > 0 && this.grid[i-1][j-1].hasMine) 
//		{
////			console.log(i+' row '+j+' column Top Left neighbour');
//			++count;
//		}
//		
//		return count;
//	},
//	
//	isMineField : function(i, j)
//	{
//		//If the position is not valid
//		if (i<0 || j<0 || i>=this.grid.length || j>=this.grid[i].length)
//			return 0;
//		
//		return this.grid[i][j].hasMine;
//		
//	},
//	
//	countOpenedFileds : function()
//	{
//		var count = 0;
//		for (var i=0; i<this.grid.length; ++i)
//		{
//			for (var j=0; j<this.grid[i].length; ++j)
//			{
//				if (this.grid[i][j].isOpened())
//					++count;
//			}
//		}
//		console.log("opened fields = " + count);
//		return count;
//	},
//	
//	createHeader: function()
//	{
//		var thead = document.createElement("thead");
//		
//		var row = document.createElement("tr");
//		row.style.backgroundColor = 'lightgrey';
//		row.style.height = "50px";
//		
//		var thScore = document.createElement("th");
//		thScore.id = "scoreboard";
//		thScore.colSpan = Math.floor(msColumns/3);
//		var mineDiv = ScoreCounter.getScoreDivElement(MineSweeper.remainingMines); 
//		thScore.appendChild(mineDiv);		
//		
//		var thSun = document.createElement("th");
//		thSun.id = "sunhead";
//		thSun.colSpan = Math.floor(msColumns - 2*Math.floor(msColumns/3));
//		
//		var smileyDiv = document.createElement("div");
//		if (this.isPlayerDied) {
//			smileyDiv.style.backgroundImage = "url('https://raw.githubusercontent.com/strahlistvan/minesweeper/devjs/Images/sad.png')";
//      TimeCounter.stopClock();
//    }
//		else if (this.isPlayerWin) {
//			smileyDiv.style.backgroundImage = "url('https://raw.githubusercontent.com/strahlistvan/minesweeper/devjs/Images/win.jpg')";T
//    }
//		else {
//			smileyDiv.style.backgroundImage = "url('https://raw.githubusercontent.com/strahlistvan/minesweeper/devjs/Images/smile.png')"; 
//}
//		
//		smileyDiv.style.backgroundSize = "cover";
//		smileyDiv.style.height = "50px";
//		smileyDiv.style.width = "50px";
//		smileyDiv.style.margin = "0 auto 0";
//		
//			smileyDiv.onclick = function() 
//		{ 
//			TimeCounter.stopClock();
//			TimeCounter.resetClock();
//			MineSweeper.create(targetDiv.id); 
//		}
//		
//		thSun.appendChild(smileyDiv);
//		
//		var thTime = document.createElement("th");
//		thTime.id = "timeboard";
//		thTime.colSpan = Math.floor(msColumns/3);
//		
//		thTime.appendChild(TimeCounter.getTimerDivElement());
//			
//		row.appendChild(thScore);
//		row.appendChild(thSun);
//		row.appendChild(thTime);
//		
//		thead.appendChild(row);
//		
//		return thead;
//	},
//	
//	openField: function(row,  col)
//	{
//		var neighbourCount = MineSweeper.countNeigbourMines(row, col);
//		
//		//msField.opened = true;
//		this.grid[row][col].opened = true;		
//
//		this.grid[row][col].getButton().style.backgroundImage = "url('https://raw.githubusercontent.com/strahlistvan/minesweeper/devjs/Images/"+neighbourCount+".png')";
//		this.grid[row][col].getButton().style.backgroundSize = "cover";
//
//		//if it's not empty, we don't need to flood fill
//		if (neighbourCount > 0)
//			return;
//		
//		var queue = [];
//		queue.push({x: row, y: col});
//		
//		
//		while (queue.length > 0)
//		{
//			var nextFieldCoord = queue.pop();
//			
//			var x = nextFieldCoord.x;
//			var y = nextFieldCoord.y;
//						
//			//left neighbour 
//			if (x > 0 && !this.grid[x-1][y].opened )
//			{
//				this.grid[x-1][y].opened = true;		
//				neighbourCount = MineSweeper.countNeigbourMines(x-1, y);
//				
//				if (MineSweeper.countNeigbourMines(x-1, y) === 0)
//					queue.push({x: x-1, y: y});
//			}
//			//right neighbour 			
//			if (x < this.grid.length-1 && !this.grid[x+1][y].opened )
//			{
//				this.grid[x+1][y].opened = true;		
//				neighbourCount = MineSweeper.countNeigbourMines(x+1, y);
//				
//				if (MineSweeper.countNeigbourMines(x+1, y) === 0)
//					queue.push({x: x+1, y: y});
//
//			}
//			//top neighbour 			
//			if (y > 0 && !this.grid[x][y-1].opened )
//			{
//				this.grid[x][y-1].opened = true;		
//				neighbourCount = MineSweeper.countNeigbourMines(x, y-1);
//								
//				if (MineSweeper.countNeigbourMines(x, y-1) === 0)
//					queue.push({x: x, y: y-1});
//			}
//			//bottom neighbour 			
//			if (y < this.grid[x].length-1 && !this.grid[x][y+1].opened )
//			{
//				this.grid[x][y+1].opened = true;		
//				neighbourCount = MineSweeper.countNeigbourMines(x, y+1);
//				
//				if (MineSweeper.countNeigbourMines(x, y+1) === 0)
//					queue.push({x: x, y: y+1});
//
//			}
//			//top left neighbour 
//			if (x > 0 && y > 0 && !this.grid[x-1][y-1].opened )
//			{
//				this.grid[x-1][y-1].opened = true;		
//				neighbourCount = MineSweeper.countNeigbourMines(x-1, y-1);
//				
//				if (MineSweeper.countNeigbourMines(x-1, y-1) === 0)
//					queue.push({x: x-1, y: y-1});
//			}
//			//top right neighbour 			
//			if (x < this.grid.length-1 && y > 0 && !this.grid[x+1][y-1].opened )
//			{
//				this.grid[x+1][y-1].opened = true;		
//				neighbourCount = MineSweeper.countNeigbourMines(x+1, y-1);
//				
//				if (MineSweeper.countNeigbourMines(x+1, y-1) === 0)
//					queue.push({x: x+1, y: y-1});
//
//			}
//			//bottom left neighbour 
//			if (x > 0 && y < this.grid[x].length-1 && !this.grid[x-1][y+1].opened )
//			{
//				this.grid[x-1][y+1].opened = true;		
//				neighbourCount = MineSweeper.countNeigbourMines(x-1, y+1);
//				
//				if (MineSweeper.countNeigbourMines(x-1, y+1) === 0)
//					queue.push({x: x-1, y: y+1});
//			}
//			//bottom right neighbour 			
//			if (x < this.grid.length-1 && y < this.grid[x].length-1 && !this.grid[x+1][y+1].opened )
//			{
//				this.grid[x+1][y+1].opened = true;		
//				neighbourCount = MineSweeper.countNeigbourMines(x+1, y+1);
//				
//				if (MineSweeper.countNeigbourMines(x+1, y+1) === 0)
//					queue.push({x: x+1, y: y+1});
//			}			
//
//		 //	console.log(JSON.stringify(queue));
//		}	
//	},
//	
//	openAllFields: function() 
//	{
//		for (var i=0; i<this.grid.length; ++i)
//		{
//			for (var j=0; j<this.grid[i].length; ++j) 
//			{
//				this.grid[i][j].opened = true;
//			//	console.log("("+i+", "+j+").is_opened="+this.grid[i][j].isOpened());
//			}
//		}	
//	},
//	
//
//	getTargetDiv : function()
//	{
//		return targetDiv.id;
//	},
//	
//	hasOpenableField : function()
//	{
//		for (var i=0; i<this.grid.length; ++i)
//		{
//			for (var j=0; j<this.grid[i].length; ++j) 
//			{
//				if (!this.grid[i][j].opened && !this.grid[i][j].hasMine)
//				{
//				
//					console.log('('+i+','+j+')'+ 'is openable')
//					return true;
//
//				}
//			}
//		}
//		console.log("No more openable field...");
//		return false;
//	}
//}
//
//window.onload = MineSweeper.create('gameboard');

