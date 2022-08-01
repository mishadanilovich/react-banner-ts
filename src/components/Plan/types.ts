export interface BasePlan {
  id: string;
  title: string;
  description: string;
  price: number;
  recurrence?: string;
  isPopular?: boolean;
  isShowStar?: boolean;
}

export interface PlanProps {
  data: BasePlan;
  onClick?: (planId: string) => void;
  isSelected?: boolean;
}
