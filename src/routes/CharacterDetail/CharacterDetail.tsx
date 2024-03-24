import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { characterStore, comicDataContainerStore } from 'stores';
import CartDetail from 'components/CartDetail';
import { Comic } from 'api/types';

const CharacterDetail: FC = () => {
  const { id } = useParams() as { id: string };
  const { character } = characterStore;
  const { comicDataContainer, loading } = comicDataContainerStore;

  useEffect(() => {
    characterStore.getById(id);
    comicDataContainerStore.getByCharacterId(id);
  }, [id]);

  return character === null ? (
    <div>Character is loading...</div>
  ) : (
    <CartDetail
      card={{
        id: character!.id.toString(),
        image: `${character!.thumbnail.path}.${character!.thumbnail.extension}`,
        title: character!.name,
        description: character!.description
      }}
      subCardsTitle={'Comics'}
      subCards={
        loading
          ? []
          : comicDataContainer.results.map((comic: Comic) => {
              return {
                id: comic.id.toString(),
                image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
                title: comic.title,
                description: comic.description
              };
            })
      }
      subCardsUrl={'/comics'}
    />
  );
};

export default observer(CharacterDetail);
