import { faChess } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect, useRef, useMemo, useCallback } from "react"
import Tile from "./Tile"


const StaggeredGrid = () => {

  const [toggled, setToggled] = useState<boolean>(false)
  const [numOfTiles, setNumOfTiles] = useState<number>(0)
  const tilesContainerRef = useRef<HTMLDivElement>(null)

  const styleContainer = {
    background: 'linear-gradient(to right, rgb(98, 0, 234), rgb(236, 64, 122), rgb(98, 0, 234))',
    backgroundSize: '200%'
  }

  const styleTilesContainer = {
    gridTemplateColumns: 'repeat(var(--columns), 1fr)',
    gridTemplateRows: 'repeat(var(--rows), 1fr)'
  }

  const handleToggle =  useCallback(() => {
    if (toggled) {
      setToggled(false)
    } else {
      setToggled(true)
    }
  }, [toggled]) 
  

  useEffect(() => {
    let rows = 0
    let columns = 0
    const handleResize = () => {
      const size = document.body.clientWidth > 800 ? 100 : 50;

      console.log("height: ", screen.height)
      console.log("size: ", size)
      
      columns = Math.floor(document.body.clientWidth / size)
      rows = Math.floor(screen.height / size)

      console.log("rows: ", rows)
      setNumOfTiles(columns * rows)
      tilesContainerRef.current!.style.setProperty("--columns", `${columns}`);
      tilesContainerRef.current!.style.setProperty("--rows", `${rows}`);
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const tiles = useMemo(() => {
    return Array.from({ length: numOfTiles }, (_, index) => {
      return <Tile toggled={toggled} key={index} handleToggle={handleToggle} />
    })
  }, [numOfTiles,handleToggle,toggled]) 

  return (
    <section className={`w-100 h-auto sm:h-screen overflow-hidden relative ${toggled ? 'animate-none' : 'animate-staggeredBackgroundPan'}`} style={styleContainer}>
      <div id="tiles" className="h-[calc(100vh-1px)] w-[calc(100vw-1px)] relative z-[2] grid" style={styleTilesContainer} ref={tilesContainerRef} >
        {tiles}
      </div>
      <h1 id="title" className={`${toggled ? 'opacity-0' : 'opacity-100'} left-[50%] absolute top-[50%] translate-y-[-50%]  translate-x-[-50%] text-white font-rubik text-[6vw] m-0 pointer-events-none ease-in-out duration-[1200ms] transition-[opacity] w-[50vw] z-[3] font-bold`}>
        The name of the game is
        <span className="fancy text-staggered-salmon font-dancing text-[1.5em] leading-[0.9em] font-extrabold ml-[0.2em]">Chess</span>
      </h1>
      <FontAwesomeIcon icon={faChess} className={`${toggled ? 'opacity-100' : 'opacity-0'} text-[60vmin] pointer-events-none ease-in-out duration-[1200ms] transition-[opacity] z-[1] left-[50%] absolute top-[50%] translate-y-[-50%]  translate-x-[-50%]`} color="#ffffff26" />
    </section>
  )
}

export default StaggeredGrid
