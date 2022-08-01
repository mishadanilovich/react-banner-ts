import { useEffect, useMemo, useState } from 'react';
import { Plan } from 'components';
import { useAppDispatch } from 'store';
import { PlanListProps } from './types';
import { planListConfiguration } from './constants';
import { setSelectedPlanData } from 'containers/Banner/store/slice';

import './styles.scss';

export const PlanList = ({ title }: PlanListProps) => {
  const dispatch = useAppDispatch();
  const popularPlan = useMemo(
    () => planListConfiguration.find((item) => item.isPopular),
    []
  );
  const [selectedPlan, setSelectedPlan] = useState(popularPlan?.id ?? '');

  useEffect(() => {
    if (popularPlan) {
      const { description, title } = popularPlan;
      dispatch(setSelectedPlanData({ description, title }));
    }
  }, []);

  const handlePlanClick = (planId: string) => {
    const planData = planListConfiguration.find(
      (item) => item.id === selectedPlan
    );

    if (!planData) return;

    const { description, title } = planData;
    dispatch(setSelectedPlanData({ description, title }));
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
