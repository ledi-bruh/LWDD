import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import CardSearch from 'components/CardSearch';
import { charactersStore } from 'stores/CharactersStore';
import { Character } from 'api/types';

const Characters: FC = () => {
  const { characterDataContainer, loading } = charactersStore;
  const page: number = 0;
  const limit: number = 10;

  useEffect(() => {
    charactersStore.getPage(limit, page * limit);
  }, [page]);

  return (
    <CardSearch
      title={'Characters'}
      baseUrl={'/characters'}
      cardsCount={characterDataContainer.total}
      cards={characterDataContainer.results.map((character: Character) => {
        return {
          id: character.id.toString(),
          title: character.name,
          description: character.description,
          image: `${character.thumbnail.path}.${character.thumbnail.extension}`
        };
      })}
      loading={loading}
    />
  );
};

export default observer(Characters);
