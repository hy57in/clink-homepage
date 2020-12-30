import { ReactNode } from 'react'
import Header from '../Header'

type Props = {
  children: ReactNode
}

function PageLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default PageLayout
