type TwitchWordProps = {
  text: string
  isHover: boolean
}

const TwitchWord = ({ text, isHover }: TwitchWordProps) => {

  return (
    <>
      {text.split(' ').map((word, idx) => {
        return <span key={idx} className='inline-block my-0 mx-[0.3vmin] relative ' style={{
          'transitionDelay': `${idx * 40}ms`,
          'opacity': isHover ? '1' : '0',
          'transform': isHover ? 'translateY(0%)' : 'translateY(50%)',
          'transition': isHover ? `opacity 0ms, transform ${idx * 80}ms cubic-bezier(.90, .06, .15, .90)` : 'none'
        }}>
          {word}
        </span>
      })}

    </>

  )
}

export default TwitchWord
