var express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
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

app.get("/biete", async (req, res) => {
  res.sendFile('faq.html', {
    root: path.join(__dirname, './public')
  })
})
//für Suche, noch nicht ganz fertig
app.get("/v1/search/", async (req, res) => {
  const searchTerm = req.query,term;
  const immodaten = immodb.prepare("SELECT * FROM angebotstyp=$StringSearchTyp AND objekt = $StringImmoTyp AND ort = $StringSearchOrt AND preis <= $StringSearchPreis AND zimmer >= $StringSearchZimmer AND flaeche >= $StringSearchFleache").run(searchTerm);
  res.status(200).send(immodaten);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


