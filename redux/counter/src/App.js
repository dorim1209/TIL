import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { plus, minus } from "./store/modules/counter";
import { changeTheme } from "./store/modules/theme";

export default function App() {
  const [color, setColor] = useState("");
  const { number } = useSelector(state => state.counter);
  const { theme } = useSelector(state => state.theme);
  const dispatch = useDispatch(); //dispatch가 일어나게 되면 우리의 만들어 두었던 reducer로 감 dispatcha를 실행함으로써 자동으로 rendering 됨
  return (
    <div>
      <div
        style={{
          width: 500,
          height: 500,
          backgroundColor: theme,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h1>{number}</h1>
      </div>
      <button onClick={() => dispatch(plus())}>플러스</button>
      {/* type(action)값이 counter.js에 있는 reducer로 감 */}
      <button onClick={() => dispatch(minus())}>마이너스</button>
      <input
        type="text"
        value={color}
        onChange={e => setColor(e.target.value)}
      />
      <button onClick={() => dispatch(changeTheme(color))}>테마바꾸기</button>
    </div>
  );
}
