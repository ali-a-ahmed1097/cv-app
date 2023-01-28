import React from "react";
import phone from '../assets/telephone.png';
import mail from '../assets/mail.png';
import location from '../assets/location.png';
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
                <div>
                    <img src={phone} className='small' />
                    <div className="person-phone">{ob['Phone']}</div>
                </div>
                <div>
                    <img src={mail} className='small' />
                    <div className="person-email">{ob['Email']}</div>
                </div>
                <div>
                    <img src={location} className='small' />
                    <div className="person-location">{ob['Location']}</div>
                </div>
            </div>
        </div>
    );
}