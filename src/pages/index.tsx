import { Button, message } from 'antd'
import Link from 'next/link'
import PageLayout from 'src/components/layouts/PageLayout'

import PageTitle from 'src/components/layouts/PageTitle'
import styled from 'styled-components'

import People from 'src/components/people'

const Title = styled.h1`
  text-align: center;
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
`

const StyledA = styled.a`
  color: #0070f3;
  text-decoration: none;

  :hover,
  :focus,
  :active {
    text-decoration: underline;
  }
`

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`

const GridContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  max-width: 800px;
  margin-top: 3rem;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`

function handleClickTestButton() {
  return message.info('With Ant-Design')
}

function HomePage() {
  return (
    <PageTitle title="C-Link">
      <PageLayout>
        <Title>
          Welcome to <StyledA href="https://www.facebook.com/CAUCLink/">C-Link!</StyledA>
        </Title>

        <Description>
          Get started by editing <code>src/pages/index.tsx</code>
        </Description>

        <Button onClick={handleClickTestButton} type="primary">
          Test Button
        </Button>

        <GridContainer>
          <Link href="/about">
            <a href="/about">
              <h3>About &rarr;</h3>
              <p>C-Link를 소개하는 페이지</p>
            </a>
          </Link>

          <Link href="/contact">
            <a href="/contact">
              <h3>Contact &rarr;</h3>
              <p>C-Link 연락처가 있는 페이지</p>
            </a>
          </Link>

          <Link href="/posts">
            <a href="/posts">
              <h3>Posts &rarr;</h3>
              <p>C-Link 학회원들이 작성한 글의 링크가 있는 페이지</p>
            </a>
          </Link>

          <Link href="/projects">
            <a href="projects">
              <h3>Projects &rarr;</h3>
              <p>C-Link에서 진행했던, 진행 중인, 진행할 프로젝트를 소개하는 페이지</p>
            </a>
          </Link>
        </GridContainer>
        <People />
      </PageLayout>
    </PageTitle>
  )
}

export default HomePage
