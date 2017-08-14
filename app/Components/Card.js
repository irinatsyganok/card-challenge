import React from 'react';

export default function Card({card: { suit, value } }) {
    return (
            <div className={`card ${suit.replace(/[^a-z0-9]/gi, '')}`}>
                <span className="icon" dangerouslySetInnerHTML={{ __html: suit}} />
                {value}
            </div>
    )
}