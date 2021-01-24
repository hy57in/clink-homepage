import CLinkLogo from './atoms/CLinkLogo'
import Navigation from './Navigation'
import MainLogo from './MainLogo'
import styled from 'styled-components'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

// eslint-disable-next-line no-empty-pattern
function Header({}: Props) {
  return (
    <header style={{ position: 'relative', width: 3623, height: 7000, background: 'white' }}>
      <CLinkLogo />
      <Navigation />
      <div style={{ position: 'absolute', width: 2675, height: 722, left: 474, top: 470 }}>
        <MainLogo />
      </div>
    </header>
  )
}

export default Header
