let programing_languages = [
  "javascript",
  "python",
  "go",
  "java",
  "kotlin",
  "php",
  "c",
  "swift",
  "r",
  "ruby",
  "matlab",
  "typescript",
  "scala",
  "sql",
  "htlm",
  "css",
  "nosql",
  "rust",
  "perl",
];

let answer ="";
let maxWrong =6 ;
let mistakes= 0;
let guessed =[]
let wordStatus= null
document.getElementById("mistakes").innerHTML = mistakes
function randomWords(){

    answer = programing_languages[Math.floor(Math.random() * programing_languages.length )]

}

function generateButton(){

    let buttons= `abcdefghijklmnopqrstuvwxyz`.split('').map((item)=>
        `
        <button id= '`+item+`' onclick="handleguess('`+item+ `')"  class="bg-gray-500 text-white  m-5 rounded border-[2px] border-slate-700 py-2 px-3 disabled:bg-gray-300" >
        `+item+`
        </button>

        `
    )


    document.getElementById('all-buttons').innerHTML= buttons.join('')

}

function handleguess(chosenLetter){

    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null

   document.getElementById(chosenLetter).setAttribute('disabled',true)

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
    if(mistakes <= 6){
        document.getElementById("mistakes").innerHTML = mistakes
        document.getElementById('img-man').src = `./images/${mistakes}.jpg`;


    }
    if(mistakes >= 6){
        document.getElementById("lost-game").innerHTML = 'you lost :(';
        document.getElementById(chosenLetter).setAttribute('disabled',true)

    }
}


function guessWord(){

    wordStatus = answer.split('').map((item)=> guessed.indexOf(item) >= 0 ? item : ' _ ').join('')

    document.getElementById('wordStatus').innerHTML= wordStatus
   


}

generateButton()
randomWords()
guessWord()

function reset(){

    document.getElementById('img-man').src = './images/0.jpg';
    document.getElementById('keyboard').innerHTML= ''
    document.getElementById("lost-game").innerHTML= ''
    mistakes= 0
    guessed=[]
    randomWords()
    updateMistake()
    generateButton()
    guessWord()



}
