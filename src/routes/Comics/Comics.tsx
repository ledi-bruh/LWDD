import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import CardSearch from 'components/CardSearch';
import { comicsStore } from 'stores/ComicsStore';
import { Comic } from 'api/types';

const Comics: FC = () => {
  const { comicDataContainer, loading } = comicsStore;
  const page: number = 0;
  const limit: number = 10;

  useEffect(() => {
    comicsStore.getPage(limit, page * limit);
  }, [page]);

  return (
    <CardSearch
      title={'Comics'}
      baseUrl={'/comics'}
      cardsCount={comicDataContainer.total}
      cards={comicDataContainer.results.map((comic: Comic) => {
        return {
          id: comic.id.toString(),
          title: comic.title,
          description: comic.description,
          image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`
        };
      })}
      loading={loading}
    />
  );
};

export default observer(Comics);
