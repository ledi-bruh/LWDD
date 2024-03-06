import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import classes from './CharacterDetail.module.css';
import { Card } from '../../types';
import { charactersMock, comicsMock } from 'components/mock';

const CharacterDetail: FC = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({} as Card);
  const [comics, setComics] = useState([] as Card[]);

  useEffect(() => {
    const dataCharacter: Card = charactersMock[id as string];
    const dataComics: Card[] = Object.keys(comicsMock).map(
      (key) => comicsMock[key]
    );
    setCharacter(dataCharacter);
    setComics(dataComics);
  }, [id]);

  return (
    <section className={classes.characterDetailSection}>
      <div className={classes.characterPreviewContainer}>
        <img src={character.image} alt="characterImage"></img>
      </div>
      <div className={classes.characterContent}>
        <div className={classes.characterInfo}>
          <h2>{character.title}</h2>
          <p>{character.description}</p>
        </div>
        <div className={classes.characterComics}>
          <h3>Comics</h3>
          {comics.map((_comics, index) => (
            <Link key={index} to={`/comics/${_comics.id}`} replace={true}>
              {_comics.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharacterDetail;
