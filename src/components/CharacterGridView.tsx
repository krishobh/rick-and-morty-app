import React from 'react';
import { Character } from "../models/models";
import { Row } from 'antd';
import SingleCharacter from './SingleCharacter';

interface Props {
    appData: Character[]
}

const CharacterGridView: React.FC<Props> = ({appData}) => {

    return (
        <Row justify="center">
            {
                appData.map((character) => <SingleCharacter character={character} key={character.id}/>)
            }
        </Row>
    )
}

export default CharacterGridView