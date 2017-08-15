import React from 'react';

export default function Title(props) {
    const {name} = props;
    return(
        <h1 className="pageTitle">{name}</h1>
    )
}