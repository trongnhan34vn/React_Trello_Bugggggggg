import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Board from "react-trello-ts";
import Modal from "./Modal";
import { BoardData } from "react-trello-ts/dist/types/Board";

const data = {
  lanes: [
    {
      id: "lane1",
      title: "Planned Tasks",
      label: "2/2",
      cards: [
        {
          id: "Card1",
          title: "Write Blog",
          description: "Can AI make memes",
          label: "30 mins",
          draggable: true,
        },
        {
          id: "Card2",
          title: "Pay Rent",
          description: "Transfer via NEFT",
          label: "5 mins",
          metadata: { sha: "be312a1" },
          draggable: true,
        },
      ],
    },
    {
      id: "lane2",
      title: "Completed",
      label: "0/0",
      cards: [],
    },
  ],
};

function App() {
  const [cardId, setCardId] = useState<string | null>(null);
  console.log(cardId);

  // const [dataDB, setDataDB] = useState<BoardData>(data);

  // useEffect(() => {
  //   setDataDB(data)
  // },[])

  return (
    <div>
      <Board
        onCardClick={(cardId) => setCardId((pre) => (pre = cardId))}
        editable
        draggable
        cardDraggable
        data={data}
      />
      <Modal cardId={cardId} />
    </div>
  );
}

export default App;
