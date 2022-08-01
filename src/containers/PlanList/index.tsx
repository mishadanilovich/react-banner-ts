import { Plan } from 'components';
import { PlanListProps } from './types';

import './styles.scss';
import { planListConfiguration } from './constants';

export const PlanList = ({ title }: PlanListProps) => {
  return (
    <div className="plan-list">
      {title && <h2>{title}</h2>}
      {planListConfiguration.map((plan, i) => (
        <Plan key={i} data={plan} />
      ))}
    </div>
  );
};
