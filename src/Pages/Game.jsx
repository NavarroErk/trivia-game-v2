// import React from "react";
import "./Game.css";

function Game() {
  return (
    <main>
      <div id="game-card">
        <h2 id="question">Topic: Whatever the fuck</h2>
        <p>
          This is a game card with some text content. You can add more details
          and information about your game here.
        </p>
      </div>
      <div className="answers">
        <button className="answer">Answer 1</button>
        <button className="answer">Answer 2</button>
        <button className="answer">Answer 3</button>
        <button className="answer">Answer 4</button>
      </div>

      <div id="scorecard">
        <h4>Time Remaining: 20s</h4>
        <h4>Score: 100</h4>
        <h4>Leading: Yeezy4554</h4>
      </div>
    </main>
  );
}

export default Game;
