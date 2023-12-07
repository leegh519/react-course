interface BackdropProps {
  onCancel: () => void;
}

const Backdrop = (props: BackdropProps) => {
  return <div className="backdrop" onClick={props.onCancel}></div>;
};

export default Backdrop;
