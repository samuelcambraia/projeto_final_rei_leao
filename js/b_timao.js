function fase1 (){
    while(true){
      var fase1 = prompt("Escolha entre as opções 1 ou 2");
      if (fase1 == 2) {
        alert(
          "Você acertou!)"
        );
        location.replace("../HTML/timao2.html");
      break;
    } 
    else if (fase1 == 1) {
        alert(
          "Uma hora dessa, seu poluente! "
        );
        location.replace("../HTML/gameover.html");
      break;
    } 
    else {
        alert("Digite 1 ou 2");
    
      }}
  }
  
    function fase2() {
      while(true){
      var fase2 = prompt("Escolha entre as opções 1 ou 2");
      if (fase2 == 1) {
        alert(
          "Olha, Certa resposta!!"
        );
        location.replace("../HTML/timao3.html");
      break; 
    } else if (fase2 == 2) {
        alert(
          "Eroooou"
        );
        location.replace("../HTML/gameover.html");
      break; 
    } else {
        alert("Digite 1 ou 2");
       
      }}
    }
    
    function fase3() {
      while(true){
      var fase3 = prompt("Escolha entre as opções 1 ou 2");
      if (fase3 == 2) {
        alert(
          "Boa:)"
        );
        location.replace("../html/uwin.html");
      break;
    } else if (fase3 == 1) {
        alert(
          "quase!"
        );
        location.replace("../HTML/gameover.html");
      break;
    } else {
        alert("Digite 1 ou 2");
      
      }}
    }
    
    function inicioPagina() {
      location.replace("../index.html");
    }