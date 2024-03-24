import { Image } from './image';

export interface ComicDataContainer {
  total: number;
  results: Comic[];
}

export interface Comic {
  id: number;
  title: string;
  description: string;
  thumbnail: Image;
}
