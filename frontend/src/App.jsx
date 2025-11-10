import React from 'react'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router'
import MoviePage from './pages/MoviePage'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/movie/:id"} element={<MoviePage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
