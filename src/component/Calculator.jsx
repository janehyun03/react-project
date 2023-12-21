import { useState } from "react";

export default function Calculator() {
  const initialArr = [
    {
      participation: 0,
      coursework: [],
      midterm: 0,
      finalPro: 0,
      finalExam: 0,
    },
  ];
  const [arr, setArr] = useState(initialArr);
  const [category, setCategory] = useState("participation");
  const [score, setScore] = useState(0);
  const [overall, setOverall] = useState(0);
  const [average, setAverage] = useState(0);

  function saveData() {
    if (category == "participation" && score <= 100 && score >= 0) {
      arr[0].participation = score;
      Average();
    } else if (category == "coursework" && score <= 100 && score >= 0) {
      arr[0].coursework.push(Number(score));
      let sum = 0;
      arr[0].coursework.forEach((e) => {
        sum += Number(e);
      });
      setAverage(sum / arr[0].coursework.length);
      Average();
    } else if (category == "midterm" && score <= 100 && score >= 0) {
      arr[0].midterm = score;
      Average();
    } else if (category == "finalPro" && score <= 100 && score >= 0) {
      arr[0].finalPro = score;
      Average();
    } else if (category == "finalExam" && score <= 100 && score >= 0) {
      arr[0].finalExam = score;
      Average();
    }
    console.log("arr", arr);
  }

  function Average() {
    setOverall(
      arr[0].participation * 0.1 +
        average * 0.2 +
        arr[0].midterm * 0.15 +
        arr[0].finalPro * 0.3 +
        arr[0].finalExam * 0.25
    );
    console.log("Average", average);
  }

  return (
    <>
      <div className="container">
        <select
          name="category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="participation">Participation</option>
          <option value="coursework">Coursework</option>
          <option value="midterm">Midterm</option>
          <option value="finalPro">Final Project</option>
          <option value="finalExam">Final Exam</option>
        </select>
        <br />
        <input
          type="text"
          placeholder="0 - 100"
          onChange={(e) => {
            setScore(e.target.value);
          }}
        ></input>
      </div>

      <br />
      <div className="container">
        <button onClick={() => saveData()}>Calculate average</button>
      </div>
      <div className="cal">
        <p>Participation : {arr[0].participation}</p>
        <p style={{ color: "gray" }}>
          Coursework List: {arr[0].coursework.join(",")}
        </p>
        <p>
          Coursework :{" "}
          {arr[0].coursework.length !== 1 ? average : arr[0].coursework[0]}
        </p>
        <p>Midterm Project : {arr[0].midterm}</p>
        <p>Final Project : {arr[0].finalPro}</p>
        <p>Final Exam : {arr[0].finalExam}</p>
        <div className="square">
          <p style={{ color: "red" }}>overall average:</p>
          <p style={{ color: "red" }}>{overall}</p>
        </div>
      </div>
    </>
  );
}
