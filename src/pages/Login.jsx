import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit');
    }

  return (
    <main className="min-h-screen bg-[url('/imgs/desk.jpg')] bg-no-repeat bg-cover flex items-center justify-center" >
        <section className='px-5 py-6 rounded-lg backdrop-blur-md'>
            
            <form onSubmit={handleSubmit}
                className=' grid gap-4'>
                <div className='grid gap-4'>
                    <div className=' text-center '>
                        <i className="fa-solid fa-user px-2 py-1 rounded-full border-[1px] text-center border-black"></i>
                    </div>

                    <label className='text-slate-700 focus-within:text-black focus-within:border-slate-800  flex items-center gap-2 border-b border-slate-700'>
                        <span ><i className="fa-solid fa-envelope "></i></span>
                        <input className='bg-transparent rounded-md  outline-none text-lg placeholder:text-slate-800 text-black'
                            placeholder='Email Id'
                            type="email"
                            name='email' 
                            required 
                            autoComplete='off'
                        />
                    </label>


                    <label className='text-slate-700 focus-within:text-black focus-within:border-slate-800  flex items-center gap-2 border-b border-slate-700'>
                        <span ><i className="fa-solid fa-lock"></i></span>
                        <input className='bg-transparent rounded-md  outline-none text-lg placeholder:text-slate-800 text-black'
                            placeholder='Password'
                            type="password"
                            name='password' 
                            required
                        />
                    </label>


                </div>

                <div className='grid gap-2 grid-cols-2 '>
                    <button className='outline outline-1 outline-black p-1 rounded-lg font-semibold hover:outline-2  '>Log In</button>









                    <Link to={"/"} className='outline outline-1 outline-black p-1 rounded-lg font-semibold hover:outline-2 text-center'>Public</Link>

                    
    
                    
                </div>

            </form>

            

           
            
        </section>    
    </main>
  )
}

export default Login