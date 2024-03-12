import { useEffect, useState } from "react"




const UseToken = ()=>{
    const [token , setToken] = useState("")
    useEffect(()=>{
        setToken(localStorage.getItem("token"))
    },[])
    return [token]

}

export default UseToken