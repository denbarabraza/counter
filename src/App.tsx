import React from 'react';
import './App.css';
import CounterMonday from "./components/CounterMonday";
import {CounterTuesday1} from "./components/CounterTuesday1";
import {CounterTuesday2} from "./components/CounterTuesday2";

function App() {
    return (
        <div className="App">
           <div>
               <h1>Counter Monday</h1>
               <CounterMonday/>
           </div>
            <hr/>
            <div>
                <h1>Counter Tuesday v.1</h1>
                <CounterTuesday1/>
            </div>
            <hr/>
            <div>
                <h1>Counter Tuesday v.2</h1>
                <CounterTuesday2/>
            </div>
        </div>
    );
}

export default App;
