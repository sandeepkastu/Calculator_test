let display = document.querySelector(".display");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e)=>{
      switch(e.target.innerText){
            case 'C':
                  display.innerText=''
                  break;
            case '=':
                  display.innerText=eval(display.innerText)
                  break;
            default:
                  display.innerText+=e.target.innerText           
      }
  });
});

