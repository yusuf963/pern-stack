import { useQuery } from 'react-query';
import { Itodo, Ifetch } from './type';

const App: React.FC = (): JSX.Element => {
    const { data, status, isLoading, isError } = useQuery<Ifetch, Error>('todos', async () => {
        return await fetch('http://localhost:5000/').then((res) => res.json());
    });

    if (isLoading) return <div>Loading...</div>;
    if (status === 'error') return <div>Error: {isError}</div>;

    const handleBoolean = (value: boolean) => {
        if (value) return 'completed';
        return 'not completed';
    };
    const todoItem = data?.result.map((item: Itodo) => {
        return (
            <div key={item.id}>
                <p>{item.description}</p>
                <p>{handleBoolean(item.completed)}</p>
                <p>{item.created_at}</p>
            </div>
        );
    });

    return (
        <div className="App">
            {todoItem}
        </div>
    );
};

export default App;
