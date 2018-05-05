import React from 'react';

export default (props) => {
    return (
        <input
            type={props.type}
            onChange={props.onChange}
            name={props.name}
            onBlur={props.onBlur}
            value={props.value}
        />
    );
}
