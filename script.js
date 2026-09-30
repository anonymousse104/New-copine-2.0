const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("btn-login");
const errorMessage = document.getElementById("error-message");
const mainApp = document.getElementById("main-app");
const lockScreen = document.getElementById("lock-screen");
const welcomeScreen = document.getElementById("welcome-screen");
const MOT_DE_PASSE = "23092024";
const tabs = document.querySelectorAll(".tabs-nav");
const tabsContent = document.querySelectorAll(".tabs-content");
const contenueSemaine = [
  {
    jour: 1,
    lettre:
      "Coucou mon amour, ceci est ta première lettre. Ta première lettre d’amour ! Sache que je t’aime très fort et que tu comptes vraiment beaucoup pour moi. J’espère qu'en ce moment même ça va malgré ces méchantes règles qui te font très mal, sache que aujourd’hui je serai ton prince charmant. Je ferai tout pour toi cœur et pour que tu te sentes bien cœur ! Je te souhaite une bonne journée mon cœur !",
    musique: {
      titre: "Avec toi",
      artiste: "Oboy",
      url: "https://youtu.be/PjjRd03jmJY?si=MwFXpf1RYloAZtBb",
      note_musique:
        "Quoi de mieux que de commencer par la musique qui a marqué la première story d’officialisation de notre couple.",
    },
    note: "Un petit conseil mon cœur : Ne te fatigue pas trop aujourd’hui, tu risques d’être fatiguée à cause de tes règles. Bon courage mon amour et si tu as des tâches tu as un homme qui peut te les faire.",
    image: "",
  },
  {
    jour: 2,
    lettre:
      "Bravo mon amour tu as déjà survécu au jour 1, ça se fête. Tu as survécu au plus dur et si tes règles te font autant voire plus mal alors surtout repose toi et confie tes tâches les plus compliquées à ton amoureux d’amour. Aujourd’hui je serai tendre et doux avec toi car tu mérites tout le bonheur du monde ! Et je te raconterai une histoire rien que pour toi et pour que tu t’endormes paisiblement ! Je t’aime cœur.",
    musique: {
      titre: "Moonlight",
      artiste: "Chase Atlantic",
      url: "https://youtu.be/vUNK5rIssww?si=ptgj0uyZ4QEBHQBk",
      note_musique:
        "Un classique défini comme notre musique qui n'appartient qu'à nous, profite bien mon amour !",
    },
    note: "Courage mon amour, tu vas surmonter tous tes défis et te surpasser. Cette journée va bien se passer, car tu as un chéri sur qui compter !",
    image: "",
  },
  {
    jour: 3,
    lettre:
      "Allez mon amour courage, il te reste plus que 4 jours, tu as presque fait la moitié. C’est très bien mon amour, tu es une battante et tu es trop forte. Sache que je t’admire tous les jours en voyant à quel point c’est pas facile et comment tu arrives à résister malgré la douleur. Sache que cette journée est pour toi, si tu as des contrôles : tu vas tout déchirer ! Tu vas donner le meilleur de toi ! Bisous mon amour, je crois en toi !",
    musique: {
      titre: "Sunsetz",
      artiste: "Cigarettes after Sex",
      url: "https://youtu.be/5-rbSNzU_b8?si=WtIXhou5LMswtGJc",
      note_musique:
        "Une musique que tu apprécies énormément, je te laisse l’écouter et te poser dans ton lit car c’est un véritable chef d’œuvre !",
    },
    note: "Petit conseil : Si jamais tu as besoin de quelqu’un ou quelque chose afin de te sentir mieux ou pour quelconque raison, je suis là pour toi cœur !",
    image: "",
  },
  {
    jour: 4,
    lettre:
      "Enfin la moitié mon amour ! Sache que je suis super fier de toi actuellement, pendant que tu lis ce message. Je suis en train de penser à toi et à tout ce que tu as enduré et à quel point ces méchantes règles t'ont fait du mal. Prends une bouillotte si ça ne va pas cœur et repose toi surtout ! Je t’aime fort coeur tu es la meilleure copine du monde !",
    musique: {
      titre: "Lady Killers",
      artiste: "G-Eazy",
      url: "https://youtu.be/i9L_Ew4t1xg?si=YOrNHkeZoG_xttMc",
      note_musique:
        "Une musique que tu aimes beaucoup et qui me plaît énormément à moi aussi. Je l’écoute probablement en même temps que toi.",
    },
    note: "Petite info : Savais tu que pour réduire la douleur, une technique consiste à appliquer une poche de glace sur le bas du dos. Cela est censé engourdir la zone et réduire l’inflammation locale chez certaines femmes.",
    image: "",
  },
  {
    jour: 5,
    lettre:
      "Bientôt fini ces règles cœur, plus que 3 jours en comptant aujourd’hui. Ton Hylan d’amour est bien sûr toujours présent afin  de t’aider dans cette période douloureuse et vraiment pas facile, il est tout en un, il peut te raconter des histoires, te chanter des musiques, te porter tes sacs, te réconforter… Bref plein de choses. En tout cas mon cœur tu es trop forte continue ce que tu fais comme ça c’est super et je suis super fier de toi.",
    musique: {
      titre: "Notes pour trop tard",
      artiste: "Orelsan",
      url: "https://youtu.be/R2rxmLBebCM?si=JvUMAscSm_bVi8qb",
      note_musique:
        "Encore un classique qu'en plus de cela nous allons voir en concert bientôt, j’ai beaucoup trop hâte !!",
    },
    note: "Petite infos : Le savais tu ? Sentir un vêtement de la personne qu’on aime qui contient son odeur réduit instantanément le taux de cortisol (l’hormone du stress). Donc si tu en as besoin je suis là. ",
    image: "",
  },
  {
    jour: 6,
    lettre:
      "Ma chérie, c’est la dernière ligne droite avant la fin. Tu y es presque, pour fêter cela tu auras le droit à un gigantesque câlin ! Car tu l’as amplement mérité, et j’ai hâte que tu n’aies plus tes règles car elles sont vraiment vilaines. D’ailleurs j’en profite pour te demander si ça va ? Tu as passé une bonne nuit ? J’ai hâte de pouvoir passer du temps avec toi aujourd’hui alors souffle un bon coup et ta journée tu vas la passer tranquillement.",
    musique: {
      titre: "Him & I",
      artiste: "G-Eazy",
      url: "https://youtu.be/SA7AIQw-7Ms?si=oz4yKtvk0BtHBDDp",
      note_musique:
        "Une musique complètement incroyable qui décrit parfaitement nous deux, à quel point on s’aime et on tient à nous mutuellement  ",
    },
    note: "Pense bien à te poser mon amour et penses-y : tu as bientôt terminé tes règles alors tu peux être fière de toi mon cœur pour ce que tu as réussi à endurer !",
    image: "",
  },
  {
    jour: 7,
    lettre:
      "ENFIN FINIIIIIIII CŒUR !!!!! Je suis BEAUCOUP trop fier de toi et de à quel point tu as été forte même dans les moments les plus durs ! Tu es la meilleure cœur et je t’aime très fort, je suis hyper fier de toi ! Sache que je pense très fort a toi actuellement pendant que j’écris ce petit message ! Je suis très content que tu aies reussi cela. Bisous mon amour mais ce n’est pas fini, il te reste encore la fin. ",
    musique: {
      titre: "Close To Me",
      artiste: "Ellie Goulding",
      url: "https://youtu.be/ajN57m_OSpY?si=hf4sGfk4LlMqTq7A",
      note_musique:
        "Pour finir en beauté avec cette jolie musique que je sais que tu aimes beaucoup ces derniers temps alors je te laisse l’apprécier cœur !",
    },
    note: "Tu as fini tes règles cœur, alors comment était ce site ? Et bien tu vas pouvoir y répondre après avoir cliqué sur ce bouton en bas !! ",
    image: "",
  },
];
const aideModale = document.getElementById("aide-modale");
const aideBtn = document.getElementById("aide-btn");
const aideModaleFermer = document.getElementById("aide-modale-fermer");

