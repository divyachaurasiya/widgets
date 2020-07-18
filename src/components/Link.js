import React from 'react';

const Link = ({href,className,children}) => {

    const clickEvent = (event) => {
        if(event.metaKet || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        window.history.pushState({},'',href);
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    

    return (
        <a onClick={clickEvent} href={href} className={className}>
            {children}
        </a>
    );

};

export default Link;