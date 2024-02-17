import React from 'react';

function Button(props) {
    const btnstyle = {
        fontFamily: 'Inter, sans-serif',
        backgroundColor: props.secondary === 'secondary' ? ('var(--secondary-button)'): ('var(--primary-button)'),
        border: 'none',
        color: 'var(--text-primary)',
        padding: '14px 24px',
        fontSize: '19px',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        borderRadius: '12px',
        width: props.width,
        marginTop: "20px"
    };

    return (
        props.secondary === 'secondary' ? (
            <a href={props.href} style={{ width: '200px', background: 'none' }}>
                <button className='primary' style={btnstyle}>{props.text}</button>
            </a>
        ) : (
            <a href={props.href} style={{ width: '200px', background: 'none' }}>
                <button className='primary' style={btnstyle}>{props.text}</button>
            </a>
        )
    );
}

export default Button;
