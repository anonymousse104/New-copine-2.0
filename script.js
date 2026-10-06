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
      url: "./Musiques/Avec-toi.mp3",
      note_musique:
        "Quoi de mieux que de commencer par la musique qui a marqué la première story d’officialisation de notre couple.",
    },
    note: "Un petit conseil mon cœur : Ne te fatigue pas trop aujourd’hui, tu risques d’être fatiguée à cause de tes règles. Bon courage mon amour et si tu as des tâches tu as un homme qui peut te les faire.",
    image: "./images/IMG_0221.jpeg",
    note_img: "Notre première photo ensemble",
  },
  {
    jour: 2,
    lettre:
      "Bravo mon amour tu as déjà survécu au jour 1, ça se fête. Tu as survécu au plus dur et si tes règles te font autant voire plus mal alors surtout repose toi et confie tes tâches les plus compliquées à ton amoureux d’amour. Aujourd’hui je serai tendre et doux avec toi car tu mérites tout le bonheur du monde ! Et je te raconterai une histoire rien que pour toi et pour que tu t’endormes paisiblement ! Je t’aime cœur.",
    musique: {
      titre: "Moonlight",
      artiste: "Chase Atlantic",
      url: "./Musiques/Moonlight.mp3",
      note_musique:
        "Un classique défini comme notre musique qui n'appartient qu'à nous, profite bien mon amour !",
    },
    note: "Courage mon amour, tu vas surmonter tous tes défis et te surpasser. Cette journée va bien se passer, car tu as un chéri sur qui compter !",
    image: "./images/IMG_0299.jpeg",
    note_img: "Lanzarote - été 2026",
  },
  {
    jour: 3,
    lettre:
      "Allez mon amour courage, il te reste plus que 4 jours, tu as presque fait la moitié. C’est très bien mon amour, tu es une battante et tu es trop forte. Sache que je t’admire tous les jours en voyant à quel point c’est pas facile et comment tu arrives à résister malgré la douleur. Sache que cette journée est pour toi, si tu as des contrôles : tu vas tout déchirer ! Tu vas donner le meilleur de toi ! Bisous mon amour, je crois en toi !",
    musique: {
      titre: "Sunsetz",
      artiste: "Cigarettes after Sex",
      url: "./Musiques/Sunsetz - Cigarettes After Sex.mp3",
      note_musique:
        "Une musique que tu apprécies énormément, je te laisse l’écouter et te poser dans ton lit car c’est un véritable chef d’œuvre !",
    },
    note: "Petit conseil : Si jamais tu as besoin de quelqu’un ou quelque chose afin de te sentir mieux ou pour quelconque raison, je suis là pour toi cœur !",
    image: "./images/IMG_0352.jpeg",
    note_img: "Photo en amoureux à Lanzarote - été 2026",
  },
  {
    jour: 4,
    lettre:
      "Enfin la moitié mon amour ! Sache que je suis super fier de toi actuellement, pendant que tu lis ce message. Je suis en train de penser à toi et à tout ce que tu as enduré et à quel point ces méchantes règles t'ont fait du mal. Prends une bouillotte si ça ne va pas cœur et repose toi surtout ! Je t’aime fort coeur tu es la meilleure copine du monde !",
    musique: {
      titre: "Lady Killers",
      artiste: "G-Eazy",
      url: "./Musiques/G-Eazy - Lady Killers II.mp3",
      note_musique:
        "Une musique que tu aimes beaucoup et qui me plaît énormément à moi aussi. Je l’écoute probablement en même temps que toi.",
    },
    note: "Petite info : Savais tu que pour réduire la douleur, une technique consiste à appliquer une poche de glace sur le bas du dos. Cela est censé engourdir la zone et réduire l’inflammation local chez certaines femmes.",
    image: "./images/IMG_0763.jpeg",
    note_img: "Selfie à Viriat en amoureux",
  },
  {
    jour: 5,
    lettre:
      "Bientôt fini ces règles cœur, plus que 3 jours en comptant aujourd’hui. Ton Hylan d’amour est bien sûr toujours présent afin  de t’aider dans cette période douloureuse et vraiment pas facile, il est tout en un, il peut te raconter des histoires, te chanter des musiques, te porter tes sacs, te réconforter… Bref plein de choses. En tout cas mon cœur tu es trop forte continue ce que tu fais comme ça c’est super et je suis super fier de toi.",
    musique: {
      titre: "Notes pour trop tard",
      artiste: "Orelsan",
      url: "./Musiques/Notes pour trop tard.mp3",
      note_musique:
        "Encore un classique qu'en plus de cela nous allons voir en concert bientôt, j’ai beaucoup trop hâte !!",
    },
    note: "Petite infos : Le savais tu ? Sentir un vêtement de la personne qu’on aime qui contient son odeur réduit instantanément le taux de cortisol (l’hormone du stress). Donc si tu en as besoin je suis là. ",
    image: "./images/IMG_4035.jpeg",
    note_img: "Premier voyage à Paris !",
  },
  {
    jour: 6,
    lettre:
      "Ma chérie, c’est la dernière ligne droite avant la fin. Tu y es presque, pour fêter cela tu auras le droit à un gigantesque câlin ! Car tu l’as amplement mérité, et j’ai hâte que tu n’aies plus tes règles car elles sont vraiment vilaines. D’ailleurs j’en profite pour te demander si ça va ? Tu as passé une bonne nuit ? J’ai hâte de pouvoir passer du temps avec toi aujourd’hui alors souffle un bon coup et ta journée tu vas la passer tranquillement.",
    musique: {
      titre: "Him & I",
      artiste: "G-Eazy",
      url: "./Musiques/G-Eazy & Halsey - Him & I.mp3",
      note_musique:
        "Une musique complètement incroyable qui décrit parfaitement nous deux, à quel point on s’aime et on tient à nous mutuellement  ",
    },
    note: "Pense bien à te poser mon amour et penses-y : tu as bientôt terminé tes règles alors tu peux être fière de toi mon cœur pour ce que tu as réussi à endurer !",
    image: "./images/IMG_4511.jpeg",
    note_img: "Hotêl à Aix-les-Bains - Mai 2026",
  },
  {
    jour: 7,
    lettre:
      "ENFIN FINIIIIIIII CŒUR !!!!! Je suis BEAUCOUP trop fier de toi et de à quel point tu as été forte même dans les moments les plus durs ! Tu es la meilleure cœur et je t’aime très fort, je suis hyper fier de toi ! Sache que je pense très fort a toi actuellement pendant que j’écris ce petit message ! Je suis très content que tu aies reussi cela. Bisous mon amour mais ce n’est pas fini, il te reste encore la fin. ",
    musique: {
      titre: "Close To Me",
      artiste: "Ellie Goulding",
      url: "./Musiques/Close To Me (Official Video).mp3",
      note_musique:
        "Pour finir en beauté avec cette jolie musique que je sais que tu aimes beaucoup ces derniers temps alors je te laisse l’apprécier cœur !",
    },
    note: "Tu as fini tes règles cœur, alors comment était ce site ? Et bien tu vas pouvoir y répondre après avoir cliqué sur ce bouton en bas !! ",
    image: "./images/IMG_5071.jpeg",
    note_img: "Premier voyage à l'aquarium",
  },
];
const aideModale = document.getElementById("aide-modale");
const aideBtn = document.getElementById("aide-btn");
const aideModaleFermer = document.getElementById("aide-modale-fermer");
const moteurAudio = document.getElementById("moteur-son");
const boutonPlay = document.getElementById("btn-play");
const barreProgression = document.getElementById("barre-progression");
const tempsMusique = document.getElementById("temps-musique");
const boutonPrecedent = document.getElementById("bouton-precedent");
const boutonSuivant = document.getElementById("bouton-suivant");
// --- ANIMATION URGENCE CÂLIN ---
const btnCalin = document.getElementById("btn-calin");
let animationLettre; // Notre télécommande pour stopper le texte
let animationNote; // Notre télécommande pour stopper la note
const cdImage = document.getElementById("lecteur-cd");
const moteurVocal = document.getElementById("vocal-secret");
let compteurClicsCD = 0; // Le compteur qui mémorisera le nombre de clics

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
        // On charge le bouton d'urgence calin
        btnCalin.classList.remove("hidden");
        // 5. Et on charge les fonctions du jour (tes lignes 188 à 191)
        const dateDebut = initialiserOuRecupererDateDebut();
        const jourActuel = calculerJourActuel(dateDebut);
        afficherContenuJour(jourActuel);
        creerBoutonsHistorique(jourActuel);
        localStorage.setItem("dernierJourVu", jourActuel);
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
    // 1. ON APPUIE SUR STOP AVANT TOUTE CHOSE !
    clearTimeout(animationLettre);

    const texteComplet = donneesDuJour.lettre;
    const elementTexte = document.getElementById("lettre-texte");
    elementTexte.textContent = "";
    let indexLettre = 0;

    function ecrireLettre() {
      if (indexLettre < texteComplet.length) {
        elementTexte.textContent += texteComplet[indexLettre];
        indexLettre++;

        // --- L'ASTUCE POUR UN EFFET SMOOTH (ORGANIQUE) ---
        // Math.random() génère un chiffre au hasard pour créer un rythme "humain"
        const vitesseAleatoire = Math.floor(Math.random() * 40) + 20;

        // On utilise cette vitesse variable à la place du 35 !
        animationLettre = setTimeout(ecrireLettre, vitesseAleatoire);
      }
    }

    ecrireLettre();

    // ... la suite de ton code (musique, notes...) ...
    document.getElementById("musique-titre").textContent =
      `${donneesDuJour.musique.titre} - ${donneesDuJour.musique.artiste}`;
    document.getElementById("musique-note").textContent =
      donneesDuJour.musique.note_musique;
    moteurAudio.src = donneesDuJour.musique.url;
    // document.getElementById("note-texte").textContent = donneesDuJour.note;
    // --- MACHINE À ÉCRIRE POUR LA NOTE ---
    clearTimeout(animationNote); // On stoppe l'ancienne note si on change de jour

    const texteNoteComplet = donneesDuJour.note;
    const elementNote = document.getElementById("note-texte");
    elementNote.textContent = "";
    let indexNote = 0;

    function ecrireNote() {
      if (indexNote < texteNoteComplet.length) {
        elementNote.textContent += texteNoteComplet[indexNote];
        indexNote++;

        const vitesseAleatoire = Math.floor(Math.random() * 40) + 20;
        animationNote = setTimeout(ecrireNote, vitesseAleatoire);
      }
    }

    // On lance la machine de la note !
    ecrireNote();
    document.getElementById("gallerie-image").src = donneesDuJour.image || "";
    document.getElementById("gallerie-note").textContent =
      donneesDuJour.note_img;

    if (numeroJour === 7) {
      // Si on est au jour 7, on attend 5 secondes (le temps qu'elle lise la lettre) puis on affiche la modale
      // --- NOUVEAU : DÉCLENCHEUR DU BOUTON AVIS ---
      const boutonOuvrirAvis = document.getElementById("btn-ouvrir-avis");
      if (numeroJour === 7) {
        // Si on est au jour 7, on fait apparaître le bouton "Avis"
        boutonOuvrirAvis.classList.remove("hidden");
      } else {
        // Sinon, on le cache
        boutonOuvrirAvis.classList.add("hidden");
      }
    }

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

