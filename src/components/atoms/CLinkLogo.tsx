import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

// eslint-disable-next-line no-empty-pattern
function CLinkLogo({}: Props) {
  return (
    <Link href="/">
      <a href="/">
        <img src="/clink-logo.png" alt="C-Link Logo" width="80" />
      </a>
    </Link>
  )
}

export default CLinkLogo
