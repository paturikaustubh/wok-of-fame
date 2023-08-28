import { Link } from "react-router-dom";

export default function Sidebar({ open, setOpen }) {
  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <div className={`sidebar-pannel ${open ? "open" : ""}`}>
        <div>
          <span>Navigations</span>
          <button onClick={() => setOpen(false)}>❌</button>
        </div>
        <hr />
        <div className="pages">
          <Link to="/wok-of-fame/menu" onClick={() => setOpen(false)}>
            Menu 📃
          </Link>
          <Link to="reserve" onClick={() => setOpen(false)}>
            Reserve a Table 🪑
          </Link>
          <Link to="/wok-of-fame/plate" onClick={() => setOpen(false)}>
            Plate 🍽️
          </Link>
        </div>
      </div>
    </div>
  );
}
