import React, { useState } from "react";
import data from "../Data";
import "./Accordian.css";

export default function Accordian() {
  const [selectedItem, setSlectedItem] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multipal, setMultipal] = useState([]);

  const handleItemSlected = (slectedItemId) => {
    console.log(slectedItemId, "handleSelected called");
    setSlectedItem(slectedItemId === selectedItem ? null : slectedItemId);
  };

  const handleMultipalSelection = (slectedItemId) => {
    console.log("halemulitselectedc called");
    const cpyMultipal = [...multipal];

    const findIndexOfCurrentId = cpyMultipal.indexOf(slectedItemId);

    if (findIndexOfCurrentId === -1) {
      cpyMultipal.push(slectedItemId);
    } else {
      cpyMultipal.splice(findIndexOfCurrentId, 1);
    }
    setMultipal(cpyMultipal);
  };

  return (
    <div className="accordian">
      <button onClick={() => setEnableMulti(!enableMulti)}>
        {enableMulti ? "Disable Multislection" : "Enable Multiselection"}
      </button>
      {data.map((item) => {
        return (
          <div className="accordian-item" key={item.id}>
            <div
              className="title"
              onClick={
                enableMulti
                  ? () => handleMultipalSelection(item.id)
                  : () => handleItemSlected(item.id)
              }
            >
              <h3>{item.question}</h3>
              <span style={{ fontSize: "2rem" }}>
                {selectedItem === item.id || multipal.indexOf(item.id) !== -1
                  ? "-"
                  : "+"}
              </span>
            </div>
            {selectedItem === item.id || multipal.indexOf(item.id) !== -1 ? (
              <div>
                <h3>{item.answer}</h3>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
