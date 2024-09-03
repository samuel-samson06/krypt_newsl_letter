import React, { useContext } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { MyContext } from '../../context/Context'
import video from "../../assets/bg_video.mp4"

function Layout() {
  const {darkMode} = useContext(MyContext)
  return (
    <React.Fragment>
        <div className={` ${darkMode? "bg-[#393a3a]" : "bg-[#ebf7f8]"} h-screen  flex flex-col min-h-screen`}>
            <Header/>
            <div className={` flex-grow w-full  relative `}>
                <video src={video} className=' w-full h-full object-cover absolute top-0 left-0' playsInline loop autoPlay muted ></video>
                <main className={` relative bg-gradient-to-br from-[#12121282] to-[#2b151598] bg-opacity-80 z-10  md:flex md:items-center rounded-xl mx-1 font-medium md:px-4 my-6 md:my-1 pb-10 text-yellow-500 `}>
                  <Outlet/>
                </main>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Layout


// ${darkMode?" from-[#81b77b] to-[#54b150]":"from-[#b1faaa] to-[#79f872]"} 
// bg-gray-200