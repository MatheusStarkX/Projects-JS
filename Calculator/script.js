// Pega o input, output e tecla digitada
const keys = document.querySelectorAll('.key');
const display_input = document.querySelector('.input');
const display_output = document.querySelector('.output');

// Define o input como vazio
let input = '';

// Analisa a tecla apertada
for(let key of keys){   
    // Pega o dado da tecla
    const value = key.dataset.key;

    // Analisa o evento de clique
    key.addEventListener('click', () => {
        // Caso seja AC (limpar)
        if (value == 'clear'){
            input = '';
            display_input.textContent = '';
            display_output.textContent = '';
        } 
        // Caso seja < (limpar apenas a última tecla)
        else if (value == 'backspace'){
            input = input.slice(0, -1);
            display_input.textContent = CleanInput(input);
        } 
        // Caso seja = (calcula o resultado da operação)
        else if (value == '=') {
            let result = eval(PerpareInput(input));
            input = CleanOutput(result);
            display_input.textContent = '';
            display_output.textContent = input;
        } 
        // Caso seja os parênteses
        else if (value == 'brackets') {
            if ((input.indexOf('(') == -1) || (input.indexOf('(') != -1 && input.indexOf(')') != -1 && input.lastIndexOf('(') < input.lastIndexOf(')'))){
                input += '(';
            }
            else if ((input.indexOf('(') != -1 && input.indexOf(')') == -1) || (input.indexOf('(') != -1 && input.indexOf(')') != -1 && input.lastIndexOf('(') > input.lastIndexOf(')'))){
                input += ')';
            }
            display_input.textContent = CleanInput(input);
        }
        // Caso seja número ou operador
        else {
            if (ValidateInput(value)){
                input += value;
                display_input.textContent = CleanInput(input);
            }
        }
        
    });
}

// Formata o input
function CleanInput(input) {
    let input_array = input.split("");
    for(let i=0; i < input_array.length; i++){
        if (input_array[i] == "*"){
            input_array[i] = 'x';
        }
        else if (input_array[i] == "/") {
			input_array[i] = '÷' ;
		}   
        
    }

    return input_array.join("");
}

// Valida se os operadores não estão repetivos seguidamente
function ValidateInput(value) {
    let last_input = input.slice(-1);
    let simbols = ['+','-','*','/','.',''];
    
    if (simbols.includes(value) && simbols.includes(last_input)){
        return false;
    }
    return true;
}

// Formata o output
function CleanOutput(output){
    output = output.toFixed(10);
    let output_string = output.toString();
    let number = output_string.split('.')[0];
    let decimal = output_string.split('.')[1];
    let output_array = number.split('');

    // Separa por vírgula a cada 1000
    if (output_array.length > 3){
        for (let i = output_array.length-3; i > 0; i -= 3){
            output_array.splice(i, 0, ',');
        }
    }

    // Formata a parte decimal
    if (decimal){      
        let i = decimal.length-1;
        while (i > 0 && decimal[i] == '0'){
            decimal = decimal.slice(0, i);
            i -= 1;
        }
        if (decimal != ''){
            output_array.push('.');
            output_array.push(decimal);
        }
    }
    return output_array.join('');
}

// Avalia o operador de porcentagem
function PerpareInput (input) {
	let input_array = input.split("");

	for (let i = 0; i < input_array.length; i++) {
		if (input_array[i] == "%") {
			input_array[i] = "/100";
		}
	}

	return input_array.join("");
}