interface props {
    img: string,
    title: string,
    role: string,
    task: Array<string>
    date: string,
    classname?: string
}

const CardWorkExperience = (props: props) => {
  return(
    <div className={`bg-[#00A9FF] px-12 py-6 rounded-lg text-[#f9f9f9] flex flex-row justify-center ${props.classname}`}>
        <div className='w-32'>
            <img src={props.img} className='w-16 h-16 rounded-full relative top-2'/>
        </div>
        <div>
            <h2 className='font-bold text-2xl mb-1'>{props.title}</h2>
            <h4 className='mb-4'>{props.role}</h4>
            <h3 className='font-bold mb-2 text-lg'>The responsibilities includes : </h3>
            <ul>
                {props.task.map((item, index) => <li className='decoration-dotted list-disc mb-1 text-gray-200' key={index}>{item}</li>)}
            </ul>
        </div>
        <div className='relative top-2 w-64'>
            <p>{props.date}</p>
        </div>
    </div>
  )
}

export default CardWorkExperience