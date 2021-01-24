import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

function InternationalizedLink() {
  const router = useRouter()

  return (
    <>
      <Link href={router.pathname} locale="ko">
        <a href={router.pathname}>KOR</a>
      </Link>
      <Link href={router.pathname} locale="en">
        <a href={router.pathname}>ENG</a>
      </Link>
    </>
  )
}

export default InternationalizedLink
