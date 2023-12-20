import { useState } from "react";
import { produce } from "immer";

export default function ThreeSquares() {
  const InitialSquare = [
    { id: 1, islocked: true },
    { id: 2, islocked: true },
    { id: 3, islocked: true },
  ];

  const [squareArr, setSquareArr] = useState(InitialSquare);
  const [btnDisable, setBtnDisable] = useState(true);

  function Btn() {
    const arr = [];
    for (let i = 0; i <= squareArr.length - 1; i++) {
      arr.push(squareArr[i].islocked);
    }

    setBtnDisable(
      arr.some((e) => {
        if (e === true) {
          return true;
        } else if (e === false) {
          return false;
        }
      })
    );
    return (
      <>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button disabled={btnDisable}>
            {btnDisable ? "closed" : "open"}
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container">
        {squareArr.map((e, i) => {
          return (
            <button
              key={i}
              className="square"
              onClick={() => {
                setSquareArr(
                  produce((draft) => {
                    const selectBtn = draft.find((a) => a.id == e.id);
                    if (selectBtn.islocked == true) selectBtn.islocked = false;
                    else if (selectBtn.islocked == false)
                      selectBtn.islocked = true;
                  })
                );
              }}
            >
              {e.islocked ? "locked" : "unlocked"}
            </button>
          );
        })}
      </div>
      <br />
      <Btn />
    </>
  );
}
