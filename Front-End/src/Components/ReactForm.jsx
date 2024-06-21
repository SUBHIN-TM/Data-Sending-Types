import { useState } from 'react'

const ReactForm = () => {
    const [formData,setFormData]=useState({
        name:'',
        number:''
    })
    
    const typingValue =(e)=>{
    const{name,value} =e.target //IT WILL DESTRUCTURE THE CORRESPONDING VALUES
    setFormData((pvs)=>({
        ...pvs,
        [name]:value
    }))
    }

  return (
    <>
    <div>ReactForm</div>
    <div style={{padding:'20px'}}>
        <form action="http://localhost:3000/reactForm" method='post'>
            <label style={{marginRight:'10px'}} htmlFor="Name">name</label><input value={formData.name} onChange={typingValue} name='name' type="text" /> <br />
            <label htmlFor="number">Number</label> <input type="number" name="number" id="" /> <br />
            <button type="submit">Submit</button>
        </form>
    </div>
    </>
    
  )
}

export default ReactForm






