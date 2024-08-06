import Container from "../../component/container"
import dataSkill from "../../data/skill"



const SkillTextComponent = () => {
  return(
    <div className='w-full bg-[#89CFF3] h-[30em]'>
      <Container className='py-12 flex flex-col'>
        <div className='mb-8'>
            <h4 className='font-bold text-2xl mb-2 text-[#f8f8f8]'>Skill</h4>
            <p className='text-[#f8f8f8]'>The abilities and skills that I master.</p>
        </div>
        <div className="flex flex-wrap gap-6">
            {
                dataSkill.map((item,index) => 
                    <div className='w-20 h-20 bg-[#00A9FF] rounded-lg flex justify-center items-center p-4' key={index + item.id}>
                        <img src={item.img} className=''/>
                    </div>
                )
            }
        </div>
      </Container>
    </div>
  )
}

export default SkillTextComponent