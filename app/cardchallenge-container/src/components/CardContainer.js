import React from 'react';
import Title from './Title';
import Button from './Button';
import Card from './Card';

export default function CardContainer() {
    return (
        <div> 
            <Title title={"Hello"} />
            <Button classNames={"button"} message={"Shuffle"} />

            <Card classNames={"card"} />
        </div>
    )
}