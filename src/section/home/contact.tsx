import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import Container from "../../component/container"
import InputComponent from "../../component/input"
import axios from "axios"
import Swal from "sweetalert2"

type input = {
    from_name?:string,
    message?:string
    from_email?:string
}

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
})

const ContactPageComponent = () => {
  const[input,setinput] = useState<input>({from_name:"",message:"",from_email:""})
  
  const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    const {name,value} = e.target
    setinput({...input,[name]:value})
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    for(const key in input){
      if(!input[key as keyof input] || input[key as keyof input]?.length === 0){
        Swal.fire({
          text:`Please fill out the ${key.replace("from_","")} field`,
          title:"error",
          icon:"error"
        })
        return
      }
    }

    const formdata = new FormData()
    formdata.append('from_name', input.from_name || "")
    formdata.append('from_email', input.from_email || "")
    formdata.append('message', input.message || "")
   
    const send = async() => {
      try{
        const res = await api.post(`sendEmail`,formdata,{
          headers: {
            'Content-Type': 'application/json',
          }
        })
        console.log(res)
      }
      catch(e: unknown){
        const message = e instanceof Error ? e.message : "Error sending email"
        console.log(e)
        Swal.fire({
          text:message,
          title:"error",
          icon:"error"
        })
      }
    }

    send()

    setinput({from_name:"",message:"",from_email:""})
    console.log("submitted")
  }

  useEffect(() => {
    //console.log(input)
  })

  return(
    <div className='bg-[#89CFF3] h-[100vh] min-[1600px]:h-[70vh] py-8 flex flex-col justify-center max-[600px]:h-[80vh] md:max-lg:h-[80vh]'>
      <Container className='flex flex-col'>
        <div className='w-full flex flex-col items-center mb-8'>
          <h4 className='font-bold text-2xl mb-2 text-[#f2f2f2]'>Contact Me</h4>
          <p className='text-[#f9f9f9]'>Let's Connect and Collaborate</p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
           <InputComponent 
             label="Name"
             name="from_name"
             inputType="small"
             onChange={handleInput}
             value={input.from_name}
           />
           <InputComponent 
             label="Email Address"
             name="from_email"
             inputType="small"
             onChange={handleInput}
             value={input.from_email}
           />
           <InputComponent 
             label="Message"
             name="message"
             inputType="big"
             onChange={handleInput}
             value={input.message}
             className='mb-8'
           />
           <button type='submit' className='bg-[#00A9FF] w-32 h-12 rounded-lg hover:bg-blue-600 text-white font-bold active:scale-75 transition'>Send</button>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default ContactPageComponent