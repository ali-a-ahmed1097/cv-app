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
        let ind = values.index;

        setTbArr(prev => {
            let newA = [...prev];
            newA[ind] = values;
            return newA;
        });

        props.handleChange({ ...values, to: title });
    }

    function addForm() {
        setNumOfForms(old => old + 1);
    }

    function removeForm(index) {
        setTbArr(prev => {
            let newA = [...prev];
            newA.splice(index, 1);
            return newA;
        });
        
        setNumOfForms(old => old - 1);
    }

    React.useEffect(() => {
        if (numOfForms > tbArr.length)
            setTbArr(prev => [...prev, { [textBoxes[0]]: 'dslk', [textBoxes[1]]: '', [textBoxes[2]]: '', [textBoxes[3]]: '', [textBoxes[4]]: '' }]);
    }, [numOfForms]);
console.log(tbArr)
    const inputArr = tbArr.map((a, i) =>
        <div key={i}>
            <Input index={i} inputNames={textBoxes} inputVals={tbArr[i]} handleChange={handleChange} />
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