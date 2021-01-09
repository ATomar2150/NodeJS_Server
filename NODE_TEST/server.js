//IMPORTING LIBRARIES
const   http = require('http');
const   express = require('express');
const   bodyParser = require('body-parser');
const   fileUpload = require('express-fileupload');
const   cookieSession = require('cookie-session');
//IMPORTING ROUTES
const addressRoute = require('./routes/address');
const cartRoute = require('./routes/cart');
const commentRoute = require('./routes/comment');
const orderRoute = require('./routes/order');
const productRoute = require('./routes/product');
const userRoute = require('./routes/user');

//DB CONNECTION
const db = require('./db');
db.init();

//CONFIGURE SERVER
const   app =    new express();
module.exports.express = app;
var server = http.createServer(app);

//USING LIBRARIS: FILEUPLOAD, JSON AND URL PARSING CAPABILITY
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());

//USING LIBRARIS: SESSION HANDLING
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}));

//START SERVER
server.listen('3000');

//USING ROUTES
app.use('/',        productRoute);
app.use('/address', addressRoute);
app.use('/cart',    cartRoute);
app.use('/comment', commentRoute);
app.use('/order',   orderRoute);
app.use('/product', productRoute);
app.use('/user',    userRoute);