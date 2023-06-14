import HoverLight from "./components/HoverLight/HoverLight"
import MagicalText from "./components/MagicalText/MagicalText"
import MenuHover from "./components/MenuHover/MenuHover"
import StaggeredGrid from "./components/StaggeredGrid/StaggeredGrid"
import TwitchCard from "./components/TwitchCard/TwitchCard"
import TwoColorHeader from "./components/TwoColorHeader/TwoColorHeader"

function App() {

  return (
    <main >
      <HoverLight />
      <MagicalText />
      <TwitchCard /> 
      <TwoColorHeader />
      <MenuHover />
      <StaggeredGrid/>
    </main>
  )
}

export default App
