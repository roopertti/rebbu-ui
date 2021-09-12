import { FC } from 'react'

import Logo from '../../00-atoms/Logo'
import Intro, { IntroProps } from '../../01-molecules/Intro'
import styles from './HomeTemplate.module.css'

interface HomeTemplateProps {
  introProps: IntroProps
}

export const HomeTemplate: FC<HomeTemplateProps> = ({ introProps }) => {
  return (
    <section>
      <header className={styles.logoHeader}>
        <Logo />
      </header>
      <Intro {...introProps} />
    </section>
  )
}
