import React from 'react';
import './App.css';

function App() {
    const [dot, setDot] = React.useState(" ");


    return (
        <main className={dot === "on" ? "on" : "off"}>
            <section>
                <div className="dot"></div>
                <button
                    type="button"
                    onClick={() => setDot (turnOnOff => (turnOnOff === "on" ? "off" : "on")) }>Turn {dot === "on" ? "off" : "on"}</button>
            </section>
        </main>
    );
}

export default App;
