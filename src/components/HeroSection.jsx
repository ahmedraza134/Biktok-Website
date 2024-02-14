import heroleftimgonedarkmode from "../Images/hero-sec-left-img-one-dark-mode.png";
import heroleftimgtwodarkmode from "../Images/hero-sec-left-img-two-dark-mode.png";
import heroleftimgonelightmode from "../Images/hero-sec-left-img-one-light-mode.png";
import heroleftimgtwolightmode from "../Images/hero-sec-left-img-two-light-mode.png";
import heroleftimgthree from "../Images/hero-sec-left-img-three.png";
import herorightimg from "../Images/hero-sec-iphone.png";
import { useSelector } from "react-redux";

const HeroSection = () => {
  const { darkMode } = useSelector((state) => state.darkModeSlice);
  // console.log("hero", darkMode);
  return (
    <div className="hero-container">
      <div className="hero-sec-left">
        <div className="hero-sec-title">
          <h1>
            Faster, better, stronger <br /> than your average <br /> crypto
            exchange
          </h1>
        </div>
        <div className="hero-sec-input">
          <input type="text" placeholder="Email/Phone" />
          <button>Try Brickon</button>
        </div>
        <div className="hero-sec-left-images">
          {darkMode ? (
             <img
             src={heroleftimgonelightmode}
             alt="hero-logo-one"
             width={136}
             height={58}
             className="hero-sec-left-img"
           /> 
          ) : (
            <img
            src={heroleftimgonedarkmode}
            alt="hero-logo-one"
            width={136}
            height={58}
            className="hero-sec-left-img"
          /> 
          )}
         
         {darkMode ? (
             <img
             src={heroleftimgtwolightmode}
             alt="hero-logo-one"
             width={136}
             height={58}
             className="hero-sec-left-img"
           /> 
          ) : (
            <img
            src={heroleftimgtwodarkmode}
            alt="hero-logo-one"
            width={136}
            height={58}
            className="hero-sec-left-img"
          /> 
          )}
          <img
            src={heroleftimgthree}
            alt="hero-logo-three"
            width={90}
            height={90}
            className="hero-sec-left-img"
          />
        </div>
      </div>
      <div className="hero-sec-right">
        <img src={herorightimg} alt="iphone image" width={351} height={728} />
      </div>
    </div>
  );
};

export default HeroSection;
