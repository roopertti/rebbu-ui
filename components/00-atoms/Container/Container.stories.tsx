import { Meta } from '@storybook/react'

import Container from '.'

export default {
  title: 'Atoms/Button',
  component: Container
} as Meta

export const DefaultContainer = () => (
  <Container>
    <div>
      <h1>Container</h1>
      <p>This is example content inside container</p>
    </div>
  </Container>
)
