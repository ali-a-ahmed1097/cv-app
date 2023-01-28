import React from "react";

export default function Input(props) {
    const inputsArr = props.inputNames.map((nm, key) => (
        <input key={key} type='text' name={nm} placeholder={nm} value={props.values[nm]} onChange={props.handleChange} />
    ));

    return (
        <div className="internal-form">
            {inputsArr}
        </div>
    );
}