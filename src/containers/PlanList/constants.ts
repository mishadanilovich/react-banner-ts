import { BasePlan } from 'components/Plan';

export const planListConfiguration: BasePlan[] = [
  {
    id: '1',
    title: '1-month plan',
    description: '$49.99 monthly',
    price: 1.28,
  },
  {
    id: '2',
    title: '3-month plan',
    description: '$69.99 quaterly',
    price: 0.83,
    isPopular: true,
  },
  {
    id: '3',
    title: 'Life time',
    description: '$99.99 one time fee',
    price: 0.55,
    isShowStar: true,
  },
];
