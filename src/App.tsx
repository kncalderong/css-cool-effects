import CarouselPortfolio from "./components/CarouselPortfolio/CarouselPortfolio"
import GlideImageGallery from "./components/GlideImageGallery/GlideImageGallery"
import HoverLight from "./components/HoverLight/HoverLight"
import KippoHoverCard from "./components/KippoHoverCard/KippoHoverCard"
import MagicalText from "./components/MagicalText/MagicalText"
import MenuHover from "./components/MenuHover/MenuHover"
import MouseTrailer from "./components/MouseTrailer/MouseTrailer"
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
      <ParallaxMenu />
      <MouseTrailer />
      <KippoHoverCard />
      <GlideImageGallery />
      <CarouselPortfolio/>
    </main>
  )
}

export default App
