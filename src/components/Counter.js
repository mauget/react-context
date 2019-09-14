import React, {useState, useContext} from "react";
import {AppContext} from '../App';

export default function Counter() {
    const [count, setCount] = useState(0);
    const date = useContext(AppContext);

    function increment() {
        setCount(count + 1);
    }

    function deccrement() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <>
            <p>... on date {date} ...</p>
            <p>... the value is {count}</p>
            <p>
                <button onClick={increment}>Increment</button>
            </p>
            <p>
                <button onClick={deccrement}>Decrement</button>
            </p>
            <p>
                <button onClick={reset}>Reset</button>
            </p>
        </>
    );
}
