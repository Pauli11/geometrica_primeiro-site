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
$(document).ready(function(){
        $("fieldset").mouseenter (function(){
            $(this).css("background"," #C4C4C4");
        });
})

$(document).ready(function(){
    $("fieldset").mouseleave (function(){
        $(this).css("background","#fffa7b"); 
    });
})





//