import nftstepsimagedarkmode from "../Images/nft-steps-dark-mode-image.png";
import nftstepsimagelightmode from "../Images/nft-steps-light-mode-image.png";
import { useSelector } from "react-redux";

const NFTSteps = () => {
  const { darkMode } = useSelector((state) => state.darkModeSlice);
  // console.log(darkMode);
  return (
    <div className="nft-steps-container">
      <div className="title">
        <h1> With you every step of the way</h1>
      </div>
      <div className="text">
        <p>
          From your first crypto trade to your first NFT purchase, youll have us
          to guide you through the process. No stupid questions. No sleepless
          nights. Have confidence in your crypto.
        </p>
      </div>
      <div className="image">
        {darkMode ? (
          <img src={nftstepsimagelightmode} alt="nft-steps-image" />
        ) : (
          <img src={nftstepsimagedarkmode} alt="nft-steps-image" />
        )}
      </div>
    </div>
  );
};
export default NFTSteps;
