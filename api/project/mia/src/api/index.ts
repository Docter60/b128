import express from 'express';

import topModerators from './topModerators';
import topSubreddits from './topSubreddits';
import moderatorQuery from './moderatorQuery';
import subredditQuery from './subredditQuery';

const router = express.Router();
router.use('/topModerators', topModerators);
router.use('/topSubreddits', topSubreddits);
router.use('/moderatorQuery', moderatorQuery);
router.use('/subredditQuery', subredditQuery);

export default router;