import cn from 'classnames';
import { RateBannerProps } from './types';

import './styles.scss';

const RATE_TEXT = 'Most popular';

export const RateBanner = ({ className }: RateBannerProps) => {
  return <div className={cn('rate-banner', className)}>{RATE_TEXT}</div>;
};
