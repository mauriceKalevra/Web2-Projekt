# Web2-Projekt
Uni-Projekt for the Web-Application 2 module
The Application can be run 'locally' or via docker

***'Locally via node'***

**Prerequisites**   
Die Anwendung wurde unter folgender Node-Version getestet.  
~$ node -v   
-> v12.13.1  

**DBeaver** wird als Datenbank-manager verwendet!  

Folgende Node packages sollten installiert sein:  

~$ npm install express    
~$ npm install better-sqlite3  
~$ npm install morgan  

**How to run**  
Den Projekt-Ordner am besten in **VSCode** oder einer ähnlichen IDE öffnen.

In einem Terminal des Project Ordners die Datenbank erzeugen:

~$ cat schema.sql | sqlite3 immobilie.db

In DBeaver eine neue Verbindung anlegen und die erzeugte Datenbank auswählen.
Die Datenbank muss immobilie.db heißen!

Im Terminal der IDE nun das Projekt initialisieren und ausführen:  
~$ npm install  
~$ node app.js

Bei node-package Problemen gegenbenfalls neuinstallieren und anschließen rebuilden.  
~$ npm rebuild

Im Browser nun die Webseite aufrufen:  
localhost:1337

**Run via docker**
docker build -t customname .
docker run -p (localport:applicationport) --> 5000:1337

Im Browser nun die Anwendung aufrufen:
localhost:5000


