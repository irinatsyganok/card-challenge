import React from 'react';

export default function Card(props) {
    const { classNames, card, handleClick } = props;
    const { suit, name } = card;

    return (
        <div className={classNames + `${suit.replace(/[^a-z0-9]/gi, '')}`} onClick={handleClick}>{name}</div>
    )
}