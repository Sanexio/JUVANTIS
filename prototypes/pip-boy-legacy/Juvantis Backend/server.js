// Importiere die benötigten Module
const express = require('express');
const multer = require('multer');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const csv = require('csv-parser');

// Erstelle eine Express-Applikation
const app = express();
const port = 3000;

// Konfiguriere multer zum Speichern hochgeladener Dateien
const upload = multer({ dest: 'uploads/' });

// Route zum Hochladen der CSV-Datei
app.post('/upload', upload.single('file'), (req, res) => {
  const filePath = req.file.path;

  // CSV-Datei einlesen und Daten in die Datenbank einfügen
  fs.createReadStream(filePath)
    .pipe(csv({ separator: ',' }))
    .on('data', (row) => {
      let db = new sqlite3.Database('./database.db');

      // SQL-Insert-Befehl für die Tabelle
      db.run(`INSERT INTO labordaten (datum, typ, code, beschreibung, status, nutzer) VALUES (?, ?, ?, ?, ?, ?)`,
        [row.Datum, row.Typ, row.Code, row.Beschreibung, row.Status, row.Nutzer], (err) => {
          if (err) {
            console.error(err.message); // Fehlerausgabe, falls das Einfügen der Daten fehlschlägt
          }
        });

      db.close((err) => {
        if (err) {
          console.error(err.message); // Fehlerausgabe, falls das Schließen der Verbindung fehlschlägt
        }
      });
    })
    .on('end', () => {
      fs.unlinkSync(filePath); // Lösche die hochgeladene Datei nach dem Verarbeiten
      res.send('CSV-Datei erfolgreich hochgeladen und verarbeitet.');
    });
});

// Route zum Abrufen aller Labordaten
app.get('/labordaten', (req, res) => {
  let db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
      console.error(err.message); // Fehlerausgabe, falls die Verbindung zur Datenbank fehlschlägt
    }
  });

  db.all(`SELECT * FROM labordaten`, [], (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message }); // Fehlerausgabe als JSON, falls die Abfrage fehlschlägt
      return;
    }
    res.json({ "data": rows }); // Rückgabe der abgefragten Daten als JSON
  });

  db.close((err) => {
    if (err) {
      console.error(err.message); // Fehlerausgabe, falls das Schließen der Verbindung fehlschlägt
    }
  });
});

// Starte den Server und lasse ihn auf dem angegebenen Port lauschen
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`); // Bestätigung, dass der Server läuft
});
