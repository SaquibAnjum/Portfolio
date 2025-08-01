import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'
const Contact = () => {
     const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
    const userinfo={
        name:data.name,
        email:data.email,
        message:data.message

    }
    try{
      await axios.post("https://getform.io/f/bxoymwwa",userinfo);
      toast.success("your message has been sent");
    }catch(error){
      toast.error("something went wrong");
    }
  }
  return (
   <>
   <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
     <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
     <div className='flex flex-col items-center justify-center mt-5'>
        <form onSubmit={handleSubmit(onSubmit)} action="" method="POST" className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
            <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
            <div className='flex flex-col mb-4'>
                <label className='block font-bold text-gray-700'>Fullname</label>
                <input
                  {...register("name", { required: true })} 
                 className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline '
                type="text"
                id="name"
                name='name'
                placeholder='Enter your Fullname'
                 />
                {errors.name && <span>This field is required</span>}
            </div>
            <div className='flex flex-col mb-4'>
                <label className='block font-bold text-gray-700'>Email</label>
                <input
                 {...register("Email", { required: true })} 
                 className='shadow rounded-lg appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline '
                type="text"
                id="Email"
                name='Email'
                placeholder='Enter your Email'
                 />
                {errors.Email && <span>This field is required</span>}
            </div>
            <div className='flex flex-col mb-4'>
                <label className='font-bold text-gray-700'>Message</label>
                <textarea
                {...register("message", { required: true })}
                 className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline '
                type="text"
                id="message"
                name='message'
                placeholder='write your query'
                 />
                {errors.message && <span>This field is required</span>}
            </div>
            <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-600 cursor-pointer'>Send</button>
        </form>
     </div>
   </div>
   </>
  )
}

export default Contact;
