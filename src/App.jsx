import { Link } from "react-router-dom"

function App() {
  return (
    <>
      <h1>I have succesfully deplyed </h1>
      <Link to={"/test"}>To test page</Link>
      <a href="/test">Anchor to test page</a>
    </>
  )
}

export default App
