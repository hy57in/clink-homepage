import { ReactNode } from 'react'
import styled from 'styled-components'

const TitleDiv = styled.div`
  text-align: center;
`

const TitleText = styled.h1`
  font-size: 200px;
  font-family: poppin;
  font-weight: 800;
`

type Props = {
  children: ReactNode
}

function PageHeader({ children }: Props) {
  return (
    <TitleDiv>
      <TitleText>{children}</TitleText>
    </TitleDiv>
  )
}

export default PageHeader
