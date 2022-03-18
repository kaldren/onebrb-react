import mongoose from 'mongoose';
const { Schema } = mongoose;
const profileSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
    },
    familyName: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    social: {
        type: [
            {
                name: { type: String, required: false },
                url: { type: String, required: false },
            }
        ],
    }
}, { timestamps: true });
const Profile = mongoose.model('Profile', profileSchema);
export default Profile;
//# sourceMappingURL=profileModel.js.map