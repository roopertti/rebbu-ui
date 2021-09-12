import { Meta } from '@storybook/react'

import Button from '.'

export default {
  title: 'Atoms/Button',
  component: Button
} as Meta

export const LargeButton = () => <Button variant="lg">Large Button</Button>
export const MediumButton = () => <Button variant="md">Medium Button</Button>
export const SmallButton = () => <Button variant="sm">Small Button</Button>
