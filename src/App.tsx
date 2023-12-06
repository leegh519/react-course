import React from "react";

import Todo from "./component/Todo";

function App() {
  return (
    <div>
      <h1>할일</h1>
      <Todo title="퇴근하기"></Todo>
      <Todo title="저녁먹기"></Todo>
      <Todo title="잠자기"></Todo>
    </div>
  );
}

export default App;
