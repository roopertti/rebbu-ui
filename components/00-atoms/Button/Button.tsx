import { ButtonHTMLAttributes, FC } from 'react'
import clsx from 'clsx'

import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'lg' | 'md' | 'sm'
}

export const Button: FC<ButtonProps> = ({
  children,
  variant,
  className,
  ...buttonProps
}) => {
  const buttonClasses = {
    [styles.buttonLg]: variant === 'lg',
    [styles.buttonMd]: variant === 'md',
    [styles.buttonSm]: variant === 'sm'
  }

  return (
    <button
      {...buttonProps}
      className={clsx(styles.button, buttonClasses, className)}
    >
      {children}
    </button>
  )
}
