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
let quessed =[]

function randomWords(){

  return  answer = programing_languages[Math.floor(Math.random() * programing_languages.length )]

}

function generateButton(){

    let buttons= `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split('').map((item)=>
        `
        <button id="button" class="bg-blue-200 m-2 py-2 px-3 rounded border-[2px] border-slate-400 hover:shadow-slate-500 shadow-lg" onclick="handleguess('`+item+ `')" >
        `+item+`
        <button/>

        `
    )


    document.getElementById('all-buttons').innerHTML= buttons.join('')

}


function handleguess(name){
    
}

generateButton()
