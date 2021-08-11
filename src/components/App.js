import { useReducer } from "react";
import "./App.css";

const ACTIONS = {
    START: "startTheBoat",
    SHIFT_DOWN: "gearUp",
    SHIFT_UP: "gearDown",
    ACCELERATE: "speedUp",
    BREAK: "speedDown",
    STOP: "stopTheBoat",
};

const myBoat = {
    gear: 0,
    speed: 0,
    start: false,
};

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.START:
            return (
                Math.floor(Math.random() * 10) > 5
                    ? { state: !state.start }
                    : alert("fail"),
                { state: state.start }
            );

        case ACTIONS.SHIFT_DOWN:
            return state.start && state.gear < 5
                ? { gear: state.gear + 1 }
                : { gear: state.gear };

        case ACTIONS.SHIFT_UP:
            return state.start && state.gear > -2
                ? { gear: state.gear - 1 }
                : { gear: state.gear };

        case ACTIONS.ACCELERATE:
            return state.gear && state.start
                ? { speed: state.speed + 1 }
                : { speed: state.speed };

        case ACTIONS.BREAK:
            return state.gear && state.start
                ? { speed: state.speed - 1 }
                : { speed: state.speed };
        case ACTIONS.STOP:
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, myBoat);

    const startTheBoat = () => {
        dispatch({ type: ACTIONS.START });
    };

    function gearUp() {
        dispatch({ type: ACTIONS.SHIFT_DOWN });
    }

    function gearDown() {
        dispatch({ type: ACTIONS.SHIFT_UP });
    }

    function speedUp() {
        dispatch({ type: ACTIONS.ACCELERATE });
    }

    function speedDown() {
        dispatch({ type: ACTIONS.BREAK });
    }

    function stopTheBoat() {
        dispatch({ type: ACTIONS.STOP });
    }

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
