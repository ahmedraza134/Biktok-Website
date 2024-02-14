import footerlogo from "../Images/footer-logo.png";
import footerqrcode from "../Images/footerqrcode.png";
import footerbottomiconone from "../Images/footer-bottom-icon-one.png";
import footerbottomicontwo from "../Images/footer-bottom-icon-two.png";
import footerbottomiconthree from "../Images/footer-bottom-icon-three.png";
import footerbottomiconfour from "../Images/footer-bottom-icon-four.png";
import footerbottomiconfive from "../Images/footer-bottom-icon-five.png";
import footerbottomiconsix from "../Images/footer-bottom-icon-six.png";
import footerbottomiconseven from "../Images/footer-bottom-icon-seven.png";
import footerbottomiconeight from "../Images/footer-bottom-icon-eight.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
      <div className="footer-logo">
        <img src={footerlogo} alt="footer-logo" />
      </div>
      <div className="footer-web-name">
        <span>©2023 BITTOK.COM</span>
      </div>
      <div className="footer-btn">
        <button>English/USD</button>
      </div>
      </div>
      <div className="footer-columns-container">
        <div className="footer-column-one">
          <h1>More about BITTOK</h1>
          <span>About Us</span>
          <span>Career</span>
          <span>Contact</span>
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Disclosure</span>
          <span>Whistleblower notice</span>
          <span>Law enforcement</span>
          <span>OKX app</span>
          <span>Cookie preferences</span>
        </div>
        <div className="footer-column-two">
          <h1>Products</h1>
          <span>Buy crypto</span>
          <span>P2P trading</span>
          <span>Convert</span>
          <span>Trade</span>
          <span>Earn</span>
          <span>OKTC</span>
          <span>OKX Wallet</span>
          <span>Web3 Marketplace</span>
          <span>Crypto calculator</span>
          <span>Trading bots</span>
          <span>All cryptocurrencies</span>
          <span>Learn</span>
          <span>TradingView</span>
        </div>
        <div className="footer-column-three">
          <h1>Services</h1>
          <span>Affiliate</span>
          <span>V5 API</span>
          <span>Historical market data</span>
          <span>Fee schedule</span>
          <span>Listing application</span>
          <span>P2P Advertiser Application</span>
          <h1 id="footer-support-title">Support</h1>
          <span>Support center</span>
          <span>Channel verification</span>
          <span>Announcements</span>
          <span>Connect with OKX</span>
        </div>
        <div className="footer-column-four">
          <h1>Buy Crypto</h1>
          <span>Buy USDT</span>
          <span>Buy Bitcoin</span>
          <span>Buy Ethereum</span>
          <span>Buy ADA</span>
          <span>Buy Solana</span>
          <span>Buy MATIC</span>
          <span>Buy Litecoin</span>
          <span>Buy XRP</span>
          <h1 id="footer-calculator-title">Crypto Calculator</h1>
          <span>BTC to USD</span>
          <span>ETH to USD</span>
          <span>SOL to USD</span>
          <span>XRP to USD</span>
        </div>
        <div className="footer-column-five">
          <h1>Trade</h1>
          <span>BTC USDT</span>
          <span>ETH USDT</span>
          <span>MATIC USDT</span>
          <span>LTC USDT</span>
          <span>SOL USDT</span>
          <span>XRP USDT</span>
          <span>Bitcoin price</span>
          <span>Ethereum price</span>
          <span>Cardano price</span>
          <span>Solana Price</span>
          <span>XRP Price</span>
        </div>
        <div className="footer-column-six">
          <h1>
            Trade on the go <br /> with BITTOK
          </h1>
          <button>Register</button>
          <img src={footerqrcode} alt="qr-code" />
        </div>
      </div>
      <div className="footer-bottom">
        <h1>Community</h1>
        <div className="footer-bottom-icons">
          <img
            src={footerbottomiconone}
            alt="bottom-icon-one"
            width={12}
            height={11}
          />
          <img
            src={footerbottomicontwo}
            alt="bottom-icon-two"
            width={13}
            height={15}
          />
          <img
            src={footerbottomiconthree}
            alt="bottom-icon-three"
            width={14}
            height={14}
          />
          <img
            src={footerbottomiconfour}
            alt="bottom-icon-four"
            width={14}
            height={10}
          />
          <img
            src={footerbottomiconfive}
            alt="bottom-icon-five"
            width={15}
            height={13}
          />
          <img
            src={footerbottomiconsix}
            alt="bottom-icon-six"
            width={14}
            height={14}
          />
          <img
            src={footerbottomiconseven}
            alt="bottom-icon-seven"
            width={14}
            height={14}
          />
          <img
            src={footerbottomiconeight}
            alt="bottom-icon-eight"
            width={15}
            height={11}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
