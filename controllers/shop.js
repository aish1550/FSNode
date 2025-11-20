import { Product } from '../models/product.js'

export const shopController = (req, res, next) => {
    const products = Product.fetchAllProducts()
    res.render('shop', { prods: products, docTitle: 'Shop' })
}