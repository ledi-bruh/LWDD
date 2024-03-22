import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from 'api';
import CartDetail from 'components/CartDetail';
import { Card } from 'types';
import { Character } from 'api/types';

const ComicsDetail: FC = () => {
  const { id } = useParams() as { id: string };
  const [card, setCard] = useState({} as Card);
  const [subCards, setSubCards] = useState([] as Card[]);

  useEffect(() => {
    const fetchData = async () => {
      const comic = await api.comics.getById(id);
      const characters = await api.comics.getCharacters(id);
      setCard({
        id: comic.id.toString(),
        image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
        title: comic.title,
        description: comic.description
      });
      setSubCards(
        characters.results.map((character: Character) => {
          return {
            id: character.id.toString(),
            image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
            title: character.name,
            description: character.description
          };
        })
      );
    };

    fetchData();
  }, [id]);

  return (
    <CartDetail
      card={card}
      subCardsTitle={'Characters'}
      subCards={subCards}
      subCardsUrl={'/characters'}
    />
  );
};

export default ComicsDetail;
