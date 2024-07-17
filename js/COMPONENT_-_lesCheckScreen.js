const checkProgressFunction = function(data1, data2){

    // VARIABLES
    let preguntaA1 = 10;
    let preguntaA2 = 0;
    let preguntaB1 = 0;
    let preguntaB2 = 0;
    let preguntaC1 = 0;
    let preguntaC2 = 0;
    
    let rightQuestionsA1 = 9;
    let rightQuestionsA2 = 0;
    let rightQuestionsB1 = 0;
    let rightQuestionsB2 = 0;
    let rightQuestionsC1 = 0;
    let rightQuestionsC2 = 0;
    
    let counterListeningsA2 = 5;
    let counterListeningsB1 = 0;
    let counterListeningsB2 = 0;
    
    let rightListeningsA2 = 4;
    let rightListeningsB1 = 0;
    let rightListeningsB2 = 0;
    
    let getCheckScreenContainer = document.getElementById('checkScreen--mainContainer');
    getCheckScreenContainer.style.backgroundImage = 'url(../highSchoolStories/fondoTechnology.jpg)';
    
    let getCheckScreenTextContainer = document.getElementById('checkScreen--textContainer');
    getCheckScreenTextContainer.style.backgroundImage = 'url(../highSchoolStories/techBoard.png)';
    
    let progress1 = 100 * data1 / data2; // Aquí está la matemática
        
    const getProgressbar1 = document.querySelector(`.progressbar1`);
    getProgressbar1.setAttribute("role", "progressbar1");
    getProgressbar1.setAttribute("aria-valuenow", 0);
    getProgressbar1.setAttribute("aria-live", "polite")
      
    getProgressbar1.setAttribute("aria-valuenow", progress1);
    getProgressbar1.style.setProperty(`--progress1`, progress1 + "%");
}


