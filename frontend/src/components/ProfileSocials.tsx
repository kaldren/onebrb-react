import React from 'react';
import { IProfile } from '../interfaces/IProfile';

type Props = {
  profile?: IProfile;
};

const ProfileSocials = (props: Props) => {
  return (
    <div className='card mt-3'>
      <ul className='list-group list-group-flush'>
        {props.profile?.social?.map((site: any) => (
          <li
            key={site._id}
            className='list-group-item d-flex justify-content-between align-items-center flex-wrap'
          >
            <h6 className='mb-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-globe mr-2 icon-inline'
              >
                <circle cx={12} cy={12} r={10} />
                <line x1={2} y1={12} x2={22} y2={12} />
                <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' />
              </svg>
              {site.name}
            </h6>
            <span className='text-secondary'>{site.url}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileSocials;
