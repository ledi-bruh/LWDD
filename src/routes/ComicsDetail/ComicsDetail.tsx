import { FC } from 'react';
import CartDetail from 'components/CartDetail';

const ComicsDetail: FC = () => {
  return (
    <CartDetail
      baseUrl={'/comics'}
      subCardsTitle={'Characters'}
      subCardsUrl={'/characters'}
    />
  );
};

export default ComicsDetail;
