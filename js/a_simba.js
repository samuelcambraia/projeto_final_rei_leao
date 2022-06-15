function fase1() {
    while (true) {
      var fase1 = prompt("Escolha entre as opções 1 ou 2");
      if (fase1 == 2) {
        alert(
          "ok! Você acertou!)"
        );
  
        location.replace("../HTML/fase2simba.html");
        break;
      } else if (fase1 == 1) {
        alert(
          "Não e possivel proseguir sem mapa, tente novamente! "
        );
        location.replace("../HTML/gameover.html");
        break;
      } else {
        alert("Digite 1 ou 2");
  
  
      }
    }
  }
  
  function fase2() {
    while (true) {
      var fase2 = prompt("Escolha entre as opções 1 ou 2");
      if (fase2 == 1) {
        alert(
          "Certa resposta"
        );
        location.replace("../HTML/fase3simba.html");
        break; 
      } 
  
      else if (fase2 == 2) {
        alert(
          "Errou, você perdeu o jogo"
        );
        location.replace("../HTML/gameover.html");
        break;
      }
       else {
        alert("Digite 1 ou 2");
      
      }
    }
  }
  
  function fase3() {
    while(true){
    var fase3 = prompt("Escolha entre as opções 1 ou 2");
    if (fase3 == 1) {
      alert(
        "YEEEEEY! Sabia que era você que ia salvar a Savana:)"
      );
      location.replace("../HTML/uwin.html");
    break;
  } 
  else if (fase3 == 2) {
      alert(
        "Quase?"
      );
      location.replace("../HTML/gameover.html");
     break;
    } 
    else {
      alert("Digite 1 ou 2");
      
    }}
  }
  
  function inicioPagina() {
    location.replace("../index.html");
  }