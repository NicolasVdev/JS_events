//Fonctionnalité 1 : On commence par un petit échauffement : lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot 'clique' en console.

let clickerFooter = document.querySelector("footer");

clickerFooter.addEventListener("click", footerClick);

  function footerClick() {
    console.log("clique");
};


//Fonctionnalité 1-bis : Maintenant on va upgrader cette première fonctionnalité : lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console 'clic numéro x' avec x qui commence à 1 et s'incrémente de +1 à chaque clic.

let clickerFooterX = document.querySelector("footer");
let i = 0;

clickerFooterX.addEventListener("click", footerClickX);

  function footerClickX() {
    i++;
    console.log(`clique numéro ${i}`);
};


//Fonctionnalité 2 : Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse. Une fois que ça, ça marche, fait que si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader.

let hamburgerHeader = document.getElementById("navbarHeader");
let hamburgerButton = document.querySelector("button.navbar-toggler");

hamburgerButton.addEventListener("click", menuToggle);

function menuToggle() {
  hamburgerHeader.classList.toggle("collapse");
};


//Fonctionnalité 3 : À présent, on va faire cela : si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page).

let firstCard = document.getElementsByClassName("card mb-4 box-shadow")[0];
let editFirstCardButton = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];

editFirstCardButton.addEventListener("click", onFirstButtonClick);

function onFirstButtonClick() {
  firstCard.style.color = "red";
};


//Fonctionnalité 4 : On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe : si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant !

let secondCard = document.getElementsByClassName("card mb-4 box-shadow")[1];
let editSecondCardButton = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];

editSecondCardButton.addEventListener("click", onSecondButtonClick);

function onSecondButtonClick() {
  if (secondCard.style.color === "green") {
    secondCard.style.color = "";
  }
  else {
    secondCard.style.color = "green";
  }
}


// Fonctionnalité 5 : Pour le fun, on va implémenter une fonctionnalité à la sauce ☢"nucléaire"🤯. Et comme elle est un peu dangereuse, on va la cacher… Voici comment elle doit marcher : si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).

let navbarHeader = document.querySelector("header");

navbarHeader.addEventListener("dblclick", nuclearClick);

function nuclearClick() {
  if (document.querySelector('link').disabled === true) {
    document.querySelector('link').disabled = false;
  }
  else {
    document.querySelector('link').disabled = true;
  }
};


//Fonctionnalité 6 : La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !

let reduceCards = document.getElementsByClassName("col-md-4");
let cardButtons = document.getElementsByClassName("btn btn-sm btn-success");

for (let i = 0; i < reduceCards.length; i++) {
  let card = reduceCards[i];
  let cardButton = cardButtons[i];
  let collapse = card.querySelector(".card-text");
  let imgCard = card.querySelector(".card-img-top");
  let isReduced = false;

  cardButton.addEventListener("mouseenter", cardStyleToggle);

  function cardStyleToggle() {
    if (isReduced === false) {
      collapse.classList.toggle("collapse");
      imgCard.style.width = "20%";
      isReduced = true
    } else if (isReduced === true) {
      collapse.classList.toggle("collapse");
      imgCard.style.width = "";
      isReduced = false;
    }
  }
};


//Fonctionnalité 7 : Allez on va rajouter un peu de WTF dans la page : si un utilisateur clique sur le bouton gris ==>, la dernière card (en bas à droite) va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !

let cards = document.getElementsByClassName("col-md-4");
let parentCards = document.getElementsByClassName("row")[1]
let rotateRight = document.getElementsByClassName("btn btn-secondary my-2")[0];

rotateRight.addEventListener("click", rotateRCards);

function rotateRCards() {
  parentCards.insertBefore(cards[5], cards[0]);
};


//Fonctionnalité 8 : Évidemment tu t'y attendais : on va faire tourner les card dans l'autre sens aussi. Donc si un utilisateur clique sur le bouton bleu <==, la première card devra passer en dernier.

let rotateLeft = document.getElementsByClassName("btn btn-primary my-2")[0];

rotateLeft.addEventListener("click", rotateLCards);

function rotateLCards(event) {
  event.preventDefault();
  let lastCard = cards[cards.length - 1];
  parentCards.insertBefore(cards[0], lastCard.nextSibling);
};


/*Fonctionnalité 9 : Bon si t'es arrivé jusque-là, c'est que t'as besoin d'un peu de challenge. Du coup je t'ai concocté une fonctionnalité de derrière les fagots, spécialement conçue pour les moussaillons pas piqués des hannetons (this sentence is brought to you by www.vieilles-expressions.fr). Voici ce qu'elle va devoir faire :
La fonctionnalité se déclenchera si le logo de la page (JS & Events) est sélectionné et qu'on appuie sur une touche spécifique du clavier.
Si l'utilisateur presse la touche "a", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.
Si l'utilisateur presse la touche "y", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
Si l'utilisateur presse la touche "p", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
Si l'utilisateur presse la touche "b", tout redevient normal.*/

let logoSelection = document.querySelector(".navbar-brand");
let isOnLogo = false;

logoSelection.addEventListener("mouseover", () => {
  isOnLogo = true;
});

logoSelection.addEventListener("mouseout", () => {
  isOnLogo = false;
});

document.addEventListener("keydown", keyChoice);

function keyChoice(event) {
  if (isOnLogo === true) {
    let key = event.key.toLowerCase();
    let body = document.body;

    body.classList.remove("col-4", "offset-md-4", "offset-md-8");

    if (key === "a") {
      body.classList.add("col-4");
    } else if (key === "y") {
      body.classList.add("col-4", "offset-md-4");
    } else if (key === "p") {
      body.classList.add("col-4", "offset-md-8");
    } else if (key === "b") {
      body.removeAttribute("class");
    }
  }
}

