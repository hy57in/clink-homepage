import styled from 'styled-components'

const data = [
  {
    name: 'JAMES',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: 'https://yceffort.kr/2020/10/profile.png',
    address: 'https://www.facebook.com/CAUCLink',
  },
  {
    name: 'MICHAEL',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: './person1.png',
    address: 'https://www.naver.com',
  },
  {
    name: 'LILLY',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: 'https://yceffort.kr/2020/10/profile.png',
    address: 'https://www.naver.com',
  },
  {
    name: 'JESSICA',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: './person1.png',
    address: 'https://www.naver.com',
  },
  {
    name: 'PETER',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: './person1.png',
    address: 'https://www.naver.com',
  },
  {
    name: 'JENNY',
    info1: 'Leader',
    info2: 'Research',
    info3: 'Education',
    image: './person1.png',
    address: 'https://www.naver.com',
  },
]

const BigContainer = styled.div`
  align-items: center;
  max-width: 900px;
  margin-top: 3rem;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`

const More = styled.a`
  color: black;
  &:hover {
    color: #0070f3;
  }
`

const GridContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 900px;
  margin-top: 1rem;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`

const PersonalBox = styled.div`
  width: 300px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 3rem;

  &:hover {
    background-color: #f7f7f7;
  }
`

const ImageBox = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 70%;
  overflow: hidden;
  background-color: lightblue;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const BlockName = styled.h3`
  text-decoration: underline;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`

const BlockInfo = styled.h5`
  font-weight: bold;
  margin-top: 0.1px;
  margin-bottom: 0.1px;
`

function People() {
  return (
    <BigContainer>
      <h6 style={{ textAlign: 'right' }}>
        <More href="/team">MORE &rarr;</More>
      </h6>
      <GridContainer>
        {data.map((person) => (
          <a href={person.address} target="_blank">
            <PersonalBox>
              <ImageBox>
                <Image src={person.image} />
              </ImageBox>
              <BlockName>{person.name}</BlockName>
              <BlockInfo>{person.info1}</BlockInfo>
              <BlockInfo>{person.info2}</BlockInfo>
              <BlockInfo>{person.info3}</BlockInfo>
            </PersonalBox>
          </a>
        ))}
        )
      </GridContainer>
    </BigContainer>
  )
}

export default People
