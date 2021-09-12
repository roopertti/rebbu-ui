import { FC } from 'react'
import Link from 'next/link'

import styles from './Logo.module.css'

export const Logo: FC = () => {
  return (
    <Link href="/">
      <a className={styles.logo}>rebbu</a>
    </Link>
  )
}
