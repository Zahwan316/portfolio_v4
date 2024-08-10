import {useRef} from "react"
import {motion,useScroll,useSpring,useTransform,useMotionValue,useVelocity,useAnimationFrame} from "framer-motion"
import {wrap} from "@motionone/utils"
import "../index.css"

type props = {
    children: string,
    baseVelocity: number
}

const ParallaxText = ({children,baseVelocity = 100}: props) => {
  const baseX = useMotionValue(0)
  const {scrollY} = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothvelocity = useSpring(scrollVelocity,{
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothvelocity,[0,1000],[0,5],{
    clamp:false
  })

  const x = useTransform(baseX,(v) => `${wrap(-20,-45,v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta/1000)

    if(velocityFactor.get() < 0){
      directionFactor.current = -1
    } else if(velocityFactor.get() > 0){
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return(
    <div className='overflow-hidden spacing tracking-tight leading-[0.8] m-0 whitespace-nowrap flex flex-nowrap'>
      <motion.div style={{x}} className='text-[#00A9FF] font-semibold uppercase text-[64px] flex whitespace-nowrap flex-nowrap textSpan'>
        <span className="block mr-[80px] textSpan">{children}</span>
        <span className="block mr-[80px]">{children}</span>
        <span className="block mr-[80px]">{children}</span>
        <span className="block mr-[80px]">{children}</span>
      </motion.div>
    </div>
  )

}

export default ParallaxText