import './index.css'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Layout from './Layout/Layout.jsx'
import Home from './Components/Home.jsx'
import ReactForm from './Components/ReactForm.jsx'
import AxiosJSON from './Components/AxiosJSON.jsx'
import AxiosFormData from './Components/AxiosFormData.jsx'
import ParamData from './Components/ParamData.jsx'
import QueryData from './Components/QueryData.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
      <Routes>     
       
        <Route path='/' element={<Layout/>}> <Route path='' element={<Home/>} /> </Route>   {/* IF LAYOUT USE WE NEED TO SPECIFY INSIDE THE ROUTE WITH ANOTHE ROUTE */}
        <Route path='/React-Form' element={<ReactForm />} ></Route>
        <Route path='/Axios-Json-Data' element={<AxiosJSON />}></Route>
        <Route path='Axios-Form-Data' element={<AxiosFormData />}></Route>
        <Route path='/Param-Data' element={<ParamData />}></Route>
        <Route path='/Query-Data' element={<QueryData />}></Route>

      </Routes>
    </Router>
)
