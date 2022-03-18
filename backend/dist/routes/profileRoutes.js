import Profile from "../models/profileModel.js";
import express from "express";
import profiles from "../data/profiles.js";
const router = express.Router();
router.get('/', (req, res) => {
    const profile = Profile.find({});
    res.json(profiles);
});
router.get('/:id', (req, res) => {
    const profile = profiles.find(p => p._id === req.params.id);
    res.json(profile);
});
export default router;
//# sourceMappingURL=profileRoutes.js.map