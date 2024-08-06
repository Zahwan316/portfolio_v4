const MainTextComponent = () => {
    return(
        <>
          <div className='flex items-center justify-center flex-col w-full h-screen mb-8'>
            <div className='flex flex-col items-center justify-center w-full mb-12'>
              <h4 className='font-bold text-[#454646] text-3xl mb-2'>
                Muhammad Zahwan Sidqi
              </h4>
              <h2 className='font-bold text-[#00A9FF] text-5xl mb-4'>
                Fullstack Web Developer
              </h2>
              <div className="w-1/3 text-center">
                <h6 className='font-bold text-lg'>
                    Fullstack Web Developer with 1+ year experience with Reactjs and Express JS for developing Web App
                </h6>
              </div>
            </div>
            <div className='flex flex-row gap-24' data-aos='fade-up'>
                <img src='./img/react.svg' className="w-16 h-16 hover:rotate-180 transition-all" />
                <img src='./img/express.svg' className="w-16 h-16" />
            </div>
          </div>
        </>
    )
}

export default MainTextComponent