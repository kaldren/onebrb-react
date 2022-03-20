import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { listProfile } from '../actions/profileActions';
import ProfileInfoGrid from '../components/ProfileInfoGrid';
import ProfileSocials from '../components/ProfileSocials';
import { IProfile } from '../interfaces/IProfile';

const ProfileScreen = () => {
  const { profileId } = useParams();

  const dispatch = useDispatch();

  const profileSingle = useSelector(
    (state: RootStateOrAny) => state.profileSingle
  );

  const { loading, error, profile } = profileSingle;

  useEffect(() => {
    dispatch(listProfile(profileId || ''));
  }, [dispatch]);

  return (
    <div className='container'>
      <div className='main-body'>
        <div className='row gutters-sm'>
          <div className='col-md-4 mb-3'>
            <div className='card'>
              <div className='card-body'>
                <div className='d-flex flex-column align-items-center text-center'>
                  <img
                    src='https://bootdey.com/img/Content/avatar/avatar7.png'
                    alt='Admin'
                    className='rounded-circle'
                    width={150}
                  />
                  <div className='mt-3'>
                    <h4>John Doe</h4>
                    <p className='text-secondary mb-1'>Full Stack Developer</p>
                    <p className='text-muted font-size-sm'>
                      Bay Area, San Francisco, CA
                    </p>
                    <button className='btn btn-primary'>Follow</button>
                    <button className='btn btn-outline-primary'>Message</button>
                  </div>
                </div>
              </div>
            </div>
            <ProfileSocials profile={profile} />
          </div>
          <div className='col-md-8'>
            <div className='card mb-3'>
              {/* <ProfileInfoGrid profile={profile} /> */}
            </div>
            <div className='row gutters-sm'>
              <div className='col-sm-6 mb-3'>
                <div className='card h-100'>
                  <div className='card-body'>
                    <h6 className='d-flex align-items-center mb-3'>
                      <i className='material-icons text-info mr-2'>
                        assignment
                      </i>
                      Project Status
                    </h6>
                    <small>Web Design</small>
                    <div className='progress mb-3' style={{ height: '5px' }}>
                      <div
                        className='progress-bar bg-primary'
                        role='progressbar'
                        style={{ width: '80%' }}
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <small>Website Markup</small>
                    <div className='progress mb-3' style={{ height: '5px' }}>
                      <div
                        className='progress-bar bg-primary'
                        role='progressbar'
                        style={{ width: '72%' }}
                        aria-valuenow={72}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <small>One Page</small>
                    <div className='progress mb-3' style={{ height: '5px' }}>
                      <div
                        className='progress-bar bg-primary'
                        role='progressbar'
                        style={{ width: '89%' }}
                        aria-valuenow={89}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <small>Mobile Template</small>
                    <div className='progress mb-3' style={{ height: '5px' }}>
                      <div
                        className='progress-bar bg-primary'
                        role='progressbar'
                        style={{ width: '55%' }}
                        aria-valuenow={55}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <small>Backend API</small>
                    <div className='progress mb-3' style={{ height: '5px' }}>
                      <div
                        className='progress-bar bg-primary'
                        role='progressbar'
                        style={{ width: '66%' }}
                        aria-valuenow={66}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 mb-3'>
                <div className='card h-100'>
                  <div className='card-body'>
                    <h6 className='d-flex align-items-center mb-3'>
                      <i className='material-icons text-info mr-2'>
                        assignment
                      </i>
                      Project Status
                    </h6>
                    <small>Web Design</small>
                    <div className='progress mb-3' style={{ height: '5px' }}>
                      <div
                        className='progress-bar bg-primary'
                        role='progressbar'
                        style={{ width: '80%' }}
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <small>Website Markup</small>
                    <div className='progress mb-3' style={{ height: '5px' }}>
                      <div
                        className='progress-bar bg-primary'
                        role='progressbar'
                        style={{ width: '72%' }}
                        aria-valuenow={72}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <small>One Page</small>
                    <div className='progress mb-3' style={{ height: '5px' }}>
                      <div
                        className='progress-bar bg-primary'
                        role='progressbar'
                        style={{ width: '89%' }}
                        aria-valuenow={89}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <small>Mobile Template</small>
                    <div className='progress mb-3' style={{ height: '5px' }}>
                      <div
                        className='progress-bar bg-primary'
                        role='progressbar'
                        style={{ width: '55%' }}
                        aria-valuenow={55}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <small>Backend API</small>
                    <div className='progress mb-3' style={{ height: '5px' }}>
                      <div
                        className='progress-bar bg-primary'
                        role='progressbar'
                        style={{ width: '66%' }}
                        aria-valuenow={66}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
