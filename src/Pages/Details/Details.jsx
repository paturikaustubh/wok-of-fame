import { useContext, useState } from "react";
import { Consumer, ConsumerEffect } from "../../resources/Context/Context";
import Dialog from "../../components/Dialog/Dialog";
import { useLocation } from "react-router-dom";

export default function Address() {
  const { userDetails, setUserDetails } = useContext(ConsumerEffect);
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [formDetails, setFormDetails] = useState({
    firstName: userDetails.firstName ?? "",
    lastName: userDetails.lastName ?? "",
    phNo: userDetails.phNo > 0 ? userDetails.phNo : "",
    email: userDetails.email ?? "",
    address: userDetails.address ?? "",
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
                      onClick={() => {
                        setShowSaveDialog(true);
                        setUserDetails(formDetails);
                      }}
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
                      title={"Details are saved"}
                      show={showSaveDialog}
                      setShow={setShowSaveDialog}
                      content={
                        <div className="save-data-dialog">
                          <div style={{ fontSize: "1.3em", fontWeight: 500 }}>
                            Thank you for becoming a member!
                          </div>
                        </div>
                      }
                      actions={
                        <button
                          className="dialog-action-button blue"
                          onClick={() => {
                            setShowSaveDialog(false);
                          }}
                        >
                          Close
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
                        value={formDetails.firstName}
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
                        value={formDetails.lastName}
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
                          value={formDetails.phNo}
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
                        value={formDetails.email}
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
                        value={formDetails.address}
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
                        Confirm Order
                      </button>
                      <Dialog
                        title={
                          reserveStatus.reserve
                            ? "Saved a table for you!"
                            : "Cooking your order now!"
                        }
                        show={showPaymentDialog}
                        setShow={setShowPaymentDialog}
                        content={
                          <>
                            {reserveStatus.reserve ? (
                              <div>
                                You can pay the amount of{" "}
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
                                Our chef is on your order! You will recieve your
                                order within 30min. Payment of{" "}
                                <span className="text-info">
                                  ₹{totalPayment}
                                </span>{" "}
                                can be done by Cash on Delivery.
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
