# Jeu de Devine le Nombre

## Introduction

Ce projet est un petit jeu développé en JavaScript où l'utilisateur doit deviner un nombre aléatoire entre 1 et 100 dans un laps de temps donné.

## Fonctionnalités

- Génération d'un nombre aléatoire entre 1 et 100.
- Compteur de temps pour limiter la durée du jeu.
- Saisie utilisateur pour deviner le nombre.
- Historique des tentatives avec résultats.
- Message de victoire ou défaite à la fin du temps imparti.

## Comment jouer

1. Ouvrez le fichier `index.html` dans votre navigateur.
2. Saisissez un nombre entre 1 et 100 dans le champ de saisie.
3. Cliquez sur le bouton "Devine".
4. Le programme vous donnera des indications sur la relation entre votre proposition et le nombre généré.
5. Répétez les étapes 2-4 jusqu'à ce que vous trouviez le nombre ou que le temps imparti soit écoulé.

## Capture d'Écran

![Capture d'écran du jeu](Javascript/jeu.png)

*Exemple de capture d'écran montrant l'interface du jeu.*

## Code JavaScript

Le code JavaScript est divisé en plusieurs parties :

- **Génération du nombre aléatoire :** `const nombreAleatoire = Math.floor(Math.random() * 100) + 1;`

- **Gestion de la saisie utilisateur :** La fonction `gererDevine` traite la saisie de l'utilisateur, vérifie sa validité, compare avec le nombre aléatoire et met à jour l'affichage en conséquence.

- **Décrémentation du temps :** La fonction `decrementerTemps` réduit le temps restant à chaque seconde. Un intervalle est défini pour appeler cette fonction toutes les secondes.

- **Fin du jeu :** Un délai de 30 secondes est défini avec `setTimeout` pour mettre fin au jeu. Si l'utilisateur n'a pas deviné le nombre dans le temps imparti, le bouton de devinette est désactivé et un message de défaite est affiché.

## Installation

Aucune installation spécifique n'est nécessaire. Ouvrez simplement le fichier `index.html` dans un navigateur moderne.

## Auteur

Richard GADJENOU

N'hésitez pas à apporter des améliorations ou à personnaliser le jeu selon vos besoins. Amusez-vous bien !