// --- LOGIQUE DU LECTEUR AUDIO ---

boutonPlay.addEventListener("click", () => {
  if (moteurAudio.paused) {
    moteurAudio.play();
    boutonPlay.src = "./Sprite/Bouton_Pause.png";
  } else {
    moteurAudio.pause();
    boutonPlay.src = "./Sprite/Bouton_Play.png";
  }
});

moteurAudio.addEventListener("timeupdate", () => {
  const pourcentage = (moteurAudio.currentTime / moteurAudio.duration) * 100;
  barreProgression.value = pourcentage;
  const tempsActuel = formaterTemps(moteurAudio.currentTime);
  const tempsTotal = formaterTemps(moteurAudio.duration);
  tempsMusique.textContent = `${tempsActuel} / ${tempsTotal}`;
});

barreProgression.addEventListener("input", () => {
  const nouveauTemps = (barreProgression.value / 100) * moteurAudio.duration;
  moteurAudio.currentTime = nouveauTemps;
});

moteurAudio.addEventListener("ended", () => {
  boutonPlay.src = "./Sprite/Bouton_Play.png";
  barreProgression.value = 0;
  tempsMusique.textContent = "00 : 00 / " + formaterTemps(moteurAudio.duration);
});

function formaterTemps(secondes) {
  if (isNaN(secondes)) return "00 : 00";
  const min = Math.floor(secondes / 60);
  const sec = Math.floor(secondes % 60);
  // Ajoute un 0 devant si c'est plus petit que 10
  return `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
}

boutonSuivant.addEventListener("click", () => {
  moteurAudio.currentTime += 10;
});

boutonPrecedent.addEventListener("click", () => {
  moteurAudio.currentTime -= 10;
});

// --- SYSTÈME DE NOTIFICATION ---

function verifierNotification() {
  // 1. On calcule quel jour on est censé être aujourd'hui
  const dateDebut = initialiserOuRecupererDateDebut();
  const jourActuel = calculerJourActuel(dateDebut);

  // 2. On interroge la mémoire de l'iPad pour savoir quel jour elle a vu pour la dernière fois
  let dernierJourVu = localStorage.getItem("dernierJourVu");

  // Le localStorage stocke du texte. On le transforme en nombre avec parseInt().
  // S'il n'y a rien en mémoire (ex: toute première visite), on décide que c'est le jour 0.
  dernierJourVu = parseInt(dernierJourVu) || 0;

  // 3. À TOI DE JOUER :
  // Écris une condition (if) pour vérifier si le jourActuel est strictement supérieur au dernierJourVu.
  // Si c'est vrai, récupère ton élément HTML "notification-jour" et retire-lui la classe "hidden".
  if (jourActuel > dernierJourVu) {
    const notificationJour = document.getElementById("notification-jour");
    notificationJour.classList.remove("hidden");
  }
  // ---> Écris ton code ici <---
}

// 4. On exécute la fonction immédiatement quand le site s'ouvre !
verifierNotification();

let radarPret = true;

if (btnCalin) {
  btnCalin.addEventListener("click", () => {
    // 1. Ta boucle de 15 cœurs reste ici (elle s'exécute toujours)
    for (let i = 0; i < 15; i++) {
      setTimeout(creerCoeurVolant, i * 100);
    }

    // 2. Le bouclier réseau
    if (radarPret === true) {
      radarPret = false; // Bloque immédiatement les envois suivants

      // 3. Insère ton adresse et ton fetch() exacts ici
      const urlCompteur =
        "https://webhook.site/fc2017eb-bb6c-493d-abb6-731eb8e7d260?t=" +
        Date.now();
      fetch(urlCompteur, { mode: "no-cors" });

      // 4. Relance la machine après 2 secondes
      setTimeout(() => {
        radarPret = true;
      }, 2000);
    }
  });
}

function creerCoeurVolant() {
  // 1. On crée une balise div
  const coeur = document.createElement("div");
  // 2. On lui donne la classe CSS qu'on vient de créer
  coeur.classList.add("coeur-volant");
  // 3. On met l'émoji cœur dedans
  coeur.innerText = "❤️";

  // 4. Position horizontale aléatoire (entre 0% et 100% de la largeur de l'écran)
  coeur.style.left = Math.random() * 100 + "vw";

  // 5. Vitesse d'envol aléatoire (entre 2 et 4 secondes)
  coeur.style.animationDuration = Math.random() * 2 + 2 + "s";

  // 6. On l'ajoute physiquement à la page web
  document.body.appendChild(coeur);

  // 7. NETTOYAGE : On détruit le cœur après 4 secondes pour ne pas faire bugger l'iPad !
  setTimeout(() => {
    coeur.remove();
  }, 4000);
}

cdImage.addEventListener("click", () => {
  // --- À TOI DE JOUER ---
  // 1. Ajoute +1 à la variable compteurClicsCD. (Indice : tu peux utiliser ++)
  compteurClicsCD++;
  // 2. Crée une condition (if) : si le compteur est strictement égal à 5,
  //    alors tu lances l'audio secret avec la commande : moteurVocal.play();
  //    et tu remets immédiatement le compteurClicsCD à 0 à l'intérieur du if pour qu'elle puisse le refaire plus tard !
  if (compteurClicsCD === 5) {
    moteurVocal.play();
    compteurClicsCD = 0;
  }
});

// --- LOGIQUE DU RADAR D'HUMEUR ---
const boutonsHumeur = document.querySelectorAll(".btn-humeur");
const merciHumeur = document.getElementById("merci-humeur");
let radarHumeurPret = true;

boutonsHumeur.forEach((bouton) => {
  bouton.addEventListener("click", () => {
    // --- LE NOUVEAU VIDEUR (SÉCURITÉ 1 FOIS PAR JOUR) ---
    // 1. On fabrique la date du jour
    const dateAujourdhui = new Date().toLocaleDateString();

    // 2. On interroge la mémoire
    const dateEnregistree = localStorage.getItem("dateDerniereHumeur");

    // 3. On compare : est-ce que c'est la même date ?
    if (dateAujourdhui === dateEnregistree) {
      // On change temporairement le texte de ta bulle
      merciHumeur.textContent =
        "Tu as déjà partagé ton humeur aujourd'hui ! À demain ❤️";
      merciHumeur.classList.remove("hidden");

      setTimeout(() => {
        merciHumeur.classList.add("hidden");
        // On remet ton texte de base en cachette pour le lendemain
        setTimeout(() => {
          merciHumeur.textContent = "Message envoyé à ton chéri ! ❤️";
        }, 500);
      }, 4000);

      return; // MAGIQUE : "return" stoppe instantanément la fonction. Rien en dessous ne s'exécutera !
    }
    // ----------------------------------------------------

    if (!radarHumeurPret) return;
    radarHumeurPret = false;

    const humeurChoisie = bouton.getAttribute("data-humeur");

    // /!\ N'OUBLIE PAS DE METTRE TON VRAI LIEN WEBHOOK.SITE ICI /!\
    const urlRadarHumeur =
      "https://webhook.site/6142c1fc-8e09-462f-8b52-6780237f24b0?humeur=" +
      humeurChoisie +
      "&t=" +
      Date.now();

    fetch(urlRadarHumeur);

    // TA LIGNE PARFAITE : On sauvegarde la date dans la mémoire après un envoi réussi !
    localStorage.setItem("dateDerniereHumeur", dateAujourdhui);

    // Affiche le message de confirmation
    merciHumeur.classList.remove("hidden");

    // Cache le message après 3 secondes et réactive le radar
    setTimeout(() => {
      merciHumeur.classList.add("hidden");
      radarHumeurPret = true;
    }, 3000);
  });
});

// --- LOGIQUE DE LA ZONE D'AVIS (JOUR 7) ---
const zoneAvis = document.getElementById("zone-avis");
const btnAvisPositif = document.getElementById("btn-avis-positif");
const btnAvisNegatif = document.getElementById("btn-avis-negatif");
const btnEnvoyerAvis = document.getElementById("btn-envoyer-avis");
const texteAvis = document.getElementById("texte-avis");
const merciAvis = document.getElementById("merci-avis");

let choixAvis = null; // Mémoire pour savoir quel pouce elle a cliqué

// 1. Clic sur le pouce VERT
btnAvisPositif.addEventListener("click", () => {
  choixAvis = "positif";
  // On allume le vert et on éteint le rouge
  btnAvisPositif.querySelector("img").src = "./Sprite/pouce-vert-actif.png";
  btnAvisNegatif.querySelector("img").src = "./Sprite/pouce-rouge.png";
});

// 2. Clic sur le pouce ROUGE
btnAvisNegatif.addEventListener("click", () => {
  choixAvis = "negatif";
  // On allume le rouge et on éteint le vert
  btnAvisNegatif.querySelector("img").src = "./Sprite/pouce-rouge-actif.png";
  btnAvisPositif.querySelector("img").src = "./Sprite/pouce-vert.png";
});

// 3. ENVOI AU WEBHOOK
btnEnvoyerAvis.addEventListener("click", () => {
  // Sécurité : on vérifie qu'elle a bien choisi un pouce
  if (!choixAvis) {
    alert("N'oublie pas de choisir un pouce mon coeur !");
    return;
  }

  // On récupère son petit mot
  const messageAvis = texteAvis.value;

  // /!\ CRÉE UN NOUVEAU LIEN WEBHOOK ET COLLE-LE ICI /!\
  const urlAvis =
    "https://webhook.site/57944015-f21f-4747-9e16-573ae5cda352?choix=" +
    choixAvis +
    "&message=" +
    encodeURIComponent(messageAvis);

  // On envoie le signal !
  fetch(urlAvis);

  // On cache les boutons/texte et on affiche le merci
  document.getElementById("boutons-avis").classList.add("hidden");
  texteAvis.classList.add("hidden");
  btnEnvoyerAvis.classList.add("hidden");
  merciAvis.classList.remove("hidden");

  // On ferme automatiquement la modale après 3 secondes
  setTimeout(() => {
    zoneAvis.classList.add("hidden");
  }, 3000);
});

// --- OUVRIR ET FERMER LA FENÊTRE D'AVIS ---
const btnOuvrirAvis = document.getElementById("btn-ouvrir-avis");
const avisModaleFermer = document.getElementById("avis-modale-fermer");

// Quand on clique sur le bouton "Avis" en bas à droite
btnOuvrirAvis.addEventListener("click", () => {
  document.getElementById("zone-avis").classList.remove("hidden");
});

// Quand on clique sur la petite croix (X)
avisModaleFermer.addEventListener("click", () => {
  document.getElementById("zone-avis").classList.add("hidden");
});
