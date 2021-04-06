import { Router } from 'express';
import ImagesAvatarsController from 'controllers/Images/Avatars/ImagesAvatarsController';

const router = Router();

router.get("/getImageAvatar/:id", ImagesAvatarsController.getImageAvatar);
router.post("/updateImageAvatar/:id", ImagesAvatarsController.updateImageAvatar);

export default router;