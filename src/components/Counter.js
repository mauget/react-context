import React, {useState, useContext} from "react";
import {AppContext} from '../App';

export default function Counter() {
    const [count, setCount] = useState(2000);
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
            <p class="flow-text">... on date {date} ...</p>
            <p class="flow-text">... the value is {count}</p>
            <p class="flow-text">
                <button className="btn-small" onClick={increment}>Increment value</button>
            </p>
            <p class="flow-text">
                <button className="btn-small" onClick={deccrement}>Decrement value</button>
            </p>
            <p class="flow-text">
                <button className="btn-small" onClick={reset} disabled={count === 0}>Reset value</button>
            </p>
        </>
    );
}
