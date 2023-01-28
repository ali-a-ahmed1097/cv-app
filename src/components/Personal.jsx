import React from "react";
import Input from "./Input";

export default function Personal(props) {
    const textBoxes = ['Name', 'Title', 'Phone', 'Email', 'Location'];

    function handleChange(values) {
        props.handleChange({...values, to: 'Personal'});
    }

    return (
        <div>
            <h2 className="form-title">Personal Details</h2>
            <Input
                inputNames={textBoxes}
                handleChange={handleChange}
            />
        </div>
    );
}