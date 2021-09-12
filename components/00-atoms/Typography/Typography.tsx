import { FC } from 'react'
import clsx from 'clsx'

import styles from './Typography.module.css'

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3'
  className?: string
}

export const Typography: FC<TypographyProps> = ({
  variant,
  children,
  className
}) => {
  switch (variant) {
    case 'h1':
      return <h1 className={clsx(styles.headingOne, className)}>{children}</h1>
    case 'h2':
      return <h2 className={clsx(styles.headingTwo, className)}>{children}</h2>
    case 'h3':
      return (
        <h3 className={clsx(styles.headingThree, className)}>{children}</h3>
      )
    default:
      return <p className={clsx(styles.normalText, className)}>{children}</p>
  }
}
