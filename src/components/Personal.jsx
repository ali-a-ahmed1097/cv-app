import React from "react";
import Input from "./Input";

export default function Personal(props) {
    const textBoxes = ['Name', 'Title', 'Phone', 'Email', 'Location', 'Description'];
    const [values, setValues] = React.useState({'Name': '', 'Title': '', 'Phone': '', 'Email': '', 'Location': '', 'Description': ''});

    function handleChange(event) {
        const {name, value} = event.target;
        setValues(prev => ({...prev, [name]: value}));
    }

    React.useEffect(() => {
        props.handleChange(values);
    }, [values]);

    return (
        <div>
            <h2 className="form-title">Personal Details</h2>
            <Input
                inputNames={textBoxes}
                values={values}
                handleChange={handleChange}
            />
        </div>
    );
}