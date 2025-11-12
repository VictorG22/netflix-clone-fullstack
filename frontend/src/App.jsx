import React, { useEffect } from 'react'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router'
import MoviePage from './pages/MoviePage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import {Toaster} from 'react-hot-toast'
import { useAuthStore } from './store/authStore'
import AIRecommendations from './pages/AIRecommendations'

const App = () => {

  const {fetchUser, fetchingUser} = useAuthStore();

  useEffect(() => {
    fetchUser()
  },[fetchUser])

  if(fetchingUser){
    return <p>Loading...</p>
}

  return (
    <div>
      <Toaster />
      <NavBar />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/movie/:id"} element={<MoviePage />} />
        <Route path={"/signin"} element={<SignIn/>} />
        <Route path={"/signup"} element={<SignUp/>} />
        <Route path={"/ai-recommendations"} element={<AIRecommendations/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
