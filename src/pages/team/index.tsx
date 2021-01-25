import PageLayout from 'src/components/layouts/PageLayout'
import PageTitle from 'src/components/layouts/PageTitle'
import styled from 'styled-components'

const data = [
  {
    id: 0,
    name: 'JAMES',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: 'https://yceffort.kr/2020/10/profile.png',
    address: 'https://www.facebook.com/CAUCLink',
    github: '',
    facebook: '',
    notion: '',
  },
  {
    id: 1,
    name: 'MICHAEL',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: './person1.png',
    address: 'https://www.naver.com',
    github: '',
    facebook: '',
    notion: '',
  },
  {
    id: 2,
    name: 'LILLY',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: 'https://yceffort.kr/2020/10/profile.png',
    address: 'https://www.naver.com',
    github: '',
    facebook: '',
    notion: '',
  },
  {
    id: 3,
    name: 'JESSICA',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: './person1.png',
    address: 'https://www.naver.com',
    github: '',
    facebook: '',
    notion: '',
  },
  {
    id: 4,
    name: 'PETER',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: './person1.png',
    address: 'https://www.naver.com',
    github: '',
    facebook: '',
    notion: '',
  },
  {
    id: 5,
    name: 'JENNY',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: './person1.png',
    address: 'https://www.naver.com',
    github: '',
    facebook: '',
    notion: '',
  },
]

const BigContainer = styled.div`
  margin: 0px auto;
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  align-items: center;
  max-width: 1400px;
  margin-top: 3rem;
  @media (max-width: 700px) {
    width: 100%;
    flex-direction: column;
  }
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 700px;
  margin-bottom: 20px;
`

const SuperContainer = styled.div`
  width: 250px;
  height: 280px;
  text-align: center;
  background-color: lightgreen;
`
const ImageContainer = styled.div`
  margin: 0px auto;
  width: 200px;
  height: 200px;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const NameContainer = styled.div`
  width: 100%;
  height: 40px;
`

const Name = styled.h3`
  text-decoration: underline;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 5px;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  height: 280px;
  background-color: cyan;
  margin: 0 50px;
`

const LinkContainer = styled.div`
  width: 100%;
  height: 30px;
`

function TeamPage() {
  return (
    <PageTitle title="C-Link Team">
      <PageLayout>
        <div>Team page</div>
        <BigContainer>
          {data.map((person) => (
            <CardContainer>
              <SuperContainer>
                <NameContainer />
                <ImageContainer>
                  <Image src={person.image} />
                </ImageContainer>
                <NameContainer>
                  <Name>{person.name}</Name>
                </NameContainer>
              </SuperContainer>
              <InfoContainer>
                <LinkContainer></LinkContainer>
              </InfoContainer>
            </CardContainer>
          ))}
        </BigContainer>
      </PageLayout>
    </PageTitle>
  )
}

export default TeamPage
