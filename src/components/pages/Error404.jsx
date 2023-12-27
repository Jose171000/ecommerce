import {Link} from "react-router-dom"

function Error404 (){
    return(
        <div style={{display:"flex",alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
            <h1>Error 404</h1>
            <p>La página no existe</p>
            <button><Link>Go Back to home</Link></button>
        </div>
    )
}

export default Error404;