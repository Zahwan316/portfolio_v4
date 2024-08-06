import AboutText from "../about"
import MainTextComponent from "../indexText"
import SkillTextComponent from "../skill"

const HomeViewPage = () => {
  return(
    <div>
        <MainTextComponent />
        <AboutText />
        <SkillTextComponent />
    </div>
  )
}

export default HomeViewPage