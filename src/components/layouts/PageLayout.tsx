import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  left: ReactNode
  right: ReactNode
  top: ReactNode
  bottom: ReactNode
}

function PageLayout({ children, left, right, top, bottom }: Props) {
  return (
    <>
      <div>{top}</div>
      <div>
        <span>{left}</span>
        <span>{right}</span>
      </div>
      <div>{bottom}</div>
      {children}
    </>
  )
}

export default PageLayout
