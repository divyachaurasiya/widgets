import {useEffect, useState} from 'react';

const Route = ({path,children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(()=> {
        const onNavChange = () => {
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popstate',onNavChange);

        return () => {
            window.removeEventListener('popstate',onNavChange);
        }
    },[]);

    return currentPath === path ? children : null;

};

export default Route;