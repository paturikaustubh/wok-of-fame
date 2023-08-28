export default function Dialog({ title, show, setShow, content, actions }) {
  return (
    <dialog open={show} className={`dialog ${show ? "show" : "hide"}`}>
      <div className="dialog-body">
        <div className="dialog-title">
          <div>{title}</div>
          <button
            className="dialog-close-button"
            onClick={() => setShow(false)}
          >
            ❌
          </button>
        </div>
        <div className="dialog-content">{content}</div>
        <div className="dialog-actions">{actions}</div>
      </div>
    </dialog>
  );
}
