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
            onClick={() => window.scrollTo({ top: 0 })}
            to="/wok-of-fame/menu"
            onClick={() => setOpen(false)}
          >
            Menu 📃
          </Link>
          <Link
            onClick={() => window.scrollTo({ top: 0 })}
            to="/wok-of-fame/reserve"
            onClick={() => setOpen(false)}
          >
            Reserve a Table 🪑
          </Link>
          <Link
            onClick={() => window.scrollTo({ top: 0 })}
            to="/wok-of-fame/plate"
            onClick={() => setOpen(false)}
          >
            Plate 🍽️
          </Link>
        </div>
      </div>
    </div>
  );
}
