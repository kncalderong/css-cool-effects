

const ParallaxMenu = () => {
  return (
    <section className="w-full h-screen bg-dark-gray relative">
      <div id="menu">
        <div id="menuItems">
          <div className="menuItem">Home</div>
          <div className="menuItem">Shop</div>
          <div className="menuItem">About</div>
          <div className="menuItem">Contact Us</div>
        </div>
        <div id="menuBackgroundPattern"></div>
        <div id="menuBackgroundImage"></div>      
      </div>
    </section>
  )
}

export default ParallaxMenu
