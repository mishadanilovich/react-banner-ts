import { Button } from 'components';
import { PlanList } from 'containers';

import './styles.scss';

export const Banner = () => {
  return (
    <div className="banner">
      <h1 className="banner__title">Your 3-month weight loss plan</h1>
      <p className="banner__description">
        Walking app to help you reach your goal.
      </p>
      <PlanList title="Choose your plan" />
      <Button label="Get my plan" />
    </div>
  );
};
