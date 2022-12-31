import {
    useState,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useId,
    useReducer,
    useContext,
    useLayoutEffect,
    useDebugValue,
    useDeferredValue,
    useImperativeHandle,
    useInsertionEffect,
    useSyncExternalStore,
    useTransition,
} from 'react';
import { useQuery } from 'react-query';
import { Itodo, Ifetch } from './type';
import Todo from './components/TodoItem';

const fetchDAta = async (): Promise<Ifetch> => {
    return await (await fetch('http://localhost:5000/')).json();
    // return await fetch('http://localhost:5000/').then((res) => res.json());
};

const App: React.FC = (): JSX.Element => {
    const { data, status, isLoading, isError } = useQuery<Ifetch, Error>(['todos', 1], fetchDAta);
    console.log(data);
    if (isLoading) return <div>Loading...</div>;
    if (status === 'error') return <div>Error: {isError}</div>;

    const todoItem = data?.result.map((item: Itodo) => {
        return Todo(item);
    });

    return <div className="App">{todoItem}</div>;
};

// useEffect(() => {
//     console.log('useEffect');
// },[]);
export default App;
