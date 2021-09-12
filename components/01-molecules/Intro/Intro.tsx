import { FC } from 'react'

import Typography from '../../00-atoms/Typography'
import LinkButton from '../../00-atoms/LinkButton'
import styles from './Intro.module.css'
import { IntroProps } from './types'

export const Intro: FC<IntroProps> = ({
  title,
  description,
  loginLink,
  loginBtnText
}) => {
  return (
    <section className={styles.intro}>
      <header>
        <Typography variant="h1">{title}</Typography>
      </header>
      <Typography>{description}</Typography>
      <LinkButton href={loginLink}>{loginBtnText}</LinkButton>
    </section>
  )
}
