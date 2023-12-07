import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

interface TodoProps {
  title: string;
}

const Todo = (props: TodoProps) => {
  // useState는 항상 2가지 속성이 들어간 배열을 리턴
  // 첫번째가 상태값을 가지고 있는 변수
  // 두번째는 상태를 변경할 수 있는 함수
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          안하기
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
};

export default Todo;
