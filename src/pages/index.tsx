import { Button, message } from 'antd'
import Link from 'next/link'

import PageHead from 'src/components/PageHead'
import styled from 'styled-components'

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
    <div className="container">
      <PageHead title="C-Link">
        <main>
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
              <a href="/about" className="card">
                <h3>About &rarr;</h3>
                <p>C-Link를 소개하는 페이지</p>
              </a>
            </Link>

            <Link href="/contact">
              <a href="/contact" className="card">
                <h3>Contact &rarr;</h3>
                <p>C-Link 연락처가 있는 페이지</p>
              </a>
            </Link>

            <Link href="/posts">
              <a href="/posts" className="card">
                <h3>Posts &rarr;</h3>
                <p>C-Link 학회원들이 작성한 글의 링크가 있는 페이지</p>
              </a>
            </Link>

            <Link href="/projects">
              <a href="projects" className="card">
                <h3>Projects &rarr;</h3>
                <p>C-Link에서 진행했던, 진행 중인, 진행할 프로젝트를 소개하는 페이지</p>
              </a>
            </Link>
          </GridContainer>
        </main>
      </PageHead>

      <footer>
        <a href="https://www.facebook.com/CAUCLink/" target="_blank" rel="noopener noreferrer">
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>
        {`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          footer img {
            margin-left: 0.5rem;
          }

          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
              Bitstream Vera Sans Mono, Courier New, monospace;
          }

          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          .logo {
            height: 1em;
          }
        `}
      </style>
    </div>
  )
}

export default HomePage
