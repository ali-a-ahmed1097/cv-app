import React from "react";
import Personal from "./components/Personal";
import BodyForm from "./components/BodyForm";
import Heading from "./components/Heading";
import './App.css';

export default function App() {
    const [vals, setVals] = React.useState({to: '', num: 0});

    function getChange(values) {
        setVals(values);
    }

    return (
        <div className='app'>
            <div className="input-boxes">
                <form>
                    <Personal handleChange={getChange} />
                    {/* <BodyForm which={0} handleChange={getChange} />
                    <BodyForm which={1} handleChange={getChange} /> */}
                </form>
            </div>
            <div className="generated-output">
                <Heading replacement={vals}/>
            </div>
        </div>
    );
}