import { faChess } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState, useEffect, useRef, useMemo, useCallback } from "react"
import Tile from "./Tile"
import anime from 'animejs/lib/anime.es.js'


const StaggeredGrid = () => {

  const [toggled, setToggled] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(1)
  const rowsRef = useRef<number>(0)
  const columnsRef = useRef<number>(0)
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

  const handleToggle = useCallback((index: number) => {
    if (toggled) {
      setToggled(false)
    } else {
      setToggled(true)
    }
    setIndex(index)
  }, [toggled])

  useEffect(() => {
    const handleResize = () => { //event listener to create the tiles dinamically according to sreen size
      const size = document.body.clientWidth > 800 ? 100 : 50;

      columnsRef.current = Math.floor(document.body.clientWidth / size)
      rowsRef.current = Math.floor(screen.height / size)

      setNumOfTiles(columnsRef.current * rowsRef.current)
      tilesContainerRef.current!.style.setProperty("--columns", `${columnsRef.current}`);
      tilesContainerRef.current!.style.setProperty("--rows", `${rowsRef.current}`);
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const tiles = useMemo(() => {
    return Array.from({ length: numOfTiles }, (_, index) => {
      return <Tile toggled={toggled} key={index} handleToggle={handleToggle} index={index} />
    })
  }, [toggled, numOfTiles, handleToggle])

  useEffect(() => {
    anime({ //the animejs effect has to be added once the component has been mounted(the tiles one), that's the reason why we put tiles dependency in the dependencies array
      targets: ".tile",
      opacity: toggled ? 0 : 1,
      delay: anime.stagger(50, {
        grid: [columnsRef.current, rowsRef.current],
        from: index
      })
    })
  }, [toggled, tiles, index])


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
