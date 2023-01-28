import React from "react";
import Personal from "./components/Personal";
import BodyForm from "./components/BodyForm";
import './App.css';

export default function App() {
    return (
        <div className='app'>
            <div className="input-boxes">
                <form onSubmit={() => console.log('he')}>
                    <Personal />
                    <BodyForm which={0} />
                    <BodyForm which={1} />
                </form>
            </div>
            <div className="generated-output">

            </div>
        </div>
    );
}