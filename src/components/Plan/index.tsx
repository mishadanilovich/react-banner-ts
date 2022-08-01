import cn from 'classnames';
import { PriceTicket, RateBanner } from 'components';
import { PlanProps } from './types';

import './styles.scss';

export const Plan = ({ data, onClick, isSelected }: PlanProps) => {
  const { title, description, price, isPopular, id } = data;

  return (
    <div
      className={cn('plan', { selected: isSelected })}
      onClick={() => onClick?.(id)}
    >
      <span className="plan__select" />
      <div className="plan-info">
        {isPopular && (
          <RateBanner className={cn({ 'rate-banner--selected': isSelected })} />
        )}
        <h3 className="plan-info__title">{title}</h3>
        <p className="plan-info__description">{description}</p>
      </div>
      <PriceTicket className="plan__ticket" price={price} />
    </div>
  );
};

export * from './types';
