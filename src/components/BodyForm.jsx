import React from "react";
import Input from "./Input";

export default function BodyForm(props) {
    const [numOfForms, setNumOfForms] = React.useState(0);
    const [tbArr, setTbArr] = React.useState([]);

    let title = 'Work Experience';
    let textBoxes = ['Company', 'Position', 'Start Date', 'End Date', 'Description'];
    
    if (props.which) {
        title = 'Education';
        textBoxes = ['Program', 'University', 'Start Date', 'End Date', 'Description'];
    }

    function handleChange(values) {
        props.handleChange({...values, to: title});
    }

    function addForm() {
        setNumOfForms(old => old + 1);
    }

    React.useEffect(() => {
        if (numOfForms > tbArr.length)
            setTbArr(prev => [...prev, {[textBoxes[0]]: '', [textBoxes[1]]: '', [textBoxes[2]]: '', [textBoxes[3]]: '', [textBoxes[4]]: ''}]);
        console.log(numOfForms, tbArr);
    }, [numOfForms]);

    const inputArr = tbArr.map((a, i) => <Input key={i} inputNames={textBoxes} handleChange={handleChange} />);

    return (
        <div>
            <h2 className="form-title">{title}</h2>
            {inputArr}
            <button type="button" onClick={addForm}>Add</button>
        </div>
    );
}