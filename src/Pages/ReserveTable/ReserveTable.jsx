import { useEffect } from "react";
import { Consumer } from "../../resources/Context/Context";
import { Link } from "react-router-dom";

export default function ReserverTable() {
  useEffect(() => window.scrollTo({ top: 0 }), [false]);

  return (
    <div className="container bg-light border wrapper">
      <div className="reserve-title">Reserve Table</div>
      <div className="reserve-subtitle text-secondary">
        Skip the wait and savor every moment—reserve your table today for a
        dining experience tailored just for you.
      </div>

      <div action="" className="table-details-form">
        <div className="table-form-head">Specify details for reservation</div>
        <Consumer>
          {({ tableDetails, setTableDetails, cart, updateCart }) => {
            return (
              <form className="flex-form-inputs">
                <div>
                  <label htmlFor="table-type" className="form-label">
                    Select a section of your choice
                  </label>
                  <select
                    name="table"
                    id="table-type"
                    className="form-input"
                    value={tableDetails.table}
                    onChange={({ target }) =>
                      setTableDetails({
                        ...tableDetails,
                        [target.name]: target.value,
                      })
                    }
                  >
                    <option>A/C</option>
                    <option>Non A/C</option>
                    <option>Open Top</option>
                    <option>Beach View</option>
                    <option>Restro Bar</option>
                  </select>
                  <span
                    className={`age-alert ${
                      tableDetails.table === "Restro Bar" ? "show" : ""
                    } text-danger`}
                  >
                    You need to carry your Aadhar or any other ID proof to
                    confirm your age before entering.
                  </span>
                </div>
                <div>
                  <label htmlFor="count" className="form-label">
                    Table for how many members?
                  </label>
                  <input
                    type="number"
                    name="count"
                    id="count"
                    placeholder="Count"
                    className="form-input"
                    value={tableDetails.count}
                    min={1}
                    max={15}
                    onInput={({ target }) => {
                      setTableDetails({
                        ...tableDetails,
                        [target.name]: target.value,
                      });
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="date-time" className="form-label">
                    Reserve on...
                  </label>
                  <input
                    type="datetime-local"
                    name="date"
                    id="date-time"
                    placeholder=""
                    className="form-input"
                    value={tableDetails.date}
                    onChange={({ target }) =>
                      setTableDetails({
                        ...tableDetails,
                        [target.name]: target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <div>Skip the wait and dive straight into your meal!</div>
                  <div className="text-secondary">
                    Pre-order now and enjoy a seamless dining experience with no
                    waiting time—just great food, right when you arrive.
                  </div>
                  <div
                    className="d-flex flex-column align-items-start mt-2"
                    style={{ gap: "0.5em" }}
                  >
                    <button
                      disabled={
                        tableDetails.table === "" ||
                        tableDetails.count <= 0 ||
                        (tableDetails.count > 15 && tableDetails.count != 69) ||
                        tableDetails.date === ""
                      }
                      // style={{ all: "unset" }}
                      type="button"
                      className="continue-button"
                      style={{ padding: 0 }}
                    >
                      <Link
                        onClick={() => window.scrollTo({ top: 0 })}
                        to="/wok-of-fame/menu"
                        state={{ reserve: true, prevCart: cart }}
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          height: "100%",
                          width: "100%",
                          display: "inline-block",
                          marginLeft: 0,
                          paddingBlock: "0.5em",
                          paddingInline: "0.5em",
                        }}
                      >
                        Open menu
                      </Link>
                    </button>
                    <button
                      disabled={
                        tableDetails.table === "" ||
                        tableDetails.count <= 0 ||
                        (tableDetails.count > 15 && tableDetails.count != 69) ||
                        tableDetails.date === ""
                      }
                      type="button"
                      className="save-data-button"
                      style={{ padding: 0 }}
                    >
                      <Link
                        onClick={() => window.scrollTo({ top: 0 })}
                        to={
                          cart.length > 0
                            ? "/wok-of-fame/plate"
                            : "/wok-of-fame/checkout"
                        }
                        state={{ reserve: true }}
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          height: "100%",
                          width: "100%",
                          display: "inline-block",
                          marginLeft: 0,
                          paddingBlock: "0.6em",
                          paddingInline: "0.5em",
                        }}
                      >
                        Continue Reservation
                      </Link>
                    </button>
                  </div>
                </div>
                {cart.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "2rem",
                      // marginTop: "-rem",
                    }}
                  >
                    <div style={{ fontSize: "1.2rem" }}>
                      With{" "}
                      {cart
                        .map(({ qnty }) => qnty)
                        .reduce(
                          (accumulator, currentValue) =>
                            accumulator + currentValue,
                          0
                        )}{" "}
                      items on plate😋
                    </div>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => updateCart()}
                      type="button"
                    >
                      Clear menu
                    </button>
                  </div>
                )}
              </form>
            );
          }}
        </Consumer>
      </div>
    </div>
  );
}
