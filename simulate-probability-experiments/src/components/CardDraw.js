import { useState } from "react";
import "./CardDraw.css";

function CardDraw() {
  const [cards, setCards] = useState([]);
  const [deckType, setDeckType] = useState("standard");

  const suits = {
    standard: ["♠️", "♥️", "♦️", "♣️"],
    tarot: ["Wands", "Cups", "Swords", "Pentacles", "Major Arcana"],
  };

  const values = {
    standard: [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ],
    tarot: [
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Page",
      "Knight",
      "Queen",
      "King",
      "The Fool",
      "The Magician",
      "The High Priestess",
      "The Empress",
      "The Emperor",
      "The Hierophant",
      "The Lovers",
      "The Chariot",
      "Strength",
      "The Hermit",
      "Wheel of Fortune",
      "Justice",
      "The Hanged Man",
      "Death",
      "Temperance",
      "The Devil",
      "The Tower",
      "The Star",
      "The Moon",
      "The Sun",
      "Judgement",
      "The World",
    ],
  };

  const getRandomCard = () => {
    if (deckType === "standard") {
      const suit =
        suits.standard[Math.floor(Math.random() * suits.standard.length)];
      const value =
        values.standard[Math.floor(Math.random() * values.standard.length)];
      return { value, suit };
    } else {
      const suit = suits.tarot[Math.floor(Math.random() * suits.tarot.length)];
      if (suit === "Major Arcana") {
        const majorArcanaIndex = Math.floor(Math.random() * 22) + 14;
        return { value: values.tarot[majorArcanaIndex], suit };
      } else {
        const value = values.tarot[Math.floor(Math.random() * 14)];
        return { value, suit };
      }
    }
  };

  const drawCard = () => {
    setCards([...cards, getRandomCard()]);
  };

  const clearCards = () => setCards([]);

  // Statistics
  const counts = {};
  const currentSuits = deckType === "standard" ? suits.standard : suits.tarot;
  currentSuits.forEach((suit) => {
    counts[suit] = cards.filter((card) => card.suit === suit).length;
  });

  return (
    <div className="carddraw-container">
      <div className="select-container">
        <label>Select deck type:</label>
        <select
          value={deckType}
          onChange={(e) => {
            setDeckType(e.target.value);
            setCards([]);
          }}
        >
          <option value="standard">Standard Playing Cards</option>
          <option value="tarot">Tarot Deck</option>
        </select>
      </div>

      <div className="button-group">
        <button className="button button-draw" onClick={drawCard}>
          Draw Card
        </button>
        <button className="button button-clear" onClick={clearCards}>
          Clear Cards
        </button>
      </div>

      {cards.length > 0 && (
        <div className="results-container">
          <div className="results-box">
            <h2 className="section-title">Drawn Cards</h2>
            <div className="card-grid">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`card ${
                    deckType === "standard" &&
                    (card.suit === "♥️" || card.suit === "♦️")
                      ? "card-red"
                      : "card-blue"
                  }`}
                >
                  <div className="card-suit">{card.suit}</div>
                  <div className="card-value">{card.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="statistics-container">
            <h2 className="section-title">Statistics</h2>
            <p>Total cards drawn: {cards.length}</p>
            <div>
              {Object.keys(counts).map((suit) => (
                <div key={suit} className="stat-line">
                  <div className="stat-label">{suit}:</div>
                  <div className="stat-count">{counts[suit]}</div>
                  <div className="stat-bar-container">
                    <div
                      className={`stat-bar ${
                        deckType === "standard" &&
                        (suit === "♥️" || suit === "♦️")
                          ? "red-bar"
                          : "blue-bar"
                      }`}
                      style={{
                        width: `${
                          cards.length ? (counts[suit] / cards.length) * 100 : 0
                        }%`,
                      }}
                    ></div>
                  </div>
                  <div className="stat-percentage">
                    {cards.length
                      ? ((counts[suit] / cards.length) * 100).toFixed(1)
                      : 0}
                    %
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardDraw;
