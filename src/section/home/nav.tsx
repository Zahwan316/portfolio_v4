import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const menu: string[] = ["Home","About","Skill","Project","Work Experience","Contact"]

const NavComponent = () => {
  const [isActived,setIsActived] = useState<Boolean>(false)

  const handleButton = () => {
    setIsActived(!isActived);
  }

  useEffect(() => {
    console.log(isActived)
  })

  return(
    <div className='fixed z-40 w-full flex justify-center p-4 min-[200px]:max-sm:justify-end'>
        <div className="bg-white text-black bg-opacity-60 w-2/5 flex justify-center align-center items-center p-4 gap-4 rounded-xl backdrop-blur-lg min-[200px]:max-sm:hidden">
            {
                menu.map(item => 
                    <a href={"#"+item.toLowerCase()} className="relative flex hover:scale-125 transition-all font-bold hover:border-b-cyan-500 hover:border-b" >{item}</a>
                )
            }
        </div>
        {
          !isActived &&
          <div className='w-10 h-10 bg-white rounded-full hidden p-2 min-[200px]:max-sm:flex active:bg-cyan-400' onClick={handleButton}>
            <img src='https://www.svgrepo.com/show/525355/hamburger-menu.svg' className='w-full h-full' />
          </div>

        }
        {
          isActived &&
            <motion.div className="bg-white w-full rounded-xl py-2 px-6 bg-opacity-45 backdrop-blur-2xl" initial={{opacity:0,width:0,height:0}} animate={{opacity:1,width:"100%",height:"100%"}} transition={{ease:"easeOut",duration:.3}}>
              <div className='w-full flex justify-end' >
                <img src='https://www.svgrepo.com/show/528911/close-square.svg' className='w-8 h-8 active:scale-75 transition-all' onClick={handleButton}/>
              </div>
                {
                    menu.map(item => 
                        <a href={"#"+item.toLowerCase()} className="relative flex mb-4 active:text-cyan-500 font-bold" >{item}</a>
                    )
                }
            </motion.div>     
        }
    </div>
  )
}

export default NavComponent