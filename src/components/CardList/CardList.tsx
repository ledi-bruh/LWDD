import { FC } from 'react';
import classes from './CardList.module.css';
import { Card } from '../../types';

interface ICardListProps {
  cards: Card[];
  handleCardClick: (card: Card) => void;
}

const CardList: FC<ICardListProps> = ({ cards, handleCardClick }) => {
  return (
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
            <p>
              {_card.description === '' || _card.description === null
                ? 'No description provided'
                : _card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
