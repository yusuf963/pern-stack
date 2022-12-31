import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { Drawer } from '@mui/material';


import { Itodo } from '../type';

const Todo = (item: Itodo) => {
    const { id, description, created_at, completed } = item;

    const handleBoolean = (value: boolean) => {
        if (value) return 'completed';
        return 'not completed';
    };

    return (
        <div key={id}>
            <Drawer>
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
                <Fab onClick={()=> console.log('hi')} color="secondary" aria-label="edit">
                    <EditIcon />
                </Fab>
            </Drawer>
        </div>
    );
};

export default Todo;
