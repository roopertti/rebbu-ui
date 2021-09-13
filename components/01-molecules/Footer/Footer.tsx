import { FC } from 'react'

import Typography from '../../00-atoms/Typography'
import styles from './Footer.module.css'

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Typography>Made by Robert Kuhlmann</Typography>
    </footer>
  )
}
