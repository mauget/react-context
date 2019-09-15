import React from "react";
import Counter from "./Counter";

export default function Page1() {
    return (
        <div className="container">
            <h1>Materialize, state hook, and context</h1>
            <div className="card-panel hoverable">
                <p class="flow-text">To be or not to be ...</p>
                <Counter/>
            </div>
        </div>
    )
}