// Fonction qui initialise ou récupère la date de début
function initialiserOuRecupererDateDebut() {
  const dateStockee = localStorage.getItem("dateDebut");
  let dateDebut;
  if (dateStockee === null) {
    dateDebut = new Date();
    localStorage.setItem("dateDebut", dateDebut);
  } else {
    dateDebut = new Date(dateStockee);
  }
  return dateDebut;
}

// Fonction qui calcule le jour actuel
function calculerJourActuel(dateDebut) {
  const dateActuelle = new Date();
  // 1. On crée le point de repère à 8h le jour de sa première connexion
  const reference = new Date(dateDebut);
  reference.setHours(8, 0, 0, 0);

  // 2. Si elle s'est connectée pour la première fois avant 8h du matin,
  // on décale la référence de 24h en arrière pour ne pas avoir de nombre négatif
  if (dateDebut.getHours() < 8) {
    reference.setDate(reference.getDate() - 1);
  }

  // 3. Différence entre maintenant et ce repère de 8h
  const differenceEnMs = dateActuelle - reference;
  const jourEcoules = Math.floor(differenceEnMs / (1000 * 60 * 60 * 24));

  // 4. On démarre à 1 et on plafonne à 7
  const numeroJour = Math.min(jourEcoules + 1, 7);
  return numeroJour;
}

