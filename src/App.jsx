import { useState } from "react";
import "./App.css";
import Game from "./components/Game.jsx";
import Scorecard from "./components/Scorecard.jsx";

import manstein from "./assets/manstein.png";
import guderian from "./assets/guderian.png";
import kesselring from "./assets/kesselring.png";
import rommel from "./assets/rommel.png";
import slim from "./assets/slim.png";
import montgomery from "./assets/montgomery.png";
import auchinleck from "./assets/auchinleck.png";
import percival from "./assets/percival.png";
import bradley from "./assets/bradley.png";
import eisenhower from "./assets/eisenhower.png";
import patton from "./assets/patton.png";
import nimitz from "./assets/nimitz.png";
import chuikov from "./assets/chuikov.png";
import zhukov from "./assets/zhukov.png";
import rokossovesky from "./assets/rokossovesky.png";
import vatutin from "./assets/vatutin.png";

const GENERALS = [
  // Germans
  {
    id: "manstein",
    name: "Erich von Manstein",
    nation: "germany",
    image: manstein,
  },
  {
    id: "guderian",
    name: "Heinz Guderian",
    nation: "germany",
    image: guderian,
  },
  {
    id: "rommel",
    name: "Erwin Rommel",
    nation: "germany",
    image: rommel,
  },
  {
    id: "kesselring",
    name: "Albert Kesselring",
    nation: "germany",
    image: kesselring,
  },
  // Brits
  {
    id: "slim",
    name: "William Slim",
    nation: "britain",
    image: slim,
  },
  {
    id: "auchinleck",
    name: "Claude Auchinleck",
    nation: "britain",
    image: auchinleck,
  },
  {
    id: "montgomery",
    name: "Bernard Montgomery",
    nation: "britain",
    image: montgomery,
  },
  {
    id: "percival",
    name: "Arthur Percival",
    nation: "britain",
    image: percival,
  },
  // Americans
  {
    id: "patton",
    name: "George Patton",
    nation: "usa",
    image: patton,
  },
  {
    id: "eisenhower",
    name: "Dwight D. Eisenhower",
    nation: "usa",
    image: eisenhower,
  },
  {
    id: "bradley",
    name: "Omar Bradley",
    nation: "usa",
    image: bradley,
  },
  {
    id: "nimitz",
    name: "Chester W. Nimitz",
    nation: "usa",
    image: nimitz,
  },
  // Soviets
  {
    id: "zhukov",
    name: "Georgy Zhukov",
    nation: "soviet",
    image: zhukov,
  },
  {
    id: "chuikov",
    name: "Vasily Chuikov",
    nation: "soviet",
    image: chuikov,
  },
  {
    id: "vatutin",
    name: "Nikolai Vatutin",
    nation: "soviet",
    image: vatutin,
  },
  {
    id: "rokossovsky",
    name: "Konstantin Rokossovsky",
    nation: "soviet",
    image: rokossovesky,
  },
];

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function App() {
  const [Best, setBest] = useState(0);
  const [Current, setCurrent] = useState(0);
  const [Chosen, setChosen] = useState([]);
  const [Cards, setCards] = useState(shuffleArray(GENERALS));
  const onChange = (i) => {
    if (Chosen.includes(i)) {
      if (Current >= Best) setBest(Current);
      setCurrent(0);
      setChosen([]);
    } else {
      setCurrent(Current + 1);
      if (Current + 1 >= Best) setBest(Current + 1);
      setChosen([...Chosen, i]);
    }
    setCards(shuffleArray(Cards));
  };

  return (
    <div>
      <Scorecard bestScore={Best} currScore={Current} />
      <Game CARDS={Cards} onChange={onChange} />
    </div>
  );
}

export default App;
