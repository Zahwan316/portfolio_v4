import CardProject from "../../component/card"
import Container from "../../component/container"
import Project from "../../data/project"

const ProjectPageComponent = () => {
  return(
    <Container className='w-full flex flex-col '>
        <div className='flex flex-col items-center justify-center w-full mb-16 '>
            <h4 className='font-bold text-2xl mb-2'>
              Project
            </h4>
            <p className="text-md max-[600px]:text-center">Here are some recent projects I've worked on, showing my results</p>
        </div>
        <div className='flex flex-wrap gap-16 justify-between max-[600px]:flex-col'>
          {
            Project.map((item,index) => 
              <CardProject 
                key={index + item.id}
                img={item.image}
                title={item.name}
                description={item.description}
                className=''
                tech={item.tech}
                codeurl={item.codeurl}
                url={item.url}
              />
            )
          }
        </div>
    </Container>
  )
}

export default ProjectPageComponent