import "../styles/Game.css";

function Game({ CARDS, onChange }) {
  return (
    <div className="Game">
      {CARDS.map((general) => (
        <div
          key={general.id}
          className="GameCard"
          onClick={() => onChange(general.id)}
        >
          {/* Fallback background color if image fails to load */}
          <div className="CardImageContainer">
            <img src={general.image} alt={general.name} className="CardImage" />
          </div>
          <div className="CardLabel">
            <span className="Name">{general.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Game;
