import React from 'react';
import { Button } from 'react-bootstrap';

const NotFound = () => {
    document.title='Creative Agency | Page Not Found'
    const history=useHistory()
    return (
        <div className='not-found'>
            <h1>404</h1>
            <p>Page Not Found</p>
            
        </div>
    );
};

export default NotFound;