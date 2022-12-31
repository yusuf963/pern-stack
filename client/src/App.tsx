import { useQuery } from 'react-query';
import { Itodo, Ifetch } from './type';
import Todo from './components/TodoItem';



const App: React.FC = (): JSX.Element => {
    const { data, status, isLoading, isError } = useQuery<Ifetch, Error>(['todos',1], async () => {
        return await fetch('http://localhost:5000/').then((res) => res.json());
    });

    if (isLoading) return <div>Loading...</div>;
    if (status === 'error') return <div>Error: {isError}</div>;

    const todoItem = data?.result.map((item: Itodo) => {
        return (
            Todo(item)
        );
    });

    return (
        <div className="App">
            {todoItem}
        </div>
    );
};

export default App;
