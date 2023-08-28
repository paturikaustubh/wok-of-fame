function Footer() {
  return (
    <footer>
      <div
        className="container-fluid text-light text-center pt-5"
        style={{ backgroundColor: "black" }}
      >
        <div className="row align-items-center mb-5 mt-2">
          <div className="col-12 display-4 mb-2">Visit us here📍</div>
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d174523.69704966169!2d72.74097884019669!3d18.90186459898104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfe09e157a9d%3A0x40c9eae8541ab92c!2sWok%20Of%20Fame!5e0!3m2!1sen!2sin!4v1680453306751!5m2!1sen!2sin"
              width="80%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="row align-items-center gap-1">
          <div className="col-md-4 col-12 my-sm-0 my-md-0 font-weight-light">
            <p>
              We are open from 6:00 AM to 12:30 AM. No delivery orders are taken
              against the timings.
            </p>
            <p>We serve both Veg and Non-Veg</p>
          </div>
          <div className="col-md-4 col-12 my-sm-5 my-md-0 ">
            <p className="lead">
              We even accept party orders anywhere in and around Mumbai
            </p>
            <button className="btn btn-outline-light btn-lg">
              📞Contact Us
            </button>
          </div>
          <div className="col-md-4 col-12 my-sm-5 my-md-0">
            <h5 className="text-info">About Us</h5>
            <div>
              <a href="#" className="text-light">
                Know More
              </a>
            </div>
            <div>
              <a href="#" className="text-light">
                Blog
              </a>
            </div>
            <div>
              <a href="#" className="text-light">
                Events
              </a>
            </div>
            <div>
              <a href="#" className="text-light">
                Social Media
              </a>
            </div>
          </div>
        </div>

        <div className="row my-5 pt-1">
          <div className="col-12">
            <p>
              All the images shown above are taken by a professional and they DO
              NOT represent the actual dish you get.
            </p>
          </div>
        </div>
        <div className="row">
          <p className="col-12 text-secondary cpyright">
            Copyright ©Wok of Fame
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
