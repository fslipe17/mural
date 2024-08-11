document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'Nicole' && password === 'vida') {
        alert('Conectado com sucesso.');
        window.open('mural.html')
    } else {
        alert('Nome de usuario ou senha incorretas!!');
    }
});