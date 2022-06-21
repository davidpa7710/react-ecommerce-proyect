import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import RoutesIndex from './Routes'

function App() {

  return (
    <>
        <Router>
        <NavBar />
        <RoutesIndex />
        </Router>
        <Footer />
    </>
  )
}

export default App
