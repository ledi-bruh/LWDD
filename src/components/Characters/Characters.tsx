import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import classes from './Characters.module.css';
import { Card } from '../../types';

const Characters: FC = () => {
  const navigate = useNavigate();
  const characters: Card[] = Array.from({ length: 10 }, (_, i) => {
    return {
      id: `${i + 1}`,
      image: '/src/assets/clean.jpg',
      title: 'The Noname',
      description: 'No description provided'
    };
  });

  const handleCharacterCardClick = (card: Card) => {
    return navigate(`${card.id}`, {
      replace: true,
      state: { card: card }
    });
  };

  return (
    <section className={classes.charactersSection}>
      <div className={clsx(classes.row, classes.sectionHeader)}>
        <h2>Characters</h2>
        <p>(1562)</p>
      </div>
      <div className={clsx(classes.row, classes.searchContainer)}>
        <input placeholder={'Search for Characters by Name'}></input>
        <button>SEARCH</button>
      </div>
      <hr />
      <div className={classes.cardsContainer}>
        {characters.map((_character, index) => (
          <div
            key={index}
            className={classes.card}
            onClick={() => handleCharacterCardClick(_character)}
          >
            <div className={classes.cardImageContainer}>
              <img src={_character.image} alt="characterImage"></img>
            </div>
            <div className={classes.cardInfo}>
              <h3>{_character.title}</h3>
              <p>{_character.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Characters;
