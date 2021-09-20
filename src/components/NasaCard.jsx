import React, {useState} from 'react'
import { Card, Image } from "semantic-ui-react";
import { motion } from "framer-motion";

const NasaCard = ({ hdurl, title, date, explanation }) => {
  const [isLiked, setIsLiked] = useState(true);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Card.Group centered>
      <Card fluid>
        <Image src={hdurl} wrapped ui={false} alt="nasa" />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            <span className="date">{date}</span>
          </Card.Meta>
          <Card.Description>{explanation}</Card.Description>
        </Card.Content>
        <Card.Content extra onClick={handleClick}>
          {/* conditional rendering based on state, removed button due to deprecated FindDOMNode React error */}
          {isLiked ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Like
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Dislike
            </motion.button>
          )}
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default NasaCard