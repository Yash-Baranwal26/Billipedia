import React, {useState} from 'react'

export default function Dark_Mode() {

    const [myStyle,setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'black'
      })
      const [btntext, setBtntext] = useState("Enable Dark Mode")
    
      const toggleStyle =()=>{
        if(myStyle.color == 'white'){
          setMyStyle({
            color: 'black',
            backgroundColor: 'white'
          })
          setBtntext("Enable Dark Mode")
        }
        else{
          setMyStyle({
            color: 'white',
            backgroundColor: 'black'
          })
          setBtntext("Enable Light Mode")
        }
      }
  return (
    <div>
      <div className='container-fluid p-3'>
      <button onClick={toggleStyle} type='button' className='btn btn-primary'>{btntext}</button>
      </div>
    </div>
  )
}
