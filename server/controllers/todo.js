

const getAllTodos = (req, res, next) => {

    sqlClient.query('SELECT * FROM "public"."todo"', function (err, result) {
        if (err) {
            return console.error('error running query', err);
        }
        console.log(result.rows[0]);
        // retunr all rows
        // client.end();
    });

}

const getOneTodo = (req, res, next) => {
    const id = req.params.id;

    sqlClient.query('SELECT * FROM "public"."todo" WHERE id= $1 ', [id], function (err, result) {
        if (err) {
            return console.error('error running query', err);
        }
        console.log(result.rows);
        // retunr all rows
        // client.end();
    });

}

const createTodo = (req, res, next) => {
    const { description, completed } = req.body;

    sqlClient.query('INSERT INTO "public"."todo" (description, completed, created_at) values( $1, $2, Now())', [description, completed], function (err, result) {
        if (err) {
            return console.error('error running query', err);
        }
        console.log(result.rows[0]);
        // retunr all rows
        // client.end();
    });

}

const updateTodo = (req, res, next) => {
    const id = req.params.id;
    const { description, completed } = req.body;

    sqlClient.query('UPDATE "public"."todo" SET description = $1, completed = $2 WHERE id= $3', [description, completed, id], function (err, result) {
        if (err) {
            return console.error('error running query', err);
        }
        console.log(result.rows[0]);
    });

}

const deleteTodo = (req, res, next) => {
    const id = req.params.id;

    sqlClient.query('DELETE FROM "public"."todo" WHERE id= $1', [id], function (err, result) {
        if (err) {
            return console.error('error running query', err);
        }
        console.log(result.rows[0]);
    });
}


export { getAllTodos, getOneTodo, createTodo, updateTodo, deleteTodo }
