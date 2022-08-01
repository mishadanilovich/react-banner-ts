import cn from 'classnames';
import { PriceTicketProps } from './types';

import './styles.scss';

const RECURRENCE_TEXT = 'per day';

export const PriceTicket = ({ className, price }: PriceTicketProps) => {
  const formatPrice = price.toString().split('.');

  return (
    <span className={cn('price-ticket', className)}>
      <div className="price-ticket__amount">
        $<span className="price-ticket__amount-primary">{formatPrice[0]}</span>
        <div>
          <p>{formatPrice[1] || ''}</p>
          <p className="recurrence">{RECURRENCE_TEXT}</p>
        </div>
      </div>
    </span>
  );
};
