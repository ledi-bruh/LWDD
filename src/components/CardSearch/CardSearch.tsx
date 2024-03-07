import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './CardSearch.module.css';
import clsx from 'clsx';
import { Card } from '../../types';
import { charactersMock, comicsMock } from 'components/mock';

interface ICardSearchProps {
  title: string;
  baseUrl: string;
}

const CardSearch: FC<ICardSearchProps> = ({ title, baseUrl }) => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([] as Card[]);
  const cardsCount = cards.length;

  useEffect(() => {
    let data: Card[] = [];
    switch (baseUrl) {
      case '/characters':
        data = Object.keys(charactersMock).map((key) => charactersMock[key]);
        break;
      case '/comics':
        data = Object.keys(comicsMock).map((key) => comicsMock[key]);
        break;
    }

    setCards(data);
  }, [baseUrl]);

  const handleCardClick = (card: Card) => {
    return navigate(`${baseUrl}/${card.id}`, {
      replace: true,
      state: { card: card }
    });
  };

  return (
    <section className={classes.cardsSection}>
      <div className={clsx(classes.row, classes.sectionHeader)}>
        <h2>{title}</h2>
        <p>({cardsCount})</p>
      </div>
      <div className={clsx(classes.row, classes.searchContainer)}>
        <input placeholder={`Search for ${title} by Name`}></input>
        <button>SEARCH</button>
      </div>
      <hr />
      <div className={classes.cardsContainer}>
        {cards.map((_card, index) => (
          <div
            key={index}
            className={classes.card}
            onClick={() => handleCardClick(_card)}
          >
            <div className={classes.cardImageContainer}>
              <img src={_card.image} alt="cardImage"></img>
            </div>
            <div className={classes.cardInfo}>
              <h3>{_card.title}</h3>
              <p>{_card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSearch;
