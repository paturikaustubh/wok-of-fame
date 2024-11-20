import { useContext, useEffect, useState } from "react";
import { Consumer, ConsumerEffect } from "../../resources/Context/Context";
import { Link, useLocation } from "react-router-dom";

export default function Plate() {
  const [setRound, setSetRound] = useState(false);

  const location = useLocation().state;
  const reserveStatus = location ?? false;

  useEffect(() => window.scrollTo({ top: 0 }), [false]);

  return (
    <Consumer>
      {({ cart, updateCart, setTotalPayment }) => {
        const totalCartQnty = cart
          .map(({ qnty }) => qnty)
          .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        let bill = 0;
        const delivery = 50;
        const reservationCharges = 150;
        cart.map(({ qnty, cost }) => {
          bill += qnty * cost;
        });
        let gst = Math.floor(bill * (18 / 100));
        let grandTotal =
          gst + bill + (reserveStatus ? reservationCharges : delivery);
        const roundoff = 10 - (grandTotal % 10);
        return (
          <>
            {cart.length === 0 ? (
              <div
                style={{
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <p className="such-empty">Woah... Such empty...🍽️</p>
                <Link
                  onClick={() => window.scrollTo({ top: 0 })}
                  to="/wok-of-fame/menu"
                  className="btn btn-lg btn-outline-danger"
                >
                  Continue Cooking
                </Link>
              </div>
            ) : (
              <div className="plate container bg-light">
                <div className="plate-count-div">
                  <div className="plate-count">{totalCartQnty}</div>
                  <div>{`Item${
                    totalCartQnty > 1 ? "s" : ""
                  } on the plate!😋`}</div>
                </div>

                <div className="cart-items-list">
                  {cart
                    .sort((a, b) => a.category - b.category)
                    .sort((a, b) => b.veg - a.veg)
                    .map((item, indx) => {
                      return (
                        <CartItem
                          item={item}
                          updateCart={updateCart}
                          key={indx}
                        />
                      );
                    })}
                  <hr className="w-100" />
                  <div className="additional-costs">
                    <div>
                      <div className="subtotal-text">Subtotal</div>
                      <div className="subtotal-cost">₹{bill}</div>
                    </div>
                    <div>
                      <div className="gst-text">GST</div>
                      <div className="gst-cost">
                        <span>₹{gst}</span>
                        <span
                          style={{ fontSize: "small", color: "var(--red)" }}
                        >
                          {Math.floor(bill * (18 / 100)) !==
                            bill * (18 / 100) && (
                            <div>
                              -
                              {(
                                bill * (18 / 100) -
                                Math.floor(bill * (18 / 100))
                              ).toFixed(2)}
                            </div>
                          )}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="delivery-text">
                        {reserveStatus
                          ? "Reservation Charges"
                          : "Delivery Charges"}
                      </div>
                      <div className="delivery-cost">
                        ₹{reserveStatus ? reservationCharges : delivery}
                      </div>
                    </div>
                    {setRound && (
                      <div>
                        <div className="round-off-text">Tip</div>
                        <div className="round-off-cost">
                          <span>₹{roundoff}</span>
                          <button onClick={() => setSetRound(false)}>❌</button>
                        </div>
                      </div>
                    )}
                  </div>
                  <hr className="w-100" />

                  <div className="cart-total">
                    <div className="text-info">Grand Total</div>
                    <div>₹{setRound ? grandTotal + roundoff : grandTotal}</div>
                  </div>
                  {grandTotal % 10 !== 0 && !setRound && !reserveStatus && (
                    <div className="round-off">
                      <div>Tip our delivery guy with</div>
                      <button
                        onClick={() => {
                          setSetRound(true);
                        }}
                      >{`₹${Math.round(10 - (grandTotal % 10))}`}</button>
                    </div>
                  )}
                </div>
                <div className="continue">
                  <Link
                    to="/wok-of-fame/checkout"
                    state={{ reserve: reserveStatus }}
                    className="continue-button"
                    onClick={() => {
                      setTotalPayment(
                        setRound ? grandTotal + roundoff : grandTotal
                      );
                    }}
                    style={{ marginLeft: "auto" }}
                  >
                    Continue
                  </Link>
                </div>
              </div>
            )}
          </>
        );
      }}
    </Consumer>
  );
}

function CartItem({ item, updateCart }) {
  const { category, cost, details, img, name, qnty, rating, veg } = item;

  const { cart } = useContext(ConsumerEffect);

  let cartCount = cart.filter((item) => {
    if (item.name?.includes(name)) return item.qnty ?? 0;
  })[0];
  cartCount = cartCount ? cartCount.qnty : 0;

  const [count, setCount] = useState(cartCount);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (!initialLoad) {
      updateCart({
        details: details,
        rating: rating,
        veg: veg,
        name: name,
        qnty: count,
        cost: cost,
        category: category,
        img: img,
      });
    } else {
      setInitialLoad(false);
    }
  }, [count]);

  return (
    <div className="border border-top-0 border-right-0 border-left-0 py-lg-4 py-2 px-3 d-flex flex-column flex-lg-row">
      <img
        loading="lazy"
        src={img ? `Images/Menu/${img}.jpg` : ""}
        alt={name}
        style={{
          maxWidth: "20rem",
          aspectRatio: "16/9",
          transitionDuration: "200ms",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <div
        className="d-flex flex-lg-row flex-column align-items-start w-100 px-lg-4 px-2 pt-2"
        style={{ justifyContent: "space-between" }}
      >
        <div className="d-flex flex-column" style={{ gap: "0.6em" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              alignItems: "center",
            }}
          >
            {category !== "dessert" && category !== "baverage" && (
              <img
                src={veg ? "Images/Veg.png" : "Images/Non.png"}
                alt={veg ? "Veg" : "Non-Veg"}
                width={20}
                height={20}
              />
            )}
            <p className="item-name">{name}</p>
          </div>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <button
            style={{
              ...(cartCount > 0 && { display: "none" }),
            }}
            className="btn btn-dark add-btn"
            onClick={async () => {
              setCount(cartCount + 1);
            }}
          >
            + 🍽️
          </button>
          <div
            className="btn-group float-right mb-3"
            role="group"
            style={{
              ...(cartCount === 0 && { display: "none" }),
            }}
          >
            <button
              className="btn btn-dark"
              onClick={async () => {
                setCount(cartCount - 1);
              }}
            >
              -
            </button>
            <div className="btn btn-text">{cartCount}</div>
            <button
              disabled={cartCount >= 10}
              className="btn btn-dark"
              onClick={async () => {
                setCount(cartCount + 1);
              }}
            >
              +
            </button>
          </div>
          <div className="mt-3">
            <span
              style={{ ...(cartCount > 0 && { display: "none" }) }}
              className="text-secondary item-cost-big"
            >
              {`₹${cost}`}
            </span>
            <span
              style={{ ...(cartCount === 0 && { display: "none" }) }}
              className="text-success item-cost-big"
            >
              {`₹${cost * cartCount} `}
            </span>
            <span
              style={{ ...(cartCount === 0 && { display: "none" }) }}
              className=""
            >
              ({cost} x {cartCount})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
