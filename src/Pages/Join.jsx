import "./Join.css";
import Footer from "../Components/Footer";
import ColorSelector from "../Components/ColorSelector";

import { useNavigate } from "react-router-dom";

//Get Code from user and verify
//Get Username from User
//dropdown for colors
function Join() {
  const navigate = useNavigate();

  function handleGame() {
    navigate("/game");
  }
  return (
    <main>
      <div id="codeContainer">
        <h1 id="joinLobby">Join Lobby</h1>
        <form id="inputContainer">
          <input
            type="text"
            id="usernameInput"
            name="userName"
            maxLength="8"
            placeholder="Enter Username"
          />

          <input
            type="text"
            id="gameCodeInput"
            name="number"
            maxLength="6"
            placeholder="Enter Lobby Code"
          />
        </form>
        <div>
          <ColorSelector />
        </div>
        <button onClick={handleGame} id="enterGameBtn" type="submit">
          Enter Game
        </button>
      </div>
      <Footer />
    </main>
  );
}

export default Join;
