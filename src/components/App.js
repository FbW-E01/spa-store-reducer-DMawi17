import { useReducer } from "react";
import "./App.css";

const myBoat = {
    gear: 0,
    speed: 0,
    start: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "startTheBoat":
            return (
                Math.floor(Math.random() * 10) > 5
                    ? { state: !state.start }
                    : alert("fail"),
                { state: state.start }
            );

        case "gearUp":
            return state.start && state.gear < 5
                ? { gear: state.gear + 1 }
                : { gear: state.gear };
        case "gearDown":
            return state.start && state.gear > -2
                ? { gear: state.gear - 1 }
                : { gear: state.gear };
        case "speedUp":
            return state.gear && state.start
                ? { speed: state.speed + 1 }
                : { speed: state.speed };
        case "speedDown":
            return state.gear && state.start
                ? { speed: state.speed - 1 }
                : { speed: state.speed };
        case "stopTheBoat":
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, myBoat);

    //..

    const startTheBoat = () => {
        dispatch({ type: "startTheBoat" });
    };

    function gearUp() {
        dispatch({ type: "gearUp" });
    }

    function gearDown() {
        dispatch({ type: "gearDown" });
    }

    function speedUp() {
        dispatch({ type: "speedUp" });
    }

    function speedDown() {
        dispatch({ type: "speedDown" });
    }

    function stopTheBoat() {
        dispatch({ type: "stopTheBoat" });
    }
    //..
    return (
        <div className="App">
            <button onClick={startTheBoat}>Start</button>
            <br />
            <button onClick={gearDown}>Gear Down</button>
            <span> Gear: {state.gear}</span>
            <button onClick={gearUp}>Gear Up</button>
            <br />
            <button onClick={speedDown}>Speed Down</button>
            <span> Speed: {state.speed}</span>
            <button onClick={speedUp}>Speed UP</button>
            <br />
            <button onClick={stopTheBoat}>Stop</button>
        </div>
    );
}

export default App;
