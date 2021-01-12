import styled from 'styled-components'

const Title = styled.h6`
  margin: 0.7rem 0;
  line-height: 1.15;
  font-weight: bold;
  text-decoration: underline;
  font-size: 1rem;
`
const Paragraph = styled.p`
  margin: 0;
  font-size: 0.5rem;
`
const Content = styled.div`
  margin-bottom: 1rem;
`

const Frame = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 0.01%,
      rgba(255, 255, 255, 0.09) 100%
    ),
    linear-gradient(90deg, #fd4444 0%, #6a3bf0 100%);
`

const Image = styled.img`
  width: 12rem;
  height: 12rem;
`

type Props = {
  project: { name: string; content: string[]; image: string }
}

function ProjectBox({ project }: Props) {
  return (
    <div>
      <Frame>
        <Image src={project.image} alt={project.name} />
      </Frame>
      <Title>{project.name}</Title>
      <Content>
        {project.content.map((content, index) => (
          <Paragraph key={index}>{content}</Paragraph>
        ))}
      </Content>
    </div>
  )
}

export default ProjectBox
