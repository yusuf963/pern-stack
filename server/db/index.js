import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();


export const sqlClient = new pg.Client(process.env.postgresURI);

sqlClient.connect(function (err) {
    if (err) {
        return console.error('could not connect to postgres', err);
    }
    sqlClient.query('SELECT NOW() AS "theTime"', function (err, result) {
        if (err) {
            return console.error('error running query', err);
        }
        console.log(result.rows[0].theTime);
    });
})


























// import pg from 'pg';

// const pool = new pg.Pool({
//     username: 'vzfrryzc',
//     password: 'ZlPsgAz5d_i4e8zxuM99iY3Qdk2_BKC9',
//     host: 'surus.db.elephantsql.com',
//     port: 5432,
//     database: 'vzfrryzc'
// })

// export default pool;