import { useState } from "react";
import Navbar from './components/Navbar.jsx';
import Body from './components/Body.jsx';

function App() {
  const [players, setPlayers] = useState([]);

  async function searchPlayer(playerName) {
    try {
      if (!playerName.trim()) {
        setPlayers([]);
        return;
      }

      const parts = playerName.trim().split(" ");
      const firstName = encodeURIComponent(parts[0].toLowerCase());
      const lastName = parts[1] ? parts[1].toLowerCase() : null;

      const res = await fetch(
        `https://api.balldontlie.io/v1/players?search=${firstName}`,
        {
          headers: {
            Authorization: import.meta.env.VITE_BALLDONTLIE_API_KEY
          }
        }
      );

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      let results = (await res.json()).data || [];

      if (lastName) {
        results = results.filter((p) =>
          p.last_name.toLowerCase().includes(lastName)
        );
      }

      setPlayers(results);
    } catch (err) {
      console.error("Error fetching player:", err);
      setPlayers([]);
    }
  }

  return (
    <>
      <Navbar />
      <Body onSearch={searchPlayer} />

      {/* NBA Player Search Results */}
      <div className="results">
        {players.length === 0 ? (
          <p>No results yet.</p>
        ) : (
          players.map((p) => (
            <div key={p.id} className="player-card">
              <h3>{p.first_name} {p.last_name}</h3>
              <p>Team: {p.team?.full_name || "N/A"}</p>
              <p>Conference: {p.team?.conference || "N/A"}</p>
              <p>Position: {p.position || "N/A"}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default App;
