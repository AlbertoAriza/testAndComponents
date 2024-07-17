/*___  _      _              
 |   \(_)__ _| |___  __ _ ___
 | |) | / _` | / _ \/ _` (_-<
 |___/|_\__,_|_\___/\__, /__/
                    |___/
*/

let conversationPages = [
  [
    /*00-00*/ ['', `Hello my friend! How is it going?<br> Do you remember me? I'm Akari.<br>We met on our first day at school.<br>A new day to attend classes and learn lots of new things!<br><br><span class= "bold">[Click to continue]</span>`, true, false, true, '../highSchoolStories/girl1happy.png', '', '../highSchoolStories/fondoCalle01.jpg'],
    /*00-01*/ ['', `Today, we're not late.<br>Let's see if we can get to LondonEye School<br>and find our friend Sakura.<br><br><span class="bold">[Click to continue]</span>`, false, false, false, '', '', ''],
    /*00-02*/ ['', `Here we are. A new day at school.<br>I love this place.<br>All these people learning English together.<br><br><span class="bold">[Click to continue]</span>`, true, false, true, '../highSchoolStories/girl1happy.png', '', '../highSchoolStories/fondoSchoolFacade.png'],
    /*00-03*/ ['', `Look! It's Sakura.<br>Sakura! Over here!<br><br><span class="bold">[Click to continue]</span>`, false, false, false, '', '', ''],
    /*00-04*/ ['cambio', `Hello Akari.<br>Hello my friend.<br>How are you?<br><br><span class="bold">[Click to continue]</span>`, false, true, false, '', '../highSchoolStories/girl2happy.png', ''],
    /*00-05*/ ['cambio', `Fine! I think we have a new class with Mrs. Himari.<br>I love her classes.<br><br><span class="bold">[Click to continue]</span>`, false, false, false, '', '', ''],
    /*00-06*/ ['cambio', `Yes! It's our first class today.<br>Let's go to our classroom. The class is about to start.<br><br><span class="bold">[Click to continue]</span>`, false, false, false, '', '', ''],
    /*00-07*/ ['cambio', `Here we are. Let's take our seats. Mrs Himari is coming.<br><br><span class="bold">[Click to continue]</span>`, false, false, true, '', '', '../highSchoolStories/fondoAula.jpg'],
    /*00-08*/ ['cambio', `Hello students. Is everybody here today?<br>Very good! Let's start the class.<br>Today we are going to study the "PAST TENSE"<br><br><span class="bold">[Click to continue]</span>`, true, true, false, '', '../highSchoolStories/teacher.png', ''],
    /*00-09*/ ['', `We are going to learn about the "PAST SIMPLE"<br>and "PAST CONTINUOUS".<br><br><span class="bold">[Click to continue]</span>`, false, false, false, '', '', ''],
    /*00-10*/ ['', `So, the past simple...<br><br><span class="bold">[Click to continue]</span>`, /*fotoLeft*/false, /*fotoRight*/false, /*fotoFondo*/false, '', '', ''],
    /*00-11*/ ['', `Text<br><br><span class="bold">[Click to continue]</span>`, false, false, false, '', '', ''],
    /*00-12*/ ['', `Text<br><br><span class="bold">[Click to continue]</span>`, false, false, false, '', '', ''],
    /*00-13*/ ['', `Text<br><br><span class="bold">[Click to continue]</span>`, false, false, false, '', '', ''],
    
  ],
  [
    /*01-00*/ ['', `Text<br><br><span class="bold">[Click to continue]</span>`, false, false, false, '', '', ''],
    /*01-01*/ ['', `Text<br><br><span class="bold">[Click to continue]</span>`, false, false, false, '', '', ''],
    /*01-02*/ ['', `Text<br><br><span class="bold">[Click to continue]</span>`, false, false, false, '', '', ''],
    /*01-03*/ ['', `Text<br><br><span class="bold">[Click to continue]</span>`, false, false, false, '', '', ''],
    /*01-04*/ ['', `Text<br><br><span class="bold">[Click to continue]</span>`, false, false, false, '', '', ''],
    /*01-05*/ ['', `Text<br><br><span class="bold">[Click to continue]</span>`, false, false, false, '', '', ''],
    /*01-06*/ ['', `Text<br><br><span class="bold">[Click to continue]</span>`, false, false, false, '', '', ''],
    /*01-07*/ ['', `Text<br><br><span class="bold">[Click to continue]</span>`, false, false, false, '', '', ''],
    /*01-08*/ ['', `Text<br><br><span class="bold">[Click to continue]</span>`, false, false, false, '', '', ''],
    /*01-09*/ ['', `Text<br><br><span class="bold">[Click to continue]</span>`, false, false, false, '', '', ''],
    /*01-10*/ ['', `<span class="bold">THE END</span><br><br>LondonEye English School<br>© Todos los derechos reservados 2024.`,false, false, false, '', '', ''],

  ],
];

