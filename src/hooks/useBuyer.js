import React, { useEffect, useState } from 'react';

const useBuyer = (email) => {

    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsBuyer(data.isBuyer);
                    setIsBuyerLoading(false);
                    // if(data.accessToken){
                    //     localStorage.setItem('accessToken',data.accessToken)
                    //     /
                    // }
                })
        }
    }, [email])
    return [isBuyer, isBuyerLoading]
};

export default useBuyer;