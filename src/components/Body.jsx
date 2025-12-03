import { useState } from "react";

function Body({ onSearch }) {
  const [playerName, setPlayerName] = useState("");

  function handleClick() {
    if (!playerName.trim()) {
      console.log("No name entered");
      return;
    }
    onSearch(playerName);
  }

  return (
    <section id="Body">
      <div className="input-section">
        <h1>learn more about your favorite player</h1>
        <br />

        <div className="inputs">
          <input
            type="text"
            placeholder="enter player name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            id="player-name"
          />

          <button className="log-in-button" onClick={handleClick}>
            submit
          </button>
        </div>
      </div>
    </section>
  );
}

export default Body;
