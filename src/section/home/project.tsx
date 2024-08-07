import CardProject from "../../component/card"
import Container from "../../component/container"

const ProjectPageComponent = () => {
  return(
    <Container className='w-full flex flex-col '>
        <div className='flex flex-col items-center justify-center w-full mb-16 '>
            <h4 className='font-bold text-2xl mb-2'>
              Project
            </h4>
            <p className="text-md">Here are some recent projects I've worked on, showing my results</p>
        </div>
        <div className='flex flex-wrap gap-8 justify-between'>
          <CardProject 
            img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2qcWPZmxTOnLYd1Q-mpAXArzs6i5cCl91xQ&s'
            title='Lorem ipsum dolor'
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            className=''
            tech={["React JS","Express JS","Tailwind"]}
          />
          <CardProject 
            img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2qcWPZmxTOnLYd1Q-mpAXArzs6i5cCl91xQ&s'
            title='Lorem ipsum dolor'
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            className=''
            tech={['Typescript','PostgreSQL','Tailwind']}
          />
        </div>
    </Container>
  )
}

export default ProjectPageComponent