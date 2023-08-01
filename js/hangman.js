let programing_languages = [
  "Javascript",
  "Python",
  "Go",
  "Java",
  "Kotlin",
  "PHP",
  "C",
  "Swift",
  "R",
  "Ruby",
  "Matlab",
  "TypeScript",
  "Scala",
  "SQL",
  "HTML",
  "CSS",
  "NoSQL",
  "Rust",
  "Perl",
];

let answer ="";
let maxWrong =6 ;
let mistakes= 0;
let guessed =[]
let wordStatus= null

function randomWords(){

    answer = programing_languages[Math.floor(Math.random() * programing_languages.length )]

}

function generateButton(){

    let buttons= `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split('').map((item)=>
        `
        <button id= '`+item+`' class="bg-blue-200 m-2 py-2 px-3 rounded border-[2px] border-slate-400 hover:shadow-slate-500 shadow-lg" onclick="handleguess('`+item+ `')" >
        `+item+`
        <button/>

        `
    )


    document.getElementById('all-buttons').innerHTML= buttons.join('')

}

function handleguess(chosenLetter){

    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null

  //  document.getElementById(chosenLetter).setAttribute('disabled',true)

  console.log(answer);
    if(answer.indexOf(chosenLetter) >= 0 ){

        guessWord()
        checkIfwon()

    }else if(answer.indexOf(chosenLetter) >= -1 ){

        mistakes++
        updateMistake()

    }



    
}

function checkIfwon(){
    if(wordStatus === answer ){
        document.getElementById('keyboard').innerHTML = 'you won'
    }
}


function updateMistake(){
    document.getElementById("mistakes").innerHTML = mistakes
}


function guessWord(){

    wordStatus = answer.split('').map((item)=> guessed.indexOf(item) >= 0 ? item : '_').join('')

    document.getElementById('wordStatus').innerHTML= wordStatus
    console.log(wordStatus);


}

generateButton()
handleguess()
randomWords()
