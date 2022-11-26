import React, {useEffect, useState} from 'react';
import {CounterValue} from "./CounterValue";
import s from './CounterTuesday.module.css'
import {Button} from "./Button";

export type StateType={
    start: number
    max: number
    count: number
}

export const CounterTuesday2 = () => {

    //State
    const [state, setState] = useState<StateType>({start: 0, max: 4, count: 0})
    const [error, setError] = useState<string>('')
    const [errorIn, setErrorIn] = useState<boolean>(false)
    const [toggle, setToggle]=useState<boolean>(false)

        //Function
    const incHandler = () => {
        state.count < state.max && setState({...state, count: state.count + 1})
    }
    const resetHandler = () => setState({...state, count: state.start})
    const changeState=(start:number,max:number)=>{
        setState({
            ...state,
            start: start,
            max: max,
            count: start})
    }

    //ClassName
    let countMax=state.count===state.max ? s.inactive:''
    let countStart=state.count===state.start ? s.inactive:''
    let errorButton=errorIn ? s.inactive : ''

    return (
        <div className={s.handler}>
            {toggle
            ?<div>
                <CounterValue
                    changeState={changeState}
                    errorIn={errorIn}
                    setError={setError}
                    setErrorIn={setErrorIn}
                    setToggle={setToggle}
                    toggle={toggle}
                />
            </div>
            :<div className={s.content}>
                <div className={s.wrapper}>
                    <div className={state.count===state.max ? s.counterValue:s.counter}>
                        { error
                        ?<div className={s.textError}>{error}</div>
                        :<div className={state.count===state.max ? s.counterItemValue:s.counterItem}>
                            {error ? error:state.count}
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
                            callback={()=>setToggle(!toggle)}
                            className={errorButton}
                        />
                    </div>
                </div>
            </div>}
        </div>
    );
};

