import React from 'react'

export function Test(props) {

    return (
        <>
            <h1>{props.name}</h1>
            <div>{props.children}</div>
        </>
    )
}