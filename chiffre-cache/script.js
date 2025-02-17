

function jouer() {

    let niveau = prompt("Choisissez un niveau: facile / intermédiaire / difficile").toLowerCase();
  

    let maxTentatives = 5;
    let maxValeur = 100;
  

    switch(niveau) {
      case "facile":
        maxTentatives = 7;
        maxValeur = 50;
        break;
      case "difficile":
        maxTentatives = 3;
        maxValeur = 200;
        break;

    }
  

    const nombreMystere = Math.floor(Math.random() * maxValeur) + 1;
  

    let tentativeRestante = maxTentatives;
    let gagne = false;
  
    while (tentativeRestante > 0 && !gagne) {
      const proposition = parseInt(prompt(
        `Devinez le nombre (entre 1 et ${maxValeur}).\n` +
        `Tentatives restantes: ${tentativeRestante}`
      ), 10);
  
      if (isNaN(proposition)) {
        alert("Veuillez saisir un nombre valide !");
        continue;
      }
  
      if (proposition === nombreMystere) {
        alert("Bravo, vous avez trouvé !");
        gagne = true;
      } else if (proposition < nombreMystere) {
        alert("C'est plus grand !");
      } else {
        alert("C'est plus petit !");
      }
  
      tentativeRestante--;
    }
  
    if (!gagne) {
      alert(`Dommage, le nombre mystère était : ${nombreMystere}`);
    }
  

    if (confirm("Voulez-vous relancer une partie ?")) {
      jouer();
    } else {
      alert("Merci d'avoir joué !");
    }
  }
  

  document.getElementById("playBtn").addEventListener("click", jouer);
  