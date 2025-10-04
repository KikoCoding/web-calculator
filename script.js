const numbers = document.querySelectorAll(".btn");
const expression = document.querySelector("#user-input");
const result = document.querySelector("#result");

const del = document.querySelector("#del");
const clear = document.querySelector("#ac");
const eval = document.querySelector("#equals");

let operation = "";

numbers.forEach((btn) =>{
    btn.addEventListener('click', () => {
        console.log(btn.id);
        switch(btn.id){

            // If a plus sign was clicked

            case "+":
                if(expression.textContent.charAt(expression.textContent.length - 1) == "+"){
                    break;
                }
                // add function for every operation (evaluate the previous operation before staring another one)
                
                expression.textContent = expression.textContent + btn.textContent;                
                operation = "add";
                break;

            // If a minus sign was clicked

            case "–":
                if(expression.textContent.charAt(expression.textContent.length - 1) == "–"){
                    break;
                }
                expression.textContent = expression.textContent + btn.textContent;                
                operation = "sub";
                break;

            // If a multiplication sign was clicked

            case "×":
                if(expression.textContent.charAt(expression.textContent.length - 1) == "×"){
                    console.log("should not appear");
                    break;
                }
                console.log("should appear");
                expression.textContent = expression.textContent + btn.textContent;                
                operation = "mul";
                break;

            // If a division sign was clicked

            case "÷":
                if(expression.textContent.charAt(expression.textContent.length - 1) == "÷"){
                    break;
                }
                expression.textContent = expression.textContent + btn.textContent;                
                operation = "div";
                break;
            
            default:
                expression.textContent = expression.textContent + btn.textContent; 
                break;
        }
    })
})