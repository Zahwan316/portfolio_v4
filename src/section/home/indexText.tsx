const MainTextComponent = () => {
    return(
          <div className='flex items-center justify-center flex-col w-full h-screen mb-8 max-[600px]:p-8'>
            <div className='flex flex-col items-center justify-center w-full mb-12 max-[600px]:text-center'>
              <h4 className='font-bold text-[#454646] text-2xl mb-2 text-center'>
                Muhammad Zahwan Sidqi
              </h4>
              <h2 className='font-bold text-[#00A9FF] text-4xl mb-4 text-center'>
                Fullstack Web Developer
              </h2>
              <div className="w-1/3 max-[600px]:w-full text-center">
                <h6 className='font-bold text-lg max-[600px]:text-md max-[600px]:text-gray-700'>
                    Fullstack Web Developer with 1+ year experience with Reactjs and Express JS for developing Web App
                </h6>
              </div>
            </div>
            <div className='flex flex-row gap-24' data-aos='fade-up'>
                <img src='./img/react.svg' className="w-16 h-16 hover:rotate-180 transition-all" />
                <img src='./img/express.svg' className="w-16 h-16" />
            </div>
          </div>
    )
}

export default MainTextComponent