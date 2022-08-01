import cn from 'classnames';
import { ButtonProps } from './types';

import './styles.scss';

export const Button = ({ label = '', onClick, className }: ButtonProps) => {
  return (
    <button className={cn('button', className)} onClick={onClick}>
      {label}
    </button>
  );
};
