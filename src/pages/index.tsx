import GradientBorder from 'src/components/atoms/GradientBorder'
import ImageBox from 'src/components/atoms/ImageBox'
import PageLayout from 'src/components/layouts/PageLayout'

import PageTitle from 'src/components/layouts/PageTitle'
import styled from 'styled-components'

const Title = styled.h2`
  margin: 2rem 0;
`

const ExampleParagraph = (
  <p>
    <div>"Lorem ipsum dolor sit amet,</div>
    <div>
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua.
    </div>
    <div>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </div>
    <div>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur.
    </div>
    <div>Excepteur sint occaecat cupidatat non proident,</div>
    <div>sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
  </p>
)

function HomePage() {
  return (
    <PageTitle title="중앙대학교 블록체인 학회 C-Link">
      <PageLayout>
        <ImageBox>
          <GradientBorder borderSize="1rem">
            <img
              src="https://media.vlpt.us/images/gwak2837/profile/fe9e991c-0c0c-44b2-8027-af0c6e29f4ba/filename2.jpg?w=120"
              alt="imaeg"
            />
          </GradientBorder>
          <Title>[2ND WORKSHOP, 2019]</Title>
          {ExampleParagraph}
        </ImageBox>
        <ImageBox rightImage>
          <GradientBorder borderSize="1rem">
            <img
              src="https://media.vlpt.us/images/gwak2837/profile/fe9e991c-0c0c-44b2-8027-af0c6e29f4ba/filename2.jpg?w=120"
              alt="imaeg"
            />
          </GradientBorder>
          <Title>[2ND WORKSHOP, 2019]</Title>
          {ExampleParagraph}
        </ImageBox>
      </PageLayout>
    </PageTitle>
  )
}

export default HomePage
