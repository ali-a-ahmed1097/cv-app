import React from "react";
import Input from "./Input";

export default function BodyForm(props) {
    const [numOfForms, setNumOfForms] = React.useState(0);
    const [valuesArr, setValuesArr] = React.useState([]);

    React.useEffect(() => {
        props.handleChange(valuesArr, props.education);
    }, [valuesArr]);

    let title = 'Work Experience';
    let textBoxes = ['Company', 'Position', 'Start Date', 'End Date', 'Description'];

    if (props.education) {
        title = 'Education';
        textBoxes = ['Program', 'Institution', 'Start Date', 'End Date'];
    }

    function handleChange(event) {
        let ind = event.target.className;
        const {name, value} = event.target;

        setValuesArr(prev => {
            let newA = [...prev];
            newA[ind][name] = value;
            return newA;
        });
    }

    function addForm() {
        setNumOfForms(old => old + 1);
    }

    function removeForm(index) {
        setValuesArr(prev => {
            let newA = [...prev];
            newA.splice(index, 1);
            return newA;
        });
        
        setNumOfForms(old => old - 1);
    }

    React.useEffect(() => {
        if (numOfForms > valuesArr.length)
            setValuesArr(prev => [...prev, { [textBoxes[0]]: '', [textBoxes[1]]: '', [textBoxes[2]]: '', [textBoxes[3]]: '', [textBoxes[4]]: '' }]);
    }, [numOfForms]);

    const inputArr = valuesArr.map((a, i) =>
        <div key={i}>
            <Input index={i} inputNames={textBoxes} values={valuesArr[i]} handleChange={handleChange} />
            <button type="button" onClick={() => removeForm(i)}>Delete</button>
        </div>
    );

    return (
        <div>
            <h2 className="form-title">{title}</h2>
            {inputArr}
            <button type="button" onClick={addForm}>Add</button>
        </div>
    );
}