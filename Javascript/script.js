const nombreAleatoire = Math.floor(Math.random() * 100) + 1;

const saisieUtilisateurElement = document.querySelector('.saisie-utilisateur');

const boutonDevine = document.querySelector('.boutton-devine');

const messageElement = document.querySelector('.message');

const tempsRestantElement = document.querySelector('.compteur-temps');

const historiqueElement = document.querySelector('.historique');

let tentative = 0;

let tempsRestant = 30;

tempsRestantElement.textContent = tempsRestant;

function gererDevine() {
    const saisieUtilisateur = parseInt(saisieUtilisateurElement.value); // Correction : Utilisez "value" au lieu de "[0].value"
    
    if (isNaN(saisieUtilisateur) || saisieUtilisateur < 1 || saisieUtilisateur > 100) {
        messageElement.textContent = "Veuillez entrer un nombre valide entre 1 et 100";
    } else {
        tentative++;

        const resultat = (saisieUtilisateur === nombreAleatoire) ? "Bravo" : (saisieUtilisateur < nombreAleatoire) ? "Le nombre est plus grand" : "Le nombre est plus petit"; // Correction : Correction de la condition pour afficher "Le nombre est plus petit"

        messageElement.textContent = resultat;

        ajouterDevenerHistorique(saisieUtilisateur, resultat); // Correction : Utilisez "saisieUtilisateur" au lieu de "devine"
        
        if (saisieUtilisateur === nombreAleatoire) {
            boutonDevine.disabled = true;
            setTimeout(() => {
                clearInterval(intervalId);
            }, 1000);
        }
    }
}

function ajouterDevenerHistorique(devine, resultat) {
    const deveinetteItem = document.createElement("li");
    deveinetteItem.textContent = `Votre proposition: ${devine}, Résultat : ${resultat}`; // Correction : Utilisez des backticks pour inclure des variables dans une chaîne de caractères
    historiqueElement.appendChild(deveinetteItem); // Correction : Utilisez "deveinetteItem" au lieu de "'deveinetteItem'"
}

function decrementerTemps() {
    tempsRestant--;
    tempsRestantElement.textContent = tempsRestant;
    if (tempsRestant === 0) {
        boutonDevine.disabled = true;
        messageElement.textContent = "Le temps est écoulé, vous n'avez pas réussi à deviner le prix";
        const finCompteurAudio =document.getElementById('finCompteurAudio') ;
        finCompteurAudio.play();
    }
}

const intervalId = setInterval(decrementerTemps, 1000); 

setTimeout(() => {
    clearInterval(intervalId);
    boutonDevine.disabled = true;
}, 30000);


boutonDevine.addEventListener("click", gererDevine);
