import React from 'react';


interface TodoProps {
  title: string;
}

const Todo: React.FC<TodoProps> = (props) => {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div>
        <button>지우기</button>
      </div>
    </div>
  );
}

export default Todo;
