import React from 'react'
import ProfileCard from '../components/ProfileCard'
import { Profile } from '../interfaces/Profile';

import {profilesMock} from "../profiles";

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <>
      <h2>Dashboard</h2>

      {profilesMock.map(profile => {

        return <ProfileCard profile={
          new class implements Profile 
          {
            id = profile.id;
            firstName = profile.firstName;
            middleName = profile.middleName;
            familyName = profile.familyName;
            birthDate = profile.birthDate;
            email = profile.email;
            phone = profile.phone;
            description = profile.description;
          }
      } />

      })}
    </>
  )
}

export default Dashboard