import { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import CardSearch from 'components/CardSearch';
import { charactersStore } from 'stores/CharactersStore';
import { Character } from 'api/types';

const Characters: FC = () => {
  const { characterDataContainer, loading } = charactersStore;
  const [curPage, setCurPage] = useState(1);
  const limit: number = 10;
  const maxPage: number = Math.ceil(characterDataContainer.total / limit);
  const maxPagesToView: number = 7;

  useEffect(() => {
    charactersStore.getPage(limit, (curPage - 1) * limit);
  }, [curPage]);

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
      paginationProps={{
        curPage: curPage,
        maxPage: maxPage,
        maxPagesToView: maxPagesToView,
        handlePageClick: setCurPage
      }}
    />
  );
};

export default observer(Characters);
