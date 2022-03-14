import React, {useState} from 'react'
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { Profile } from '../interfaces/Profile';

type Props = {
    profile: Profile,
}

const ProfileCard = (props: Props) => {

  return (
    <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>{props.profile.firstName} {props.profile.middleName} {props.profile.familyName}</Card.Title>
            <Card.Text>
            {props.profile.description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    </>
  )
}

export default ProfileCard