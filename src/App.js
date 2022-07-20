import { useState } from "react";
import "./App.css";
import Card from "./Card";
import uniqid from "uniqid";
// import Game from './Game'

const App = () => {
  const [clickedCards, setClickedCards] = useState([]);
  const [clicked,setClicked]=useState(false);
  const [score, setScore] = useState(0);
  const [newGame,setNewGame]=useState(true);
  const resetGame = () => {
    setScore(0);
    setClickedCards([]);
    setNewGame(true);
    setClicked(false)
  };
  const updateClickedCards = (id) => {
    setClickedCards(clickedCards.concat(id));
  };
  const updateScore = () => {
    setNewGame(false)
    setScore(score + 1);
  };
  const importAll = (r) => {
    // console.log(r);

    return r.keys().map(el=>{
 return {"image":require('./images/'+el.replace('./','')),
"clicked":false,
"common_name":el.slice(2, el.search(/-/g)).replace(/_/g, " "),
"sci_name": el.slice(el.search(/-/g) + 1, el.length - 4).replace(/_/g, " "),
"id": uniqid()
}
    });
  };
  // const startGame=()=>{
  //   return <Game score={0} clicked={false}/>
  // }
  const cards = importAll(
    require.context("./images", false, /\.(png|jpe?g|svg)$/)
  );
  console.log(cards);
  // if ()
  return (
    // <Game score={0} clicked={false}/>
    <div>
      <div>
        <p>Score: {score}</p>
      </div>
      <div className="cards">
        {cards.map((card) => {

            if (newGame===true) {
          return (
            <Card
            // id={uniqid()}
            // clicked={clicked}
              // common_name={common_name}
              // sci_name={sci_name}
              src={card.image}
              updateClickedCards={updateClickedCards}
              updateScore={updateScore}
              resetGame={resetGame}
            />
          );
            }
            else {
              return (
            <Card
            id={uniqid()}
            // clicked={0}
              // common_name={common_name}
              // sci_name={sci_name}
              src={card.image}
              updateClickedCards={updateClickedCards}
              updateScore={updateScore}
              resetGame={resetGame}
            />
          );
            }
        })}
      </div>
    </div>
  );
};

export default App;
