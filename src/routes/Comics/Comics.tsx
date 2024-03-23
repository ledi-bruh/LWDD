import { FC, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import CardSearch from 'components/CardSearch';
import { comicsStore } from 'stores/ComicsStore';
import { Comic } from 'api/types';

const Comics: FC = () => {
  const { comicDataContainer, loading } = comicsStore;

  const [curPage, setCurPage] = useState(1);
  const limit: number = 10;
  const maxPage: number = Math.ceil(comicDataContainer.total / limit);
  const maxPagesToView: number = 7;

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    comicsStore.getPage(
      limit,
      (curPage - 1) * limit,
      searchQuery === '' ? null : searchQuery
    );
  }, [curPage, searchQuery]);

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
      setSearchQuery={setSearchQuery}
      paginationProps={{
        curPage: curPage,
        maxPage: maxPage,
        maxPagesToView: maxPagesToView,
        handlePageClick: setCurPage
      }}
    />
  );
};

export default observer(Comics);
