const inputLogin = document.getElementById('input-login')
const inputPassword = document.getElementById('input-password')

const loginGenerico = '1234'

function verificarLogin() {
    if (inputLogin.value == loginGenerico && inputPassword.value == loginGenerico ) {
        alert("Login realizado com sucesso!")
        window.location.href = '/index.html';
    }
    else {
        alert('Digite um login valido!')
    }
}