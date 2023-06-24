import { useRef } from "react"
import Tile from "./Tile"

const GlideImageGallery = () => {

  const galleryRef = useRef<HTMLDivElement>(null)

  const handleMouseMovement = (e: React.MouseEvent) => {
    const mouseX = e.clientX,
      mouseY = e.clientY;

    const xDecimal = mouseX / window.innerWidth,
      yDecimal = mouseY / window.innerHeight;

    const maxX = galleryRef.current!.offsetWidth - window.innerWidth,
      maxY = galleryRef.current!.offsetHeight - window.innerHeight;

    const panX = maxX * xDecimal * -1,
      panY = maxY * yDecimal * -1;

    galleryRef.current!.animate({
      transform: `translate(${panX}px, ${panY}px)`
    }, {
      duration: 6000,
      fill: "forwards",
      easing: "ease"
    })
  }

  return (
    <section className="w-full h-screen bg-dark-gray overflow-hidden relative" onMouseMove={handleMouseMovement}>
      <div className="gallery h-[100vmax] w-[110vmax] absolute" ref={galleryRef}>
        <Tile img='https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHJhbmRvbSUyMG9iamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70' additionalStyles="bg-[rgb(255,238,88)] h-[14%] w-[20%] left-[5%] top-[5%]" />
        <Tile img="https://images.unsplash.com/photo-1515266591878-f93e32bc5937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsdWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70" additionalStyles="bg-[rgb(66,165,245)] h-[24%] w-[14%] left-[42%] top-[12%]" />
        <Tile img="https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=70" additionalStyles="bg-[rgb(239,83,80)] h-[18%] w-[16%] left-[12%] top-[34%]" />
        <Tile img="https://images.unsplash.com/photo-1520121401995-928cd50d4e27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70" additionalStyles="bg-[rgb(102,187,106)] h-[14%] w-[12%] left-[45%] top-[48%]" />
        <Tile img="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHVycGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=70" additionalStyles="bg-[rgb(171,71,188)] h-[16%] w-[32%] left-[8%] top-[70%]" />
        <Tile img="https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=70" additionalStyles="bg-[rgb(255,167,38)] h-[24%] w-[24%] left-[68%] top-[8%]" />
        <Tile img="https://images.unsplash.com/photo-1520338258525-606b90f95b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRhcmslMjBibHVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=70" additionalStyles="bg-[rgb(63,81,181)] h-[16%] w-[20%] left-[50%] top-[74%]" />
        <Tile img="https://images.unsplash.com/photo-1521127474489-d524412fd439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHJhbmRvbSUyMG9iamVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70" additionalStyles="bg-[rgb(141,110,99)] h-[24%] w-[18%] left-[72%] top-[42%]" />
        <Tile img="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=70" additionalStyles="bg-[rgb(250,250,250)] h-[10%] w-[8%] left-[84%] top-[84%]" />
      </div>
    </section>
  )
}

export default GlideImageGallery
