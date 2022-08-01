import cn from 'classnames';
import { RateBannerProps } from './types';

import './styles.scss';

const mainText = 'Most popular';

export const RateBanner = ({ className }: RateBannerProps) => {
  return <div className={cn('rate-banner', className)}>{mainText}</div>;
};
