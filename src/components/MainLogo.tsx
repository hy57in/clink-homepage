import styled from 'styled-components'

const Group1 = styled.div`
  position: absolute;
  width: 2381px;
  height: 121px;
  left: 727px;
  top: 770px;
`

const Text = styled.p`
  position: absolute;
  width: 2336.61px;
  height: 121px;
  left: 747.18px;
  top: 770px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 100px;
  line-height: 150px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
`

const Rect = styled.div`
  position: absolute;
  width: 2381px;
  height: 121px;
  left: 727px;
  top: 770px;

  background: #000000;
`

const Clink = styled.h1`
  position: absolute;
  width: 2675px;
  height: 722px;
  left: calc(50% - 2675px / 2);
  top: calc(50% - 722px / 2 - 2669px);

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 900px;
  line-height: 1350px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

// eslint-disable-next-line no-empty-pattern
function MainLogo({}: Props) {
  return (
    <>
      <Clink>CLINK</Clink>
      <Group1>
        <Rect></Rect>
        <Text>Hello, World. 중앙대학교 블록체인학회 씨링크 입니다.</Text>
      </Group1>
    </>
  )
}

export default MainLogo
