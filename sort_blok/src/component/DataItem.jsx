import React, { useEffect, useState } from "react";
import "./DataItem.css";
export default function DataItem() {
  const [stage_1, setStage_1] = useState([]);
  const [stage_2, setStage_2] = useState([]);
  const [stage_3, setStage_3] = useState([]);
  const [data, setData] = useState([
    { id: 1, name: 1, desc: "helow" },
    { id: 2, name: 1, desc: "helow" },
    { id: 3, name: 2, desc: "helow" },
    { id: 4, name: 2, desc: "helow" },
    { id: 5, name: 2, desc: "helow" },
    { id: 6, name: 2, desc: "helow" },
    { id: 7, name: 3, desc: "helow" },
    { id: 8, name: 3, desc: "helow" },
    { id: 9, name: 3, desc: "helow" },
  ]);

  useEffect(() => {
    setStage_1(data.filter((item) => item.name === 1));
    setStage_2(data.filter((item) => item.name === 2));
    setStage_3(data.filter((item) => item.name === 3));
  }, [data]);

  function leftFn(sub) {
    

    setData(
      data.map((item) => {
        if (item.id === sub) {
          --item.name;
          return item;
        } else {
          return item;
        }
      })
    );
  }

  function rightFn(sub) {
    setData(
        data.map((item) => {
          if (item.id === sub) {
            ++item.name;
            return item;
          } else {
            return item;
          }
        })
      );
  }
  return (
    <div className="main-block">
      <div className="stage-1">
        <h3>stage 1</h3>
        {stage_1.map((item, index) => {
          return (
            <div className="box" key={index}>
              <p>
                {item.name} {item.desc}
              </p>
              <button onClick={() => rightFn(item.id)}>right</button>
            </div>
          );
        })}
      </div>
      <div className="stage-2">
        <h3>stage 2</h3>
        {stage_2.map((item, index) => {
          return (
            <div className="box" key={index}>
              <p>
                {item.name} {item.desc}
              </p>
              <button onClick={() => leftFn(item.id)}>left</button>
              <button onClick={() => rightFn(item.id)}>right</button>
            </div>
          );
        })}
      </div>
      <div className="stage-3">
        <h3>stage 3</h3>
        {stage_3.map((item, index) => {
          return (
            <div className="box" key={index}>
              <p>
                {item.name} {item.desc}
              </p>
              <button onClick={() => leftFn(item.id)}>left</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
