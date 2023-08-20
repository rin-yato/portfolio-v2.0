export type MangaList = {
  result: string;
  response: string;
  data: Data;
};

export type Data = {
  id: string;
  type: string;
  attributes: DataAttributes;
  relationships: Relationship[];
};

export type DataAttributes = {
  name: string;
  visibility: string;
  version: number;
};

export type Relationship = {
  id: string;
  type: string;
  attributes?: RelationshipAttributes;
};

export type RelationshipAttributes = {
  title: Title;
  altTitles: AltTitle[];
  description: Description;
  isLocked: boolean;
  links: Links;
  originalLanguage: string;
  lastVolume: string;
  lastChapter: string;
  publicationDemographic: null;
  status: string;
  year: number;
  contentRating: string;
  tags: Tag[];
  state: string;
  chapterNumbersResetOnNewVolume: boolean;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  availableTranslatedLanguages: string[];
  latestUploadedChapter: string;
};

export type AltTitle = {
  ko?: string;
  en?: string;
  'ko-ro'?: string;
  'ja-ro'?: string;
  ru?: string;
  ja?: string;
  zh?: string;
  'zh-hk'?: string;
  la?: string;
  tr?: string;
};

export type Description = {
  de: string;
  en: string;
  fr: string;
  id: string;
  it: string;
  ja: string;
  ko: string;
  pl: string;
  ru: string;
  th: string;
  zh: string;
  'es-la': string;
  'pt-br': string;
  'zh-hk': string;
};

export type Links = {
  al: string;
  ap: string;
  bw: string;
  kt: string;
  mu: string;
  nu: string;
  amz: string;
  ebj: string;
  mal: string;
  raw: string;
  engtl: string;
};

export type Tag = {
  id: string;
  type: Type;
  attributes: TagAttributes;
  relationships: any[];
};

export type TagAttributes = {
  name: Title;
  description: any[];
  group: Group;
  version: number;
};

export type Group = 'format' | 'theme' | 'genre';

export type Title = {
  en: string;
};

export type Type = 'tag';
