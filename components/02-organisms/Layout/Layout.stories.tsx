import { Meta } from '@storybook/react'

import Layout from '.'

export default {
  title: 'Organisms/Layout',
  component: Layout
} as Meta

export const ExampleLayout = () => (
  <Layout
    renderHeader={() => (
      <header>
        <a href="#">Example logo</a>
      </header>
    )}
  >
    <div>
      <h1>This is example Layout content</h1>
      <p>Lorem ipsum</p>
    </div>
  </Layout>
)
