import { useEffect, useState } from "react";
import { Consumer } from "../../resources/Context/Context";
import { Link, useLocation } from "react-router-dom";

export default function Plate() {
  const [setRound, setSetRound] = useState(false);

  const location = useLocation().state;
  const reserveStatus = location ?? false;
  return (
    <Consumer>
      {({ cart, updateCart }) => {
        const totalCartQnty = cart
          .map(({ qnty }) => qnty)
          .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        let bill = 0;
        let delivery = 50;
        cart.map(({ qnty, cost }) => {
          bill += qnty * cost;
        });
        let gst = Math.floor(bill * (18 / 100));
        let grandTotal = gst + delivery + bill;
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
                  padding: 4,
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    fontWeight: 400,
                    fontSize: "3rem",
                  }}
                >
                  Woah... Such empty...🍽️
                </p>
                <Link
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
                  {cart.map((item, indx) => {
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
                      <div className="delivery-text">Delivery Charges</div>
                      <div className="delivery-cost">₹{delivery}</div>
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
                    <h1 className="text-info">Grand Total</h1>
                    <h1>₹{setRound ? grandTotal + roundoff : grandTotal}</h1>
                  </div>
                  {grandTotal % 10 !== 0 && !setRound && (
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

                <Consumer>
                  {({ setTotalPayment }) => {
                    return (
                      <div className="continue">
                        <Link
                          to="/wok-of-fame/details"
                          state={{ reserve: reserveStatus }}
                          className="continue-button"
                          onClick={() =>
                            setTotalPayment(
                              setRound ? grandTotal + roundoff : grandTotal
                            )
                          }
                        >
                          Continue
                        </Link>
                      </div>
                    );
                  }}
                </Consumer>
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

  const [count, setCount] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    setCount(qnty);
  }, [false]);

  useEffect(() => {
    if (!initialLoad)
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
    else setInitialLoad(false);
  }, [count]);

  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <img
          className="cart-item-img"
          src={`Images/Menu/${img}.jpg`}
          style={{
            width: 350,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
          alt=""
        />
        <img
          src={`Images/${veg ? "Veg" : "Non"}.png`}
          width={20}
          height={20}
          alt=""
        />
        <h3 className="item-name">{name}</h3>
      </div>
      <div className="cart-item-right">
        <div
          className="btn-group float-right mb-3"
          role="group"
          style={{
            ...(count === 0 && { display: "none" }),
          }}
        >
          <button
            className="btn btn-secondary"
            onClick={async () => {
              setCount((prevVal) => prevVal - 1);
            }}
          >
            -
          </button>
          <div className="btn btn-text">{count}</div>
          <button
            disabled={count >= 10}
            className="btn btn-secondary"
            onClick={async () => {
              setCount((prevVal) => prevVal + 1);
            }}
          >
            +
          </button>
        </div>
        <div className="mt-3">
          <span
            style={{ ...(count > 0 && { display: "none" }) }}
            className="text-secondary h4"
          >
            {`₹${cost}`}
          </span>
          <span
            style={{ ...(count === 0 && { display: "none" }) }}
            className="text-success h4"
          >
            {`₹${cost * count} `}
          </span>
          <span
            style={{ ...(count === 0 && { display: "none" }) }}
            className=""
          >
            ({cost} x {count})
          </span>
        </div>
      </div>
    </div>
  );
}
