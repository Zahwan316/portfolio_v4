import AboutText from "../about"
import ContactPageComponent from "../contact"
import FooterPageComponent from "../footer"
import MainTextComponent from "../indexText"
import ProjectPageComponent from "../project"
import SkillTextComponent from "../skill"
import WorkExperiencePageComponent from "../workExperience"
import ScrollComponent from "../../../component/scroll"
import FramerParralaxTextComponent from "../framerParallaxText"

const HomeViewPage = () => {
  return(
      <>
      <MainTextComponent />
      <FramerParralaxTextComponent />
      <AboutText />
      <SkillTextComponent />
      <ProjectPageComponent />
      <WorkExperiencePageComponent />
      <ContactPageComponent />
      <FooterPageComponent />
      <ScrollComponent />
      </>
  
  )
}

export default HomeViewPage