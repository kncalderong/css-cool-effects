import { useState } from "react"

type LastImageType = {
  x: number
  y: number
}

type InfoActiveType = {
  left: number
  top: number
  zIndex: number
}

const imagesData = [
    "https://images.unsplash.com/photo-1663583513676-9f6361cd859d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1663530294185-5af3692326c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80",
    "https://images.unsplash.com/photo-1663579111009-863bc978c78e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1663492412083-17bfcad3c533?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1663571473113-d3fc49bbe775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80",
    "https://images.unsplash.com/photo-1663431263243-ef4aa402afc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1663330082092-11fa01e1ee8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1663450806250-da193dc36368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1149&q=80",
    "https://images.unsplash.com/photo-1663352248740-645afa021c9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1663431905837-09cf339461ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2207&q=80"
  ]

const MouseMoveGallery = () => {
  
  const [globalIndex, setGlobalIndex] = useState<number>(0)
  const [leadIndex, setLeadIndex] = useState<number>(0)
  const [tailIndex, setTailIndex] = useState<number | null>(null)
  const [lastImagePosition, setLastImagePosition] = useState<LastImageType>({x: 0, y: 0})
  const [activeInfo, setActiveInfo] = useState<InfoActiveType>({left: 0, top: 0, zIndex: 0})
  
  const distanceFromLast = (x: number, y:number) => {
    return Math.hypot(x - lastImagePosition.x, y - lastImagePosition.y)
  }
  
  const handleMovement = (e: React.MouseEvent | React.TouchEvent) => {
    if (e.nativeEvent instanceof MouseEvent) {      
      if (distanceFromLast(e.nativeEvent.clientX, e.nativeEvent.clientY) > (window.innerWidth / 18)) { // if mouse has moved at least a /18 part of the screen from the last image position
        const lead = imagesData[globalIndex % imagesData.length] //this will calc how much distance is between indexes, beacuse the devision always will throw same remainders
        setLeadIndex(imagesData.indexOf(lead)) 
        setActiveInfo({
          left: e.nativeEvent.clientX,
          top: e.nativeEvent.clientY,
          zIndex: leadIndex
        })
        setLastImagePosition({
          x: e.nativeEvent.clientX,
          y: e.nativeEvent.clientY
        })
        const tail = imagesData[(globalIndex - 5) % imagesData.length]
        if (tail) {
          setTailIndex(imagesData.indexOf(tail))
        }        
        setGlobalIndex(globalIndex + 1)
      }
    }
    
    if (e.nativeEvent instanceof TouchEvent) {      
      const touchPos = e.nativeEvent.touches[0]      
      if (distanceFromLast(touchPos.clientX, touchPos.clientY) > (window.innerWidth / 18)) { // if mouse has moved at least a /18 part of the screen from the last image position
        const lead = imagesData[globalIndex % imagesData.length] //this will calc how much distance is between indexes, beacuse the devision always will throw same remainders
        setLeadIndex(imagesData.indexOf(lead)) 
        setActiveInfo({
          left: touchPos.clientX,
          top: touchPos.clientY,
          zIndex: leadIndex
        })
        setLastImagePosition({
          x: touchPos.clientX,
          y: touchPos.clientY
        })
        const tail = imagesData[(globalIndex - 5) % imagesData.length]
        if (tail) {
          setTailIndex(imagesData.indexOf(tail))
        }        
        setGlobalIndex(globalIndex + 1)
      }
    }
  }
  
  
  
  return (
    <section className="w-full h-screen bg-dark-gray overflow-hidden relative" onMouseMove={handleMovement}>
      {imagesData.map((image, idxImage) => {   
        const status = idxImage === leadIndex ? "active" : idxImage === tailIndex ? "inactive" : "inactive"
        return (
          <img src={image} alt="mouseMovementImage" className={`w-[40vmin] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`} style={{
            display: `${status === "active" ? "block" : "none"}`,
            left: `${activeInfo.left}px`,
            top: `${activeInfo.top}px`
          }} key={idxImage}/>
        )
      })}
    </section>
  )
}

export default MouseMoveGallery
