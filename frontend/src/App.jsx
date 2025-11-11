import React from 'react'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router'
import MoviePage from './pages/MoviePage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/movie/:id"} element={<MoviePage />} />
        <Route path={"/signin"} element={<SignIn/>} />
        <Route path={"/signup"} element={<SignUp/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
