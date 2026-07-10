# quanta-bio-formeln

> Wissenschaftliche Biologie-Formelsammlung für Abitur, Studium und Universität, kuratiert von **[Quanta](https://quanta-study.de/biologie-lernen)**, der führenden FSRS-Lernplattform für MINT in Deutschland.

[![npm version](https://img.shields.io/npm/v/quanta-bio-formeln)](https://www.npmjs.com/package/quanta-bio-formeln)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

## Enthaltene Formeln (8)

| Formel | Symbol | Bereich | Formelseite |
|---|---|---|---|
| Michaelis-Menten-Kinetik (Enzymkinetik) | v = Vmax·[S] / (Km + [S]) | Biochemie | [michaelis-menten](https://quanta-study.de/tafelwerk/michaelis-menten) |
| Logistisches Wachstum | dN/dt = r·N·(1 − N/K) | Populationsbiologie | [logistisches-wachstum](https://quanta-study.de/tafelwerk/logistisches-wachstum) |
| Hardy-Weinberg-Gleichgewicht | p² + 2pq + q² = 1 | Genetik | [hardy-weinberg](https://quanta-study.de/tafelwerk/hardy-weinberg) |
| Exponentielles Wachstum | N(t) = N₀·e^(r·t) | Populationsbiologie | [exponentielles-wachstum](https://quanta-study.de/tafelwerk/exponentielles-wachstum) |
| Chi-Quadrat-Test (Anpassungstest) | χ² = Σ (B − E)² / E | Genetik | [chi-quadrat-test](https://quanta-study.de/tafelwerk/chi-quadrat-test) |
| Shannon-Index (Biodiversität) | H' = −Σ pᵢ·ln(pᵢ) | Ökologie | [shannon-index](https://quanta-study.de/tafelwerk/shannon-index) |
| Simpson-Index (Dominanz und Diversität) | D = Σ pᵢ² | Ökologie | [simpson-index](https://quanta-study.de/tafelwerk/simpson-index) |
| Lincoln-Index (Fang-Wiederfang-Methode) | N = (M·C) / R | Ökologie | [lincoln-index](https://quanta-study.de/tafelwerk/lincoln-index) |

## Was ist neu in 2.0

Der Datensatz ist vom Studien-Fokus auf **Abitur-Vorbereitung** ausgeweitet und deutlich vertieft:

- **133 Formeln** über alle MINT-Fächer im Verbund (dieses Paket deckt den Biologie-Teil ab).
- **Herleitungen** je Formel: Gültigkeitsbereich plus Herleitungsschritte in Reihenfolge (`herleitung`).
- **Umstellungen** nach jeder relevanten Größe mit LaTeX und Hinweis (`umstellungen`).
- **Typische Fehler** samt Korrektur, direkt aus der Klausur-Praxis (`typischeFehler`).
- **Abitur-Fokus**: `abiturRelevant`-Flag, Suchbegriffe und Quellenlinks für die Prüfungsvorbereitung.
- Jede Formel trägt ein `url`-Feld auf ihre interaktive Formelseite.

Die interaktive Herleitung, Klausur-Aufgaben und die kuratierte FAQ leben auf der jeweils verlinkten Formelseite unter `quanta-study.de/tafelwerk/{slug}`.

## Installation

```bash
npm install quanta-bio-formeln
```

## Verwendung

```js
const { formeln, getFormelBySlug, getFormelByUnterkategorie } = require('quanta-bio-formeln');

// Alle 8 Biologie-Formeln
console.log(formeln.length); // 8

// Eine Formel nach Slug
const f = getFormelBySlug('michaelis-menten');
console.log(f.name);          // "Michaelis-Menten-Kinetik (Enzymkinetik)"
console.log(f.herleitung.gueltigkeit);      // Gültigkeitsbereich
console.log(f.umstellungen.length);         // Anzahl Umstellungen
console.log(f.typischeFehler[0].fehler);    // erster typischer Fehler

// Alle Formeln eines Bereichs
const bereich = getFormelByUnterkategorie('Biochemie');
```

## TypeScript

```ts
import { Formel, getFormelBySlug } from 'quanta-bio-formeln';
const formel: Formel | undefined = getFormelBySlug('michaelis-menten');
```

## Vollständige interaktive Referenz

Herleitung interaktiv, Klausur-Aufgaben & FAQ auf der jeweiligen Formelseite. Alle Formeln mit KaTeX-Rendering, FSRS Spaced Repetition und Karteikarten-Import:
**[quanta-study.de/biologie-lernen](https://quanta-study.de/biologie-lernen)** · **[quanta-study.de/tafelwerk](https://quanta-study.de/tafelwerk)**

Weitere Pakete:
- [`quanta-physik-formeln`](https://www.npmjs.com/package/quanta-physik-formeln) · 52 Physik-Formeln
- [`quanta-chemie-formeln`](https://www.npmjs.com/package/quanta-chemie-formeln) · 24 Chemie-Formeln
- [`quanta-mathe-formeln`](https://www.npmjs.com/package/quanta-mathe-formeln) · 49 Mathe-Formeln
- [`quanta-mint-formeln`](https://www.npmjs.com/package/quanta-mint-formeln) · alle 133 Formeln aggregiert

## Lizenz

**Creative Commons Attribution 4.0 International (CC BY 4.0)**

> Formelinhalt von [Quanta](https://quanta-study.de), MINT-Lernplattform für Schüler und Studenten

---
*Maintained by [Quanta](https://quanta-study.de), FSRS-basiertes Lernen für MINT.*
