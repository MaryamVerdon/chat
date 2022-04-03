# Le projet :  création d'un chat
L'objectif de ce projet est de déployer un serveur de chat afin de se familiariser avec la technologie des sockets en mettant en place un protocole d'envoi de messages entre le client et le serveur. On utilise [NodeJS](https://nodejs.org/) pour le déploiement du serveur HTTP, [Express](https://expressjs.com/fr/) pour servir l'interface Web du client et [Socket.io](https://socket.io/) pour l'échange de messages entre les clients via le serveur.

## Comment participer au projet ?

Assurez-vous que [Node.js](https://nodejs.org/) et [npm](https://www.npmjs.com/) soient installés.

1. Cloner git

      git clone https://github.com/MaryamVerdon/chat.git
      
2.  En ligne de commande, se placer dans le répertoire "chat"

         cd chat
         
         npm install (installer les dépendances)
         
3. Lancer l'application

         npm run start
Votre application devrait s'éxecuter sur [localhost:8080](http://localhost:8080/).

## Le projet

Le projet se découpe en trois fichiers :
  - index.html : contient l'interface du client chat. Il utilise le framework CSS [Spectre.css](https://picturepan2.github.io/spectre/) afin de proposer une interface responsive.
  - serveur.js : afin d'initialiser le serveur HTTP.
  - client.js : contient le code JavaScript de l'interface Web du client chat.

### Spécificités du chat ###

  - Autorise les pseudos avec des chiffres, majuscules ainsi que les caractères spéciaux suivant : . , - , _
  - N'autorise pas la connexion d'utilisateurs ayant le même pseudo.
  - N'autorise pas l'injection de code HTML dans le champ de saisie.
  - Envoi/récéption de messages publics avec affichage du pseudo, de la date et de l'heure.
  - Affichage d'un message lorsqu'un utilisateur se connecte/déconnecte.
  - Affichage de tous les utilisateurs connectés dans une liste.

## A venir
 
 Application :
 
  - Envoi/réception de messages privés
  - Envoi d'images (public et privé)
  - Correction des bugs
  
Documentation :

  - Ajouter des images de l'application 

 
