import dataSkill from "../data/skill"

type props = {
    img: string,
    title: string,
    description: string,
    tech?: Array<string>
    className?: string
}

const CardProject = (Props:props) => {
  return(
    <div className={`w-[20em] h-[22em] bg-[#00A9FF] rounded-md shadow-md shadow-slate-400 flex flex-col relative  transition`}>
      <div className='w-full h-2/4'>
        <img src={Props.img} className='h-full w-full rounded-t-lg object-fill '/>
      </div>
      <div className='px-4 py-2 min-h-16 text-[#f8f8f8]'>
        <h4 className='font-bold text-xl mb-1'>{Props.title}</h4>
        <p className='text-sm text-gray-200'>{Props.description}</p>
      </div>
      <div className='flex flex-row gap-2 px-4 absolute bottom-0 items-center h-16 w-full' > 
        {
            Props.tech?.map((item) => 
                dataSkill.map((items,index) => 
                    items.name === item &&
                    <div className='w-10 h-10 bg-[#00A9FF] rounded-md flex justify-center items-center p-1' key={index + items.id}>
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