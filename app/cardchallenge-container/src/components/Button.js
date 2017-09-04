import React from 'react';

export default function Button(props) {
    const { classNames, message, onClick } = props;

    return (
        <button className={classNames} onClick={onClick}>{message}</button>
    )
}