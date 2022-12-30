import express from 'express';
const router = express.Router();
import {
    getAllTodos, getOneTodo,
    createTodo, updateTodo,
    deleteTodo
} from '../controllers/todo.js';


router.get('/', getAllTodos)
    .post('/', createTodo)
router.get('/:id', getOneTodo)
    .put('/:id', updateTodo)
    .delete('/:id', deleteTodo)


export default router;