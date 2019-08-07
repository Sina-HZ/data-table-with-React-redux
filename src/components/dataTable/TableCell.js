import React from 'react';

export default function TableCell(props){

    return (
        <props.type>
            {props.children}
        </props.type>
    )
}