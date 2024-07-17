/* ___ ___ _____   ___ _    ___ __  __ ___ _  _ _____ ___          ___   _   __  __ ___   ___ ___ ___ _____ ___ ___  _  _ 
  / __| __|_   _| | __| |  | __|  \/  | __| \| |_   _/ __|  ___   / __| /_\ |  \/  | __| / __| __/ __|_   _|_ _/ _ \| \| |
 | (_ | _|  | |   | _|| |__| _|| |\/| | _|| .` | | | \__ \ |___| | (_ |/ _ \| |\/| | _|  \__ \ _| (__  | |  | | (_) | .` |
  \___|___| |_|   |___|____|___|_|  |_|___|_|\_| |_| |___/        \___/_/ \_\_|  |_|___| |___/___\___| |_| |___\___/|_|\_|
*/



//GET DE LAS RESPUESTAS
let getGameSection;
let getBarraMedia;
let getAnswerContainerArray;

//GET DE LAS PREGUNTAS Y VARIABLES DE CONTROL DE ARRAYS DE PREGUNTAS
let getQuestionText;
let setQuestionNumber = 0; // CONTROLA EL BLOQUE DE CONVERSACIÓN EN EL QUE ESTAMOS
let numberOfQuestions = 0; // CONTROLA LA PREGUNTA EN LA QUE NOS ENCONTRAMOS DENTRO DEL BLOQUE
let correctQuestions = 0; // CONTROLA EL NÚMERO DE PREGUNTAS ACERTADAS

//GET DE LAS IMGs

let getGameImgLeft;
let getGameImgRight;






/*___ _____ _   ___ _____   ___ _   _ _  _  ___ _____ ___ ___  _  _ ___ 
 / __|_   _/_\ | _ \_   _| | __| | | | \| |/ __|_   _|_ _/ _ \| \| / __|
 \__ \ | |/ _ \|   / | |   | _|| |_| | .` | (__  | |  | | (_) | .` \__ \
 |___/ |_/_/ \_\_|_\ |_|   |_|  \___/|_|\_|\___| |_| |___\___/|_|\_|___/
*/
const startFunction = function(){

  // Code Injection
  if(controlQuizMChCodeInject){
    controlQuizMChCodeInject = false;
    getGameBoard.innerHTML = quizScreenMultipleChoice;
    //REASIGNAMOS LOS GET DE LOS ELEMENTOS
    getGameSection = document.getElementById("gameSection");
    getBarraMedia = document.getElementById('barraMedia');
    getAnswerContainerArray = document.querySelectorAll('.answerContainer');

    //GET DE LAS PREGUNTAS Y VARIABLES DE CONTROL DE ARRAYS DE PREGUNTAS
    getQuestionText = document.getElementById("questionText");

    //GET DE LAS IMGs
    getGameImgLeft = document.getElementById("imgGirlLeft");
    getGameImgRight = document.getElementById("imgGirlRight");
  }

  
  // Asignamos pregunta y respuestas
  getQuestionText.innerHTML = questions[setQuestionNumber][numberOfQuestions][0];
  getAnswerContainerArray.forEach((element, index) => {
    element.classList.remove('incorrectAnswer', 'incorrectAnswerChosen', 'correctAnswerChosen', 'correctAnswer');
    element.classList.add('answersContainer');
    element.innerHTML = questions[setQuestionNumber][numberOfQuestions][index+1]
  });
  getGameImgLeft.src = '../highSchoolStories/girl1happy.png';
  getGameImgRight.src = '../highSchoolStories/girl2happy.png';
  soundEffects.sfxNext.play();

  // Creamos función de lógica de clicks para asignar al eventListener
  const logicaDeClicks = function(e){
    let clicked = e.target.closest('.answerContainer');
    
    //  Guarda por si hace click fuera de los botones.
    if(!clicked) return;

    // Meter aquí todo el código al hacer click al botón.
    // 1.- Mirar si la respuesta es verdadera o falsa.
    // 1.1.- Si es verdadera, ponerla en verde
    if(questions[setQuestionNumber][numberOfQuestions][clicked.dataset.code]) {
      clicked.classList.remove('answersContainer');
      clicked.classList.add('correctAnswerChosen');
      // Cambiar caras de muñecas y sonidos
      getGameImgLeft.src = "../highSchoolStories/girl1veryHappy.png"
      soundEffects.sfxBingo.play();
      correctQuestions++;
    }
    // 1.2.- Si es falsa, ponerla en rojo
    else {
      clicked.classList.remove('answersContainer');
      clicked.classList.add('incorrectAnswerChosen');
      // Cambiar caras de muñecas y sonidos
      getGameImgLeft.src = "../highSchoolStories/girl1surprised.png"
      soundEffects.sfxWrongAnswer.play();
    }
      
    // cambiar el resto de respuestas a sus colores de verdadero o falso
    setTimeout(function(){
      getAnswerContainerArray.forEach(function(element){
        if(element === clicked) return;
        if (questions[setQuestionNumber][numberOfQuestions][element.dataset.code]) {
          element.classList.remove('answersContainer');
          element.classList.add('correctAnswer');
        }
        else {
          element.classList.remove('answersContainer');
          element.classList.add('incorrectAnswer');
        }
      });
    }, 1000);

    //  Anulamos el evento para que no se hagan dobles clicks
    getBarraMedia.removeEventListener('click', logicaDeClicks);

    //  Ajustar los contadores de preguntas y pasar a la siguiente pregunta.
    setTimeout(function(){
      numberOfQuestions++;
      if(numberOfQuestions < questions[setQuestionNumber].length) startFunction();
      else {
        setQuestionNumber++;
        controlQuizMChCodeInject = true;
        console.log('fin de preguntas');
      }
      
    }, 3000)
  };


  getBarraMedia.addEventListener('click', logicaDeClicks);
}
startFunction()




