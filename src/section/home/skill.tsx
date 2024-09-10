import Container from "../../component/container"
import dataSkill from "../../data/skill"



const SkillTextComponent = () => {
  return(
    <div className='w-full border  bg-[#89CFF3] h-[90vh] mb-12 min-[1600px]:h-[50vh] flex flex-col justify-center max-[600px]:h-[180vh]'>
      <Container className='py-12 flex flex-col ' id='skill'>
        <div className='mb-8 w-full flex flex-col items-center md:items-start'>
            <h4 className='font-bold text-2xl mb-2 text-[#f8f8f8] flex flex-row items-center' >
              <span>
                <img src='https://www.svgrepo.com/show/281677/settings-gear.svg' className="w-10 h-10 mr-2" />
              </span>
                Skill
            </h4>
            <p className='text-[#f8f8f8]'>The abilities and skills that I master.</p>
        </div>
        <div className="flex flex-wrap gap-6 max-[600px]:gap-12 justify-center md:justify-start">
            {
                dataSkill.map((item,index) => 
                    <div data-aos='zoom-in-up' data-aos-delay={index * 50} className='w-24 h-24 max-[600px]:w-18 max-[600px]:h-18 bg-[#00A9FF] hover:-translate-y-2 hover:drop-shadow-lg  relative group transition rounded-lg flex flex-col justify-center items-center p-4' key={index + item.id}>                 
                        <img src={item.img} className='w-auto h-auto group-hover:blur-sm group-hover:brightness-75 transition'/>    
                        <div className='hidden group-hover:flex w-full absolute justify-center transition'>
                          <p className="text-white text-center font-bold">{item.name}</p>
                        </div>
                    </div>
                )
            }
        </div>
      </Container>
    </div>
  )
}

export default SkillTextComponent