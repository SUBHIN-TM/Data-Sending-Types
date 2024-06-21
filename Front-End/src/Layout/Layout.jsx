import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <>
   <Header/>
   <Outlet/>  {/* OUT LET WILL BE REPLACED BY ELEMENT DEFINE IN THE MAIN.JSX */}
   <Footer/>
   </>
  )
}

export default Layout