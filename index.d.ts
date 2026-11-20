/** Compact German formula references; schema 3.0.0. */
export type FormelFach = "biologie";
export type FormelKapitel = "bio-biochemie-molekularbiologie" | "bio-biostatistik" | "bio-genetik-evolution" | "bio-oekologie-population" | "bio-physiologie";
export type FormelBildungsniveau = "sek1" | "sek2" | "hochschulbruecke" | "bachelor" | "fachvertiefung";
export interface FormelVariable { symbol: string; bedeutung: string; einheit: string; }
export interface Formel {
  slug: string; name: string; latex: string; symbol: string;
  kategorie: FormelFach; kapitel: FormelKapitel; unterkategorie: string;
  bildungsniveaus: FormelBildungsniveau[];
  schwierigkeit: 'grundlegend' | 'fortgeschritten' | 'universitaet';
  abiturRelevant: boolean; variablen: FormelVariable[];
  quellen: string[]; quellenLinks: string[]; url: string;
}
export const formeln: Formel[];
export function getAllFormeln(): Formel[];
export function getFormelBySlug(slug: string): Formel | undefined;
export function getFormelByKategorie(subject: FormelFach): Formel[];
export function getFormelByUnterkategorie(label: string): Formel[];
export function getFormelByKapitel(chapter: FormelKapitel): Formel[];
export function getFormelByBildungsniveau(level: FormelBildungsniveau): Formel[];
export function getAbiturFormeln(): Formel[];
