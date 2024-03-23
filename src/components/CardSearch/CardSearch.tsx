import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './CardSearch.module.css';
import { Card } from '../../types';
import Search from 'components/Search/Search';
import CardList from 'components/CardList';
import CardPagination, {
  ICardPaginationProps
} from 'components/CardPagination';

interface ICardSearchProps {
  title: string;
  baseUrl: string;
  cardsCount: number;
  cards: Card[];
  loading: boolean;
  setSearchQuery: (value: string) => void;
  paginationProps: ICardPaginationProps;
}

const CardSearch: FC<ICardSearchProps> = ({
  title,
  baseUrl,
  cardsCount,
  cards,
  loading,
  setSearchQuery,
  paginationProps
}) => {
  const navigate = useNavigate();
  const handleCardClick = (card: Card) => {
    return navigate(`${baseUrl}/${card.id}`, {
      replace: true,
      state: { card: card } // ?
    });
  };

  return (
    <section className={classes.cardsSection}>
      <div className={classes.sectionHeader}>
        <h2>{title}</h2>
        <p>({cardsCount})</p>
      </div>
      <Search
        buttonText={'SEARCH'}
        placeholder={`Search for ${title} by Name`}
        setSearchQuery={setSearchQuery}
      />
      <hr />
      {loading ? 'Loading...' : null}
      <CardList cards={cards} handleCardClick={handleCardClick} />
      <hr />
      <CardPagination {...paginationProps} />
    </section>
  );
};

export default CardSearch;
