import { useEffect, useState, useContext, Fragment } from "react";
import { Consumer, ConsumerEffect } from "../../resources/Context/Context";
import Dialog from "../../components/Dialog/Dialog";

import { Link, useLocation } from "react-router-dom";

export default function Menu() {
  const { menu } = useContext(ConsumerEffect);
  const reserve_state = useLocation().state ?? false;

  const [searchValue, setSearchValue] = useState("");
  // const [filterArr, setFilterArr] = useState([]);
  const [showSections, setShowSections] = useState(false);

  useEffect(() => window.scrollTo({ top: 0 }), [false]);

  const filterButtons = ["Veg🥬", "Non-Veg🥩"];

  // const handleFilterClick =
  //   (setLoading) =>
  //   ({ target }) => {
  //     setLoading(true);
  //     if (filterArr.includes(target.value)) {
  //       filterArr.splice(filterArr.indexOf(target.value), 1);
  //       setFilterArr((prevVal) => [...prevVal]);
  //       setLoading(false);
  //     } else {
  //       setFilterArr((prevVal) => [...prevVal, target.value]);
  //       setLoading(false);
  //     }
  //   };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") setShowSections(false);
    });
  }, [false]);

  return (
    <Consumer>
      {({ updateCart, cart }) => {
        return (
          <Fragment>
            <div className="container-fluid">
              <div className="container border mt-5 p-lg-4 p-1 rounded bg-light">
                <div className="row align-items-center d-flex justify-content-between">
                  <p
                    className="display-3 col-4 text-danger"
                    style={{
                      fontWeight: 500,
                    }}
                  >
                    Menu
                  </p>
                  {reserve_state && (
                    <Link
                      to="/wok-of-fame/reserve"
                      className="btn btn-danger btn-lg"
                      onClick={() => {
                        updateCart({});
                        window.scrollTo({ top: 0 });
                      }}
                    >
                      Cancel
                    </Link>
                  )}
                </div>
                <input
                  type="search"
                  placeholder="Search items in Menu"
                  className="form-input w-100"
                  onInput={({ target }) => setSearchValue(target.value)}
                />
                <div style={{ display: "flex", gap: 12, marginTop: 30 }}>
                  {/* {filterButtons.map((element, indx) => {
                    return (
                      <button
                        key={indx}
                        onClick={handleFilterClick(setLoading)}
                        value={element.toLowerCase().split("-").join("")}
                        className="filter-button"
                        style={{
                          backgroundColor: "transparent",
                          borderRadius: 4,
                          borderWidth: "20px",
                          borderColor: "black",
                          ...(filterArr.includes(
                            element.toLowerCase().split("-").join("")
                          ) && {
                            backgroundColor: "lightgray",
                            color: "black",
                          }),
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        disabled
                      >
                        {element}
                      </button>
                    );
                  })} */}
                </div>
                <hr />
                <div className="mt-3">
                  {menu.map((element, indx) => {
                    const { title, items } = element;
                    return (
                      <div
                        key={indx}
                        style={{ marginBottom: "3rem" }}
                        id={title
                          .toLowerCase()
                          .slice(0, -2)
                          .split(" ")
                          .join("-")}
                      >
                        <div
                          className="py-1 text-white px-4 rounded menu-item-title"
                          style={{
                            background: "rgba(0, 0, 0, 0.7)",
                            backdropFilter: "blur(4px)",
                            position: "sticky",
                            zIndex: 1,
                            color: "white",
                            fontWeight: 500,
                            ...(items.length === 0 && { display: "none" }),
                          }}
                        >
                          {title}
                        </div>
                        {items
                          .filter(({ name }) =>
                            name
                              .toLowerCase()
                              .includes(searchValue.toLowerCase())
                          )
                          .map((element, index) => {
                            return (
                              <MenuItems
                                element={element}
                                key={index}
                                searchValue={searchValue}
                              />
                            );
                          })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div
              style={{
                position: "sticky",
                bottom: 50,
                display: "flex",
                justifyContent: "center",
                gap: "3em",
                zIndex: 1,
                marginTop: 10,
                marginBottom: 30,
              }}
            >
              <button
                className="rounded-full rounded btn-warning"
                style={{
                  outline: "none",
                }}
                id="section-btn"
                onClick={() => setShowSections((prevVal) => !prevVal)}
              >
                Sections📃
              </button>
              {reserve_state && cart.length > 0 && (
                <Link
                  onClick={() => window.scrollTo({ top: 0 })}
                  to={
                    cart.length > 0
                      ? "/wok-of-fame/plate"
                      : "/wok-of-fame/details"
                  }
                  className="rounded-full rounded btn-lg btn btn-success"
                  style={{
                    outline: "none",
                  }}
                  state={{ reserve: true }}
                >
                  Continue Reservation
                </Link>
              )}
            </div>
            <SectionSection
              showSection={showSections}
              setShowSections={setShowSections}
            />
          </Fragment>
        );
      }}
    </Consumer>
  );
}

function MenuItems({ element, searchValue }) {
  const { cart, updateCart } = useContext(ConsumerEffect);

  let cartCount = cart.filter((item) => {
    if (item.name.includes(element.name)) return item.qnty;
  })[0];
  cartCount = cartCount ? cartCount.qnty : 0;
  const [count, setCount] = useState(cartCount);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (!initialLoad) {
      updateCart({
        details: element.details,
        rating: element.rating,
        veg: element.veg,
        name: element.name,
        qnty: count,
        cost: element.cost,
        category: element.category,
        img: element.img,
      });
    } else {
      setInitialLoad(false);
    }
  }, [count]);

  return (
    <div
      className="border border-top-0 border-right-0 border-left-0 py-lg-4 py-2 px-lg-3 px-1 d-flex flex-column flex-lg-row"
      style={{
        ...(searchValue.length > 0 &&
          element.name !== searchValue && { display: "none" }),
      }}
    >
      {/* <div
        className="blur-div"
        style={{
          width: "75%",
          aspectRatio: "16/9",
          backgroundImage: itemDetails.img
            ? `url(Images/Menu/${itemDetails.img}-small.jpg)`
            : "",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backdropFilter: "blur(30px)",
          borderBottomLeftRadius: "8px",
          borderTopLeftRadius: "8px",
        }}
      > */}
      <img
        loading="lazy"
        src={element.img ? `Images/Menu/${element.img}.jpg` : ""}
        alt={element.name}
        style={{
          maxWidth: "20em",
          minWidth: "10%",
          aspectRatio: "16/9",
          transitionDuration: "200ms",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      {/* </div> */}
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
            {element.category !== "dessert" &&
              element.category !== "baverage" && (
                <img
                  src={element.veg ? "Images/Veg.png" : "Images/Non.png"}
                  alt={element.veg ? "Veg" : "Non-Veg"}
                  width={20}
                  height={20}
                />
              )}
            <p className="item-name">{element.name}</p>
          </div>
          <div className="d-flex align-items-baseline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              style={{
                fill: "#FAAF00",
              }}
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <span>{element.rating}</span>
          </div>
          <p className="font-weight-normal text-secondary w-100 item-desc">
            {element.details}
          </p>
          <h5 className="font-weight-normal item-serves">
            🧑🏻‍🦱 {element.serves}
          </h5>
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
              {`₹${element.cost}`}
            </span>
            <span
              style={{ ...(cartCount === 0 && { display: "none" }) }}
              className="text-success item-cost-big"
            >
              {`₹${element.cost * cartCount} `}
            </span>
            <span
              style={{ ...(cartCount === 0 && { display: "none" }) }}
              className=""
            >
              ({element.cost} x {cartCount})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionSection({ showSection, setShowSections }) {
  const buttons = [
    {
      name: "Starters🍲",
      id: "starters",
    },
    {
      name: "Main Course🍛",
      id: "main-course",
    },
    {
      name: "Desserts🍨",
      id: "desserts",
    },
    {
      name: "Baverages☕",
      id: "baverage",
    },
  ];

  return (
    <Dialog
      title={"Sections"}
      show={showSection}
      setShow={setShowSections}
      content={
        <div className="nav-buttons">
          {buttons.map(({ name, id }, indx) => {
            const element = document.getElementById(`${id}`);
            return (
              <button
                className="section-button"
                onClick={() => {
                  setShowSections(false);

                  // Get the position of the element
                  const elementPosition =
                    element.getBoundingClientRect().top + window.scrollY;

                  // Calculate the offset (e.g., -100px for negative padding effect)
                  const offset = -84; // adjust this value as needed

                  // Scroll to the new position with the offset
                  window.scrollTo({
                    top: elementPosition + offset,
                    behavior: "smooth",
                  });
                }}
                key={indx}
              >
                {name}
              </button>
            );
          })}
        </div>
      }
    />
  );
}
