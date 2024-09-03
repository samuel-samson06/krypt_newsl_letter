/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from 'framer-motion'
import img from "../../assets/krypt_bg.png"
function HeaderMesh() {
  return (
    <React.Fragment>
        <div className=' w-full md:grid lg:grid-cols-2'>
            <img src={img} className=' col-span-1 pt-5 rounded-md' alt="image" />
            <section className=" lg:items-center lg:flex lg:flex-col lg:justify-center col-span-1 md:text-center lg:pb-28 max-md:border-b-2 max-md:border-white  px-2 md:px-5 flex flex-col gap-4 mb-14 pb-10 ">
                <br />     
           {/* <h1 className=" text-center text-lg md:text-xl">MESHVAULT X KRYPT</h1>  */}
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
                >
                    Exciting news for all crypto enthusiasts! Our team is hard at work crafting an epic treasure hunt on our main website, set to launch this October. While we put the finishing touches on the main site, we're thrilled to invite you to join our waitlist. By signing up,
                    you'll be the first to receive exclusive updates about our Limited 
                    Edition merch drop and sneak peeks into the treasure hunt. Get ready for an adventure like no other 
                    the countdown to October is on! Stay tuned for more thrilling updates!
                </motion.article>
            </section>
        </div>
    </React.Fragment>
  )
}

export default HeaderMesh