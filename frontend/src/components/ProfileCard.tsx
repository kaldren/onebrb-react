import React, {useState} from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { IProfile } from '../interfaces/IProfile';

type Props = {
    profile: IProfile,
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
            <Link to={`/profiles/${props.profile._id}`}>
              <Button variant="primary">Open profile</Button>
            </Link>
        </Card.Body>
        </Card>
    </>
  )
}

export default ProfileCard