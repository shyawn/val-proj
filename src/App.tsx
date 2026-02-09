import { useState } from "react";
import BubuPinch from "/pinching-cheeks-bubu.gif";
import DuduSad from "/dudu-sad.gif";
import DuduCryingTable from "/dudu-crying-table.gif";
import DuduCrying from "/dudu-crying.gif";
import DuduSob from "/dudu-sob.gif";
import DuduSit from "/dudu-sit.gif";
import BubuKiss from "/bubu-kiss.jpg";
import "./App.css";

const noTextArr: string[] = [
  "No",
  "Are you sure?",
  "Really?",
  "Are you positive?",
  "Just think about it..",
  "If you say no, I'll be very saddie",
  "I'll be saddieee",
  "I'll be very very very saddieee",
  "Ok I'll stop asking..",
  "Just kidding, PLEASE SAY YESSS!",
  "Nuuuuuuuuuuuu",
  "",
];

function App() {
  const [stage, setStage] = useState("stage-no");
  const [counter, setCounter] = useState(0);

  const changeNoText = () => {
    setCounter((prev) => {
      if (prev < noTextArr.length - 1) {
        return prev + 1;
      } else {
        setStage("stage-yes");
        return 0;
      }
    });
  };
  return (
    <section className="select-none flex flex-col items-center justify-center">
      {stage === "stage-no" ? (
        <>
          {counter > 9 ? (
            <img src={DuduSit} width={300} height={300} />
          ) : counter > 7 ? (
            <img src={DuduSob} width={300} height={300} />
          ) : counter >= 6 ? (
            <img src={DuduCrying} width={300} height={300} />
          ) : counter === 5 ? (
            <img src={DuduCryingTable} width={300} height={300} />
          ) : counter === 4 ? (
            <img src={DuduSad} width={300} height={300} />
          ) : (
            <img src={BubuPinch} width={500} height={500} />
          )}

          <div className="text-2xl font-bold mt-5">
            Heyyy will you be my valentine?
          </div>

          <div className="flex items-center justify-center gap-3 mt-3 text-center">
            <button
              className="bg-green-500 text-white text-[18px] font-semibold rounded mt-1 py-1 px-2"
              style={{ fontSize: counter ? `${(counter + 1) * 18}px` : "18px" }}
              onClick={() => setStage("stage-yes")}
            >
              Yes
            </button>

            {noTextArr[counter] !== "" && (
              <button
                className="bg-red-500 text-white text-[18px] font-semibold rounded py-1 px-2"
                onClick={changeNoText}
              >
                {noTextArr[counter]}
              </button>
            )}
          </div>
        </>
      ) : (
        <>
          <img src={BubuKiss} />
          <div className="text-center font-bold text-4xl mt-5">
            Yayy! I'm so happy!
          </div>
        </>
      )}
    </section>
  );
}

export default App;
