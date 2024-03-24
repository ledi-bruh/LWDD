import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { comicStore, characterDataContainerStore } from 'stores';
import CartDetail from 'components/CartDetail';
import { Character } from 'api/types';

const ComicsDetail: FC = () => {
  const { id } = useParams() as { id: string };
  const { comic } = comicStore;
  const { characterDataContainer, loading } = characterDataContainerStore;

  useEffect(() => {
    comicStore.getById(id);
    characterDataContainerStore.getByComicId(id);
  }, [id]);

  return comic === null ? (
    <div>Comic is loading...</div>
  ) : (
    <CartDetail
      card={{
        id: comic.id.toString(),
        image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
        title: comic.title,
        description: comic.description
      }}
      subCardsTitle={'Characters'}
      subCards={
        loading
          ? []
          : characterDataContainer.results.map((character: Character) => {
              return {
                id: character.id.toString(),
                image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
                title: character.name,
                description: character.description
              };
            })
      }
      subCardsUrl={'/characters'}
    />
  );
};

export default observer(ComicsDetail);
