
import './App.css'
import { Header } from './components'
import { Footer } from './components'
import auth from './appwrite/appwrite'
import { Outlet } from 'react-router-dom'
import { login, logout } from "./store/authslice"
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

function App() {
  const [loading, setloading] = useState(true)
  
  const dispatch = useDispatch()

  useEffect(() => {
    auth
      .currentuser()
      .then((userdata) => {
        if (userdata) {
          dispatch(login({ userdata }))
        }
        else {
          dispatch(logout())
        }
      })
      .finally(() => setloading(false))
  }, [dispatch])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400 '>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App
