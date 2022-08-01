import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlanData } from './types';

export interface BannerStore {
  data?: PlanData;
}

const initialState: BannerStore = {};

export const bannerSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    setSelectedPlanData: (
      state: BannerStore,
      { payload }: PayloadAction<PlanData>
    ) => {
      state.data = payload;
    },
  },
});

export const { setSelectedPlanData } = bannerSlice.actions;

export default bannerSlice.reducer;
