/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from 'framer-motion'
import img from "../../assets/krypt_bg.png"
function HeaderMesh() {
  return (
    <React.Fragment>
        <div className=' w-full md:grid lg:grid-cols-2'>
            <img src={img} loading={"lazy"} className='  col-span-1 pt-5 rounded-md' alt="image" />
            <section className=" lg:items-center lg:flex lg:flex-col lg:justify-center col-span-1 md:text-center lg:pb-28 max-md:border-b-2 max-md:border-white  px-2 md:px-5 flex flex-col  mb-12 pb-10 ">
                <br />     
                <motion.article
                    variants={{
                        initial:{
                            x: 1000,
                        },
                        animate:{
                            x: 0,
                            transition:{
                                duration:0.5,
                                type:"tween"
                            }
                        } 
                    }} 
                    initial="initial" animate="animate"
                className=' space-y-2'>
                    <p className=' text-center text-2xl'>Unlock the Future of streetwear</p>
                    <p className='n text-center text-xl py-3 capitalize'>join our waitlist Now</p>
                  
                    The <span className=" capitalize">Meshvault X Krypt</span> Hunt comprises of 100 NFTs each assigned with our Latest physical products.
                    The <span className=" capitalize">meshvault x krypt</span> merch collection consist of 100 digital assets that have the theme of Fashion, Luxury and Art. Those who buy these NFTs will receive a “Charged With Love” Merch from the Krypt Store. 
                    By Joining this Newsletter, you'll be among the first to receive exclusive updates about our Limited Edition merch drop and sneak peeks into the treasure hunt. Get ready for an adventure like no other the countdown to January 2025 is on! Stay tuned for more thrilling updates!
                </motion.article>
            </section>
        </div>
    </React.Fragment>
  )
}

export default HeaderMesh
