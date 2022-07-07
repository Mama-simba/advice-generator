

let button = document.querySelector("button");
let adviceQuote = document.querySelector("#advice");
let adviceNumber = document.querySelector("#number");


function generateRandomAdvice(){

    let randomNumber = Math.floor(Math.random() * 224);

    fetch(`https://api.adviceslip.com/advice/${randomNumber}`)
    .then(response => response.json())
    .then(data => {
      adviceNumber.innerHTML = `#${data.slip.id}`;
      adviceQuote.innerHTML = `"${data.slip.advice}"`;
    })
    .catch(error => {
        console.error(error);
    });

}

generateRandomAdvice();


button.addEventListener("click", generateRandomAdvice);

   











