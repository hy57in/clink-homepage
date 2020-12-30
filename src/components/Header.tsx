import CLinkLogo from './atoms/CLinkLogo'
import Navigation from './Navigation'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

// eslint-disable-next-line no-empty-pattern
function Header({}: Props) {
  return (
    <header>
      <CLinkLogo />
      <Navigation />
    </header>
  )
}

export default Header
