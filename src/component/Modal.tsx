interface ModalProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const Modal = (props: ModalProps) => {
  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>ㄹㅇ?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        ㄴㄴ
      </button>
      <button className="btn" onClick={confirmHandler}>
        ㅇㅇ
      </button>
    </div>
  );
};

export default Modal;
