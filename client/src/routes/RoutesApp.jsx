import { Route, Routes } from 'react-router-dom'
import  Landing  from '../components/landing/Landing'
import Navbar from '../components/NavBar/NavBar';

function RoutesApp() {
    return(
        <Routes>
            
            <Route path="/" element={<Navbar />} />                        
        </Routes>
    )
}
export default RoutesApp;