import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import router from './views/routes.js';
import dotenv from 'dotenv';
dotenv.config();

// sqlClient.query("INSERT INTO todo (description, completed, creaeted_at) values( 'Play Tennis', false, Now())", function (err, result) {
//   if (err) {
//     return console.error('error running query', err);
//   }
//   console.log(result.rows[0]);
// })

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
