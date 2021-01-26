import PageLayout from 'src/components/layouts/PageLayout'
import PageTitle from 'src/components/layouts/PageTitle'
import styled from 'styled-components'
import Link from 'next/link'

const data = [
  {
    id: 0,
    name: 'JAMES',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: './person2.png',
    address: {
      github: 'https://github.com/CAU-CLINK',
      facebook: 'https://www.facebook.com/CAUCLink',
      instagram: 'https://www.instagram.com',
    },
  },
  {
    id: 1,
    name: 'MICHAEL',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: './person1.png',
    address: {
      github: 'https://github.com/CAU-CLINK',
      facebook: 'https://www.facebook.com/CAUCLink',
      instagram: '',
    },
  },
  {
    id: 2,
    name: 'LILLY',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: './person2.png',
    address: {
      github: '',
      facebook: 'https://www.facebook.com/CAUCLink',
      instagram: 'https://www.instagram.com',
    },
  },
  {
    id: 3,
    name: 'JESSICA',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: './person1.png',
    address: {
      github: 'https://github.com/CAU-CLINK',
      facebook: '',
      instagram: 'https://www.instagram.com',
    },
  },
  {
    id: 4,
    name: 'PETER',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: './person2.png',
    address: {
      github: 'https://github.com/CAU-CLINK',
      facebook: '',
      instagram: '',
    },
  },
  {
    id: 5,
    name: 'JENNY',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: './person1.png',
    address: {
      github: '',
      facebook: 'https://www.facebook.com/CAUCLink',
      instagram: '',
    },
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
  background-color: rgba(80, 33, 40, 0.17);
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
  /* background-color: rgba(148, 154, 159, 0.28); */
  margin: 0 50px;
`

const FlatformContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 25px;
`
const IconContainer = styled.img`
  margin-right: 10px;
  width: 25px;
  height: 25px;
`

const StyledA = styled.a`
  cursor: pointer;
`

function TeamPage() {
  return (
    <PageTitle title="C-Link Team">
      <PageLayout>
        <div>Team page</div>
        <BigContainer>
          {data.map((person) => (
            <CardContainer key={person.id}>
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
                <FlatformContainer>
                  {Object.entries(person.address)
                    .filter((item) => item[1] !== '')
                    .map((item) => item[0])
                    .map((flatform) =>
                      flatform === 'facebook' ? (
                        <Link href={person.address.facebook} key={person.address.facebook}>
                          <StyledA href={person.address.facebook} target="_blank">
                            <IconContainer src="./Facebook.png" />
                          </StyledA>
                        </Link>
                      ) : flatform === 'github' ? (
                        <Link href={person.address.github} key={person.address.github}>
                          <StyledA href={person.address.github} target="_blank">
                            <IconContainer src="./Github.png" />
                          </StyledA>
                        </Link>
                      ) : (
                        <Link href={person.address.instagram} key={person.address.instagram}>
                          <StyledA href={person.address.instagram} target="_blank">
                            <IconContainer src="./Instagram.png" />
                          </StyledA>
                        </Link>
                      )
                    )}
                </FlatformContainer>
              </InfoContainer>
            </CardContainer>
          ))}
        </BigContainer>
      </PageLayout>
    </PageTitle>
  )
}

export default TeamPage
