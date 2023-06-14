import { faChess } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StaggeredGrid = () => {
  return (
    <section className="w-100 h-auto sm:h-screen">
      <div id="tiles" className="" ></div>
      <h1 id="title" className="">
        The name of the game is
        <span className="fancy">Chess</span>.
      </h1>
      <FontAwesomeIcon icon={faChess} />
    </section>
  )
}

export default StaggeredGrid
