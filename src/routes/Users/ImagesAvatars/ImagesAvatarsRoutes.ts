import { Router } from 'express';
import ImagesAvatarsController from 'controllers/Users/ImagesAvatars/ImagesAvatarsController';

const router = Router();

router.get("/:id", ImagesAvatarsController.getImageAvatar);
router.put("/:id", ImagesAvatarsController.putImageAvatar);

export default router;