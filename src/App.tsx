import { useEffect, useState } from "react";
import "./App.css";
import { useKonamiCode } from "./useKonamiCode";
import { useLogInput } from "./useLogInput";

function App() {
  const codeActivated = useKonamiCode();
  const userInputs = useLogInput();

  const parsedInputs = userInputs.map((input) => input).join(" ");

  return (
    <div className="App">
      {/* Secreat code sequence */}
      {codeActivated ? (
        <img
          src="https://media.tenor.com/y-7ps_AiEcYAAAAC/zadouken-intro.gif"
          alt="Konami Code"
        />
      ) : (
        <img src="https://i.gifer.com/41n.gif" alt="Konami Code" />
      )}

      <h2>Use the Code to activate the secret</h2>
      <h4>
        <code>↑ ↑ ↓ ↓ ← → ← → B A</code>
      </h4>

      <br />

      <div className="user-inputs">
        <p>{parsedInputs}</p>
      </div>
    </div>
  );
}

export default App;
