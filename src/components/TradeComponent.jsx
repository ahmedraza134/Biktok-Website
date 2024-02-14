import tabletimage from "../Images/TradeComponentImage.png";

const TradeComponent = () => {

  return (
    <div className="trade-container">
      <div>
        <h1>Trade like a pro</h1>
      </div>
      <div>
        <p>
          Get the lowest fees, fastest transactions, powerful APIs, and more.
        </p>
      </div>
      <div className="trade-tablet-image">
        <img src={tabletimage} alt="stats-tablet-image" />
      </div>
    </div>
  );
};

export default TradeComponent;
