import { Link } from "react-router-dom";

export default function Sidebar({ open, setOpen }) {
  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <div className={`sidebar-pannel container ${open ? "open" : ""}`}>
        <div>
          <span>Navigations</span>
          <button onClick={() => setOpen(false)}>❌</button>
        </div>
        <hr />
        <div className="pages">
          <Link
            onClick={() => {
              window.scrollTo({ top: 0 });
              setOpen(false);
            }}
            to="/wok-of-fame/menu"
          >
            Menu 📃
          </Link>
          <Link
            onClick={() => {
              window.scrollTo({ top: 0 });
              setOpen(false);
            }}
            to="/wok-of-fame/reserve"
          >
            Reserve a Table 🪑
          </Link>
          <Link
            onClick={() => {
              window.scrollTo({ top: 0 });
              setOpen(false);
            }}
            to="/wok-of-fame/plate"
          >
            Plate 🍽️
          </Link>
        </div>
      </div>
    </div>
  );
}
