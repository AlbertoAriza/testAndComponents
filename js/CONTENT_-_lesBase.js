/*GESTIÓN DE SONIDO -- MUSIC OBJECT*/
let soundEffects = {
    bso: new Audio("highSchoolStories/bsoSliceOfLife.mp3"),
    sfxGasp: new Audio("highSchoolStories/sfxGaspFemale3.mp3"),
    sfxDoor: new Audio("highSchoolStories/sfxDoorOpeningClosing.mp3"),
    sfxYawn: new Audio("highSchoolStories/sfxYawnLongFemale.mp3"),
    sfxBingo: new Audio("highSchoolStories/sfxSentenceBingo.mp3"),
    sfxWrongAnswer: new Audio("highSchoolStories/sfxSadSigh.mp3"),
    sfxNext: new Audio("highSchoolStories/sfxNext.m4a"),
    sfxLaugh40: new Audio("highSchoolStories/sfxFemaleLaugh40.mp3"),
    sfxMaleLaugh17: new Audio("highSchoolStories/sfx_maleLaugh17.mp3"),
    sfxFemaleBeFriends: new Audio("highSchoolStories/sfxFemaleIHopeWeCanBeFriends.mp3"),
  };

  const getGameBoard = document.querySelector('.gameBoard');



/*___       _        _   _                       _     
 |_ _|_ _  (_)___ __| |_(_)___ _ _    __ ___  __| |___ 
  | || ' \ | / -_) _|  _| / _ \ ' \  / _/ _ \/ _` / -_)
 |___|_||_|/ \___\__|\__|_\___/_||_| \__\___/\__,_\___|
         |__/ 
*/

// CONTROL DE INYECCIÓN DE CÓDIGO
let controlStartScreen = true;
let controlStoryScreenCodeInjection = true;
let controlQuizMChCodeInject = true;
/* ---------- FIN ---------- */

//  → CÓDIGO DE START SCREEN
let startScreenCode = `
<section class="startScreenSection">
     <!--startScreenSection_leftMenu-->
     <!--DOCUMENTACIÓN: Este 'div' conforma la parte izquierda de la pantalla de la 'startScreenSection'.
       Esta incluye el botón de inicio del juego.-->
     <div class="startScreenSection_leftMenu">
       <!--startScreenSection_leftMenu_leftMenuButton-->
       <!--DOCUMENTACIÓN: Botón de inicio del juego.-->
       <button class="startScreenSection_leftMenu_leftMenuButton">Start Game</button>
     </div>
     <!-------------------------------->

     <!--startScreenSection_rightMenu-->
     <!--DOCUMENTACIÓN: Este 'div' conforma la parte derecha de 'startScreenSection' con las imágenes que suben de una en una.-->
     <div class="startScreenSection_rightMenu">
         
       <!--Div de img 1-->
       <!--DOCUMENTACIÓN: Imagen de Akari que sube poco a poco.-->
       <div class="startScreenSection_rightMenu_ImgContainer" id="startScreenSection_rightMenu_ImgContainer1">
         <img src="highSchoolStories/girl1happy.png" alt="" class="startScreenSection_rightMenu_ImgContainer_img"/>
       </div>
         
       <!--Div de img 2-->
       <!--DOCUMENTACIÓN: Imagen de Sakura que sube poco a poco.-->
       <div class="startScreenSection_rightMenu_ImgContainer" id="startScreenSection_rightMenu_ImgContainer2">
         <img src="highSchoolStories/girl2happy.png" alt="" class="startScreenSection_rightMenu_ImgContainer_img"/>
       </div>
       
       <!--Div de img 3-->
       <!--DOCUMENTACIÓN: Imagen de Haruki que sube poco a poco.-->
       <div class="startScreenSection_rightMenu_ImgContainer" id="startScreenSection_rightMenu_ImgContainer3">
         <img src="highSchoolStories/boy1.png" alt="" class="startScreenSection_rightMenu_ImgContainer_img"/>
       </div>
       
       <!--Div de img 4-->
       <!--DOCUMENTACIÓN: Imagen de Mrs Himari que sube poco a poco.-->
       <div class="startScreenSection_rightMenu_ImgContainer" id="startScreenSection_rightMenu_ImgContainer4">
         <img src="highSchoolStories/teacher.png" alt="" class="startScreenSection_rightMenu_ImgContainer_img"/>
       </div>
     
       <!--Div de img 5-->
       <!--DOCUMENTACIÓN: Imagen de Headmistress que sube poco a poco.-->
       <div class="startScreenSection_rightMenu_ImgContainer" id="startScreenSection_rightMenu_ImgContainer5">
         <img src="highSchoolStories/headMaster01.png" alt="" class="startScreenSection_rightMenu_ImgContainer_img"/>
       </div>
     </div>
   </section>
`;

//  → CÓDIGO DE STORY SCREEN
  let storyScreen = `
    <section id="storyContainer"> <!--  Este es el container que contiene la foto en la historia. Tan grande como #gameBoard-->

        <div id="storyTellingContainer">

            <!-- Foto del personaje de la izquierda. -->
            <div class="storyImgContainer" id="storyImgContainer--left">
                <img src="" alt="" id="storyImgLeft" />
            </div>

            <!--  Container del texto de la charla. -->
            <div id="storyTextContainer">
                <p class="bocadilloToLeft" id="storyText"></p>
            </div>

            <!-- Foto del personaje de la derecha. -->
            <div class="storyImgContainer" id="storyImgContainer--right">
                <img src="" alt="" id="storyImgRight" />
            </div>
        </div>
    </section>
  `;

/* ---------- FIN ---------- */

//  → CÓDIGO DE QUIZ MULTIPLE-CHOICE
  let quizScreenMultipleChoice = `
  <!--ZONA DE JUEGO TOTAL-->
    <section id="gameSection">
      <!--DATOS BARRA SUPERIOR DE LA PANTALLA-->
      <div id="barraSuperior">
        <h1 id="gameTitle">LONDONEYE STORIES - LAST HOLIDAY</h1>
      </div>

      <!--DATOS BARRA MEDIA DE PANTALLA PARA RESPUESTAS-->
      <div id="barraMedia">
        <button class="answerContainer answersContainer" id="answerContainer1" data-code="4">Answer 1</button>

        <button class="answerContainer answersContainer" id="answerContainer2" data-code="5">Answer 2</button>

        <button class="answerContainer answersContainer" id="answerContainer3" data-code="6">Answer 3</button>
      </div>

      <!--GRÁFICOS DE LA PARTE INFERIOR DE LA PANTALLA-->
      <div id="barraInferior">

        <!-- IMAGEN IZQUIERDA-->
        <div id="containerLeftGirl">
          <img src="" alt="" id="imgGirlLeft" class="imgGirl" />
        </div>

        <!-- BOCADILLO CENTRO-->
        <div id="containerBocadillo">
          <p id="questionText">Text</p>
        </div>

        <!-- IMAGEN DERECHA-->
        <div id="containerRightGirl">
          <img src="" alt="" id="imgGirlRight" class="imgGirl" />
        </div>
      </div>
    </section>
  `;
/* ---------- FIN ---------- */

/* ___                  _                 _         
  / __|__ _ _ __  ___  | |   ___  __ _ __| |___ _ _ 
 | (_ / _` | '  \/ -_) | |__/ _ \/ _` / _` / -_) '_|
  \___\__,_|_|_|_\___| |____\___/\__,_\__,_\___|_|
*/
startScreenLoad();