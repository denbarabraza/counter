import React from 'react';
import {CounterValue} from "./CounterValue";
import s from './CounterTuesday.module.css'
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {RootAppStoreType} from "../state/store";
import {incHandlerAC, resetHandlerAC, StateType} from "../state/stateReducer";
import {setErrorInAC} from "../state/errorInReducer";
import {seToggleValueAC} from "../state/toggleReducer";

export const CounterTuesday2 = () => {

    //Redux
    const dispatch = useDispatch();
    const state = useSelector<RootAppStoreType, StateType>(state => state.state)
    const error = useSelector<RootAppStoreType, string>(state => state.error.isError)
    const errorIn = useSelector<RootAppStoreType, boolean>(state => state.errorIn.isErrorIn)
    const toggle = useSelector<RootAppStoreType, boolean>(state => state.toggle.isToggle)

    //Function
    const incHandler = () => {
        state.count < state.max && dispatch(incHandlerAC())
        dispatch(setErrorInAC(true))
    }
    const resetHandler = () => dispatch(resetHandlerAC())

    //ClassName
    let countMax = state.count === state.max ? s.inactive : ''
    let countStart = state.count === state.start ? s.inactive : ''
    let errorButton = errorIn ? s.inactive : ''
    let windowInCounter=state.count === state.max ? s.counterItemValue : s.counterItem
    let windowCounter=state.count === state.max ? s.counterValue : s.counter

    return (
        <div className={s.handler}>
            {toggle
                ? <div>
                    <CounterValue/>
                </div>
                : <div className={s.content}>
                    <div className={s.wrapper}>
                        <div className={windowCounter}>
                            {error
                                ? <div className={s.textError}>{error}</div>
                                : <div className={windowInCounter}>
                                    {error ? error : state.count}
                                </div>}
                        </div>
                        <div className={s.btn}>
                            <Button
                                name={'inc'}
                                callback={incHandler}
                                className={countMax}
                            />
                            <Button
                                name={'reset'}
                                callback={resetHandler}
                                className={countStart}
                            />
                            <Button
                                name={'Set'}
                                callback={() => dispatch(seToggleValueAC(!toggle))}
                                className={errorButton}
                            />
                        </div>
                    </div>
                </div>}
        </div>
    );
};
