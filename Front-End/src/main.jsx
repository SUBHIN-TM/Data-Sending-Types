import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home.jsx'
import Layout from './Layout/Layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}> <Route path='' element={<Home/>} /> </Route>

      </Routes>
    </Router>
)
