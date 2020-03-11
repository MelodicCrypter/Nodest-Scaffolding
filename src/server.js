/**
 * Nodest is created using ES6+ syntax and transpiled by Babel-Node
 */

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import hpp from 'hpp';
import compression from 'compression';

// Util
import shouldCompress from './util/shouldCompress';

// Routes here

// Instance of of Express
const app = express();
// App will run on 3000 during development
// But it will automatically set if deployed: e.g Heroku
const port = process.env.PORT || 3000;

// Middlewares: Security
app.use(cors({ origin: ['http://localhost:8000', /\.netlify\.com$/] })); // Cross-Origin
app.use(helmet()); // Security for HTTP requests
app.use(compression({ filter: shouldCompress, threshold: 0 }));
app.use(express.json({ limit: '300kb' })); // Allows JSON but with limit
app.use(hpp()); // Protection against Paramenter Pollution Attacks
app.use(express.urlencoded());

// Load API routes
app.get('/', (req, res) => {
    res.send('Thank you for using Nodest Scaffolding!');
});

// Running the server
app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});
