import classNames from 'classnames'
import React, { FC } from 'react'

interface ButtonProps {
    outline?: boolean,
    className?: string,
    children?: any,
    onClick?: () => void
}

const Button: FC<ButtonProps> = React.memo(({ outline, children, className, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={classNames('button', className, {
                "button--outline": outline,
            })}>
            {children}
        </button>
    )
})

export default Button
