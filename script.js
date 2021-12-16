function randomNumber(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function enviou(button) {
    const exercicio = button.parentElement
    const num1 = parseInt(exercicio.querySelector(".num1").innerText)
    const num2 = parseInt(exercicio.querySelector(".num2").innerText)
    let resposta = exercicio.querySelector('.resposta').value
    const operador =  exercicio.dataset.operation


   if(operador === "soma") {
        if (resposta == num1 + num2){
            exercicio.style.backgroundColor = "#aeffae"
        } else{
            exercicio.style.backgroundColor = "#ffaeae"
        }
   }


   if(operador === "subtracao"){
    if (resposta == num1 - num2){
        exercicio.style.backgroundColor = "#aeffae"
    } else{
        exercicio.style.backgroundColor = "#ffaeae"
        }
    }
   
   if(operador === "multiplicacao"){
       if (resposta == num1 * num2){
        exercicio.style.backgroundColor = "#aeffae"
       } else{
        exercicio.style.backgroundColor = "#ffaeae"
       }
   }

   if(operador === "divisao") {
    let teste = (num1 / num2).toFixed(2)
    // console.log(teste)
     if (resposta == teste){
        exercicio.style.backgroundColor = "#aeffae"
     } else{
        exercicio.style.backgroundColor = "#ffaeae"
     }
}
  
} 

let exercicios = document.querySelectorAll(".enunciados")

function atualizaNum(button){
    const exercicio = button.parentElement
    let num1 = exercicio.querySelector('.num1');
    let num2 = exercicio.querySelector('.num2');

    num1.innerText = randomNumber(100,1000)
    num2.innerText = randomNumber(2,100)

    exercicio.style.backgroundColor = "#ffffff"
}

function changeBackColor(input){
    const exercicio = input.parentElement
    exercicio.style.backgroundColor = "#ffffff"
}




// exercicios.forEach(exercicio => {
//     let num1 = exercicio.querySelector('.num1');
//     let num2 = exercicio.querySelector('.num2');

//     num1.innerText = randomNumber(100,1000)
//     num2.innerText = randomNumber(2,100)
// })















// _________________________________________________________________________________________________________________________________________


// let rndN1_0 = randomN1(1,10)
// let rndN1_1 = randomN2 (1, 10)

// let n1_0 = document.getElementById('1.0')
// n1_0.innerText = rndN1_0

// let n1_1 = document.getElementById('1.1')
// n1_1.innerText =  rndN1_1

// function enviouE1(){
//     let result = document.getElementById("resposta1").value
//     result == rndN1_0 + rndN1_1 ? console.log("Parabéns") : console.log("Errou")
// }






// let rndN2_0 = randomN1(1,100)
// let rndN2_1 = randomN2 (1, 10)

// let n2_0 = document.getElementById('2.0')
// n2_0.innerText = rndN2_0

// let n2_1 = document.getElementById('2.1')
// n2_1.innerText = rndN2_1

// function enviouE2(){
//     let result = document.getElementById("resposta2").value
//     result == rndN2_0 / rndN2_1 ? console.log("A") : console.log("B")
// }