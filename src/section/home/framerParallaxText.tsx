import ParallaxText from "../../component/parallaxtext"

const FramerParralaxTextComponent = () => {
  return(
    <div className='w-full h-64'>
        <ParallaxText baseVelocity={-5}>Muhammad Zahwan Sidqi</ParallaxText>
        <ParallaxText baseVelocity={5}>Fullstack Web Developer</ParallaxText>
  </div>
  )
}

export default FramerParralaxTextComponent