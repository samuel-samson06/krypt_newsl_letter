import React,{ useEffect, useRef, useState} from 'react'
import { motion } from 'framer-motion'
import check_img from "../../assets/check-mark.svg"
import vacation_img from "../../assets/vacation.jpg"
import treasure from "../../assets/treasure.png"
import HeaderMesh from './HeaderMesh'

function WriteUp() {
    const[staggerAnimation, setStaggerAnimation] = useState(false)
    const ref = useRef(null);

    useEffect(()=>{
        setStaggerAnimation(true)
    },[])

  return (
    <React.Fragment>
        <HeaderMesh/>
        <section className=" md:items-center px-2 md:gap-10 lg:gap-16 md:px-5 md:grid md:grid-cols-2  pb-14">
            <main className=' space-y-5'>
                <section className=" overflow-hidden ">
                    <motion.h1 className=' w-fit font-semibold  ' 
                    variants={{
                        initial:{
                            x: -1000,
                        },
                        animate:{
                            x: 0,
                            transition:{
                                duration:1.2,
                                delay:0.3,
                                type:"tween"
                            }
                        } 
                    }} 
                    initial="initial" animate="animate" 
                    >Enjoy A Weekend Getaway 😍</motion.h1>
                </section>
                <main className=' flex flex-col gap-5'>
                    <motion.article 
                        variants={{
                            initial:{
                                x: 1000,
                            },
                            animate:{
                                x: 0,
                                transition:{
                                    duration:1.2,
                                    type:"tween"
                                }
                            } 
                        }} 
                        initial="initial" animate="animate"
                    className=" text-sm lg:text-base font-[helvetica] font-medium ">
                        Escape to a luxurious hotel in Africa with our incredible weekend getaway reward! One lucky holder will win a weekend getaway at a breathtaking five-star resort, nestled in a stunning location amidst Africas natural beauty.
                    </motion.article>
                    <div className=' overflow-hidden flex flex-col gap-3'>
                        <span className={` transition-all duration-150 ${!staggerAnimation && " translate-y-28"} flex items-center gap-2 text-sm `}><img loading='lazy' className=' w-4' src={check_img} alt="" />2 nights accommodation in an ensuite</span>
                        <span className={` transition-all duration-300 ${!staggerAnimation&&" translate-y-44"} flex items-center gap-2 text-sm `}><img loading='lazy' className=' w-4' src={check_img} alt="" />Gourmet dining experiences restaurants</span>
                        <span className={` transition-all duration-700 ${!staggerAnimation&&" translate-y-64"} flex items-center gap-2 text-sm `}><img loading='lazy' className=' w-4' src={check_img} alt="" />Access to top-notch facilities</span>                    
                    </div>
                </main>
            </main>
            <motion.aside variants={{
                            initial:{
                                x: 1000,
                            },
                            animate:{
                                x: 0,
                                transition:{
                                    duration:1.2,
                                    type:"tween"
                                }
                            } 
                        }} 
                        initial="initial" animate="animate" className=" pt-5">
                <img src={vacation_img} className=' md:w-[350px] lg:w-[450px] rounded-md' loading='lazy' alt="IMAGE" />
            </motion.aside>
        </section>
        <section className=" md:items-center px-2 md:gap-8 lg:gap-14 md:px-5 md:grid md:grid-cols-2  pb-10" ref={ref}>
            <aside className=' max-md:hidden'>
                <img src={treasure} className=' md:w-[250px] lg:w-[350px] rounded-md' alt="" />
            </aside>
            <main className=' space-y-5'>
                <section className=" overflow-hidden ">
                    <h1 className=' w-fit font-semibold'>Cash Prize Pool 🤑</h1>
                </section>
                <main className=' flex flex-col gap-5'>
                    <article className=" text-sm lg:text-base font-[helvetica] font-medium ">
                        A total of $1,000 in cash prizes will be divided among multiple treasure boxes. You do not want to miss this 
                    </article>
                    <div className=' overflow-hidden flex flex-col gap-3'>
                        <p>Distribution</p>
                        <span className={` flex items-center gap-2 text-sm `}><img className=' w-4' src={check_img} alt="" />Treasure boxes will be distributed Randomly</span>
                        <span className={` flex items-center gap-3 text-sm `}><img className=' w-4' src={check_img} alt="" />Each Box will contain varying cash amount</span>                    
                    </div>
                </main>
            </main>
            <aside className=' md:hidden'>
                <img src={treasure} className=' md:w-[250px] lg:w-[350px] rounded-md' alt="" />
            </aside>
        </section>
    </React.Fragment>
    )
}

export default WriteUp