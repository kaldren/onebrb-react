interface IProfile {
  _id: string;
  firstName: string;
  middleName: string;
  familyName: string;
  birthDate: Date;
  email: string;
  phone: string;
  description: string;
  social: any;
}

export default IProfile;
