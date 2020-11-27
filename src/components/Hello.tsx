type Props = {
  a: number
  b: string
}

function Hello(props: Props) {
  return (
    <>
      <div>{props.a}</div>
      <div>{props.b}</div>
    </>
  )
}

export default Hello
