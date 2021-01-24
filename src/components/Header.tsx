import CLinkLogo from './atoms/CLinkLogo'
import Navigation from './Navigation'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

// eslint-disable-next-line no-empty-pattern
function Header({}: Props) {
  return (
    <header style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', left: '10px', margin: '10px', zIndex: 1 }}>
        <CLinkLogo />
      </div>
      <Navigation />
    </header>
  )
}

export default Header
