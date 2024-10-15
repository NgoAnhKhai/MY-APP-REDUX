import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCounter, decrement, increment } from "./multiCounterSlice";
function MultiCounter() {
  const dispatch = useDispatch();
  const counters = useSelector((state) => state.multiCounter);
  return (
    <div>
      <button onClick={() => dispatch(addCounter())}>Add counter</button>
      {counters.map((counter, index) => (
        <div key={index} style={{ margin: "10px" }}>
          <button onClick={() => dispatch(increment(index))}>+</button>
          <span>{counter.count !== undefined ? counter.count : 0}</span>
          <button onClick={() => dispatch(decrement(index))}>-</button>
        </div>
      ))}
    </div>
  );
}

export default MultiCounter;
