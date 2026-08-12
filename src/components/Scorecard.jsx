import "../styles/Scorecard.css";

function Scorecard({ bestScore, currScore }) {
  return (
    <div className="Header">
      <div className="Title">
        <h1 className="GameTitle">Operation: Memory</h1>
        <p className="GameInstructions">
          Review the dossiers. Click a commander to earn a point, but do not
          click the same general twice, or the operation fails.
        </p>
      </div>

      <div className="Scoreboard">
        <div className="Scorebox">
          <span className="Scorelabel">CURRENT SCORE</span>
          <span className="Value">{currScore}</span>
        </div>

        <div className="Scorebox Best">
          <span className="Scorelabel">BEST SCORE</span>
          <span className="Value">{bestScore}</span>
        </div>
      </div>
    </div>
  );
}

export default Scorecard;
