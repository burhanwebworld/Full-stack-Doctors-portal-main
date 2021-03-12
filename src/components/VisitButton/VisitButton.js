import React, { useState } from 'react';

const VisitButton = (props) => {
    const [visited, setVisited] = useState(props.visited)
    const handleVisit = (id) => {
        fetch('http://localhost:5000/updateVisit', {
            method: 'PUT',
            headers: {
                'Conteynt-Type': 'application/json'
            },
            body: JSON.stringify({id})
        }).then(res => res.json())
           setVisited(true)    
    }

    return (
        <div>
            {visited?<button className='btn btn-success pt-0 pb-0' disabled>Visited</button>:<button onClick={()=>handleVisit(props.id)} className='btn btn-danger pt-0 pb-0'>Not Visited</button>}
        </div>
    );
};

export default VisitButton;