// Fonction qui permet de changer de jour
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // 1. Cacher tous les contenus
    tabsContent.forEach((tabContent) => {
      tabContent.classList.add("hidden");
    });

    // 2. Retirer l'état actif de tous les boutons
    tabs.forEach((t) => t.classList.remove("active"));

    // 3. Activer le bon bouton et afficher son contenu
    tab.classList.add("active");
    const tabId = tab.getAttribute("data-tabs");
    const targetContent = document.getElementById(tabId);
    if (targetContent) {
      targetContent.classList.remove("hidden");
    }
  });
});

// Fonction qui permet de se connecter au site
loginButton.addEventListener("click", () => {
  const password = passwordInput.value;

  // Si le mot de passe est bon, on affiche le contenu du jour
  if (password === MOT_DE_PASSE) {
    lockScreen.classList.add("hidden");
    welcomeScreen.classList.remove("hidden");
    errorMessage.classList.add("hidden");
    passwordInput.value = "";

    // On affiche le contenu du jour
    // On affiche le contenu du jour
    setTimeout(() => {
      // 1. TOUT DE SUITE (au bout de 2s) : on lance juste l'animation pour que l'écran glisse
      welcomeScreen.classList.add("animation-sortie");

      // 2. ON ATTEND 600ms (le temps que le glissement se termine)
      setTimeout(() => {
        // 3. SEULEMENT MAINTENANT, on cache l'écran de bienvenue (la ligne avec "hidden")
        welcomeScreen.classList.add("hidden");
        // 4. On affiche l'application principale (le remove "hidden" de mainApp)
        mainApp.classList.remove("hidden");
        // 5. Et on charge les fonctions du jour (tes lignes 188 à 191)
        const dateDebut = initialiserOuRecupererDateDebut();
        const jourActuel = calculerJourActuel(dateDebut);
        afficherContenuJour(jourActuel);
        creerBoutonsHistorique(jourActuel);
      }, 600);
    }, 2000);

    // Sinon on affiche un message d'erreur
  } else {
    errorMessage.classList.remove("hidden");
    setTimeout(() => {
      errorMessage.classList.add("hidden");
    }, 1000);
  }
});

// Fonction qui affiche le contenu d'un jour
function afficherContenuJour(numeroJour) {
  const donneesDuJour = contenueSemaine.find(
    (jour) => jour.jour === numeroJour,
  );
  // Si le contenu du jour existe
  if (donneesDuJour) {
    document.getElementById("lettre-texte").textContent = donneesDuJour.lettre;
    document.getElementById("musique-titre").textContent =
      `${donneesDuJour.musique.titre} - ${donneesDuJour.musique.artiste}`;
    document.getElementById("musique-note").textContent =
      donneesDuJour.musique.note_musique;
    document.getElementById("musique-lien").href = donneesDuJour.musique.url;
    document.getElementById("note-texte").textContent = donneesDuJour.note;
    document.getElementById("gallerie-image").src = donneesDuJour.image || "";
    // Sinon on affiche une erreur
  } else {
    console.error(`Aucune donnée trouvée pour le jour ${numeroJour}`);
  }
}

// Fonction qui crée un bouton pour changer de jour
function creerBoutonsHistorique(jourActuel) {
  const conteneur = document.getElementById("historique-jours");
  conteneur.innerHTML = "";
  for (let i = 1; i <= jourActuel; i++) {
    const button = document.createElement("button");
    button.textContent = "jour " + i;
    button.classList.add("bouton-pixel-perso");
    conteneur.appendChild(button);
    button.addEventListener("click", () => {
      afficherContenuJour(i);
    });
  }
}

// Ajoute un bouton d'aide au site
aideBtn.addEventListener("click", () => {
  aideModale.classList.remove("hidden");
});

aideModaleFermer.addEventListener("click", () => {
  aideModale.classList.add("hidden");
});
