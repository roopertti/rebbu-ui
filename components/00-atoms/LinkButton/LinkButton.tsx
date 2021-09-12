import { FC, AnchorHTMLAttributes } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import styles from './LinkButton.module.css'

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const LinkButton: FC<LinkProps> = ({
  href,
  className,
  children,
  ...anchorProps
}) => {
  return (
    <Link href={href || '/'}>
      <a className={clsx(styles.linkButton, className)} {...anchorProps}>
        {children}
      </a>
    </Link>
  )
}
