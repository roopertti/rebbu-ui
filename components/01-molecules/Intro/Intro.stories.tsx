import { Meta } from '@storybook/react'

import Intro from '.'

export default {
  title: 'Molecules/Intro',
  component: Intro
} as Meta

export const ExampleIntro = () => (
  <Intro
    title="This is a test intro"
    description="Welcome to the page!"
    loginBtnText="Log in!"
    loginLink="/"
  />
)
