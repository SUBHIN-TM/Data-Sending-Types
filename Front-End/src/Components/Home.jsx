import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate();
  return (
    <>
    <div style={{height:'100px',  padding:'40px'}}>WE ARE GOING TO FIND THE DIFFERENCE BETWEEN DIFFRENT TYPES OF DATAS TO SERVER</div>
    <div style={{display:'flex', justifyContent:'space-between', padding:'40px' ,marginBottom:'420px'}}>
        <button onClick={()=>navigate('/React-Form')}>React Form </button>
        <button onClick={()=>navigate('/Axios-Json-Data')}>Axios Json Data </button>
        <button onClick={()=>navigate('/Axios-URLENCODED-Form-Data')}>Axios URL ENCODED Form Data </button>
        <button onClick={()=>navigate('/Axios-APPEND-Form-Data')}>Axios APPEND Form Data </button>
        <button onClick={()=>navigate('/Param-Data')}>Param Data </button>
        <button onClick={()=>navigate('/Query-Data')}>Query Data </button>
    </div>
    </>
    
  )
}

export default Home