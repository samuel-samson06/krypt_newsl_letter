/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react'
import Socials from './Socials'
import { MyContext } from '../../context/Context'
import emailImg from "../../assets/email_image.svg"

function Form({status, onValidated}) {
    const {darkMode} = useContext(MyContext)
    const [inputFields, setInputFields] = useState({name:"", email:""})
    const [text, setText] = useState(false)
    const [emptyFieldTrigger, setEmptyFieldTrigger] = useState(false)
    const {name, email} = inputFields

    const handleOnchange = (e)=>{
        setInputFields({...inputFields, [e.target.name]: e.target.value})   
    }

    const handleOnSubmit = (e)=>{
        e.preventDefault()
        if(name.length==0 || email.length==0){
            setEmptyFieldTrigger(true)
        }else{
            if(navigator.onLine){
                onValidated({
                    EMAIL:email,
                    MERGE1:name
                })
                setInputFields({name:"", email:""})
                setText(true)
            }
        }
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setEmptyFieldTrigger(false)
        },3000)

        return ()=>{clearTimeout(timer)}
    }, [emptyFieldTrigger])
    
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setText(false)
        },3000)

        return ()=>{clearTimeout(timer)}
    }, [text])
    
    
    return (
    <React.Fragment>
        {text &&<h3 className=" pt-5 text-center text-white ">
          {status !== "success" && "Subscribed Successfully!"}
        </h3>}

        <div className=" md:w-full">
            <form action="" method={"POST"} onSubmit={handleOnSubmit} className={` ${darkMode?"text-white ":"text-black"} shadow-sm md:justify-center md:h-full lg:grid lg:grid-cols-2 pt-6 px-1 mx-4 lg:gap-10`}>
                <div className=" flex flex-col  gap-6">
                    <div className=' flex flex-col'>
                        <span className=' font-semibold'>Full Name</span>
                        <input onChange={handleOnchange} value={inputFields.name} type="text" placeholder='Enter your name' className={` ${emptyFieldTrigger && name.length==0?"border-red-600":"border-gray-300"} rounded-md text-black  border-[2px] outline-none py-1.5 px-2 my-0.5`} name="name" id="" />
                    </div>
                    <div className=' flex flex-col'>
                        <span className=' font-semibold'>Email Address</span>
                        <input onChange={handleOnchange} value={inputFields.email} type="email" placeholder='Enter your email' className={` ${emptyFieldTrigger && email.length==0?"border-red-600":"border-gray-300"} rounded-md text-black border-[2px] outline-none py-1.5 px-2 my-0.5`}  name="email" id="" />
                    </div>
                    <button onSubmit={handleOnSubmit}  className=' animate-bounce duration-75 text-white bg-gradient-to-r via-[#a73365] from-[#a70463] to-[#d40505] font-medium mt-4 rounded-md py-1'>Join the Waitlist</button>
                    <Socials/>
                </div>
                <div className="  flex flex-col justify-center items-center">
                    <img src={emailImg} className=' lg:block hidden w-80' alt="" />
                </div>
            </form>
        </div>
    </React.Fragment>
  )
}

export default Form
