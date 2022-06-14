import React from "react";

import { Board } from "../components/board.component";
import { BoardContainer } from "../components/board-container.component";

export const TimeLimitScreen = () => {
  return (
    <>
      <BoardContainer>
        <Board />
        <br />
      </BoardContainer>
    </>
  );
};
