import React from 'react'
import { Questions } from '../FAQ/FAQ'

export default function Contact() {
   
  function ShowAnswer(){

  }

  return (
    <div className='bg-slate-300 py-10 '>
      <h1 className='text-center text-3xl py-10 font-bold'>Get In Touch</h1>
      <div className='flex flex-wrap justify-center items-center py-4 sm:flex-nowrap bg-blue-500 w-11/12 sm:w-10/12 mx-auto p-10 gap-4 sm:py-20'>
     

      <div className='bg-black  h-28 text-white w-3/4 flex  flex-col justify-center items-center rounded-md '>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5ZsrNZDMwD8PzWWFf6yt3O8f9_voM2dv6w&s" alt="phone call"  className='rounded-full' style={{width:30,height:30}} />
        <h1>1234567890</h1>
      </div>

      <div className='bg-black  h-28 text-white w-3/4 flex  flex-col justify-center items-center rounded-md '>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTita_w2Fqm6A9WoJaP_qY4zQb41vvx6zAAw&s" alt="phone call"  className='rounded-full' style={{width:30,height:30}} />
        <h1>xuz@gmail.com</h1>
      </div>

      <div className='bg-black h-28 text-white w-3/4 flex  flex-col justify-center items-center rounded-md '>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaNB6KFaWN382IdTNcn92iWCG6OPAK3G9ncQ&s" alt="phone call"  className='rounded-full' style={{width:30,height:30}}/>
        <h1>112, VIVEK VIHAR BOREWALI</h1>
      </div>
       
       

        

      </div>

      {/* <div>
        <h2 className='text-2xl p-6 text-center'> Frequently Asked Question!</h2>
           <div className='grid grid-cols-2 gap-8 p-7'>
            {
              Questions.map((question)=>{
                return(
                  <> 
                    <div key={question} className='text-white bg-slate-700 rounded-md p-2 flex flex-col  gap-4'>
                      <button className='text-xl font-bold bg-green-500 rounded-md p-2' onClick={ShowAnser}>{question.Question} <img src="" alt="" /></button>
                      <p className="hidden ">{question.Answer}</p>
                    </div>
                  </>
                )
              })
            }
           </div>
      </div> */}
    </div>
  )
}
