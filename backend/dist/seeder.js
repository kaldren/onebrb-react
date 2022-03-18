var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import dotenv from "dotenv";
import profiles from "./dist/data/profiles";
import Profile from './dist/models/profileModel';
import connectDb from './dist/config/db';
dotenv.config();
connectDb();
const importData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Profile.deleteMany();
        yield Profile.insertMany(profiles);
        console.log('Data imported'.green.inverse);
        process.exit();
    }
    catch (error) {
        console.error(`Error: ${error}`.red.inverse);
        process.exit(1);
    }
});
const destroyData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Profile.deleteMany();
        console.log('Data destroyed'.red.inverse);
        process.exit();
    }
    catch (error) {
        console.error(`Error: ${error}`.red.inverse);
        process.exit(1);
    }
});
if (process.argv[2] === '-d') {
    destroyData();
}
if (process.argv[2] === '-i') {
    importData();
}
//# sourceMappingURL=seeder.js.map