const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const sassMiddleware = require('node-sass-middleware');
const methodOverride = require('method-override');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({path: path.resolve(__dirname, '.env')});
const routes = require('./routes/handlers.js');

const app = express();
const hbs = exphbs.create({
    extname: '.hbs'
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// Configure Handlebars
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// Configure Sass to css
app.use(sassMiddleware({
    src: path.join(__dirname, 'scss'),
    dest: path.join(__dirname, 'public/css'),
    prefix: '/css',
    debug: true
}));

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(routes);

// 404 - Req url not found
app.use((req, res, next) => {
    return res.status(404).json({ message: `Route ${req.url} Not found.` });
});

// 500 - Any server error
app.use((err, req, res, next) => {
    return res.status(500).json({ error: err });
});

// port
const PORT = process.env.APP_PORT;

// Start server
app.listen(PORT, () => {
   console.log(`Server is starting on port ${PORT}`);
});
