import React, { useState, useEffect } from 'react';

const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", (e) => {
            console.log("offline");
            setIsOnline(false);
        });

        window.addEventListener("online", (e) => {
            console.log("online");
            setIsOnline(true);
        });

    }, []);

    return isOnline;
};

export default useOnlineStatus;