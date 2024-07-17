/*
   ___ ___ _____   ___ _    ___ __  __ ___ _  _ _____ ___         ___ _____ ___  _____   __  ___ ___ ___ _____ ___ ___  _  _ 
 /  __| __|_   _| | __| |  | __|  \/  | __| \| |_   _/ __|  ___  / __|_   _/ _ \| _ \ \ / / / __| __/ __|_   _|_ _/ _ \| \| |
 | (_ | _|  | |   | _|| |__| _|| |\/| | _|| .` | | | \__ \ |___| \__ \ | || (_) |   /\ V /  \__ \ _| (__  | |  | | (_) | .` |
  \___|___| |_|   |___|____|___|_|  |_|___|_|\_| |_| |___/       |___/ |_| \___/|_|_\ |_|   |___/___\___| |_| |___\___/|_|\_|
   */

let startGameBtn;;

/*___ _____ _   ___ _____   ___ _   _ _  _  ___ _____ ___ ___  _  _ ___ 
 / __|_   _/_\ | _ \_   _| | __| | | | \| |/ __|_   _|_ _/ _ \| \| / __|
 \__ \ | |/ _ \|   / | |   | _|| |_| | .` | (__  | |  | | (_) | .` \__ \
 |___/ |_/_/ \_\_|_\ |_|   |_|  \___/|_|\_|\___| |_| |___\___/|_|\_|___/
*/

//  function to inject the code and prepare the buttons for interaction
const startScreenLoad = function(){
   // 1.- inyectar el código
   getGameBoard = startScreenCode;
   // 2.- atrapamos elementos
   startGameBtn = document.querySelector(".startScreenSection_leftMenu_leftMenuButton");
   // 3.- añadimos funcionalidad al botón
   startGameBtn.addEventListener("click", function () {
      // código para pasar de la ventana START a la ventana STORY
      conversar()
   });
}





