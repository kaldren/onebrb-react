import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { Profile } from '../interfaces/Profile';

type Props = {
    profile?: Profile,
}

const ProfileCard = (props: Props) => {

    let {profileId} = useParams();

  return (
    <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>{props.profile?.firstName} {props.profile?.middleName} {props.profile?.familyName}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    </>
  )
}

export default ProfileCard