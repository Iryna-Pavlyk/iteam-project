import { Router } from 'express';

const router = Router();

router.get('/', getJobsController);
router.get('/:id', getJobByIdController);

export default router;
