import { sqlClient } from '../db/index.js';

const table = '"public"."todo"'


const getTime = () => {
    sqlClient.query('SELECT NOW() AS "theTime"', function (err, result) {
        if (err) {
            return console.error('error running query', err);
        }
        console.log(result.rows[0].theTime);
    });



}

const getAllTodos = (_req, res, next) => {

    sqlClient.query('SELECT * FROM "public"."todo"', function (err, result) {
        if (err) {
            return console.error('error running query', err);
        }
        if (result.rowCount === 0) return res.json({ message: 'Todo not found' })

        return res.json({ result: result.rows, message: 'Todos fetched successfully', success: true });
        // client.end();
    });




}

const getOneTodo = (req, res, next) => {
    const id = req.params.id;
    if (!id.match(/^[0-9]+$/)) {
        return res.json({ message: 'Todo not found' })
    }

    sqlClient.query('SELECT * FROM "public"."todo" WHERE id= $1 ', [id], function (err, result) {
        if (err) { return console.error('error running query', err) }
        if (result.rowCount === 0) return res.json({ message: 'Todo not found' })

        return res.json(result.rows);
        // client.end();
    });




}

const createTodo = (req, res, next) => {
    const { description, completed } = req.body;

    sqlClient.query('INSERT INTO "public"."todo" (description, completed, creaeted_at) values($1, $2, now())',
        [description, completed], function (err, result) {
            if (err) {
                return console.error('error running query', err);
            }

            return res.json({ message: 'Todo created successfully', success: true });
            // client.end();
        });



}

const updateTodo = (req, res, next) => {
    const id = req.params.id;
    if (!id.match(/^[0-9]+$/)) {
        return res.json({ message: 'Todo not found' })
    }

    const { description, completed } = req.body;

    sqlClient.query('UPDATE "public"."todo" SET description = $1, completed = $2 WHERE id= $3',
        [description, completed, id], function (err, result) {
            if (err) {
                return console.error('error running query', err);
            }
            sqlClient.query('SELECT * FROM "public"."todo" WHERE id = $1', [id], function (err, result) {
                if (err) {
                    return console.error('error running query', err);
                }
                if (result.rowCount === 0) return res.json({ message: 'Todo not found' })
                return res.json({ result: result.rows, message: 'Todo updated successfully', success: true });

            })
        });



}

const deleteTodo = (req, res, next) => {
    const id = req.params.id;
    if (!id.match(/^[0-9]+$/)) {
        return res.json({ message: 'Todo not found' })
    }

    sqlClient.query('DELETE FROM "public"."todo" WHERE id= $1', [id], function (err, result) {
        if (err) {
            return console.error('error running query', err);
        }
        if (result.rowCount === 0) return res.json({ message: 'Todo not found' })

        return res.json({ message: 'Todo deleted successfully' });
    });




}


export { getAllTodos, getOneTodo, createTodo, updateTodo, deleteTodo }
