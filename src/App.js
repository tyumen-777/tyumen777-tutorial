import "./App.css";
import React, { useState } from "react";
import Phrase from "./components/Phrase";
import EmptyBlock from "./components/EmptyBlock";

function App() {
  const adjectivesArr = [
    "абсолютный",
    "адский",
    "азартный",
    "активный",
    "ангельский",
    "астрономический",
    "баснословный",
    "безбожный",
    "безбрежный",
    "безвозвратный",
    "безграничный",
    "бездонный",
    "бездушный",
    "безжалостный",
    "замечательно",
    "замечательный",
    "записной",
    "запредельный",
    "заядлый",
    "звериный",
    "зверский",
    "зеленый",
    "злой",
    "злостный",
    "значительный",
    "неоспоримый",
    "неотразимый",
    "неоценимый",
    "непередаваемый",
  ];
  const nounsArr = [
    "лгун",
    "день",
    "конь",
    "олень",
    "человек",
    "программист",
    "ребёнок",
    "конец",
    "город",
    "дурак",
  ];

  const [phraseArr, setPhraseArr] = useState([]);
  console.log(phraseArr);

  const randomPhrase = (adjective, noun) => {
    let randomAdjective = Math.floor(Math.random() * adjective.length);
    let randomNoun = Math.floor(Math.random() * noun.length);
    setPhraseArr((phraseArr) => [
      ...phraseArr,
      `${adjective[randomAdjective]} ${noun[randomNoun]}`,
    ]);
  };

  const resetArray = () => {
    setPhraseArr([]);
  };

  return (
    <div className="wrapper">
      <div className="list">
        {phraseArr.length === 0 ? (
          <EmptyBlock />
        ) : (
          phraseArr.map((data) => <Phrase text={data} />)
        )}
      </div>
      <button
        className="btn btn_generate"
        onClick={() => randomPhrase(adjectivesArr, nounsArr)}
      >
        Сгенерировать
      </button>
      <button className="btn btn_clear" onClick={resetArray}>
        Очистить
      </button>
    </div>
  );
}

export default App;
