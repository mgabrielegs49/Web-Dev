import { AuthController } from "../controllers/auth.controller.js";
import * as express from 'express'

const router = express.Router();

const authController = new AuthController();

router.post('/login', authController.login);

export default router;