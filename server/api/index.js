import { Router } from 'express';

const router = new Router();

router.use((req, res, next) => {
  next();
});

export default router;
