import React, {useState} from 'react';

const CounterMonday = () => {

    const [cout, setCount] = useState<number>(0)

    const incHandler = () => cout < 5 && setCount(cout+1)

    const resetHandler = () => setCount(0)

    return (
        <div className={'content'}>
            <div className={'wrapper'}>
                <div className={cout===5 ? 'counterFive':'counter'}>
                    <div className={cout===5 ? 'counterItemFive':'counterItem'}>{cout}</div>
                </div>
                <div className={'btn'}>
                    <button onClick={incHandler} className={cout===5 ? 'inactive':''} >
                        inc
                    </button>
                    <button onClick={resetHandler} className={cout===0 ? 'inactive':''}>
                        reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CounterMonday;