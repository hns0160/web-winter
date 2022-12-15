import React,{useState,useEffect} from 'react'

const ClockB = (props)=>{

    function newDate (){
        let date = new Date();
        return date.toLocaleTimeString()
    }

    const [curDate,setDate] = useState(newDate())
    const [intervalDelay,setDelay] = useState(1000)

     useEffect (()=>{
        const timer = setInterval(()=>setDate(newDate()),intervalDelay);
        return () => clearInterval(timer)
    },[curDate,intervalDelay])

    function handleChange(event){
        setDelay(event.target.value)
    }

    return (

    <>
    Interval Delay: {intervalDelay}
    <br/>
    <input value={intervalDelay} onChange={handleChange}></input>
    <br/>
    <br/>
    The time right now is: {curDate} 
        
    </>)
    
   

}

export default ClockB