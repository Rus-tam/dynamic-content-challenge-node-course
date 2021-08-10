const path = require('path');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');

const app = express();
const port = process.env.PORT || 3000;

//Define path for Express config
const publicDirectoryPath = path.join(__dirname, '/public');
const viewPath = path.join(__dirname, '/views');
const layoutPath = path.join(__dirname, '/views/layouts');

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(layoutPath);

app.use(bodyParser.urlencoded({extended: false}));
app.use(indexRouter.routes);
app.use(userRouter);



app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});