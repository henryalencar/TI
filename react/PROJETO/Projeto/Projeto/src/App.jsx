import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App