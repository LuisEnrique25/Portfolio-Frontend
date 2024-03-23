import React, { useRef } from 'react'
import '../CSS/contact.css'
import '../functions/index'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';

const DEFAULT_VALUES = {
  name: "",
  email: "", 
  message: ""
}

const Contact = () => {

  const form = useRef()
  const {register, reset, handleSubmit, formState: {errors}} = useForm()

  const sendEmail = () =>{
    reset(DEFAULT_VALUES);
  }


  return (
    <section id='contact' className={` min-h-screen dark:text-white  transition-colors ease-linear cursor-default` }>
      <h2 className='text-center sm:text-2xl text-xl font-semibold mb-2 sm:mb-4  pt-[49px] sm:pt-[52px]'>Contact</h2>

      <p className='p-3 pt-1  text-lg sm:text-xl text-center'>If you’d like to chat about a project or just have question, please get in touch.</p>
      <section className='w-full '>


        <form ref={form} action="https://formsubmit.co/luisrg2225@gmail.com" method="POST"  className='p-3 max-w-xl m-auto'>
          {/**NAME */ }
          <div className='grid gap-1'>
            <label htmlFor="name" className='p-1 text-sky-800 dark:text-sky-300' >Name</label>
            <input id='name' name='name' placeholder='Type your name...' type="text" className='p-2 rounded-md overflow-hidden outline-none bg-[#C8DEEB] dark:dark:bg-sky-900' {...register("name",
            {required: "This field is required",
            maxLength:{
              value: 30,
              message: "The text is very long! No more than 30 characters!"
            }
          })} />
          {errors.name && <p className='text-sm text-red-400 text-center'>{errors.name.message}</p>}
          </div>

          {/**EMAIL */ }
          <div className='grid gap-1'>
            <label htmlFor="email" className='p-1 text-sky-800 dark:text-sky-300'>E-Mail</label>
            <input id='email' name='email' type="email" placeholder='hello@example.com' className='p-2 rounded-md overflow-hidden outline-none bg-[#C8DEEB] dark:bg-sky-900' {...register("email",
            {required: "This field is required",
            pattern:{
              value : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "The format is not valid!"
            }})} />
            {errors.email && <p className='text-sm text-red-400 text-center'>{errors.email.message}</p>}
          </div>

          {/**MESSAGE */ }
          <div className='grid gap-1'>
            <label htmlFor="message" className='p-1 text-sky-800 dark:text-sky-300'>General Message</label>
            <textarea name="message" id="message"  rows="6" placeholder='Say Hi!...' className='p-2 rounded-md overflow-hidden outline-none bg-[#C8DEEB] dark:bg-sky-900' {...register("message", {
              required: "This field is required"
            })}></textarea>
            {errors.message && <p className='text-sm text-red-400 text-center'>{errors.message.message}</p>}
          </div>
          <div className='w-full p-3 flex justify-center'>
            <button type='submit'  className='p-2 sm:px-4 shadow-sm rounded-md backdrop-blur-sm hover:bg-sky-600/10 hover:backdrop-blur-md shadow-sky-400 hover:shadow-sky-400 hover:shadow-md '>Send</button>
          </div>
          
          <input type="hidden" name="_next" value="https://luis-dev-web.netlify.app"></input>
           
           <input type="hidden" name="_captcha" value="false"/>
           <input type="hidden" name="_template" value="table" />
           <input type="hidden" name="_subject" value="Portfolio Submission"/>
          
        </form>

        

      </section>
    </section>
  )
}

export default Contact