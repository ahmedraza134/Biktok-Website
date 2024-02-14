import tabcontainermobileimage from "../Images/tab-container-mobile-image.png";

const TabComponent = () => {
  return (
    <div className="tab-container">
      <div className="tab-left-side">
        <div className="tab-container-img">
        <img
          src={tabcontainermobileimage}
          alt="mobile-image"
          width={399}
          height={830}
        />
        </div>
      </div>
      <div className="tab-right-side">
        <div className="tab-container-title">
          <h1>One app. Unlimited possibilities.</h1>
        </div>
        <div className="toggle-tabs">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
              <span className="nav-tab-one">  Lite</span>
              </button>
              <button
                className="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Web3
              </button>
              <button
                className="nav-link"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                Pro
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <p className="tab-content-text">
               New to crypto? No problem. Buy crypto for as little as $5 in a
                tap, and grow your skills as you go.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <p  className="tab-content-text">
               New to crypto? No problem. Buy crypto for as little as $5 in a
                tap, and grow your skills as you go.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <p  className="tab-content-text">
                New to crypto? No problem. Buy crypto for as little as $5 in a
                tap, and grow your skills as you go.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
