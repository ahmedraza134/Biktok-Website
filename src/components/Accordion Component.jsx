import { useState } from "react";


const AccordionComponent = () => {
  const [toggleStates, setToggleStates] = useState({
    item1: true,
    item2: false,
    item3: false,
    item4: false,
  });

  // Function to toggle the state of a particular accordion item
  const toggleItem = (itemName) => {
    setToggleStates((prevState) => ({
      ...prevState,
      [itemName]: !prevState[itemName],
    }));
  };

    return (
      <>
        <div className="questions-container">
          <div className="questions-title">
            <h1>Got Questions</h1>
          </div>
  
          <div className="accordion" id="accordionExample">
            {/* Accordion Item 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  onClick={() => toggleItem("item1")}
                >
                  What products does BITTOK provide?
                  <div className="plus-icon-container">
                  <div className="plus-icon">
                    {toggleStates.item1 ? (
                      <i className="bi bi-dash-lg"></i>
                    ) : (
                      <i className="bi bi-plus"></i>
                    )}
                  </div>
                </div>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Delectus inventore, nostrum ad veritatis quam eos quidem soluta
                  illo non animi perferendis, at adipisci laudantium architecto
                  obcaecati velit dignissimos dolore exercitationem?
                </div>
              </div>
            </div>
  
            {/* Accordion Item 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  onClick={() => toggleItem("item2")}
                >
                  What products does BITTOK provide?
                  <div className="plus-icon-container">
                  <div className="plus-icon">
                    {toggleStates.item2 ? (
                      <i className="bi bi-dash-lg"></i>
                    ) : (
                      <i className="bi bi-plus"></i>
                    )}
                  </div>
                </div>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolorum et aspernatur, quo tempore numquam iste voluptas debitis
                  cumque velit voluptatem labore sequi porro ipsum eaque nostrum
                  magni ex libero suscipit.
                </div>
              </div>
            </div>
  
            {/* Accordion Item 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  onClick={() => toggleItem("item3")}
                >
                  What products does BITTOK provide?
                  <div className="plus-icon-container">
                  <div className="plus-icon">
                    {toggleStates.item3 ? (
                      <i className="bi bi-dash-lg"></i>
                    ) : (
                      <i className="bi bi-plus"></i>
                    )}
                  </div>
                </div>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae nesciunt quaerat, sunt, eveniet soluta incidunt
                  doloremque consectetur sequi quas enim asperiores architecto
                  debitis eaque, corrupti harum expedita aspernatur hic obcaecati.
                </div>
              </div>
            </div>
  
            {/* Accordion Item 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                  onClick={() => toggleItem("item4")}
                >
                  What products does BITTOK provide?
                  <div className="plus-icon-container">
                  <div className="plus-icon">
                    {toggleStates.item4 ? (
                      <i className="bi bi-dash-lg"></i>
                    ) : (
                      <i className="bi bi-plus"></i>
                    )}
                  </div>
                </div>
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, nemo blanditiis. Eaque vero fuga iure odio aspernatur
                  quas, officiis voluptatum harum sapiente soluta, dolore quis
                  repudiandae rerum! Debitis, dolor quia?
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default AccordionComponent
  