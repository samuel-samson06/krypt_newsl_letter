import React, { useContext } from 'react'
import {IoSunny} from "react-icons/io5"
import logo from "../../assets/logo.svg"
import { MyContext } from '../../context/Context'
import {IoMoonSharp} from "react-icons/io5"

function Header() {
  const {darkMode, setDarkMode} = useContext(MyContext)

  const handleDarkMode = ()=>{
    setDarkMode((prev)=> !prev)
  }
  return (
    <React.Fragment>
        <div className=' items-center justify-between px-2 py-1 flex md:px-4'>
            <header className=" flex gap-2 items-center">
                <img src={logo} loading='lazy' className=" md:w-20 w-16" alt="Logo"/>

            </header>
            <section className={darkMode?" text-white":" text-black"}>
                <button onClick={handleDarkMode} className={` ${darkMode?"border-white":"border-black"}  border-[1px]  p-2 text-base md:p-3 min-[450px]:text-xl rounded-full`}>{darkMode?<IoMoonSharp/>:<IoSunny/>}</button>
            </section>
        </div>
    </React.Fragment>
  )
}

export default Header