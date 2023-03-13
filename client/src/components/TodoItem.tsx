import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { Drawer } from '@mui/material';
import { useMutation, useQuery } from 'react-query';
import { Itodo,Ifetch } from '../type';


const Todo = (item: Itodo) => {
    const { id, description, created_at, completed } = item;
    
    const handleBoolean = (value: boolean) => {
        if (value) return 'completed';
        return 'not completed';
    };

    const getOneTodo = async ():Promise<Ifetch> => {
        return await (await fetch(`http://localhost:5000/${1}`)).json();
    };  
    const { data, status, isLoading, error } = useQuery<Ifetch, Error>(['todos', 1], getOneTodo);



    const deleteTodo = async(id: string) => {
        await fetch(`http://localhost:5000/${id}`, {
            method: 'DELETE',
        });
        console.log('delete');
    };

    const data1 = {description: 'test', completed: false};
    const PostTodo = async ()=>{
        await fetch('http://localhost:5000/',{headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data1),
            method: 'POST',
        });
        console.log('post');
    };



    // const { data, status, isLoading, error } = useQuery<Itodo, Error>(['todos', id], getOneTodo);


    // const mutation =  useMutation('delete-todos', deleteTodo);

    return (
        <div key={id}>
            <Button onClick={()=> PostTodo()} size="small" color="warning" variant="text" aria-label="outlined primary button group">
                <AddIcon />
            </Button>
            <div>
                <p>{id}</p>
                <p>{description}</p>
                <p>{created_at}</p>
                <p>{handleBoolean(completed)}</p>
                <Button size="small" color="warning" variant="text" aria-label="outlined primary button group">
                    Delete
                </Button>
                <Fab color="primary" aria-label="add">
                    -
                </Fab>
                <Fab onClick={()=> deleteTodo(id)} color="secondary" aria-label="edit">
                    <EditIcon />
                </Fab>
                <Fab onClick={()=> getOneTodo(id)} color="secondary" aria-label="edit">
                    Details
                </Fab>
            </div>
        </div>
    );
};

export default Todo;
