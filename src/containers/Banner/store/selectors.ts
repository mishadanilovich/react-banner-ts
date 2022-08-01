import { createSelector } from 'reselect';
import { RootState } from 'store';

const bannerRootSelector = (state: RootState) => state['plan'];

const selectPlan = createSelector(bannerRootSelector, (state) => state.data);

export const bannerSelector = {
  selectPlan,
};
