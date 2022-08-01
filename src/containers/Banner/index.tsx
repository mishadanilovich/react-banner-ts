import { Button } from 'components';

import './styles.scss';

export const Banner = () => {
  return (
    <div className="container">
      <h1 className="header">Your 3-month weight loss plan</h1>
      <p className="description">Walking app to help you reach your goal.</p>
      <Button label="Get my plan" />
    </div>
  );
};
