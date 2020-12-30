import Image from 'next/image'
import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

// eslint-disable-next-line no-empty-pattern
function CLinkLogo({}: Props) {
  return (
    <Link href="/">
      <a href="/">
        <Image src="/clink-logo.png" width={1} height={1} />
      </a>
    </Link>
  )
}

export default CLinkLogo
