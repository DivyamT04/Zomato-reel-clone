require('dotenv').config();
const app = require('./src/app.js');
const connectDB = require('./src/db/db.js');

connectDB();

console.log('resolved app path:', require.resolve('./src/app.js'));
console.log('app typeof:', typeof app);
console.log('app value:', app);
console.log('app.listen:', app && app.listen);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})