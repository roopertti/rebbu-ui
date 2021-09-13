import { FC } from 'react'

import styles from './Container.module.css'

export const Container: FC = ({ children }) => {
  return <main className={styles.container}>{children}</main>
}
