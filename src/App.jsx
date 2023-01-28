import React from "react";
import Personal from "./components/Personal";
import BodyForm from "./components/BodyForm";
import Heading from "./components/Heading";
import './App.css';

export default function App() {
    const [pVals, setPVals] = React.useState({});
    const [bVals, setBVals] = React.useState({});

    function getPersonalChange(values) {
        setPVals(values);
    }

    function getBodyChange(values, which) {
        setBVals([which, ...values]);
    }

    return (
        <div className='app'>
            <div className="input-boxes">
                <form>
                    <Personal handleChange={getPersonalChange} />
                    <BodyForm which={0} handleChange={getBodyChange} />
                    <BodyForm which={1} handleChange={getBodyChange} />
                </form>
            </div>
            <div className="generated-output">
                <Heading replacement={pVals}/>
            </div>
        </div>
    );
}