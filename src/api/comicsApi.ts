import axios from 'api/helpers/axios';
import { ComicDataContainer, Comic, CharacterDataContainer } from 'api/types';

async function getPage(
  limit: number,
  offset: number,
  titleStartsWith: string | null = null
): Promise<ComicDataContainer> {
  const response = await axios.get(`/v1/public/comics`, {
    params: {
      titleStartsWith: titleStartsWith,
      limit: limit,
      offset: offset
    }
  });

  return response.data.data;
}

async function getById(id: string): Promise<Comic> {
  const response = await axios.get(`/v1/public/comics/${id}`);

  return response.data.data.results[0];
}

async function getCharacters(id: string): Promise<CharacterDataContainer> {
  const response = await axios.get(`/v1/public/comics/${id}/characters`);

  return response.data.data;
}

export { getPage, getById, getCharacters };
