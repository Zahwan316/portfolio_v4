import Container from "../../component/container"

const AboutText = () => {
  return(
    <Container className='flex flex-row justify-between'>
        <div className='w-1/2 top-10 relative'>
          <h4 className='font-bold text-2xl mb-4 flex flex-row items-center'><span><img src='/img/info.svg' className='h-8 w-8 mr-2' /></span>About me</h4>
          <p>I am a Fullstack Web Developer with over a year of experience in developing dynamic and interactive web  applications. My main skills include React.js and Express.js, which I use to build effective and innovative web  solutions. 
          </p>
        </div>
        <div>
            <img src='/img/Hand-coding.svg' className='w-[25em] h-[25em] ' />
        </div>
    </Container>
  )
}

export default AboutText