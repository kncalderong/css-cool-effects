import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const MouseTrailer = () => {
  return (
    <section className='w-full h-screen bg-dark-gray relative'>
      <div id="trailer">
        <FontAwesomeIcon icon={faUpRightFromSquare} />
      </div>
      <div
        className="interactable"
        datatype="link"
        style={{backgroundImage: "url(https://images.unsplash.com/photo-1657739774592-14c8f97eaece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)"}}>
      </div>

      <div
        className="interactable"
        datatype="video"
        style={{backgroundImage: "url(https://images.unsplash.com/photo-1657779582398-a13b5896ff19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)"}}>
      </div>

    </section>
  )
}

export default MouseTrailer
