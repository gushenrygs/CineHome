const form = document.querySelector('form'); // Seleciona o formulário

// Função para salvar os dados no LocalStorage
function saveToLocalStorage(participant) {
    const participants = JSON.parse(localStorage.getItem('participants')) || []; // Se não houver participantes, cria um array vazio
    participants.push(participant); // Adiciona o novo participante
    localStorage.setItem('participants', JSON.stringify(participants)); // Salva de volta no LocalStorage
}

// Função para mostrar a mensagem de confirmação
function showConfirmationMessage(name) {
    alert(`Obrigado, ${name}! Sua participação foi registrada com sucesso.`); // Usando crase para interpolar o nome
}

// Adiciona um ouvinte de evento para quando o formulário for submetido
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio normal do formulário

    // Obtém os valores dos campos do formulário
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();

    // Verifica se todos os campos foram preenchidos
    if (!name || !email || !phone) {
        alert('Por favor, preencha todos os campos obrigatórios.'); // Alerta se faltar algum campo
        return; // Se algum campo estiver vazio, a função é interrompida
    }

    // Cria um objeto com as informações do participante
    const participant = {
        name,
        email,
        phone,
        date: new Date().toLocaleString() // Registra a data e hora da inscrição
    };

    // Salva as informações no LocalStorage
    saveToLocalStorage(participant);

    // Exibe a mensagem de confirmação
    showConfirmationMessage(name);

    // Reseta o formulário
    form.reset();
});
