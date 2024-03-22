import axios from 'api/helpers/axios';
import {
  CharacterDataContainer,
  Character,
  ComicDataContainer
} from 'api/types';

async function getPage(
  limit: number,
  offset: number,
  nameStartsWith: string | null = null
): Promise<CharacterDataContainer> {
  const response = await axios.get(`/v1/public/characters`, {
    params: {
      nameStartsWith: nameStartsWith,
      limit: limit,
      offset: offset
    }
  });

  return response.data.data;
}

async function getById(id: string): Promise<Character> {
  const response = await axios.get(`/v1/public/characters/${id}`);

  return response.data.data.results[0];
}

async function getComics(id: string): Promise<ComicDataContainer> {
  const response = await axios.get(`/v1/public/characters/${id}/comics`);

  return response.data.data;
}

export { getPage, getById, getComics };
