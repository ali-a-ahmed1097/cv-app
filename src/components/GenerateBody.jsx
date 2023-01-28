import React from "react";
import './GenerateBody.css';

export default function GenerateBody(props) {
    const [ob, setOb] = React.useState([]);
    const [education] = React.useState(props.education);
    const title = education ? 'Education' : 'Work Experience';

    React.useEffect(() => {
        if(props.replacement[0] === education) setOb(props.replacement.slice(1));
    }, [props.replacement]);

    const items = education ?
        ob.map((item, index) => (
        <div key={index}>
            <div>{item['Program']}</div>
            <div>{item['Institution']}</div>
            <div>{item['Start Date']}</div>
            <div>{item['End Date']}</div>
        </div>
        ))
        : ob.map((item, index) => (
            <div key={index}>
                <div>{item['Company']}</div>
                <div>{item['Position']}</div>
                <div>{item['Start Date']}</div>
                <div>{item['End Date']}</div>
                <div>{item['Description']}</div>
            </div>
            ));

    return (
        <div>
            {ob.length > 0 && <h3>{title}</h3>}
            {items}
        </div>
    );
}