import { useState, useReducer } from "react";
import "./App.css";

function App() {
    const [gear, setGear] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [start, setStart] = useState(false);
    //..

    const startTheBoat = () => {
        const fiftyFifty = Math.floor(Math.random() * 10);
        setStart(() => (fiftyFifty > 5 ? true : alert("failed to start")));
    };

    function gearUp() {
        setGear((initGear) => (start && initGear < 5 ? initGear + 1 : gear));
    }

    function gearDown() {
        setGear((initGear) => (start && initGear > -2 ? initGear - 1 : gear));
    }

    function speedUp() {
        gear && start ? setSpeed((initSpeed) => initSpeed + 1) : speed;
    }

    function speedDown() {
        gear && start ? setSpeed((initSpeed) => initSpeed - 1) : speed;
    }
    
    function stopTheBoat() {
        setGear(() => 0);
    }
    //..
    return (
        <div className="App">
            <button onClick={startTheBoat}>Start</button>
            <br />
            <button onClick={gearDown}>Gear Down</button>
            <span> Gear: {gear}</span>
            <button onClick={gearUp}>Gear Up</button>
            <br />
            <button onClick={speedDown}>Speed Down</button>
            <span> Speed: {speed}</span>
            <button onClick={speedUp}>Speed UP</button>
            <br />
            <button onClick={stopTheBoat}>Stop</button>
        </div>
    );
}

export default App;
