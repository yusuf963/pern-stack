import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import router from './views/routes.js';
import dotenv from 'dotenv';
dotenv.config();

// make use of sequelize for building sql schemas @  https://sequelize.org/

const app = express();
app.use(cors())
// app.use(bodyParser.json());
app.use(express.json()); // for parsing application/json instead of bodyParser
app.use(express.urlencoded({ extended: false }));
app.use(router)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