/* ---------- FIN ---------- */

/* ___              _   _             
  / _ \ _  _ ___ __| |_(_)___ _ _  ___
 | (_) | || / -_|_-<  _| / _ \ ' \(_-<
  \__\_\\_,_\___/__/\__|_\___/_||_/__/
*/

//PREGUNTAS DE LOS DISTINTOS ROUNDS
let questions = [
  //  PRIMER SET DE PREGUNTAS
  [
    [
        `<span class = "bold">Which one of these sentences is correct?</span`,
        `Maria and Carlos am my friends`,
        `Maria and Carlos is my friend`,
        `Maria and Carlos are my friends`,
        false,
        false,
        true,
    ], 
    [
        `Here comes the second question.<br><span class = "bold">Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">_____ some good news about the new classes.</span>`,
        "There be",
        "There is",
        "There are",
        false,
        true,
        false,
    ], 
    [
        `<span class = "bold">Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">Mark and Sarah _____ want to play football.</span>`,
        `don't`,
        `doesn't`,
        `aren't`,
        true,
        false,
        false,
    ], 
    [
        `<span class = "bold">Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">Karen _____ do her homework.</span>`,
        `not`,
        `isn't`,
        `doesn't`,
        false,
        false,
        true,
    ], 
    [
        `<span class = "bold">Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">They _____ got much money to spend.</span>`,
        `haven't`,
        `don't have`,
        `not`,
        true,
        false,
        false,
    ],
    [
      `<span class = "bold">Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">The water __________. Can you turn it off?.</span>`,
      `boils`,
      `boiling`,
      `is boiling`,
      false,
      false,
      true,
    ],
    [
      `<span class = "bold">Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">My friend Anna is so bossy! She's _____ telling me what to do.</span>`,
      `always`,
      `often`,
      `sometimes`,
      true,
      false,
      false,
    ],
    [
      `<span class = "bold">Which one of these sentences is correct?</span`,
      `They are a book and some photos on the table.`,
      `There is a book and some photos on the table.`,
      `There are a book and some photos on the table.`,
      false,
      true,
      false,
    ],
    [
      `<span class = "bold">Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">People _____ sad these days because of the news.</span>`,
      `am`,
      `is`,
      `are`,
      false,
      false,
      true,
    ],
    [
      `<span class = "bold">Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">I _____ a noise. Someone is opening the door.</span>`,
      `hear`,
      `hearing`,
      `am hearing`,
      true,
      false,
      false,
    ]
  ],
  //  SEGUNDO SET DE PREGUNTAS
 [
    [
      `<span class = "bold">Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">His name _____ Haruki, and he is in our class.</span>`,
      `am`,
      `is`,
      `are`,
      false,
      true,
      false,
    ],
    [
      `<span class = "bold">Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">He _____ a brother.</span>`,
      `has got`,
      `have got`,
      `have`,
      true,
      false,
      false,
    ],
    [
      `<span class = "bold">Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">He and his brother _____ the best students in the class.</span>`,
      `am`,
      `is`,
      `are`,
      false,
      false,
      true,
    ],
    [
      `<span class = "bold">Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">_____ something strange about him.</span>`,
      `There be`,
      `There is`,
      `There are`,
      false,
      true,
      false,
    ],
    [
      `<span class = "bold">Choose the best option to complete this sentence:</span><br><br><span class = "cursiva">He is always _____, and I don't know why.</span>`,
      `smile`,
      `smiles`,
      `smiling`,
      false,
      false,
      true,
    ]
 ],
];

/* ---------- FIN ---------- */