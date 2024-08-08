import AboutText from "../about"
import ContactPageComponent from "../contact"
import FooterPageComponent from "../footer"
import MainTextComponent from "../indexText"
import ProjectPageComponent from "../project"
import SkillTextComponent from "../skill"
import WorkExperiencePageComponent from "../workExperience"

const HomeViewPage = () => {
  return(
      <>
      <MainTextComponent />
      <AboutText />
      <SkillTextComponent />
      <ProjectPageComponent />
      <WorkExperiencePageComponent />
      <ContactPageComponent />
      <FooterPageComponent />
      
      </>
  
  )
}

export default HomeViewPage