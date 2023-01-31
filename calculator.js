const num=document.querySelectorAll('.button')

console.log(num)
num.addEventListener('click',Show)

function Show(){
      document.querySelector('display').innerHTML=num.innerText
      console.log(num.innerText)
}