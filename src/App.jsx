<<<<<<< HEAD

import Navbar from './components/Navbars.jsx';
import Body from './components/Body.jsx';
import About from './components/About.jsx';
import Subscriptions from './components/Subscriptions.jsx';
import Contacts from './components/Contacts.jsx';
import Footer from './components/Footers.jsx'

function App() {
    return(
      <>
      <Navbar />
      <Body />
      <About />
      <Subscriptions/>
      <Contacts/>
      <Footer/>

      </>
    );
}

export default App
=======
import { useState } from "react";
import HeaderNav from "./components/Navbar";
import Body from "./components/Body";

function App() {
  const [players, setPlayers] = useState([]);

  async function searchPlayer(playerName) {
    try {
      if (!playerName.trim()) {
        setPlayers([]);
        return;
      }

      // Split name (first + last)
      const parts = playerName.trim().split(" ");
      const firstName = encodeURIComponent(parts[0].toLowerCase());
      const lastName = parts[1] ? parts[1].toLowerCase() : null;

      // Fetch using FIRST name only (API limitation)
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

      const data = await res.json();

      let results = data.data || [];

      // If the user typed a last name, filter manually
      if (lastName) {
        results = results.filter((p) =>
          p.last_name.toLowerCase().includes(lastName)
        );
      }

      setPlayers(results);

    } catch (err) {
      console.error("Error fetching player:", err);
      setPlayers([]); // prevents crash
    }
  }

  return (
    <>
      <HeaderNav />
      <Body onSearch={searchPlayer} />

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
>>>>>>> 5862b61 (nba project)
