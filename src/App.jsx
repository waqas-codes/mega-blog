import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/authSlice'
import authService from './appwrite/auth'
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=> {
    authService.getCurrentUser()
    .then((res) => {
      if(res){
        dispatch(login(res))
      }else{
        dispatch(logout())
      }
    }).finally(() => setLoading(false))
    
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        {/* <main> */}
        TODO:  <Outlet />
        {/* </main> */}
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
