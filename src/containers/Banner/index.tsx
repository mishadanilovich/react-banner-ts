import { Button } from 'components';
import { PlanList } from 'containers';
import { useAppSelector } from 'store';
import { bannerSelector } from './store/selectors';
import {
  BANNER_BUTTON_LABEL,
  BANNER_DESCRIPTION,
  BANNER_TITLE,
  PLAN_LIST_TITLE,
} from './constants';

import './styles.scss';

export const Banner = () => {
  const planData = useAppSelector(bannerSelector.selectPlan);

  const handleButtonClick = () => {
    if (!planData) return;

    alert(
      `You select "${planData.title}" plan. It costs ${planData.description}`
    );
  };

  return (
    <div className="banner">
      <h1 className="banner__title">{BANNER_TITLE}</h1>
      <p className="banner__description">{BANNER_DESCRIPTION}</p>
      <PlanList title={PLAN_LIST_TITLE} />
      <Button label={BANNER_BUTTON_LABEL} onClick={handleButtonClick} />
    </div>
  );
};
