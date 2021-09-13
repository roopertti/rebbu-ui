import { FC } from 'react'

import Typography from '../../00-atoms/Typography'
import styles from './Intro.module.css'
import { IntroProps } from './types'
import LoginButton from '../../01-molecules/LoginButton'

export const Intro: FC<IntroProps> = ({ title, description }) => {
  const onSuccess = (response: any) => {
    console.log(response)
  }

  const onFailure = (response: any) => {
    console.log(response)
  }

  return (
    <section className={styles.intro}>
      <header>
        <Typography variant="h1">{title}</Typography>
      </header>
      <Typography>{description}</Typography>
      <LoginButton />
    </section>
  )
}
