import express from 'express';
import asyncHandler from 'express-async-handler';
import Profile from '../models/profileModel.js';
import profiles from '../data/profiles.js';

const router = express.Router();

// @desc Fetch all profiles
// @route GET /api/profiles
// @access Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const allProfiles = await Profile.find({});

    res.json(allProfiles);
  })
);

// @desc Fetch single product
// @route GET /api/profiles/:id
// @access Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const profile = await Profile.findById(req.params.id);

    if (profile) {
      res.json(profile);
    }

    res.status(404);
    throw new Error('Profile not found.');
  })
);

export default router;
