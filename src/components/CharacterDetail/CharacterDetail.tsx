import { FC } from 'react';
import CartDetail from 'components/CartDetail';

const CharacterDetail: FC = () => {
  return (
    <CartDetail
      baseUrl={'/characters'}
      subCardsTitle={'Comics'}
      subCardsUrl={'/comics'}
    />
  );
};

export default CharacterDetail;
