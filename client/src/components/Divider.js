import React from 'react';

function Divider(props) {
    return(
        <svg preserveAspectRatio="none" viewBox="0 0 1005 75" height="75" width="100%" style={{backgroundColor: props.bgcolor, position: props.position, bottom: props.bottom, top: props.top}} >
            <path d={props.d} fill={props.fill} stroke={props.stroke}  />
        </svg>
    );
}

export default Divider;