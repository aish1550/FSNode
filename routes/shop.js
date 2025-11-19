import express from 'express';
import { products } from './admin.js';
const router = express.Router();

router.get('/', (req, res, next) => {
    console.warn("shop products", products)
    res.render('shop', { prods: products, docTitle: 'Shop' })
});

export default router