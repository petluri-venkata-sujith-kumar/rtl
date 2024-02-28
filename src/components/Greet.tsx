type propType={
    name?:string
}
const Greet = (prop:propType) => {
  return (
    <div>
      Hello {prop.name}
    </div>
  )
}

export default Greet