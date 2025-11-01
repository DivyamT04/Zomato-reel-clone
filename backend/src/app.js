const express = require('express');
const cookieParser = require('cookie-parser');
let authRoutes;
try {
    authRoutes = require('./routes/auth.routes.js');
} catch (err) {
    console.error('Failed to load auth routes:', err);
    authRoutes = null;
}

const app = express();
app.use(cookieParser());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
});

// DEBUG: show what was exported from the routes file
console.log('authRoutes typeof:', typeof authRoutes);
console.log('authRoutes value:', authRoutes);

if (authRoutes && (typeof authRoutes === 'function' || (typeof authRoutes === 'object' && (authRoutes.handle || authRoutes.stack)))) {
    app.use('/api/auth', authRoutes);
} else {
    console.error('Auth routes not mounted: exported value is not a valid express router or middleware.');
}

module.exports = app;