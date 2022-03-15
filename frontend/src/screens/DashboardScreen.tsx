import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProfileCard from '../components/ProfileCard'
import { IProfile } from '../interfaces/IProfile';

type Props = {}

const DashboardScreen = (props: Props) => {

  const [profiles, setProfiles] = useState<IProfile[] | undefined>(undefined);

  useEffect(() => {
    const fetchProfiles = async () => {
      const {data} = await axios.get('/api/profiles');

      setProfiles(data);
    }

    fetchProfiles();
  }, [])

  return (
    <>
      <h2>Dashboard</h2>
      <ul>
        {profiles?.map(profile => {
          
          let profileTemp = new class implements IProfile 
          {
            id = profile.id;
            firstName = profile.firstName;
            middleName = profile.middleName;
            familyName = profile.familyName;
            birthDate = profile.birthDate;
            email = profile.email;
            phone = profile.phone;
            description = profile.description;
            social = profile.social;
          }

          return <li key={profileTemp.id}><ProfileCard profile={profileTemp} /></li>

        })}

      </ul>
    </>
  )
}

export default DashboardScreen
