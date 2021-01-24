import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

// eslint-disable-next-line no-empty-pattern
function CLinkLogo({}: Props) {
  return (
    <div style={{ position: 'absolute', width: 161, height: 79, left: 84, top: 63 }}>
      <Link href="/">
        <a href="/">
          <img src="/clink-logo.png" alt="C-Link Logo" width="100" />
        </a>
      </Link>
    </div>
  )
}

export default CLinkLogo
