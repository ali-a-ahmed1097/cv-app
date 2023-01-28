import React from "react";
import Input from "./Input";

export default function BodyForm(props) {
    
    let title = 'Work Experience';
    let textBoxes = ['Company', 'Position', 'Start Date', 'End Date', 'Description'];
    
    if (props.which) {
        title = 'Education';
        textBoxes = ['Program', 'University', 'Start Date', 'End Date', 'Description'];
    }

    return (
        <div>
            <h2 className="form-title">{title}</h2>
            <Input inputNames={textBoxes} />
        </div>
    );
}