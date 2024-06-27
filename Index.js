// JavaScript para manipulação de eventos, como o envio do formulário
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obter os valores do formulário
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simulação de login (substitua com sua lógica real de login)
    if (username === 'admin' && password === 'senha123') {
        alert('Login bem sucedido! Redirecionando...');
        window.location.href = 'dashboard.html'; // Página para redirecionar após login
    } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
    }
});
