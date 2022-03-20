import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import ProfileCard from '../components/ProfileCard';
import { IProfile } from '../interfaces/IProfile';
import { listProfiles } from '../actions/profileActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

type Props = {};

const DashboardScreen = (props: Props) => {
  const dispatch = useDispatch();

  const profileList = useSelector((state: RootStateOrAny) => state.profileList);

  const { loading, error, profiles } = profileList;

  useEffect(() => {
    dispatch(listProfiles());
  }, [dispatch]);

  return (
    <>
      <h2>Dashboard</h2>
      {loading === false && error === undefined ? (
        <ul>
          {profiles.map((profile: IProfile) => {
            let data: IProfile = {
              _id: profile._id,
              firstName: profile.firstName,
              middleName: profile.middleName,
              familyName: profile.familyName,
              birthDate: profile.birthDate,
              email: profile.email,
              phone: profile.phone,
              description: profile.description,
              social: profile.social,
            };

            return (
              <li key={profile._id}>
                <ProfileCard profile={data} />
              </li>
            );
          })}
        </ul>
      ) : loading === true ? (
        <Loader />
      ) : (
        <Message>{error}</Message>
      )}
    </>
  );
};

export default DashboardScreen;
