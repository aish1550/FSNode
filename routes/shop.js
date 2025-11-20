import express from 'express';
import { shopController } from '../controllers/shop.js';

const router = express.Router();

router.get('/', shopController);

export default router