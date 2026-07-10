export interface FormelVariable {
  symbol: string;
  bedeutung: string;
  einheit: string;
}

export interface FormelHerleitung {
  /** Gültigkeitsbereich / Annahmen der Formel. */
  gueltigkeit: string;
  /** Herleitungsschritte in Reihenfolge. */
  schritte: string[];
}

export interface FormelUmstellung {
  /** Nach welcher Größe umgestellt wird. */
  ziel: string;
  /** LaTeX der umgestellten Form. */
  latex: string;
  /** Hinweis zur Umstellung (Definitionsbereich, Vorzeichen, ...). */
  hinweis: string;
}

export interface FormelTypischerFehler {
  /** Häufiger Fehler. */
  fehler: string;
  /** Korrektur / richtige Deutung. */
  korrektur: string;
}
export interface Formel {
  slug: string;
  name: string;
  symbol: string;
  latex: string;
  kategorie: 'biologie';
  unterkategorie: string;
  beschreibung: string;
  einheiten: string;
  variablen: FormelVariable[];
  hintergrund: string;
  beispiel: string;
  anwendung: string;
  quellen: string[];
  verwandte: string[];
  schwierigkeit: 'grundlegend' | 'fortgeschritten' | 'universitaet';
abiturRelevant?: boolean;
  quellenLinks?: string[];
  dateUpdated?: string;
  suchbegriffe?: string[];
  /** Interaktive Formelseite (Herleitung interaktiv, Klausur-Aufgaben & FAQ). */
  url?: string;
  /** Herleitung mit Gültigkeitsbereich und Schritten (aus dem Abitur-Blueprint). */
  herleitung?: FormelHerleitung;
  /** Umstellungen der Formel nach anderen Größen. */
  umstellungen?: FormelUmstellung[];
  /** Typische Fehler und ihre Korrektur. */
  typischeFehler?: FormelTypischerFehler[];
}

export declare const formeln: Formel[];
export declare function getFormelBySlug(slug: string): Formel | undefined;
export declare function getFormelByUnterkategorie(unterkategorie: string): Formel[];
