import AboutText from "../about"
import ContactPageComponent from "../contact"
import MainTextComponent from "../indexText"
import ProjectPageComponent from "../project"
import SkillTextComponent from "../skill"
import WorkExperiencePageComponent from "../workExperience"

const HomeViewPage = () => {
  return(
    <div>
        <MainTextComponent />
        <AboutText />
        <SkillTextComponent />
        <ProjectPageComponent />
        <WorkExperiencePageComponent />
        <ContactPageComponent />
    </div>
  )
}

export default HomeViewPage