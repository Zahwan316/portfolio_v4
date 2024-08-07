import CardWorkExperience from "../../component/cardExperience"
import Container from "../../component/container"

const WorkExperiencePageComponent = () => {
  return(
    <Container className='w-full flex flex-col'>
        <div className='w-full flex flex-col items-center mb-8'>
            <h4 className="font-bold text-2xl mb-2">Work Experience</h4>
            <p className='text-md'>My Career Journey and Work Experience</p>
        </div>
        <div>
          <CardWorkExperience
            img="/img/tikomdik.png"
            title="Teknologi Informasi dan komunikasi Disdik Jabar"
            role="Fullstack Web Developer"
            task={["Building a school information system website from scratch using ReactJS","Implement RESTful APIs to integrate third-party services and ensure seamless system interoperability.",
              "Developed backend modules using NodeJS and ExpressJS, as well integrates PostgreSQL database for efficient data management."
            ]}
            date="Jul 2023 - Sep 2023"
          />
        </div>
    </Container>
  )
}

export default WorkExperiencePageComponent