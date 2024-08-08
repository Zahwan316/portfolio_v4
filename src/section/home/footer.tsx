import Sosmed from "../../data/sosmed"

const FooterPageComponent = () => {
  return(
    <div className='flex flex-col justify-center items-center w-full h-[20vh] relative bg-[#00A9FF]'>
        <div className='mb-2 flex flex-wrap gap-4'>
            {
                Sosmed.map((item,index) => 
                    <a key={index + item.id} target="_blank" href={item.url} >
                        <img src={item.img} className='w-8 h-8 hover:-translate-y-3 transition hover:scale-110 hover:border-b-2 border-red-500'  />
                    </a>
                )
            }
        </div>
        <div className='items-end relative top-8'>
            <p className='text-white'>©2024-Present Zahwan | All Right Reserved</p>
        </div>
    </div>
  )
}

export default FooterPageComponent