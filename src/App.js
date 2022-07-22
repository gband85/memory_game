import { useState } from "react";
import "./App.css";
import Card from "./Card";
import uniqid from "uniqid";
// import Game from './Game'

const App = () => {
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
  const [cardList, setCardList]=useState(cards);
  // console.log(cardList);
  const [score, setScore] = useState(0);
  const resetGame = () => {
    setScore(0);
resetClickedCards();
  };
  const resetClickedCards=()=>{
    const newCardList=cardList.map((card)=>{
      card.clicked=false;
      return card;
    })
    setCardList(newCardList);
  }
  const updateClickedCards = (id) => {
    const newCardList=cardList.map((card)=>{
if (id===card.id) {
  card.clicked=true;
}
return card;
    })
    shuffleCards(newCardList);
    //setCardList(newCardList);
  };
  const updateScore = () => {
    setScore(score + 1);
  };
  const shuffleCards=()=>{
    const shuffledList=cardList
    
    .map(value=>({value,sort: Math.random()}))
    
    .sort((a,b)=>a.sort-b.sort)
    .map(({value})=>value);
    setCardList(shuffledList);
  }
  // if ()
  return (
    // <Game score={0} clicked={false}/>
    <div className="container">
      <div className="score">
        <p>Score: {score}</p>
      </div>
      <div className="cards">
         {cardList.map((card) => {
           return (
            <Card
             id={card.id}
             clicked={card.clicked}
              common_name={card.common_name}
              sci_name={card.sci_name}
              src={card.image}
              updateClickedCards={updateClickedCards}
              updateScore={updateScore}
              resetGame={resetGame}
            />
          ); 

         })}
      </div>
    </div>
  );
};

export default App;
