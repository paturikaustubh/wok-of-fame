function Gallery() {
  const slideDetails = [
    {
      img: "Images/wok-of-fame.webp",
      title: "Mini Bar",
      desc: "Clear your mind with friends with a beach view",
      active: "active",
    },
    {
      img: "Images/Interior.jpg",
      title: "Elegant View",
      desc: "Have your favourite meal with a pleasent view",
      active: "",
    },
    {
      img: "Images/Buffet.jpg",
      title: "Couple Time",
      desc: "For the special couple",
      active: "",
    },
  ];

  return (
    <div className="container text-center py-5">
      <p className="display-2">
        <span className="font-weight-light">Image</span>{" "}
        <span className="text-danger font-weight-normal">Gallery🖼️</span>
      </p>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {slideDetails.map((image, indx) => {
            return (
              <div className={`carousel-item ${image.active}`} key={indx}>
                <img
                  loading="lazy"
                  className="d-block w-100"
                  src={image.img}
                  alt={image.title}
                />
                <div className="carousel-caption d-md-flex d-none">
                  <div
                    className="pt-3 pb-1 w-100"
                    style={{
                      backgroundColor: "rgba(8, 8, 8, 0.5)",
                      backdropFilter: "blur(2px)",
                    }}
                  >
                    <h5>{image.title}</h5>
                    <p>{image.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Gallery;
