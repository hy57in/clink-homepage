import { useState } from 'react'

function useHook() {
  const [state, setState] = useState(1)
  return [state, setState] as const
}

export default useHook
