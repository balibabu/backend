import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function Drive() {
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 200);
    // }, []);

    // if (isLoading) {
    //     return (
    //         <div>
    //             <h1>Please wait while we are loading your files and folders</h1>
    //         </div>
    //     );
    // }
    
    return <Navigate to="/storage/null" replace={true} />;
}

export default Drive;
