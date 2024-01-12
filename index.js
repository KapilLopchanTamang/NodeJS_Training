const express = require('express');
const { testFunction } = require('./controllers/testController');
const app = express();
const db = require('./model/index.js');

db.sequelize.sync({ force: false }).catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Hello world from / route' });
});

app.get('/about', testFunction);

const createRoutes = require('./routes/blog.js');

app.use('/api', createRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});
