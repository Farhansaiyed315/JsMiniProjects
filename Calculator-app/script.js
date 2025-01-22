let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button')


let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }

        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }

        else if (e.target.innerHTML === 'Del') {
            if (string.length > 0) { // Check if the string is not empty
                string = string.substring(0, string.length - 1); // Remove the last character
            }
            input.value = string; // Update the input box
        }
        


        else {
            string += e.target.innerHTML;
            input.value = string;
        }

    })
})