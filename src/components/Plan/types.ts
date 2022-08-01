export interface BasePlan {
  title: string;
  description: string;
  price: number;
  recurrence?: string;
  isPopular?: boolean;
}

export interface PlanProps {
  data: BasePlan;
}
