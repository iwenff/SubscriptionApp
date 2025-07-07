import React, { memo } from 'react';
import styles from './button.module.scss';
import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const ButtonComp = ({ children, onClick, className, disabled, style }: ButtonProps) => {
  return (
    <button className={clsx(styles.button, className)} onClick={onClick} disabled={disabled} style={style}>
      {children}
    </button>
  );
};

export const Button = memo(ButtonComp);
