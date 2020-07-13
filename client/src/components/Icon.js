import React from 'react';

function Icon (props) {
    
    return(
        <a className={props.class} href={props.link} target={props.tar} rel="noopener noreferrer">
            <i className={props.name} style={{ fontSize: props.size }}  aria-hidden="true" />
        </a>
    );
}

export default Icon;