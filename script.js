document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Aqui você pode adicionar a lógica para enviar o formulário, como usar um serviço de e-mail ou API
    alert('Mensagem enviada com sucesso!');

    // Limpar campos após enviar
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
