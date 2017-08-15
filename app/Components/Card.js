import React from 'react';

export default function Card({card: { suit, name }, handleClick }) {
    return (
            <div onClick={handleClick} className={`card ${suit.replace(/[^a-z0-9]/gi, '')}`}>
                <span className="icon" dangerouslySetInnerHTML={{ __html: suit}} />
                {name}
            </div>
    )
}