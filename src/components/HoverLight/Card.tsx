
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface CardProps {
  icon: IconProp
  title: string
  content: string
}

const Card = ({ icon, title, content }: CardProps) => {

  const styleBefore = {
    background: 'radial-gradient(800px circle at 132px 131px, rgba(255, 255, 255, 0.06), transparent 40%)'
  }

  return (
    <div className="card bg-[#ffffff1a] rounded-[10px] cursor-pointer flex flex-col relative w-[300px] h-[260px]">
      <div id="likeBefore" className='rounded-[10px] h-full w-full left-0 top-0 absolute opacity-0 transition-opacity z-[3]' style={styleBefore}></div>
      <div id='likeAfter' className='rounded-[10px] h-full w-full left-0 top-0 absolute opacity-0 transition-opacity'></div>
      <div className="card-content bg-dark-gray rounded-[10px] flex flex-col flex-grow inset-[1px] p-[10px] absolute z-[2]">
        <div className="card-image flex justify-center items-center h-[140px] overflow-hidden">
          <FontAwesomeIcon icon={icon} className='text-[6em] opacity-25' color='#f0f0f0' />
        </div>
        <div className="card-info-wrapper flex flex-grow items-center justify-start py-0 px-[20px]">
          <div className="card-info flex gap-[10px] justify-center items-start">
            <FontAwesomeIcon icon={icon} className='text-[1em] h-[20px]' color='#f0f0f0' />
            <div className="card-info-title">
              <h3 className='text-[#f0f0f0] font-rubik text-[1.1em]' >{title}</h3>
              <h4 className='text-[#ffffff80] font-rubik text-[0.85em] mt-2'>{content}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
