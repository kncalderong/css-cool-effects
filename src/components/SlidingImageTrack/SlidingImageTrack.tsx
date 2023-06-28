import { useRef, useState } from 'react'

const sliderImages = [
  "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
  "https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80",
  "https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80",
  "https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
]

const SlidingImageTrack = () => {

  const [mouseDownAt, setMouseDownAt] = useState(0); //usf snippet
  const [lastPercentage, setLastPercentage] = useState(0);
  const [currentPercentage, setCurrentPercentage] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (e.nativeEvent instanceof MouseEvent) {
      setMouseDownAt(e.nativeEvent.clientX)
    }
    /* if (e.nativeEvent instanceof TouchEvent) {      
    } */
  }

  const handleMouseUp = (e: React.MouseEvent | React.TouchEvent) => {
    if (e.nativeEvent instanceof MouseEvent) {
      setMouseDownAt(0) //to prevent movement without clickDown (inMouseMove there is a condition)
      setLastPercentage(currentPercentage)
    }
    /* if (e.nativeEvent instanceof TouchEvent) {      
    } */
  }

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (e.nativeEvent instanceof MouseEvent) {
      if (mouseDownAt === 0) return
      const mouseDelta = mouseDownAt - e.nativeEvent.clientX //difference in distances of mouseDown and move
      const deltaMax = window.innerWidth / 2 //because the movement up to half screen will translate 100% of track

      /* const factor = */  //this is the factor to be multiplied and adjust the amount of x translation of the track
      const percentage = -(mouseDelta / deltaMax) /* * -100 */; //percentage to be translated
      const unconstrainedPercentage = percentage + lastPercentage
      const constrainedPercentage = Math.max(Math.min(unconstrainedPercentage, 0), -1) //to do not slide infinitely the track    

      setCurrentPercentage(constrainedPercentage)

      trackRef.current!.animate({
        transform: `translate(${currentPercentage * trackRef.current!.scrollWidth}px, -50%)`
      }, {
        duration: 1200,
        fill: "forwards"
      })

      for (const image of trackRef.current!.getElementsByClassName("imageSlider")) {
        image.animate({
          objectPosition: `${(1 + constrainedPercentage) * 100}% center`
        }, { duration: 1200, fill: "forwards" });
      }

    }
    /* if (e.nativeEvent instanceof TouchEvent) {      
    } */
  }

  return (
    <section className=' h-screen bg-black overflow-hidden relative' onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
      <div id="image-track" className='flex gap-[4vmin] absolute left-1/2 top-1/2 -translate-y-1/2 select-none' ref={trackRef}>
        {sliderImages.map((image, idx) => {
          return <img src={image} draggable="false" className='w-[40vmin] h-[56vmin] object-cover object-center imageSlider' key={idx}></img>
        })}
      </div>
    </section>
  )
}

export default SlidingImageTrack
