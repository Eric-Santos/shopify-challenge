import React, {useState} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const NasaCard = ({hdurl,title, date, explanation}) => {

  const [isLiked, setIsLiked] = useState(true)

  const handleClick = () => {
    setIsLiked(!isLiked)
  }

    return (
      <Card.Group centered>
        <Card fluid>
          <Image src={hdurl} wrapped ui={false} alt='nasa' />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className='date'>{date}</span>
      </Card.Meta>
      <Card.Description>
       {explanation}
      </Card.Description>
    </Card.Content>
        <Card.Content extra onClick={handleClick}>
          {/* conditional rendering based on state, removed button due to deprecated FindDOMNode React error */}
      {isLiked ?
            <Icon name='like'>Like</Icon>
       :
            <Icon name='cancel'>Unlike</Icon>
      }
    </Card.Content>
  </Card>
        </Card.Group>
    )
}

export default NasaCard

// import React from 'react'
// import { Card, Icon, Image } from 'semantic-ui-react'

// const CardExampleCard = () => (
  // <Card>
  //   <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
  //   <Card.Content>
  //     <Card.Header>Matthew</Card.Header>
  //     <Card.Meta>
  //       <span className='date'>Joined in 2015</span>
  //     </Card.Meta>
  //     <Card.Description>
  //       Matthew is a musician living in Nashville.
  //     </Card.Description>
  //   </Card.Content>
  //   <Card.Content extra>
  //     <a>
  //       <Icon name='user' />
  //       22 Friends
  //     </a>
  //   </Card.Content>
  // </Card>
// )

// export default CardExampleCard