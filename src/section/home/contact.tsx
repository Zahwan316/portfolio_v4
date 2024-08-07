import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import Container from "../../component/container"
import InputComponent from "../../component/input"

type input = {
    name?:string,
    message?:string
    email?:string
}

const ContactPageComponent = () => {
  const[input,setinput] = useState<input>({name:"",message:"",email:""})
  
  const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    const {name,value} = e.target
    setinput({...input,[name]:value})
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setinput({name:"",message:"",email:""})
    console.log("submitted")
  }

  useEffect(() => {
    console.log(input)
  })

  return(
    <div className='bg-[#89CFF3] h-[90vh] py-8 '>
      <Container className='flex flex-col'>
        <div className='w-full flex flex-col items-center mb-8'>
          <h4 className='font-bold text-2xl mb-2 text-[#f2f2f2]'>Contact Me</h4>
          <p className='text-[#f9f9f9]'>Let's Connect and Collaborate</p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
           <InputComponent 
             label="Name"
             name="name"
             inputType="small"
             onChange={handleInput}
             value={input.name}
           />
           <InputComponent 
             label="Email Address"
             name="email"
             inputType="small"
             onChange={handleInput}
             value={input.email}
           />
           <InputComponent 
             label="Message"
             name="message"
             inputType="big"
             onChange={handleInput}
             value={input.message}
           />
           <button type='submit' className='bg-[#00A9FF] w-32 h-12 rounded-lg text-white font-bold active:scale-75 transition'>Send</button>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default ContactPageComponent