export interface FormelVariable {
  symbol: string;
  bedeutung: string;
  einheit: string;
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
}

export declare const formeln: Formel[];
export declare function getFormelBySlug(slug: string): Formel | undefined;
export declare function getFormelByUnterkategorie(unterkategorie: string): Formel[];
