import { FC } from 'react';
import CardSearch from 'components/CardSearch';

const Comics: FC = () => {
  return <CardSearch title={'Comics'} baseUrl={'/comics'} />;
};

export default Comics;
