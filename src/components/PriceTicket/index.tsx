import cn from 'classnames';
import { PriceTicketProps } from './types';

import './styles.scss';

export const PriceTicket = ({ className, price }: PriceTicketProps) => {
  const formatPrice = price.toString().split('.');

  return (
    <span className={cn('price-ticket', className)}>
      <div className="price-ticket__amount">
        $<span className="price-ticket__amount-primary">{formatPrice[0]}</span>
        <div>
          <p>{formatPrice[1] || ''}</p>
          <p className="recurrence">per day</p>
        </div>
      </div>
    </span>
  );
};
