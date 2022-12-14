import { FC } from "react";

type ButtonPropsType = {
    name?: string
    callback?: () => void
    className?: string
}

export const Button: FC<ButtonPropsType> = (
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