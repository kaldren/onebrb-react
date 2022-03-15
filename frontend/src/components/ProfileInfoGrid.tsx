import { profile } from 'console'
import React from 'react'
import { IProfile } from '../interfaces/IProfile'

type Props = {
  profile?: IProfile,
}

const ProfileInfoGrid = (props: Props) => {
  return (
    <div className="card-body">
      
    <div className="row">
      <div className="col-sm-3">
        <h6 className="mb-0">Full Name</h6>
      </div>
      <div className="col-sm-9 text-secondary">
        {props.profile?.firstName} {props.profile?.middleName} {props.profile?.familyName}
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-sm-3">
        <h6 className="mb-0">Email</h6>
      </div>
      <div className="col-sm-9 text-secondary">
        {props.profile?.email}
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-sm-3">
        <h6 className="mb-0">Mobile</h6>
      </div>
      <div className="col-sm-9 text-secondary">
        {props.profile?.phone}
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-sm-3">
        <h6 className="mb-0">Address</h6>
      </div>
      <div className="col-sm-9 text-secondary">
        Bay Area, San Francisco, CA
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-sm-3">
        <h6 className="mb-0">About</h6>
      </div>
      <div className="col-sm-9 text-secondary">
        {props.profile?.description}
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-sm-12">
        <a className="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
      </div>
    </div>
  </div>
  )
}

export default ProfileInfoGrid