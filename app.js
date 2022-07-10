const display = document.querySelector('#display');
const buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button =>{
    button.addEventListener('click',(e)=>{
        try {
            switch(e.target.innerText){
                case 'C':
                    display.innerText='';
                    break;
                case '=':
                    display.innerText = eval(display.innerText);
                    break;
                case '%':
                    display.innerText = parseInt(display.innerText)/100;
                    break;
                default:
                    display.innerText+=e.target.innerText;
            }
            
        } catch {
            display.innerText = 'Error';
            
        }
       
    });
});

