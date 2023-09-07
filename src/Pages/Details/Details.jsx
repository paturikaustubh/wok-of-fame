import { useState } from "react";
import { Consumer } from "../../resources/Context/Context";
import Dialog from "../../components/Dialog/Dialog";
import { useLocation } from "react-router-dom";

export default function Address() {
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    phNo: "",
    email: "",
    address: "",
  });

  const reserveStatus = useLocation().state;

  return (
    <Consumer>
      {({ totalPayment }) => {
        return (
          <Consumer>
            {({ tableDetails }) => {
              return (
                <div className="container address bg-light">
                  <div className="address-title">
                    <span>Provide your details</span>
                    <button
                      className="save-data-button"
                      onClick={() => setShowSaveDialog(true)}
                      disabled={
                        formDetails.firstName === "" ||
                        formDetails.firstName.length > 25 ||
                        formDetails.lastName === "" ||
                        formDetails.lastName.length > 25 ||
                        formDetails.phNo === "" ||
                        formDetails.phNo.length !== 10 ||
                        formDetails.email === "" ||
                        formDetails.address === ""
                      }
                    >
                      Save Details
                    </button>
                    <Dialog
                      title={"Save Details"}
                      show={showSaveDialog}
                      setShow={setShowSaveDialog}
                      content={
                        <div className="save-data-dialog">
                          <div style={{ fontSize: "1.3em", fontWeight: 500 }}>
                            Bemoce a member of our family!
                          </div>
                          <div>
                            <label
                              htmlFor="data-name"
                              style={{ fontWeight: 400 }}
                            >
                              What would you like to call it?
                            </label>
                            <input
                              autoFocus
                              type="text"
                              className="data-name-input"
                              id="data-name"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                      }
                      actions={
                        <button
                          className="dialog-action-button blue"
                          onClick={() => setShowSaveDialog(false)}
                        >
                          Save
                        </button>
                      }
                    />
                  </div>

                  <div className="thank-you-text">
                    Thank you for choosing us ❤️. We hope you love our food and
                    we look forward to serve you again!
                  </div>

                  <form
                    className="details-form"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="grid-form-inputs">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="First Name"
                        id="first-name"
                        onInput={({ target }) => {
                          setFormDetails((prevVal) => ({
                            ...prevVal,
                            firstName: target.value,
                          }));
                          const element = document.getElementById(target.id);
                          if (target.value.length > 25)
                            element.classList.add("invalid");
                          else element.classList.remove("invalid");
                        }}
                      />
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Last Name"
                        id="last-name"
                        onInput={({ target }) => {
                          setFormDetails((prevVal) => ({
                            ...prevVal,
                            lastName: target.value,
                          }));
                          const element = document.getElementById(target.id);
                          if (target.value.length > 25)
                            element.classList.add("invalid");
                          else element.classList.remove("invalid");
                        }}
                      />
                      <div className="ph-no">
                        <div>+91</div>
                        <input
                          type="number"
                          inputMode="numeric"
                          className="form-input"
                          placeholder="Phone Number"
                          id="phno"
                          min={0}
                          max={9999999999}
                          onInput={({ target }) => {
                            setFormDetails((prevVal) => ({
                              ...prevVal,
                              phNo: target.value,
                            }));
                            const element = document.getElementById(target.id);
                            if (
                              target.value.length > 10 ||
                              target.value.includes("+") ||
                              target.value.includes("-") ||
                              target.value.includes(".") ||
                              target.value.includes("e")
                            )
                              element.classList.add("invalid");
                            else element.classList.remove("invalid");
                          }}
                        />
                      </div>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="Email Address"
                        id="email"
                        onInput={({ target }) =>
                          setFormDetails((prevVals) => ({
                            ...prevVals,
                            email: target.value,
                          }))
                        }
                      />
                      <textarea
                        type="text"
                        className="form-input text-area"
                        placeholder="Address"
                        id="address"
                        onInput={({ target }) =>
                          setFormDetails((prevVals) => ({
                            ...prevVals,
                            address: target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="form-buttons">
                      <button
                        type="submit"
                        className="continue-button"
                        onClick={() => setShowPaymentDialog(true)}
                        disabled={
                          formDetails.firstName === "" ||
                          formDetails.firstName.length > 25 ||
                          formDetails.lastName === "" ||
                          formDetails.lastName.length > 25 ||
                          formDetails.phNo === "" ||
                          formDetails.phNo.length !== 10 ||
                          formDetails.email === "" ||
                          formDetails.address === ""
                        }
                      >
                        Proceed to Payment
                      </button>
                      <Dialog
                        title={"OOPS!"}
                        show={showPaymentDialog}
                        setShow={setShowPaymentDialog}
                        content={
                          <>
                            {reserveStatus.reserve ? (
                              <div>
                                Since we can't connect to the payment API at the
                                moment, we request you to pay the amount of,{" "}
                                <span className="text-info">
                                  ₹
                                  {reserveStatus.reserve
                                    ? totalPayment + 200
                                    : totalPayment}
                                </span>{" "}
                                upon arriving. For now, the table has been
                                reserved for {tableDetails.count}{" "}
                                {tableDetails.count > 1 ? "people" : "person"}{" "}
                                at {tableDetails.table} on{" "}
                                {Date(tableDetails.date)}.
                              </div>
                            ) : (
                              <div>
                                Since we can't connect to the payment API, we
                                provide you Cash on Delivery service for the
                                amount,{" "}
                                <span className="text-info">
                                  ₹{totalPayment}
                                </span>
                                .
                              </div>
                            )}
                          </>
                        }
                      />
                    </div>
                  </form>
                </div>
              );
            }}
          </Consumer>
        );
      }}
    </Consumer>
  );
}
