# Umsetzungsplan — Juvantis iOS App

**Projekt:** Digital Health Twin (DHT) — Personalisierte Gesundheits-App
**Zielplattform:** iOS (iPhone + iPad), Swift/SwiftUI
**Entwicklungstool:** Claude Code (CLI)
**Stand:** 2026-03-27

---

## 1. Vision & Ziel

Eine iOS-App, die Gesundheitsdaten aus Apple HealthKit liest und in einem
personalisierten 3D-Avatar (Digital Health Twin) visualisiert. Der Avatar
spiegelt den aktuellen Gesundheitszustand wider und motiviert zu gesünderem
Verhalten.

**MVP-Scope:** HealthKit-Anbindung → Daten-Dashboard → 3D-Avatar-Anzeige

---

## 2. Architektur

```
┌─────────────────────────────────────────────────┐
│                   Juvantis iOS                   │
├──────────┬──────────────┬───────────────────────┤
│  Views   │  ViewModels  │       Services        │
│ (SwiftUI)│  (ObservObj) │                       │
├──────────┼──────────────┼───────────────────────┤
│ Dashboard│ HealthVM     │ HealthKitService      │
│ AvatarV  │ AvatarVM     │ AvatarService         │
│ LabView  │ LabDataVM    │ LabDataService        │
│ Settings │ SettingsVM   │ StorageService (local) │
│ Onboard  │              │ NetworkService (opt.)  │
└──────────┴──────────────┴───────────────────────┘
         │                        │
         ▼                        ▼
   SceneKit/RealityKit       Apple HealthKit
   (USDZ-Avatare)          (Schritte, HF, etc.)
```

**Pattern:** MVVM (Model-View-ViewModel) — SwiftUI-Standard
**Mindest-iOS:** 17.0 (für neueste SwiftUI-Features + RealityKit)

---

## 3. Phasen

### Phase 1: Grundgerüst (Sprint 1–2)

**Ziel:** Lauffähige App mit Navigation und HealthKit-Anbindung

Aufgaben:
- Xcode-Projektstruktur erstellen (Swift Package Manager)
- MVVM-Ordnerstruktur anlegen (Models, Views, ViewModels, Services)
- Tab-basierte Navigation (Dashboard, Avatar, Labor, Einstellungen)
- HealthKit-Berechtigung und Basis-Abfragen (Schritte, Herzfrequenz, Schlaf)
- Einfaches Dashboard mit Tagesdaten
- App-Icon und Launch Screen (Platzhalter)

**Ergebnis:** App zeigt echte HealthKit-Daten in einer Liste an

### Phase 2: Daten-Dashboard (Sprint 3–4)

**Ziel:** Visuell ansprechende Darstellung der Gesundheitsdaten

