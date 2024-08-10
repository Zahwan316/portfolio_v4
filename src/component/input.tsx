import { ChangeEventHandler } from "react"

type props = {
    label: string,
    name: string,
    inputType: "small" | "big"
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    value: string | undefined
    className?: string,
    delay?: number
}

const InputComponent = (props: props) => {
  return(
    <div className='flex flex-col mb-4' data-aos='fade-right' data-aos-delay={props.delay}>
        <label className='text-[#f4f4f4] font-bold text-xl mb-2'>{props.label}</label>
        {
            props.inputType === "big" ?
            <textarea 
              className={`rounded-md p-1 h-32 resize-none ${props.className}`}
              name={props.name}
              onChange={props.onChange}
              value={props.value}
            ></textarea>
            :
            <input 
             type={`${props.name === "email" ? "email" : "text"}`} 
             name={props.name} 
             onChange={props.onChange} 
             className={`rounded-md p-1 h-10 w-1/2 border placeholder-blue-500 focus:border-cyan-500 transition max-[600px]:w-full ${props.className}`}
             value={props.value}
             />


        }
    </div>
  )
}

export default InputComponent