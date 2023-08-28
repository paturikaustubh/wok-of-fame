import { useEffect, useState } from "react";
import { Consumer } from "../../resources/Context/Context";
import Dialog from "../../components/Dialog/Dialog";

import { Link, useLocation } from "react-router-dom";

export default function Menu() {
  const reserve_state = useLocation().state ?? false;
  const [searchValue, setSearchValue] = useState("");
  const [filterArr, setFilterArr] = useState([]);
  const [showSections, setShowSections] = useState(false);

  const filterButtons = ["Veg🥬", "Non-Veg🥩"];

  const handleFilterClick =
    (setLoading) =>
    ({ target }) => {
      setLoading(true);
      if (filterArr.includes(target.value)) {
        filterArr.splice(filterArr.indexOf(target.value), 1);
        setFilterArr((prevVal) => [...prevVal]);
        setLoading(false);
      } else {
        setFilterArr((prevVal) => [...prevVal, target.value]);
        setLoading(false);
      }
    };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") setShowSections(false);
    });
  }, [false]);

  return (
    <Consumer>
      {({ updateCart, menu, cart, setLoading, loading }) => {
        return (
          <div className="">
            <div className="container-fluid">
              <div className="container border mt-5 p-4 rounded bg-light">
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
                      onClick={() => updateCart({})}
                    >
                      Cancel
                    </Link>
                  )}
                </div>
                <div className="row align-items-baseline mt-2">
                  <input
                    type="search"
                    placeholder="Search items in Menu"
                    className="form-input"
                    onInput={({ target }) => setSearchValue(target.value)}
                  />
                </div>
                <div style={{ display: "flex", gap: 12, marginTop: 30 }}>
                  {filterButtons.map((element, indx) => {
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
                  })}
                </div>
                <hr />
                <div className="mt-3">
                  {menu.map((element, indx) => {
                    return (
                      <MenuList
                        cart={cart}
                        element={element}
                        key={indx}
                        updateCart={updateCart}
                        searchValue={searchValue}
                        menu={menu}
                        filterArr={filterArr}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div
              style={{
                position: "sticky",
                bottom: 50,
                right: 50,
                left: 50,
                display: "flex",
                justifyContent: "center",
                gap: "3em",
                zIndex: 1,
                marginTop: 10,
                marginBottom: 30,
              }}
            >
              <button
                className="rounded-full rounded btn-lg btn-warning"
                style={{
                  outline: "none",
                }}
                id="section-btton"
                onClick={() => setShowSections((prevVal) => !prevVal)}
              >
                Sections📃
              </button>
              {reserve_state && cart.length > 0 && (
                <Link
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
          </div>
        );
      }}
    </Consumer>
  );
}

function MenuList({
  element,
  updateCart,
  indx,
  cart,
  searchValue,
  menu,
  filterArr,
}) {
  const { title, items } = element;
  const [menuListaArr, setMenuListaArr] = useState([]);

  useEffect(() => {
    setMenuListaArr(() => {
      return items
        .filter(({ name }) =>
          name.toLowerCase().includes(searchValue.toLowerCase())
        )
        .filter((element) => {
          if (
            filterArr.length === 2 ||
            filterArr.length === 0 ||
            element.category === "baverage" ||
            element.category === "dessert"
          )
            return element;
          else if (filterArr.length === 1) {
            if (filterArr.includes("veg🥬")) return element.veg;
            else return !element.veg;
          }
        });
    });
  }, [searchValue, filterArr]);

  return (
    <>
      {menuListaArr.length > 0 ? (
        <div
          className="bg-white pb-4 pb-2 mb-5"
          key={indx}
          id={title.toLowerCase().split(" ").join("-").slice(0, -2)}
        >
          <p
            className="font-weight-bold py-1 text-white px-4 rounded"
            style={{
              background: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(4px)",
              position: "sticky",
              top: 85,
              zIndex: 1,
              fontSize: "3rem",
            }}
          >
            {title}
          </p>
          {menuListaArr.map((element, index) => {
            return (
              <MenuItems
                key={index}
                element={element}
                updateCart={updateCart}
                cart={cart}
                menu={menu}
                filterArr={filterArr}
              />
            );
          })}
        </div>
      ) : (
        <div
          className="bg-white pb-4 pb-2 mb-5"
          key={indx}
          style={{
            ...(menuListaArr.length <= 0 && { display: "none" }),
          }}
        >
          <p
            className="display-4 font-weight-bold py-1 text-white px-4 rounded"
            style={{
              background: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(4px)",
              position: "sticky",
              top: 5,
              zIndex: 1,
            }}
          >
            {title}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 4,
            }}
          >
            No result found
          </div>
        </div>
      )}
    </>
  );
}

function MenuItems({ element, updateCart, cart, filterArr }) {
  const [itemDetails, setItemDetails] = useState({
    name: "",
    img: "",
    cost: 0,
    details: "",
    category: "",
    rating: 0,
    veg: true,
  });
  const [count, setCount] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true);
  const [showImg, setShowImg] = useState(false);

  useEffect(() => {
    setItemDetails(element);
    const blurDivs = document.querySelectorAll(".blur-div");
    blurDivs.forEach((div) => {
      const img = div.querySelector("img");
      if (img.complete) setShowImg(true);
      else img.addEventListener("load", setShowImg(true));
    });
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
          if (cartEle.name === element.name) {
            setCount(cartEle.qnty);
            return cartEle;
          } else setCount(0);
        })[0] ?? element
      );
      setInitialLoad(false);
    }
  }, [count]);

  return (
    <div className="border border-top-0 border-right-0 border-left-0 py-4 px-4 d-flex flex-column flex-lg-row">
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
        src={itemDetails.img ? `Images/Menu/${itemDetails.img}.jpg` : ""}
        alt={itemDetails.name}
        style={{
          maxWidth: "20rem",
          aspectRatio: "16/9",
          transitionDuration: "200ms",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      {/* </div> */}
      <div
        className="d-flex flex-lg-row flex-column  align-items-start w-100 px-4 py-2"
        style={{ justifyContent: "space-between" }}
      >
        <div className="d-flex flex-column">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              alignItems: "baseline",
            }}
          >
            {itemDetails.category !== "dessert" &&
              itemDetails.category !== "baverage" && (
                <img
                  src={itemDetails.veg ? "Images/Veg.png" : "Images/Non.png"}
                  alt={itemDetails.veg ? "Veg" : "Non-Veg"}
                  width={20}
                  height={20}
                />
              )}
            <p className="h3">{itemDetails.name}</p>
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
            <span className="ml-1 mb-2">{itemDetails.rating}</span>
          </div>
          <p className="font-weight-normal text-secondary w-100">
            {itemDetails.details}
          </p>
          <h5 className="mt-4 font-weight-normal">🧑🏻‍🦱 {itemDetails.serves}</h5>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <button
            style={{
              ...(count > 0 && { display: "none" }),
              width: "130px",
            }}
            className="btn btn-lg btn-dark"
            onClick={async () => {
              setCount((prevVal) => prevVal + 1);
            }}
          >
            + 🍽️
          </button>
          <div
            className="btn-group float-right mb-3"
            role="group"
            style={{
              ...(count === 0 && { display: "none" }),
            }}
          >
            <button
              className="btn btn-lg btn-dark"
              onClick={async () => {
                setCount((prevVal) => prevVal - 1);
              }}
            >
              -
            </button>
            <div className="btn btn-lg btn-text">{count}</div>
            <button
              disabled={count >= 10}
              className="btn btn-lg btn-dark"
              onClick={async () => {
                setCount((prevVal) => prevVal + 1);
              }}
            >
              +
            </button>
          </div>
          <div className="mt-3" style={{ minWidth: "130px" }}>
            <span
              style={{ ...(count > 0 && { display: "none" }) }}
              className="text-secondary h4"
            >
              {`₹${itemDetails.cost}`}
            </span>
            <span
              style={{ ...(count === 0 && { display: "none" }) }}
              className="text-success h4"
            >
              {`₹${itemDetails.cost * count} `}
            </span>
            <span
              style={{ ...(count === 0 && { display: "none" }) }}
              className=""
            >
              ({itemDetails.cost} x {count})
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
                className="selection-button"
                onClick={() => {
                  setShowSections(false);
                  element.scrollIntoView({ behavior: "smooth" });
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
