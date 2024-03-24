import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../types';
import classes from './CartDetail.module.css';

interface ICartDetailProps {
  card: Card;
  subCardsTitle: string;
  subCards: Card[];
  subCardsUrl: string;
}

const CartDetail: FC<ICartDetailProps> = ({
  card,
  subCardsTitle,
  subCards,
  subCardsUrl
}) => {
  return (
    <section className={classes.cardDetailSection}>
      <div className={classes.cardPreviewContainer}>
        <img src={card.image} alt="cardImage"></img>
      </div>
      <div className={classes.cardContent}>
        <div className={classes.cardInfo}>
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </div>
        <div className={classes.subCards}>
          <h3>{subCardsTitle}</h3>
          {subCards.map((_subCard, index) => (
            <Link
              key={index}
              to={`${subCardsUrl}/${_subCard.id}`}
              replace={false}
            >
              {_subCard.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CartDetail;
