
const TwoColorHeader = () => {
  return (

    <section className='w-100 h-auto sm:h-screen flex justify-center items-center'>
      <div id="left-side" className="side">
        <h2 className='title'>
          Today is going to be <span className="fancy"> aweasome </span>
        </h2>
      </div>
      <div id="right-side" className="side">
        <h2 className='title'>
          Today is going to be <span className="fancy"> wonderful </span>
        </h2>
      </div>
      

    </section>
  )
}

export default TwoColorHeader
