export interface Surah {
  id: string;
  number: number;
  name: string;
  text: string;
  audioUrl?: string;
}

export interface Dua {
  id: string;
  text: string;
  description?: string;
  category: 'general' | 'deceased' | 'morning' | 'evening';
  isFeatured?: boolean;
}

export type Screen = 'home' | 'quran' | 'duas';
