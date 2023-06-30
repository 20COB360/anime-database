import { useEffect, useState } from "react"
import CastCard from "../cast-card/char-cast-card"


function Chararacters() {

    const [chars,setChars] = useState([])
    const [char,setChar] = useState()
    const [jv,setJv] = useState()
    const [ev,setEv] = useState()
    
    useEffect(() => console.log(chars),[chars])

    return (
    <>
        {chars.map((data)=> <p style={{color:"white"}}>   {data},  </p>)}
        
        <form>
        <input onChange={(e)=> setChar(e.target.value)}></input>
        <input onChange={(e)=> setJv(e.target.value)}></input>
        <input onChange={(e)=> setEv(e.target.value)}></input>
        <button type="button" onClick={()=> {
            console.log([char,jv,ev])
            setChars((p) => [...p,[char,jv,ev]])

            }} >Add + </button>
        </form>

    </>
  )
}

export default Chararacters
