# Projet Dragon
Solution de l'équipe Dragon face au sujet "partage de connaissances"

## Description
Ce projet est composé d'une base de données et d'un site web. Le but du projet est de pouvoir rechercher ou archiver des
projets pour pouvoir les retrouver facilement. Si vous souhaitez tester notre projet, veuillez suivre les étapes 
d'installations ci-dessous.

## Installation
Etape 1 : Installer la base de données. Pour ce faire, importer simplemement le fichier dragon.sql dans votre logiciel préféré
(MySQL workbench, Wamp, ...). La base de données doit impérativement être nommée "dragon".
Etape 2 : Ouvrez le dossier Dragon dans un IDE HTML (VS code préféré). Ouvrez un terminal et tapez la commande
```
npm install
```
Etape 3 : Ouvrez un nouveau terminal et tapez les commandes
```
cd .\server\
node app.js
```
Etape 4 : Ouvrez un nouveau terminal et tapez la commande
```
npm start
```
Etape 5 : Ouvrez votre navigateur et tapez dans la barre de recherche 
```
localhost:3000
```

Félicitations, vous pouvez désormais vous servir de notre site ! 

## Tutoriel d'utilisation

La majorité du site est inaccesible si vous n'êtes pas connecté. Pour ce faire, cliquez en haut à gauche du site pour accéder
à la page de création de compte ou de connexion. Vous pouvez, si vous le souhaitez, créer vous-même votre propre compte pour
pouvoir utiliser le site, ou vous connectez à un compte déjà existant. Pour ce faire, rentrez en username "root" et en mot
de passe "root".
Maintenant que vous êtes connectés, vous avez accès à trois rubriques supplémentaires en haut à gauche du site :
	- Publier un projet : la page permettant d'archiver un projet
	- Projets : la page permettant de recherchant un projet (cumuler les critères de recherches est possible, laisser
	les champs vides pour faire apparaître tous les projets)
	- Mes projets : La page où apparaissent les projets archivés par l'utilisateur. Si vous cliquez sur le cadre d'un
	projet, vous pouvez le modifier.

## Auteurs
```
Amaury BOUSSION
Bouthayna ATIK
Antoine RECIO ANDRADES
```



