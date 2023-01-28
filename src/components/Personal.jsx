import React from "react";
import Input from "./Input";

export default function Personal() {
    const textBoxes = ['Name', 'Title', 'Phone', 'Email', 'Location'];

    return (
        <div>
            <h2 className="form-title">Personal Details</h2>
            <Input
                inputNames={textBoxes}
            />
        </div>
    );
}