Aufgaben:
- Swift Charts für Verlaufsdiagramme (7 Tage, 30 Tage, 1 Jahr)
- Gesundheits-Score berechnen (gewichteter Algorithmus)
- Kategorien: Aktivität, Vitalwerte, Schlaf, Ernährung
- Trend-Erkennung (besser/schlechter als Vorwoche)
- Widget-artiges Dashboard-Layout mit SwiftUI Grid
- Farbschema implementieren (Teal-basiert: #028090, #00A896, #02C39A)

**Ergebnis:** Professionelles Dashboard mit Charts und Score

### Phase 3: Labordaten-Import (Sprint 5–6)

**Ziel:** Laborbefunde digital erfassen und anzeigen

Aufgaben:
- CSV-Import für Laborwerte (Format aus PIP BOY-Prototyp übernehmen)
- Datenmodell: Datum, Typ, Code, Beschreibung, Referenzwert, Status
- Tabellen-Ansicht mit Farbcodierung (normal/auffällig/kritisch)
- Historischer Verlauf einzelner Laborwerte
- Lokale Speicherung mit SwiftData (Core Data-Nachfolger)
- Optional: PDF-Befund-Import via Vision-Framework (OCR)

**Ergebnis:** Laborwerte importierbar und visuell aufbereitet

### Phase 4: 3D-Avatar — Digital Health Twin (Sprint 7–10)

**Ziel:** Personalisierter 3D-Avatar, der Gesundheitszustand widerspiegelt

Aufgaben:
- Blender-Pipeline aufsetzen (Python-Skripte für parametrische Avatare)
- Basis-Avatar erstellen (neutraler menschlicher Körper, USDZ-Export)
- Parameter-System: BMI → Körperform, Aktivität → Haltung, Schlaf → Augenringe
- SceneKit-Integration in SwiftUI (SCNView + UIViewRepresentable)
- Avatar-Rotation und Zoom (Touch-Gesten)
- Gesundheits-Score → Avatar-Zustand Mapping
- Animation-System: Idle, Happy, Tired, Energetic

**Ergebnis:** Drehbarer 3D-Avatar, der auf Gesundheitsdaten reagiert

### Phase 5: Polish & Premium (Sprint 11–12)

**Ziel:** App-Store-reif machen, Monetarisierung vorbereiten

Aufgaben:
- Onboarding-Flow (Permissions, Profil-Setup)
- Notifications (Tägliche Zusammenfassung, Ziel-Erinnerungen)
- Settings-Screen (Einheiten, Datenschutz, Export)
- Freemium/Premium-Logik (StoreKit 2)
- Accessibility (VoiceOver, Dynamic Type)
- Datenschutz-Erklärung und HealthKit-Usage-Descriptions
- TestFlight-Vorbereitung

**Ergebnis:** Beta-Version für TestFlight

---

## 4. Tech-Stack im Detail

| Komponente | Technologie | Grund |
|-----------|------------|-------|
| UI-Framework | SwiftUI | Deklarativ, iOS-Standard |
| Charts | Swift Charts | Native Apple-Lösung, seit iOS 16 |
| 3D-Rendering | SceneKit (MVP) → RealityKit (später) | SceneKit stabiler für einfache Szenen |
| 3D-Format | USDZ | Apple-Standard, Blender-Export möglich |
| Health-Daten | HealthKit | Einziger offizieller Weg auf iOS |
| Lokale DB | SwiftData | Modern, SwiftUI-integriert |
| Netzwerk | URLSession + async/await | Kein externer Dependency nötig |
| In-App-Kauf | StoreKit 2 | Für Freemium-Modell |
| OCR | Vision Framework | Für Befund-Scan (Phase 3) |

### Keine externen Dependencies im MVP
Die App nutzt ausschließlich Apple-Frameworks. Das reduziert Komplexität,
vermeidet Lizenzprobleme und ist für den App-Store-Review optimal.

---

## 5. Blender → Xcode Pipeline

```
Blender (Python/bpy)          Xcode (Swift)
┌──────────────┐              ┌──────────────┐
│ Basis-Mesh   │  export      │ SceneKit     │
│ erstellen    │──(USDZ)──→  │ SCNScene     │
│              │              │ laden        │
├──────────────┤              ├──────────────┤
│ Morph Targets│  export      │ Morph Target │
│ (Shape Keys) │──(USDZ)──→  │ Blending     │
│ definieren   │              │ per Code     │
├──────────────┤              ├──────────────┤
│ Materialien  │  export      │ SCNMaterial  │
│ zuweisen     │──(USDZ)──→  │ Properties   │
│              │              │ anpassen     │
└──────────────┘              └──────────────┘
```

**Workflow:**
1. Claude Code schreibt Blender-Python-Skript (`bpy`)
2. Du führst das Skript in Blender aus (Scripting-Tab oder CLI)
3. Blender exportiert `.usdz`-Datei
4. USDZ wird ins Xcode-Projekt kopiert (`Resources/Models/`)
5. Swift-Code lädt und manipuliert den Avatar zur Laufzeit

**Morph Targets** erlauben es, den Avatar-Körper per Code zu verändern,
ohne jedes Mal ein neues 3D-Modell generieren zu müssen. Beispiel:
- `weight` (0.0–1.0): Schlank → Übergewichtig
- `posture` (0.0–1.0): Aufrecht → Gebeugt
- `energy` (0.0–1.0): Müde → Energetisch

---

## 6. Dateistruktur im Xcode-Projekt

```
juvantis-ios/
├── JuvantisApp.swift              ← App Entry Point
├── Info.plist                     ← HealthKit-Entitlements
├── Assets.xcassets/               ← Icons, Farben
├── Resources/
│   └── Models/                    ← USDZ-Avatar-Dateien
├── Models/
│   ├── HealthData.swift
│   ├── LabResult.swift
│   └── AvatarState.swift
├── Views/
│   ├── Dashboard/
│   │   ├── DashboardView.swift
│   │   └── HealthScoreCard.swift
│   ├── Avatar/
│   │   ├── AvatarView.swift
│   │   └── AvatarSceneView.swift
│   ├── Lab/
│   │   ├── LabListView.swift
│   │   └── LabDetailView.swift
│   ├── Settings/
│   │   └── SettingsView.swift
│   └── Onboarding/
│       └── OnboardingView.swift
├── ViewModels/
│   ├── HealthViewModel.swift
│   ├── AvatarViewModel.swift
│   └── LabDataViewModel.swift
├── Services/
│   ├── HealthKitService.swift
│   ├── AvatarService.swift
│   ├── LabDataService.swift
│   └── StorageService.swift
├── Blender/
│   ├── generate_base_avatar.py    ← Blender-Skript
│   ├── generate_morph_targets.py
│   └── export_usdz.py
└── Tests/
    ├── HealthViewModelTests.swift
    └── LabDataServiceTests.swift
```

---

## 7. Nächste Schritte

1. **Claude Code öffnen** → Siehe `_config/CLAUDE_CODE_HOWTO.md`
2. **Phase 1 starten**: Projektstruktur + HealthKit-Anbindung
3. **In Xcode öffnen**: Build & Run auf Simulator
4. **Iterativ weiterentwickeln**: Phase für Phase in Claude Code

---

## 8. Risiken & Mitigationen

| Risiko | Wahrscheinlichkeit | Mitigation |
|--------|-------------------|------------|
| HealthKit-Berechtigungen komplex | Mittel | Schrittweise Permissions, gutes Error-Handling |
| USDZ-Export aus Blender fehlerhaft | Mittel | Reality Converter von Apple als Validierungs-Tool |
| 3D-Performance auf älteren iPhones | Niedrig | LOD-System (Level of Detail), iPhone 12+ als Minimum |
| App Store Review (Health Claims) | Hoch | Keine medizinischen Aussagen, nur Visualisierung |
| Labordaten-Datenschutz | Hoch | Nur lokale Speicherung, kein Cloud-Upload im MVP |
