# Web2-Projekt
Uni-Projekt for the Web-Application 2 module
 
**Prerequisites**   
Folgende Node-Version sollte Installiert sein.  
~$ node -v   
-> v12.13.1  

**DBeaver** wird als Datenbank-manager verwendet!  

Das Webframework **Express** sollte installiert sein.  
~$ npm install express  

**Sqlite3** sollte installiert sein!  
~$ npm install better-sqlite3

Dazu wird eine sqlite3 Datenbank erzeugt. 

**How to run**  
Den Projekt-Ordner am besten in **VSCode** oder einer ähnlichen IDE öffnen!

In einem Terminal des Project Ordners die Datenbank erzeugen:

~$ cat schema.sql | sqlite3 immobilie.db

In DBeaver eine neue Verbindung anlegen und die erzeugte Datenbank auswählen!
Die Datenbank muss immobilie.db heißen!

Im Terminal der IDE nun das Projekt initialisieren und ausführen:  
~$ npm install  
~$ node app.js

Im Browser nun die Webseite aufrufen:  
localhost:1337





