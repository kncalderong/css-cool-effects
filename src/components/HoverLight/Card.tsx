
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface CardProps {
  icon: IconProp
  title: string
  content: string
}

const Card = ({ icon, title, content }: CardProps) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-image">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="card-info-wrapper">
          <div className="card-info">
            <i className="fa-duotone fa-apartment"></i>
            <div className="card-info-title">
              <h3>{title}</h3>
              <h4>{content}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
