import React, {useState} from 'react'
import { Card, Icon, Image,Button } from 'semantic-ui-react'

const NasaCard = (props) => {

  const [isLiked, setIsLiked] = useState(true)
  
  const handleClick = () => {
    setIsLiked(!isLiked)
  }

    return (
        <Card>
          <Image src={props.nasaState.hdurl} wrapped ui={false} alt='nasa' />
    <Card.Content>
      <Card.Header>{props.nasaState.title}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.nasaState.date}</span>
      </Card.Meta>
      <Card.Description>
       {props.nasaState.explanation}
      </Card.Description>
    </Card.Content>
    <Card.Content extra onClick={handleClick}>
      {isLiked ? <Button>
            <Icon name='like' />
            Like
      </Button>: <Button>
            <Icon name='cancel' />
            Unlike
      </Button>}
    </Card.Content>
  </Card>
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