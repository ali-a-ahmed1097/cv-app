import React from "react";
import './GenerateBody.css';

export default function GenerateBody(props) {
    const [ob, setOb] = React.useState([]);
    const [education] = React.useState(props.education);
    const title = education ? 'Education' : 'Work Experience';

    React.useEffect(() => {
        if (props.replacement[0] === education) setOb(props.replacement.slice(1));
    }, [props.replacement]);

    const items = education ?
        ob.map((item, index) => (
            <div key={index} className='deets open'>
                <div className="primary">{item['Program']}</div>
                <div className="secondary">{item['Institution']} | </div>
                <div className="primary">{item['Start Date']} – </div>
                <div className="primary">{item['End Date']}</div>
            </div>
        ))
        : ob.map((item, index) => (
            <div key={index} className="open">
                <div className="deets">
                    <div className="primary">{item['Company']}</div>
                    <div className="secondary">{item['Position']} | </div>
                    <div className="primary">{item['Start Date']} –</div>
                    <div className="primary">{item['End Date']}</div>
                </div>
                <div className="desc">{item['Description']}</div>
            </div>
        ));

    return (
        <div className="full">
            {ob.length > 0 && <h3 className="section-head">{title}</h3>}
            {items}
        </div>
    );
}