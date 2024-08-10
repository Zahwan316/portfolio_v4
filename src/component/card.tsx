import dataSkill from "../data/skill"

type props = {
    img: string,
    title: string,
    description: string,
    tech?: Array<string>
    className?: string,
    codeurl?: string,
    url: string,
    delay: number
}

const CardProject = (Props:props) => {
  return(
    <div data-aos='zoom-out' data-aos-delay={Props.delay} className={`w-[24vw] h-[52vh] max-[600px]:w-full md:max-lg:w-[32vw] md:max-lg:h-[42vh] lg:max-xl:w-[40vw]  bg-[#00A9FF] hover:scale-110 rounded-md shadow-md shadow-slate-400 flex flex-col relative  transition`}>
      <div className='w-full h-2/4'>
        <img src={Props.img} className='h-full w-full rounded-t-lg object-fill '/>
      </div>
      <div className='px-4 flex flex-row py-2 min-[1600px]:py-4 min-h-16 lg:max-xl:p-4 text-[#f8f8f8]'>
        <div className='w-64 2xl:w-5/6 lg:max-xl:w-[360px]'>
          <h4 className='font-bold text-xl min-[1600px]:text-3xl mb-1 max-[600px]:text-2xl'>{Props.title}</h4>
          <p className='text-sm text-gray-200 min-[1600px]:text-lg'>{Props.description}</p>
        </div>
        <div className='flex flex-row gap-2'>
          <a href={Props.codeurl} target='_blank'>
            <img src='https://www.svgrepo.com/show/526948/code.svg' className="w-6 h-6 2xl:w-10 2xl:h-10 lg:max-xl:w-10 lg:max-xl:h-10" />
          </a>
          {
            Props.url !== "" &&
            <a href={Props.url} target='_blank'>
              <img src='https://www.svgrepo.com/show/486763/open-external.svg' className="w-6 h-6 2xl:w-10 2xl:h-10 lg:max-xl:w-10 lg:max-xl:h-10" />
            </a>
          }
        </div>
      </div>
      <div className='flex flex-row gap-2 px-4  absolute bottom-0 items-center h-16 min-[1600px]:h-20 w-full' > 
        {
            Props.tech?.map((item) => 
                dataSkill.map((items,index) => 
                    items.name === item &&
                    <div className='w-10 h-10 min-[1600px]:w-14 min-[1600px]:h-14 bg-[#00A9FF] rounded-md flex justify-center items-center p-1' key={index + items.id}>
                        <img src={items.img} className='transition'/>
                    </div>
                )
            )
        }
      </div>
    </div>
  )
}

export default CardProject