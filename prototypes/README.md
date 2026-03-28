# Juvantis — Prototypen

Alle technischen Prototypen für die Juvantis-Plattform werden hier verwaltet.
Jeder Prototyp hat seinen eigenen Unterordner mit eigenständigem Tech-Stack.

## Aktive Prototypen

| Ordner | Beschreibung | Tech-Stack | Status |
|--------|-------------|------------|--------|
| `juvantis-ios` | iOS-App (Digital Health Twin) | Swift/SwiftUI, HealthKit, SceneKit | In Planung |
| `pip-boy-legacy` | Erster Backend-Prototyp | Node.js, Express, SQLite | Archiviert / Referenz |

## Konvention

- Ordnernamen in kebab-case
- Jeder Prototyp enthält ein eigenes `README.md` mit Setup-Anweisungen
- Gemeinsame Assets (Logos, Icons) liegen in `_assets/` (wird bei Bedarf erstellt)
- Blender-Skripte für 3D-Avatare liegen im jeweiligen Prototyp unter `assets/blender/`

## Entwicklung

Die App-Entwicklung erfolgt primär in **Claude Code** (CLI-Tool),
da dort direkte Dateisystem-Interaktion und iteratives Coding besser unterstützt werden.
Siehe `_config/CLAUDE_CODE_HOWTO.md` für Anleitung.
