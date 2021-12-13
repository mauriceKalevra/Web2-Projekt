CREATE TABLE IF NOT EXISTS "Immobilie" (
    id TEXT NOT NULL PRIMARY KEY,
    angebotstyp TEXT NOT NULL,
    ort TEXT NOT NULL,
    objekt TEXT NOT NULL,
    preis INTEGER,
    zimmer INTEGER,
    flaeche INTEGER,
    kontakt TEXT NOT NULL
);

