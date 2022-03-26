
$(document).ready(function() {

  $("#barras").click(function() {
     $("#menu").toggleClass("#menu-ativo")

    })

     /* o mesmo que o codigo acima, mas com mais linhas de código
      if ($("#menu").hasClass("#menu-ativo")) {
        $("#menu").removeClass("menu-ativo")
      } else {
        $("#menu").addClass("menu-ativo")
  
  }
})
*/


//function mostrarPopup(){
       // window.alert("Seja bem-vinde!")
        //com somente o "alert" ja funcionaria, porém 
//}

let email = document.getElementById ("campo-email")

function enviarEmail(){
    let emailDigitado = email.value;   
    console.log(emailDigitado);
}

/* Essa parte abaixo foi exemplificada na aula mas NÃO SERVIU PRO MEU SITE, pois serviria para partes onde vc REPETE ESTRUTURAS DE CODIGO, como no caso do site da prof.

let listaLivros = [
  { titulo: "História e usos da Geometria oriental",
    imagem: src= "img/ilustra_livro.jpg"    ,
    descricao . "_Conheça a sabedoria milenar por trás da geometria oriental": ,
  
  },
  
  { titulo: "Pinte Mandalas",
    imagem: src= "img/geometria-pintar.png",
    descricao. "Relaxe pintando mandalas!",
  },
   
  { titulo: "Geometria digital",
    imagem: src= "img/mandala-pintar.png"
    descricao . "Geometria nas artes digitais",
  },
]

function renderizarLivros(){
let lista= document.getElementById("listaLivros")

let template= "";
for (let index = 0; index < listaLivros.length; index++) {
  const livros = listaLivros[index];
  template += ` <div class=livrosVenda>
  <h3>${livros.titulo}</h3>
  <img src=${livros.imagem}>
  <p>${livros.descricao}</p>
  </div> `
  }
  lista.innerHTML=template;
}

-----------FIM DO EXEMPLO DA AULA*/
})