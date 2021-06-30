import classNames from 'classnames'
import React, { Children } from 'react'

interface ButtonProps {
    outline?: boolean,
    className: string,
}

const Button: React.FC<ButtonProps> = ({ outline, children, className }) => {
    return (
        <button className={classNames('button', className, {
            "button--outline": outline
        })}>
            {children}
        </button>
    )
}

export default Button
