import React from "react"
import {FaInstagram} from "react-icons/fa"
import {FaXTwitter} from "react-icons/fa6"
import logo from "../../assets/logo.svg"

function Socials(){
    return(
    <React.Fragment>
        <div className="border-t-2 flex justify-between gap-1 py-2 font-semibold items-center ">
            <aside className="flex  gap-3 text-xl items-center ">
                <span><a href="https://www.instagram.com/meshvault_?igsh=Z2pnZjZyYWI3YnQ3"><FaInstagram/></a></span>
                <span><a href="https://twitter.com/meshvault_?s=21"><FaXTwitter/></a></span>
            </aside>
            <img src={logo} alt="logo" className=" w-16" />
        </div>
    </React.Fragment>)
}

export default Socials;


// <div className="border-t-2 flex flex-col gap-1 font-semibold justify-center items-center">
//             <p>Socials</p>
//             <main className="  flex gap-5 justify-center items-center text-xl py-3">
//                 <span><FaInstagram/></span>
//                 <span><FaXTwitter/></span>
//             </main>
//         </div>