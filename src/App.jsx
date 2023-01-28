import React from "react";
import Personal from "./components/Personal";
import BodyForm from "./components/BodyForm";
import Heading from "./components/Heading";
import './App.css';
import GenerateBody from "./components/GenerateBody";

export default function App() {
    const [pVals, setPVals] = React.useState({});
    const [bVals, setBVals] = React.useState({});

    function getPersonalChange(values) {
        setPVals(values);
    }

    function getBodyChange(values, education) {
        setBVals([education, ...values]);
    }

    return (
        <div className='app'>
            <div className="input-boxes">
                <form>
                    <Personal handleChange={getPersonalChange} />
                    <BodyForm education={false} handleChange={getBodyChange} />
                    <BodyForm education={true} handleChange={getBodyChange} />
                </form>
            </div>
            <div className="generated-output">
                <Heading replacement={pVals}/>
                <GenerateBody education={false} replacement={bVals} />
                <GenerateBody education={true} replacement={bVals} />
            </div>
        </div>
    );
}