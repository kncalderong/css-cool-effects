import CarouselPortfolio from "./components/CarouselPortfolio/CarouselPortfolio"
import GlideImageGallery from "./components/GlideImageGallery/GlideImageGallery"
import HackedTextEffect from "./components/HackedTextEffect/HackedTextEffect"
import HoverExplosion from "./components/HoverExplosion/HoverExplosion"
import HoverLight from "./components/HoverLight/HoverLight"
import KippoHoverCard from "./components/KippoHoverCard/KippoHoverCard"
import LivingShapes from "./components/LivingShapes/LivingShapes"
import MagicalText from "./components/MagicalText/MagicalText"
import MenuHover from "./components/MenuHover/MenuHover"
import MouseMoveGallery from "./components/MouseMoveGallery/MouseMoveGallery"
import MouseTrailer from "./components/MouseTrailer/MouseTrailer"
import ParallaxMenu from "./components/ParallaxMenu/ParallaxMenu"
import RevealMenu from "./components/RevealMenu/RevealMenu"
import SlidingImageTrack from "./components/SlidingImageTrack/SlidingImageTrack"
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
      <CarouselPortfolio />
      <MouseMoveGallery />
      <LivingShapes />
      <RevealMenu />
      <SlidingImageTrack />
      <HoverExplosion />
      <HackedTextEffect />
    </main>
  )
}

export default App
