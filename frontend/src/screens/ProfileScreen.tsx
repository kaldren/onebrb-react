import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IProfile } from '../interfaces/IProfile';

const ProfileScreen = () => {

  const {profileId} = useParams();
  const [profile, setProfile] = useState<IProfile | undefined>(undefined);

  useEffect(() => {
    const fetchProfile = async () => {
      const {data} = await axios.get(`/api/profiles/${profileId}`);

      setProfile(data);
    }

    fetchProfile();
  }, []);

  return (
    <>
      <p>Profile: {profile?.firstName}</p>
    </>
  )
}

export default ProfileScreen