import "./intro.css";
import introimg from "../../assets/img/intro_desktop.jpg";

function Intro() {
  return (
    <section className="intro">
      <div className="intro-content">
        <h1>
          تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌ صرفه‌تر با سوپراپلیکیشن اسنپ!
        </h1>
        <p>
          از درخواست خدرو گرفتهتا سفارش غذا،خرید سوپر مارکتی،خرید بلیط
          سفر،مشاوره پزشکی و روانشناسی،رزرو هتل و ...را می توانیدبا سوپر
          اپلیکیشن اسنپ انجام دهید.
        </p>
        <div className="intro-input">
          <form>
            <div className="input-link-send">
              <input
                type="number"
                placeholder="09xxxxx9287"
                color="rgb(114, 115, 116)"
                auto-corret=""
              />
              <button id="link-butten" type="submit">
                ارسال لینک
              </button>
            </div>
            <button id="application-link" type="button">
              ورود به وب اپلیکیشن اسنپ
            </button>
          </form>
        </div>
      </div>
      <div
        className="intro-img"
        style={{
          backgroundImage: `url("${introimg}")`,
        }}
      ></div>
    </section>
  );
}
export default Intro;
