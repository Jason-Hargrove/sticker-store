require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 3000;

// ===== Authentication =====
const { hash, register, login } = require('./controllers/auth');

// ===== Setup Data =====
const db = require('./models/db');
db.once('connected', () => {
  console.log('Connected to MongoDB')
});

// ===== Middleware ======
// View Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
// res.locals
app.use((req, res, next) => {
    res.locals.data = {}
    next()
});
// Needed for forms.
app.use(express.urlencoded({ extended: true }));
// ===== To process json data =====
app.use(express.json());
// ?_method at the end of a url.
app.use(methodOverride('_method'));
// Treats 'public' like the root.
app.use(express.static('public'));
// Will only run for /stickers. Go to routeController and do that stuff.
app.use('/stickers', require('./controllers/routeController'));

// ===== Authentication =====
app.post('/login', login)
app.post('/register', register)
// app.use('/register', require('./controllers/userController'));

app.listen(PORT, () => {
  console.log('We\'re listening on PORT', PORT)
});
