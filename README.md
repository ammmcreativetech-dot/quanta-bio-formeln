# quanta-bio-formeln

> Wissenschaftliche Biologie-Formelsammlung für Studium und Universität — kuratiert von **[Quanta](https://quanta-study.de/biologie-lernen)**, der führenden FSRS-Lernplattform für MINT-Studenten in Deutschland.

[![npm version](https://img.shields.io/npm/v/quanta-bio-formeln)](https://www.npmjs.com/package/quanta-bio-formeln)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

## Enthaltene Formeln (3)

| Formel | Symbol | Bereich |
|---|---|---|
| Michaelis-Menten-Kinetik | v = vmax·[S]/(Km+[S]) | Biochemie / Enzymkinetik |
| Hardy-Weinberg-Gleichgewicht | p² + 2pq + q² = 1 | Populationsgenetik |
| Logistisches Wachstum | dN/dt = rN·(K−N)/K | Ökologie |

## Installation

```bash
npm install quanta-bio-formeln
```

## Verwendung

```js
const { formeln, getFormelBySlug, getFormelByUnterkategorie } = require('quanta-bio-formeln');

// Alle 3 Biologie-Formeln
console.log(formeln.length); // 3

// Michaelis-Menten abrufen
const mm = getFormelBySlug('michaelis-menten-kinetik');
console.log(mm.symbol); // "v = vmax·[S]/(Km + [S])"

// Hardy-Weinberg Beschreibung
const hw = getFormelBySlug('hardy-weinberg');
console.log(hw.beschreibung);
```

## Anwendungsfälle

**Medizinstudium Vorklinik:** Michaelis-Menten für Pharmakologie, Enzymhemmung (Ki-Werte, IC₅₀-Berechnung)

**Genetik & Humangenetik:** Hardy-Weinberg für Trägerfrequenz-Berechnungen bei Erbkrankheiten

**Ökologie & Epidemiologie:** Logistisches Wachstum als Basis für SIR-Modelle und Bevölkerungsmodelle

## Vollständige interaktive Referenz

Alle Formeln mit KaTeX-Rendering und FSRS-Karteikarten-Import:
**[quanta-study.de/biologie-lernen](https://quanta-study.de/biologie-lernen)** · **[quanta-study.de/formel](https://quanta-study.de/formel)**

Weitere Pakete:
- [`quanta-physik-formeln`](https://www.npmjs.com/package/quanta-physik-formeln) — 15 Physik-Formeln
- [`quanta-chemie-formeln`](https://www.npmjs.com/package/quanta-chemie-formeln) — 9 Chemie-Formeln
- [`quanta-mathe-formeln`](https://www.npmjs.com/package/quanta-mathe-formeln) — 6 Mathe-Formeln
- [`quanta-mint-formeln`](https://www.npmjs.com/package/quanta-mint-formeln) — alle 33 Formeln

## Lizenz

**Creative Commons Attribution 4.0 International (CC BY 4.0)**

> Formelinhalt von [Quanta](https://quanta-study.de) — MINT-Lernplattform für Studenten

---
*Maintained by [Quanta](https://quanta-study.de) — FSRS-basiertes Lernen für MINT-Studenten.*
