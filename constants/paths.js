import path from 'path';

const root = path.dirname(process.argv[1]);
const productsData = path.join(root, 'data', 'products.data.js')

export { root, productsData }