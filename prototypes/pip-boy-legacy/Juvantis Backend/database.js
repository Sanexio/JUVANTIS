// Importiere das sqlite3-Modul
const sqlite3 = require('sqlite3').verbose();

// Verbindung zur SQLite-Datenbank herstellen
let db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error(err.message); // Fehlerausgabe, falls die Verbindung fehlschlägt
  }
  console.log('Verbundene SQLite-Datenbank.');
});

// Erstelle die Tabelle labordaten, falls sie noch nicht existiert
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS labordaten (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    datum TEXT,
    typ TEXT,
    code TEXT,
    beschreibung TEXT,
    status TEXT,
    nutzer TEXT
  )`, (err) => {
    if (err) {
      console.error('SQLITE_ERROR: ', err.message); // Fehlerausgabe, falls das Erstellen der Tabelle fehlschlägt
    } else {
      console.log("Tabelle labordaten erstellt oder existiert bereits.");
    }
  });
});

// Schließe die Datenbankverbindung
db.close((err) => {
  if (err) {
    console.error(err.message); // Fehlerausgabe, falls das Schließen der Verbindung fehlschlägt
  }
  console.log('Die Datenbankverbindung wurde geschlossen.');
});
