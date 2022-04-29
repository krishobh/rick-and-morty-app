import React from 'react'
import { Character } from "../models/models";
import { Col, Card } from 'antd';
const { Meta } = Card;

interface Props {
    character: Character,
    key: string
}

const SingleCharacter: React.FC<Props> = ({character, key}) => {
  return (
        <Col xs={5} key={key} style={{width:300, padding: 10}}>
            <Card
                bordered={true}
                style={{width:250, padding: 10}}
                hoverable
                cover={<img alt={character.name} src={character.image}/>}
            >
                <Meta title={character.name} description="" />
            </Card>
        </Col>
  )
}

export default SingleCharacter