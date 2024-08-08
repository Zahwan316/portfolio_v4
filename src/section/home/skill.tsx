import Container from "../../component/container"
import dataSkill from "../../data/skill"



const SkillTextComponent = () => {
  return(
    <div className='w-full bg-[#89CFF3] h-[90vh] mb-12 min-[1600px]:h-[50vh] flex flex-col justify-center max-[600px]:h-[160vh]'>
      <Container className='py-12 flex flex-col'>
        <div className='mb-8'>
            <h4 className='font-bold text-2xl mb-2 text-[#f8f8f8] flex flex-row items-center' ><span><img src='data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20data-name%3D%22Flat%20Gradient%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22a%22%20x1%3D%224%22%20x2%3D%2260%22%20y1%3D%2232%22%20y2%3D%2232%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%2300c0ff%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%235558ff%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20fill%3D%22url(%23a)%22%20d%3D%22M59%2C24.02H51.27l5.47-5.47a.99582.99582%2C0%2C0%2C0%2C0-1.41L46.86%2C7.26a.99582.99582%2C0%2C0%2C0-1.41%2C0l-5.47%2C5.47V5a1.00291%2C1.00291%2C0%2C0%2C0-1-1H25.02a1.00291%2C1.00291%2C0%2C0%2C0-1%2C1v7.73L18.55%2C7.26a.99582.99582%2C0%2C0%2C0-1.41%2C0L7.26%2C17.14a.99582.99582%2C0%2C0%2C0%2C0%2C1.41l5.47%2C5.47H5a1.00291%2C1.00291%2C0%2C0%2C0-1%2C1V38.98a1.00291%2C1.00291%2C0%2C0%2C0%2C1%2C1h7.73L7.26%2C45.45a.99582.99582%2C0%2C0%2C0%2C0%2C1.41l9.88%2C9.88a.99582.99582%2C0%2C0%2C0%2C1.41%2C0l5.47-5.47V59a1.00291%2C1.00291%2C0%2C0%2C0%2C1%2C1H38.98a1.00291%2C1.00291%2C0%2C0%2C0%2C1-1V51.27l5.47%2C5.47a.99582.99582%2C0%2C0%2C0%2C1.41%2C0l9.88-9.88a.99582.99582%2C0%2C0%2C0%2C0-1.41l-5.47-5.47H59a1.00291%2C1.00291%2C0%2C0%2C0%2C1-1V25.02A1.00291%2C1.00291%2C0%2C0%2C0%2C59%2C24.02ZM35.01%2C43.7a12.132%2C12.132%2C0%2C0%2C1-15.09993-11.7001c.65775-16.03746%2C23.52236-16.03755%2C24.18.00018A12.08192%2C12.08192%2C0%2C0%2C1%2C35.01%2C43.7Zm-.86-9.16a.998.998%2C0%2C0%2C0-.39.41.91542.91542%2C0%2C0%2C0-.12.46v6.54a9.75216%2C9.75216%2C0%2C0%2C1-2.96.05V35.57a.74625.74625%2C0%2C0%2C0-.04-.26%2C1.00432%2C1.00432%2C0%2C0%2C0-.56989-.66%2C4.28663%2C4.28663%2C0%2C0%2C1-.9201-6.99v3.58a.99649.99649%2C0%2C0%2C0%2C1%2C1c5.3963-.11112%2C4.67292.98024%2C4.7-4.58A4.3011%2C4.3011%2C0%2C0%2C1%2C34.15%2C34.54Zm1.49%2C6.87V35.96A6.26289%2C6.26289%2C0%2C0%2C0%2C34.25%2C25a1.00115%2C1.00115%2C0%2C0%2C0-1.4.91v4.33h-1.7V25.91A1.00271%2C1.00271%2C0%2C0%2C0%2C29.75018%2C25C24.98667%2C26.66109%2C24.31042%2C33.64751%2C28.68%2C36.16L28.68014%2C41.53C18.10568%2C37.66549%2C20.60259%2C22.13184%2C32%2C21.91%2C43.20538%2C22.113%2C45.90652%2C37.27241%2C35.64%2C41.41Z%22%2F%3E%3C%2Fsvg%3E' className="w-10 h-10 mr-2" /></span>Skill</h4>
            <p className='text-[#f8f8f8]'>The abilities and skills that I master.</p>
        </div>
        <div className="flex flex-wrap gap-6 max-[600px]:gap-12">
            {
                dataSkill.map((item,index) => 
                    <div className='w-24 h-24 max-[600px]:w-18 max-[600px]:h-18 bg-[#00A9FF] hover:-translate-y-2 hover:drop-shadow-lg  relative group transition rounded-lg flex flex-col justify-center items-center p-4' key={index + item.id}>                 
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