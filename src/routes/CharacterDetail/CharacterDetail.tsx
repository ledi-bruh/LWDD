import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from 'api';
import CartDetail from 'components/CartDetail';
import { Card } from 'types';
import { Comic } from 'api/types';

const CharacterDetail: FC = () => {
  const { id } = useParams() as { id: string };
  const [card, setCard] = useState({} as Card);
  const [subCards, setSubCards] = useState([] as Card[]);

  useEffect(() => {
    const fetchData = async () => {
      const character = await api.characters.getById(id);
      const comics = await api.characters.getComics(id);
      setCard({
        id: character.id.toString(),
        image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        title: character.name,
        description: character.description
      });
      setSubCards(
        comics.results.map((comic: Comic) => {
          return {
            id: comic.id.toString(),
            image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
            title: comic.title,
            description: comic.description
          };
        })
      );
    };

    fetchData();
  }, [id]);

  return (
    <CartDetail
      card={card}
      subCardsTitle={'Comics'}
      subCards={subCards}
      subCardsUrl={'/comics'}
    />
  );
};

export default CharacterDetail;
