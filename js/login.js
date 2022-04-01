let email = document.getElementById ("email");
let senha = document.getElementById ("senha");

function logar (){
    
    let emailDigitado = email.value;
    let senhaDigitada = senha.value;
    if (emailDigitado == "email@email.com" && senhaDigitada == "123") {
        alert ("Você conseguiu!");
        location.href= "index.html";
    }else {
        alert("Usuário ou senha incorretos!")
    }
    
}

/* let email = document.getElementById ("email");
function enviarEmail(){
    let emailDigitado = email.value;   
    console.log(emailDigitado);}*/

