import { PriceTicket, RateBanner } from 'components';
import { PlanProps } from './types';

import './styles.scss';

export const Plan = ({ data }: PlanProps) => {
  const { title, description, price, isPopular } = data;

  return (
    <div className="plan">
      <span className="plan__select" />
      <div className="plan-info">
        {isPopular && <RateBanner />}
        <h3 className="plan-info__title">{title}</h3>
        <p className="plan-info__description">{description}</p>
      </div>
      <PriceTicket className="plan__ticket" price={price} />
    </div>
  );
};

export * from './types';
