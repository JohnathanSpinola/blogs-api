require('express-async-errors');
const express = require('express');

const errorMiddleware = require('./middlewares/error.middleware');
const loginRouter = require('./routes/login.routes');
const userRouter = require('./routes/user.routes');
const categoriesRouter = require('./routes/categories.routes');
const postRouter = require('./routes/post.routes');

// ...
const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);
app.use(errorMiddleware);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
