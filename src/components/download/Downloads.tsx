import "./Downloads.css";
import google from "../../assets/img/google-play-badge.png";
import bazaar from "../../assets/img/bazaar.png";
import snappweb from "../../assets/img/snapp-pwa.png";
import sibapp from "../../assets/img/sibapp-badge-white.png";
import iApps from "../../assets/img/iApps.png";

function Downloads() {
  return (
    <section>
      <section id="section2">
        <a
          href="https://redirect.appmetrica.yandex.com/serve/1036046929106097450?campaign=GooglePlay"
          className="google-like-snapp"
        >
          <img className="dawnload" src={google} alt="" />
        </a>
        <a
          href="https://redirect.appmetrica.yandex.com/serve/243413381082522868?campaign=CafeBazaar"
          className="bazar-link-snapp"
        >
          <img className="dawnload" src={bazaar} alt="" />
        </a>
        <a
          href="https://app.snapp.taxi/pre-ride?utm_source=website&utm_medium=webapp-button"
          className="web-link-snapp"
        >
          <img className="dawnload" src={snappweb} alt="" />
        </a>
        <a href="https://sibapp.com/applications/snapp">
          <img className="dawnload" src={sibapp} alt="" />
        </a>
        <a href="https://app.iapps.ir/i/191622396">
          <img className="dawnload" src={iApps} alt="" />
        </a>
      </section>
    </section>
  );
}

export default Downloads;
