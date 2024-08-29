// Seleciona o display
const display = document.getElementById('display');

// Função para adicionar números ao display
function appendNumber(number) {
    display.value += number; // Adiciona o número pressionado ao valor atual no display
}

// Função para adicionar operadores ao display
function appendOperator(operator) {
    display.value += operator; // Adiciona o operador pressionado ao valor atual no display
}

// Função para calcular o resultado
function calculate() {
    try {
        // Avalia a expressão no display e atribui o resultado ao display
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro'; // Em caso de erro, exibe "Erro"
    }
}

// Função para limpar o display
function clearDisplay() {
    display.value = ''; // Limpa todo o conteúdo do display
}
