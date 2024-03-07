import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import classes from './CartDetail.module.css';
import { Card } from '../../types';
import { charactersMock, comicsMock } from 'components/mock';

interface ICartDetailProps {
  baseUrl: string;
  subCardsTitle: string;
  subCardsUrl: string;
}

const CartDetail: FC<ICartDetailProps> = ({
  baseUrl,
  subCardsTitle,
  subCardsUrl
}) => {
  const { id } = useParams();
  const [card, setCard] = useState({} as Card);
  const [subCards, setSubCards] = useState([] as Card[]);

  useEffect(() => {
    let dataCard: Card;
    let dataSubCards: Card[] = [];

    if (baseUrl === '/characters' && subCardsUrl === '/comics') {
      dataCard = charactersMock[id as string];
      dataSubCards = Object.keys(comicsMock).map((key) => comicsMock[key]);
      setCard(dataCard);
    } else if (baseUrl === '/comics' && subCardsUrl === '/characters') {
      dataCard = comicsMock[id as string];
      dataSubCards = Object.keys(charactersMock).map(
        (key) => charactersMock[key]
      );
      setCard(dataCard);
    }
    setSubCards(dataSubCards);
  }, [id]);

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
              replace={true}
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
