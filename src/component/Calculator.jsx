import { useState } from "react";

export default function Calculator() {
  const [score, setScore] = useState(0);
  const [category, setCategory] = useState("participation");
  const [arr, setArr] = useState([{ category: "", score: 0 }]);

  function saveData() {
    // 카테고리저장
    // setCategory();
    // console.log(category);
    //인풋벨류저장
    // setWeight();
    // console.log(weight);
  }
  function Average() {}

  return (
    <>
      <select
        name="category"
        onChange={(e) => {
          console.log(category);
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
        onChange={(e) => {
          console.log(score);
          setScore(e.target.value);
        }}
      ></input>
      <br />

      <button
        onClick={(e) => {
          // 여기 버튼을 누르면 항목을 저장 후, 계산
          // 일단 셀렉트 벨류, 인풋의 값 입력
          // map을 돌려야 하나?? 버튼 누를 때마다 average에 값을 추가

          console.log(category, score);
          // setArr(
          //   // arr.map((a) => {
          //   //   console.log(a);
          //   //   arr = [{ category: category, score: score }];
          //   // })
          //   [...arr, { category: category, score: score }]
          // );

          {
            if (
              arr.filter((e) => {
                console.log(e);
                e == category;
                console.log(e);
                // return setArr([...arr, { category: category, score: score }]);
              })
            );
          }

          console.log(arr);
        }}
      >
        Calculate average
      </button>
    </>
  );
}
