import React from "react";

export default function Input(props) {
    let inpObj = {};
    for (let i = 0; i < props.inputNames.length; i++) {
        inpObj[props.inputNames[i]] = '';
    }

    const [values, setValues] = React.useState(props.inputVals ? props.inputVals : inpObj);
    
    function handleChange(event) {
        const {name, value} = event.target;
        setValues(prevValues => ({...prevValues, [name]: value, index: props.index}));
    }

    React.useEffect( () => {
        props.handleChange(values)
    }, [values]);

    const inputsArr = props.inputNames.map((nm, key) => (
        <input key={key} type='text' name={nm} placeholder={nm} value={values[nm]} onChange={handleChange} />
    ));

    return (
        <div className="internal-form">
            {inputsArr}
        </div>
    );
}