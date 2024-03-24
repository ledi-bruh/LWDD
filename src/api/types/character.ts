import { Image } from './image';

export interface CharacterDataContainer {
  total: number;
  results: Character[];
}

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Image;
}
