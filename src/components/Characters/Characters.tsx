import { FC } from 'react';
import CardSearch from 'components/CardSearch';

const Characters: FC = () => {
  return <CardSearch title={'Characters'} baseUrl={'/characters'} />;
};

export default Characters;
