import AboutText from "../about"
import ContactPageComponent from "../contact"
import FooterPageComponent from "../footer"
import MainTextComponent from "../indexText"
import ProjectPageComponent from "../project"
import SkillTextComponent from "../skill"
import WorkExperiencePageComponent from "../workExperience"
import ScrollComponent from "../../../component/scroll"
import FramerParralaxTextComponent from "../framerParallaxText"
import NavComponent from "../nav"

const HomeViewPage = () => {
  return(
      <>
      <NavComponent />
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