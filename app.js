import express from 'express';
import bodyParser from 'body-parser';
import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';
import { root } from './constants/paths.js';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded());
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(root, 'public')))

// admin routes
app.use('/admin', adminRoutes);

// public routes
app.use(shopRoutes);

// not found
app.use('/', (req, res, next) => {
    res.render('404', { docTitle: "404 not found" })
})

app.listen(PORT)
