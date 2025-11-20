import { products } from '../models/product.js'

export const shopController = (req, res, next) => {
    console.warn("shop products", products)
    res.render('shop', { prods: products, docTitle: 'Shop' })
}