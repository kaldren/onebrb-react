import React from 'react'
import ProfileCard from '../components/ProfileCard'
import { IProfile } from '../interfaces/IProfile';

import {profilesMock} from "../profiles";

type Props = {}

const DashboardScreen
 = (props: Props) => {
  return (
    <>
      <h2>DashboardScreen

      </h2>

      {profilesMock.map(profile => {

        return <ProfileCard profile={
          new class implements IProfile 
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

export default DashboardScreen
