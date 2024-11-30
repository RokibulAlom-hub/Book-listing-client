import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loader = useLoaderData();
    console.log(loader);
    
    return (
        <div>
            this is update
        </div>
    );
};

export default Update;