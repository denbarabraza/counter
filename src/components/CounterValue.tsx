import {ChangeEvent} from 'react';
import s from "./CounterTuesday.module.css";
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {RootAppStoreType} from "../state/store";
import {changeStateAC} from "../state/stateReducer";
import {setErrorAC} from "../state/errorReducer";
import {setErrorInAC} from "../state/errorInReducer";
import {onChangeMaxValueAC, onChangeStartValueAC, ValueType} from "../state/valueReducer";
import {seToggleValueAC} from "../state/toggleReducer";

export const CounterValue = () => {
    //Redux
    const dispatch = useDispatch();
    const errorIn = useSelector<RootAppStoreType, boolean>(state => state.errorIn.isErrorIn)
    const value = useSelector<RootAppStoreType, ValueType>(state => state.value)
    const toggle = useSelector<RootAppStoreType, boolean>(state => state.toggle.isToggle)

    //useEffect
    /* useEffect(() => {
         let get = localStorage.getItem('values for the state')
         if (get) {
             setValue(JSON.parse(get))
         }
     }, [])
     useEffect(() => {
         localStorage.setItem('values for the state', JSON.stringify(value))
     }, [value])*/

    //Function
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let currentTarget=+e.currentTarget.value
        if (currentTarget >= 0
            && currentTarget !== value.start
            && currentTarget > value.start
        ) {
            dispatch(setErrorInAC(false))
            dispatch(onChangeMaxValueAC(currentTarget))
            dispatch(setErrorAC('Enter value and press \'Set\''))
        } else {
            dispatch(onChangeMaxValueAC(currentTarget))
            dispatch(setErrorAC('Incorrect value!'))
            dispatch(setErrorInAC(true))
        }
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let currentTarget=+e.currentTarget.value
        if (currentTarget >= 0
            && currentTarget !== value.max
            && currentTarget < value.max) {
            dispatch(onChangeStartValueAC(currentTarget))
            dispatch(setErrorAC('Enter value and press \'Set\''))
            dispatch(setErrorInAC(false))
        } else {
            dispatch(onChangeStartValueAC(currentTarget))
            dispatch(setErrorAC('Incorrect value!'))
            dispatch(setErrorInAC(true))
        }
    }
    const onFocusHandler=() => {
        dispatch(setErrorInAC(false))
    }

    //Callback
    const setValueHandler = () => {
        dispatch(setErrorAC(''))
        dispatch(changeStateAC(value.start, value.max))
        //setToggle
        if (toggle) dispatch(seToggleValueAC(!toggle))
    }

    //ClassName
    let errorButton = errorIn ? s.inactive : ''
    let errorInput = errorIn ? s.errorInput : ''

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
                                    className={errorInput}
                                    type={"number"}
                                    onChange={onChangeMaxValue}
                                    onFocus={onFocusHandler}
                                />
                            </div>
                        </div>
                        <div className={s.item}>
                            <div className={s.text}> Start value:</div>
                            <div>
                                <input
                                    value={value.start}
                                    className={errorInput}
                                    type={"number"}
                                    onChange={onChangeStartValue}
                                    onFocus={onFocusHandler}
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

