import { FC } from 'react'

import Container from '../../00-atoms/Container'
import Footer from '../../01-molecules/Footer'
import styles from './Layout.module.css'

interface LayoutProps {
  renderHeader?: () => JSX.Element
}

export const Layout: FC<LayoutProps> = ({ children, renderHeader }) => {
  return (
    <div className={styles.layout}>
      {renderHeader && renderHeader()}
      <Container>{children}</Container>
      <Footer />
    </div>
  )
}
