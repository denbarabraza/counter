import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./CounterTuesday.module.css";
import {Button} from "./Button";

type ValueType = {
    start: number
    max: number
}
type CounterValuePropsType = {
    changeState: (start: number, max: number) => void
    setError: (error: string) => void
    setErrorIn: (errorIn: boolean) => void
    errorIn: boolean
    setToggle?: (toggle: boolean) => void
    toggle?: boolean
}

export const CounterValue: React.FC<CounterValuePropsType> = (
    {
        changeState,
        setError,
        setErrorIn,
        errorIn,
        setToggle,
        toggle
    }) => {

    //State
    const [value, setValue] = useState<ValueType>({start: 0, max: 5,})
    //useEffect
    useEffect(() => {
        let get = localStorage.getItem('values for the state')
        if (get) {
            setValue(JSON.parse(get))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('values for the state', JSON.stringify(value))
    }, [value])

    //Function
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value >= 0
            && +e.currentTarget.value !== value.start
            && +e.currentTarget.value > value.start
        ) {
            setValue({...value, max: +e.currentTarget.value})
            setError('Enter value and press \'Set\'')
            setErrorIn(false)
        } else {
            setValue({...value, max: +e.currentTarget.value})
            setError('Incorrect value!')
            setErrorIn(true)
        }
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value >= 0
            && +e.currentTarget.value !== value.max
            && +e.currentTarget.value < value.max) {
            setValue({...value, start: +e.currentTarget.value})
            setError('Enter value and press \'Set\'')
            setErrorIn(false)
        } else {
            setValue({...value, start: +e.currentTarget.value})
            setError('Incorrect value!')
            setErrorIn(true)
        }
    }

    //Callback
    const setValueHandler = () => {
        setError('')
        changeState(value.start, value.max)
        if (setToggle) setToggle(!toggle)
    }

    //ClassName
    let errorButton = errorIn ? s.inactive : ''

    return (
        <div className={s.content}>
            <div className={s.wrapper}>
                <div>
                    <div className={s.counterWithValue}>
                        <div className={s.item}>
                            <div className={s.text}>Max value:</div>
                            <div>
                                <input
                                    value={value.max}
                                    className={errorIn ? s.errorInput : ''}
                                    type={"number"}
                                    onChange={onChangeMaxValue}
                                    onFocus={() => {
                                        setErrorIn(false)
                                    }}
                                />
                            </div>
                        </div>
                        <div className={s.item}>
                            <div className={s.text}> Start value:</div>
                            <div>
                                <input
                                    value={value.start}
                                    className={errorIn ? s.errorInput : ''}
                                    type={"number"}
                                    onChange={onChangeStartValue}
                                    onFocus={() => {
                                        setErrorIn(false)
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={s.btn}>
                        <Button
                            name={'Set'}
                            callback={setValueHandler}
                            className={errorButton}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

