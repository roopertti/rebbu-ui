import { Meta } from '@storybook/react'

import Typography from '.'

export default {
  title: 'Atoms/Typography',
  component: Typography
} as Meta

export const HeadingOne = () => <Typography variant="h1">Heading 1</Typography>
export const HeadingTwo = () => <Typography variant="h2">Heading 2</Typography>
export const HeadingThree = () => (
  <Typography variant="h3">Heading 3</Typography>
)
export const NormalText = () => <Typography>Normal text</Typography>
