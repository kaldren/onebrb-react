var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import asyncHandler from "express-async-handler";
import Profile from "../models/profileModel.js";
const router = express.Router();
// @desc Fetch all profiles
// @route GET /api/profiles
// @access Public
router.get('/', asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allProfiles = yield Profile.find({});
    res.json(allProfiles);
})));
// @desc Fetch single product
// @route GET /api/profiles/:id
// @access Public
router.get('/:id', asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const profile = yield Profile.findById(req.params.id);
    if (profile) {
        res.json(profile);
    }
    res.status(404).json({ message: "Profile not found!" });
})));
export default router;
//# sourceMappingURL=profileRoutes.js.map