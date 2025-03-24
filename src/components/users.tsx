import { useEffect } from 'react';
import { fetchUser, prevUser, nextUser } from '../store/store.slice';
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';

export default function Users() {
    const state = useSelector((state: RootState) => state.userReducer);
    const dispatch = useDispatch();
    useEffect(() => { 
        fetch(`https://jsonplaceholder.typicode.com/users/${state.userId}`)
            .then(response => response.json())
            .then(data => dispatch(fetchUser({ currentUser: data }))) 
            
    }, [state.userId])
    return (
        <div>
            <h1>{state.userId}</h1>
            {state.currentUser && JSON.stringify(state.currentUser)}
            <br />
            <button onClick={() => dispatch(prevUser())}>Prev</button>
            <button onClick={() => dispatch(nextUser())}>Next</button>
        </div>
    )
}