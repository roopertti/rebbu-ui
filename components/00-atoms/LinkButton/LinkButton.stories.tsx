import { Meta } from '@storybook/react'
import LinkButton from '.'

export default {
  title: 'Atoms/LinkButton',
  component: LinkButton
} as Meta

export const SimpleLinkButton = () => (
  <LinkButton href="/">Link button</LinkButton>
)
