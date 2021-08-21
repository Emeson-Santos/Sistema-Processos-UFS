import React from 'react';
import './title.css';

export default function Title({children, name}){
    return(
        <div className="title">
            <span>{name}</span>
        </div>
    )
}