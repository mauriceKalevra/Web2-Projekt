var express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const { IncomingMessage } = require('http');
var port = 1337;
var path = require('path');
var immodb = require('better-sqlite3')("immobilie.db"); 
//var cookieParser = require('cookie-parser');


var app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(logger('dev'));

// ließt aus dem public folder die index.hmtl aus und stellt diese dar!
app.use(express.static(path.join(__dirname, 'public')));

//Post Request mit Formular Daten.
app.post("/v1/immo", async (req, res) => {
  const immo = req.body;

  immodb.prepare('INSERT INTO Immobilie (id, "angebotstyp", "ort", "objekt", "preis", "zimmer", "flaeche", "kontakt") VALUES (?, ?, ?, ?, ? ,? ,?, ?)').run(immo.id, immo.angebot, immo.ort, immo.objekt, immo.preis, immo.zimmer, immo.flaeche, immo.kontakt);

  return res.status(200).send();

})

//get request für Alle Angebote
app.get("/v1/angebote", async (req, res) => {
    const immodaten = immodb.prepare("SELECT * FROM Immobilie").all();

    return res.status(200).send(immodaten);

  })

//delete ImmoItem via id
app.delete("/v1/immo/:mytoken", async (req, res) => {
  let mytoken = req.params["mytoken"];

  immodb.prepare("DELETE FROM Immobilie WHERE id =?").run(mytoken);

  return res.status(200).send();
});




app.get("/biete", async (req, res) => {
  res.sendFile('faq.html', {
    root: path.join(__dirname, './public')
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

