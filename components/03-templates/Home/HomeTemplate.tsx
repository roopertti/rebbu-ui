import { FC } from 'react'

import Logo from '../../00-atoms/Logo'
import Intro, { IntroProps } from '../../02-organisms/Intro'
import styles from './HomeTemplate.module.css'
import Layout from '../../02-organisms/Layout'

interface HomeTemplateProps {
  introProps: IntroProps
}

export const HomeTemplate: FC<HomeTemplateProps> = ({ introProps }) => {
  return (
    <Layout
      renderHeader={() => (
        <header className={styles.logoHeader}>
          <Logo />
        </header>
      )}
    >
      <section>
        <Intro {...introProps} />
      </section>
    </Layout>
  )
}
