import HoverLight from "./components/HoverLight/HoverLight"
import MagicalText from "./components/MagicalText/MagicalText"
import MenuHover from "./components/MenuHover/MenuHover"
import ParallaxMenu from "./components/ParallaxMenu/ParallaxMenu"
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
      <StaggeredGrid />
      <ParallaxMenu/>
    </main>
  )
}

export default App
