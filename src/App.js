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

  const randomPhrases = (adjective, noun) => {
    let randomAdjective = Math.floor(Math.random() * adjective.length);
    let randomNoun = Math.floor(Math.random() * noun.length);
    let randomPhrase = `${adjective[randomAdjective]} ${noun[randomNoun]}`;
    setPhraseArr([
      ...phraseArr,
      randomPhrase
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
          phraseArr.map((data, index) => <Phrase text={data} key={index} />)
        )}
      </div>
      <button
        className="btn btn_generate"
        onClick={() => randomPhrases(adjectivesArr, nounsArr)}
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
