import React from "react";

type ButtonPropsType = {
    name?: string
    callback?: () => void
    className?: string
}

export const Button: React.FC<ButtonPropsType> = (
    {
        name,
        callback,
        className
    }) => {

    const onClickHandler = () => {
        callback && callback()
    }

    return (
        <button
            onClick={onClickHandler}
            className={className}
        >
            {name}
        </button>
    )
}