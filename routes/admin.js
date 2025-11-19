import express from 'express';
import path from 'path';
import { root } from '../constants/paths.js';
const router = express.Router();

export const products = []

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(root, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/')
});

export default router