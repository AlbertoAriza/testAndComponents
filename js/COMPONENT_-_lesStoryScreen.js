/*__   ___   ___ ___   _   ___ _    ___ ___   ___ _  _ ___ ___ ___   _   _    ___ ___ 
  \ \ / /_\ | _ \_ _| /_\ | _ ) |  | __/ __| |_ _| \| |_ _/ __|_ _| /_\ | |  | __/ __|
   \ V / _ \|   /| | / _ \| _ \ |__| _|\__ \  | || .` || | (__ | | / _ \| |__| _|\__ \
    \_/_/ \_\_|_\___/_/ \_\___/____|___|___/ |___|_|\_|___\___|___/_/ \_\____|___|___/
*/
// → VARIABLES DE STORY
let getStoryText;
let getStoryImgContainerLeft;
let getStoryImgLeft;
let getStoryImgContainerRight;
let getStoryImgRight;
let getStoryContainer;
let vinetaConversacion = 0;
let setConversationNumber = 0; // CONTROLA EL BLOQUE DE CONVERSACIONES EN EL QUE NOS ENCONTRAMOS.



/* ___ ___ ___ _____ ___   __ _  _   ___  ___   ___  ___  _  _ ___ ___   ___  
  / __| __/ __|_   _|_ _|_/_/| \| | |   \| __| / __|/ _ \| \| |_ _|   \ / _ \ 
 | (_ | _|\__ \ | |  | |/ __ \ .` | | |) | _|  \__ \ (_) | .` || || |) | (_) |
  \___|___|___/ |_| |___\____/_|\_| |___/|___| |___/\___/|_|\_|___|___/ \___/ 
*/


let storySound = function(){
  if (vinetaConversacion === 1){
    soundEffects.bso.play();
    soundEffects.bso.volume = 0.03;
    soundEffects.sfxLaugh40.play();
  }else if (vinetaConversacion === 8){
    soundEffects.sfxDoor.play();
    soundEffects.sfxDoor.volume = 0.5;
  }else if (vinetaConversacion === 10){
    soundEffects.sfxYawn.play();
  }else if (vinetaConversacion === 4){

  }else if (vinetaConversacion === 5){

  }else if (vinetaConversacion === 6){

  }else if (vinetaConversacion === 7){

  }else if (vinetaConversacion === 8){

  }
}

/* ---------- FIN ---------- */

/* ___ ___  _  _ _____ ___  ___  _      ___  ___   ___ __  __   __ ___ ___ _  _ ___ ___ 
  / __/ _ \| \| |_   _| _ \/ _ \| |    |   \| __| |_ _|  \/  | /_// __| __| \| | __/ __|
 | (_| (_) | .` | | | |   / (_) | |__  | |) | _|   | || |\/| |/--\ (_ | _|| .` | _|\__ \
  \___\___/|_|\_| |_| |_|_\\___/|____| |___/|___| |___|_|  |_/_/\_\___|___|_|\_|___|___/
*/
let storyImage = function(){
  if(conversationPages[setConversationNumber][vinetaConversacion][2]) getStoryImgContainerLeft.innerHTML = `<img src="${conversationPages[setConversationNumber][vinetaConversacion][5]}" alt="" id="storyImgLeft" />`;
  if(conversationPages[setConversationNumber][vinetaConversacion][3]) getStoryImgContainerRight.innerHTML = `<img src="${conversationPages[setConversationNumber][vinetaConversacion][6]}" alt="" id="storyImgRight" />`;
  if(conversationPages[setConversationNumber][vinetaConversacion][4]) getStoryContainer.style.backgroundImage = "url(" + conversationPages[setConversationNumber][vinetaConversacion][7] + ")";
}

/* ---------- FIN ---------- */

/*_  _ _____ __  __ _    ___   ___ ___  ___ __  __   _ _____ _____ ___ _  _  ___ 
 | || |_   _|  \/  | |  | __| | __/ _ \| _ \  \/  | /_\_   _|_   _|_ _| \| |/ __|
 | __ | | | | |\/| | |__|__ \ | _| (_) |   / |\/| |/ _ \| |   | |  | || .` | (_ |
 |_||_| |_| |_|  |_|____|___/ |_| \___/|_|_\_|  |_/_/ \_\_|   |_| |___|_|\_|\___|
*/
//  → ASOCIAMOS TODOS LOS ELEMENTOS DEL HTML CON SUS RESPECTIVAS VARIABLES
let grabStoryElements  = function(){
  getStoryText = document.getElementById("storyText");
  getStoryImgContainerLeft = document.getElementById("storyImgContainer--left");
  getStoryImgContainerRight = document.getElementById("storyImgContainer--right");
  getStoryContainer = document.getElementById('storyContainer');
}

/* ---------- FIN ---------- */

/*___ ___   _   _    ___   ___ _   _ ___    ___ ___  _  _ _____ ___  ___  _      ___ _   _ _  _  ___ _____ ___ ___  _  _ ___ 
 |   \_ _| /_\ | |  / _ \ / __| | | | __|  / __/ _ \| \| |_   _| _ \/ _ \| |    | __| | | | \| |/ __|_   _|_ _/ _ \| \| / __|
 | |) | | / _ \| |_| (_) | (_ | |_| | _|  | (_| (_) | .` | | | |   / (_) | |__  | _|| |_| | .` | (__  | |  | | (_) | .` \__ \
 |___/___/_/ \_\____\___/ \___|\___/|___|  \___\___/|_|\_| |_| |_|_\\___/|____| |_|  \___/|_|\_|\___| |_| |___\___/|_|\_|___/
*/

//CAMBIOS EN LA DIRECCIÓN DEL BOCADILLO DE DIÁLOGO
let bocadilloDirection = function() {
  getStoryText.classList.toggle('bocadilloToLeft');
  getStoryText.classList.toggle('bocadilloToRight');
}

/* ---------- FIN ---------- */

/*___ ___   __ _    ___   ___  ___  
 | _ \ _ \_/_/| |  / _ \ / __|/ _ \ 
 |  _/   / __ \ |_| (_) | (_ | (_) |
 |_| |_|_\____/____\___/ \___|\___/ 
*/


let conversar = function(){
  // comprobamos si necesitamos inyectar código
  if(controlStoryScreenCodeInjection){
    controlStoryScreenCodeInjection = false;
    
    getGameBoard.innerHTML = storyScreen; // inyectamos el código

    grabStoryElements(); // atrapamos los elementos recien introducidos en la inyección de Código
  }

  if (vinetaConversacion < conversationPages[setConversationNumber].length){
    storyImage();
    storySound();
    if(conversationPages[setConversationNumber][vinetaConversacion][0] === "cambio") bocadilloDirection();
    getStoryText.innerHTML = conversationPages[setConversationNumber][vinetaConversacion++][1];
  } 
  else{
    console.log('hemos pasado a preguntas');
  } 
  
}

getStoryText.addEventListener('click', conversar);

/* ---------- FIN ---------- */
