// Flag para indicar se o resultado foi exibido
let isResultDisplayed = false;

// Função para adicionar números ao display
function appendNumber(number) {
    const display = document.getElementById('display'); // Seleciona o campo de input que representa o visor
    
    // Se o resultado foi exibido, limpa o visor antes de adicionar o novo número
    if (isResultDisplayed) {
        display.value = ''; // Limpa o conteúdo do display
        isResultDisplayed = false; // Reseta a flag para permitir novas entradas
    }
    
    // Adiciona o número pressionado ao conteúdo atual do display
    display.value += number;
}

// Função para adicionar operadores ao display
function appendOperator(operator) {
    const display = document.getElementById('display'); // Seleciona o campo de input que representa o visor
    
     // Se o resultado foi exibido e o usuário pressiona um operador,
    // permite que o usuário continue utilizando o resultado para novas operações
    if (isResultDisplayed) {
        isResultDisplayed = false; // Reseta a flag para permitir novas operações
    }
    
    // Adiciona o operador pressionado ao conteúdo atual do display
    display.value += operator;
}

// Função para calcular o resultado
function calculate() {
    const display = document.getElementById('display'); // Seleciona o campo de input que representa o visor
    
    try {
        // Avalia a expressão no display e mostra o resultado
        display.value = eval(display.value);
        isResultDisplayed = true; // Marca que o resultado foi exibido
    } catch (error) {
        // Em caso de erro, exibe "Erro" no display
        display.value = 'Erro';
        isResultDisplayed = true; // Marca que o erro foi exibido
    }
}

// Função para limpar o display
function clearDisplay() {
    const display = document.getElementById('display'); // Seleciona o campo de input que representa o visor
    display.value = ''; // Limpa todo o conteúdo do display
    isResultDisplayed = false; // Reseta a flag para permitir novas entradas
}
