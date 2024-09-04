/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from 'framer-motion'
import img from "../../assets/krypt_bg.png"
function HeaderMesh() {
  return (
    <React.Fragment>
        <div className=' w-full md:grid lg:grid-cols-2'>
            <img src={img} className='  col-span-1 pt-5 rounded-md' alt="image" />
            <section className=" lg:items-center lg:flex lg:flex-col lg:justify-center col-span-1 md:text-center lg:pb-28 max-md:border-b-2 max-md:border-white  px-2 md:px-5 flex flex-col  mb-12 pb-10 ">
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
                className=' space-y-2'>
                    <p className=' text-center text-2xl'>Unlock the Future of streetwear</p>
                    <p className='n text-center text-xl py-3 capitalize'>join our waitlist Now</p>
                    The <span className=" capitalize">meshvault x krypt</span>  collection comprises of 150 NFTs each backed by physical products
                    The <span className=" capitalize">meshvault x krypt</span> merch collection consist of 150 digital assets that have the theme of luxury fashion, and art. Those 
                    who buy these NFTs can then redeem them for our merch drop  from the krypt  vault at a later date. By signing up,
                    you'll be the first to receive exclusive updates about our Limited 
                    Edition merch drop and sneak peeks into the treasure hunt. Get ready for an adventure like no other 
                    the countdown to October is on! Stay tuned for more thrilling updates!
                    {/* Exciting news for all crypto enthusiasts! Our team is hard at work crafting an epic treasure hunt on our main website, set to launch this October. While we put the finishing touches on the main site, we're thrilled to invite you to join our waitlist. By signing up,
                    you'll be the first to receive exclusive updates about our Limited 
                    Edition merch drop and sneak peeks into the treasure hunt. Get ready for an adventure like no other 
                    the countdown to October is on! Stay tuned for more thrilling updates! */}
                </motion.article>
            </section>
        </div>
    </React.Fragment>
  )
}

export default HeaderMesh


// . Former text continue…

// Buyers of the collection will have the chance to win exclusive experiences and prizes,which include a chance to be among 
// holders to share 1000 usd from the treasure boxes randomly shared among holders  when minting, and also One lucky holder will win a weekend getaway at a breathtaking 
// five-star resort, nestled in a stunning location amidst Africas natural beauty. 



// Phygital, is an innovative concept that integrates physical and digital experiences to bridge the gap between
// online and offline commerce. It combines elements of physical stores and digital platforms to create interactive customer experiences that emphasize convenience and personalization.