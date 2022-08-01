import { useMemo, useState } from 'react';
import { Plan } from 'components';
import { PlanListProps } from './types';
import { planListConfiguration } from './constants';

import './styles.scss';

export const PlanList = ({ title }: PlanListProps) => {
  const popularPlanId = useMemo(
    () => planListConfiguration.find((item) => item.isPopular)?.id ?? '',
    []
  );
  const [selectedPlan, setSelectedPlan] = useState(popularPlanId);

  const handlePlanClick = (planId: string) => {
    console.log(planId);
    setSelectedPlan(planId);
  };

  return (
    <div className="plan-list">
      {title && <h2>{title}</h2>}
      {planListConfiguration.map((plan) => {
        const isSelected = selectedPlan === plan.id;

        return (
          <Plan
            key={plan.id}
            data={plan}
            onClick={handlePlanClick}
            isSelected={isSelected}
          />
        );
      })}
    </div>
  );
};
