import { Router } from "express";
import NoddleRoutes from "routes/Services/Noddle/NoddleRoutes";

const router = Router();

router.use("/noddle", NoddleRoutes);

export default router;
