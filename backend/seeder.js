import mongoose from "mongoose";
import dotenv from "dotenv";
import profiles from"./dist/data/profiles.js";
import Profile from './dist/models/profileModel.js';
import connectDb from './dist/config/db.js';
import colors from "colors";

dotenv.config();

connectDb();

const importData = async () => {
    try {
        await Profile.deleteMany();

        await Profile.insertMany(profiles);

        console.log('Data imported'.green.inverse);

        process.exit();
    } catch (error) {
        console.error(`Error: ${error}`.red.inverse);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Profile.deleteMany();

        console.log('Data destroyed'.red.inverse);

        process.exit();
    } catch (error) {
        console.error(`Error: ${error}`.red.inverse);
        process.exit(1);
    }
}

if (process.argv[2] === '-d') {
    destroyData();
}
if (process.argv[2] === '-i') {
    importData();
}