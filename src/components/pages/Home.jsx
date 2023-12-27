import { API_URL } from "../../constants/env"

function Home() {

  return (
    <>
      <div>
        <h1>Welcome, {API_URL}</h1>
        <p>Este es un archivo modificado</p>
      </div>
    </>
  )
}

export default Home;
