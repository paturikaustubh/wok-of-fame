function Body() {
  return (
    <div className="container-fluid py-5 bg-danger">
      <div className="row">
        <div className="col-md-12 col-lg-5 col-12 text-center">
          <img
            loading="lazy"
            src="https://media.istockphoto.com/id/1038108608/photo/bowls-with-chow-mein.jpg?s=612x612&w=0&k=20&c=BioejbjglNwOp6yeRnOAcPCHuK5Ixr8cQJCNFQDX5oI="
            alt="Image"
            width="100%"
            className="rounded logo"
          />

          {/* <img loading="lazy"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgyfr9lgnllBvypjVyM2hTZf_zvfT9Xo1L-w&usqp=CAU"
            width="150"
            height={"150"}
            alt=""
          /> */}
        </div>
        <div className="col-md-12 col-lg-7 col-12 py-4">
          <div className="text-light display-4 font-weight-light">
            Welcome to
          </div>
          <p className="display-2 font-weight-bold text-light main-title">
            Wok Of Fame
          </p>
          <div className="text-light">
            Experience the taste of pure Chinese.
          </div>
          <div className="text-light">
            We provide the best quality Chinese food with great taste in whole
            of Mumbai.
          </div>
          <div className="text-light">
            Order online or visit our{" "}
            <a
              href="https://goo.gl/maps/jdxpoXjhggSSsEG97"
              className="text-light"
            >
              <u>dine-in</u>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
