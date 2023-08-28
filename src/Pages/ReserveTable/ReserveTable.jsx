import { useState } from "react";
import { Consumer } from "../../resources/Context/Context";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

export default function ReserverTable() {
  return (
    <div className="container bg-light border wrapper">
      <div className="reserve-title">Don't wait for others to get free!</div>
      <div className="reserve-subtitle text-secondary">
        Book a seat for you/your family and we will keep it available till your
        arrival.
      </div>

      <div action="" className="table-details-form">
        <div className="table-form-head">Specify details for reservation</div>
        <Consumer>
          {({ tableDetails, setTableDetails, cart, updateCart }) => {
            return (
              <div className="flex-form-inputs">
                <div>
                  <label htmlFor="table-type" className="form-label">
                    Select a table that you prefer
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
                    defaultValue={4}
                    type="number"
                    name="count"
                    id="count"
                    placeholder="Count"
                    className="form-input"
                    value={tableDetails.count}
                    onInput={({ target }) => {
                      setTableDetails({
                        ...tableDetails,
                        [target.name]: target.value,
                      });
                      const element = document.getElementById(target.id);

                      if (
                        (target.value > 15 || target.value <= 0) &&
                        target.value != 69
                      )
                        element.classList.add("invalid");
                      else if (
                        target.value <= 15 ||
                        target.value > 0 ||
                        target.value === "" ||
                        target.value === 69
                      )
                        element.classList.remove("invalid");
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
                  <div>Don't wait for your food when you arrive!</div>
                  <div className="text-secondary">
                    Pre-order your food now and enjoy your meal with ZERO
                    waiting time.
                  </div>
                  <button
                    className="continue-button"
                    style={{ marginTop: "1em", padding: 0, marginLeft: 0 }}
                    disabled={
                      tableDetails.table === "" ||
                      tableDetails.count <= 0 ||
                      (tableDetails.count > 15 && tableDetails.count != 69) ||
                      tableDetails.date === ""
                    }
                  >
                    <Link
                      to="/wok-of-fame/menu"
                      state={true}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        height: "100%",
                        width: "100%",
                        display: "inline-block",
                        paddingBlock: "0.5em",
                        paddingInline: "1.5em",
                      }}
                    >
                      Open menu
                    </Link>
                  </button>
                </div>
                <div
                  style={{
                    marginTop: "2rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "2rem",
                  }}
                >
                  <button
                    className="save-data-button"
                    style={{
                      padding: 0,
                      marginLeft: 0,
                    }}
                    disabled={
                      tableDetails.table === "" ||
                      tableDetails.count <= 0 ||
                      (tableDetails.count > 15 && tableDetails.count != 69) ||
                      tableDetails.date === ""
                    }
                  >
                    <Link
                      to={
                        cart.length > 0
                          ? "/wok-of-fame/plate"
                          : "/wok-of-fame/details"
                      }
                      state={{ reserve: true }}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        height: "100%",
                        width: "100%",
                        paddingBlock: "0.5rem",
                        paddingInline: "1.5rem",
                        display: "inline-block",
                      }}
                    >
                      Continue Reservation
                    </Link>
                  </button>
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
                      onClick={() => updateCart({})}
                    >
                      Remove menu
                    </button>
                  </div>
                )}
              </div>
            );
          }}
        </Consumer>
      </div>
    </div>
  );
}
