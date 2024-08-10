import {motion,useScroll} from "framer-motion"

const ScrollComponent = () => {
    const {scrollYProgress} = useScroll();
   
    return(
        <motion.div className='bg-[#00A9FF] max-md:hidden fixed' style={{
            scaleX: scrollYProgress,         
            top:0,
            left:0,
            bottom:1,
            right:0,
            height:6 ,
            transformOrigin:"0%"
        }}>

        </motion.div>
    )
}

export default ScrollComponent;