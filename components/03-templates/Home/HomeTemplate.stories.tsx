import { Meta } from '@storybook/react'

import HomeTemplate from '.'
import { IntroProps } from '../../01-molecules/Intro'

export default {
  title: 'Templates/HomeTemplate',
  component: HomeTemplate
} as Meta

const introProps: IntroProps = {
  title: 'Example title',
  description: 'Example description text.',
  loginBtnText: 'Log in!',
  loginLink: '/'
}

export const ExampleHomePage = () => <HomeTemplate introProps={introProps} />
