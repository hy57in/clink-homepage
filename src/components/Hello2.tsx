import { useCallback, useState } from 'react'

type Props = {
  a: number
  b: string
}

function Hello2({ a, b }: Props) {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = useCallback(() => {
    setIsLoading(!isLoading)
  }, [isLoading])

  return (
    <>
      <div>{a}</div>
      <div>{b}</div>
      <div onClick={handleClick} role="alert">
        {isLoading}
      </div>
    </>
  )
}

export default Hello2
