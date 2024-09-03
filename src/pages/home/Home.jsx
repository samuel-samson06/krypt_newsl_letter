import React, { useContext } from 'react'
import Writeup from './WriteUp'
import Form from './Form'
import { MyContext } from '../../context/Context'
import MailchimpSubscribe from "react-mailchimp-subscribe";

function Home() {
  const {darkMode} = useContext(MyContext)

  const postUrl = `https://gmail.us11.list-manage.com/subscribe/post?u=bb477e19eeaf92e6a1d401373&id=bf60550742`


  return (
    <React.Fragment>
        <div>
           <div className=' py-4 px-2'>
            <Writeup/>
           </div>
           <div className={`  mx-2 mb-5 md:flex ${darkMode?"bg-[#252525]":"bg-[#faf9f6]"}  border-gray-300 border-[1px] rounded-md`}>
            <MailchimpSubscribe 
              url={postUrl}
              render={({subscribe, status, message })=>(
                <Form  
                status={status} 
                message={message} 
                onValidated={formData =>subscribe(formData)}
                />
              )}
            />
           </div>
        </div>
    </React.Fragment>
  )
}

export default Home