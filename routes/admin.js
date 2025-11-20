import express from 'express';
import { getAddProductController, postProductController } from '../controllers/products.js';

const router = express.Router();

router.get('/add-product', getAddProductController);

router.post('/add-product', postProductController);

export default router