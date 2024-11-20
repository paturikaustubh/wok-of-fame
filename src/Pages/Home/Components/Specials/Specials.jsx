import { useState, useEffect } from "react";

import { Consumer } from "../../../../resources/Context/Context";
import { Link } from "react-router-dom";

function Specials() {
  return (
    <div className="container-fluid py-5 bg-light" id="menu">
      <div className="display-3 text-center">
        <span className="font-weight-light">Today's </span>
        <span className="text-danger font-weight-normal">Specials✨</span>
      </div>
      <div className="row mt-4 text-center py-4">
        <Consumer>
          {(values) => {
            const { menu, updateCart, cart } = values;
            const special_items = menu
              .map((section) =>
                section.items.filter((item) => item.special === true)
              )
              .flat()
              .sort((a, b) => b.veg - a.veg);
            return (
              <>
                {special_items.map((item, indx) => {
                  return (
                    <SpecialItems
                      item={item}
                      key={indx}
                      updateCart={updateCart}
                      cart={cart}
                    />
                  );
                })}
              </>
            );
          }}
        </Consumer>

        <div className="col-12 text-right">
          <h2>
            <Link
              onClick={() => window.scrollTo({ top: 0 })}
              to="menu"
              className="btn btn-danger btn-lg mt-4"
            >
              View Full Menu
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Specials;

function SpecialItems({ item, updateCart, cart }) {
  const [count, setCount] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true);
  const [itemDetails, setItemDetails] = useState({
    name: "",
    img: "",
    cost: 0,
    details: "",
    category: "",
    rating: 0,
    veg: true,
  });

  useEffect(() => {
    if (!initialLoad) {
      updateCart({
        details: itemDetails.details,
        rating: itemDetails.rating,
        veg: itemDetails.veg,
        name: itemDetails.name,
        qnty: count,
        cost: itemDetails.cost,
        category: itemDetails.category,
        img: itemDetails.img,
      });
    } else {
      setItemDetails(
        cart.map((cartEle) => {
          if (cartEle.name === item.name) {
            setCount(cartEle.qnty);
            return cartEle;
          }
        })[0] ?? item
      );

      setInitialLoad(false);
    }
  }, [count]);

  return (
    <div className="col-md-6 col-lg-4 col-12 mb-4">
      <div className="card shadow h-100">
        <img
          loading="lazy"
          src={`Images/Menu/${itemDetails.img}.jpg`}
          alt={itemDetails.title}
          className="card-img-top"
          style={{ width: "100%", aspectRatio: "16/9" }}
        />
        <div className="card-body">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ gap: "0.5em" }}
          >
            <img
              loading="lazy"
              src={`Images/${itemDetails.veg ? "Veg" : "Non"}.png`}
              alt=""
              width={25}
              height={25}
            />
            <h2 className="card-title m-0">{itemDetails.name} </h2>
          </div>
          <p className="text-justify text-secondary mt-2">
            {itemDetails.details}
          </p>
        </div>

        <div className="card-footer text-right">
          <div className="float-left mt-2 text-dark">
            <span style={{ ...(count > 0 && { display: "none" }) }}>
              {`₹${itemDetails.cost}`}
            </span>
            <span
              style={{ ...(count === 0 && { display: "none" }) }}
              className="text-success h4"
            >
              {`₹${itemDetails.cost * count} `}
            </span>
            <span style={{ ...(count === 0 && { display: "none" }) }}>
              {`(${itemDetails.cost} x ${count})`}
            </span>
          </div>
          <button
            style={{
              ...(count > 0 && { display: "none" }),
              width: 130,
            }}
            className="btn btn-lg btn-dark"
            onClick={async () => {
              setCount((count) => count + 1);
            }}
          >
            + 🍽️
          </button>
          <div
            className="btn-group"
            role="group"
            style={{ ...(count === 0 && { display: "none" }) }}
          >
            <button
              className="btn btn-lg btn-dark"
              onClick={async () => {
                setCount((count) => count - 1);
              }}
            >
              -
            </button>
            <div className="btn btn-lg">{count}</div>
            <button
              disabled={count >= 10}
              className="btn btn-lg btn-dark"
              onClick={async () => {
                setCount((count) => count + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
