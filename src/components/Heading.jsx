import React from "react";
import './Heading.css'

export default function Heading(props) {
    const [ob, setOb] = React.useState({});

    React.useEffect(() => {
        if (props.replacement.to === 'Personal') setOb(props.replacement);
    }, [props.replacement]);

    return (
        <div className="person">
            <div>
                <h1 className='person-name'> {ob['Name']} </h1>
                <div className="person-title">{ob['Title']}</div>
            </div>
            <div className="details">
                <div className="person-phone">{ob['Phone']}</div>
                <div className="person-email">{ob['Email']}</div>
                <div className="person-location">{ob['Location']}</div>
            </div>
        </div>
    );
}