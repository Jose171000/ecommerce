import { login } from "../handlers/login"

export const loginLogic = (useState, navigate) =>{
const [error, setError] = useState()

const [user, setUser] = useState({
    email:"",
    password: ""
})

const handleSubmit = async (event) =>{
    event.preventDefault()
    setError()
    await login(user, navigate, setError)
    setUser({
        email:"",
        password:""
    })
}
const handleChange = (event)=>{
    event.preventDefault()
    setUser({
        ...user,
        [event.target.name]: event.target.value
    })
}
return({user, handleChange, handleSubmit, error})
}