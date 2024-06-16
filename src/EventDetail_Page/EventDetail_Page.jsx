import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetail_Page = () =>
{
    const {id} = useParams();
    console.log(id);
    return(
        <div className="EventDetail_Page">
            <p>{id}</p>
        </div>
    )
}

export default EventDetail_Page;